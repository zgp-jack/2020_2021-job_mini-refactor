import { GETDATA, SETDATA } from '../constants/personnel'
// 内容的参数
const DEFAULT_STATE: any = {
  data: {}
}

export interface ACTIONTYPE {
  type: string,
  data: any
}

export default function Personnel(state: any = DEFAULT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETDATA:
      return state;
    case SETDATA:
      state = { ...state, ...action.data }
      return state;
    default:
      return state
  }
}