import { GETLIST, SETLIST } from '../constants/resume';
// 内容的参数
const DEFAULT_STATE = {
  data: {}
};
export default function Myresume(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETLIST:
      return state;
    case SETLIST:
      state = { ...state, ...action.data };
      return state;
    default:
      return state;
  }
}