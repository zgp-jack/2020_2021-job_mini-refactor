import { IMGCDNURL } from '../../config'

export interface TabConfig {
  id: number,
  text: string,
  icon: string,
  activeIcon: string,
  title: string
}

const tab: TabConfig[] = [
  {
    id: 1, 
    text: '招工信息', 
    icon: `${IMGCDNURL}new-collect-info-active.png`, 
    activeIcon: `${IMGCDNURL}new-collect-info.png`,
    title: '我收藏的招工信息'
  },
  {
    id: 2, 
    text: '找活信息', 
    icon: `${IMGCDNURL}new-collect-resume.png`, 
    activeIcon: `${IMGCDNURL}new-collect-resume-active.png`,
    title: '我收藏的找活信息'
  },
]

export default tab