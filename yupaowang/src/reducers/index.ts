/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-20 17:01:57
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
import { MyAreaInfo, MyArea, PositionStatus, RecruitAction } from './recruit' //发布招工reducer
import member from './member'
import realname from './realname'
import resumeAddInfo from './resume_addinfo'
import publishData from './publish'
import resumeData from './resume_data';
import resumeList from './resume_list';
import recruitTop from './recruit_top'
import publishWay from './publishWay'
import resumeTop from './resume_top';

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
  publishData,
  RecruitAction,
  resumeData,
  resumeList,
  recruitTop,
  publishWay,
  resumeTop
})
