import Taro from '@tarojs/taro'
import * as api from '../api'
import { TOKEN } from '../../config'
import * as Inter from './index.d'
import Msg from '../msg'
import { SearchType as RecruitSearchType } from '../../pages/recruit/index.d'
import { SearchType as ResumeSearchType } from '../../pages/resume/index.d'
import { SearchType as FleamarketSearchType } from '../../pages/used/lists/index'
import { AuthData } from '../../components/auth'
import { FilterData } from '../../pages/home'
import { UserInfo } from '../../config/store'
import { User } from '../../reducers/user'
import { IntegralData } from '../../pages/integral/config'
import { InitRecruitView } from '../../pages/recruit/publish'

interface RequestHeader {
  'content-type'?: string
  mid?: number,
  token?: string,
  time?: number,
  uuid?: string
}

interface RequestBase {
  url: string,
  method: 'GET' | 'POST',
  header: RequestHeader,
  data: any,
  failToast: boolean,
  loading: boolean,
  title: string
}

type Request = {
  [K in keyof RequestBase]?: RequestBase[K]
}

// 请求失败提示信息
function requestShowToast(show: boolean):void {
  if (show) {
    setTimeout(() => {
      Msg('网络错误，请求失败')
    }, 200)
  }
}

// 获取header请求头信息
function getRequestHeaderInfo(): RequestHeader{
  const userInfo: User = Taro.getStorageSync(UserInfo)
  const requestHeader: RequestHeader = userInfo ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid
    } : {
      'content-type': 'application/x-www-form-urlencoded',
    }
  return requestHeader
}

// 配置默认请求参数
const defaultRequestData: RequestBase = {
  url: '',
  method: 'GET',
  header: getRequestHeaderInfo(),
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
}

// 全局通用请求方法
export function doRequestAction(reqData: Request): Promise<any> {
  let req: RequestBase = { ...defaultRequestData, ...reqData }
  if (req.loading) {
    Taro.showLoading({
      title: req.title
    })
  }
  let data = { ...req.data, wechat_token: TOKEN }
  let userInfo: User = Taro.getStorageSync(UserInfo)
  if(req.method === 'POST' && userInfo){
    data.userId = userInfo.userId
    data.token = userInfo.token
    data.tokenTime = userInfo.tokenTime
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url :req.url,
      method: req.method,
      header: req.header,
      data: data,
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

// 用户授权-获取session_key
export function getUserSessionKey(code: string): Promise<Inter.SessionKey>{
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  })
}

// session_key换取userinfo
export function GetUserInfo(data: AuthData): Promise<Inter.InitUserInfo>{
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  })
}

// 获取首页banner以及公告
export function getBannerNotice(): Promise<Inter.BannerNotice> {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  })
}

// 获取首页列表数据
export function getAllListItem(data: FilterData): Promise<Inter.HomeLists> {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  })
}

// 获取招工列表
export function getRecruitList(data: RecruitSearchType): Promise<Inter.RecruitList[]> {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  })
}

// 获取找活列表
export function getResumeList(data: ResumeSearchType): Promise<Inter.ResumeResult>{
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  })
}

// 获取二手交易列表
export function getFleamarketList(data: FleamarketSearchType): Promise<any>{
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  })
}

// 获取微信号以及公告
export function getWechatNotice(){
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  })
}

// 获取列表页筛选条件
export function getListFilterData(){
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  })
}

// tabbar未读消息统计
export function getTabbarMsg(){
  return
}

// 获取积分记录分页数据
export function getIntegralList<T>(data: IntegralData): Promise<Inter.IntegralList<T>> {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  })
} 

// 初始化发布招工信息视图
export function getPublishRecruitView(data: InitRecruitView): Promise<any>{
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  })
}

// 获取城市数据
export function getAllAreas(loading: boolean = true): Promise<Inter.AllAreasDataItem[][]>{
  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  })
}

// 获取热门城市
export function getHotAreas(){

}

// 检验adcode是否有效
export function checkAdcodeValid(adcode: string): Promise<Inter.CheckAdcodeValid>{
  return doRequestAction({
    url: api.CheckAdcodeValid,
    method: 'POST',
    data: {
      adcode: adcode
    }
  })
}