import { filterClassifyDataResult } from '../utils/request/index.d'
import { GET, SET } from '../constants/filter_classify'

export interface filterClassifyDataResultReduce extends filterClassifyDataResult{
  isSet: boolean
}

const DEFAULT_STATE: filterClassifyDataResultReduce = {
  classTree: [],
  fleamarketTree: [],
  jobListType: [],
  resumeListType: [],
  staffTree: [],
  isSet: false
}

export interface ACTIONTYPE {
  type: string,
  data: filterClassifyDataResultReduce
}

export default function msg(state: filterClassifyDataResultReduce = DEFAULT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GET:
      return state
    case SET:
      return { ...state, ...action.data }
    default:
      return state
  }
}