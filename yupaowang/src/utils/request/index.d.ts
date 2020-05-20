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
  lists: RecruitList[],
  title: string
}

export interface ResumeItem {
  lists: ResumeList[],
  title: string
}

// 招工列表数据
export interface RecruitList {
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
  prof_degree: string
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
  errmsg: ResumeList[]
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
  nation_id: string,
  notionality: string,
  note: string,
  note_status: string,
  sex: string,
  source: string,
  user_id: string,
  user_name: string
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
  view_images: []
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