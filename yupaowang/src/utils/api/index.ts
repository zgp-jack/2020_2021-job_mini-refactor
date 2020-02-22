import { REQUESTURL } from '../../config'

// 获取招工列表
export const GetRecruitlist: string = REQUESTURL + 'job/list-new/'
// 获取找活列表
export const GetResumelist: string = REQUESTURL + 'resumes/index/'
// 获取微信号与公告列表
export const GetWechatNotice: string = REQUESTURL + 'index/less-search-data/'
// 获取列表页筛选条件
export const GetListFilterData: string = REQUESTURL + 'index/index-search-tree/'
// 获取tabbar未读消息
export const GetTabbarMsg: string = REQUESTURL + 'member/original-message/'