import { RECRUIT, RESUME, MEMBER } from '../../constants/tabbar';
const IndexTabbarConfig = {
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
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#2179f6'
  }
};
export default IndexTabbarConfig;