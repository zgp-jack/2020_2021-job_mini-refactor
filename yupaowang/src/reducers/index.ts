/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 19:42:42
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
import resProjectData from './resProject';
import introduces from './introduces';
import certificates from './certificates';
import resInfo from './resInfo';
import uuid from './uuid';

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
  PositionStatus,
  resProjectData,
  introduces,
  certificates,
  resInfo,
  uuid,
})
