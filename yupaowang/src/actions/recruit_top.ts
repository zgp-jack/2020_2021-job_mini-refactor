import { SET_RECRUIT_TOP_AREA } from '../constants/recruit_top'
import { ParamsType } from '../reducers/recruit_top'

export default function setRecruitTopArea(data: ParamsType ){
  return {
    type: SET_RECRUIT_TOP_AREA,
    data: data
  }
}