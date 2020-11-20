/*
 * @Author: zyb
 * @Date: 2020-11-04 19:59:33
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-06 15:39:52
 * @Description:
 */
import { SETUSERRESUME, GETUSERRESUME, SETINTRODUCE, SETCERTIFICATE } from '../constants/resume_data';
import { INFODATA_DATA, INTRODUCERS_DATA } from '../pages/resume/publish/data';
const DEFAULT_STATE = {
  info: INFODATA_DATA,
  introducesData: INTRODUCERS_DATA,
  projectData: [],
  certificates: [],
  resume_uuid: '',
  isSet: false
};
export default function resumeData(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETUSERRESUME:
      return state;
    case SETUSERRESUME:
      return { ...state, ...action.data };
    case SETINTRODUCE:
      return { ...state, introducesData: action.data };
    case SETCERTIFICATE:
      return { ...state, certificates: action.data };
    default:
      return state;
  }
}