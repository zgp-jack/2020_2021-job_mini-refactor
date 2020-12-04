import { ZIJIESERIES } from '../index'

// * 每个小程序单独配置  工地急招
var miniConfig = {
  // * page-title-global
  PAGETITLE: '鱼泡网-',
  // ! 小程序token 
  TOKEN: 'douyin',
  // ! 小程序公司体系
  SERIES: ZIJIESERIES,
  // * 小程序是否能被分享
  ISCANSHARE: true,
  // * 小程序广告unitid
  UNITID: '',
  // * 激励视频
  VIDEOAD: '',
  // * 邀请key
  INVITESOURCE: '',
  // * 是否使用推送信息
  USESUBSCRIBEMESSAGE: false,
  // * textarea能输入的最大字数
  TEXTAREAMAXLENGTH: 140,
  // * 应用内是否存在下载APP引流
  DOWNLOADAPP: false,
  // * 是否支持高德地图api
  USEGAODEMAPAPI: true,
  // * 是否显示客服电话
  SHOWSERVERPHONE: false,
  // * 是否显示加工友微信号
  SHOWWEIXINNUMBER: false,
  // * 是否显示列表公告信息
  SHOWLISTSNOTICE: false,
  // * 是否显示关注公众号
  SHOWOFFICIALACCOUNT: false,
  // * 是否显示邀请好友链接
  SHOWINVITEUSER: false,
  // * 详情是否需要替换微信关键词
  REPLACEWEIXINTEXT: false,
  // ! 百度系小程序  上传图片 不能JSON解析数据
  ISPARSEUPLOADIMG: true
}


module.exports = miniConfig