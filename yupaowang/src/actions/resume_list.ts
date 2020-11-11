import { SETSUBPACKCERTIFICATE,SETSUBPACKPROJECT} from '../constants/resume_list';
import { resProjectArr, resCertificatesArr } from '../utils/request/index.d';
export function setSubpackcertificate(data: resCertificatesArr[]){
  return {
    type:SETSUBPACKCERTIFICATE,
    data:data,
  }
}

export function setSubpackProject(data: resProjectArr[]){
  return {
    type:SETSUBPACKPROJECT,
    data: data,
  }
}