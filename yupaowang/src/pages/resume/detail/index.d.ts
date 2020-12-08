import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation, recommendListDataList } from '../../../utils/request/index.d'
export interface DataType {
  certificates: resumeDetailCertificates[],
  info: resumeDetailInfo,
  project: resumeDetailProject[],
  operation: resumeDetailOperation,
}
export interface resumeDetailInfo {
  introduce: string,
  headerimg: string,
  nation: string,
  username: string,
  tel: string,
  hometown: string,
  occupations: [],
  experience: string,
  prof_degree_str: string,
  type_str: string,
  number_people: string,
  address: string,
  authentication: string,
  is_read: number,
  is_end: string,
  certificate_show: number,
  uuid: string,
  user_uuid: string,
  gender: string,
  distance: string,
  location: string,
  show_complain: ShowComplain,
  tags: resumeDetailInfoTages[],
}
export interface ShowComplain {
  show_complain: number | undefined,
  tips_message: string,
}
export interface resumeDetailInfoTages {
  id: number,
  label_name: string,
}
export interface ListType {
  item: recommendListDataList[],
}
export interface Injected {
  project: resumeDetailProject[],
  certificates: resumeDetailCertificates[],
}