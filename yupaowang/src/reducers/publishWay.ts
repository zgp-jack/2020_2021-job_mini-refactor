import { SETPUBLISHWAY, GETPUBLISHWAY } from './../constants/publishWay'
import { publishFindWork } from '../utils/helper/index.d'

// 默认发布招工state数据
const DEFAULT_STATE_PUBLISHDATA: publishFindWork = {
  resumeText: "",
  loginBefore: false,
  loginAfter: false,
  logoutWay: "",
  loginWay: "",
}


// action类型定义
export interface ACTIONTYPE {
  type: string,
  data: publishFindWork
}

export default function MyAreaInfo(state: publishFindWork = DEFAULT_STATE_PUBLISHDATA, action: ACTIONTYPE) {
  switch (action.type) {
    case GETPUBLISHWAY:
      return state;
    case SETPUBLISHWAY:
      return {...state, ...action.data};
    default:
      return state
  }
}

