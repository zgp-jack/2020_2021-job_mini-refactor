import { SETSUBPACKCERTIFICATE, SETSUBPACKPROJECT } from '../constants/resume_list';
const DEFAULT_STATE = {
  certificates: [],
  project: []
};
export default function resumeList(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SETSUBPACKCERTIFICATE:
      return { ...state, certificates: action.data };
    case SETSUBPACKPROJECT:
      return { ...state, project: action.data };
    default:
      return state;
  }
}