import { SERVERPHONE } from '../config'
import SUCCESS from '../constants/wechat_notice'

interface NoticeItem {
  id: string,
  title: string
}

interface Wechat {
  number: string,
  outTime: number
}

export interface WechatNoticeType {
  notice: NoticeItem[],
  phone: string,
  wechat: Wechat,
  success: boolean
}

const DEFAULT_STATE: WechatNoticeType = {
  notice: [],
  phone: SERVERPHONE,
  wechat: {
    number: '',
    outTime: 600
  },
  success: false
}

export interface ActionType {
  type: string,
  data: WechatNoticeType
}

export default function WechatNotice(state: WechatNoticeType = DEFAULT_STATE, action: ActionType){
  switch(action.type){
    case SUCCESS:
      return {...state,...action.data}
    default:
      return state
  }
}