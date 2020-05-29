import { combineReducers } from 'redux'
import tabbar from './tabbar'
import WechatNotice from './wechat_notice'
import User from './user'
import msg from './msg'
import project from './project'

export default combineReducers({
  tabbar,
  WechatNotice,
  User,
  msg,
  project,
})
