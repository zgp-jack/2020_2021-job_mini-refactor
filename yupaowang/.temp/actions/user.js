import { GETUSER, SETUSER, LOGINOUT } from '../constants/user';
export function setUserInfo(user) {
  return {
    type: SETUSER,
    data: user
  };
}
export function getUserInfo() {
  return {
    type: GETUSER
  };
}
export function loginOut() {
  return {
    type: LOGINOUT
  };
}