export interface Result {
  errcode: string,
  errmsg: string
}

export interface ResultData<T> extends Result {
  data: T
}

interface RecruitState {
  label: string,
  state: string
}

// sessionkey
export interface SessionKey {
  openid: string,
  session_key: string,
  unionid: string
}

// 获取用户信息
export interface InitUserInfo {
  errcode: string,
  errmsg: string,
  data: InitUserInfoData
}

export interface InitUserInfoData {
  id: number,
  headimgurl: string,
  nickname: string,
  username: string,
  uuid: string,
  sign: InitUserInfoSign
}

interface InitUserInfoSign {
  token: string,
  time: number
}

// 首页banner notice
export interface BannerNotice {
  address: BannerNoticeAddress,
  banner: BannerNoticeBanner[],
  notice: BannerNoticeNotice[]
}

interface BannerNoticeAddress {
  id: string,
  letter: string,
  name: string,
  pid: string
}

export interface BannerNoticeBanner {
  banner: string,
  small_url: string
}

export interface BannerNoticeNotice {
  id: string,
  title: string
}

// 首页列表数据
export interface HomeLists {
  fleamarket: FleamarketItem,
  job: RecruitItem,
  resume: ResumeItem
}

export interface FleamarketItem {
  lists: FleamarketList[],
  title: string
}

export interface RecruitItem {
  lists: RecruitListItem[],
  title: string
}

export interface ResumeItem {
  lists: ResumeList[],
  title: string
}

// 招工列表数据 
export interface RecruitList extends Result{
  data: RecruitListItem[]
}

// 招工列表单项数据
export interface RecruitListItem{
  id: number,
  detail: string,
  image: string,
  is_check: string,
  is_end: number,
  location: string,
  occupations: string[],
  show_address: string,
  state_arr: RecruitState,
  time: string,
  title: string,
  top: number,
  user_id: number,
  user_name: string,
  user_uuid: number,
  uuid: string
}

// 找活列表数据
export interface ResumeList {
  id: number,
  username: string,
  uuid: string,
  user_uuid: string,
  type: string,
  occupations: string[],
  nation: string,
  location: string,
  is_end: number,
  introduce: string,
  headerimg: string,
  gender: '1'|'2',
  experience: string,
  distance: string,
  birthday: number,
  show_address: string,
  tags: string[],
  prof_degree: string,
  time: string
}

// 二手列表数据
export interface FleamarketList {
  city_id: string,
  id: string,
  image: string,
  is_check: string,
  is_end: string,
  province_id: string,
  show_address: string,
  time: string,
  title: string,
  user_name: string,
  state_arr: FleamarketStateArr
}

interface FleamarketStateArr {
  is_today: number,
  label: string,
  state: string,
  today_text: string
}

export interface ResumeResult {
  errcode: string,
  data: {
    total: number,
    list: ResumeList[],
    has_sort_flag?: string,
    has_time?: string,
    has_top?: string,
    last_sort_flag_pos?: string,
    last_normal_pos?: string,
    last_time_pos?: string
  }
}

// 积分记录数据
export interface IntegralList<T> {
  list: T[],
  pageSize: number
}

// 消耗积分记录
export interface IntegralExpendItem {
  His: string,
  day: string,
  expend_integral_string: string,
  headerText: string,
  id: string,
  source: string,
  target_id: string,
  title: string,
  year_month: string
}

// 积分来源记录
export interface IntegralSourceItem {
  His: string,
  day: string,
  ext: string,
  id: string,
  integral: string,
  source_integral_string: string,
  source_title: string,
  year_month: string
}

// 获取全部城市数据
export interface AllAreasDataItem {
  id: string,
  pid: string,
  city: string,
  ad_name: string,
}

export interface AllAreasInputDataItem extends AllAreasDataItem {
  city_name: string
}

// 检测adcode是否合法
export interface CheckAdcodeValid {
  errcode: string,
  errmsg: string
}

// 获取用户邀请链接
export interface GetUserInviteLink {
  errcode: string,
  errmsg: string,
  link: string
}

// 获取积分充值选项
export interface GetRechargeList {
  errcode: string,
  errmsg: string,
  list: GetRechargeListType[],
  user: GetRechargeListUser
}

