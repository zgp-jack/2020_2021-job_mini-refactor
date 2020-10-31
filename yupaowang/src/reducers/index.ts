import { combineReducers } from 'redux'
import tabbar from './tabbar'
import WechatNotice from './wechat_notice'
import User from './user'
import msg from './msg'
import Personnel from './personnel'
import filterClassify from './filter_classify'
import Myresume from './resume'
<<<<<<< HEAD
import { MyAreaInfo, MyArea } from './recruit' //发布招工reducer
=======
import member from './member'
import realname from './realname'
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

//合并reducer
export default combineReducers({
  tabbar,
  WechatNotice,
  User,
  msg,
  Personnel,
  Myresume,
  filterClassify,
<<<<<<< HEAD
  MyAreaInfo,
  MyArea
=======
  member,
  realname
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
})
