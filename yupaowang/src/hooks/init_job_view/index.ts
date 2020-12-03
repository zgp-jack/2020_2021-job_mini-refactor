import Taro from '@tarojs/taro'
import { PUBLISHRECRUIT, PUBLISHFAST } from '../../config'
import { setPublishWay } from '../../actions/publishWay'
import { publishWayRea } from '../../utils/request/index'
import { useSelector, useDispatch } from '@tarojs/redux'

export interface publishFindWork {
  resumeText: string,
  loginBefore: boolean,
  loginAfter: boolean,
  logoutWay: string,
  loginWay: string
}

export default function useJobView () {
  const publishWay = useSelector<any, publishFindWork>(state => state.publishWay)
  const login: boolean = useSelector<any, boolean>(state => state.User['login'])
  const dispatch = useDispatch()
  //是否为极速发布与快速发布请求,快速发布与极速发布跳转
  const initJobView = () => {
    if (login) {
      let flag = JSON.parse(JSON.stringify(publishWay))
      if (!flag.loginAfter) {
        publishWayRea().then(res => {
          let publishMethod = res.add_job_type
          dispatch(setPublishWay({ ...publishWay, loginWay: publishMethod, loginAfter: true }))
          let url = publishMethod == "fast_add_job" ? PUBLISHRECRUIT : PUBLISHFAST
          Taro.navigateTo({
            url: url
          })
        }).catch(() => {
          Taro.navigateTo({
            url: PUBLISHFAST
          })
        })
      } else {
        let way = publishWay.loginWay
        let url = way == "fast_add_job" ? PUBLISHRECRUIT : PUBLISHFAST
        Taro.navigateTo({
          url: url
        })
      }
    } else {
      let flag = JSON.parse(JSON.stringify(publishWay))
      if (!flag.loginBefore) {
        publishWayRea().then(res => {
          let publishMethod = res.add_job_type
          dispatch(setPublishWay({ ...publishWay, logoutWay: publishMethod, loginBefore: true }))
          let url = publishMethod == "fast_add_job" ? PUBLISHRECRUIT : PUBLISHFAST
          Taro.navigateTo({
            url: url
          })
        }).catch(() => {
          Taro.navigateTo({
            url: PUBLISHFAST
          })
        })
      } else {
        let way = publishWay.logoutWay
        let url = way == "fast_add_job" ? PUBLISHRECRUIT : PUBLISHFAST
        Taro.navigateTo({
          url: url
        })
      }
    }
  }
  return {
    initJobView
  }
}