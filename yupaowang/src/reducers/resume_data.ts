/*
 * @Author: zyb
 * @Date: 2020-11-04 19:59:33
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-06 15:39:52
 * @Description: 
 */
import { SETUSERRESUME, GETUSERRESUME, SETINTRODUCE, SETCERTIFICATE } from '../constants/resume_data';
import { useResumeType } from '../pages/resume/publish/index.d';
import { INFODATA_DATA, INTRODUCERS_DATA } from '../pages/resume/publish/data';

const DEFAULT_STATE: useResumeType = {
  info: INFODATA_DATA,
  introducesData: INTRODUCERS_DATA,
  projectData:[],
  certificates:[],
  resume_uuid:'',
  isSet:false,
}

interface ActionType {
  type: string,
  data: useResumeType,
}

export default function resumeData(state: useResumeType = DEFAULT_STATE, action: ActionType) {
  switch (action.type) {
    case GETUSERRESUME:
      return state;
    case SETUSERRESUME:
      return { ...state, ...action.data }
    case SETINTRODUCE:
      return { ...state, introducesData: action.data }
    case SETCERTIFICATE:
      return { ...state, certificates: action.data }
    default:
      return state
  }
}