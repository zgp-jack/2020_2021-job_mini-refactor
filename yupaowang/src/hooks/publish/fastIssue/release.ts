import Taro, { useEffect, useState } from '@tarojs/taro';
import { useSelector, useDispatch } from '@tarojs/redux';
import { PublishConfigData, UserLastPublishRecruitArea, MateDataItem, RecruitImageModel, RecruitInfo } from '../../../pages/recruit/index.d'
import { PublishData, UserLocation } from '../../../config/store'
import { UserLocationPromiss, AREABEIJING, ChildItems, getCityInfo } from '../../../models/area'
import { UserLastPublishArea, UserLocationCity } from '../../../config/store'
import { setAreaInfo, setArea } from '../../../actions/recruit'
import { SelectedClassfies, RulesClassfies } from '../../../components/classfiy_picker/index'
import { publishFindWorker } from '../../../utils/request'
import { SubscribeToNews } from '../../../utils/subscribeToNews'
import { ShowActionModal } from '../../../utils/msg'
import { recSerAuthLoction } from '../../../utils/helper'



export default function useRelease () {
  // 获取redex数据
  const publishData: PublishConfigData = useSelector<any, PublishConfigData>(state => state.publishData)  
  // 发布招工redux数据
  const recruitInfo: RecruitInfo = useSelector<any, RecruitInfo>(state => state.RecruitAction)
  // 工种数据、匹配库、不匹配库,最大工种选择数，最大图片上传数
  const { classifyTree, mateData, noMateData, maxClassifyCount, maxImageCount } = publishData
  // 工种文本数据
  const [selectText, setSelectText] = useState<string>('')
  // 选中的工种字段[id,id,id]
  const [selectedClassifies, setSelectedClassifies] = useState<string[]>([])
  // 选择工种字段[{id:xx,name:xx}]
  const [choceClassfies, setChoceClassfies] = useState<RulesClassfies[]>([])
  // 是否展开图片上传
  const [showUpload, setShowUpload] = useState<boolean>(false)
  // 上传图片数据
  const [image, setImage] = useState<RecruitImageModel[]>([])
  // 获取分发action的dispatch
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("wo jin lai le ")
    initUserAreaInfo()
    initWorkType()
  },[])
  // 初始化用户区域数据
  function initUserAreaInfo() {
    // 获取用户定位location
    let userLocation: string = Taro.getStorageSync(UserLocation)
    // 获取用户定位城市信息
    let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    // 如果用户有授权获取定位，则获取详细的定位地址信息并保存到redux
    if (userLoctionCity) {
      let data: ChildItems = getCityInfo(userLoctionCity, 1)
      recSerAuthLoction().then(res => {
        let bool: boolean = typeof res[0].regeocodeData.addressComponent.neighborhood.name == "string"
        let title: string = bool ? res[0].regeocodeData.addressComponent.neighborhood.name : res[0].desc
        let adcode: string = res[0].regeocodeData.addressComponent.adcode
        let info: string = res[0].regeocodeData.formatted_address
        let positionArea: UserLastPublishRecruitArea = {
          location: userLocation,
          adcode: adcode,
          title: title,
          info: info,
          areaId: data.id,
          name: data.name,
          ad_name: data.ad_name
        }
        dispatch(setAreaInfo(positionArea))
      })
      dispatch(setArea({ name: data.name, id: data.id, ad_name: data.ad_name }))
    } else {
      dispatch(setArea({ name: AREABEIJING.name, id: AREABEIJING.id, ad_name: AREABEIJING.ad_name }))
    }
    // 获取用户最后发布的区域信息
    let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
    if (userLastPublishArea) {
      dispatch(setAreaInfo(userLastPublishArea))
    }
  }
  // 选择工种文本信息
  function selectWorkType(data: RulesClassfies[]) {
    // 选择工种id数组
    let selectWorkType: string[] = data.map(function (item) {
      return item.id
    })
    // 获取工种名称数组
    let text:string[] = data.map(item => item.name)
    // 拼接成字符串
    let selectText = text.join(",")
    setChoceClassfies(data)
    setSelectText(selectText)
    setSelectedClassifies(selectWorkType)
  }
  // 初始化匹配工种
  function initWorkType() {
    Taro.showLoading({
      title: '匹配中',
      mask: true
    })
    // 获取缓存数据
    let jiSuData = Taro.getStorageSync(PublishData)
    //获取招工详情的内容
    let content: string = jiSuData.content
    //所需工种最大选择数
    let maxWorkNum: number = maxClassifyCount
    //不匹配的数据
    let notRules: MateDataItem[] = noMateData;
    //不匹配数据长度
    let notLen: number = notRules.length;
    //获取data中匹配数据
    let needRules: MateDataItem[] = mateData;
    //匹配数据长度
    let needLen: number = needRules.length;
    // 不需要的数据
    let notArr: RulesClassfies[] = [];
    // 需要的数据
    let needArr: RulesClassfies[] = [];
    // 如果没有详情内容直接返回
    if (!content) {
      Taro.hideLoading()
      return false;
    }
    // 不需要匹配的关键词
    for (let i = 0; i < notLen; i++) {
      if (content.indexOf(notRules[i].keywords) !== -1) {
        let id = notRules[i].occupation_id;
        if (notArr.findIndex(item => item.id == id) == -1) {
          notArr.push({
            id: id,
            name: notRules[i].name
          })
        }
      }
    }
    // 匹配关键词并且该关键词没有匹配过放入匹配数组中
    for (let i = 0; i < needLen; i++) {
      if (content.indexOf(needRules[i].keywords) !== -1) {
        let id = needRules[i].occupation_id;
        if (needArr.findIndex(item => item.id == id) == -1) {
          needArr.push({
            id: id,
            name: needRules[i].name
          })
        }
      }
    }
    // 过滤不匹配关键词将不匹配的关键词从匹配到的关键词删除
    for (let i = 0; i < notArr.length; i++) {
      let id = notArr[i].id;
      let index = needArr.findIndex(item => item.id == id)
      if (index !== -1) {
        needArr.splice(index, 1)
      }
    }
    // 否则将匹配的数据长度等于总长度减去用户选择的长度
    needArr.splice(maxWorkNum)
    selectWorkType(needArr)
    Taro.hideLoading()
  }
  // 发布招工
  function pulishFindWorker() {
    let images = image.map(item => item.url).join(",")
    let data = {
      token: recruitInfo.token,
      trades: selectedClassifies.join(","),
      images: showUpload?images:'',
      area_id: recruitInfo.areaInfo.areaId,
      location: recruitInfo.areaInfo.location,
      ad_name: recruitInfo.areaInfo.title,
      address: recruitInfo.areaInfo.info
    }
    publishFindWorker(data).then(res=>{
      if (res.errcode == 'ok') {
        SubscribeToNews("recruit", () => {
          ShowActionModal({
            msg: res.errmsg,
            success: () => {
              Taro.reLaunch({
                url: '/pages/published/recruit/index'
              })
            }
          })
        })
      } else {
        ShowActionModal({
          msg: res.errmsg
        })
      }
    })
  }
  return {
    classifyTree,
    selectText,
    maxClassifyCount,
    choceClassfies,
    selectWorkType,
    showUpload,
    setShowUpload,
    image,
    setImage,
    maxImageCount,
    pulishFindWorker
    
  }
}
