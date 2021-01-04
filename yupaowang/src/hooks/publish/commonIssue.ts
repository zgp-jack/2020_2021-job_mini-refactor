import Taro, { useState, useEffect } from '@tarojs/taro'
import { PublishConfigData, RecruitWorkInfo } from '../../pages/recruit/index.d'
import { getPublishRecruitView } from '../../utils/request'
import { InitRecruitView } from '../../pages/recruit/publish'
import { ShowActionModal } from '../../utils/msg'
import { useSelector, useDispatch } from '@tarojs/redux'
import { setPublishData } from '../../actions/publish'
import { PublishData } from '../../config/store'
import { setAreaInfo, setArea } from '../../actions/recruit'
import { getCityInfoById, AREABEIJING } from '../../models/area'

export function usePublishData(InitParams: InitRecruitView){
  
  // 获取用户登录
  const login: boolean = useSelector<any, boolean>(state => state.User['login'])
  // 获取发布招工基础数据请求状态
  const reqStatus: boolean = useSelector<any, boolean>(state => state.publishData['reqStatus'])
  // 获取用户手机号
  const userPhone: string = useSelector<any, string>(state => state.publishData["user_mobile"])
  // 初始化急速发布招工信息数据
  let initModel: RecruitWorkInfo = {
    title: '',
    user_mobile: userPhone,
    user_name: '',
    province_id: 0,
    city_id: 0,
    type: '',
    infoId: '',
    detail: '',
    classifies: [],
    address: '',
    location: '',
    adcode: '',
    county_id: '',
    code: '',
    view_images: [],
    is_check: 1,
    check_fail_msg: ''
  }
  // 急速发布招工信息
  const [model, setModel] = useState<RecruitWorkInfo>(initModel)
  // 获取dispatch分发action
  const dispatch = useDispatch()
  // 是否展开图片上传
  const [showUpload, setShowUpload] = useState<boolean>(false)
  // 招工详情的字数
  const [num, setNum] = useState<number>(0)
  // 备份手机号码
  const [phone, setPhone] = useState<string>(userPhone)
  //获取redux中发布招工区域详细数据
  
  useEffect(() => {
    // 判断是否登录，没有登录直接返回
    if (!login || (login && !InitParams.infoId &&　reqStatus)) return
    getPublishRecruitView(InitParams).then(res => {
      // 获取初始化发布招工数据，参数为{ type: type,infoId: id }
      if (res.errcode == 'ok') {
        let initArea = { name: AREABEIJING.name, id: AREABEIJING.id, ad_name: AREABEIJING.ad_name }
        let defaultArea = res.default_search_name ? getCityInfoById(res.default_search_name.id) : initArea
        //从发布招工请求中获取公共数据
        let InitViewInfo: PublishConfigData = {
          classifyTree: res.classifyTree,
          mateData: res.mate_data,
          noMateData: res.not_mate_data,
          user_mobile: InitParams.infoId ? userPhone : res.memberInfo.tel ,
          maxClassifyCount: res.typeTextArr.maxClassifyCount,
          maxImageCount: res.typeTextArr.maxImageCount,
          placeholder: res.placeholder,
          defaultSearchName: { id: defaultArea.id, name: defaultArea.name, ad_name: defaultArea.ad_name },
          reqStatus: InitParams.infoId ? reqStatus: true
        }
        // 发布招工获取的数据
        let initIssueModel: RecruitWorkInfo = {
          title: res.model.title || '',
          user_mobile: res.model.user_mobile || '',
          user_name: res.model.user_name,
          province_id: res.model.province_id || '',
          city_id: res.model.city_id || '',
          type: res.type,
          infoId: res.model.id || InitParams.infoId,
          detail: res.model.detail || '',
          classifies: res.selectedClassifies,
          address: res.model.address ? res.model.address : res.show_address,
          location: res.model.location || '',
          adcode: '',
          county_id: res.model.county_id || '',
          code: '',
          view_images: res.view_image,
          is_check: res.model.hasOwnProperty('is_check') ? res.model.is_check : 1,
          check_fail_msg: res.model.check_fail_msg || ''
        }
        // 将数据存到redux中
        dispatch(setPublishData({ ...InitViewInfo }))
        // 保存手机号
        setPhone(reqStatus ? userPhone : initIssueModel.user_mobile)
        // 数据保存到model中
        setModel(initIssueModel)
        if (InitParams.infoId){
          dispatch(setAreaInfo({
            title: res.model.address ? res.model.address : res.show_address,
            location: res.model.location,
            info: '',
            adcode: res.model.adcode || '',
          }))
          dispatch(setArea({ id: defaultArea.id, name: defaultArea.name, ad_name: defaultArea.ad_name }))
        }
        // 如果有上传图片保存图片showUpload中
        if (res.view_image.length) setShowUpload(true)
        // 如果填写有招工详情数据，将填写数据长度保存到num中
        if (initIssueModel.detail) setNum(initIssueModel.detail.length)
      } else {
        // 请求数据失败走提示框返回上一页面
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack()
          }
        })
      }
    })
  }, [login])
  // 设置缓存填写信息
  function setEnterInfo (name:string, data:any) {
    let regx:RegExp = /1[3-9]\d{9}/g
    let key:string = PublishData
    let issueData = Taro.getStorageSync(key)
    if (name === "phone") {
      if (regx.test(data)) {
        if (issueData) {
          issueData[name] = data
        } else {
          issueData = {}
          issueData[name] = data
        }
      } else {
        if (issueData) {
          issueData[name] = ""
        }
      }
    } else {
      if (issueData) {
        issueData[name] = data
      } else {
        issueData = {}
        issueData[name] = data
      }
    }
    Taro.setStorageSync(key, issueData)
  }
  return {
    model,
    setModel,
    showUpload,
    setShowUpload,
    num,
    setNum,
    phone,
    setPhone,
    setEnterInfo,
  }
}

