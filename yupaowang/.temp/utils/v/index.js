/*
 * @Author: zyb
 * @Date: 2020-11-03 09:23:50
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-10 11:53:46
 * @Description:
 */
import Taro, { getSystemInfoSync as _getSystemInfoSync } from "@tarojs/taro-h5";
// 是否是电话号码
export function isPhone(tel) {
  let reg = /^1[0-9]{10}$/;
  return reg.test(tel);
}
// 是否是数字
export function isNumber(num) {
  let reg = /^[0-9]+$/;
  return reg.test(num);
}
export function isVaildNumber({ num, min = 0, max = 10 }) {
  if (!isNumber(num)) return false;
  return num >= min && num <= max;
}
// 生成区间整数
export function randIntNumber(min = 0, max = 20) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// 生成随机数
export function getRandNumber(min = 0, max = 20) {
  return min + Math.random() * (max - min);
}
// 检测是否是网址
export function isUrl(url) {
  let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
  return reg.test(url);
}
// 检测必填
export function isRequire(val) {
  let str = val.replace(/\s+/g, '');
  return str != '' && str != null && str != undefined && str != 'null' && str != undefined;
}
// 内容必须有汉字 且不少于 min 字
export function isVaildVal(val, min = 15, max = 0) {
  let reg = new RegExp("[\\u4E00-\\u9FFF]+");
  return max ? reg.test(val) && val.length >= min && val.length <= max : reg.test(val) && val.length >= min;
}
// 检测是否是身份证
export function isIdcard(val) {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
}
// 检测数据类型
export function isType(data, type) {
  let reg = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  if (!type) return reg;
  if (reg == type) return true;
  return false;
}
// 检测是否是ios客户端
export function isIos() {
  let system = _getSystemInfoSync();
  return system.platform === 'ios';
}
//验证必填项且长度
export function isRequireLen(str, _len = 6) {
  return str != '' && str != null && str != undefined && str.length >= _len ? true : false;
}
// 含有中文
export function isChinese(str) {
  const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (reg.test(str)) {
    return true;
  }
  return false;
}
// 2-5汉字
export function allChinese(str) {
  const reg = new RegExp('^[\u4E00-\u9FA5]{2,5}$');
  if (reg.test(str)) {
    return true;
  }
  return false;
}