export interface GetRechargeListType {
  id: string,
  default: string,
  integral: number,
  present_integral: string,
  price: number
}

export interface GetRechargeListUser {
  id: string,
  integral: string,
  tel: string
}

export interface GetCreateOrderData {
  errcode: string,
  errmsg: string,
  payData: GetCreateOrderPayData
}

export interface GetCreateOrderPayData {
  appId: string,
  nonceStr: string,
  package: string,
  paySign: string,
  signType: 'MD5' | 'HMAC-SHA256',
  timeStamp: string
}

// 发布二手交易信息
export interface PublishUsedInfoRusult {
  errcode: string,
  errmsg: string,
  id: number
}

// 用户获取手机验证码
export interface GetUserPhoneCode {
  errcode: string,
  errmsg: string,
  refresh: number
}

//二手交易详情
export interface GetUsedInfo {
  errcode: string,
  errmsg: string,
  data: GetUsedInfoData
}

export interface GetUsedInfoData {
  id: string,
  detail: string,
  is_check: string,
  is_end: string,
  is_end_word: string,
  showAddress: string,
  time: string,
  title: string,
  user_mobile: string,
  user_name: string,
  showCateAttr?: string
}

// 用户实名查询
export interface CheckUserAuth {
  errcode: string,
  errmsg: string,
  member: CheckUserAuthMember
}

export interface CheckUserAuthMember {
  age: number
  check_degree: string
  finally_login_address: string
  finally_login_ip: string
  id: string
  is_check: string
  nationality: string
  occupations: string[]
  register_address: string
  register_ip: string
  status: string
  tel: string
  username: string
}

// 用户会员中心数据接口
export interface MemberInfo extends Result{
  is_checking: number,
  member: MemberInfoMember
}

export interface MemberInfoMember {
  id: string,
  check_degree: string,
  check_state: string,
  expend_integral: string,
  has_resume: number,
  headimgurl: string,
  integral: string,
  is_check: string,
  nickname: string,
  pwd_status: string,
  return_integral: string,
  tel: string,
  temporary_integral: string,
  to_auth: boolean,
  username: string
  has_notice_msg: MemberInfoNoticeMsg,
  resume_status: MemberInfoResumeStatus
}

export interface MemberInfoNoticeMsg {
  hasNoticeMsgg: number
}

export interface MemberInfoResumeStatus {
  check_status: number,
  has_resume: number,
  resume_id: number,
  resume_tips_string: string
}

// 用户未读信息数量
export interface MemberMsgNumber {
  jobNumber: number,
  messageNumber: number
}

// 获取用户实名认证信息
export interface UserAuthInfo extends Result{
  authData: UserAuthInfoData
}

export interface UserAuthInfoData {
  member?: UserAuthInfoMemberData,
  memberExt: UserAuthInfoMemberExtData,
  nation: UserAuthInfoNationData[],
  show_resume: number
}

export interface UserAuthInfoMemberData {
  check_degree: string,
  id: string,
  is_check: string,
  status: string,
  tel: string,
  username: string
}

export interface UserAuthInfoMemberExtData {
  adcode: string,
  address: string,
  age: string,
  birthday: string,
  hand_img: string,
  hand_img_path: string,
  hometown: string,
  id: string,
  id_card: string,
  id_card_img: string,
  id_card_img_path: string,
  idcard_check_failure_reason: string,
  nation_id: string|number,
  notionality: string,
  note: string,
  note_status: string,
  sex: string,
  source: string,
  user_id: string,
  user_name: string,
  nationId?:string,
  nationality?:string
}

export interface UserAuthInfoNationData {
  mz_id: string,
  mz_name: string
}

// 用户已发布列表招工信息
export interface UserPublishedRecruitData extends Result{
  data: UserPublishedRecruitListData
}

export interface UserPublishedRecruitListData {
  lists: UserPublishedRecruitListDataItem[]
}

export interface UserPublishedRecruitListDataItem {
  id: string,
  title: string,
  detail: string,
  is_check: string,
  is_end: string,
  sort_time: string,
  top: number,
  top_data: {
    end_time: string,
    information_id: string,
    time_str: string,
    is_top: string
  }
}

// 用户修改已发布列表的招工状态
export interface UserChangePublishedRecruitStatus extends Result{
  data: {
    is_check: number,
    is_end: number,
    top: {
      is_top: number
    }
  }
}

