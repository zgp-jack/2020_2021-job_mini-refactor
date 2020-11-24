import { GETRESUMECONFIG, SETRESUMECONSIG } from '../constants/resume_addinfo';
export function setResumeInfoConfig(data) {
  return {
    type: SETRESUMECONSIG,
    data: data
  };
}
export function getResumeInfoConfig() {
  return {
    type: GETRESUMECONFIG
  };
}