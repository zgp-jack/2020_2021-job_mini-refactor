import { MemberMsgNumber } from '../utils/request/index.d'
import { GETMSG, SETMSG, RESETMSG } from '../constants/msg'

const DEFAULT_STATE: MemberMsgNumber = {
  jobNumber: 0,
  messageNumber: 0
}

export interface ACTIONTYPE {
  type: string,
  data: MemberMsgNumber
}

export default function msg(state: MemberMsgNumber = DEFAULT_STATE, action: ACTIONTYPE){
  switch(action.type){
    case GETMSG:
      return state
    case SETMSG:
      return { ...state, ...action.data }
    case RESETMSG:
      return { ...state, ...DEFAULT_STATE}
    default:
      return state
  }
}