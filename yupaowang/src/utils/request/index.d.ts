export interface Result {

}

interface RecruitState {
  label: string,
  state: string
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

export interface ResumeResult {
  errcode: string,
  errmsg: ResumeList[]
}