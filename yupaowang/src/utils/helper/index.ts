import Taro from '@tarojs/taro'
import { IMGCDNURL, MAPKEY, SERIES, ZIJIESERIES } from '../../config'
import AMapWX from '../../utils/source/amap-wx'
import { UserLocationPromiss } from '../../models/area'
import { UserLocationCity } from '../../config/store'
import { InputPoiList, InputPoiListTips } from './index.d'
import { checkAdcodeAction } from '../request'
import { LocationDataType  } from '../..//pages/resume/add_info/index.d';
import Msg, { ShowActionModal } from '../msg';

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
    let loc: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    if (loc) resolve(loc)
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY })
    GDMAP.getRegeo({
      success: function (data: any) {
        let city: string = data[0].regeocodeData.addressComponent.city
        let bool: boolean = typeof data[0].regeocodeData.addressComponent.city == 'string'
        let gpsLocation: UserLocationPromiss = {
          province: data[0].regeocodeData.addressComponent.province,
          city: bool ? city : data[0].regeocodeData.addressComponent.province,
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

// 数字四舍五入并向下取2位小数
export function getPointNumber(p: number, n: number): number {
  return Math.floor((p / n) * 100) / 100;
}

// 获取设备系统
export function getSystemInfo(): string{
  let system = Taro.getSystemInfoSync()
  return system.platform
}


// 找活基础页面获取定位
export function recSerAuthLoction(): Promise<UserLocationPromiss> {
  return new Promise((resolve, reject) => {
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY })
    GDMAP.getRegeo({
      success: function (data: any) {
        resolve(data)
      },
      fail: function () {
        reject()
      }
    })
  })

}

// 用户取消授权
export function userCancelAuth():void{
  Taro.navigateBack()
}

// 用户获取定位
export function getLocation(): Promise<LocationDataType>{
  Msg('位置获取中...');
  return new Promise(function (resolve, reject) {
    const myAmapFun = new AMapWX.AMapWX({
      key: MAPKEY,
    }); //key注册高德地图开发者
    myAmapFun.getRegeo({
      type: 'gcj02',
      success:(data) => {
        let mydata = data[0].regeocodeData.addressComponent
        let params = {
          adcode: mydata.adcode
        }
        checkAdcodeAction(params).then(res => {
          if (res.errcode == 'ok') {
            let province: string = res.province;
            // let city: string = mydata.city
            // city = typeof city === 'string' ? city : province
            let gpsLocation: LocationDataType = {
              province: province,
              city: res.city,
              adcode: mydata.adcode,
              citycode: mydata.citycode,
              address:data[0].name,
              oadcode: mydata.adcode,
              longitude: data[0].longitude + "",
              latitude: data[0].latitude + "",
              wardenryid: res.city,
              regionone:''
            }
            resolve(gpsLocation);
          } else {
            Msg('定位失败,请重新定位')
            reject();
          }
        }).catch((err) => {
          Msg('定位失败,请重新定位')
          reject(err);
        })
      },
      fail: (err) => {
        Msg('定位失败,请重新定位')
        reject(err)
      }
    })
  })
}

// 复制内容到粘贴板
export function setClipboardData(val: string, msg: string = '内容已成功复制到粘贴板') {
  Taro.setClipboardData({
    data: val,
    success: () => {
      Taro.hideToast()
      ShowActionModal({
        msg: msg
      })
    }
  })
}

// 复制微信号到粘贴板
export function copyWechatNumber(val: string) {
  let msg: string = `微信号:${val}已复制到粘贴板，去微信-添加朋友-搜索框粘贴`
  setClipboardData(val, msg)
}

// 用户拨打电话
export function userCallPhone(val: string) {
  Taro.makePhoneCall({
    phoneNumber: val
  })
}

// 用户统一分享内容
export function getUserShareMessage(){
  let title: string = '全国建筑工地招工平台'
  if(SERIES == ZIJIESERIES){
    title = '鱼泡网-建筑装修找活平台'
  }
  return {
    title,
    imageUrl: `${IMGCDNURL}minishare.png`
  }
}

export const addZero = (num) => {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}
export const getMyDate = (str) => {
  var now = new Date(str),
    y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 5);
}
