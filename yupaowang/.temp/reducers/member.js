// 用户会员中心部分共用信息
import { GETMEMBERINFO, SETMEMBERINFO, TEL } from '../constants/member';
const DEFAULT_MEMBER_INFO = {
  username: '',
  avatar: '',
  phone: '',
  pwd_status: '',
  changeName: false
};
export default function UserMemberInfo(state = DEFAULT_MEMBER_INFO, action) {
  switch (action.type) {
    case GETMEMBERINFO:
      return state;
      break;
    case SETMEMBERINFO:
      return { ...state, ...action.data };
      break;
    case TEL:
      return { ...state, phone: action.data };
      break;
    default:
      return state;
  }
}