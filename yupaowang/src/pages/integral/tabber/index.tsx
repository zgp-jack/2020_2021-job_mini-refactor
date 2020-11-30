import Taro, {Config, useState, useEffect, useReachBottom, useRouter} from '@tarojs/taro'
import {View, Text, Picker, Image} from '@tarojs/components'
import {
  integralSourceConfigAction,
  integralSourceListsAction,
  integralExpendListsAction,
  integralExpendConfigAction,
  integralUseInfoAction,
  publishComplainAction
} from '../../../utils/request/index'
import {getSystemInfo} from '../../../utils/helper/index'
import {IMGCDNURL} from '../../../config'
import Nodata from '../../../components/nodata'
import {
  integralSourceListsDataSum,
  integralSourceListsDataLists,
  integralUseInfoData,
  integralSourceConfigDataType
} from '../../../utils/request/index.d'
import {SubscribeToNews} from '../../../utils/subscribeToNews';
import Report from '../../../components/report';
import {isVaildVal} from '../../../utils/v'
import Msg, {SubPopup} from '../../../utils/msg'
import './index.scss'

interface ParamsType {
  y: string,
  m: string,
  stime: string,
  type?: number | string,
  bak: string,
  system_type: string,
  flag: boolean,
  source_type?: number | string,
  office?: number | string,
}

interface DataType {
  lists: integralSourceListsDataLists[],
  next_page: number,
  stime: string,
  bak: string,
}

interface SearchType {
  time: string,
  sortType: string,
  flag: boolean,
  listType: string,
}

