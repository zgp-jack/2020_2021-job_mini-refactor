import Taro, { Config, useEffect, useState, useRouter } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { jobTopHotAreasAction } from '../../../utils/request/index'
import { jobTopHotAreasData } from '../../../utils/request/index.d'
import AREAS from '../../../models/area'
import { SearchList } from '../../../config/store'
import { IMGCDNURL } from '../../../config';
import { useDispatch, useSelector } from '@tarojs/redux'
import setRecruitTopArea from '../../../actions/recruit_top'
import './index.scss'

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
  ad_name?: string
  id: string
  name: string
  pid: string,
  click:boolean,
  listName?: string
}
interface areDataChildrenType {
  ad_name?: string
  id: string
  name: string
  pid: string,
  click: boolean,
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
  whole: areDataChildrenType[],
}

export default function Distruction() {
  
  const AreParams = useSelector<any, ParamsType>(store => store.recruitTop['AreParams'])
  const router: Taro.RouterInfo = useRouter()
  const dispatch = useDispatch()

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
    whole:[],
  })
  // 设置参数
  useEffect(()=>{
    // 获取搜索历史
    let searchItem: [] = Taro.getStorageSync(SearchList)
    if (searchItem){
      setHistory({ historylist: searchItem})
    }
    jobTopHotAreasAction().then(res=>{
      if (res.errcode == "ok") {
      const item: any = [];
      AREAS.map((v) => {
        if (v.children.length > 0) {
          item.push(v);
        }
      });
      for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].children.length; j++) {
          item[i].click = false;
          item[i].children[j].click = false;
        }
      }
      if (AreParams){
        // 热门
        res.data.map((val)=>{
          if(AreParams.city){
            AreParams.city.map((v)=>{
              if(val.id === v.id){
                val.click = true;
              }
              return v;
            })
          }
          if(AreParams.province){
            AreParams.province.map((v)=>{
              if(val.id === v.id){
                val.click = true;
              }
              return v;
            })
          }
        })
        // 所有
        item.map((val)=>{
          val.children.map((itme)=>{
            if (AreParams.city) {
              AreParams.city.map((v) => {
                if (itme.id === v.id) {
                  itme.click = true;
                }
                return v;
              })
            }
            if (AreParams.province) {
              AreParams.province.map((v) => {
                if (itme.id === v.id) {
                  itme.click = true;
                }
                return v;
              })
            }
          })
        })
      }
      setData({item:res.data});
      setAre({areData:item})
      setParams({city:AreParams.city,province:AreParams.province,whole:[]})
    }else{
      Taro.showModal({
        title: '温馨提示',
        content: res.errmsg,
        showCancel: false,
      })
    }
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
  // 点击其他省市
  const handleAllAre = (v:any,type:number)=>{
    // 点击市的时候，该市的省取消，点击省的时候,该市的省取消
    if (v.pid === '0'){
      // 点击全国，其他热门与省市都为false
      // 热门城市
      const hotList = JSON.parse(JSON.stringify(data.item));
      // 省市
      const allList = JSON.parse(JSON.stringify(are.areData))
      let hot,all,list:any=[];
      // 再次点击
      if(v.click){
        // 热门
        hot = hotList.map((val)=>{
          if(val.id === v.id){
            val.click = false
          }
          return val;
        })
        all = allList.map(val => {
          if (val.children) {
            val.children.map(item => {
              item.click = false;
            })
          }
          return val
        })
        // 选择取消
        // setWhole(false)
      }else{
        // 第一次点击
        hot = hotList.map((val) => {
          //出了点击的其他都为false
          if(val.id === v.id) {
            val.click = true;
            list.push(val);
          }else{
            val.click = false
          }
          return val;
        })
        // 全部
        all = allList.map(val => {
          if (val.children){
            val.children.map(item => {
              item.click = false;
            })
          }
          return val
        })
        // 选择全国
        // setWhole(true)
      }
      setAre({ areData: all });
      setData({ item: hot})
      setParams({ city: [], province: [],whole:list })
      // 选择市的时候
    }else if (v.pid !== '1' && v.pid !== '0') {
      const cityItem = JSON.parse(JSON.stringify(params.city));
      // 已选择大于限制大小
      if (cityItem.length) {
        const val = JSON.parse(JSON.stringify(cityItem))
        const dataItem = val.find((item) => item.id === v.id);
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
        const itemList = are.areData.map((val) => {
          val.children.map(item => {
            if (item.id === v.id) {
              if(type === 1){
                item.click = v.click
              }else{
                item.click = !v.click
                val.children[0].click = false
                }
              }
              return item
          })
          return val;
        })
        setAre({ areData: itemList });
        setData({ item: arr })
        const provinceList = JSON.parse(JSON.stringify(params.province))
        are.areData.map((val) => {
          if (val.children) {
            val.children.map(item => {
              if (item.id === v.id) {
                provinceList.map((list, i) => {
                  if (list.id === val.id) {
                    provinceList.splice(i, 1)
                  }
                })
              }
            })
          }
        })
        setParams({ city: val, province: provinceList,whole:[] })
      } else {
        const arr = data.item.map((val) => {
          if (val.id === v.id) {
            val.click = !v.click
          }else{
            if(val.pid === '0'){
              val.click = false;
            }
          }
          return val;
        })
        const itemList = are.areData.map((val) => {
          if(val.id !== v.id){
            val.children.map(item => {
              if (item.id === v.id) {
                if(type === 1){
                  item.click = v.click
                }else{
                  item.click = !v.click
                  // 清除该组的省
                  val.children[0].click = false
                }
              }
              if(item.pid === '1'){
                val.children.map((list)=>{
                  if(list.id === v.id){
                    list.click = false
                  }
                })
              }
              return item;
            })
          }
          return val;
        })
        // 第一次点击市的时候，该市的省取消
        setAre({ areData: itemList });
        setData({ item: arr });
        const val = JSON.parse(JSON.stringify(cityItem))
        val.push(v);
        const provinceList = JSON.parse(JSON.stringify(params.province))
        // 判断省里有点击的市，就删除省
        are.areData.map((val) => {
          if(val.children){
            val.children.map(item=>{
              if(item.id === v.id){
                provinceList.map((list,i)=>{
                  if (list.id === val.id){
                    provinceList.splice(i,1)
                  }
                })
              }
            })
          }
        })
        setParams({ city: val, province: provinceList,whole:[] })
      }
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
        const itemList = are.areData.map((val) => {
          // 判断不是全国置顶
          if(val.id !== v.id){
            val.children.map(item => {
              if (item.id === v.id) {
                item.click = !v.click
              }
              return item
            })
          }else{
            // 全国置顶全部变为false
            val.children.map(item => {
              if (item.id === v.id) {
                item.click = !v.click
              }else{
                item.click = false
              }
              return item
            })
          }
          return val;
        })
        // 点击省，删除市
        const cityList = JSON.parse(JSON.stringify(params.city))
        are.areData.map((val) => {
          if (val.id === v.id) {
            val.children.map((item) => {
              cityList.map((list, i) => {
                if (item.id === list.id) {
                  cityList.splice(i, 1)
                  
                }
              })
            })
          }
        })
        setAre({ areData: itemList });
        setData({ item: arr })
        setParams({ city: cityList, province: val,whole:[] })
      } else {
        const List = JSON.parse(JSON.stringify(are.areData))
        // 点击市的时候把省取消
        for (let i = 0; i < List.length;i++){
          if (List[i].id === v.id ){
            if(List[i].children.length){
              List[i].children.map((val)=>{
                if(val.id === v.id){
                  val.click = !v.click
                }else{
                  val.click = false
                }
              })
            }
          }
        }
        // 点击省，删除市
        const cityList = JSON.parse(JSON.stringify(params.city))
        are.areData.map((val) => {
          if (val.id === v.id) {
            val.children.map((item) => {
              data.item.map((val) => {
                if (val.id === item.id) {
                  val.click = false
                }
                return val;
              })
              cityList.map((list, i) => {
                if (item.id === list.id) {
                  cityList.splice(i, 1)
                }
              })
            })
          }
        })
        const hot = data.item.map((val)=>{
          if(val.id === v.id){
            val.click = true
          }else{
            if(val.pid === '0'){
              val.click = false
            }
          }
          return val;
        })
        setAre({ areData: List });
        setData({ item: hot});
        const val = JSON.parse(JSON.stringify(provinceItem))
        val.push(v);
        setParams({ city: cityList, province: val,whole:[] })
      }
    }
  }
  const handleSeach = (v:any)=>{
    handleAllAre(v,0);
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
    console.log(params)
    dispatch(setRecruitTopArea({ ...params}))
    Taro.navigateBack({
      delta: 1
    })
  }
  return(
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
            <View onClick={() => { handleAllAre(v,1) }} className={v.click ? 'distruction-content-box-list-click' :'distruction-content-box-list'} key={v.id}>{v.name}
              <Image className={v.pid === '0' ? 'distruction-content-are-content-box-list-img' : 'distruction-content-are-content-box-list-noneimg'} src={`${IMGCDNURL}lpy/recruit/settop-hot.png`} />
            </View>
          ))}
        </View>
      </View>
      <View className='distruction-content-are-content'>
        {are.areData.map((v) => (
          <View className='distruction-content-are-content-box'>
            <View className='distruction-content-are-content-box-title'>{v.ad_name}</View>
            <View className='distruction-content-are-content-box-list'>
              {v.children.map((val,index) => (
                <View onClick={() => handleAllAre(val,0)} className={val.click ? 'distruction-content-are-content-box-list-item-click' : 'distruction-content-are-content-box-list-item'}>{index == 0 && v.index != 0?"全省置顶":val.name}
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
  )
}
Distruction.config = {
  navigationBarTitleText: '招工置顶',
} as Config