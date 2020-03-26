// hooks 接口类型

// 发送验证码请求参数接口
export interface UserGetCodeData {
  tel: string,
  sendType: string
}

// 发布二手交易请求参数接口
export interface InitUsedModelInfoParams {
  infoId: string,
  type: 'fleamarket'
}