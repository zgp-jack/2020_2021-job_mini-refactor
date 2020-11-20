import { GETMSG, SETMSG, RESETMSG } from '../constants/msg';
export function setMsg(data) {
  return {
    type: SETMSG,
    data: data
  };
}
export function getMsg() {
  return {
    type: GETMSG
  };
}
export function resetMsg() {
  return {
    type: RESETMSG
  };
}