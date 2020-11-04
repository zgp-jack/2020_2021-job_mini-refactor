/*
 * @Author: zyb
 * @Date: 2020-11-04 14:30:10
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 16:54:58
 * @Description: 
 */
import { resCertificatesArr } from '../utils/request/index.d'
import { SETCERTIFICATES, GETCERTIFICATES } from '../constants/certificates';

const CERTIFICATES_STATE: resCertificatesArr = {
  admin_last_edit_time: '',
  certificate_time: '',
  check: '',
  current_admin: '',
  fail_case: '',
  id: '',
  image: [],
  images: [],
  last_update_admin: '',
  name: '',
  resume_uuid: '',
  sort_flag: '',
  time: '',
  update_time: '',
  user_uuid: '',
  uuid: '',
}
interface ACTIONTYPE {
  type: string,
  data: resCertificatesArr[],
}
export default function certificates(state: resCertificatesArr = CERTIFICATES_STATE, action: ACTIONTYPE) {
  switch (action.type) {
    case GETCERTIFICATES:
      return state
    case SETCERTIFICATES:
      return { ...state, ...action.data }
    default:
      return state
  }
}