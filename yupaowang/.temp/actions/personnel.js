import { GETDATA, SETDATA } from '../constants/personnel';
export function setPersonnelAction(data) {
  return {
    type: SETDATA,
    data: data
  };
}
export function getPersonnel() {
  return {
    type: GETDATA
  };
}