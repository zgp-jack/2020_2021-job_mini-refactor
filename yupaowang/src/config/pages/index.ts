import { HOME, RECRUIT, RESUME, MEMBER } from '../../constants/tabbar'

interface TabbarItem {
  navigationBarTitleText: string,
  enablePullDownRefresh: boolean
}

interface IndexTabbarConfig {
  [HOME]: TabbarItem,
  [RECRUIT]: TabbarItem,
  [RESUME]: TabbarItem,
  [MEMBER]: TabbarItem,
}

const IndexTabbarConfig: IndexTabbarConfig = {
  'home': {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  },
  [RECRUIT]: {
    navigationBarTitleText: '招工',
    enablePullDownRefresh: true
  },
  [RESUME]: {
    navigationBarTitleText: '找活',
    enablePullDownRefresh: true
  },
  [MEMBER]: {
    navigationBarTitleText: '会员',
    enablePullDownRefresh: true
  },
}

export default IndexTabbarConfig