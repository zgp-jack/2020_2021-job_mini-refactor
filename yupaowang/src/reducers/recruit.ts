import { GETAREAINFO, SETAREAINFO, SETAREA, GETAREA, SETPOSITIONSTATUS, SETTOKEN, GETTOKEN } from '../constants/recruit' //定义发布招工获取设置区域信息的action
import { UserLastPublishRecruitArea, RecruitInfo } from '../pages/recruit/index.d'//招工信息发布区域信息类型
import { UserLocationPromiss, AREABEIJING } from '../models/area'

const DEFAULT_STATE_RECRUIT: RecruitInfo = {
  areaInfo:{
    title: '',
    adcode: '',
    location: '',
    info: ''
  },
  area: AREABEIJING.name,
  token:'',
  positionStatus: true
}
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

export interface ACTIONTYPES {
  type: string,
  data: UserLastPublishRecruitArea | string
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

export function PositionStatus(state:boolean = true, action:ACTIONTYPE){
  switch (action.type) {
    case SETPOSITIONSTATUS:
      state = action.data
      return state;
    default:
      return state

  }
}

export function RecruitAction(state: RecruitInfo = DEFAULT_STATE_RECRUIT, action: ACTIONTYPES){
  switch (action.type) {
    case SETAREAINFO:
      return { ...state, areaInfo: action.data}
    case SETAREA:
      return {...state, area: action.data}
    case SETTOKEN:
      return {...state, token: action.data}
    case SETPOSITIONSTATUS:
      return { ...state, positionStatus: action.data}
    default:
      return state
  }
}