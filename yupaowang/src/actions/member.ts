import { GETMEMBERINFO, SETMEMBERINFO, TEL } from '../constants/member'
import { UserMemberInfo } from '../reducers/member'

export function setMemberInfo(member: UserMemberInfo) {
  return {
    type: SETMEMBERINFO,
    data: member
  }
}

export function getUserInfo() {
  return {
    type: GETMEMBERINFO
  }
}

export function setMemberTel(val: string){
  return {
    type: TEL,
    data: val
  }
}