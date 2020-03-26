export interface UsedPublishModel { 
  areaTree: UsedPublishModelAreaTree[],
  classifyTree: UsedPublishModelClassifyTree[],
  errcode: string,
  model: UsedPublishModelInfo,
  placeholder: string,
  selectedClassifies: UsedPublishModelSelectedClassifies,
  show_address: string,
  type: string,
  errmsg: string
}

export interface UsedPublishModelAreaBase {
  id: string,
  pid: string,
  name: string,
}

export interface UsedPublishModelAreaTree extends UsedPublishModelAreaBase {
  has_children: number,
  children: UsedPublishModelAreaBase[]
}

export interface UsedPublishModelClassifyBase {
  id: string,
  letter: string,
  name: string,
}

export interface UsedPublishModelClassifyTree extends UsedPublishModelClassifyBase{
  has_attribute: number,
  attributes: UsedPublishModelClassifyBase[]
}

export interface UsedPublishModelInfo {
  user_name: string,
  user_mobile: string,
  city_id: string,
  province_id: string,
  attribute_id?: string,
  category_id?: string,
  detail?: string,
  id?: number,
  title?: string,
  is_check?: number
}

export interface UsedPublishModelSelectedClassifies {
  attribute_id: string,
  category_id: string
}

export interface UserPublishUsedInfo {
  type: string,
  infoId: string,
  user_mobile: string,
  title: string,
  user_name: string,
  detail: string,
  code: string,
  province_id: string,
  city_id: string,
  category_id: string,
  attribute_id: string,
}

// 省份picker数据
export interface ProvinceAreaPicker {
  id: string,
  name: string,
  has_children: number
}

// 市级picker数据
export interface CityAreaPicker {
  id: string,
  pid: string,
  name: string
}