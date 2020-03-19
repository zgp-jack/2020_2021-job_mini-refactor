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