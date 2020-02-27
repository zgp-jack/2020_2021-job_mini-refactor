import { GET, SET } from '../constants/user'
import { User } from '../reducers/user'

export function setUserInfo(user: User){
  return {
    type: SET,
    data: user
  }
}

export function getUserInfo(){
  return {
    type: GET
  }
}