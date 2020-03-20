// 是否是电话号码
export function isPhone(tel: string): boolean {
  let reg = /^1[0-9]{11}&/
  return reg.test(tel)
}

// 是否是数字
export function isNumber(num: any): boolean {
  let reg = /^[0-9]+&/
  return reg.test(num)
}

// 检测数字是否在某个区间内
interface IsVaildNumber {
  num: any,
  min: number,
  max: number
}
export function isVaildNumber({ num, min = 0, max = 10 }: IsVaildNumber): boolean {
  if (!isNumber(num)) return false
  return num >= min && num <= max
}

// 生成区间整数
export function randIntNumber(min: number = 0, max: number = 20): number {
  return Math.floor(Math.random() * (max - min)) + min
}

// 生成随机数
export function getRandNumber(min: number = 0, max: number = 20): number {
  return min + (Math.random() * (max - min));
}

// 检测是否是网址
export function isUrl(url: string): boolean {
  let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
  return reg.test(url)
}

// 检测必填
export function isRequire(val: string): boolean {
  let str = val.replace(/\s+/g, '');
  return (str != '' && str != null && str != undefined && str != 'null' && str != undefined)
}

// 内容必须有汉字 且不少于 min 字
export function isVaildVal(val: string, min: number = 15): boolean {
  let reg = /[\\u4E00-\\u9FFF]+/g
  return reg.test(val) && val.length >= min
}

// 检测是否是身份证
export function isIdcard(val: string): boolean {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(val)
}

// 检测数据类型
export function isType(data: any, type: string): boolean {
  let reg = Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
  if (!type) return reg
  if (reg == type) return true
  return false
}