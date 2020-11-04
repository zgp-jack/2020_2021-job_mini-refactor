/*
 * @Author: zyb
 * @Date: 2020-11-04 19:59:33
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 20:13:43
 * @Description: 
 */
import { SETUSERRESUME,GETUSERRESUME } from '../constants/useResume';
import { useResumeType } from '../actions/useResume';

const DEFAULT_STATE = {
  info:{
    ad_code: 0,
    address: '',
    admin_last_edit_time: '',
    admin_user_id: '',
    authentication: '',
    birthday: '',
    certificate_show: 0,
    check: '',
    city: '未填写',
    collect_num: '',
    complain_num: '',
    country: '',
    current_admin: '',
    distance: '',
    experience: '',
    extens: '',
    gender: '',
    headerimg: '',
    hometown: '',
    id: '',
    img: '',
    introduce: '未填写',
    ip_address: '',
    is_end: '',
    is_introduces: '',
    location: '',
    miniInfoOccupations: [],
    nation: '',
    nation_id: '',
    note: '',
    number_people: '',
    occupations: [],
    occupations_id: '',
    prof_degree: '',
    progress: '0',
    province: '',
    provinces: '',
    ranking: '',
    refresh_time: '',
    sort_flag: '',
    source: '',
    tags: [],
    tel: '未填写',
    time: '',
    type: '',
    update_time: '',
    user_id: '',
    user_uuid: '',
    username: '',
    uuid: '',
    view_num: '',
    zan_num: '',
    age: '未填写',
  },
  introducesData:{
    check: '',
    experience: '',
    experience_str: '',
    hometown: '',
    hometown_id: '',
    number_people: '',
    prof_degree: '',
    prof_degree_str: '',
    tag_id: '',
    tags: [],
    type: '',
    type_str: '',
  },
  projectData:[],
  certificates:[],
}



interface ActionType {
  type: string,
  data: useResumeType,
}


export default function useResume(state: useResumeType = DEFAULT_STATE, action: ActionType) {
  switch (action.type) {
    case GETUSERRESUME:
      return state;
    case SETUSERRESUME:
      state = { ...state, ...action.data }
      return state;
    default:
      return state
  }
}