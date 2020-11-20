import { SET_RECRUIT_TOP_AREA } from '../constants/recruit_top';
// 需要传递的值
const value = {
  AreParams: {
    city: [],
    province: [],
    whole: []
  }
};
export default function RecruitTopRedux(state = value, action) {
  switch (action.type) {
    case SET_RECRUIT_TOP_AREA:
      return { ...state, AreParams: { ...action.data } };
    default:
      return state;
  }
}