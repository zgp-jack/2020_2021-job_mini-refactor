import { SETSUBPACKCERTIFICATE, SETSUBPACKPROJECT } from '../constants/resume_list';
export function setSubpackcertificate(data) {
  return {
    type: SETSUBPACKCERTIFICATE,
    data: data
  };
}
export function setSubpackProject(data) {
  return {
    type: SETSUBPACKPROJECT,
    data: data
  };
}