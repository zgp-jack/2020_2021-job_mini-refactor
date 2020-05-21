import Taro, { Config, useEffect, useState, useRouter, createContext } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { jobTopHotAreasAction } from '../../../utils/request/index'
import { jobTopHotAreasData } from '../../../utils/request/index.d'
import AREAS from '../../../models/area'
import { SearchList } from '../../../config/store'
import { IMGCDNURL } from '../../../config';
import './index.scss'

export interface Distruction{
  params: ParamsType,
  setParams: (city: areDataChildrenType[], province: areDataChildrenType[]) => void,
}

export const context = createContext<Distruction>({} as Distruction)

interface DataType {
  item: jobTopHotAreasData[]
}
interface AreType{
  areData: areDataType[]
}
interface areDataType{
  ad_name: string
  children: areDataChildrenType[]
  id: string
  name: string
  click:boolean
  listName?:string
  index?:number
}
interface areDataChildrenType{
  ad_name: string
  id: string
  name: string
  pid: string,
  click:boolean,
  listName?: string
}
interface searchDataType {
  list: areDataChildrenType[],
}
interface HistoryType {
  historylist: areDataChildrenType[]
}

interface ParamsType {
  city: areDataChildrenType[],
  province: areDataChildrenType[],
}

export default function Distruction() {
  const router: Taro.RouterInfo = useRouter()
  let { max_city, max_province  } = router.params;
  // 热门城市
  const [data, setData] = useState<DataType>({
    item:[],
  })
  // 所有省份
  const [are, setAre] = useState<AreType>({
    areData: []
  })
  // 是否点击输入框
  const [clickInput, setClickInput] = useState<boolean>(false)
  // 输入输入框时
  const [onInput, setOnInput] = useState<Boolean>(false);
  // 搜索的内容
  const [searchData, setSearchData] = useState<searchDataType>({
    list:[]
  })
  // 输入框内容
  const [inputVal,setInputVal] = useState<string>('')
  // 搜索历史
  const [history, setHistory] = useState <HistoryType>({
    historylist:[]
  })
  // 点击参数
  const [params, setParams] = useState<ParamsType>({
    city:[],
    province:[],
  })
  const [showModal, setShowModal] = useState<boolean>(false)
  // 删除后在点击
  const [del,setDel] = useState<Boolean>(false)
  useEffect(()=>{
    // 获取搜索历史
    let searchItem: [] = Taro.getStorageSync(SearchList)
    if (searchItem){
      setHistory({ historylist: searchItem})
    }
    jobTopHotAreasAction().then(res=>{
      setData({item:res.data});
      const item:any =[];
      AREAS.map((v)=>{
        if(v.children.length>0){
          item.push(v);
        }
      });
      for(let i =0;i<item.length;i++){
        for (let j = 0; j < item[i].children.length;j++){
          item[i].click = false;
          item[i].children[j].click = false;
          // if(item[i].name === item[i].children[j].name){
          //   item[i].children[j].name = '全省置顶'
          // }
        }
      }
      setAre({areData:item})
    })
    
  },[])
  // 点击输入框
  const handleInput = ()=>{
    setClickInput(true);
  }
  // 输入输入框
  const handleOnInput = (e:any)=>{
    setInputVal(e.detail.value);
    setOnInput(true);
    let list:any =[];
    AREAS.map(v=>{
      if (v.name.indexOf(e.detail.value)>=0){
        list.push(v);
      }
      v.children.map((val)=>{
        if(val.name.indexOf(e.detail.value) >= 0){
          list.push(val);
        }
      })
    })
    let data:any = [];
    list.map((v:any)=>{
      v.listName = v.ad_name+'-'+v.name;
      if (v.children && v.children.length>0){
        v.children.map((val:any)=>{
          val.listName = v.name + '-' + val.name;
          data.push(val)
          return val;
        })
      }
      data.push(v);
      return v;
    })
    setSearchData({list:data});
  }
  // 热门点击
  const handleListAreas = (v:any)=>{
    // 点击后，所有的内容也要设置
    // 只能点击两个省，三个市，点了两个省还有点三个市，点了后还可以取消
    // 市
    if(v.pid !== '1'){
      const cityItem = JSON.parse(JSON.stringify(params.city));
      // 已选择大于限制大小
      // if (cityItem.length > (parseInt(max_city) - 1)){
      //     Taro.showModal({
      //       title: '温馨提示',
      //       content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
      //       showCancel: false,
      //     })
      // }else{
        if (cityItem.length){
          const val = JSON.parse(JSON.stringify(cityItem))
          const dataItem =  val.find((item)=>item.id ===v.id );
          if (dataItem) {
            val.map((item, i) => {
              if (item.id === v.id) {
                val.splice(i, 1)
              }
            })
          } else {
            if (cityItem.length >= (parseInt(max_city))) {
              Taro.showModal({
                title: '温馨提示',
                content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
                showCancel: false,
              })
              return;
            }
            val.push(v)
          }
          const arr = data.item.map(val => {
            if (val.id === v.id) {
              val.click = !v.click
            }
            return val;
          })
          setData({item:arr})
          setParams({city:val,province:params.province})
        }else{
          const arr = data.item.map((val) => {
            if (val.id === v.id) {
              val.click = !v.click
            }
            return val;
          })
          setData({ item: arr });
          const val = JSON.parse(JSON.stringify(cityItem))
          val.push(v);
          setParams({ city: val, province: params.province })
        }
      // }
    // 省
    }else{  
      const provinceItem = JSON.parse(JSON.stringify(params.province));
      if (provinceItem.length) {
        const val = JSON.parse(JSON.stringify(provinceItem))
        const dataItem = val.find((item) => item.id === v.id);
        if (dataItem) {
          val.map((item, i) => {
            if (item.id === v.id) {
              val.splice(i, 1)
            }
          })
        } else {
          if (provinceItem.length >= (parseInt(max_province))) {
            Taro.showModal({
              title: '温馨提示',
              content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
              showCancel: false,
            })
            return;
          }
          val.push(v)
        }
        const arr = data.item.map(val => {
          if (val.id === v.id) {
            val.click = !v.click
          }
          return val;
        })
        setData({ item: arr })
        setParams({ city: params.city, province: val })
      } else {
        const arr = data.item.map((val) => {
          if (val.id === v.id) {
            val.click = !v.click
          }
          return val;
        })
        setData({ item: arr });
        const val = JSON.parse(JSON.stringify(provinceItem))
        val.push(v);
        setParams({ city: params.city, province: val })
      }
    }
    //   const province = JSON.parse(JSON.stringify(params.province));
    //   for (let i = 0; i < province.length; i++) {
    //     if (province[i].id === v.id) {
    //       province.splice(i, 1);
    //     } else {
    //       province.push(province[i]);
    //     }
    //   }
    //   const itemList: any = data.item.map((val) => {
    //     if (val.id === v.id) {
    //       val.click = !v.click
    //     }
    //     return val;
    //   })
    //   setData({ item: itemList })
    // }
    
    // if (v.pid !== '1' && (params.city.length > (parseInt(max_city)-1)) ){
    //   Taro.showModal({
    //     title: '温馨提示',
    //     content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
    //     showCancel: false,
    //   })
    // } else if (v.pid === '1' && (params.province.length > (parseInt(max_province)-1))){
    //   Taro.showModal({
    //     title: '温馨提示',
    //     content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
    //     showCancel: false,
    //   })
    // }else{
    //   if (v.pid === '1') {
    //     let mydata = JSON.parse(JSON.stringify(params.province));
    //     mydata.push(v)
    //     setParams({ city: params.city, province: mydata })
    //   }else{
    //     let mydata = JSON.parse(JSON.stringify(params.city));
    //     mydata.push(v)
    //     setParams({ city: mydata, province:params.province})
    //   }
    //   const itemList: any = data.item.map((val) => {
    //     if (val.id === v.id) {
    //       val.click = !v.click
    //     }
    //     return val;
    //   })
    //   setData({ item: itemList })
    // }
  }
  // 点击其他省市
  const handleAllAre = (v:any)=>{
    if (v.pid !== '1' && (params.city.length > (parseInt(max_city) - 1))) {
      Taro.showModal({
        title: '温馨提示',
        content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
        showCancel: false,
      })
    } else if (v.pid === '1' && (params.province.length > (parseInt(max_province) - 1))) {
      Taro.showModal({
        title: '温馨提示',
        content: `最多可同时置顶${max_city}个市、${max_province}个省或直辖市`,
        showCancel: false,
      })
    } else {
      if (v.pid === '1') {
        let mydata = JSON.parse(JSON.stringify(params.province));
        mydata.push(v)
        setParams({ city: params.city, province: mydata })
      } else {
        let mydata = JSON.parse(JSON.stringify(params.city));
        mydata.push(v)
        setParams({ city: mydata, province: params.province })
      }
      const itemList = are.areData.map((val) => {
          val.children.map(item=>{
            // if(item.click){
              if (item.id === v.id) {
                item.click = !v.click
              }
            // }
            return item
          })
        return val;
      })
      setAre({ areData: itemList });
    }
  }
  const handleSeach = (v:any)=>{
    handleListAreas(v);
    handleAllAre(v);
    setClickInput(false);
    setOnInput(false)
    setInputVal('')
    history.historylist.unshift(v);
    const hash = {};
    const arr =  history.historylist.reduce(function (item:any, next) {
      hash[next.name] ? '' : hash[next.name] = true && item.push(next);
      return item;
    }, []);
    setHistory({ historylist: arr })
    if (history.historylist.length > 6) {
      history.historylist.pop()
    }
    // 设置搜索历史
    Taro.setStorageSync(SearchList, history.historylist)
  }
  // 清除历史
  const handleCloseHistory = ()=>{
    setHistory({historylist:[]});
    Taro.clearStorageSync();
  }
  // 确认选择
  const handleClick = ()=>{
    Taro.navigateBack({
      delta: 1
    })
  }
  // 需要传递的值
  const value: Distruction = {
    params: params,
    setParams: (city: areDataChildrenType[], province: areDataChildrenType[]) => setParams({ city, province}),
    // setAreaInfo: (item: UserLastPublishRecruitArea) => setAreaInfo(item),
    // setPublishArea: (val: string) => {
    //   if (!model) return
    //   setModel({ ...model, address: val })
    // }
  }
  return(
    <context.Provider value={value}>
    <View className='distruction'>
      <View className={clickInput ? 'distruction-head-click' :'distruction-head'}>
      <View className='distruction-top'>
          <Input 
            className='distruction-top-input' 
            placeholder='输入城市名字进行搜素' 
            onClick={handleInput} 
            value={inputVal}
            onInput={(e) => (handleOnInput(e))}
            />
        <View className='distruction-top-seach'>搜索</View>
      </View>
        {onInput && (searchData.list.length>0?
          <View className='distruction-top-seach-list-box'>
          {searchData.list.map(v=>(
            <View onClick={()=>handleSeach(v)} className='distruction-top-seach-list'>{v.listName}</View>
          ))}
        </View>:
          <View className='distruction-head-click-cityList'>
            <View className='distruction-head-click-cityList-text'>暂未找到相关城市</View>
          </View>
        )
        }
        {clickInput && !onInput && history.historylist.length>0 &&
          <View className='distruction-head-click-seachList'>
          <View className='distruction-head-click-seachList-head'>
              <View>搜索历史</View>
            <Image onClick={handleCloseHistory} src='../../../images/laji.png' className='distruction-head-click-seachList-head-image'/>
          </View>
          <View className='distruction-head-click-seachList-list-box'>
            { history.historylist.map(v=>(
              <View 
                key={v.id} 
                className='distruction-head-click-seachList-list'
                onClick={()=>handleSeach(v)}
                >{v.name}</View>
            ))}
          </View>
        </View>}
        <View className={clickInput ?'distruction-none':'distruction-title'}>请选择置顶范围</View>
    </View>
      <View className='distruction-content'>
        <View className='distruction-content-title'>热门城市</View>
        <View className='distruction-content-box'>
          {data.item.map((v)=>(
            <View onClick={() => { handleListAreas(v) }} className={v.click ? 'distruction-content-box-list-click' :'distruction-content-box-list'} key={v.id}>{v.name}</View>
          ))}
        </View>
      </View>
      <View className='distruction-content-are-content'>
        {are.areData.map((v) => (
          <View className='distruction-content-are-content-box'>
            <View className='distruction-content-are-content-box-title'>{v.ad_name}</View>
            <View className='distruction-content-are-content-box-list'>
              {v.children.map((val,index) => (
                <View onClick={() => handleAllAre(val)} className={val.click ? 'distruction-content-are-content-box-list-item-click' : 'distruction-content-are-content-box-list-item'}>{index == 0 && v.index != 0?"全省置顶":val.name}
                  <Image className={val.pid === '1' ? 'distruction-content-are-content-box-list-img' : 'distruction-content-are-content-box-list-noneimg'} src={`${IMGCDNURL}lpy/recruit/settop-hot.png`}/>
                  </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <View className='distruction-footerBtn'>
        <View className='distruction-footerBtn-btn' onClick={handleClick}>确认选择</View>
      </View>
    </View>
    </context.Provider>
  )
}
Distruction.config = {
  navigationBarTitleText: '招工置顶',
} as Config