import { GET, SET } from '../constants/msg'
// 内容的参数
const DEFAULT_STATE: any = {
  jobNumber: 0,
  messageNumber: 0
}

export interface ACTIONTYPE {
  type: string,
  data: any
}

export default function project(state: any = DEFAULT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GET:
      return state
    case SET:
      return { ...state, ...action.data }
    default:
      return state
  }
}