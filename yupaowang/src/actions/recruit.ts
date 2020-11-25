import { SETAREAINFO, GETAREAINFO, SETAREA, GETAREA, SETPOSITIONSTATUS } from '../constants/recruit'
import { UserLastPublishRecruitArea, AreaData } from '../pages//recruit/index.d'

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

export function setArea(data: AreaData) {
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