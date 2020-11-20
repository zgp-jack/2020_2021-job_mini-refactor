import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, showModal as _showModal, makePhoneCall as _makePhoneCall } from "@tarojs/taro-h5";
import { View, Text, Picker, Image, Block } from '@tarojs/components';
import { integralSourceConfigAction, integralSourceListsAction, integralExpendListsAction, integralExpendConfigAction, integralUseInfoAction, publishComplainAction } from '../../../utils/request/index';
import { getSystemInfo } from '../../../utils/helper/index';
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../../components/nodata/index";
import { SubscribeToNews } from "../../../utils/subscribeToNews/index";
import Report from "../../../components/report/index";
import { isVaildVal } from "../../../utils/v/index";
import { useSelector } from "@tarojs/redux-h5";
import Msg, { showModalTip } from "../../../utils/msg/index";
import Auth from "../../../components/auth/index";
import './index.scss';
// 只用temp和source
export default class Tabber extends Taro.Component {
  config = {
    navigationBarTitleText: ''
  };

  render() {
    // 检测用户是否登录
    const login = useSelector(store => store.User['login']);
    const router = Taro.useRouter();
    const { info, office } = router.params;
    // 切换
    const [changeType, setChangeType] = Taro.useState(false);
    // 标识是第一次
    const [first, setFirst] = Taro.useState(false);
    // 是来源还是消耗
    const [initInfo, setInitInfo] = Taro.useState(info);
    // 分类原始内容
    const [initList, setInitList] = Taro.useState([]);
    // 第一次显示内容
    const [title, setTitle] = Taro.useState('');
    // start时间
    const [start, setStart] = Taro.useState('');
    // end时间
    const [end, setEnd] = Taro.useState('');
    // 默认日期
    const [time, setTime] = Taro.useState('');
    // 显示时间
    const [showTime, setShowTime] = Taro.useState('');
    // 设置类型
    const [sourceType, setSourceType] = Taro.useState('0');
    // 消耗
    const [consumeType, setConsumeType] = Taro.useState('0');
    // 数据
    const [data, setData] = Taro.useState({
      lists: [],
      next_page: 0,
      stime: '0',
      bak: '0'
    });
    // 默认积分
    const [num, setNum] = Taro.useState({
      get: 0,
      expend: 0
    });
    // 弹窗
    const [modal, setModal] = Taro.useState(false);
    // 弹窗内容
    const [modalData, setModalData] = Taro.useState();
    // 投诉
    const [complaintModal, setComplaintModal] = Taro.useState(false);
    // 投诉id 
    const [complaintId, setComplaintId] = Taro.useState('');
    // textarea
    const [textarea, setTextarea] = Taro.useState('');
    // 需要传递的参数
    const [params, setParams] = Taro.useState({
      y: '0',
      m: '0',
      stime: '0',
      type: 0,
      bak: '0',
      system_type: getSystemInfo(),
      flag: false
    });
    // 没有下一页
    const [nextPage, setNextPage] = Taro.useState(false);
    // 搜索来源记录
    const [sourceSearch, setSourceSearch] = Taro.useState({
      time: '',
      sortType: '0',
      flag: false,
      listType: '0'
    });
    // 搜索消耗记录
    const [consumeSearch, setConsumeSearch] = Taro.useState({
      time: '',
      sortType: '0',
      flag: false,
      listType: '0'
    });
    // 下拉框开始位置
    const [startType, setStartType] = Taro.useState(0);
    // 来源分类list
    const [sourceList, setSourceList] = Taro.useState([]);
    // 消耗分类list
    const [consumeList, setConsumeList] = Taro.useState([]);
    // 来源是否获取到list
    const [issource, setIssource] = Taro.useState(false);
    // 积分是否获取到list
    const [isconsume, setIsconsume] = Taro.useState(false);
    Taro.useEffect(() => {
      let navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录';
      _setNavigationBarTitle({ title: navigationBarTitleText });
      // 如果用户没有登录 直接断掉请求
      if (!login) return;
      // 获取现在时间
      let newTime = new Date();
      let nowyear = newTime.getFullYear();
      let nowmonth = newTime.getMonth() + 1;
      if (nowmonth >= 1 && nowmonth <= 9) {
        nowmonth = "0" + nowmonth;
      }
      setEnd(nowyear + "-" + nowmonth);
      if (initInfo === '0') {
        if (!issource) {
          integralSourceConfig();
        } else {
          if (sourceSearch.flag) {
            let date = sourceSearch.time.split('-');
            const params = {
              y: date[0],
              m: date[1],
              stime: '0',
              source_type: sourceSearch.sortType,
              bak: '0',
              system_type: getSystemInfo(),
              flag: true,
              office
            };
            //设置显示类型名字
            setTitle(sourceList[sourceSearch.listType]);
            // 设置显示时间
            setShowTime(date[0] + '年' + date[1] + '月');
            // 设置时间
            setTime(sourceSearch.time);
            // 设置下拉分类的位置
            setStartType(parseInt(sourceSearch.listType));
            setParams(params);
          }
        }
      } else {
        if (!isconsume) {
          integralExpendConfig();
        } else {
          let date = consumeSearch.time.split('-');
          const params = {
            y: date[0],
            m: date[1],
            stime: '0',
            type: consumeSearch.sortType,
            bak: '0',
            system_type: getSystemInfo(),
            flag: true
          };
          //设置显示类型名字
          setTitle(consumeList[consumeSearch.listType]);
          // 设置显示时间
          setShowTime(date[0] + '年' + date[1] + '月');
          // 设置时间
          setTime(consumeSearch.time);
          // 设置下拉分类的位置
          setStartType(parseInt(consumeSearch.listType));
          setParams(params);
        }
      }
    }, [initInfo]);
    Taro.useEffect(() => {
      if (!login) return;
      if (params.flag) {
        if (initInfo === '0') {
          integralSourceLists();
        } else {
          integralExpendLists();
        }
      }
    }, [params]);
    // 积分消耗
    const integralExpendConfig = () => {
      integralExpendConfigAction().then(res => {
        setStart(res.data.min.y + '-' + res.data.min.m);
        let item = res.data.types.map(item => item.name);
        setInitList(res.data.types);
        setConsumeList(item);
        setIsconsume(true);
        setTitle('消耗分类');
        const time = res.data.default.y + '-' + res.data.default.m;
        setTime(time);
        setShowTime(res.data.default.y + '年' + res.data.default.m + '月');
        const params = {
          y: res.data.default.y,
          m: res.data.default.m,
          stime: '0',
          type: 0,
          bak: '0',
          system_type: getSystemInfo(),
          flag: true
        };
        setParams(params);
      });
    };
    // 积分来源分类
    const integralSourceConfig = () => {
      let params = {
        office,
        system_type: getSystemInfo()
      };
      integralSourceConfigAction(params).then(res => {
        setStart(res.data.min.y + '-' + res.data.min.m);
        let item = res.data.types.map(item => item.name);
        setInitList(res.data.types);
        setSourceList(item);
        setIssource(true);
        setTitle('来源分类');
        const date = res.data.default.y + '-' + res.data.default.m;
        setTime(date);
        setShowTime(res.data.default.y + '年' + res.data.default.m + '月');
        const params = {
          y: res.data.default.y,
          m: res.data.default.m,
          stime: '0',
          source_type: 0,
          bak: '0',
          system_type: getSystemInfo(),
          flag: true,
          office
        };
        setParams(params);
      });
    };
    // 积分列表
    const integralSourceLists = () => {
      integralSourceListsAction(params).then(res => {
        if (!nextPage) {
          if (!first) {
            setNum(res.data.sum_data);
            setFirst(true);
          }
          if (changeType) {
            setData({ lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
            setChangeType(false);
          } else {
            setData({ lists: [...data.lists, ...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
          }
        }
      });
    };
    // 消耗积分列表
    const integralExpendLists = () => {
      integralExpendListsAction(params).then(res => {
        // 下拉时候不修改
        // 选择时间/分类/跳转就直接赋值，只有加载更多在追加
        if (!nextPage) {
          if (!first) {
            setNum(res.data.sum_data);
            setFirst(true);
          }
          if (changeType) {
            setData({ lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
            setChangeType(false);
          } else {
            setData({ lists: [...data.lists, ...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
          }
        }
      });
    };
    // 点击分类
    const handleClick = e => {
      setChangeType(true);
      setFirst(false);
      let type;
      if (initInfo === '0') {
        setSourceType(e.detail.value);
        setTitle(sourceList[e.detail.value]);
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === sourceList[e.detail.value]) {
            type = initList[i].type;
          }
        }
      } else {
        setTitle(consumeList[e.detail.value]);
        setConsumeType(e.detail.value);
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === consumeList[e.detail.value]) {
            type = initList[i].type;
          }
        }
      }
      let date = time.split('-');
      const params = {
        y: date[0],
        m: date[1],
        stime: '0',
        type,
        source_type: type,
        bak: '0',
        system_type: getSystemInfo(),
        flag: true
      };
      setParams(params);
    };
    // 时间选择
    const handleClckTime = e => {
      setChangeType(true);
      setFirst(false);
      let date = e.target.value.split('-');
      setShowTime(date[0] + '年' + date[1] + '月');
      setTime(e.target.value);
      let type;
      if (initInfo === '0') {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === sourceList[sourceType]) {
            type = initList[i].type;
          }
        }
      } else {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === consumeList[consumeType]) {
            type = initList[i].type;
          }
        }
      }
      const params = {
        y: date[0],
        m: date[1],
        stime: '0',
        //来源和消耗传值不同（偷懒都传过去）
        source_type: type,
        type: type,
        bak: '0',
        system_type: getSystemInfo(),
        flag: true
      };
      setParams(params);
    };
    // 是否加载更多
    Taro.useReachBottom(() => {
      // 没有内容
      if (data.next_page === 0) {
        setNextPage(true);
        return;
      }
      // 时间：
      let date = time.split('-');
      // 类型
      let type;
      if (initInfo === '0') {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === sourceList[sourceType]) {
            type = initList[i].type;
          }
        }
      } else {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === consumeList[consumeType]) {
            type = initList[i].type;
          }
        }
      }
      const params = {
        y: date[0],
        m: date[1],
        stime: data.stime,
        //来源和消耗传值不同（偷懒都传过去）
        source_type: type,
        type,
        bak: '0',
        system_type: '',
        flag: true
      };
      setParams(params);
    });
    // 跳转
    const handleJump = () => {
      setFirst(false);
      setNextPage(false);
      setChangeType(true);
      let type;
      if (initInfo === '0') {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === sourceList[sourceType]) {
            type = initList[i].type;
          }
        }
      } else {
        for (let i = 0; i < initList.length; i++) {
          if (initList[i].name === consumeList[consumeType]) {
            type = initList[i].type;
          }
        }
      }
      if (initInfo === '0') {
        setInitInfo("1");
        // 存搜索记录
        setSourceSearch({
          time,
          sortType: type,
          flag: true,
          listType: sourceType
        });
      } else if (initInfo === '1') {
        setInitInfo("0");
        // 存搜索记录
        setConsumeSearch({
          time,
          sortType: type,
          flag: true,
          listType: consumeType
        });
      }
    };
    // 弹窗
    const handleModal = userId => {
      integralUseInfoAction(userId).then(res => {
        if (res.errcode === 'deleted') {
          _showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false
          });
        } else {
          setModalData(res.info);
          setModal(true);
        }
      });
    };
    // 投诉弹窗
    const handleComplaint = id => {
      setComplaintModal(true);
      setComplaintId(id);
    };
    // 多行输入
    const handleTextarea = e => {
      let val = e.detail.value;
      setTextarea(val);
    };
    // 提交投诉
    const handleSubmit = () => {
      if (!isVaildVal(textarea, 15, 500)) {
        Msg('输入内容不少于15个字且必须包含文字');
        return false;
      }
      const params = {
        content: textarea,
        type: 'job',
        infoId: complaintId
      };
      publishComplainAction(params).then(res => {
        if (res.errcode === 'ok') {
          SubscribeToNews('complain', () => {
            showModalTip({
              tips: res.errmsg,
              callback: () => {
                setComplaintModal(false);
                setModal(false);
              }
            });
          });
        }
      });
    };
    return <Nerv.Fragment>
    <Auth />
    <View className="tabber-content">
      <View className="tabber-content-box">
        <View className="tabber-content-box-time">
          <Picker mode="date" fields="month" value={time} start={start} end={end} onChange={e => handleClckTime(e)}>
            <Text className="tabber-content-box-time-text">{showTime}</Text>
            <Image className="tabber-content-box-time-img" src={`${IMGCDNURL}lpy/integral/select2.png`} />
          </Picker>
        </View>
        <View className="tabber-content-box-selector">
          <Picker mode="selector" range={initInfo === '0' ? sourceList : consumeList} value={startType} onChange={e => handleClick(e)}>
            <Text className="tabber-content-box-selector-text">{title}</Text>
            <Image className="tabber-content-box-selector-img" src={`${IMGCDNURL}lpy/integral/select1.png`} />
          </Picker>
        </View>
      </View>
      <View className="tabber-content-box-numBox">
        <View>{initInfo === '0' ? '获取积分：' : '消耗积分：'}<Text className="tabber-content-box-num-color">{initInfo === '0' ? num.get : num.expend}</Text></View>
        <View onClick={handleJump} className="tabber-content-box-numBox-num">{initInfo === '0' ? '消耗积分：' : '获取积分：'}<Text className="tabber-content-box-num-color">{initInfo === '0' ? num.expend : num.get}</Text></View>
      </View>
      <View className="integral-content">
        {!data.lists.length && <Nodata text={initInfo === '0' ? '暂无积分来源记录' : '暂无积分消耗记录'} />}
        {data.lists.map(item => <View key={item.id}>
            
            <View className="integral-list">
              <View className="integral-list-time">
                <Text className="integral-time-year">{item.y_m}</Text>
                <Text className="integral-time-day">{item.day}</Text>
              </View>
              <View className="integral-list-item">
                <View className="integral-list-title overwords">{item.type_name}</View>
                <View className="integral-list-words overwords">{initInfo === '0' ? item.ext : item.title}</View>
                <View className="integral-item-time">时间：{item.his}<Text>{initInfo === '0' ? item.source_integral_string : item.tips}</Text></View>
              </View>
            </View>
          </View>)}
      </View>
      {data.next_page === 0 && data.lists.length && <View className="integral-noData">没有更多数据了</View>}
      {initInfo === '1' && modal && modalData && <View className="tabber-Modal">
        <View className="tabber-Modal-content">
        <View onClick={() => {
              setModal(false);
            }} className="tabber-Modal-content-close"></View>
          <View className="tabber-Modal-content-scroll">
            {modalData.expend_type !== 2 && <View className="tabber-Modal-content-flexBox">
              <View className="tabber-Modal-content-flexBox-left">项目名称</View>
              <View className="tabber-Modal-content-flexBox-right">{modalData.title}</View>
            </View>}
          <View className="tabber-Modal-content-flexBox">
            <View>电话</View>
              <View className="tabber-content-box-num-color">{modalData.user_mobile}({modalData.user_name})
              <View onClick={() => {
                    _makePhoneCall({ phoneNumber: modalData.user_mobile });
                  }} className="tabber-Modal-content-flexBox-phone">拨打</View>
              {modalData.show_complain !== 0 && <View className="tabber-Modal-content-flexBox-complaint" onClick={() => handleComplaint(modalData.id)}>投诉</View>}
            </View>
          </View>
            {modalData.expend_type === 2 && <View>
                <View className="tabber-Modal-content-flexBox">
                  <View>规模</View>
                <View className="tabber-content-box-num-color">{modalData.team_composition_words}</View>
                </View>
                <View className="tabber-Modal-content-flexBox">
                <View>接活省份</View>
                <View className="tabber-content-box-num-color">{modalData.showProvinceList}</View>
                </View>
              </View>}
            <View className="tabber-Modal-content-flexBox-classifyName">
              {modalData.classifyName.map((v, i) => <Text key={i + i} className="tabber-Modal-content-flexBox-classifyName-data">
                  [{v}]
                </Text>)}
          </View>
            <View className="clear"></View>
          <View className="tabber-Modal-content-flexBox-last">
            <View>{modalData.detail}</View>
          </View>
        </View>
        </View>
      </View>}
      
      {complaintModal && <Report display={complaintModal} textarea={textarea} handleTextarea={handleTextarea} setComplaintModal={setComplaintModal} handleSubmit={handleSubmit} />}
    </View>
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
Tabber.config = { navigationBarTitleText: '' };