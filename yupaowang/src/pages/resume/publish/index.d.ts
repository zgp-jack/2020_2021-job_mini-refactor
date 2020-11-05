/*
 * @Author: zyb
 * @Date: 2020-11-05 09:58:38
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 10:08:52
 * @Description: 
 */
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr } from '../../../utils/request/index.d';
export interface useResumeType {
  info: resInfoObj,
  introducesData: resIntroduceObj,
  projectData: resProjectArr[],
  certificates: resCertificatesArr[],
  resume_uuid: string,
  isSet:boolean,
}