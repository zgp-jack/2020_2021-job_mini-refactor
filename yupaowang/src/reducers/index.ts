/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 20:44:09
 * @Description: 
 */
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
import resumeData from './resume_data';

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
<<<<<<< HEAD
  PositionStatus
=======
  PositionStatus,
  resumeData
>>>>>>> 13c03d01952af98e14b9d9fac077c9afed1a5ccd
})
