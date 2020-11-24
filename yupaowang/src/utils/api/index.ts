import {REQUESTURL, PROREQUESTURL} from '../../config'

// 获取用户session_key
export const GetUserSessionKey: string = REQUESTURL + 'user/user-info/'
// session_key获取用户信息
export const GetUserInfo: string = REQUESTURL + 'user/make-user/'
// 获取首页banner以及公告
export const GetBannerNotice: string = REQUESTURL + 'index/index-banner-carousel/'
// 获取首页列表数据
export const GetAllListItem: string = REQUESTURL + 'index/new-index-msg/'
// 获取招工列表
export const GetRecruitlist: string = REQUESTURL + 'job/list-new/'
// 获取找活列表
export const GetResumelist: string = REQUESTURL + 'resumes/new-index/'
// 获取二手交易列表
export const GetFleamarketlist: string = REQUESTURL + 'index/info-list/'
// 获取微信号与公告列表
export const GetWechatNotice: string = REQUESTURL + 'index/less-search-data/'
// 获取列表页筛选条件
export const GetListFilterData: string = REQUESTURL + 'index/index-search-tree/'
// 获取tabbar未读消息
export const GetTabbarMsg: string = REQUESTURL + 'member/original-message/'
// 获取积分记录分页数据
export const GetIntegralList: string = REQUESTURL + 'integral/integral-record/'
// 初始化发布招工视图
export const GetPublisRecruitView: string = REQUESTURL + 'publish/new-job/'
// 发布修改招工信息
export const PublishRecruitInfo: string = REQUESTURL + 'publish/save-job/'
// 获取城市数据
export const GetAllAreas: string = REQUESTURL + 'index/index-area/'
// 检测adcode是否合法
export const CheckAdcodeValid: string = REQUESTURL + 'publish/checking-adcode/'
// 获取用户邀请链接
export const GetUserInviteLink: string = REQUESTURL + 'index/invite-friends/'
// 获取积分充值选项
export const GetRechargeList: string = REQUESTURL + 'integral/integral-price/'
// 用户充值获取openid
export const GetRechargeOpenid: string = REQUESTURL + 'get-openid/'
// 用户充值创建订单
export const GetRechargeOrder: string = REQUESTURL + 'create-order/'
// 用户获取二手交易信息视图
export const GetUsedInfoModel: string = REQUESTURL + 'publish/view-message/'
// 用户发布二手交易
export const PublishUsedInfo: string = REQUESTURL + 'publish/publish-msg/'
// 用户获取手机验证码
export const GetUserPhoneCode: string = REQUESTURL + 'index/get-code/'
// 用户登录获取验证码
export const GetUserLoginPhoneCode: string = REQUESTURL + 'baidu-auth/get-code/'
// 获取二手交易详情
export const GetUsedInfo: string = REQUESTURL + 'fleamarket/fleamarket-info/'
// 用户实名查询
export const CheckAuth: string = REQUESTURL + 'resume/query-worker/'
// 验证当前用户是否实名
export const CheckMineAuthInfo: string = REQUESTURL + 'resume/auth-status/'
// 初始化会员中心用户信息
export const getMemberInfo: string = REQUESTURL + 'user/personal/'
// 用户通知信息数量
export const getMemberMsgNumber: string = REQUESTURL + 'member/original-message/'
// 获取用户实名认证信息
export const getUserAuthInfo: string = REQUESTURL + 'user/auth-view/'
// 提交用户实名认证信息
export const postUserAuthInfo: string = REQUESTURL + 'user/do-auth/'
// 实名认证识别身份证接口
export const getIdcardAuthInfo: string = PROREQUESTURL + 'index/authid-card/'
// 用户完善资料
export const postUserAddInfo: string = REQUESTURL + 'user/bind-tel/'
// 用户修改头像
export const userChangeAvatar: string = REQUESTURL + 'user/update-header/'
// 用户修改名字
export const userUpdateName: string = REQUESTURL + 'user/update-username/'
// 用户更换手机
export const userChangePhone: string = REQUESTURL + 'user/update-tel/'
//修改电话号码
export const updataPassword: string = REQUESTURL + 'user/update-pwd/'
// 用户获取已发布招工列表
export const userGetPublishedRecruitList: string = REQUESTURL + 'job/issue-lists/'
// 用户改变招工状态
export const userChangeRecruitStatus: string = REQUESTURL + 'job/job-end-status/'
// 用户获取已发布二手列表
export const userGetPublishedUsedList: string = REQUESTURL + 'fleamarket/issues-v1/'
// 用户改变二手交易信息状态
export const userChangeUsedStatus: string = REQUESTURL + 'fleamarket/fleamarket-end-status/'
// 二手交易 刷新置顶
export const userUpdateUserInfo: string = REQUESTURL + 'fleamarket/update-time/'
// 收藏招工列表
export const getCollectionRecruitList: string = REQUESTURL + 'job/collect-list/'
// 收藏找活列表
export const getCollectionResumeList: string = REQUESTURL + 'resumes/collect-list/'
// 招工取消收藏
export const recruitCancelCollection: string = REQUESTURL + 'job/collect/'
// 招活取消收藏
export const ResumeCancelCollection: string = REQUESTURL + 'resumes/resume-collect/'
// 使用教程
export const requestActionUrl: string = REQUESTURL + 'index/course/'
// 意见反馈数据
export const feedbackUrl: string = REQUESTURL + 'leaving-message/list/'
// 意见反馈提交
export const feedbackSubmissionUrl: string = REQUESTURL + 'leaving-message/publish/'
// 帮助中心
export const helpUrl: string = REQUESTURL + 'others/help-feedback/'
// 新闻列表
export const newListUrl: string = REQUESTURL + 'news/list/'
// 新闻类型
export const newsTypesUrl: string = REQUESTURL + 'news/types/'
// 咨询详情
export const newsInfoUrl: string = REQUESTURL + 'news/info/'
// 排名规则
export const resumesSortUrl: string = REQUESTURL + 'resumes/sort/'
// 排名规则点击时发送的请求
export const resumesAddClickLog: string = REQUESTURL + 'resumes/add-click-log/'
// 我的信息
export const userMessagesUrl: string = REQUESTURL + 'member/user-messages/'
// 我的信息详情
export const messagesTypeUrl: string = REQUESTURL + 'member/message-of-type/'
//获取积分来源分类信息
export const integralSourceConfigUrl: string = REQUESTURL + 'integral/source-config/'
// 获取积分数量
export const integralSourceListsUrl: string = REQUESTURL + 'integral/source-lists/'
// 获取积分消耗分类信息
export const integralExpendConfigUrl: string = REQUESTURL + 'integral/expend-config/'
// 积分消耗积分数量
export const integralExpendListsUrl: string = REQUESTURL + 'integral/expend-lists/'
// 消耗积分弹窗内容
export const integralUseInfoUrl: string = REQUESTURL + 'integral/look-used-info/'
// 投诉
export const publishComplainUrl: string = REQUESTURL + 'publish/complain/'
// 招工详情
export const jobInfoUrl: string = REQUESTURL + 'job/job-info/'
// 招工详情，没有用户信息
export const jobNoUserInfoUrl: string = REQUESTURL + '/job/no-user-info/'
// 获取完整电话好码
export const jobGetTelUrl: string = REQUESTURL + 'job/get-tel/'
// 修改状态
export const jobEndStatusUrl: string = REQUESTURL + 'job/job-end-status/'
// 置顶信息
export const jobTopConfigUrl: string = REQUESTURL + 'job/top-config/'
// 置顶获取区域
export const jobTopHotAreasUrl: string = REQUESTURL + '/job/top-hot-areas-v1/'
// 招工置顶
export const jobDoTopUrl: string = REQUESTURL + 'job/do-top/'
// 修改置顶获取数据
export const jobGetTopAreasUrl: string = REQUESTURL + 'job/get-top-areas/'
// 更新招工置顶城市
export const jobChangeTopAreasUrl: string = REQUESTURL + 'job/change-top-areas/'
// 取消置顶
export const jobUpdateTopStatusUrl: string = REQUESTURL + 'job/update-top-status/'
// 找活名片内容
export const resumeDetailUrl: string = REQUESTURL + 'resumes/resume-detail/'
// 找活名片相关推荐
export const recommendListUrl: string = REQUESTURL + 'resumes/resume-recommend-list/'
// 找活名片查看完整电话
export const resumesGetTelUrl: string = REQUESTURL + 'resumes/get-tel/'
// 赞
export const resumeSupportUrl: string = REQUESTURL + 'resumes/resume-support/'
// 收藏
export const resumeCollectUrl: string = REQUESTURL + 'resumes/resume-collect/'
// 找活名片完善信息
export const resumeListUrl: string = REQUESTURL + 'resumes/resume-list/'
// 找活详情推荐
export const jobRecommendListUrl: string = REQUESTURL + '/job/job-recommend-list/'
// 删除技能证书
export const delCertificateUrl: string = REQUESTURL + 'resumes/del-certificate/'
// 新增技能证书
export const resumesCertificateUrl: string = REQUESTURL + 'resumes/certificate/'
// 新增项目
export const resumesProjectUrl: string = REQUESTURL + 'resumes/project/'
// 基础信息
export const addResumeUrl: string = REQUESTURL + 'resumes/add-resume/'
// 获取当前位置
export const checkAdcodeUrl: string = REQUESTURL + 'resumes/check-adcode/'
// 在找活名片获取子页面公用数据只请求一次
export const resumesGetDataUrl: string = REQUESTURL + 'resumes/get-data/'
//人员信息
export const resumesIntroduceUrl: string = REQUESTURL + 'resumes/introduce/'
// 找回名片修改状态
export const resumesEditEndUrl: string = REQUESTURL + 'resumes/edit-end/'
// 删除项目经验
export const resumesDelProjectUrl: string = REQUESTURL + 'resumes/del-project/'
// 找活置顶获取省
export const resumesTopAreasUrl: string = REQUESTURL + 'resumes/top-areas/'
// 找活置顶内容
export const resumesTopConfigUrl: string = REQUESTURL + 'resumes/top-config/'
// 置顶找活
export const resumesDoTopUrl: string = REQUESTURL + 'resumes/do-top/'
// 找活页面置顶修改
export const resumesChangeTopStatusUrl: string = REQUESTURL + 'resumes/change-top-status/'
// 修改找活名片里的头像
export const resumesEditImgUrl: string = REQUESTURL + 'resumes/edit-img/'
// 找活置顶配置接口v2
export const resumesTopConfigV2Url: string = REQUESTURL + '/resumes/top-config/'
// 找活置顶v2
export const resumesDoTopV2Url: string = REQUESTURL + '/resumes/do-top-v2/';
// 修改找活置顶
export const resumesUpdateTopResumeUrl: string = REQUESTURL + '/resumes/update-top-resume/'
// 找活投诉
export const resumesComplainUrl: string = REQUESTURL + 'resumes/complain/'
// 消息推送
export const leavingMessageUrl: string = REQUESTURL + 'leaving-message/add-subscribe-msg/'
// 用户账号登录
export const userAccountUrl: string = REQUESTURL + 'baidu-auth/login/'
// 用户验证码登录
export const userTelCodeLogin: string = REQUESTURL + 'baidu-auth/code-login/'
// 抖音用户充值
export const userDouyinRecharge: string = REQUESTURL + 'pay/bytedance-order/'
// 都要用户充值订单检测
export const userCheckDouyinRecharge: string = REQUESTURL + '/pay/byte-check/'
// 实名查询
export const realnameQueryUrl: string = REQUESTURL + 'resume/auth-worker-find/'
// 找活信息发布基本资料 配置项
export const getResumeAddInfoConfig: string = REQUESTURL + 'resumes/get-data/'
//排名规则
export const getRankRulesList: string = REQUESTURL + 'resumes/sort/'
// 大转盘获取抽奖次数
export const turntableIndex: string = REQUESTURL + 'turntable/index/'
// 大转盘 获取抽奖结果
export const turntableDraw: string = REQUESTURL + 'turntable/draw/'
// 大转盘看视频结束后的回调
export const turntableVideoEnd: string = REQUESTURL + 'turntable/video-end/'
// 获取鱼泡币页面大转盘展示控制
export const memberTurntable: string = REQUESTURL + 'member/turntable/'
// 获取百度tpOrderId
export const getBaiduTpOrderId: string = REQUESTURL + 'pay/baidu-order/'
