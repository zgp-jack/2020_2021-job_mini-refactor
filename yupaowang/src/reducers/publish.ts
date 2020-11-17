import { SETPUBLISHDATA, GETPUBLISHDATA } from '../constants/publish' //定义发布招工获取设置区域信息的action
import { PublishConfigData } from '../pages/recruit/index.d'

// 默认发布招工state数据
const DEFAULT_STATE_PUBLISHDATA: PublishConfigData = {
  classifyTree: [],
  mateData: [],
  noMateData: [],
  user_mobile: '',
  maxClassifyCount: 0,
  maxImageCount: 0,
  placeholder:''
}


// action类型定义
export interface ACTIONTYPE {
  type: string,
  data: PublishConfigData
}

export default function MyAreaInfo(state: PublishConfigData = DEFAULT_STATE_PUBLISHDATA, action: ACTIONTYPE) {
  switch (action.type) {
    case GETPUBLISHDATA:
      return state;
    case SETPUBLISHDATA:
      state = action.data
      return state;
    default:
      return state
  }
}
