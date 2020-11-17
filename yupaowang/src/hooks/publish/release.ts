import { useEffect, useState } from '@tarojs/taro';
import { useSelector, useDispatch } from '@tarojs/redux';
import { PublishConfigData, UserLastPublishRecruitArea } from '../../pages/recruit/index.d'
import { PublishData } from '../../config/store'
import { UserLocationPromiss, AREABEIJING } from '../../models/area'
import { UserLastPublishArea, UserLocationCity } from '../../config/store'
import { setAreaInfo, setArea } from '../../actions/recruit'
import { userAuthLoction } from '../../utils/helper'


export function useRelease () {
  // 选中的工种字段
  const [selectedClassifies, setSelectedClassifies] = useState<string>('')
  // 选择一级工种index
  const [pindex, setPindex] = useState<number>(0)
  // 获取缓存中的招工详情内容
  const content = Taro.getStorageSync(PublishData).content
  // 获取分发action的dispatch
  const dispatch = useDispatch()

  useEffect(()=>{
    initUserAreaInfo()
  })
  // 初始化用户区域数据
  function initUserAreaInfo() {
    let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    if (userLoctionCity) {
      dispatch(setArea(userLoctionCity.city.slice(0, 2)))
    } else {
      userAuthLoction().then(res => {
        dispatch(setArea(res.city))
      }).then(() => {
        dispatch(setArea(AREABEIJING.name))
      })
    }
    // 获取用户最后发布的区域信息
    let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
    if (userLastPublishArea) {
      dispatch(setAreaInfo(userLastPublishArea))
    }
  }
}
