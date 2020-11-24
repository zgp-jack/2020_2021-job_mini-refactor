import { GETREALNAME, SETREALNAME, SETAREA, SETFUN } from '../constants/realname';
const DEFAULT_STATE = {
  RealnameArea: '',
  setRealnameArea: () => {}
};
export default function RealnameStore(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETREALNAME:
      return state;
      break;
    case SETREALNAME:
      return { ...state, ...action.data };
      break;
    case SETFUN:
      return { ...state, setRealnameArea: action.data };
      break;
    case SETAREA:
      return { ...state, RealnameArea: action.data };
      break;
    default:
      return state;
  }
}