/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:02
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 09:22:44
 * @Description: 
 */
import { GETUSERRESUME,SETUSERRESUME } from '../constants/resume_data';
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr } from '../utils/request/index.d';
export interface useResumeType {
  info: resInfoObj,
  introducesData: resIntroduceObj,
  projectData: resProjectArr[],
  certificates: resCertificatesArr[],
  resume_uuid:string
}

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