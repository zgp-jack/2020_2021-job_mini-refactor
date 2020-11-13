// import { usePublishData } from './fastIssue'
import { FastIssueData } from '../../pages/recruit/index.d'
import { useEffect, useState } from 'react'




// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}

export function useFastIssue() {
  // 定义请求参数
  // const id: string = ''
  // const type: string = 'job'
  // const InitParams: InitRecruitView = { type: type,infoId: id }
  // 发送获取数据请求
  // const { phone, setEnterInfo } = usePublishData(InitParams)
  // 定义快速发布数据
  const [issueData, setIssueData] = useState<FastIssueData>({phone:'',content:''})
  // 数据变化的标题
  const [dataType, setDataType] = useState<string>('')
  

  // 监听输入电话或者详情变化，存入缓存
  // useEffect(() => {
  //   if (dataType == 'phone') {
  //     setEnterInfo(dataType, issueData[dataType])
  //   }
  //   if (dataType == 'content') {
  //     setEnterInfo(dataType, issueData[dataType])
  //   }
  // },[dataType,issueData])
  
  // 用户填写发布信息
  function userEnterFrom (e: any, key: string) {
    const value: string = e.detail.value
    const state: FastIssueData = JSON.parse(JSON.stringify(issueData))
    state[key] = value
    setIssueData(state)
    setDataType(key)
  }



  return {
    issueData, 
    setIssueData,
    userEnterFrom,
    setDataType,
    dataType
  }
}
