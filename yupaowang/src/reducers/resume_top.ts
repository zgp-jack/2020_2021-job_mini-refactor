import { SETRESUMETOP } from '../constants/resume_top';
import { resume_topObj } from '../utils/request/index.d';
const DEFAULT_STATE : resume_topObj = {
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
interface ActionType {
  type: string,
  data: resume_topObj,
}
export default function resumeTop(state: resume_topObj = DEFAULT_STATE, action: ActionType) {
  switch (action.type) {
    case SETRESUMETOP:
      return { ...state,...action.data }
    default:
      return state
  }
}