// 只用temp和source
export default function Tabber() {
  const router: Taro.RouterInfo = useRouter()
  const {info, office} = router.params;
  // 切换
  const [changeType, setChangeType] = useState<boolean>(false)
  // 标识是第一次
  const [first, setFirst] = useState<Boolean>(false)
  // 是来源还是消耗
  const [initInfo, setInitInfo] = useState<string>(info)
  // 分类原始内容
  const [initList, setInitList] = useState<integralSourceConfigDataType[]>([])
  // 第一次显示内容
  const [title, setTitle] = useState<string>('')
  // start时间
  const [start, setStart] = useState<string>('')
  // end时间
  const [end, setEnd] = useState<string>('')
  // 默认日期
  const [time, setTime] = useState<string>('')
  // 显示时间
  const [showTime, setShowTime] = useState<string>('')
  // 设置类型
  const [sourceType, setSourceType] = useState<string>('0')
  // 消耗
  const [consumeType, setConsumeType] = useState<string>('0')
  // 数据
  const [data, setData] = useState<DataType>({
    lists: [],
    next_page: 0,
    stime: '0',
    bak: '0'
  })
  // 默认积分
  const [num, setNum] = useState<integralSourceListsDataSum>({
    get: 0,
    expend: 0,
  })
  // 弹窗
  const [modal, setModal] = useState<boolean>(false)
  // 弹窗内容
  const [modalData, setModalData] = useState<integralUseInfoData>()
  // 投诉
  const [complaintModal, setComplaintModal] = useState<boolean>(false)
  // 投诉id
  const [complaintId, setComplaintId] = useState<string>('')
  // textarea
  const [textarea, setTextarea] = useState<string>('');
  // 需要传递的参数
  const [params, setParams] = useState<ParamsType>({
    y: '0',
    m: '0',
    stime: '0',
    type: 0,
    bak: '0',
    system_type: getSystemInfo(),
    flag: false,
  })
  // 没有下一页
  const [nextPage, setNextPage] = useState<boolean>(false)
  // 搜索来源记录
  const [sourceSearch, setSourceSearch] = useState<SearchType>({
    time: '',
    sortType: '0',
    flag: false,
    listType: '0',
  })
  // 搜索消耗记录
  const [consumeSearch, setConsumeSearch] = useState<SearchType>({
    time: '',
    sortType: '0',
    flag: false,
    listType: '0',
  })
  // 下拉框开始位置
  const [startType, setStartType] = useState<number>(0)
  // 来源分类list
  const [sourceList, setSourceList] = useState<string[]>([])
  // 消耗分类list
  const [consumeList, setConsumeList] = useState<string[]>([])
  // 来源是否获取到list
  const [issource, setIssource] = useState<boolean>(false);
  // 积分是否获取到list
  const [isconsume, setIsconsume] = useState<boolean>(false);
  //顶部tab数据
  const [tabBar] = useState<{ type: string, name: string }[]>([{type: '0', name: '积分来源'}, {type: '1', name: '积分消耗'}])
  const [modelType, setModelType] = useState<string>('')
  useEffect(() => {
    let navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录'
    Taro.setNavigationBarTitle({title: navigationBarTitleText})
    // 获取现在时间
    let newTime = new Date();
    let nowyear = newTime.getFullYear();
    let nowmonth: string | number = newTime.getMonth() + 1;
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
            office,
          }
          //设置显示类型名字
          setTitle(sourceList[sourceSearch.listType])
          // 设置显示时间
          setShowTime(date[0] + '年' + date[1] + '月');
          // 设置时间
          setTime(sourceSearch.time)
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
        }
        //设置显示类型名字
        setTitle(consumeList[consumeSearch.listType])
        // 设置显示时间
        setShowTime(date[0] + '年' + date[1] + '月');
        // 设置时间
        setTime(consumeSearch.time)
        // 设置下拉分类的位置
        setStartType(parseInt(consumeSearch.listType));
        setParams(params);
      }
    }
  }, [initInfo])
  useEffect(() => {
    if (params.flag) {
      if (initInfo === '0') {
        integralSourceLists();
      } else {
        integralExpendLists();
      }
    }
  }, [params])
  // 积分消耗
  const integralExpendConfig = () => {
    integralExpendConfigAction().then(res => {
      setStart(res.data.min.y + '-' + res.data.min.m);
      let item: string[] = res.data.types.map(item => item.name)
      setInitList(res.data.types)
      setConsumeList(item);
      setIsconsume(true);
      setTitle('消耗分类')
      const time = res.data.default.y + '-' + res.data.default.m;
      setTime(time);
      setShowTime(res.data.default.y + '年' + res.data.default.m + '月')
      const params = {
        y: res.data.default.y,
        m: res.data.default.m,
        stime: '0',
        type: 0,
        bak: '0',
        system_type: getSystemInfo(),
        flag: true
      }
      setParams(params);
    })
  }
  // 积分来源分类
  const integralSourceConfig = () => {
    let params = {
      office, // 是否为只查看正式数据 0/1,
      system_type: getSystemInfo()
    }
    integralSourceConfigAction(params).then(res => {
      setStart(res.data.min.y + '-' + res.data.min.m);
      let item: string[] = res.data.types.map(item => item.name)
      setInitList(res.data.types)
      setSourceList(item);
      setIssource(true);
      setTitle('来源分类')
      const date = res.data.default.y + '-' + res.data.default.m;
      setTime(date);
      setShowTime(res.data.default.y + '年' + res.data.default.m + '月')
      const params = {
        y: res.data.default.y,
        m: res.data.default.m,
        stime: '0',
        source_type: 0,
        bak: '0',
        system_type: getSystemInfo(),
        flag: true,
        office,
      }
      setParams(params);
    })
  }

  // 积分来源列表
  const integralSourceLists = () => {
    integralSourceListsAction(params).then(res => {
      if (!nextPage) {
        if (!first) {
          setNum(res.data.sum_data);
          setFirst(true)
        }
        if (changeType) {
          setData({lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak})
          setChangeType(false)
        } else {
          setData({
            lists: [...data.lists, ...res.data.lists],
            next_page: res.data.next_page,
            stime: res.data.stime,
            bak: res.data.bak
          })
        }
      }
    })
  }
  // 消耗积分列表
  const integralExpendLists = () => {
    integralExpendListsAction(params).then(res => {
      // 下拉时候不修改
      // 选择时间/分类/跳转就直接赋值，只有加载更多在追加
      if (!nextPage) {
        if (!first) {
          setNum(res.data.sum_data);
          setFirst(true)
        }
        if (changeType) {
          setData({lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak})
          setChangeType(false)
        } else {
          setData({
            lists: [...data.lists, ...res.data.lists],
            next_page: res.data.next_page,
            stime: res.data.stime,
            bak: res.data.bak
          })
        }
      }
    })
  }
  // 点击分类
  const handleClick = (e: any) => {
    setChangeType(true)
    setFirst(false)
    let type: any;
    if (initInfo === '0') {
      setSourceType(e.detail.value);
      setTitle(sourceList[e.detail.value])
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === sourceList[e.detail.value]) {
          type = initList[i].type
        }
      }
    } else {
      setTitle(consumeList[e.detail.value])
      setConsumeType(e.detail.value)
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === consumeList[e.detail.value]) {
          type = initList[i].type
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
    }
    setParams(params)
  }
  // 时间选择
  const handleClckTime = (e: any) => {
    setChangeType(true)
    setFirst(false)
    let date = e.target.value.split('-');
    setShowTime(date[0] + '年' + date[1] + '月');
    setTime(e.target.value)
    let type: any;
    if (initInfo === '0') {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === sourceList[sourceType]) {
          type = initList[i].type
        }
      }
    } else {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === consumeList[consumeType]) {
          type = initList[i].type
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
      flag: true,
    }
    setParams(params)
  }
  // 是否加载更多
  useReachBottom(() => {
    // 没有内容
    if (data.next_page === 0) {
      setNextPage(true);
      return;
    }
    // 时间：
    let date = time.split('-');
    // 类型
    let type: any;
    if (initInfo === '0') {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === sourceList[sourceType]) {
          type = initList[i].type
        }
      }
    } else {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === consumeList[consumeType]) {
          type = initList[i].type
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
    }
    setParams(params);
  })
  // 跳转
  const handleJump = (_type: string) => {
    if (_type == initInfo) return
    setFirst(false)
    setNextPage(false);
    setChangeType(true)
    let type: any;
    if (initInfo == '0') {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === sourceList[sourceType]) {
          type = initList[i].type
        }
      }
    } else {
      for (let i = 0; i < initList.length; i++) {
        if (initList[i].name === consumeList[consumeType]) {
          type = initList[i].type
        }
      }
    }
    if (_type == '0') {
      setInitInfo(_type)
      // 存搜索记录
      setConsumeSearch({
        time,
        sortType: type,
        flag: true,
        listType: consumeType
      })

    } else if (_type == '1') {
      setInitInfo(_type);
      // 存搜索记录
      setSourceSearch({
        time,
        sortType: type,
        flag: true,
        listType: sourceType
      })
    }
  }
  // 弹窗
  const handleModal = (userId: string, time: string) => {
    integralUseInfoAction(userId, time).then(res => {
      const {errcode, errmsg, info, data} = res
      if (res.errcode === 'deleted' || res.errcode === 'fail') {
        Taro.showModal({
          title: '温馨提示',
          content: errmsg,
          showCancel: false,
        })
        return
      } else if (errcode === 'ok') {
        setModelType(info.type)
      } else {
        setModelType(errcode)
      }
      setModalData(info || data);
      setModal(true);
    })
  }
  // 投诉弹窗
  const handleComplaint = (id: string) => {
    Taro.navigateTo({
      url: '/pages/complaint/index?id=' + id,
    })
    // setComplaintModal(true);
    // setComplaintId(id);
  }
  // 多行输入
  const handleTextarea = (e: any) => {
    let val: string = e.detail.value;
    setTextarea(val);
  }
  // 提交投诉
  const handleSubmit = () => {
    if (!isVaildVal(textarea, 15, 500)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    const params = {
      content: textarea,
      type: 'job',
      infoId: complaintId
    };
    publishComplainAction(params).then((res) => {
      if (res.errcode === 'ok') {
        SubscribeToNews('complain', () => {
          SubPopup({
            tips: res.errmsg,
            callback: () => {
              setComplaintModal(false);
              setModal(false);
            }
          })
        })
      }
    })
  }
  const handleBgMove = (e) => {
    e.stopPropagation();
    return !modal;
  };
  const modelItem = (title: string, data: string) => {
    return (<View className='Modal-content-row  Modal-content-box'>
      <View className='content-left'>{title}</View>
      <View className='content-right'>{data}</View>
    </View>)
  }
  return (
    <View className='tabber-content' onTouchMove={handleBgMove}>
      <View className="integral-tab">
        {
          tabBar.map((item, i) => (
            <View className="tab-item" key={i} onClick={() => handleJump(item.type)}>
              <Text
                className={"tab-item-text " + (initInfo == item.type ? 'tab-item-text-active' : '')}>{item.name}</Text>
            </View>
          ))
        }
      </View>

      <View className='tabber-content-box'>
        <View className='tabber-content-box-time'>
          <Picker mode='date' fields='month' value={time} start={start} end={end} onChange={(e) => handleClckTime(e)}>
            <Text className='tabber-content-box-time-text'>{showTime}</Text>
            <Image className='tabber-content-box-time-img' src={`${IMGCDNURL}lpy/integral/select2.png`}/>
          </Picker>
          <View className='tabber-content-box-numBox'>
            <View>获取积分：<Text
              className='tabber-content-box-num-color'>{num.get}</Text></View>
            <View
              className='tabber-content-box-numBox-num'>消耗积分：<Text
              className='tabber-content-box-num-color'>{num.expend}</Text></View>
          </View>
        </View>
        <View className='tabber-content-box-selector'>
          <Picker mode='selector' range={initInfo === '0' ? sourceList : consumeList} value={startType}
                  onChange={(e) => handleClick(e)}>
            <Text className='tabber-content-box-selector-text'>{title}</Text>
            <Image className='tabber-content-box-selector-img' src={`${IMGCDNURL}lpy/integral/select1.png`}/>
          </Picker>
        </View>
      </View>

      {!data.lists.length && <Nodata text={initInfo === '0' ? '暂无积分来源记录' : '暂无积分消耗记录'}/>}
      <View className='integral-list-container'>
        {data.lists.map((item, index) => (
          <View className="integral-list-item" key={index} onClick={() => handleModal(item.id, item.time)}>
            <View className="item-container">
              <View className="icon-bor">
                <Image className="icon" src={item.icon}/>
              </View>
              <View className='integral-list-words'>
                <View className='integral-list-title overwords'>{item.type_name}</View>
                <View className='integral-list-info overwords'>{initInfo === '0' ? item.ext : item.title}</View>
                <View className='integral-list-lasttime overwords'>{item.date}</View>
                <Text className="tips">{item.tips}</Text>
              </View>
            </View>
          </View>
          // <View key={index + index} onClick={() => handleModal(item.id)}>
          //   <View className='integral-list'>
          //     <View className='integral-list-time'>
          //       <Text className='integral-time-year'>{item.y_m}</Text>
          //       <Text className='integral-time-day'>{item.day}</Text>
          //     </View>
          //     <View className='integral-list-item'>
          //       <View className='integral-list-title overwords'>{item.type_name}</View>
          //       <View className='integral-list-words overwords'>{initInfo === '0' ? item.ext : item.title}</View>
          //       <View
          //         className='integral-item-time'>时间：{item.his}<Text>{initInfo === '0' ? item.source_integral_string : item.tips}</Text></View>
          //     </View>
          //   </View>
          // </View>
        ))}
      </View>
      {/*{data.next_page === 0 && data.lists.length && <View className='integral-noData'>没有更多数据了</View>}*/}
      {
        initInfo === '1' && modal && modalData &&
        <View className='tabber-Modal'>
          <View className='tabber-Modal-content'>
            <View onClick={() => {
              setModal(false)
            }} className='tabber-Modal-content-close'/>
            <View className='tabber-Modal-content-scroll'>
              {/*置顶招工*/}
              {
                modelType === 'top_job' &&
                <View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目名称</View>
                    <View className='content-right'>{modalData.title}</View>
                  </View>
                  <View className='Modal-content-row Modal-content-box'>
                    <View className='content-left'>置顶范围</View>
                    <View className='content-right'>
                      {
                        (modalData.address as string[]).map((item, i) => (
                          <Text key={i} className="content-right-item">{item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>置顶开始时间</View>
                    <View className='content-right'>{modalData.s_time}</View>
                  </View>
                  {/*{*/}
                  {/*  modelItem('置顶开始时间', modalData.s_time)*/}
                  {/*}*/}
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>置顶结束时间</View>
                    <View className='content-right'>{modalData.e_time}</View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>电话</View>
                    <View className='content-right'>{modalData.tel}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>工种</View>
                    <View className='content-right content-gray content-right-work'>
                      {
                        modalData.occupations.map((item, i) => (
                          <Text>{i === 0 ? item : '、' + item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目描述</View>
                    <View className='content-right content-gray'>{modalData.detail}</View>
                  </View>
                </View>
              }
              {/*付费发布招工*/}
              {
                modelType === 'paid_recruit' &&
                <View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目名称</View>
                    <View className='content-right'>{modalData.title}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>联系人</View>
                    <View className='content-right'>{modalData.user_name}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='cont≥ent-left'>电话</View>
                    <View className='content-right'>{modalData.user_mobile}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目地址</View>
                    <View className='content-right content-gray'>
                      {modalData.address}
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>工种</View>
                    <View className='content-right content-gray content-right-work'>
                      {
                        modalData.classifyName.map((item, i) => (
                          <Text>{i === 0 ? item : '、' + item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目描述</View>
                    <View className='content-right content-gray'>{modalData.detail}</View>
                  </View>
                </View>
              }
              {/*置顶找活*/}
              {
                modelType === 'top_resume' &&
                <View>
                  <View className='Modal-content-row'>
                    <View className='content-right'>{modalData.title}</View>
                  </View>
                  <View className='Modal-content-row Modal-content-box'>
                    <View className='content-left'>置顶范围</View>
                    <View className='content-right'>
                      {
                        (modalData.address as string[]).map((item, i) => (
                          <Text key={i} className="content-right-item">{item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>置顶开始时间</View>
                    <View className='content-right'>{modalData.s_time}</View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>置顶结束时间</View>
                    <View className='content-right'>{modalData.e_time}</View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>电话</View>
                    <View className='content-right'>{modalData.tel}</View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>规模</View>
                    <View className='content-right'>{modalData.team_type}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>工种</View>
                    <View className='content-right content-gray content-right-work'>
                      {
                        modalData.occupations.map((item, i) => (
                          <Text>{i === 0 ? item : '、' + item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>自我介绍</View>
                    <View className='content-right content-gray'>{modalData.detail}</View>
                  </View>
                </View>
              }
              {/*  查看招工*/}
              {
                modelType === 'job' &&
                <View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目名称</View>
                    <View className='content-right'>{modalData.title}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>联系人</View>
                    <View className='content-right'>{modalData.user_name}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>电话</View>
                    <View className='content-right'>{modalData.user_mobile}
                      <View>
                        <View onClick={() => {
                          Taro.makePhoneCall({phoneNumber: modalData.user_mobile})
                        }} className='tabber-Modal-content-flexBox-phone'>拨打</View>
                        {modalData.show_complain !== 0 && <View className='tabber-Modal-content-flexBox-complaint'
                                                                onClick={() => handleComplaint(modalData.id)}>投诉</View>}
                      </View>
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目地址</View>
                    <View className='content-right content-gray'>
                      {modalData.address}
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>工种</View>
                    <View className='content-right content-gray content-right-work'>
                      {
                        modalData.classifyName.map((item, i) => (
                          <Text>{i === 0 ? item : '、' + item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>项目描述</View>
                    <View className='content-right content-gray'>{modalData.detail}</View>
                  </View>
                </View>
              }
              {/*查看找活信息*/}
              {
                modelType === 'resume' &&
                <View>
                  <View className='Modal-content-row'>
                    <View className='content-right'>{modalData.title}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>电话</View>
                    <View className='content-right'>{modalData.user_mobile}
                      <View>
                        <View onClick={() => {
                          Taro.makePhoneCall({phoneNumber: modalData.user_mobile})
                        }} className='tabber-Modal-content-flexBox-phone'>拨打</View>
                      </View>
                    </View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>规模</View>
                    <View className='content-right'>{modalData.team_composition_words}</View>
                  </View>
                  <View className='Modal-content-row  Modal-content-box'>
                    <View className='content-left'>接活省份</View>
                    <View className='content-right'>{modalData.showProvinceList}</View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>工种</View>
                    <View className='content-right content-gray content-right-work'>
                      {
                        modalData.classifyName.map((item, i) => (
                          <Text>{i === 0 ? item : '、' + item}</Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className='Modal-content-row'>
                    <View className='content-left'>自我介绍</View>
                    <View className='content-right content-gray'>{modalData.detail}</View>
                  </View>
                </View>
              }
            </View>
          </View>
        </View>
      }
      {/* 投诉 */}
      {complaintModal && <Report display={complaintModal} textarea={textarea} handleTextarea={handleTextarea}
                                 setComplaintModal={setComplaintModal}
                                 handleSubmit={handleSubmit}/>
      }
    </View>
  )
}

Tabber.config = {
  navigationBarTitleText: '',
} as Config
