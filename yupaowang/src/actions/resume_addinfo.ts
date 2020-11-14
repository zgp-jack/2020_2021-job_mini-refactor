import { GETRESUMECONFIG, SETRESUMECONSIG } from '../constants/resume_addinfo'
import { DEFAUTL_STATE_TYPE } from '../reducers/resume_addinfo'

export function setResumeInfoConfig(data: DEFAUTL_STATE_TYPE ) {
  return {
    type: SETRESUMECONSIG,
    data: data
  }
}

export function getResumeInfoConfig() {
  return {
    type: GETRESUMECONFIG
  }
}
