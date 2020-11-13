import { SETPUBLISHDATA, GETPUBLISHDATA } from '../constants/publish'
import { PublishConfigData } from '../pages/recruit/index.d'

export function setPublishData(data:PublishConfigData) {
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
