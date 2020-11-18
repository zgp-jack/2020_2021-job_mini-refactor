import Taro, { Config, useDidShow, useState,useRouter } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { hotAreas } from '../../../utils/request/index'; 
import { useDispatch, useSelector } from '@tarojs/redux'
import { HotType } from './index.d'
import Msg, { ShowActionModal} from '../../../utils/msg';
import AREAS, { seachAreasList } from '../../../models/area'
import { useResumeType } from '../../../reducers/resume_top';
import { ParentItems } from '../../../models/area'
import { resume_topObj_arrStr } from '../../../utils/request/index.d';
import { HistoryInfo } from '../../../config/store';
import { setClickResumeTop } from '../../../actions/resume_top';
import './index.scss'

export default function Region() {
  const dispatch = useDispatch();
  const router: Taro.RouterInfo = useRouter()
  //获取传过来的最大省市
  let { maxCity, maxProvince } = router.params;
  // 获取置顶信息
  const resumeTopData: useResumeType = useSelector<any, useResumeType>(state => state['resumeTop']);
  // 热门城市
  const [hot, setHot] = useState<HotType[]>([]);
  // 所有城市
  const [areasData, setAreasData] = useState<ParentItems[]>([]);
  // 已选择内容
  const [clickData, setClickData] = useState <resume_topObj_arrStr[]>([]);
  // 光标
  const [onFocus, setOnFocus] = useState<boolean>(false);
  // 搜索出来的内容
  const [seachList,setSeachList] = useState<HotType[]>([]);
  // 搜索历史
  const [history, setHistory] = useState <HotType[]>([]);
  // 输入框
  const [inputVal,setInputVal] = useState<string>('');
  // 显示搜索
  const [isHistory, setIsHistory] = useState <boolean>(false);
  useDidShow(()=>{
    hotAreas().then((res=>{
      if(res.errcode == 'ok'){
        let hotData = [...res.data];
        // 热门城市
        for (let i = 0; i < hotData.length; i++) {
          hotData[i].click = false;
          for (let z = 0; z < clickResumeTopObj.length; z++) {
            if (hotData[i].id == clickResumeTopObj[z].id) {
              hotData[i].click = true;
            }
          }
        }
        setHot(hotData)
      }else{
        Msg(res.errmsg)
      }
    }))
    const clickResumeTopObj = resumeTopData.clickResumeTopObj||[];
    const data = [...AREAS];
    // 全部城市
    for(let i =0;i<data.length;i++){
      for(let j =0;j<data[i].children.length;j++){
        data[i].children[j].click = false;
        for (let z = 0; z < clickResumeTopObj.length;z++){
          if (data[i].children[j].id == clickResumeTopObj[z].id){
            data[i].children[j].click = true;
          }
        }
      }
    }
    setAreasData(data);
    for (let i = 0; i < clickResumeTopObj.length;i++){
      clickResumeTopObj[i].click = true;
    }
    // 所有点击的值
    setClickData([...clickResumeTopObj])
    // 获取历史记录
    const historyArr = Taro.getStorageSync(HistoryInfo);
    setHistory(historyArr||[])
    setIsHistory(false);
  })
  // 点击
  const handleClick = (val,type?:string)=>{
    // 缓存搜索
    if (type) {
      let data = Taro.getStorageSync(HistoryInfo);
      console.error(data,'ddta')
      if (data.length) {
        let arr:HotType[] = [];
        arr = [...data, val]
        Taro.setStorageSync(HistoryInfo, arr);
        setHistory(arr)
      } else {
        Taro.setStorageSync(HistoryInfo, [val]);
        setHistory([val])
      }
    }
    let data = [...areasData];
    let hotData = [...hot];
    let clickDataItem = [...clickData];
    // 全国
    if(val.pid == '0'){
      // 热门城市
      if(!val.click){
        for (let i = 0; i < hotData.length; i++) {
          hotData[i].click = false;
        }
      }
      for(let i =0;i<hotData.length;i++){
        if(hotData[i].id == val.id){
          hotData[i].click = !val.click;
        }
      }
      // 全部
      for(let i=0;i<data.length;i++){
        for(let j =0;j<data[i].children.length;j++){
          data[i].children[j].click =false;
        }
      }
      if(!val.click){
        clickDataItem = [];
      }else{
        // 点击
        clickDataItem = [val];
      }
    }else{
      // 这是判断省市是否还能点击
      if(clickDataItem.length && !val.click){
        let city = 0;
        let provinces = 0;
        for(let i =0;i<clickDataItem.length;i++){
          if(clickDataItem[i].pid == '1'){
            provinces++;
          }else{
            city++;
          }
        }
        if ((+maxProvince == provinces && val.pid == '1') || (+maxCity == city && val.pid != '1')) {
          ShowActionModal({ 
            msg: `最多可同时置顶个${maxCity}市、${maxProvince}个省或直辖市` ,
            success:()=>{
              console.error(1111)
            if(type){
              setHistory([]);
              setIsHistory(false);
              setOnFocus(false);
            }
          }})
          return
        }
      }
      // 判断是省还是市
      if(val.pid =='1'){
        // 没有点击
        if(!val.click){
          for(let i =0;i<data.length;i++){
            if(data[i].pid == val.pid){
              for(let j=0;j<data[i].children.length;j++){
                data[i].children[j].click = false;
                if (data[i].children[j].id == val.id){
                  data[i].children[j].click = true;
                }
              }
            }
          }
          clickDataItem = clickDataItem.filter(item => item.pid != val.id);
          clickDataItem = [...clickDataItem,val];
          clickDataItem = clickDataItem.filter(item =>item.pid !='0');
        }else{
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].children.length; j++) {
              if (data[i].children[j].id == val.id) {
                data[i].children[j].click = false;
              }
            }
          }
          clickDataItem = clickDataItem.filter(item => item.id != val.id);
        }
        hotData = handleHot(val);
      }else{
        // 判断为市
        if(val.click){
          for(let i=0;i<data.length;i++){
            for(let j =0;j<data[i].children.length;j++){
              if(data[i].children[j].id == val.id){
                data[i].children[j].click = false
              }
            }
          }
          clickDataItem = clickDataItem.filter(item => item.id != val.id);
        }else{
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].children.length; j++) {
              if (data[i].children[j].id == val.id) {
                data[i].children[j].click = true
              }
              if(data[i].children[j].id == val.pid){
                data[i].children[j].click = false
              }
            }
          }
          // 如果选择了当前市要把当前省删除
          for(let i =0;i<clickDataItem.length;i++){
            if(clickDataItem[i].id == val.pid){
              clickDataItem.splice(i,1);
            }
          }
          clickDataItem = [...clickDataItem,val];
          clickDataItem = clickDataItem.filter(item=>item.pid != '0');
          
        }
        hotData = handleHot(val);
      }
    }
    setAreasData(data);
    setClickData(clickDataItem);
    setHot(hotData);
    setOnFocus(false);
    setSeachList([])
    console.error(2312)
  }
  // 热门城市
  const handleHot = (val)=>{
    let hotData = [...hot];
    for(let i=0;i<hotData.length;i++){
      if(hotData[i].pid !== '0' ){
        hotData[0].click = false;
      }
      if(hotData[i].id == val.id){
        hotData[i].click = !val.click;
      }
    }
    return hotData;
  }
  // 获取光标
  const handleonFocus = ()=>{
    setOnFocus(true);
    setIsHistory(true);
    setSeachList([]);
  }
  // 搜索
  const handleSeach = ()=>{
    const data = seachAreasList(inputVal);
    setSeachList(data);
  }
  // 确认选择
  const handleJump = ()=>{
    const data = [...clickData];
    console.error(data,'data');
    dispatch(setClickResumeTop(data))
    Taro.navigateBack();
  }
  // 输入搜索
  const handleInput = (e)=>{
    setIsHistory(false);
    setInputVal(e.detail.value);
    const data = seachAreasList(e.detail.value);
    console.error(data,'data');
    setSeachList(data);
  }
  // 清除搜索
  const handleEliminate = ()=>{
    Taro.removeStorageSync(HistoryInfo);
    setHistory([]);
    setIsHistory(false);
  }
  return(
    <View className='region'>
      {!onFocus && 
        <View>
          <View className='region-top'>
            <View className='region-heard'>
              <View className='region-heard-seach'>
                  <Input placeholder='请输入城市名' onFocus={handleonFocus} className='region-heard-seach-input' />
                  <Text onClick={handleSeach} className='region-heard-seach-btn' >搜索</Text>
                </View>
            </View>
            {!onFocus && <View className='region-top-tips'>请选择置顶范围：  </View>}
          </View>
          <View className='region-content'>
            <View className='region-content-hotCity-content-title'>热门城市</View>
            <View className='region-content-hotCity-content'>
              {hot.map((v) => (
                <View key={v.id} className={v.click ? 'region-content-hotCity-content-list-click' : 'region-content-hotCity-content-list'} onClick={() => handleClick(v)}>{v.name}
                {v.is_hot == '0' &&
                  <Image src={`${IMGCDNURL}lpy/recruit/settop-hot.png`} className='region-content-hotCity-content-list-img'/>
                }
                </View>
              ))}
            </View>
            <View className='region-content-allCity'>
              {areasData.map((v)=>(
                <View>
                  {v.children.length && <View>
                    <View className='region-content-allCity-tips'>{v.ad_name}</View>
                    <View className='region-content-allCity-box'>
                      {v.children.map(((val,i)=>(
                        <View key={val.id} className={val.click ? 'region-content-allCity-box-list-click' : 'region-content-allCity-box-list'} onClick={()=>{handleClick(val)}}>{i == 0 ? '全省置顶' : val.name}
                          {i == 0 && <Image src={`${IMGCDNURL}lpy/recruit/settop-hot.png`} className='region-content-allCity-box-list-img' />}
                        </View>
                      )))}
                    </View>
                  </View>}
                </View>
              ))}
            </View>
            <View className='region-content-box'>
              <View className='region-content-box-btn' onClick={handleJump}>确认选择</View>
            </View>
          </View>
        </View>
      }
      {onFocus &&
        <View className={history.length ? 'region-seachContent regin-hight100vh' : 'region-seachContent regin-hight'}>
        <View className='region-heard'>
          <View className='region-seachContent-seach'>
            <Input placeholder='请输入城市名' onInput={(e) => {handleInput(e)}} onFocus={handleonFocus} className='region-seachContent-seach-input' />
            <Text onClick={handleSeach} className='region-seachContent-seach-btn' >搜索</Text>
          </View>
          <View className='region-seachContent-seach-history'>
            {history.length && isHistory &&
              <View>
                <View className='region-seachContent-seach-history-flex'>
                  <View>搜索历史</View><View onClick={handleEliminate}>
                    <Image src={`${IMGCDNURL}zyb/garbageIcon.png`} className='region-seachContent-seach-history-img'/>
                  </View>
                </View>
              <View className='region-seachContent-seach-history-flex-box'>
                  {history.map((v)=>(
                    <View className='region-seachContent-seach-history-flex-box-list' key={v.id}>{v.name}</View>
                  ))}
                </View>
              </View>
              }
              <View className='region-seachContent-seach-seachList'>
                {seachList.map((v)=>(
                  <View onClick={()=>handleClick(v,'seach')} className='region-seachContent-seach-seachList-list' key={v.id}>{v.allName}</View>
                ))}
              </View>
            </View>
        </View>
        {seachList.length == 0 && inputVal!='' && onFocus &&
        <View className='region-seachContent-noContent'>暂未找到相关城市</View>
        }
      </View>}
    </View>
  )
}
Region.config = {
  navigationBarTitleText: '招工置顶',
} as Config