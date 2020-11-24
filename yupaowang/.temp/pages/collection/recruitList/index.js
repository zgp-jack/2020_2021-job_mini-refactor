import Nerv from "nervjs";
import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import CollectionRecruitList from "../collectionRecruitList/index";
import { getCollectionRecruitListData, recruitListCancelCollectionAction } from "../../../utils/request/index";
import { useSelector } from "@tarojs/redux-h5";
import './index.scss';
export default class RecruitList extends Taro.Component {
  render() {
    const { bottom, initPage } = this.props;

    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // * 定义招工列表数组
    const [lists, setLists] = Taro.useState([]);
    // 招工初始页数
    const [initRecPage, setinitRecPage] = Taro.useState({
      page: 1
    });
    // 没有更多数据
    const [recruitNoMoreData, setRecruitNoMoreData] = Taro.useState(false);
    // 是否加载更多
    const [more, setMore] = Taro.useState(false);
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // 判断是否登陆
    Taro.useEffect(() => {
      if (!login) return;
      getCollectionRecruitListDataAction();
    }, [login, initRecPage]);
    // * 请求数据
    const getCollectionRecruitListDataAction = () => {
      getCollectionRecruitListData(initRecPage.page).then(res => {
        _hideNavigationBarLoading();
        _stopPullDownRefresh();
        if (!res.list.length) {
          setRecruitNoMoreData(true);
        }
        if (initRecPage.page === 1) {
          setLists([...res.list]);
        } else {
          setLists([...lists, ...res.list]);
        }
        if (refresh) setRefresh(false);
        if (more) setMore(false);
      });
    };
    // * 上拉刷新
    Taro.useEffect(() => {
      if (!bottom) return;
      if (recruitNoMoreData) return;
      setinitRecPage({ ...initRecPage, page: initRecPage.page + 1 });
    }, [bottom]);
    // 下拉
    Taro.useEffect(() => {
      if (initPage === 0) return;
      setRecruitNoMoreData(false);
      setinitRecPage({ page: 1 });
    }, [initPage]);
    // * 招工取消收藏
    const recruitListHandler = id => {
      recruitListCancelCollectionAction(id).then(res => {
        if (res.errcode === 'ok') {
          setinitRecPage({ page: 1 });
        }
      });
    };
    return <View className="recruit-container">
        <View className="recruit-lists-containerbox">
        <CollectionRecruitList data={lists} onHandlerClick={recruitListHandler} recruitNoMoreData={recruitNoMoreData} />
        </View>
    </View>;
  }

}