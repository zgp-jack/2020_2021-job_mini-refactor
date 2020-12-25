export enum FilterMenu {
  area = 0,
  work = 1,
  type = 2,
  filter = 3
}

export interface SearchNormalFieldType {
  has_sort_flag: string,
  has_time: string,
  has_top: string,
  last_sort_flag_pos: string,
  last_time_pos: string,
  last_normal_pos: string,
}

export interface SearchType{
  page: number,
  occupations: string,
  keywords: string,
  sort: string,
  location: string,
  area_id: string,
  type: string,
  last_refresh_time_pos:number
}
