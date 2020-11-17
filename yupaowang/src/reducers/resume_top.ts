import { SETRESUMETOP, SETCLICKRESUMETOP } from '../constants/resume_top';
import { resume_topObj, resume_topObj_arrStr } from '../utils/request/index.d';

export interface useResumeType {
  resumeTopObj: resume_topObj,
  clickResumeTopObj: resume_topObj_arrStr[],
}

const DEFAULT_RESUME_TOP: resume_topObj = {
  has_top: 0,
  is_top: 0,
  is_top_text: '',
  is_top_to_text: '',
  top_tips_string: '',
  max_number: '',
  max_price: '',
  end_time: '',
  start_time: '',
  start_time_str: '',
  end_time_str: '',
  top_citys_str: [],
  top_provinces_str: [],
  top_citys: '',
  top_provinces: '',
  is_show_tips: 0,
  is_country: '',
  first_province_num: '',
  first_city_num: '',
}

const DEFAULT_STATE: useResumeType = {
  resumeTopObj: DEFAULT_RESUME_TOP,
  clickResumeTopObj: [],
}


interface ActionType {
  type: string,
  data: useResumeType,
}
export default function resumeTop(state: useResumeType = DEFAULT_STATE, action: ActionType) {
  switch (action.type) {
    case SETRESUMETOP:
      return { ...state, resumeTopObj:action.data }
    case SETCLICKRESUMETOP:
      return { ...state, clickResumeTopObj:action.data}
    default:
      return state
  }
}