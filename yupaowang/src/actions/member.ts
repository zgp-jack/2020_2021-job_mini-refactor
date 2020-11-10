import { GET, SET, TEL } from '../constants/member'
import { UserMemberInfo } from '../reducers/member'

export function setMemberInfo(member: UserMemberInfo) {
  return {
    type: SET,
    data: member
  }
}

export function getUserInfo() {
  return {
    type: GET
  }
}

export function setMemberTel(val: string){
  return {
    type: TEL,
    data: val
  }
}