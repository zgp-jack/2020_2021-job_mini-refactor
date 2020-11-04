/*
 * @Author: zyb
 * @Date: 2020-11-04 14:19:12
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:21:50
 * @Description: 
 */
import { resIntroduceObj } from '../utils/request/index.d'
import { SETINTRODUCEA, GETINTRODUCEA } from '../constants/introduces';

const INTRODUCEA_STATE =  {
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
}

interface ACTIONTYPE {
  type: string,
  data: resIntroduceObj,
}
export default function introduces(state: resIntroduceObj = INTRODUCEA_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETINTRODUCEA:
      return state
    case SETINTRODUCEA:
      return { ...state, ...action.data }
    default:
      return state
  }
}