/*
 * @Author: zyb
 * @Date: 2020-11-04 14:34:32
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:42:40
 * @Description: 
 */
import { SETRESINFO,GETRESINFO } from '../constants/resInfo';
import { resInfoObj } from '../utils/request/index.d';

export function setResInfo(data: resInfoObj) {
  return {
    type: SETRESINFO,
    data: data
  }
}
export function getResInfo(data: resInfoObj) {
  return {
    type: GETRESINFO,
    data: data
  }
}
