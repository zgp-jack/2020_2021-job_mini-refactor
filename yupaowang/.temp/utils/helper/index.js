import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync, getSystemInfoSync as _getSystemInfoSync, setClipboardData as _setClipboardData, hideToast as _hideToast, makePhoneCall as _makePhoneCall } from "@tarojs/taro-h5";
import { IMGCDNURL, MAPKEY } from "../../config/index";
import AMapWX from "../source/amap-wx";
import { UserLocationCity } from '../../config/store';
import { checkAdcodeAction } from '../request/index';
import Msg, { ShowActionModal } from "../msg/index";
// 对象拷贝
export function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
// 获取用户定位
export function userAuthLoction() {
  return new Promise((resolve, reject) => {
    let loc = _getStorageSync(UserLocationCity);
    if (loc) resolve(loc);
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY });
    GDMAP.getRegeo({
      success: function (data) {
        let city = data[0].regeocodeData.addressComponent.city;
        let bool = typeof data[0].regeocodeData.addressComponent.city == 'string';
        let gpsLocation = {
          province: data[0].regeocodeData.addressComponent.province,
          city: bool ? city : data[0].regeocodeData.addressComponent.province,
          adcode: data[0].regeocodeData.addressComponent.adcode,
          citycode: data[0].regeocodeData.addressComponent.citycode
        };
        _setStorageSync(UserLocationCity, gpsLocation); //定位信息
        resolve(gpsLocation);
      },
      fail: function () {
        reject();
      }
    });
  });
}
// 请求高德api获取附近地点
export function getAmapPoiList(val) {
  return new Promise((resolve, reject) => {
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY });
    GDMAP.getInputtips({
      keywords: val,
      success: data => {
        if (data) resolve(data.tips);else reject();
      },
      fail: () => {
        reject();
      }
    });
  });
}
// 页面跳转
export function userJumpPage(url) {
  Taro.navigateTo({ url: url });
}
// 数字四舍五入并向下取2位小数
export function getPointNumber(p, n) {
  return Math.floor(p / n * 100) / 100;
}
// 获取设备系统
export function getSystemInfo() {
  let system = _getSystemInfoSync();
  return system.platform;
}
// 找活基础页面获取定位
export function recSerAuthLoction() {
  return new Promise((resolve, reject) => {
    const GDMAP = new AMapWX.AMapWX({ key: MAPKEY });
    GDMAP.getRegeo({
      success: function (data) {
        resolve(data);
      },
      fail: function () {
        reject();
      }
    });
  });
}
// 用户取消授权
export function userCancelAuth() {
  Taro.navigateBack();
}
// 用户获取定位
export function getLocation() {
  Msg('位置获取中...');
  return new Promise(function (resolve, reject) {
    const myAmapFun = new AMapWX.AMapWX({
      key: MAPKEY
    }); //key注册高德地图开发者
    myAmapFun.getRegeo({
      type: 'gcj02',
      success: data => {
        let mydata = data[0].regeocodeData.addressComponent;
        let params = {
          adcode: mydata.adcode
        };
        checkAdcodeAction(params).then(res => {
          if (res.errcode == 'ok') {
            let province = res.province;
            // let city: string = mydata.city
            // city = typeof city === 'string' ? city : province
            let gpsLocation = {
              province: province,
              city: res.city,
              adcode: mydata.adcode,
              citycode: mydata.citycode,
              address: data[0].name,
              oadcode: mydata.adcode,
              longitude: data[0].longitude + "",
              latitude: data[0].latitude + "",
              wardenryid: res.city,
              regionone: ''
            };
            resolve(gpsLocation);
          } else {
            Msg('定位失败,请重新定位');
            reject();
          }
        }).catch(err => {
          Msg('定位失败,请重新定位');
          reject(err);
        });
      },
      fail: err => {
        Msg('定位失败,请重新定位');
        reject(err);
      }
    });
  });
}
// 复制内容到粘贴板
export function setClipboardData(val, msg = '内容已成功复制到粘贴板') {
  _setClipboardData({
    data: val,
    success: () => {
      _hideToast();
      ShowActionModal({
        msg: msg
      });
    }
  });
}
// 复制微信号到粘贴板
export function copyWechatNumber(val) {
  let msg = `微信号:${val}已复制到粘贴板，去微信-添加朋友-搜索框粘贴`;
  setClipboardData(val, msg);
}
// 用户拨打电话
export function userCallPhone(val) {
  _makePhoneCall({
    phoneNumber: val
  });
}
// 用户统一分享内容
export function getUserShareMessage() {
  return {
    title: '全国建筑工地招工平台',
    imageUrl: `${IMGCDNURL}minishare.png`
  };
}