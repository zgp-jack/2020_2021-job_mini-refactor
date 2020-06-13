import { GETLIST, SETLIST } from '../constants/resume'
// 内容的参数
const DEFAULT_STATE: any = {
  data: {}
}

export interface ACTIONTYPE {
  type: string,
  data: any
}

export default function Myresume(state: any = DEFAULT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETLIST:
      return state;
    case SETLIST:
      state = { ...state, ...action.data }
      return state;
    default:
      return state
  }
}