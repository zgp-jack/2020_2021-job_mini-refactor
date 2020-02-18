import Taro from '@tarojs/taro'
import * as api from '../api'
import { TOKEN } from '../../config'
import { Result, RecruitList } from './index.d'
import Msg from '../msg'

interface ContentType {
  'content-type': string
}

interface RequestBase {
  url: string,
  method: 'GET' | 'POST',
  header: ContentType,
  data: any,
  failToast: boolean,
  loading: boolean,
  title: string
}

type Request = {
  [K in keyof RequestBase]?: RequestBase[K]
}

function requestShowToast(show: boolean) {
  if (show) {
    setTimeout(() => {
      Msg('网络错误，请求失败')
    }, 200)
  }
}

const defaultRequestData: RequestBase = {
  url: '',
  method: 'GET',
  header: { 'content-type': 'application/json' },
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
}

export function doRequestAction(reqData: Request): Promise<any> {
  let req: RequestBase = { ...defaultRequestData, ...reqData }
  if (req.loading) {
    Taro.showLoading({
      title: req.title
    })
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url :req.url,
      method: req.method,
      header: req.header,
      data: { ...req.data, wechat_token: TOKEN },
      success: (res) => {
        //console.log(res)
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          requestShowToast(req.failToast)
          reject(res)
        }
      },
      fail: (e) => {
      // todo requestShowToast(req.failToast)
        reject(e)
      },
      complete: function () {
        if (req.loading) {
          Taro.hideLoading()
        }
      }
    })
  })
}

// 获取招工列表
export function getRecruitList(data): Promise<RecruitList[]> {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  })
}