// 用户已发布二手交易列表
export interface UserPublishedUsedLists {
  data: {
    lists: UserPublishedUsedItem[],
    checking_tips: string,
    has_issue: boolean,
    page_size: number
  }
}

export interface UserPublishedUsedItem {
  id: string,
  title: string,
  detail: string,
  is_check: string,
  is_end: string
}

// 用户已发布二手交易 修改状态
export interface UserChangeUsedStatus extends Result{
  data: UserChangeUsedStatusData
}

export interface UserChangeUsedStatusData {
  id: string,
  title: string,
  detail: string,
  is_check: string,
  is_end: string,
  end_word: string,
  update_word: string,
}





// 收藏招工
export interface CollectionRecruitListData extends Result {
  list: CollectionRecruitListDataList[],
  pageSize: number
}
export interface CollectionRecruitListDataList {
  check_status: CollectionRecruitListDataListStatus,
  detail: string,
  header_img: string,
  id: string,
  is_check: string,
  is_end: string,
  state: string,
  status: string,
  time: string,
  title: string,
  user_name: string,
}

export interface CollectionRecruitListDataListStatus {
  showTips: number,
  tipsMsg: string
}

// 收藏找活
export interface CollectionResumeListData {
  data: CollectionResumeListDataList[],
  errcode: number,
  pageSize: number
}
export interface CollectionResumeListDataList {
  check_tips_string: string,
  id: string,
  resume: CollectionResumeListDataListResume,
  resume_uuid: string,
  show_tips: string,
  time: string,
  user_uuid: string,
}
export interface CollectionResumeListDataListResume {
  time: string,
  headerimg: string,
  username: string,
  nation: string,
  type: string,
  prof_degree: string,
  occupations: string[],
  introduce: string,
  show_address: string,
  distance: string,
  gender: string,
  check: string,
  birthday: number,
  certificate:number,
  authentication: string,
  experience: string,
}
// 操作教程
export interface reportData extends Result {
  masterList: reportMasterList[],
  userList: reportUserList[],
}
export interface reportMasterList {
  id: string,
  video_url: string,
  title: string,
  isShow?:boolean,
}
export interface reportUserList{
  title: string,
  id: string,
  video_url: string,
  isShow?: boolean,
}

// 意见反馈
export interface feedbackList extends Result{
  data: feedbackListData[],
  memberInfo: feedbackMemberInfo
}
export interface feedbackMemberInfo{
  phone: string,
  username: string,
}
export interface feedbackListData {
  ask_time:string,
  content:string,
  id:string,
  send_msg:string,
  images:[],
  is_answer: string,
}

// 帮助中心
export interface helpData extends Result{
  lists: heleDatalist[]
}

export interface heleDatalist {
  answer: string,
  question: string,
  isShow?: boolean,
  id?: number
}

// 新闻资讯类型
export interface newsTypesList extends Result {
  data: newsTypesListData[]
}

export interface newsTypesListData {
  index:string,
  letter:string,
  name:string
}


// 新闻列表数据
export interface newList extends Result {
  data: newListData[]
}
export interface newListData {
  author: string
  cover_img: string
  desc: string
  id: number
  jump_url: number
  news_type: string
  time: string
  title: string
  url: string
}

// 资讯详情
export interface consultationDetails extends Result {
  data: consultationDetailsData
}
export interface consultationDetailsData{
  author: string
  content: string
  id: number
  look_number: number
  news_type: []
  time: string,
  title: string
}

// 排名规则
export interface resumesSort extends Result{
  data: resumesSortData,
}
export interface resumesSortData {
  warm_tips:[],
  sort_rule_lists: resumesSortDataList[],
  resume_info: resumesSortDataIfo,
  resume_data: resumesSortDataObj,
}
export interface resumesSortDataObj{
  info: resumesSortDataObjInfo
}
export interface resumesSortDataObjInfo{
  uuid:string
}
export interface resumesSortDataIfo {
  has_resume:number,
  sort_flag:number,
}
export interface resumesSortDataList{
  button_words:string,
  click_type:number,
  description:string,
  img_url:string,
  is_share:number,
  share_type:string,
  type_name:string,
  jump: resumesSortDataListJump;
}
export interface resumesSortDataListJump{
  android_path:string,
  ios_path:string,
  mini_path:string,
  need_jump:number
}

