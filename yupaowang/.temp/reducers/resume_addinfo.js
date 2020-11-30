import { GETRESUMECONFIG, SETRESUMECONSIG } from '../constants/resume_addinfo';
const DEFAUTL_STATE = {
  label: [],
  gender: [],
  occupation: [],
  nation: [],
  type: [],
  prof_degree: [],
  isset: false
};
export default function resumeAddInfo(state = DEFAUTL_STATE, action) {
  switch (action.type) {
    case GETRESUMECONFIG:
      return { ...state };
      break;
    case SETRESUMECONSIG:
      return { ...state, ...action.data };
      break;
    default:
      return { ...state };
  }
}