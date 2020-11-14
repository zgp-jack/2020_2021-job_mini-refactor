import { usePublishData } from './fastIssue'
import { FastIssueData } from '../../pages/recruit/index.d'
import { useState, useEffect } from '@tarojs/taro'
import { isVaildVal, isPhone } from '../../utils/v'
import Msg, { ShowActionModal } from '../../utils/msg'
import { fastIssue } from '../../utils/request'
import { FastData } from '../../utils/request/index.d'


// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}

export function useFastIssue() {
  // 定义请求参数
  const id: string = ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type,infoId: id }
  // 发送获取数据请求
  const { phone, setEnterInfo } = usePublishData(InitParams)
  // 定义快速发布数据
  const [issueData, setIssueData] = useState<FastIssueData>({ phone: phone , content:''})
  // 数据变化的标题
  const [dataType, setDataType] = useState<string>('')
  // 存入电话号码
  useEffect(() => {
    setIssueData({ ...issueData, phone: phone })
  }, [phone])
  // 监听输入电话或者详情变化，存入缓存
  useEffect(() => {
    if (dataType == 'phone') {
      setEnterInfo(dataType, issueData[dataType])
    }
    if (dataType == 'content') {
      setEnterInfo(dataType, issueData[dataType])
    }
  }, [dataType, issueData])

  // 用户填写发布信息
  function inputEnter (e: any, key: string) {
    const value: string = e.detail.value
    setIssueData({ ...issueData, [key]:value})
    setDataType(key)
  }
  // 发布招工详情
  function fastPublish () {
    let data = { ...issueData }
    if (data.content == "") {
      Msg('请输入招工详情。')
      return
    }
    if (!isVaildVal(data.content, 3, 500)) {
      Msg('请正确输入3~500字招工详情,必须含有汉字。')
      return;
    }
    if (data.phone == "") {
      Msg('请输入联系电话。')
      return false
    }
    if (data.phone && !isPhone(phone)) {
      Msg('请正确输入11位联系电话。')
      return false;
    }
    if (phone == "18349296434") {
      Msg('该手机号暂不支持发布招工信息，请重新输入。')
      return false;
    }
    fastIssue(data).then(res => {
      if (res.errcode == 'ok') {
        let checked: boolean = (res.data as FastData).checked 
        if (checked){
          Taro.navigateTo({
            url: '/pages/recruit/fast_issue/release/index',
          })
        }else{
          Taro.navigateTo({
            url: 'pages/recruit/fast_issue/code/index',
          })
        }
      } else {
        ShowActionModal({
          msg: res.errmsg
        })
      }
    })
    
    // app.appRequestAction({
    //   url: 'fast-issue/issue/',
    //   params: {
    //     content,
    //     phone,
    //     paid_issue: e.detail ? e.detail : 0
    //   },
    //   way: 'POST',
    //   success: function (res) {
    //     if (res.data.errcode == "ok") {
    //       let mydata = res.data.data
    //       app.globalData.fastToken = mydata.token
    //       if (mydata.checked) {
    //         wx.navigateTo({
    //           url: '/pages/fast/area/area?token=' + mydata.token,
    //         })
    //         that.setEnterInfo("phone", '')
    //       } else {
    //         wx.navigateTo({
    //           url: '/pages/fast/code/code?token=' + mydata.token + '&tel=' + phone,
    //         })
    //       }
    //     }
    //     if (res.data.errcode == "unusable") {
    //       wx.showModal({
    //         title: '提示',
    //         content: res.data.errmsg,
    //         showCancel: true,
    //         cancelText: "知道了",
    //         confirmText: "联系客服",
    //         success: function (res) {
    //           if (res.confirm) {
    //             wx.makePhoneCall({
    //               phoneNumber: app.globalData.serverPhone
    //             })
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  }
  return {
    issueData, 
    setIssueData,
    inputEnter,
    setDataType,
    dataType,
    fastPublish
  }
}