// 我的信息
export interface userMessagesList extends Result {
  data: userMessagesListData,
}
export interface userMessagesListData{
  lists: userMessagesListDataList[],
}
export interface userMessagesListDataList {
  count: number,
  description: string,
  imageUrl: string,
  time: string,
  timeString: string,
  type: number,
  typeName: string
}

// 我的信息详情
export interface system extends Result {
  data: systemData,
}
export interface systemData {
  lists: systemDataList[],
}
export interface systemDataList {
  click_time: string
  description: string
  ext: null
  id: string
  image_url: string
  read_time: number
  target_uuid: string
  time: string
  title: string
  type: number
  type_name: string
  user_uuid: string
}
// 积分分类
export interface integralSourceConfig {
  data: integralSourceConfigData
}
export interface integralSourceConfigData{
  types: integralSourceConfigDataType[],
  default: integralSourceConfigDataDefault,
  min: integralSourceConfigMin
}
export interface integralSourceConfigDataType{
  name:string,
  type:string,
}
export interface integralSourceConfigDataDefault{
  m:string,
  y:string,
}
export interface integralSourceConfigMin {
  m: string,
  y: string,
}
// 积分
export interface integralSourceLists extends Result {
  data: integralSourceListsData,
}
export interface integralSourceListsData {
  sum_data: integralSourceListsDataSum,
  bak:string,
  lists: integralSourceListsDataLists[],
  next_page:number,
  stime:string,
}
export interface integralSourceListsDataLists{
  day: string
  ext: string
  his: string
  integral: string
  source_integral_string: string
  source_type: string
  time: string
  type_name: string
  user_id: string
  y_m: string
  tips?: string
  title?:string,
  id:string,
}
export interface integralSourceListsDataSum{
  get:number,
  expend: number,
}

// 积分弹窗
export interface integralUseInfo extends Result{
  info: integralUseInfoData
}
export interface integralUseInfoData {
  classifyName: [],
  detail: string
  end_word: string
  id: string
  is_end: string
  label: string
  show_complain: number
  title: string
  type: string
  user_mobile: string
  user_name: string
  expend_type:number
  team_composition_words:string
  showProvinceList:string
}

// 招活详情
export interface jobInfoData extends Result{
  result: jobInfoDataResult
}
export interface jobInfoDataResult {
  address: string
  city_id: number
  classifyName: []
  county_id: number
  detail: string
  download_app: string
  has_top: number
  header_img: string
  id: number
  image: string
  isLook?: number
  is_check: number
  is_collect: number
  is_end: number
  is_end_word: string
  location: string
  map_address_name: string
  map_street_name: string
  occupations: []
  province_id: number
  show_ajax_btn: true
  show_complaint: jobInfoDataResultComplaint
  show_full_address:string
  show_tel: number
  sort_time: number
  tel_str: string
  time: string
  title: string
  user_id: number
  user_name: string
  view_images: [],
  top_info: jobInfoDataResultInfo,
}
export interface jobInfoDataResultInfo {
  is_top:string
}
export interface jobInfoDataResultComplaint {
  show_complaint: number, 
  tips_message: string
}

// 收藏
export interface recruitListCancelCollectionType extends Result {
  action ?: string,
}


//置顶
export interface jobTopConfig extends Result {
  data: jobTopConfigData,
}
export interface jobTopConfigData {
  top_rules:[],
  max_top_days:number,
  max_city:number,
  max_province:number
}


// 置顶区域
export interface jobTopHotAreas extends Result {
  data: jobTopHotAreasData[],
}
export interface jobTopHotAreasData{
  id:string,
  is_hot: string,
  name: string,
  pid: string,
  click?:boolean,
}

// 获取修改置顶数据
export interface jobGetTopAreas extends Result {
  data: jobGetTopAreasData,
}
export interface jobGetTopAreasData {
  top_province_ids: [],
  top_city_ids: [],
  max_price: number,
  top_province: jobGetTopAreasDataPro[],
  top_city: jobGetTopAreasDataCity[],
  end_time_string:string,
  end_time:number,
  top_country: jobGetTopAreasDataPro[],
  top_country_ids: jobGetTopAreasDataCity[],
}
export interface jobGetTopAreasDataPro{
  ad_name: string
  id: string
  name: string
  pid: string,
  click: boolean,
  listName?: string
}
export interface jobGetTopAreasDataCity{
  ad_name: string
  id: string
  name: string
  pid: string,
  click: boolean,
  listName?: string
}


