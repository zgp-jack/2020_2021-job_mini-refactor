import { SETSUBPACKCERTIFICATE ,SETSUBPACKPROJECT} from '../constants/resume_list';
import { resProjectArr, resCertificatesArr } from '../utils/request/index.d';
export interface useResumeType {
  certificates: resCertificatesArr[],
  project: resProjectArr[],
}

const DEFAULT_STATE :useResumeType = {
  certificates:[],
  project:[],
}
interface ActionType {
  type: string,
  data: useResumeType,
}

export default function resumeList(state: useResumeType = DEFAULT_STATE, action: ActionType) {
  switch (action.type) {
    case SETSUBPACKCERTIFICATE:
      return { ...state, certificates:action.data }
    case SETSUBPACKPROJECT:
      return { ...state, project:action.data }
    default:
      return state
  }
}