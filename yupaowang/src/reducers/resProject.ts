/*
 * @Author: zyb
 * @Date: 2020-11-04 11:33:48
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 17:51:02
 * @Description: 
 */
import { resProjectArr } from '../utils/request/index.d'
import { GETRESPROJECT, SETRESPROJECT } from '../constants/resProject';

const RESPROJECT_STATE  = {
  check: '',
  city: '',
  city_name: '',
  completion_time: '',
  detail: '',
  fail_case: '',
  id: '',
  image: [],
  images: [],
  project_name: '',
  province: '',
  province_name: '',
  resume_uuid: '',
  start_time: '',
  update_time: '',
  uuid: '',
}

interface ACTIONTYPE {
  type: string,
  data: resProjectArr[],
}
export default function resProjectData(state: resProjectArr = RESPROJECT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETRESPROJECT:
      return state
    case SETRESPROJECT:
      return action.data
    default:
      return state
  }
}