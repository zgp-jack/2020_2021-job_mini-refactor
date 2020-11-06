/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:02
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-06 15:41:35
 * @Description: 
 */
import { GETUSERRESUME, SETUSERRESUME, SETINTRODUCE, SETCERTIFICATE } from '../constants/resume_data';
import { useResumeType } from '../pages/resume/publish/index.d'
import { resIntroduceObj, resCertificatesArr } from '../utils/request/index.d'  

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
// 设置人员信息
export function setIntroduceInfo(data: resIntroduceObj){
  return {
    type: SETINTRODUCE,
    data: data
  }
}
// 设置技能证书列表
export function setCertificateList(data: resCertificatesArr[]) {
  return {
    type: SETCERTIFICATE,
    data: data
  }
}