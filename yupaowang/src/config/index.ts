// ? 全局不动配置项 只做导出不做修改
import {BAIDU_SERIES, WEIXIN_SERIES, ZIJIE_SERIES, QQ_SERIES} from './series'

// ! 根据不同编译脚本打包不同小程序
// * 当前打包版本
export const MINIVERSION: string = MINI
export const MINICONFIG = require(`./minis/${MINIVERSION}.ts`)

// * 全局请求接口域名
// * 测试站
export const DEVREQUESTURL: string = 'https://miniapi.zhaogong.vrtbbs.com/'
// * 预发布
export const PREREQUESTURL: string = 'http://miniapi.kkbbi.com/'
// * 正式站
export const PROREQUESTURL: string = 'https://newyupaomini.54xiaoshuo.com/'
// * 当前程序使用的请求地址
export const REQUESTURL: string = PROREQUESTURL
// * 默认上传图片
export const UPLOADIMGURL: string = `${PROREQUESTURL}index/upload/`
// * 阿里云CDN域名
export const ALIYUNCDN: string = 'http://cdn.yupao.com'
// * 阿里云小程序普通路径
export const ALIYUNCDNMINIIMG: string = '/miniprogram/images/'
// * 阿里云CDN图片域名
export const IMGCDNURL: string = ALIYUNCDN + ALIYUNCDNMINIIMG
// * 公司默认客服电话
export const SERVERPHONE: string = '400-838-1888'
// * 小程序当前版本号
export const VERSION: string = '1.0.5'
// * 高德地区key
export const MAPKEY: string = '20f12aae660c04de86f993d3eff590a0'
// * 最大缓存历史城市数量
export const MAXCACHECITYNUM: number = 3
// * 用户发布 选择地址 历史记录 最大数量
export const UserPublishAreaHistoryMaxNum: number = 10
// * 小程序tabbar msg统计 定时器请求间隔 60 秒
export const MemberMsgTimerInterval: number = 1000 * 60
// * 发布技能证书最大数量
export const CertificateMaxNum: number = 3
// * 发布技能证书图片最大数量
export const CertificateImgMaxNum: number = 3
// * 找活人员信息标签最大数量
export const ResumeMemberLabelsMaxNum: number = 3
// * 发布项目经验最大数量
export const ProjectListMaxNum: number = 5
// * 找活项目经验图片最大数量
export const ProjectImgMaxNum: number = 6
//商户申请 H5 支付时提交的授权域名
export const QQWECHATPAYURLREFERER: string = 'http://p.54xiaoshuo.com'
// ! 页面内常用路径配置
// * 首页
export const INDEXPATH: string = '/pages/index/index'
// * 发布招工页面
export const PUBLISHRECRUIT: string = '/pages/recruit/publish/index'
// * 发布找活页面
export const PUBLISHRESUME: string = '/pages/resume/publish/index'
// * 发布二手交易
export const PUBLISHUSED: string = '/pages/used/publish/index'
// * 实名认证页面
export const REALNAMEPATH: string = '/pages/realname/index'
// * 授权登录页面
export const AUTHPATH: string = '/pages/userauth/index'
// * 微信外验证码登录
export const CODEAUTHPATH: string = '/pages/login/index'
// * 已发布招工列表
export const PUBLISHEDRECRUIT: string = '/pages/published/recruit/index'
// * 下载APP
export const DOWNLOADAPPPATH: string = '/subpackage/pages/download/index'
// * 下载App链接
export const DownloadApp: string = 'https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile'
// * 邀请好友
export const INVITEPATH: string = '/pages/static/invite/index'

// ! 所有小程序公司体系集合
// 百度
export const BAIDUSERIES: string = BAIDU_SERIES
// 字节
export const ZIJIESERIES: string = ZIJIE_SERIES
// 微信
export const WEIXINSERIES: string = WEIXIN_SERIES
// QQ
export const QQSERIES: string = QQ_SERIES

// ! 以下内容为每个小程序独立配置
// * page-title-global
export const PAGETITLE: string = MINICONFIG.PAGETITLE
// * 小程序token
export const TOKEN: string = MINICONFIG.TOKEN
// * 小程序公司体系
export const SERIES: string = MINICONFIG.SERIES
// * 小程序广告unitid
export const UNITID: string = MINICONFIG.UNITID
// * 小程序激励视频广告
export const VIDEOAD: string = MINICONFIG.VIDEOAD
// * 小程序邀请key
export const INVITESOURCE: string = MINICONFIG.INVITESOURCE
// * 是否使用推送信息
export const USESUBSCRIBEMESSAGE: boolean = MINICONFIG.USESUBSCRIBEMESSAGE
// * 是否能分享
export const ISCANSHARE: boolean = MINICONFIG.ISCANSHARE
// * textarea能输入的最大字数
export const TEXTAREAMAXLENGTH: number = MINICONFIG.TEXTAREAMAXLENGTH
// * 应用内是否使用下载APP引流
export const DOWNLOADAPP: boolean = MINICONFIG.DOWNLOADAPP
// * 是否能够使用高德地区api
export const USEGAODEMAPAPI: boolean = MINICONFIG.USEGAODEMAPAPI
// * 上传图片 是否需要使用JSON解析数据
export const ISPARSEUPLOADIMG: boolean = MINICONFIG.ISPARSEUPLOADIMG
// * 是否显示客服电话
export const SHOWSERVERPHONE: boolean = MINICONFIG.SHOWSERVERPHONE
// * 是否显示列表公告信息
export const SHOWLISTSNOTICE: boolean = MINICONFIG.SHOWLISTSNOTICE
// * 是否显示加工友微信号
export const SHOWWEIXINNUMBER: boolean = MINICONFIG.SHOWWEIXINNUMBER
// * 是否显示关注公众号
export const SHOWOFFICIALACCOUNT: boolean = MINICONFIG.SHOWOFFICIALACCOUNT
// * 是否显示邀请好友
export const SHOWINVITEUSER: boolean = MINICONFIG.SHOWINVITEUSER
// * 是否替换微信类关键词
export const REPLACEWEIXINTEXT: boolean = MINICONFIG.REPLACEWEIXINTEXT

// 去除微信文本正则
export const FILTERWEIXINREG: RegExp = /[微信|vx|VX|Vx|vx|v❤]/g
