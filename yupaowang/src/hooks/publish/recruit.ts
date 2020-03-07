import { useState, useEffect } from '@tarojs/taro'
import { RecruitModelInfo, RecruitPublishInfo } from '../../pages/recruit/index.d'
import { getPublishRecruitView } from '../../utils/request'
import { InitRecruitView } from '../../pages/recruit/publish'

export default function usePublishViewInfo(InitParams: InitRecruitView){

  // 视图显示信息
  const [model, setModel] = useState<RecruitModelInfo>()
  // 是否展开图片上传
  const [showUpload, setShowUpload] = useState<boolean>(false)
  // 是否显示工种选择
  const [showProfession, setShowProssion] = useState<boolean>(false)

  // 初始化招工信息
  useEffect(() => {
    getPublishRecruitView(InitParams).then(res => {
      let InitViewInfo: RecruitModelInfo = {
        placeholder: res.placeholder,
        classifies: res.selectedClassifies,
        maxImageCount: res.typeTextArr.maxImageCount,
        maxClassifyCount: res.typeTextArr.maxClassifyCount,
        classifyTree: res.classifyTree,
        title: res.model.title || '',
        address: res.model.address || '',
        detail: res.model.detail || '',
        infoId: res.model.id,
        type: res.type,
        user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
        code: '',
        user_name: res.model.user_name,
        view_images: res.view_image,
        province_id: res.model.province_id || '',
        city_id: res.model.city_id || '',
        location: res.model.location || '',
        adcode: '',
        county_id: res.model.county_id || ''
      }
      setModel(InitViewInfo)
      if (res.view_image.length) setShowUpload(true)
    })
  }, [])

  function getPublishRecruitInfo(){
    if (!model) return
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
      adcode: model.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(item=>item.url)
    }
    return data
  }

  return {
    model,
    setModel,
    showUpload,
    setShowUpload,
    showProfession,
    setShowProssion,
    getPublishRecruitInfo
  }
}