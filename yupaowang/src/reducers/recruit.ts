import { SETAREAINFO, SETAREA, SETPOSITIONSTATUS, SETTOKEN, SETPHONE } from '../constants/recruit' //定义发布招工获取设置发布信息的action
import { UserLastPublishRecruitArea, RecruitInfo } from '../pages/recruit/index.d'//招工信息发布区域信息类型
import { AREABEIJING } from '../models/area'

const DEFAULT_STATE_RECRUIT: RecruitInfo = {
  areaInfo:{
    title: '',
    adcode: '',
    location: '',
    info: '',
    areaId:''
  },
  area: {
    name: AREABEIJING.name,
    id: AREABEIJING.id,
    ad_name: AREABEIJING.ad_name
  },
  token:'',
  phone:'',
  positionStatus: true,
}

// action类型定义
export interface ACTIONTYPE {
  type: string,
  data: any
}

export interface ACTIONTYPES {
  type: string,
  data: UserLastPublishRecruitArea | string | boolean
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
    case SETPHONE: 
      return { ...state, phone: action.data}
    default:
      return state
  }
}