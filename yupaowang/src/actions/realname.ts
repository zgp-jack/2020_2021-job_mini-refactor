import { GET, SET, SETAREA, SETFUN } from '../constants/realname'
import { RealnameDefaultStore } from '../reducers/realname'

export function setData(data: RealnameDefaultStore) {
  return {
    type: SET,
    data: data
  }
}

export function getData() {
  return {
    type: GET
  }
}

export function setArea(data: string){
  return {
    type: SETAREA,
    data
  }
}

export function setFun(data:() => void){
  return {
    type: SETFUN,
    data
  }
}