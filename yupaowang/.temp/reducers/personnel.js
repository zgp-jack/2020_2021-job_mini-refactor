import { GETDATA, SETDATA } from '../constants/personnel';
// 内容的参数
const DEFAULT_STATE = {
  data: {}
};
export default function Personnel(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETDATA:
      return state;
    case SETDATA:
      state = { ...state, ...action.data };
      return state;
    default:
      return state;
  }
}