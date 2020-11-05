/*
 * @Author: zyb
 * @Date: 2020-11-03 09:23:50
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-03 16:32:41
 * @Description: 
 */
import { ResumeTopStr, resumesGetData, resumeListDataTopStatus } from '../../../utils/request/index.d'
export interface ImageDataType {
  item: ImageItem[]
}
export interface ImageItem {
  url: string,
  httpurl: string
}
export interface introducesType {
  experience: string,
  type_str: string,
  hometown: string,
  prof_degree_str: string,
  number_people: string,
  tags: introducesTags[],
}
export interface DataType {
  certificate_count:number,
  certificates: certificatesArr[],
  fast_info: fast_infoObj,
  content: contentObj,
  default_top_area:number,
  fail_certificate:number,
  fail_project:number,
  info: infoObj,
  integral:number,
  introduce: introduceObj,
  is_introduces:number,
  is_popup:number,
  popup_text:[],
  project: projectArr[],
  project_count:number,
  refresh_text:string,
  resume_top: resume_topObj,
  status: statusArr[],
  top_status: top_statusArr[]
}
export interface projectArr {
  check: string,
  city: string,
  city_name: string,
  completion_time: string,
  detail: string,
  fail_case: string,
  id: string,
  image:string[],
  images:string[],
  project_name: string,
  province: string,
  province_name: string,
  resume_uuid: string,
  start_time: string,
  update_time: string,
  uuid: string,
}
export interface introduceObj {
  check: string,
  experience: string,
  experience_str: string,
  hometown: string,
  hometown_id: string,
  number_people: string,
  prof_degree: string,
  prof_degree_str: string,
  tag_id: string,
  tags: tagesArr[],
  type: string,
  type_str: string,
}
export interface resume_topObj{
  has_top: number,
  is_top: number,
  is_top_text: string,
  is_top_to_text: string,
  top_tips_string: string,
}
export interface contentObj {
  check_tips_string: string,
  show_tips: number,
}
export interface fast_infoObj {
  city_id: string,
  city_txt: string,
  job_id: number,
  occ: string,
  occ_txt: string,
  occupation_tree: occupation_treeArr[],
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
export interface infoObj {
  ad_code: number,
  address: string,
  admin_last_edit_time: string,
  admin_user_id: string,
  authentication: string,
  birthday: string,
  certificate_show: number,
  check: string,
  city: string,
  collect_num: string,
  complain_num: string,
  country: string,
  current_admin: string,
  distance: string,
  experience: string,
  extens: string,
  gender: string,
  headerimg: string,
  hometown: string,
  id: string,
  img: string,
  introduce: string,
  ip_address: string,
  is_end: string,
  is_introduces: string,
  last_update_admin: string,
  location: string,
  miniInfoOccupations: string[],
  nation: string,
  nation_id: string,
  note: string,
  number_people: string,
  occupations: string[],
  occupations_id: string,
  prof_degree: string,
  progress: string,
  province: string,
  provinces: string,
  ranking: string,
  refresh_time: string,
  sort_flag: string,
  source: string,
  tags: tagesArr[],
  tel: string,
  time: string,
  title: string,
  type: string,
  update_time: string,
  user_id: string,
  user_uuid: string,
  username: string,
  uuid: string,
  view_images: null
  view_num: string,
  zan_num: string,
}
export interface tagesArr {
  id: number,
  label_name: string,
  label_py: string,
}
export interface certificatesArr {
  admin_last_edit_time: string,
  certificate_time: string,
  check: string,
  current_admin: string,
  fail_case: string,
  id: string,
  image:string[],
  images:string[],
  last_update_admin: string,
  name: string,
  resume_uuid: string,
  sort_flag: string,
  time: string,
  update_time: string,
  user_uuid: string,
  uuid: string,
}
export interface statusArr {
  id:number,
  name:string,
}
export interface top_statusArr {
  id: number,
  name: string,
}
export interface occupation_treeArr{
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
export interface introducesTags {
  label_name: string,
}
// 最后发布地区
export interface UserLastPublishRecruitArea {
  location: string,
  adcode: string,
  title: string,
  info: string
}

export interface Injected {
  area: string, // 城市名称
  // userInfo: any, // 个人信息
  // publicList: resumesGetData,//公用值
  // skillData: any,//修改技能证书
  // projectData: any, //修改项目经验 
  resumeTop: any,//找活置顶
  // basicsCity:string,//选择区域
  setArea: (city: string) => void, //设置城市名称
  // setAreaInfo?: (item: UserLastPubslishRecruitArea) => void, // 用户点击的小地址信息
  // setPublishArea?: (val: string) => void //设置最后一次点击 城市的名字
}

// 用户定位返回信息
export interface UserLocationPromiss {
  province: string,
  city: string,
  adcode: string,
  citycode: string
}