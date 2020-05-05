import { REQUESTURL } from '../../config'

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
export const GetResumelist: string = REQUESTURL + 'resumes/index/'
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
// 用户发布二手交易信息
export const GetUsedInfoModel: string = REQUESTURL + 'publish/view-message/'
// 用户发布二手交易
export const PublishUsedInfo: string = REQUESTURL + 'publish/publish-msg/'
// 用户获取手机验证码
export const GetUserPhoneCode: string = REQUESTURL + 'index/get-code/'
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
export const getIdcardAuthInfo: string = REQUESTURL + 'index/authid-card/'
// 用户完善资料
export const postUserAddInfo: string = REQUESTURL + 'user/bind-tel/'
// 用户修改头像
export const userChangeAvatar: string = REQUESTURL + 'user/update-header/'
// 用户修改名字
export const userUpdateName: string = REQUESTURL + 'user/update-username/'
// 用户更换手机
export const userChangePhone: string = REQUESTURL + 'user/update-tel/'
// 收藏招工列表
export const getCollectionRecruitList: string = REQUESTURL +'job/collect-list/'
// 收藏找活列表
export const getCollectionResumeList: string = REQUESTURL +'resumes/collect-list/'
// 招工取消收藏
export const recruitCancelCollection: string = REQUESTURL +'job/collect/'
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