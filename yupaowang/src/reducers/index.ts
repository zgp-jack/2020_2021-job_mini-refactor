import { combineReducers } from 'redux'
import tabbar from './tabbar'
import WechatNotice from './wechat_notice'
import User from './user'
import msg from './msg'
import Personnel from './personnel'
import filterClassify from './filter_classify'
import Myresume from './resume'
import { MyAreaInfo, MyArea, PositionStatus } from './recruit' //发布招工reducer
import member from './member'
import realname from './realname'
import resumeAddInfo from './resume_addinfo'

//合并reducer
export default combineReducers({
  tabbar,
  WechatNotice,
  User,
  msg,
  Personnel,
  Myresume,
  filterClassify,
  MyAreaInfo,
  MyArea,
  member,
  realname,
  resumeAddInfo,
  PositionStatus
})
