export enum FilterMenu {
  area = 0,
  work = 1,
  type = 2,
  filter = 3
}

export interface SearchType {
  page: number,
  occupations: string,
  province: string,
  keywords: string,
  sort: 'newest' | 'recommend',
  location: string,
}