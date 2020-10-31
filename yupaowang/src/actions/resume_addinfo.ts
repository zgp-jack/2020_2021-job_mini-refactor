import { GET, SET } from '../constants/resume_addinfo'
import { DEFAUTL_STATE_TYPE } from '../reducers/resume_addinfo'

export function setResumeInfoConfig(data: DEFAUTL_STATE_TYPE ) {
  return {
    type: SET,
    data: data
  }
}

export function getResumeInfoConfig() {
  return {
    type: GET
  }
}
