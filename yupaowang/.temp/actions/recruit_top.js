import { SET_RECRUIT_TOP_AREA } from '../constants/recruit_top';
export default function setRecruitTopArea(data) {
  return {
    type: SET_RECRUIT_TOP_AREA,
    data: data
  };
}