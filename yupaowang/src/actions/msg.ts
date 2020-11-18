import { GETMSG, SETMSG, RESETMSG } from '../constants/msg'
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

export function resetMsg(){
  return {
    type: RESETMSG
  }
}