import { SETLIST, GETLIST } from '../constants/resume'

export function setResumeAction(data:any) {
  return {
    type: SETLIST,
    data: data
  }
}

export function getResumeAction() {
  return {
    type: GETLIST,
  }
}