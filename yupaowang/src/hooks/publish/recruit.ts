import Taro, { useState, useEffect } from '@tarojs/taro'
import { RecruitModelInfo, RecruitPublishInfo, UserLastPublishRecruitArea } from '../../pages/recruit/index.d'
import { getPublishRecruitView, publishRecruitInfo} from '../../utils/request'
import { InitRecruitView } from '../../pages/recruit/publish'
import { UserLastPublishArea, UserLocationCity } from '../../config/store'
import { UserLocationPromiss, AREABEIJING } from '../../models/area'
import { userAuthLoction } from '../../utils/helper'
import Msg, { ShowActionModal, SubPopup } from '../../utils/msg'
import { SubscribeToNews } from '../../utils/subscribeToNews';
import { useSelector } from '@tarojs/redux'
import { isVaildVal, isPhone } from '../../utils/v'

export default function usePublishViewInfo(InitParams: InitRecruitView){

  // 获取用户信息
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 视图显示信息
  const [model, setModel] = useState<RecruitModelInfo>()
  // 是否展开图片上传
  const [showUpload, setShowUpload] = useState<boolean>(false)
  // 是否显示工种选择
  const [showProfession, setShowProssion] = useState<boolean>(false)
  // 当前显示城市
  const [area, setArea] = useState<string>(AREABEIJING.name)
  // 招工详情的字数
  const [num, setNum] = useState<number>(0)
  // 备份手机号码
  const [phone, setPhone] = useState<string>('')
  // 备份当前数据 用于强制修改判断
  const [bakModel, setBakModel] = useState({})
  // 选择详细地址信息
  const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
    title: '',
    adcode:'',
    location: '',
    info: ''
  })

  // 初始化招工信息
  useEffect(() => {
    if(!login) return
    getPublishRecruitView(InitParams).then(res => {
      if(res.errcode == 'ok'){
        let InitViewInfo: RecruitModelInfo = {
          placeholder: res.placeholder,
          classifies: res.selectedClassifies,
          maxImageCount: res.typeTextArr.maxImageCount,
          maxClassifyCount: res.typeTextArr.maxClassifyCount,
          classifyTree: res.classifyTree,
          title: res.model.title || '',
          address: res.model.address || '',
          detail: res.model.detail || '',
          infoId: res.model.id || InitParams.infoId,
          type: res.type,
          user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
          code: '',
          user_name: res.model.user_name,
          view_images: res.view_image,
          province_id: res.model.province_id || '',
          city_id: res.model.city_id || '',
          location: res.model.location || '',
          adcode: '',
          county_id: res.model.county_id || '',
          is_check: res.model.hasOwnProperty('is_check') ? res.model.is_check : 1,
          check_fail_msg: res.model.check_fail_msg || ''
        }
        setModel(InitViewInfo)
        initUserAreaInfo(res)
        if (InitViewInfo.is_check == 0) bakModelInfo(InitViewInfo)
        setAreaInfo({ ...areaInfo, title: InitViewInfo.address })
        setPhone(InitViewInfo.user_mobile)
        if (res.view_image.length) setShowUpload(true)
        if (InitViewInfo.detail) setNum(InitViewInfo.detail.length)
      }else{
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack()
          }
        })
      }
    })
  }, [login])

  function initUserAreaInfo(data: any){
    console.log(InitParams.infoId,'InitParams.infoId')
    //  设置地区名字
    if (InitParams.infoId){
      setArea(data.default_search_name.name)
    }else{
      let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
      if(userLoctionCity){
        setArea(userLoctionCity.city)
      }else{
        userAuthLoction().then(res=>{
          setArea(res.city)
        }).then(()=>{
          setArea(AREABEIJING.name)
        })
      }
    }

    // 设置发布地址
    if(InitParams.infoId){
      setAreaInfo({
        title: data.model.address,
        location: data.model.location,
        info: '',
        adcode: data.model.adcode || ''
      })
    }else{
      let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
      if (userLastPublishArea) {
        setAreaInfo(userLastPublishArea)
      }
    }
    
  }

  function bakModelInfo(model){
    const data: RecruitPublishInfo = {
      title: model.title,
      address: model.address,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: '',
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(item => item.url)
    }
    setBakModel(data)
    ShowActionModal({
      title: '审核失败',
      msg: model.check_fail_msg
    })
  }

  function getPublishedInfo(){
    if (!model) return
    const data: RecruitPublishInfo = {
      title: model.title,
      address: areaInfo.title,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: areaInfo.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(item => item.url)
    }
    return data
  }

  function userPublishRecruitAction(){
    let data = getPublishedInfo()
    if (!data) return
    if (!isVaildVal(data.title, 3)){
      Msg('请正确输入3~12字中文标题!')
      return
    }
    if (!data.classifies.length){
      Msg('请选择您的工种!')
      return
    }
    if (!data.province_id && !data.address) {
      Msg('请选择您的详细地址!')
      return
    }
    if (!isVaildVal(data.user_name, 2)) {
      Msg('请正确输入2~6字中文姓名!')
      return
    }
    if (!isPhone(data.user_mobile)) {
      Msg('手机号输入有误!')
      return
    }
    if(phone != data.user_mobile){
      if (!data.code){
        Msg('请输入正确的验证码!')
        return
      }
    }
    if (!isVaildVal(data.detail, 15)) {
      Msg('请正确输入15~500字招工详情!')
      return
    }
    // 如果是审核失败 那么久必须强制修改
    if(model&&model.is_check == 0){
      let bak: string = JSON.stringify(bakModel)
      let mydata: string = JSON.stringify(data)
      if(bak == mydata){
        ShowActionModal({
          title: '审核失败',
          msg: model&&model.check_fail_msg
        })
        return
      }
    }
    // 拼接小地址的描述
    data.address += '@@@@@' + areaInfo.info
    publishRecruitInfo(data).then(res=>{
      if(res.errcode == 'ok'){
        SubscribeToNews("recruit", () => {
          SubPopup({
            tips: res.errmsg,
            callback: () => {
              Taro.reLaunch({
                url: '/pages/published/recruit/index'
              })
            }
          })
        })
      }
    })
  }

  return {
    model,
    setModel,
    showUpload,
    setShowUpload,
    showProfession,
    setShowProssion,
    userPublishRecruitAction,
    area,
    setArea,
    areaInfo,
    setAreaInfo,
    num,
    setNum,
    phone
  }
}