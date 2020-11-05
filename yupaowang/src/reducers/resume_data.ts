/*
 * @Author: zyb
 * @Date: 2020-11-04 19:59:33
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 10:09:29
 * @Description: 
 */
import { SETUSERRESUME,GETUSERRESUME } from '../constants/resume_data';
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
      state = { ...state, ...action.data }
      return state;
    default:
      return state
  }
}