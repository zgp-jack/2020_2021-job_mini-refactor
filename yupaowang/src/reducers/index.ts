import { combineReducers } from 'redux'
import tabbar from './tabbar'
import WechatNotice from './wechat_notice'
import User from './user'

export default combineReducers({
  tabbar,
  WechatNotice,
  User
})