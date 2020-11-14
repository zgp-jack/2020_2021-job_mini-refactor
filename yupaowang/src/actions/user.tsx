import { GETUSER, SETUSER } from '../constants/user'
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