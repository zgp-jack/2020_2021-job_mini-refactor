import { SETAREAINFO, GETAREAINFO, SETAREA, GETAREA, SETPOSITIONSTATUS } from '../constants/recruit';
export function setAreaInfo(data) {
  return {
    type: SETAREAINFO,
    data: data
  };
}
export function getAreaInfo() {
  return {
    type: GETAREAINFO
  };
}
export function setArea(data) {
  return {
    type: SETAREA,
    data: data
  };
}
export function getArea() {
  return {
    type: GETAREA
  };
}
export function setPositionStaus(data) {
  return {
    type: SETPOSITIONSTATUS,
    data: data
  };
}