import { GETCLASSIFY, SETCLASSIFY } from '../constants/filter_classify';
export function setFilter(data) {
  return {
    type: SETCLASSIFY,
    data: data
  };
}
export function getFilter() {
  return {
    type: GETCLASSIFY
  };
}