import { GETREALNAME, SETREALNAME, SETAREA, SETFUN } from '../constants/realname'
import { RealnameDefaultStore } from '../reducers/realname'

export function setData(data: RealnameDefaultStore) {
  return {
    type: SETREALNAME,
    data: data
  }
}

export function getData() {
  return {
    type: GETREALNAME
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