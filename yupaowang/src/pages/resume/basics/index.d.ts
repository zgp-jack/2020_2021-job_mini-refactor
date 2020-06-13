export interface ModelType {
  name: string,
  sex: string,
  time: string,
  nation: string,
  work: [],
  workItem: string[],
  are: string,
  phone: string,
  details: string,
  classifyTree: [],
  maxClassifyCount: number,
  classifies: any[],
  code: string,
  nationCurrentName: string,
}

// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}
// 发布招工 最后发布地区
export interface UserLastPublishRecruitArea {
  location: string,
  adcode: string,
  title: string,
  info: string
}

// context类型
export interface Injected {
  area: string, // 城市名称
  setArea: (city: string) => void, //设置城市名称
  setAreaInfo?: (item: UserLastPublishRecruitArea) => void, // 用户点击的小地址信息
  setPublishArea?: (val: string) => void //设置最后一次点击 城市的名字
}