// 找活名片详情
export interface resumeDetail{
  certificates: resumeDetailCertificates[],
  errcode:string,
  info: resumeDetailInfo,
  operation: resumeDetailOperation,
  project: resumeDetailProject[],
}
export interface resumeDetailOperation{
  is_collect: number
  is_zan: number
  status: number
}
export interface resumeDetailInfo{
  address: string
  admin_last_edit_time: string
  authentication: string
  birthday: string
  certificate_show: number
  check: string
  city: string
  collect_num: string
  complain_num: string
  country: string
  current_admin: string
  distance: string
  experience: string
  gender: string
  headerimg: string
  hometown: string
  hometown_id: string
  id: string
  img: string
  introduce: string
  ip_address: string
  is_end: string
  is_introduces: string
  is_read: number
  last_update_admin: string
  location: string
  nation: string
  nation_id: string
  note: string
  number_people: string
  occupations: []
  occupations_id: string
  prof_degree: string
  prof_degree_str: string
  progress: string
  province: string
  provinces: string
  show_complain: resumeDetailProjectShowComplain,
  sort_flag: string
  source: string
  tag_id: string
  tags: resumeDetailProjectTags[]
  tel: string
  time: string
  title: null
  type: string
  type_str: string
  update_time: string
  user_id: string
  user_uuid: string
  username: string
  uuid: string
  view_images: null
  view_num: string
  zan_num: string
}
export interface resumeDetailProjectShowComplain{
  show_complain: number, 
  tips_message: string
}
export interface resumeDetailProjectTags{
  id: number
  label_name: string
  label_py: string
}
export interface resumeDetailProject{
  check: string
  city: string
  city_name: string
  completion_time: string
  detail: string
  fail_case: string
  id: string
  image: []
  images: null
  project_name: string
  province: string
  province_name: string
  resume_uuid: string
  start_time: string
  update_time: string
  uuid: string
}
export interface resumeDetailCertificates{
  admin_last_edit_time: string
  certificate_time: string
  check: string
  current_admin: string
  fail_case: string
  id: string
  image: []
  images: string
  last_update_admin: string
  name: string
  resume_uuid: string
  sort_flag: string
  time: string
  update_time: string
  user_uuid: string
  uuid: string
}
// 找活详情列表
export interface recommendList  extends Result{
  data: recommendListData,
}
export interface recommendListData{
  list: recommendListDataList[],
  next_page: number,
  type: number,
}
export interface recommendListDataList{
  id:number,
  headerimg:string,
  username:string,
  birthday:number,
  certificate:number,
  type:string,
  nation:string,
  experience:string,
  introduce:string,
  show_address:string,
  prof_degree:string,
  occupations:[]
}
// 查看完整电话
export interface resumesGetTel{
  tel: string,
  errcode:number,
  errmsg:string,
}

// 赞和分享
export interface resumeCollect extends Result {
  show:number,
}

//相关推荐
export interface jobRecommendList extends Result {
  data: jobRecommendListData,
}

export interface jobRecommendListData {
  type: number,
  next_page:number,
  list: jobRecommendListDataList[],
}

export interface jobRecommendListDataList{
  detail:string,
  id:string,
  image:string,
  title:string,
  user_name:string,
  show_address:string,
  time:string,
}

//完善找活

