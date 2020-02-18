export enum FilterMenu {
  area = 0,
  work = 1,
  filter = 2
}

export interface SearchType{
  page: number,
  list_type: string,
  area_id: string,
  classify_id: string,
  keywords: string,
  joblisttype: 'newest' | 'recommend',
  token: string,
}