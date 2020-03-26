export interface EInput {
  currentTarget: EInputCurrentTarget,
  detail: EInputDetail,
  target: EInputCurrentTarget
}

export interface EInputCurrentTarget {
  cursor: number,
  dataset: any,
  id: string,
  keyCode: number,
  offsetLeft: number,
  offsetTop: number,
  value: string
}

export interface EInputDetail {
  cursor: number,
  keyCode: number,
  value: string
}

// 获取用户openid
export interface UserOpenid {
  openid: string,
  session_key: string,
  unionid: string
}