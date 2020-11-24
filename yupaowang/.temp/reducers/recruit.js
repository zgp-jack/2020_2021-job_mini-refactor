import { GETAREAINFO, SETAREAINFO, SETAREA, GETAREA, SETPOSITIONSTATUS } from '../constants/recruit'; //定义发布招工获取设置区域信息的action
import { AREABEIJING } from '../models/area';
// 内容的参数
const DEFAULT_STATE_AREAINFO = {
  title: '',
  adcode: '',
  location: '',
  info: ''
};
// 定义默认的区域数据
const DEFAULT_STATE_AREA = AREABEIJING.name;
export function MyAreaInfo(state = DEFAULT_STATE_AREAINFO, action) {
  switch (action.type) {
    case GETAREAINFO:
      return state;
    case SETAREAINFO:
      state = { ...state, ...action.data };
      return state;
    default:
      return state;
  }
}
export function MyArea(state = DEFAULT_STATE_AREA, action) {
  switch (action.type) {
    case GETAREA:
      return state;
    case SETAREA:
      state = action.data;
      return state;
    default:
      return state;
  }
}
export function PositionStatus(state = true, action) {
  switch (action.type) {
    case SETPOSITIONSTATUS:
      state = action.data;
      return state;
    default:
      return state;
  }
}