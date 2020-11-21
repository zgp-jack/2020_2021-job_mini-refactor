import { SETPUBLISHWAY, GETPUBLISHWAY } from './../constants/publishWay';
import { publishFindWork } from '../utils/helper/index.d'

export function setPublishWay(data: publishFindWork) {
  return {
    type: SETPUBLISHWAY,
    data: data
  }
}

export function getPublishWay() {
  return {
    type: GETPUBLISHWAY,
  }
}
