import { REQUESTURL } from '../../config'

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