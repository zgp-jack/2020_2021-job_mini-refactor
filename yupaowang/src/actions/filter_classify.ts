import { GETCLASSIFY, SETCLASSIFY } from '../constants/filter_classify'
import { filterClassifyDataResultReduce } from '../reducers/filter_classify'

export function setFilter(data: filterClassifyDataResultReduce) {
  return {
    type: SETCLASSIFY,
    data: data
  }
}

export function getFilter() {
  return {
    type: GETCLASSIFY
  }
}