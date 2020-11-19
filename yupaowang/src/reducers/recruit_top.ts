import { SET_RECRUIT_TOP_AREA } from '../constants/recruit_top'
export interface Distruction {
  AreParams: ParamsType,
}

export interface ParamsType {
  city: areDataChildrenType[],
  province: areDataChildrenType[],
  whole: areDataChildrenType[],
}
interface areDataChildrenType {
  ad_name?: string
  id: string
  name: string
  pid: string,
  click: boolean,
  listName?: string
}

interface ActionType {
  type: string,
  data: Distruction
}

// 需要传递的值
const value: Distruction = {
  AreParams: {
    city: [],
    province: [],
    whole: []
  }
}


export default function RecruitTopRedux(state: Distruction = value, action: ActionType) {
  switch(action.type){
    case SET_RECRUIT_TOP_AREA:
      return { ...state, AreParams: { ...action.data} }
    default:
      return state
  }
}