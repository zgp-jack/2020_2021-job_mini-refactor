import { filterClassifyDataResult } from '../utils/request/index.d'
import { GETCLASSIFY, SETCLASSIFY } from '../constants/filter_classify'

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

export default function filterClassify(state: filterClassifyDataResultReduce = DEFAULT_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETCLASSIFY:
      return state
    case SETCLASSIFY:
      return { ...state, ...action.data }
    default:
      return state
  }
}