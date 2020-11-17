import Taro, { Config, useDidShow, useState,useRouter } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { hotAreas } from '../../../utils/request/index'; 
import { useDispatch, useSelector } from '@tarojs/redux'
import { HotType } from './index.d'
import Msg, { ShowActionModal} from '../../../utils/msg';
import AREAS from '../../../models/area'
import { useResumeType } from '../../../reducers/resume_top';
import { ParentItems } from '../../../models/area'
import { resume_topObj_arrStr } from '../../../utils/request/index.d';
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
  useDidShow(()=>{
    hotAreas().then((res=>{
      if(res.errcode == 'ok'){
        let hotData = [...res.data];
        // 热门城市
        for (let i = 0; i < hotData.length; i++) {
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
        for (let z = 0; z < clickResumeTopObj.length;z++){
          if (data[i].children[j].id == clickResumeTopObj[z].id){
            data[i].children[j].click = true;
          }
        }
      }
    }
    setAreasData(data);
    // 所有点击的值
    setClickData([...clickResumeTopObj])
  })
  // 点击
  const handleClick = (val)=>{
    let data = [...areasData];
    let hotData = [...hot];
    let clickDataItem = [...clickData];
    let hotDataArr: HotType[] = [];
    // 设置全选内容并判断
    if (clickDataItem.length && val.pid != '0' && (val.pid != '0'&&!val.click)){
      let city = 0;
      let provinces = 0;
      for (let i = 0; i < clickDataItem.length;i++){
        if(clickDataItem[i].pid =='1'){
          provinces++;
        } else if (clickDataItem[i].pid != '1' && clickDataItem[i].pid != '0'){
          city++;
        }
      }
      console.error(provinces,'provinces');
      console.error(city,'city')
      if ((+maxProvince == provinces && val.pid == '1') || (+maxCity == city && val.pid=='1' && val.pid=='0') ){
        ShowActionModal({ msg:`最多可同时置顶个${maxCity}市、${maxProvince}个省或直辖市`})
        return
      }
    }

    // 判断是全国的话，其他取消全选
    let clickArr: HotType[] = [];
    if(val.pid == '0'){
      for (let i = 0; i < hotData.length; i++) {
        hotData[i].click = false;
      }
      console.error(val,'val')
      if(val.click){
        console.error(2);
        clickArr = clickDataItem.filter(item => item != val.id);
      }else{
        console.error(1)
        clickArr = [val];
        console.error([val],'12')
        for (let i = 0; i < hotData.length; i++) {
          if (hotData[i].id == val.id){
            hotData[i].click = true;
          }
        }
      }
      console.error(clickArr,'32131')
      console.error(val.click,'1111');
      hotDataArr = hotData;
      console.error(hotDataArr,'222')
      for (let i = 0; i < data.length;i++){
        for (let j = 0; j < data[i].children.length;j++){
          data[i].children[j].click = false;
        }
      }
    }else if(val.pid == '1'){
      // 判断省份
      if (val.click) {
        for(let i =0;i<clickDataItem.length;i++){
          if (clickDataItem[i].pid == val.pid || clickDataItem[i].pid == '0'){
            clickDataItem.splice(i,1);
          }
        }
      }
      clickArr = [...clickDataItem,...val];
      for(let i =0;i<data.length;i++){
        for(let j =0;j<data[i].children.length;j++){
          data[i].children[j].click = false;
          if(data[i].children[j].click == val.id){
            data[i].children[j].click = true
          }
        }
      }
      // 热门城市
      const hotArr = handleHot(val);
      hotDataArr = hotArr;
    }else{

    }
    console.error(hotDataArr,'32131')
    setAreasData(data);
    setHot(hotDataArr);
    setClickData(clickArr);
  }
  // 热门城市
  const handleHot = (val)=>{
    let hotData = [...hot];
    for(let i=0;i<hotData.length;i++){
      if(hotData[i].pid == '0'){
        hotData[i].click = false;
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
  }
  // 搜索
  const handleSeach = ()=>{
    setOnFocus(false);
  }
  return(
    <View className='region'>
      <View className='region-top'>
      <View className='region-heard'>
        <View className='region-heard-seach'>
            <Input placeholder='请输入城市名' onFocus={handleonFocus} className='region-heard-seach-input' />
            <Text onClick={handleSeach} className='region-heard-seach-btn' >搜索</Text>
          </View>
      </View>
      {!onFocus && <View className='region-top-tips'>请选择置顶范围：  </View>}
      </View>
      {!onFocus && 
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
          <View className='region-content-box-btn'>确认选择</View>
        </View>
      </View>
      }
    </View>
  )
}
Region.config = {
  navigationBarTitleText: '招工置顶',
} as Config