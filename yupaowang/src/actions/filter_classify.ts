import { GET, SET } from '../constants/filter_classify'
import { filterClassifyDataResultReduce } from '../reducers/filter_classify'

export function setFilter(data: filterClassifyDataResultReduce) {
  return {
    type: SET,
    data: data
  }
}

export function getFilter() {
  return {
    type: GET
  }
}