export interface resumeList{
  data: resumeListData,
  errcode:number,
  errmsg: string
}
export interface resumeListData{
  certificate_count: number,
  certificates: resCertificatesArr[],
  content: resContentObj,
  default_top_area: number,
  fail_certificate: number,
  fail_project: number,
  info: resInfoObj,
  integral: number,
  introduces: resIntroduceObj,
  is_introduces: number,
  is_popup: number,
  popup_text: [],
  project: resProjectArr[],
  project_count: number,
  refresh_text: string,
  resume_top: resume_topObj,
  status: resStatusArr[],
  top_status: resTop_statusArr[]
}
export interface resStatusArr {
  id: number,
  name: string,
}
export interface resTop_statusArr {
  id: number,
  name: string,
}
// 置顶
export interface resume_topObj {
  has_top: number,
  is_top: number,
  is_top_text: string,
  is_top_to_text: string,
  top_tips_string: string,
}
// 项目
export interface resProjectArr {
  check: string,
  city: string,
  city_name: string,
  completion_time: string,
  detail: string,
  fail_case: string,
  id: string,
  image: string[],
  images: string[],
  project_name: string,
  province: string,
  province_name: string,
  resume_uuid: string,
  start_time: string,
  update_time: string,
  uuid: string,
  imageData?: RecruitImageModel,
  project_uuid?:string,
}
export interface RecruitImageModel {
  url: string,
  httpurl: string
}
// 人员信息
export interface resIntroduceObj {
  check: string,
  experience: string,
  experience_str: string,
  hometown: string,
  hometown_id: string,
  number_people: string,
  prof_degree: string,
  prof_degree_str: string,
  tag_id: string,
  tags: resTagesArr[],
  type: string,
  type_str: string,
}
export interface resTagesArr {
  id: number,
  label_name: string,
  label_py: string,
}
// 基础信息
export interface resInfoObj {
  ad_code: number|string,
  address: string,
  admin_last_edit_time: string,
  admin_user_id: string,
  authentication: string,
  birthday: string,
  certificate_show: number,
  check: string,
  city: string,
  collect_num: string,
  complain_num: string,
  country: string,
  current_admin: string,
  distance: string,
  experience: string,
  extens: string,
  gender: string,
  headerimg: string,
  hometown: string,
  id: string,
  img: string,
  introduce: string,
  ip_address: string,
  is_end: string,
  is_introduces: string,
  location: string,
  miniInfoOccupations: string[],
  nation: string,
  nation_id: string,
  note: string,
  number_people: string,
  occupations: string[],
  occupations_id: string,
  prof_degree: string,
  progress: string,
  province: string,
  provinces: string,
  ranking: string,
  refresh_time: string,
  sort_flag: string,
  source: string,
  tags: resTagesArr[],
  tel: string,
  time: string,
  type: string,
  title:string,
  update_time: string,
  user_id: string,
  user_uuid: string,
  username: string,
  uuid: string,
  view_num: string,
  zan_num: string,
  age:string|number,
}
export interface resContentObj {
  check_tips_string: string,
  show_tips: number,
}
export interface resFast_infoObj {
  city_id: string,
  city_txt: string,
  job_id: number,
  occ: string,
  occ_txt: string,
  occupation_tree: resCcupation_treeArr[],
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
export interface resCcupation_treeArr {
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
export interface resFast_infoObj {
  city_id: string,
  city_txt: string,
  job_id: number,
  occ: string,
  occ_txt: string,
  occupation_tree: resOccupation_treeArr[],
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
export interface resOccupation_treeArr {
  province_id: string,
  province_txt: string,
  tel: string,
  type: number,
}
// 职业技能
export interface resCertificatesArr {
  admin_last_edit_time: string,
  certificate_time: string,
  check: string,
  current_admin: string,
  fail_case: string,
  id: string,
  image: string[],
  images: string[],
  last_update_admin: string,
  name: string,
  resume_uuid: string,
  sort_flag: string,
  time: string,
  update_time: string,
  user_uuid: string,
  uuid: string,
}

//  获取电话
export interface jobGetTel extends Result{
  tel:string,
}

// 找活名片公用数据
export interface resumesGetData {
  gender: resumesGetDataGender[],
  label: resumesGetDataLabel[],
  nation: resumesGetDataNation[],
  occupation: resumesGetDataOccupation[],
  prof_degree: resumesGetDataProfDegree[],
  type: resumesGetDataType[],
}
export interface resumesGetDataGender{
  id:number,
  name:string,
}
export interface resumesGetDataLabel{
  id: number
  label_name: string
  label_py: string
  click?:boolean,
}
export interface resumesGetDataNation{
  mz_id: number
  mz_name: string
}
export interface resumesGetDataOccupation{
  has_children: number
  id: string
  letter: string
  name: string
  not_auth: string
  pid: string,
  children:any[],
}
export interface resumesGetDataProfDegree{
  id: string
  name: string
}
export interface resumesGetDataType{
  id: string
  name: string
}
export interface resumesIntroduce {
  errcode: number,
  errmsg: string
}
// 找活置顶省
export interface resumesTopAreas extends Result{
  data: resumesTopAreasData,
}
export interface resumesTopAreasData {
  provinces: resumesTopAreasDataPro[],
}
export interface resumesTopAreasDataPro{
  id: string
  letter: string
  name: string
  pid: string
  click: boolean
}
// 找活置顶
export interface resumesTopConfig extends Result{
  data: resumesTopConfigData,
}
export interface resumesTopConfigData{
  top_rules:string[],
  max_number:number,
  max_top_days:number,
  province_integral:number,
  max_province:number,
  max_city:number,
  special_ids:[],
  country_integral:number,
}

// 用户账号/验证码登录
export interface userAccountOrCodeResult extends Result{
  result: {
    uid: number
    uuid: string
    tel: string
    username: string
    nickname: string
    token: {
      token: string,
      time: number
    }
  },
}

// 获取工种等筛选数据
export interface filterClassifyResult extends Result{
  data: filterClassifyDataResult
}

// 获取工种等筛选数据Data整合
export interface filterClassifyDataResult{
  classTree: filterClassifyResultClassTree[],
  fleamarketTree: filterClassifyResultFleamarketTree[],
  staffTree: filterClassifyResultStaffTree[],
  jobListType: filterClassifyResultJoblistType[],
  resumeListType: filterClassifyResultJoblistType[]
}

// 筛选工种数据父类
export interface filterClassifyResultClassTreeBase {
  id: number,
  pid: number,
  name: string,
}

// 筛选工种数据
export interface filterClassifyResultClassTree extends filterClassifyResultClassTreeBase {
  children: filterClassifyResultClassTreeBase[],
  has_children: number
}


// 筛选二手交易分类信息数据
export interface filterClassifyResultFleamarketTree extends filterClassifyResultClassTreeBase {
  letter: string,
  has_attribute: number,
  attributes: Pick<filterClassifyResultClassTreeBase,'id'|'name'>,
}

// 找活筛选分类信息数据
export interface filterClassifyResultStaffTree {
  letter: string,
  name: string,
  id: number,
  has_children: number
}

// 筛选招工条件数据
export interface filterClassifyResultJoblistType {
  type: string,
  name: string
}

// 检测抖音用户是否充值成功
export interface userCheckDouyinOrderResult extends Result {
  integral: number
}

//查询实名
export interface userQueryAuthInfoData extends Result {
  member: userQueryAuthMember
}

export interface userQueryAuthMember {
  age: string,
  finally_login_address: string,
  occupations: [],
  register_address: string,
  tel: string,
  username: string
}

// 发布修改找活基本资料 配置项
export interface ResumeAddInfoConfig {
  label: ResumeAddInfoLabelConfig[],
  nation: ResumeAddInfoNationConfig[],
  occupation: ResumeAddInfoParentOccupationConfig[],
  gender: ResumeAddInfoGenderConfig[],
  type: ResumeAddInfoGenderConfig[],
  prof_degree: ResumeAddInfoGenderConfig[]
}

// --标签配置
export interface ResumeAddInfoLabelConfig {
  id: string,
  label_name: string,
  label_py: string
}

// --民族配置
export interface ResumeAddInfoNationConfig {
  mz_id: string,
  mz_name: string,
  id?:string,
  name?:string,
}

// --工种配置
export interface ResumeAddInfoOccupationConfig {
  id: string,
  pid: string,
  letter: string,
  not_auth: string,
  name:string,
  is_check:boolean,
}

export interface ResumeAddInfoParentOccupationConfig extends ResumeAddInfoOccupationConfig{
  has_children: number,
  children: ResumeAddInfoOccupationConfig[]
}


// --性别配置
export interface ResumeAddInfoGenderConfig {
  id: string ,
  name: string
}

// 添加技能证书返回值
export interface ResumeCertificateData extends Result{
  count: number
}

// 添加项目返回值
export interface ResumesProjectData extends Result {
  count: number
}

// 获取当前位置
export interface checkAdcodeData extends Result{
  data: checkAdcodeDataCity,
}
export interface checkAdcodeDataCity {
  city:string,
}