/*
 * @Author: zyb
 * @Date: 2020-11-05 10:04:59
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-23 19:34:40
 * @Description: 
 */
export interface NationsType{
  id?:string,
  name?:string,
  mz_id:string,
  mz_name:string,
}

export interface OccupationType {
  id: string, 
  pid: string,
  name: string,
  letter: string,
  not_auth: string,
}
export interface LocationDataType {
  province: string,
  city: string,
  adcode: string|number,
  citycode:string,
  address:string,
  oadcode:string,
  longitude:string,
  latitude:string,
  wardenryid:string,
  regionone:string,
}

export interface LocationDataTypeAsGaode extends LocationDataType{
  // 如果mini_type 为1 则表示不支持高德地区 后台就会更新address
  mini_type?: number
}