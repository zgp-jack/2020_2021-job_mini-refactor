import Taro, { useState, useEffect } from '@tarojs/taro'
import { UserLastPublishRecruitArea, FastPublishBase } from '../../pages/recruit/index.d'
import { FastPublisInfo } from '../../utils/request'
import { InitRecruitView } from '../../pages/recruit/jisu_issue/index'
import { UserLastPublishArea, UserLocationCity, UserLocation } from '../../config/store'
import { UserLocationPromiss, AREABEIJING, ChildItems, getCityInfo } from '../../models/area'
import { recSerAuthLoction } from '../../utils/helper'
import Msg, { ShowActionModal } from '../../utils/msg'
import { SubscribeToNews } from '../../utils/subscribeToNews';
import { useSelector, useDispatch } from '@tarojs/redux'
import { isVaildVal, isPhone } from '../../utils/v'
import { setAreaInfo, setArea } from '../../actions/recruit'//获取发布招工信息action
import { RulesClassfies } from '../../components/classfiy_picker/index'
import { usePublishData } from './commonIssue'
import { ProfessionRecruitData } from '../../components/profession/index.d'
import AREAS from '../../models/area'
import { USEGAODEMAPAPI } from '../../config'



export default function fastPublishInit(InitParams: InitRecruitView) {
  const { model, setModel, showUpload, setShowUpload, num, setNum, phone, setPhone } = usePublishData(InitParams)
  // 是否显示工种选择
  const [showProfession, setShowProssion] = useState<boolean>(false)
  // 备份当前数据 用于强制修改判断
  const [bakModel, setBakModel] = useState({})
  //获取redux中发布招工区域详细数据
  const areaInfo: UserLastPublishRecruitArea = useSelector<any, UserLastPublishRecruitArea>(state => state.RecruitAction["areaInfo"])
  // 获取redux中工种数据
  const classifyTree: ProfessionRecruitData[] = useSelector<any, ProfessionRecruitData[]>(state => state.publishData['classifyTree'])
  // 获取dispatch分发action
  const dispatch = useDispatch()
  //选中的工种数据
  const [classMateArr, setclassMateArr] = useState<RulesClassfies[]>([])
  const [isTip, setIsTip ] = useState<boolean>(false);
  // 初始化招工信息
  useEffect(() => {
    //如果已经有定位信息 不在获取定位
    if (!areaInfo.location){
      initUserAreaInfo()
    }
    if (model.is_check == 0 && !isTip) bakModelInfo(model)
    //如果是修改 后台给的选中数据中只有ID 需要匹配name 再把之前选中的工种信息保存
    if (model.classifies.length) {
      let _Classifies: RulesClassfies[] = []
      for (let i = 0; i < model.classifies.length; i++) {
        for (let n = 0; n < classifyTree.length; n++) {
          if (classifyTree[n].children.length > 0) {
            for (let x = 0; x < classifyTree[n].children.length; x++) {
              if (classifyTree[n].children[x].id == model.classifies[i]) {
                _Classifies.push({
                  id: classifyTree[n].children[x].id,
                  name: classifyTree[n].children[x].name
                })
              }
            }
          }
        }
      }
      setclassMateArr(_Classifies)
    }
  }, [model])

  // 初始化用户区域数据
  function initUserAreaInfo() {
    // 获取用户定位location
    let userLocation: string = Taro.getStorageSync(UserLocation)
    // 获取用户定位城市信息
    let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    // 如果用户有授权获取定位，则获取详细的定位地址信息并保存到redux
    if (userLoctionCity) {
      let data: ChildItems = getCityInfo(userLoctionCity, 1)
      recSerAuthLoction().then(res=>{
        let bool:boolean = typeof res[0].regeocodeData.addressComponent.neighborhood.name == "string"
        let title: string = bool ? res[0].regeocodeData.addressComponent.neighborhood.name : res[0].desc 
        let adcode:string = res[0].regeocodeData.addressComponent.adcode
        let info:string = res[0].regeocodeData.formatted_address
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
  function bakModelInfo(model) {
    const data: FastPublishBase = {
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
    setIsTip(true)
  }

  function getPublishedInfo() {
    if (!model) return
    const data: FastPublishBase = {
      address: areaInfo.title,
      detail: model.detail,
      infoId: model.infoId,
      // type: model.type,
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

  function userPublishRecruitAction() {
    let data = getPublishedInfo();
    console.error(data,'data');
    console.error(classMateArr,'classMateArr');
    if (!data) return
    if (!isVaildVal(data.detail, 15)) {
      Msg('请正确输入15~500字招工详情!')
      return
    }
    if (!data.province_id && !data.address) {
      Msg('请选择您的详细地址!')
      return
    }
    let classifies;
    if (!classMateArr.length) {
      Msg('请选择您的工种!')
      return
    } else {
      classifies = classMateArr.map(item => item.id).toString();
    }
    if (!isPhone(data.user_mobile)) {
      Msg('手机号输入有误!')
      return
    }
    if (phone != data.user_mobile) {
      if (!data.code) {
        Msg('请输入正确的验证码!')
        return
      }
    }
    // 如果是审核失败 那么久必须强制修改
    if (model && model.is_check == 0) {
      let bak: string = JSON.stringify(bakModel)
      let mydata: string = JSON.stringify(data)
      if (bak == mydata) {
        ShowActionModal({
          title: '审核失败',
          msg: model && model.check_fail_msg
        })
        return
      }
    }
    // 拼接小地址的描述
    if (USEGAODEMAPAPI){
      data.address += '@@@@@' + areaInfo.info
    }else{
      data.address = '@@@@@'
      data.adcode = ''
    }
    // 图片处理
    let image;
    if (data.images.length) {
      image = data.images.toString();
    }
    //判断省市是否合理否则出现弹框提示
    const areaData = [...AREAS];
    if (data.city_id !== data.province_id){
      for (let i = 0; i < areaData.length;i++){
        console.error(areaData[i].id,'111')
        if(data.province_id == (+areaData[i].id)){
          const index = areaData[i].children.findIndex((v) => v.id == (data && data.city_id));
          Msg((index).toString())
          if(index == -1){
            ShowActionModal({
              title: '温馨提示',
              msg: '请正确选择城市'
            })
            return
          }
        }
      }
    }
    FastPublisInfo({ ...data, images: image, classifies:classifies}).then(res => {
      if (res.errcode == 'ok') {
        SubscribeToNews("recruit", () => {
          ShowActionModal({
            msg: res.errmsg,
            success: () => {
              let url = InitParams.infoId ? '/pages/published/recruit/index' :'/pages/recruit/tips/index';
              Taro.reLaunch({
                url:url
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
    model,
    setModel,
    showUpload,
    setShowUpload,
    showProfession,
    setShowProssion,
    userPublishRecruitAction,
    num,
    setNum,
    phone,
    classMateArr,
    setclassMateArr
  }
}