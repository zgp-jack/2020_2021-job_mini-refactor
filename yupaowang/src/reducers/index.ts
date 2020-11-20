/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-13 15:02:13
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
import resumeData from './resume_data';
import resumeList from './resume_list';
<<<<<<< HEAD
import publishData from './publish'
=======
import recruitTop from './recruit_top'
>>>>>>> be63084c2bce93282e0459e34ca999f0bca09a6c

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
  resumeData,
  resumeList,
<<<<<<< HEAD
  publishData,
  RecruitAction
=======
  recruitTop
>>>>>>> be63084c2bce93282e0459e34ca999f0bca09a6c
})
