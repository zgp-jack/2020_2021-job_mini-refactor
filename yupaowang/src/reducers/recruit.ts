import { GETAREAINFO, SETAREAINFO, SETAREA, GETAREA } from '../constants/recruit' //定义发布招工获取设置区域信息的action
import { UserLastPublishRecruitArea } from '../pages/recruit/index.d'//招工信息发布区域信息类型
import { UserLocationPromiss, AREABEIJING } from '../models/area'
// 内容的参数
const DEFAULT_STATE_AREAINFO: UserLastPublishRecruitArea = {
    title: '',
    adcode:'',
    location: '',
    info: ''
}
// 定义默认的区域数据
const DEFAULT_STATE_AREA:string = AREABEIJING.name

// action类型定义
export interface ACTIONTYPE {
  type: string,
  data: any
}

export function MyAreaInfo(state: UserLastPublishRecruitArea = DEFAULT_STATE_AREAINFO, action: ACTIONTYPE) {
  switch (action.type) {
    case GETAREAINFO:
      return state;
    case SETAREAINFO:
      state = { ...state, ...action.data }
      return state;
    default:
      return state
  }
}
export function MyArea(state:string = DEFAULT_STATE_AREA, action: ACTIONTYPE){
    switch (action.type) {
        case GETAREA:
          return state;
        case SETAREA:
          state = action.data
          return state;
        default:
          return state
    }
}