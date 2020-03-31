import { MemberMsgNumber } from '../utils/request/index.d'
import { GET, SET } from '../constants/msg'

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
    case GET:
      return state
    case SET:
      return { ...state, ...action.data }
    default:
      return state
  }
}