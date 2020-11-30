import Taro, { getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { UserInfo } from '../config/store';
import { GETUSER, SETUSER, LOGINOUT } from '../constants/user';
const userInfo = _getStorageSync(UserInfo);
const DEFAULT_STATE = userInfo ? userInfo : {
  userId: 0,
  uuid: '',
  tokenTime: 0,
  token: '',
  login: false
};
export default function User(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SETUSER:
      return { ...state, ...action.data };
    case GETUSER:
      if (!state.login) {
        let userInfo = _getStorageSync(UserInfo);
        if (userInfo) return userInfo;
      }
      return state;
    case LOGINOUT:
      return { ...state, ...DEFAULT_STATE };
    default:
      return state;
  }
}