import { GETMEMBERINFO, SETMEMBERINFO, TEL } from '../constants/member';
export function setMemberInfo(member) {
  return {
    type: SETMEMBERINFO,
    data: member
  };
}
export function getUserInfo() {
  return {
    type: GETMEMBERINFO
  };
}
export function setMemberTel(val) {
  return {
    type: TEL,
    data: val
  };
}