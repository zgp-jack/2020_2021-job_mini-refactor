import { SETRESUMETOP } from '../constants/resume_top';
import { resume_topObj } from '../utils/request/index.d';
export function setResumeTop(data: resume_topObj) {
  return {
    type: SETRESUMETOP,
    data: data,
  }
}