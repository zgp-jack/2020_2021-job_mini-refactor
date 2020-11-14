import { GETMSG, SETMSG } from '../constants/msg'
import { MemberMsgNumber } from '../utils/request/index.d'

export function setMsg(data: MemberMsgNumber){
  return {
    type: SETMSG,
    data: data
  }
}

export function getMsg(){
  return {
    type: GETMSG
  }
}