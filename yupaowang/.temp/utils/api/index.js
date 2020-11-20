import { REQUESTURL, PROREQUESTURL } from "../../config/index";
// 获取用户session_key
export const GetUserSessionKey = REQUESTURL + 'user/user-info/';
// session_key获取用户信息
export const GetUserInfo = REQUESTURL + 'user/make-user/';
// 获取首页banner以及公告
export const GetBannerNotice = REQUESTURL + 'index/index-banner-carousel/';
// 获取首页列表数据
export const GetAllListItem = REQUESTURL + 'index/new-index-msg/';
// 获取招工列表
export const GetRecruitlist = REQUESTURL + 'job/list-new/';
// 获取找活列表
export const GetResumelist = REQUESTURL + 'resumes/new-index/';
// 获取二手交易列表
export const GetFleamarketlist = REQUESTURL + 'index/info-list/';
// 获取微信号与公告列表
export const GetWechatNotice = REQUESTURL + 'index/less-search-data/';
// 获取列表页筛选条件
export const GetListFilterData = REQUESTURL + 'index/index-search-tree/';
// 获取tabbar未读消息
export const GetTabbarMsg = REQUESTURL + 'member/original-message/';
// 获取积分记录分页数据
export const GetIntegralList = REQUESTURL + 'integral/integral-record/';
// 初始化发布招工视图
export const GetPublisRecruitView = REQUESTURL + 'publish/new-job/';
// 发布修改招工信息
export const PublishRecruitInfo = REQUESTURL + 'publish/save-job/';
// 获取城市数据
export const GetAllAreas = REQUESTURL + 'index/index-area/';
// 检测adcode是否合法
export const CheckAdcodeValid = REQUESTURL + 'publish/checking-adcode/';
// 获取用户邀请链接
export const GetUserInviteLink = REQUESTURL + 'index/invite-friends/';
// 获取积分充值选项
export const GetRechargeList = REQUESTURL + 'integral/integral-price/';
// 用户充值获取openid
export const GetRechargeOpenid = REQUESTURL + 'get-openid/';
// 用户充值创建订单
export const GetRechargeOrder = REQUESTURL + 'create-order/';
// 用户获取二手交易信息视图
export const GetUsedInfoModel = REQUESTURL + 'publish/view-message/';
// 用户发布二手交易
export const PublishUsedInfo = REQUESTURL + 'publish/publish-msg/';
// 用户获取手机验证码
export const GetUserPhoneCode = REQUESTURL + 'index/get-code/';
// 用户登录获取验证码
export const GetUserLoginPhoneCode = REQUESTURL + 'baidu-auth/get-code/';
// 获取二手交易详情
export const GetUsedInfo = REQUESTURL + 'fleamarket/fleamarket-info/';
// 用户实名查询
export const CheckAuth = REQUESTURL + 'resume/query-worker/';
// 验证当前用户是否实名
export const CheckMineAuthInfo = REQUESTURL + 'resume/auth-status/';
// 初始化会员中心用户信息
export const getMemberInfo = REQUESTURL + 'user/personal/';
// 用户通知信息数量
export const getMemberMsgNumber = REQUESTURL + 'member/original-message/';
// 获取用户实名认证信息
export const getUserAuthInfo = REQUESTURL + 'user/auth-view/';
// 提交用户实名认证信息
export const postUserAuthInfo = REQUESTURL + 'user/do-auth/';
// 实名认证识别身份证接口
export const getIdcardAuthInfo = PROREQUESTURL + 'index/authid-card/';
// 用户完善资料
export const postUserAddInfo = REQUESTURL + 'user/bind-tel/';
// 用户修改头像
export const userChangeAvatar = REQUESTURL + 'user/update-header/';
// 用户修改名字
export const userUpdateName = REQUESTURL + 'user/update-username/';
// 用户更换手机
export const userChangePhone = REQUESTURL + 'user/update-tel/';
//修改电话号码
export const updataPassword = REQUESTURL + 'user/update-pwd/';
// 用户获取已发布招工列表
export const userGetPublishedRecruitList = REQUESTURL + 'job/issue-lists/';
// 用户改变招工状态
export const userChangeRecruitStatus = REQUESTURL + 'job/job-end-status/';
// 用户获取已发布二手列表
export const userGetPublishedUsedList = REQUESTURL + 'fleamarket/issues-v1/';
// 用户改变二手交易信息状态
export const userChangeUsedStatus = REQUESTURL + 'fleamarket/fleamarket-end-status/';
// 二手交易 刷新置顶
export const userUpdateUserInfo = REQUESTURL + 'fleamarket/update-time/';
// 收藏招工列表
export const getCollectionRecruitList = REQUESTURL + 'job/collect-list/';
// 收藏找活列表
export const getCollectionResumeList = REQUESTURL + 'resumes/collect-list/';
// 招工取消收藏
export const recruitCancelCollection = REQUESTURL + 'job/collect/';
// 招活取消收藏
export const ResumeCancelCollection = REQUESTURL + 'resumes/resume-collect/';
// 使用教程
export const requestActionUrl = REQUESTURL + 'index/course/';
// 意见反馈数据
export const feedbackUrl = REQUESTURL + 'leaving-message/list/';
// 意见反馈提交
export const feedbackSubmissionUrl = REQUESTURL + 'leaving-message/publish/';
// 帮助中心
export const helpUrl = REQUESTURL + 'others/help-feedback/';
// 新闻列表
export const newListUrl = REQUESTURL + 'news/list/';
// 新闻类型
export const newsTypesUrl = REQUESTURL + 'news/types/';
// 咨询详情
export const newsInfoUrl = REQUESTURL + 'news/info/';
// 排名规则
export const resumesSortUrl = REQUESTURL + 'resumes/sort/';
// 排名规则点击时发送的请求
export const resumesAddClickLog = REQUESTURL + 'resumes/add-click-log/';
// 我的信息
export const userMessagesUrl = REQUESTURL + 'member/user-messages/';
// 我的信息详情
export const messagesTypeUrl = REQUESTURL + 'member/message-of-type/';
//获取积分来源分类信息
export const integralSourceConfigUrl = REQUESTURL + 'integral/source-config/';
// 获取积分数量
export const integralSourceListsUrl = REQUESTURL + 'integral/source-lists/';
// 获取积分消耗分类信息
export const integralExpendConfigUrl = REQUESTURL + 'integral/expend-config/';
// 积分消耗积分数量
export const integralExpendListsUrl = REQUESTURL + 'integral/expend-lists/';
// 消耗积分弹窗内容
export const integralUseInfoUrl = REQUESTURL + 'integral/look-used-info/';
// 投诉
export const publishComplainUrl = REQUESTURL + 'publish/complain/';
// 招工详情
export const jobInfoUrl = REQUESTURL + 'job/job-info/';
// 招工详情，没有用户信息
export const jobNoUserInfoUrl = REQUESTURL + '/job/no-user-info/';
// 获取完整电话好码
export const jobGetTelUrl = REQUESTURL + 'job/get-tel/';
// 修改状态
export const jobEndStatusUrl = REQUESTURL + 'job/job-end-status/';
// 置顶信息
export const jobTopConfigUrl = REQUESTURL + 'job/top-config/';
// 置顶获取区域
export const jobTopHotAreasUrl = REQUESTURL + '/job/top-hot-areas-v1/';
// 招工置顶
export const jobDoTopUrl = REQUESTURL + 'job/do-top/';
// 修改置顶获取数据
export const jobGetTopAreasUrl = REQUESTURL + 'job/get-top-areas/';
// 更新招工置顶城市
export const jobChangeTopAreasUrl = REQUESTURL + 'job/change-top-areas/';
// 取消置顶
export const jobUpdateTopStatusUrl = REQUESTURL + 'job/update-top-status/';
// 找活名片内容
export const resumeDetailUrl = REQUESTURL + 'resumes/resume-detail/';
// 找活名片相关推荐
export const recommendListUrl = REQUESTURL + 'resumes/resume-recommend-list/';
// 找活名片查看完整电话
export const resumesGetTelUrl = REQUESTURL + 'resumes/get-tel/';
// 赞
export const resumeSupportUrl = REQUESTURL + 'resumes/resume-support/';
// 收藏
export const resumeCollectUrl = REQUESTURL + 'resumes/resume-collect/';
// 找活名片完善信息
export const resumeListUrl = REQUESTURL + 'resumes/resume-list/';
// 找活详情推荐
export const jobRecommendListUrl = REQUESTURL + '/job/job-recommend-list/';
// 删除技能证书
export const delCertificateUrl = REQUESTURL + 'resumes/del-certificate/';
// 新增技能证书
export const resumesCertificateUrl = REQUESTURL + 'resumes/certificate/';
// 新增项目
export const resumesProjectUrl = REQUESTURL + 'resumes/project/';
// 基础信息
export const addResumeUrl = REQUESTURL + 'resumes/add-resume/';
// 获取当前位置
export const checkAdcodeUrl = REQUESTURL + 'resumes/check-adcode/';
// 在找活名片获取子页面公用数据只请求一次
export const resumesGetDataUrl = REQUESTURL + 'resumes/get-data/';
//人员信息
export const resumesIntroduceUrl = REQUESTURL + 'resumes/introduce/';
// 找回名片修改状态
export const resumesEditEndUrl = REQUESTURL + 'resumes/edit-end/';
// 删除项目经验
export const resumesDelProjectUrl = REQUESTURL + 'resumes/del-project/';
// 找活置顶获取省
export const resumesTopAreasUrl = REQUESTURL + 'resumes/top-areas/';
// 找活置顶内容
export const resumesTopConfigUrl = REQUESTURL + 'resumes/top-config/';
// 置顶找活
export const resumesDoTopUrl = REQUESTURL + 'resumes/do-top/';
// 找活页面置顶修改
export const resumesChangeTopStatusUrl = REQUESTURL + 'resumes/change-top-status/';
// 修改找活名片里的头像
export const resumesEditImgUrl = REQUESTURL + 'resumes/edit-img/';
// 找活置顶配置接口v2
export const resumesTopConfigV2Url = REQUESTURL + '/resumes/top-config/';
// 找活置顶v2
export const resumesDoTopV2Url = REQUESTURL + '/resumes/do-top-v2/';
// 修改找活置顶
export const resumesUpdateTopResumeUrl = REQUESTURL + '/resumes/update-top-resume/';
// 找活投诉
export const resumesComplainUrl = REQUESTURL + 'resumes/complain/';
// 消息推送
export const leavingMessageUrl = REQUESTURL + 'leaving-message/add-subscribe-msg/';
// 用户账号登录
export const userAccountUrl = REQUESTURL + 'baidu-auth/login/';
// 用户验证码登录
export const userTelCodeLogin = REQUESTURL + 'baidu-auth/code-login/';
// 抖音用户充值
export const userDouyinRecharge = REQUESTURL + 'pay/bytedance-order/';
// 都要用户充值订单检测
export const userCheckDouyinRecharge = REQUESTURL + '/pay/byte-check/';
// 实名查询
export const realnameQueryUrl = REQUESTURL + 'resume/auth-worker-find/';
// 找活信息发布基本资料 配置项
export const getResumeAddInfoConfig = REQUESTURL + 'resumes/get-data/';
//排名规则
export const getRankRulesList = REQUESTURL + 'resumes/sort/';
// 大转盘获取抽奖次数
export const turntableIndex = REQUESTURL + 'turntable/index/';
// 大转盘 获取抽奖结果
export const turntableDraw = REQUESTURL + 'turntable/draw/';
// 大转盘看视频结束后的回调
export const turntableVideoEnd = REQUESTURL + 'turntable/video-end/';
// 获取鱼泡币页面大转盘展示控制
export const memberTurntable = REQUESTURL + 'member/turntable/';