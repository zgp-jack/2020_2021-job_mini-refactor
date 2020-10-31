import { ResumeAddInfoConfig } from '../utils/request/index.d'
import { GET, SET } from '../constants/resume_addinfo' 

export interface DEFAUTL_STATE_TYPE extends ResumeAddInfoConfig {
  isset: boolean
}

interface ACTION_TYPE {
  type: string,
  data: DEFAUTL_STATE_TYPE
}

const DEFAUTL_STATE: DEFAUTL_STATE_TYPE = {
  label: [],
  gender: [],
  occupation: [],
  nation: [],
  type: [],
  prof_degree: [],
  isset: false
}


export default function resumeAddInfo(state: DEFAUTL_STATE_TYPE = DEFAUTL_STATE, action: ACTION_TYPE  ) {
  switch (action.type){
    case GET:
      return { ...state }
      break
    case SET: 
      return { ...state, ...action.data }
      break
    default:
      return { ...state }
  }
}