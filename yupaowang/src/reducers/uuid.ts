/*
 * @Author: zyb
 * @Date: 2020-11-04 19:37:03
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 19:42:23
 * @Description: 
 */
import { GETUUID,SETUUID } from '../constants/uuid'

const UUID_STATE:string ='';

interface ActionType {
  type: string,
  data: string
}

export default function uuid(state: string = UUID_STATE, action: ActionType) {
  switch (action.type) {
    case GETUUID:
      return state
      break
    case SETUUID:
      return action.data
      break
    default:
      return state
  }
}