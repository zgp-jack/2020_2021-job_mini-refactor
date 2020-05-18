import Taro, { Config, useState, useEffect, useReachBottom, useRouter } from '@tarojs/taro'
import { View, Text, Picker, Image, Textarea } from '@tarojs/components'
import { integralSourceConfigAction, integralSourceListsAction, integralExpendListsAction, integralExpendConfigAction, integralUseInfoAction, publishComplainAction } from '../../../utils/request/index'
import { getSystemInfo } from '../../../utils/helper/index'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import { integralSourceListsDataSum, integralSourceListsDataLists, integralUseInfoData, integralSourceConfigDataType  } from '../../../utils/request/index.d'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import './index.scss'

interface ParamsType {
  y: string,
  m: string,
  stime: string,
  type?: number|string,
  bak: string,
  system_type: string,
  flag:boolean,
  source_type?:number|string,
  office?:number|string,
}
interface DataType {
  lists: integralSourceListsDataLists[],
  next_page:number,
  stime:string,
  bak:string,
}
interface SearchType{
  time:string,
  sortType:string,
  flag: boolean,
  listType:string,
}
// 只用temp和source
export default function Tabber() {
  const router: Taro.RouterInfo = useRouter()
  const { info, office } = router.params;
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
    lists:[],
    next_page: 0,
    stime: '0',
    bak:'0'
  })
  // 默认积分
  const [num, setNum] = useState < integralSourceListsDataSum>({
    get:0,
    expend:0,
  })
  // 弹窗
  const [modal,setModal] = useState<boolean>(false)
  // 弹窗内容
  const [modalData, setModalData] = useState<integralUseInfoData>()
  // 投诉
  const [complaintModal, setComplaintModal] = useState<Boolean>(false)
  // 投诉id 
  const [complaintId, setComplaintId ] = useState<string>('')
  // textarea
  const [textarea, setTextarea] = useState<string>('');
  // 需要传递的参数
  const [params, setParams] = useState<ParamsType>({
    y: '0',
    m: '0',
    stime:'0',
    type:0,
    bak:'0',
    system_type: getSystemInfo(),
    flag:false,
  })
  // 没有下一页
  const [nextPage,setNextPage]= useState<boolean>(false)
  // 搜索来源记录
  const [sourceSearch, setSourceSearch] = useState<SearchType>({
    time: '',
    sortType: '0',
    flag: false,
    listType:'0',
  })
  // 搜索消耗记录
  const [consumeSearch, setConsumeSearch] = useState <SearchType>({
    time: '',
    sortType: '0',
    flag: false,
    listType: '0',
  })
  // 下拉框开始位置
  const [startType,setStartType] = useState<number>(0)
  // 来源分类list
  const [sourceList, setSourceList] = useState<string[]>([])
  // 消耗分类list
  const [consumeList, setConsumeList] = useState<string[]>([])
  // 来源是否获取到list
  const [issource, setIssource] = useState<boolean>(false);
  // 积分是否获取到list
  const [isconsume, setIsconsume] = useState<boolean>(false);
  useEffect(()=>{
    let navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录'
    Taro.setNavigationBarTitle({title: navigationBarTitleText})
    // 获取现在时间
    let newTime = new Date();
    let nowyear = newTime.getFullYear();
    let nowmonth:string|number = newTime.getMonth() + 1;
    if (nowmonth >= 1 && nowmonth <= 9) {
      nowmonth = "0" + nowmonth;
    }
    setEnd(nowyear + "-" + nowmonth);
    if (initInfo === '0'){
      if (!issource){
        integralSourceConfig();
      }else{
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
    }else{
      if (!isconsume){
        integralExpendConfig();
      }else{
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
  useEffect(()=>{
    if(params.flag){
      if (initInfo === '0'){
        integralSourceLists();
      }else{
        integralExpendLists();
      }
    }
  },[params])
  // 积分消耗
  const integralExpendConfig = ()=>{
    integralExpendConfigAction().then(res=>{
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
  const integralSourceConfig= ()=>{
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

  // 积分列表
  const integralSourceLists = ()=>{
    integralSourceListsAction(params).then(res => {
      if (!nextPage) {
        if (!first) {
          setNum(res.data.sum_data);
          setFirst(true)
        }
        if (changeType) {
          setData({ lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak })
          setChangeType(false)
        } else {
          setData({ lists: [...data.lists, ...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak })
        }
      }
    })
  }
  // 消耗积分列表
  const integralExpendLists = ()=>{
    integralExpendListsAction(params).then(res => {
      // 下拉时候不修改
      // 选择时间/分类/跳转就直接赋值，只有加载更多在追加
      if (!nextPage){
        if (!first){
          setNum(res.data.sum_data);
          setFirst(true)
        }
        if (changeType){
          setData({ lists: [...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak })
          setChangeType(false)
        }else{
          setData({ lists: [...data.lists, ...res.data.lists], next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak })
        }
      }
    })
  }
  // 点击分类
  const handleClick = (e:any)=>{
    setChangeType(true)
    setFirst(false)
    let type:any;
    if(initInfo === '0'){
      setSourceType(e.detail.value);
      setTitle(sourceList[e.detail.value])
      for (let i =0;i<initList.length;i++){
        if (initList[i].name === sourceList[e.detail.value]){
          type = initList[i].type
        }
      }
    }else{
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
      bak:'0',
      system_type: getSystemInfo(),
      flag: true
    }
    setParams(params)
  }
  // 时间选择
  const handleClckTime = (e:any)=>{
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
      bak:'0',
      system_type: getSystemInfo(),
      flag:true,
    }
      setParams(params)
  }
  // 是否加载更多
  useReachBottom(() => {
    // 没有内容
    if(data.next_page === 0){
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
  const handleJump = ()=>{
    setFirst(false)
    setNextPage(false);
    setChangeType(true)
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
    if(initInfo === '0'){
      setInitInfo("1")
      // 存搜索记录
      setSourceSearch({
        time,
        sortType: type,
        flag:true,
        listType: sourceType
      })
    } else if (initInfo === '1') {
      setInitInfo("0");
      // 存搜索记录
      setConsumeSearch({
        time,
        sortType: type,
        flag: true,
        listType: consumeType
      })
    }
  }
  // 弹窗
  const handleModal = (userId:string)=>{
    integralUseInfoAction(userId).then(res=>{
      if (res.errcode === 'deleted'){
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
      }else{
        setModalData(res.info);
        setModal(true);
      }
    })
  }
  // 投诉弹窗
  const handleComplaint = (id:string)=>{
    setComplaintModal(true);
    setComplaintId(id);
  }
  // 多行输入
  const handleTextarea = (e: any) => {
    let val: string = e.detail.value;
    setTextarea(val);
  }
  // 提交投诉
  const handleSubmit = ()=>{
    if (!isVaildVal(textarea, 15, 500)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    const params = {
      content:textarea,
      type:'job',
      infoId:complaintId
    };
    publishComplainAction(params).then(()=>{
      Msg('提交成功')
      setComplaintModal(false);
      setModal(false);
    })
  }
  return (
    <View className='tabber-content'>
      <View className='tabber-content-box'>
        <View className='tabber-content-box-time'>
          <Picker mode='date' fields='month' value={time} start={start} end={end} onChange={(e)=>handleClckTime(e)}>
            <Text className='tabber-content-box-time-text'>{showTime}</Text>
            <Image className='tabber-content-box-time-img' src={`${IMGCDNURL}lpy/integral/select2.png`}/>
          </Picker>
        </View>
        <View className='tabber-content-box-selector'>
          <Picker mode='selector' range={initInfo === '0' ? sourceList : consumeList} value={startType} onChange={(e)=>handleClick(e)}>
            <Text className='tabber-content-box-selector-text'>{title}</Text>
            <Image className='tabber-content-box-selector-img' src={`${IMGCDNURL}lpy/integral/select1.png`}/>
          </Picker>
        </View>
      </View>
      <View className='tabber-content-box-numBox'>
        <View>{initInfo === '0' ? '获取积分：' : '消耗积分：'}<Text className='tabber-content-box-num-color'>{initInfo === '0' ? num.get : num.expend}</Text></View>
        <View onClick={handleJump} className='tabber-content-box-numBox-num'>{initInfo === '0' ? '消耗积分：' : '获取积分：'}<Text className='tabber-content-box-num-color'>{initInfo === '0' ? num.expend : num.get}</Text></View>
      </View>
      <View className='integral-content'>
        {!data.lists.length && <Nodata text={initInfo === '0'?'暂无积分来源记录':'暂无积分消耗记录'}/>}
        {data.lists.map((item,index)=>(
          <View key={index+index} onClick={()=>handleModal(item.id)}>
            <View className='integral-list'>
              <View className='integral-list-time'>
                <Text className='integral-time-year'>{item.y_m}</Text>
                <Text className='integral-time-day'>{item.day}</Text>
              </View>
              <View className='integral-list-item'>
                <View className='integral-list-title overwords'>{item.type_name}</View>
                <View className='integral-list-words overwords'>{initInfo === '0' ? item.ext : item.title}</View>
                <View className='integral-item-time'>时间：{item.his}<Text>{initInfo === '0' ? item.source_integral_string : item.tips}</Text></View>
              </View>
            </View>
          </View>
        ))}
      </View>
      {data.next_page === 0 && data.lists.length && <View className='integral-noData'>没有更多数据了</View>}
      {initInfo === '1' && modal && modalData&&
      <View className='tabber-Modal'>
        <View className='tabber-Modal-content'>
        <View onClick={() => { setModal(false) }} className='tabber-Modal-content-close'></View>
          <View className='tabber-Modal-content-scroll'>
            {modalData.expend_type !== 2 && 
            <View className='tabber-Modal-content-flexBox'>
              <View className='tabber-Modal-content-flexBox-left'>项目名称</View>
              <View className='tabber-Modal-content-flexBox-right'>{modalData.title}</View>
            </View>
            }
          <View className='tabber-Modal-content-flexBox'>
            <View>电话</View>
              <View className='tabber-content-box-num-color'>{modalData.user_mobile}({modalData.user_name})
              <View onClick={() => { Taro.makePhoneCall({ phoneNumber: modalData.user_mobile})}} className='tabber-Modal-content-flexBox-phone'>拨打</View>
              {modalData.show_complain !== 0 && <View className='tabber-Modal-content-flexBox-complaint' onClick={() => handleComplaint(modalData.id)}>投诉</View>}
            </View>
          </View>
            {modalData.expend_type === 2 && 
              <View>
                <View className='tabber-Modal-content-flexBox'>
                  <View>规模</View>
                <View className='tabber-content-box-num-color'>{modalData.team_composition_words}</View>
                </View>
                <View className='tabber-Modal-content-flexBox'>
                <View >接活省份</View>
                <View className='tabber-content-box-num-color'>{modalData.showProvinceList}</View>
                </View>
              </View>
            }
            <View className='tabber-Modal-content-flexBox-classifyName'>
              {modalData.classifyName.map((v,i)=>(
                <Text key={i + i} className='tabber-Modal-content-flexBox-classifyName-data'>
                  [{v}]
                </Text>
              ))}
          </View>
            <View className='clear'></View>
          <View className='tabber-Modal-content-flexBox-last'>
            <View>{modalData.detail}</View>
          </View>
        </View>
        </View>
      </View>
      }
      {complaintModal &&
        <View className='tabber-complaintModal'>
          <View className='tabber-complaintModal-content'>
            <View className='tabber-complaintModal-content-title'>投诉信息</View>
            <View className='tabber-complaintModal-content-tips'>请输入投诉内容</View>
            <View className='tabber-complaintModal-content-textareaBox'>
              <Textarea
                className='tabber-complaintModal-content-textarea'
                placeholder='请填写5~100字，必须含有汉字。（恶意投诉会被封号，请谨慎投诉！）'
                value={textarea}
                maxlength={100}
                onInput={(e) => handleTextarea(e)}
              />
            </View>
            <View className='tabber-complaintModal-footer'>
              <View className='tabber-complaintModal-footer-cancel' onClick={()=>{setComplaintModal(false)}}>取消</View>
            <View className='tabber-complaintModal-footer-cancel' onClick={() => handleSubmit()}>确定</View>
            </View>
          </View>
        </View>
      }
    </View>
  )
}

Tabber.config = {
  navigationBarTitleText: '',
} as Config