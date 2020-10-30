import { SETAREAINFO, GETAREAINFO, SETAREA, GETAREA } from '../constants/recruit'

export function setAreaInfo(data:any) {
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

export function setArea(data:any) {
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