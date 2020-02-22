import { ActionType } from '../reducers/wechat_notice'

export default function changeWechatNotice(action: ActionType){
  return {
    type: action.type,
    data: action.data
  }
}