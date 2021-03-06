// 用户会员中心部分共用信息
import { GETMEMBERINFO, SETMEMBERINFO, TEL } from '../constants/member'

export interface UserMemberInfo {
  username: string,
  phone: string,
  avatar: string,
  pwd_status: string,
  changeName: boolean
}

const DEFAULT_MEMBER_INFO: UserMemberInfo = {
  username: '',
  avatar: '',
  phone: '',
  pwd_status: '',
  changeName: false
}

interface ACTIONTYPE {
  type: string,
  data: UserMemberInfo
}

export default function UserMemberInfo(state: UserMemberInfo = DEFAULT_MEMBER_INFO, action: ACTIONTYPE){
  switch(action.type){
    case GETMEMBERINFO:
      return state
      break
    case SETMEMBERINFO:
      return {...state,...action.data}
      break
    case TEL:
      return { ...state, phone: action.data }
      break
    default:
      return state
  }
}