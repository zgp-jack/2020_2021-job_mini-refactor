import { SETLIST, GETLIST } from '../constants/resume';
export function setResumeAction(data) {
  return {
    type: SETLIST,
    data: data
  };
}
export function getResumeAction() {
  return {
    type: GETLIST
  };
}