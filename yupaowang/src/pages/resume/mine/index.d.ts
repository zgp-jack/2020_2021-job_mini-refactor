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
  info: {
    progress: string,
    view_num: string,
    sort_flag: string,
    username: string,
    nation: string,
    occupations: [],
    tel: string,
    address: string,
    introduce: string,
    note: string,
    is_end: string,
    check: string,
    uuid: string,
    user_uuid: string,
    city: string,
    occupations_id: string
  },
  resume_top: {
    is_top: number,
    has_top: number,
    top_provinces_str: ResumeTopStr[],
    start_time_str: number,
    end_time_str: string,
    top_tips_string: string,
    is_show_tips: number,
    end_time: string,
  },
  content: {
    show_tips: number,
    check_tips_string: string,
  },
  introduces: introducesType
  certificate_count: number,
  fail_certificate: number,
  fail_project: number,
  popup_text: string[],
  top_status: resumeListDataTopStatus[]
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