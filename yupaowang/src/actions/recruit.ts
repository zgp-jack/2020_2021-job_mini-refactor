import { SETAREAINFO, GETAREAINFO, SETAREA, GETAREA, SETPOSITIONSTATUS, SETTOKEN, GETTOKEN, SETPHONE } from '../constants/recruit'
import { UserLastPublishRecruitArea } from '../pages/recruit/index.d'

export function setAreaInfo(data:UserLastPublishRecruitArea) {
  return {
    type: SETAREAINFO,
    data: data
  }
}

export function getAreaInfo() {
  return {
    type: GETAREAINFO,
  }
}

export function setArea(data:string) {
  return {
    type: SETAREA,
    data: data
  }
}

export function getArea() {
  return {
    type: GETAREA,
  }
}

export function setPositionStaus(data:boolean){
  return {
    type: SETPOSITIONSTATUS,
    data: data
  }
}

export function setToken(data:string){
  return {
    type: SETTOKEN,
    data: data
  }
}

export function getToken () {
  return {
    type: GETTOKEN
  }
}

export function setPhone (data: string) {
  return {
    type: SETPHONE,
    data: data
  }
}