export interface ProfessionBaseData {
  id: string,
  letter: string,
  name: string,
  not_auth: string,
  pid: string
}

export interface ProfessionRecruitChildrenData extends ProfessionBaseData {
  is_check: boolean
}

export interface ProfessionRecruitData extends ProfessionBaseData {
  has_children: number
  children: ProfessionRecruitChildrenData[]
}