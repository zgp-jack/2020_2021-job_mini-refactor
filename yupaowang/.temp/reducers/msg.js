import { GETMSG, SETMSG, RESETMSG } from '../constants/msg';
const DEFAULT_STATE = {
  jobNumber: 0,
  messageNumber: 0
};
export default function msg(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETMSG:
      return state;
    case SETMSG:
      return { ...state, ...action.data };
    case RESETMSG:
      return { ...state, ...DEFAULT_STATE };
    default:
      return state;
  }
}