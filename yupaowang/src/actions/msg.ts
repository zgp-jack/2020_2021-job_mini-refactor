import { GET, SET } from '../constants/msg'
import { MemberMsgNumber } from '../utils/request/index.d'

export function setMsg(data: MemberMsgNumber){
  return {
    type: SET,
    data: data
  }
}

export function getMsg(){
  return {
    type: GET
  }
}