import { ProfessionRecruitData } from '../../components/profession/index.d'

export enum FilterMenu {
  area = 0,
  work = 1,
  filter = 2
}

// 招工列表搜索
export interface SearchType {
  page: number,
  list_type: string,
  area_id: string,
  classify_id: string,
  keywords: string,
  // joblisttype: 'newest' | 'recommend',
  joblisttype: string,
  token: string,
}

// 发布招工显示数据
export interface RecruitBaseInfo {
  title: string,
  user_mobile: string,
  user_name: string,
  province_id: number,
  city_id: number,
  type: string,
  infoId: string,
  detail: string,
  classifies: string[]
  address: string,
  location: string,
  adcode: string,
  county_id: string,
  code: string,
}

export interface RecruitModelInfo extends RecruitBaseInfo {
  classifyTree: ProfessionRecruitData[],
  placeholder: string,
  maxImageCount: number,
  maxClassifyCount: number,
  view_images: RecruitImageModel[],
  is_check: number,
  check_fail_msg: string
}
//极速发布基础信息
export interface FastPublishBase{
  address: string,
  infoId: string,
  type: string,
  user_name: string,
  province_id: number,
  city_id: number,
  location: string,
  adcode: string,
  county_id: string,
  images: string[],
  detail: string,
  user_mobile: string,
  code: string,
  classifies: string[],
}

// 极速发布数据
export interface FastPublishInit extends FastPublishBase{
  classifyTree: ProfessionRecruitData[],
  mate_data: MateDataType[],
  not_mate_data: MateDataType[],
  placeholder:string,
  memberInfo: FastPublishMenberInfo,
  errcode:string,
  typeTextArr: FasttypeTextArr,
  classifies: string[],
  view_images: RecruitImageModel[],
  is_check: number,
  check_fail_msg: string
}
export interface MateDataType {
  keywords: string
  name: string
  occupation_id: string
}
export interface FastPublishMenberInfo {
  check_degree: string,
  headimgurl: string,
  id: string,
  is_check: string,
  status: string,
  tel: string,
  username: string,
  uuid: string,
  user_name:string
}

export interface FasttypeTextArr {
  classifyLabel: string,
  headerText: string,
  maxClassifyCount: number,
  maxImageCount: number,
  relationField: string,
  relationModelName: string,
  selectedClassifyLabel: string
}

export interface DefaultSearchName {
  id: string
  letter: string
  name: string
  pid:  string
}

export interface RecruitPublishInfo extends RecruitBaseInfo {
  images: string[]
}

export interface RecruitImageModel {
  url: string,
  httpurl: string
}

// 发布招工 最后发布地区
export interface UserLastPublishRecruitArea {
  location: string,
  adcode: string,
  title: string,
  info: string,
  city?:string,
  provice?:string,
}

//地址类型
export interface AreasType {
  id: string,
  pid: string,
  name: string,
  ad_name: string,
  has_children: number,
  children: AreasTypeChildren[]
}
//二级地址
export interface AreasTypeChildren {
  id: string,
  pid: string,
  name: string,
  ad_name: string
  info: string
}
export interface RecruitInfo {
  areaInfo: UserLastPublishRecruitArea,
  area: string,
  token: string,
  positionStatus: boolean,
  phone: string
}

// 初始化发布招工获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}
// 急速发布或者修改急速发布数据信息
export interface RecruitWorkInfo extends RecruitBaseInfo{
  view_images: RecruitImageModel[],
  is_check: number,
  check_fail_msg: string
}
// 发布招工匹配库数据
export interface MateDataItem {
  keywords: string,
  name: string,
  occupation_id: string
}

// 获取发布招工、快速发布、急速发布的配置数据
export interface PublishConfigData {
  classifyTree: ProfessionRecruitData[],
  mateData: Array<MateDataItem>,
  noMateData: Array<MateDataItem>,
  user_mobile: string,
  maxClassifyCount: number,
  maxImageCount: number,
  placeholder: string
}

export interface FastIssueData{
  content: string,
  phone: string
}
// 手机验证码校验请求参数
export interface VaildCodeReq{
  token: string,
  phone: string,
  code: string
}