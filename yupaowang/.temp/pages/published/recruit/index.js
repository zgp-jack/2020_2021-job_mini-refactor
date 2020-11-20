import Nerv from "nervjs";
import Taro, { stopPullDownRefresh as _stopPullDownRefresh, hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading, showModal as _showModal, makePhoneCall as _makePhoneCall, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Text, Image, Block, ScrollView } from '@tarojs/components';
import { useSelector } from "@tarojs/redux-h5";
import HeaderList from './config';
import { userGetPublishedRecruitLists, userChangeRecruitStatus, jobUpdateTopStatusAction } from "../../../utils/request/index";
import classnames from 'classnames';
import Nodata from "../../../components/nodata/index";
import Tabbar from "../../../components/tabbar/index";
import Auth from "../../../components/auth/index";
import './index.scss';
import { IMGCDNURL, SERVERPHONE } from "../../../config/index";
import Msg from "../../../utils/msg/index";
export default class PublishedRecruit extends Taro.Component {
  config = {
    navigationBarTitleText: '我的招工信息',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 当前高亮key
    const [id, setId] = Taro.useState(HeaderList[0].id);
    // 是否还有下一页
    const [more, setMore] = Taro.useState(true);
    // 数据加载中
    const [loading, setLoading] = Taro.useState(false);
    // 是否下拉刷新
    const [refresh, setRefresh] = Taro.useState(false);
    // 已发布招工列表
    const [lists, setLists] = Taro.useState([]);
    // 获取用户信息
    const user = useSelector(state => state.User);
    const [searchData, setSearchData] = Taro.useState({
      mid: user.userId,
      uuid: user.uuid,
      page: 1,
      type: id
    });
    // 当redux更新后 ， 立即更新用户数据
    Taro.useEffect(() => {
      if (!user.login || loading) return;
      setSearchData({ ...searchData, mid: user.userId, uuid: user.uuid });
    }, [user]);
    // 返回刷新页面
    Taro.useDidShow(() => {
      setSearchData({ ...searchData, page: 1 });
    });
    // 加载数据类别
    const getPublishedRecruitLists = () => {
      if (!user.login) return;
      setLoading(true);
      userGetPublishedRecruitLists(searchData).then(res => {
        if (res.errcode == 'ok') {
          let list = res.data.lists;
          let len = list.length;
          let page = searchData.page;
          setMore(len ? true : false);
          if (page === 1) {
            setLists(list);
          } else {
            setLists([...lists, ...list]);
          }
          if (refresh) {
            setRefresh(false);
            _stopPullDownRefresh();
            _hideNavigationBarLoading();
          }
          setLoading(false);
        } else {
          Msg(res.errmsg);
        }
      }).catch(() => {
        if (refresh) {
          setRefresh(false);
          _stopPullDownRefresh();
          _hideNavigationBarLoading();
        }
        setLoading(false);
      });
    };
    // 用户切换招工状态列表
    const userChangePublishedItem = key => {
      setId(key);
      setSearchData({ ...searchData, type: key, page: 1 });
    };
    Taro.useEffect(() => {
      console.log(searchData);
      if (!user.login || loading) return;
      getPublishedRecruitLists();
    }, [searchData]);
    // 加载下一页
    const getNextPageData = () => {
      if (!more || loading) return;
      setSearchData({ ...searchData, page: searchData.page + 1 });
    };
    // 刷新当前页
    const reloadPage = () => {
      _showNavigationBarLoading();
      setRefresh(true);
      setSearchData({ ...searchData, page: 1 });
    };
    // 停止招工
    const userStopRecruit = (id, i) => {
      userChangeRecruitStatus(id).then(res => {
        Msg(res.errmsg);
        if (res.errcode == 'ok') {
          let bakLists = lists;
          bakLists[i].is_check = res.data.is_check.toString();
          bakLists[i].is_end = res.data.is_end.toString();
          if (bakLists[i].top_data) {
            bakLists[i].top_data.is_top = res.data.top.is_top.toString();
          }
          setLists([...bakLists]);
        }
      });
    };
    // 跳转
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // 取消置顶 jobUpdateTopStatusAction
    const handlCancel = (id, index) => {
      const params = {
        infoId: id,
        status: 0
      };
      jobUpdateTopStatusAction(params).then(res => {
        detailUserSetTopAction(res, index);
      });
    };
    // 已有置顶取消置顶操作  未置顶 但未到期 相同判断
    const detailUserSetTopAction = (res, index) => {
      if (res.errcode === 'ok') {
        Msg(res.errmsg);
        let mylists = JSON.parse(JSON.stringify(lists));
        mylists[index].top_data.is_top = res.data.top.is_top;
        setLists(mylists);
      } else if (res.errcode === 'auth_forbid') {
        // 去实名
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          cancelText: '取消',
          confirmText: '去实名',
          success(res) {
            if (res.confirm) {
              let backtwo = "backtwo";
              Taro.navigateTo({
                url: `/pages/realname/index?backtwo=${backtwo}`
              });
            }
          }
        });
        return;
      } else if (res.errcode == "member_forbid") {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          cancelText: "取消",
          confirmText: "联系客服",
          success(res) {
            if (res.confirm) {
              _makePhoneCall({
                phoneNumber: SERVERPHONE
              });
            }
          }
        });
        return;
      } else {
        _showToast({
          title: res.errmsg,
          icon: "none",
          duration: 1500
        });
      }
    };
    //置顶
    const handleTopping = (item, index) => {
      if (item.is_end === '2') {
        _showModal({
          title: '提示',
          content: '已招到状态不能进行置顶操作，请修改招工状态',
          showCancel: false
        });
        return false;
      }
      if (item.top == '1') {
        let now = new Date().getTime() / 1000; // 当前时间戳
        let data = item.top_data; //置顶数据
        let endtime = data.end_time; //置顶到期时间
        let toping = data.is_top; // 是否置顶状态
        let showTime = now > parseInt(endtime) ? true : false; // 置顶是否过期 已过期
        if (showTime) {
          //如果置顶过期
          userRouteJump(`/pages/topping/index?id=${item.id}`);
          return false;
        }
        const params = {
          infoId: item.id,
          status: toping == '0' ? '1' : "0"
        };
        jobUpdateTopStatusAction(params).then(res => {
          detailUserSetTopAction(res, index);
        });
      } else {
        userRouteJump(`/pages/topping/index?id=${item.id}`);
      }
    };
    return <Nerv.Fragment>
      <Auth />
      <View className="user-published-container">
        <View className="user-published-header">
          {HeaderList.map(item => <View onClick={() => userChangePublishedItem(item.id)} className={classnames({
            'user-published-header-item': true,
            'user-published-header-item-active': id === item.id
          })}>
            <Text className="published-item-title">{item.title}</Text>
            </View>)}
        </View>
        <ScrollView className="user-published-body" scrollY refresherEnabled refresherTriggered={refresh} onRefresherRefresh={() => reloadPage()} lowerThreshold={200} onScrollToLower={() => getNextPageData()}>
          {lists.map((item, index) => <View className="user-published-item" key={item.id}>
              {item.is_check == '1' && <Image className="published-status-img" src={IMGCDNURL + 'published-recruit-checking.png'} />}
              {item.is_check == '0' && <Image className="published-status-img" src={IMGCDNURL + 'published-recruit-nopass.png'} />}
              {item.is_end == '2' && item.is_check == '2' && <Image className="published-status-img" src={IMGCDNURL + 'published-recruit-end.png'} />}
              <View onClick={() => userRouteJump(`/pages/detail/info/index?id=${item.id}`)}>
              <View className="user-published-title overwords">{item.title}</View>
              <View className="user-published-content">{item.detail}</View>
              </View>
              <View className="user-published-footer">
                {item.is_check == '1' && <View className="published-ischeking">
                  <Image className="published-checking-img" src={IMGCDNURL + 'published-info.png'} />
                  提示：人工审核中，该信息仅自己可见。
                </View>}
                {item.is_check != '1' && <View className="user-published-footer-item" onClick={() => userRouteJump(`/pages/recruit/publish/index?id=${item.id}`)}>修改</View>}
                {item.is_check == '2' && <Nerv.Fragment>
                  <View className="user-published-footer-item" onClick={() => userStopRecruit(item.id, index)}>{item.is_end == '2' ? '重新招工' : '停止招工'}</View>
                
                
                  
                </Nerv.Fragment>}
              </View>
              
              
            </View>)}
          {!more && searchData.page > 1 && <View className="showMore">没有更多数据了</View>}
          {!lists.length && <View className="user-published-nodata">
            <Nodata />
          </View>}
        </ScrollView>
      </View>
      <Tabbar />
    </Nerv.Fragment>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
PublishedRecruit.config = { navigationBarTitleText: '我的招工信息', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };