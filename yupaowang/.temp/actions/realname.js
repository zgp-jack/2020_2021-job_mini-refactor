import { GETREALNAME, SETREALNAME, SETAREA, SETFUN } from '../constants/realname';
export function setData(data) {
  return {
    type: SETREALNAME,
    data: data
  };
}
export function getData() {
  return {
    type: GETREALNAME
  };
}
export function setArea(data) {
  return {
    type: SETAREA,
    data
  };
}
export function setFun(data) {
  return {
    type: SETFUN,
    data
  };
}