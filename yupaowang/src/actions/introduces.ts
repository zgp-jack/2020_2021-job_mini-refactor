/*
 * @Author: zyb
 * @Date: 2020-11-04 14:08:35
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:18:23
 * @Description: 
 */
import { SETINTRODUCEA, GETINTRODUCEA } from '../constants/introduces';
import { resIntroduceObj } from '../utils/request/index.d';

export function setIntroduces(data: resIntroduceObj) {
  return {
    type: SETINTRODUCEA,
    data: data
  }
}
export function getIntroduces(data: resIntroduceObj) {
  return {
    type: GETINTRODUCEA,
    data: data
  }
}