import { GETCLASSIFY, SETCLASSIFY } from '../constants/filter_classify';
const DEFAULT_STATE = {
  classTree: [],
  fleamarketTree: [],
  jobListType: [],
  resumeListType: [],
  staffTree: [],
  isSet: false
};
export default function msg(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GETCLASSIFY:
      return state;
    case SETCLASSIFY:
      return { ...state, ...action.data };
    default:
      return state;
  }
}