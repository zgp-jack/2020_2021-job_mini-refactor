import Taro from '@tarojs/taro'
import { MAPKEY } from '../../config'
import AMapWX from '../../utils/source/amap-wx'
import { UserLocationPromiss } from '../../models/area'
import { UserLocationCity } from '../../config/store'
import { InputPoiList, InputPoiListTips } from './index.d'

// 对象拷贝
export function objDeepCopy(source: any):any {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}

// 获取用户定位
export function userAuthLoction(): Promise<UserLocationPromiss>{
  return new Promise((resolve, reject)=>{
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY })
    GDMAP.getRegeo({
      success: function (data: any) {
        let gpsLocation: UserLocationPromiss = {
          province: data[0].regeocodeData.addressComponent.province,
          city: data[0].regeocodeData.addressComponent.city,
          adcode: data[0].regeocodeData.addressComponent.adcode,
          citycode: data[0].regeocodeData.addressComponent.citycode
        }
        Taro.setStorageSync(UserLocationCity, gpsLocation) //定位信息
        resolve(gpsLocation)
      },
      fail: function () {
        reject()
      }
    })
  })
  
}

// 请求高德api获取附近地点
export function getAmapPoiList(val: string): Promise<InputPoiListTips[]> {
  return new Promise((resolve, reject)=>{
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY })
    GDMAP.getInputtips({
      keywords: val,
      success: (data: InputPoiList)=> {
        if(data) resolve(data.tips)
        else reject()
      },
      fail: ()=> {
        reject()
      }
    })
  })
}

// 页面跳转
export function userJumpPage(url: string):void {
  Taro.navigateTo({url: url})
}