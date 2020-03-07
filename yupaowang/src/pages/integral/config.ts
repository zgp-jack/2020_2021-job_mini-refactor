// 请求参数
export interface IntegralData {
  type: string,
  page: number
}

// 列表数据类型
export interface IntegralListConfig<T> {
  lists: T[],
  hasmore: boolean
}
