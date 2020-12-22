import { HOME, RECRUIT, RESUME, MEMBER } from '../../constants/tabbar'
import { PAGETITLE } from '../../config'

interface TabbarItem {
  navigationBarTitleText: string,
  enablePullDownRefresh: boolean,
  navigationBarBackgroundColor?: string
}

interface IndexTabbarConfig {
  [key: string]: TabbarItem
  // [HOME]: TabbarItem,
  // [RECRUIT]: TabbarItem,
  // [RESUME]: TabbarItem,
  // [MEMBER ]: TabbarItem,
}

const IndexTabbarConfig: IndexTabbarConfig = {
  [HOME]: {
    navigationBarTitleText: `${PAGETITLE}建筑招聘|建筑人才|工地招工|施工队找活|工程信息`,
    enablePullDownRefresh: true
  },
  [RECRUIT]: {
    navigationBarTitleText: '建筑招工平台|建筑工程承包|工地招聘建筑施工队|招聘建筑工人|招聘建筑工程队信息-鱼泡网',
    enablePullDownRefresh: true
  },
  [RESUME]: {
    navigationBarTitleText: '建筑人才|建筑工人|工程队伍|建筑普工|施工队伍|建筑班组|建筑队|工人找活|工人简历库-鱼泡网',
    enablePullDownRefresh: true
  },
  [MEMBER]: {
    navigationBarTitleText: '会员中心-鱼泡网',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor:'#2179f6'
  },
}

export default IndexTabbarConfig