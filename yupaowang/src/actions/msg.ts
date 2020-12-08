import { GETMSG, SETMSG, RESETMSG, SETMEMBERMSG } from '../constants/msg'
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

export function setMemberMsg(data: number){
  return {
    type: SETMEMBERMSG,
    data
  }
}