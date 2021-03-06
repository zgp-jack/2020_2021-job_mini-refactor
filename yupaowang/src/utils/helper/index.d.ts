// 获取关键词地区列表的数据
export interface InputPoiList{
  tips: InputPoiListTips[]
}

export interface InputPoiListTips {
  adcode: string,
  address: string,
  district: string,
  location: string,
  name: string,
  distance: string,
  cityName: string,
  areaId?: string,
  ad_name?: string
}
export interface publishFindWork {
  loginBefore: boolean,
  loginAfter: boolean,
  logoutWay: string,
  loginWay: string
}