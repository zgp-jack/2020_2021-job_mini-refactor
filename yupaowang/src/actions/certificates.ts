/*
 * @Author: zyb
 * @Date: 2020-11-04 14:27:06
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:57:06
 * @Description: 
 */
import { SETCERTIFICATES, GETCERTIFICATES } from '../constants/certificates';
import { resCertificatesArr } from '../utils/request/index.d';

export function setCertificatesData(data: resCertificatesArr[]) {
  return {
    type: SETCERTIFICATES,
    data: data
  }
}
export function getCertificatesData(data: resCertificatesArr[]) {
  return {
    type: GETCERTIFICATES,
    data: data
  }
}