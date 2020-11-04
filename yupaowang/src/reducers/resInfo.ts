/*
 * @Author: zyb
 * @Date: 2020-11-04 14:37:40
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 15:25:13
 * @Description: 
 */
import { resInfoObj } from '../utils/request/index.d'
import { GETRESINFO, SETRESINFO } from '../constants/resInfo';
// import { INFODATA_DATA } from '../pages/resume/publish/data';

interface ACTIONTYPE {
  type: string,
  data: resInfoObj,
}
const INFODATA_DATA = {
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
}
export default function resInfo(state: resInfoObj = INFODATA_DATA, action: ACTIONTYPE) {
  switch (action.type) {
    case GETRESINFO:
      return state
    case SETRESINFO:
      return { ...state, ...action.data }
    default:
      return state
  }
}