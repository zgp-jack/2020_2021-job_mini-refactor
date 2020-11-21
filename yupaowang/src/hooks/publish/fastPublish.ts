import Taro, { useState, useEffect } from '@tarojs/taro'
import { UserLastPublishRecruitArea, FastPublishInit, FastPublishBase, AreaData } from '../../pages/recruit/index.d'
import { fastPublisView, FastPublisInfo } from '../../utils/request'
import { InitRecruitView } from '../../pages/recruit/publish'
import { UserLastPublishArea, UserLocationCity, UserLocation } from '../../config/store'
import { UserLocationPromiss, AREABEIJING, ChildItems, getCityInfo } from '../../models/area'
import { userAuthLoction } from '../../utils/helper'
import Msg, { ShowActionModal } from '../../utils/msg'
import { SubscribeToNews } from '../../utils/subscribeToNews';
import { useSelector, useDispatch } from '@tarojs/redux'
import { isVaildVal, isPhone } from '../../utils/v'
import { setAreaInfo, setArea } from '../../actions/recruit'//获取发布招工信息action
import { RulesClassfies } from '../../components/classfiy_picker/index'
import { usePublishData } from './issue'
import { ProfessionRecruitData } from '../../components/profession/index.d'
interface ClassMateArr {
  id: string
  name: string
}
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
  // 修改发布招工默认的选择城市信息
  const defaultSearchName: AreaData = useSelector<any, AreaData>(state => state.publishData['defaultSearchName'])
  // 获取dispatch分发action
  const dispatch = useDispatch()
  //选中的工种数据
  const [classMateArr, setclassMateArr] = useState<RulesClassfies[]>([])
  // 初始化招工信息
  useEffect(() => {
    initUserAreaInfo(model)
    if (model.is_check == 0) bakModelInfo(model)
    // 保存手机号
    setPhone(model.user_mobile)
    // 将数据保存到redux中的areaInfo中
    dispatch(setAreaInfo({ ...areaInfo, title: model.address }))
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
  function initUserAreaInfo(data: any) {
    console.log(InitParams.infoId, 'InitParams.infoId')
    //  如果传递参数有infoid代表是修改，保存修改的里面默认区域数据
    if (InitParams.infoId) {
      dispatch(setArea(defaultSearchName))
    } else {
      let userLocation: string = Taro.getStorageSync(UserLocation)
      let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
      if (userLoctionCity) {
        let data: ChildItems = getCityInfo(userLoctionCity, 1)
        let positionArea: UserLastPublishRecruitArea = {
          location: userLocation,
          adcode: userLoctionCity.adcode,
          title: userLoctionCity.title,
          info: userLoctionCity.info,
          areaId: data.id
        }
        dispatch(setArea({ name: userLoctionCity.city.slice(0, 2), id: data.id }))
        dispatch(setAreaInfo(positionArea))
      } else {
        userAuthLoction()
          .then(res => {
            let positionArea: UserLastPublishRecruitArea = {
              location: userLocation,
              adcode: res.adcode,
              title: res.title,
              info: res.info
            }
            dispatch(setAreaInfo(positionArea))
            dispatch(setArea({ name: res.city.slice(0, 2), id: '' }))
          }).catch(() => {
            dispatch(setArea({ name: AREABEIJING.name, id: AREABEIJING.id }))
          })
      }
    }

    // 如果是修改设置详细发布地址
    if (InitParams.infoId) {
      dispatch(setAreaInfo({
        title: data.address,
        location: data.location,
        info: '',
        adcode: data.adcode || '',
      }))
    } else {
      // 获取用户最后发布的区域信息
      let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
      if (userLastPublishArea) {
        dispatch(setAreaInfo(userLastPublishArea))
      }
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
  }

  function getPublishedInfo() {
    if (!model) return
    const data: FastPublishBase = {
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

  function userPublishRecruitAction() {
    let data = getPublishedInfo()
    if (!data) return
    if (!isVaildVal(data.detail, 15)) {
      Msg('请正确输入15~500字招工详情!')
      return
    }
    if (!data.province_id && !data.address) {
      Msg('请选择您的详细地址!')
      return
    }
    if (!classMateArr.length) {
      Msg('请选择您的工种!')
      return
    } else {
      data.classifies = classMateArr.map(item => item.id)
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
    data.address += '@@@@@' + areaInfo.info
    FastPublisInfo(data).then(res => {
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