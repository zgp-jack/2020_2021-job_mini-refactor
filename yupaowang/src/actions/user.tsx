import { GETUSER, SETUSER, LOGINOUT } from '../constants/user'
import { User } from '../reducers/user'

export function setUserInfo(user: User){
  return {
    type: SETUSER,
    data: user
  }
}

export function getUserInfo(){
  return {
    type: GETUSER
  }
}

export function loginOut(){
  return {
    type: LOGINOUT
  }
}