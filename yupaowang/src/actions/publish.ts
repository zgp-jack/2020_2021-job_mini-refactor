import { GETPUBLISHDATA, SETPUBLISHDATA} from '../constants/publish'
import { publishConfigData } from '../pages/recruit/index.d'

export function setPublishData(data: publishConfigData) {
  return {
    type: SETPUBLISHDATA,
    data: data
  }
}

export function getPublishData() {
  return {
    type: GETPUBLISHDATA,
  }
}

