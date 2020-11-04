/*
 * @Author: zyb
 * @Date: 2020-11-04 19:36:46
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 19:38:44
 * @Description: 
 */
import { GETUUID,SETUUID } from '../constants/uuid'

export function setUuid(user: string) {
  return {
    type: SETUUID,
    data: user
  }
}

export function getUuid() {
  return {
    type: GETUUID
  }
}