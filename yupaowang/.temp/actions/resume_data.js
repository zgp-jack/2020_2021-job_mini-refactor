/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:02
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-10 10:01:29
 * @Description:
 */
import { GETUSERRESUME, SETUSERRESUME, SETINTRODUCE, SETCERTIFICATE, SETPROJECT } from '../constants/resume_data';
export function getUseResume(data) {
  return {
    type: GETUSERRESUME,
    data: data
  };
}
export function setUseResume(data) {
  return {
    type: SETUSERRESUME,
    data: data
  };
}
// 设置人员信息
export function setIntroduceInfo(data) {
  return {
    type: SETINTRODUCE,
    data: data
  };
}
// 设置技能证书列表
export function setCertificateList(data) {
  return {
    type: SETCERTIFICATE,
    data: data
  };
}
// 设置项目列表
export function setProjectList(data) {
  return {
    type: SETPROJECT,
    data: data
  };
}