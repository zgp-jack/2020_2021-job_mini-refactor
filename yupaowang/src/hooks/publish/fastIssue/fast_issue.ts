import { PromptBoxProps } from './../../../components/prompt_box/index';
import { usePublishData } from '../commonIssue'
import Taro, { useState, useEffect, useDidShow } from '@tarojs/taro'
import { isVaildVal, isPhone } from '../../../utils/v'
import { ShowActionModal } from '../../../utils/msg'
import { fastIssue } from '../../../utils/request'
import { FastData, TextRules } from '../../../utils/request/index.d'
import { setToken, setPhone } from '../../../actions/recruit'//获取发布招工信息action
import { useDispatch } from '@tarojs/redux'
import { SERVERPHONE } from '../../../config'
import { PublishData } from '../../../config/store'
import { textData } from '../../../components/prompt_box/index'
import { changeTabbar } from '../../../actions/tabbar'


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
  const [telPhone, setTelPhone] = useState<string>(phone)
  const [content, setContent] = useState<string>('')
  // 数据变化的标题
  const [dataType, setDataType] = useState<string>('')
  // 展示或者隐藏电话框
  const [showPhoneBox, setShowPhoneBox] = useState<boolean>(false)
  // 详情输入框输入内容
  const [num, setNum] = useState<number>(0)
  // 当点击发布后，返回参数是paid_issue提示框显示内容
  const [tipContent, setTipContent] = useState<textData[]>([])
  // 当点击发布后，返回参数是paid_issue显示文本
  const [text, setText] = useState<string>('')
  // 当点击发布后，返回参数是paid_issue文本显示规则
  const [rules, setRules] = useState<TextRules[]>([])
  // 响应状态
  const [response, setResponse] = useState<string>('')
  // 是否显示发布成功提示框
  const [showModel, setShowModel] = useState<boolean>(false)
  // 从选择城市、工种页面返回的标识
  const [pageMark, setPageMark] = useState<boolean>(false)
  // 子组件提示框的显示属性
  const [prompt, setPrompt] = useState<any>({})
  // 获取dispatch分发action
  const dispatch = useDispatch()

  // 初始化电话号码
  useEffect(()=>{
    setTelPhone(phone)
  },[phone])


  // 监听输入电话或者详情变化，存入缓存
  useEffect(() => {
    if (dataType == 'phone') {
      setEnterInfo(dataType, telPhone)
    }
    if (dataType == 'content') {
      setEnterInfo(dataType, content)
    }
  }, [dataType,telPhone, content])


  // 设置匹配到电话号码设置缓存
  useEffect(() => {
    setEnterInfo("phone", telPhone)
  },[telPhone])


  // 监听text跟rules变化
  useEffect(() => {
    if (response == 'publishSuccess') {
      // 发布成功提示框
      const promptData = {
        showClose: true,
        showTitle: true,
        cancelText: '筛选找活简历',
        confirmText: '管理招工信息',
        titleText: '提示',
        content: [{ des: '发布成功' }]
      }
      setPrompt(promptData)
    } else if (response == 'paid_issue') {
      handleText()
      // 发布成功提示框
      const promptData = {
        showClose: true,
        showTitle: true,
        cancelText: '不了，谢谢',
        confirmText: '确认发布',
        titleText: '提示',
        content: [{ text: tipContent}]
      }
      setPrompt(promptData)
      setShowModel(true)
    }
  }, [response, tipContent])


  // 页面显示的时候
  useDidShow(() => {
    // 获取页面栈
    let pages: Taro.Page[] = Taro.getCurrentPages();
    if (pages.length > 1) {
      //当前页面栈
      let currentPage = pages[pages.length - 1];
      // 获取当前页面的页面栈中从发布招工城市选择页设置的最新标识
      let mark = currentPage.data.pageMark;
      // 如果是从城市选择发布页面返回，则显示发布成功弹窗和清空缓存与data数据
      if (mark) {
        let jisuData = Taro.getStorageSync(PublishData)
        if (jisuData && jisuData.content) {
          jisuData.content = '';
          Taro.setStorageSync(PublishData, jisuData)
        }
        setContent('')
        setResponse('publishSuccess')
        setShowModel(true)
      }
      setPageMark(false)
    }
  })
  // 点击取消（筛选找活简历）
  const cancel = () => {
    if (response == 'publishSuccess'){
      Taro.reLaunch({ url: '/pages/index/index?type=resume' })
    } else if (response == 'paid_issue'){
      setShowModel(false)
    }
    
  }
  // 点击确定跳转到招工信息列表
  const confirm = () => {
    if (response == 'publishSuccess'){
      dispatch(changeTabbar("member"))
      Taro.reLaunch({ url: '/pages/published/recruit/index' })
    }else if (response == 'paid_issue'){
      fastPublish()
    }
  }
  // 用户填写发布信息
  function inputEnter (e: any, key: string) {
    const value: string = e.detail.value
    setDataType(key)
    if (key == 'phone') setTelPhone(value)
    if (key == 'content'){
      setContent(value)
      setNum(value.length)
      let content:string = value.replace(/\s+/g, "")
      // 匹配电话正则表达式
      let _partten: RegExp = /1[3-9]\d{9}/g;
      // 获取匹配结果，可能为null可能有值（数组）
      let result = content.match(_partten)
      let phoneNum = result && result[0]
      if (phoneNum){
        // 如果匹配有手机号码，保存最新的手机号并显示电话框
        setTelPhone(phoneNum)
        // 如果匹配的手机号等于账号手机号也不显示电话框
        if (phoneNum == phone) return
        setShowPhoneBox(true)
      }
    }
  }
  // 当请求返回值是paid_issue表示付费发布，处理提示框文字显示内容
  function handleText(){
    let texts: textData[] = []
    for (let i = 0; i < rules.length; i++) {
      if (i === 0) {
        texts.push({ text: text.substring(i, rules[i].start), color: "#000000" })
      } else {
        texts.push({ text: text.substring(rules[i - 1].start + rules[i - 1].length, rules[i].start), color: "#000000" })
      }
      texts.push({
        text: text.substring(rules[i].start, rules[i].start + rules[i].length),
        color: rules[i].value,
      })
      if (i === rules.length - 1) {
        texts.push({ text: text.substring(rules[i].start + rules[i].length), color: "#000000"})
      }
    }
    setTipContent(texts)
  }
  // 发布招工详情
  function fastPublish () {
    if (content == "") {
      ShowActionModal({
        title: '温馨提示',
        msg: '请输入招工详情。'
      })
      return
    }
    if (content.length < 3 || content.length > 500) {
      ShowActionModal({
        title: '提示',
        msg: '请正确输入3~500字招工详情。'
      })
      return false;
    }
    if (!isVaildVal(content, 1, 500)) {
      ShowActionModal({
        title: '温馨提示',
        msg: '请正确输入3~500字招工详情,必须含有汉字。'
      })
      return;
    }
    if (!telPhone ||　telPhone == "") {
      ShowActionModal({
        title: '温馨提示',
        msg: '请输入联系电话。'
      })
      setShowPhoneBox(true)
      return false
    }
    if (telPhone && !isPhone(telPhone)) {
      ShowActionModal({
        title: '温馨提示',
        msg: '请正确输入11位联系电话。'
      })
      return false;
    }
    if (telPhone == "18349296434") {
      ShowActionModal({
        title: '温馨提示',
        msg: '该手机号暂不支持发布招工信息，请重新输入。'
      })
      return false;
    }
    let data = {
      phone:telPhone,
      content
    }
    fastIssue(data).then(res => {
      if (res.errcode == 'ok') {
        // 获取请求的手机号验证结果true为验证通过
        let checked: boolean = (res.data as FastData).checked 
        // 快速发布招工信息的token，用户携带到整个发布流程使用
        let token: string = (res.data as FastData).token
        // token存入redux
        dispatch(setToken(token))
        // 发布手机号存入redux
        dispatch(setPhone(telPhone))
        if (checked){
          Taro.navigateTo({
            url: '/pages/recruit/fast_issue/release/index',
          })
        }else{
          Taro.navigateTo({
            url: '/pages/recruit/fast_issue/code/index',
          })
        }
      } else if (res.errcode == "unusable") {
        Taro.showModal({
          title: '温馨提示',
          content: "mydata.errmsg",
          cancelText: "知道了",
          confirmText: "联系客服",
          success(res) {
            if (res.confirm) {
              let tel = SERVERPHONE;
              Taro.makePhoneCall({
                phoneNumber: tel,
              })
            }
          }
        })
      } else if (res.errcode == "paid_issue"){
        // paid_issue代表付费发布
        setText((res.data as FastData).text as string)
        setRules((res.data as FastData).rules as TextRules[])
        setResponse(res.errcode)
      } else {
        ShowActionModal({
          msg: res.errmsg
        })
      }
    })
  }
  return {
    telPhone,
    setTelPhone,
    content,
    setContent, 
    inputEnter,
    setDataType,
    dataType,
    fastPublish,
    showPhoneBox,
    setShowPhoneBox,
    num,
    setNum,
    cancel,
    confirm,
    showModel,
    prompt
  }
}
