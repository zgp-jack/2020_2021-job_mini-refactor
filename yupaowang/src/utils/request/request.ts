import Taro from '@tarojs/taro'
import * as Api from './api'
import * as Inter from './inter.d'

const getRequestHeader = (): Inter.RequestHeader => {
  let token: string = Taro.getStorageSync('token')
  return token ? {
    "content-type": 'application/x-www-form-urlencoded',
    token: token
  } : {
    "content-type": 'application/x-www-form-urlencoded'
  }
}

// 使用默认参数，当数据不传入指定字段时替代
const NormalRquestData: Inter.RequestBase = {
  url: Api.DOMAIN, // 默认请求地址
  method: 'GET', // 默认get请求
  header: getRequestHeader(),
  data: {}, // 默认没有参数，传入空对象
  loading: true, //默认开启loading层
  mask: true, //请求时不需要点击
  title: '数据加载中', //loading提示文字
  failToast: false // 一般我们会处理相应业务逻辑，就不直接提示阻断流程
}

// 请求传入reqData参数   返回promise对象 因为全局请求我每次返回的类型都是不一样的，所以我直接any
const doRequestAction = (reqData: Inter.Request): Promise<any> => {
  // 将不存在的参数字段使用默认值进行替换
  let req: Inter.RequestBase = { ...NormalRquestData, ...reqData }
  return new Promise((resolve, reject) => {
    //检测是否开启loading层 是否打开msak
    if (req.loading) Taro.showLoading({ title: req.title, mask: req.mask })
    Taro.request({
      url: req.url, //引入我的接口是特殊声明的，所以我就不检测http/https了
      method: req.method,
      data: req.data,
      header: req.header
    })
    .then(res => {
      // 大多数请求中 success并不代表成功，需要我们自己检测statusCode来确保
      if (res.statusCode === 200) {
        resolve(res.data) // 成功
      } else {
        // 如果失败 检测是否直接提示信息
        if(req.failToast) Taro.showToast({ title: '网络不好，请求失败！' })
        reject(res) // 失败
      }
    })
    .catch(err => {
      // 如果失败 检测是否直接提示信息
      if (req.failToast) Taro.showToast({ title: '网络不好，请求失败！' })
      reject(err)
    })
    .finally(() => {
      // 请求结束 关闭loading层
      if (req.loading) Taro.hideLoading()
    })
  })
}

// 调用封装方法 返回promise对象 得到获取到的数据
export const getTopics = (data: Inter.TOPICSDATA): Promise<Inter.TOPICS> => {
  return doRequestAction({
    url: Api.topics,
    data: data
  })
}