/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:02
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 19:58:28
 * @Description: 
 */
import { GETUSERRESUME,SETUSERRESUME } from '../constants/useResume';
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr, resume_topObj } from '../utils/request/index.d';
export interface useResumeType {
  info: resInfoObj,
  introducesData: resIntroduceObj,
  projectData: resProjectArr[],
  certificates: resCertificatesArr[],
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