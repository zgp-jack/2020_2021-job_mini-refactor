/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:02
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 10:01:53
 * @Description: 
 */
import { GETUSERRESUME, SETUSERRESUME, SETINTRODUCE } from '../constants/resume_data';
import { useResumeType } from '../pages/resume/publish/index.d'
import { resIntroduceObj } from '../utils/request/index.d'  

export function getUseResume(data: useResumeType) {
  return {
    type: GETUSERRESUME,
    data: data
  }
}
export function setUseResume(data: useResumeType) {
  return {
    type: SETUSERRESUME,
    data: data
  }
}
export function setIntroduceInfo(data: resIntroduceObj){
  return {
    type: SETINTRODUCE,
    data: data
  }
}