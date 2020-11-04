/*
 * @Author: zyb
 * @Date: 2020-11-04 11:27:56
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 11:59:56
 * @Description: 
 */
import { SETRESPROJECT,GETRESPROJECT } from '../constants/resProject';
import { resProjectArr } from '../utils/request/index.d';

export function setResProject(data: resProjectArr[]) {
  return {
    type: SETRESPROJECT,
    data: data
  }
}
export function getResProject(data: resProjectArr[]) {
  return {
    type: GETRESPROJECT,
    data: data
  }
}
