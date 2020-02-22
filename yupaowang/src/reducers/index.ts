import { combineReducers } from 'redux'
import tabbar from './tabbar'
import WechatNotice from './wechat_notice'

export default combineReducers({
  tabbar,
  WechatNotice
})