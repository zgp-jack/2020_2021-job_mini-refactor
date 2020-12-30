import { usePublishData } from '../commonIssue'
import Taro, { useState, useEffect, useDidShow } from '@tarojs/taro'
import { isVaildVal, isPhone } from '../../../utils/v'
import { ShowActionModal } from '../../../utils/msg'
import { fastIssue } from '../../../utils/request'
import { FastData, TextRules, FastIssue } from '../../../utils/request/index.d'
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
    console.log("wo  lao  dfkjdkfjkdfjd")
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
      // 发布成功提示框
      const promptData = {
        showClose: false,
        showTitle: true,
        cancelText: '不了，谢谢',
        confirmText: '确认发布',
        titleText: '提示',
        content: [{ text: tipContent}]
      }
      setPrompt(promptData)
      setShowModel(true)
    } else if (response == 'fail' &&  tipContent.length > 0 ) {
      // 发布成功提示框
      const promptData = {
        showClose: false,
        showTitle: true,
        showCancel: false,
        confirmText: '确认',
        titleText: '温馨提示',
        content: [{ text: tipContent }]
      }
      setPrompt(promptData)
      setShowModel(true)
    } else if (response == 'integral_lack'){
      // 发布成功提示框
      const promptData = {
        showClose: false,
        showTitle: true,
        showCancel: true,
        confirmText: '获取积分',
        titleText: '温馨提示',
        cancelText: '取消',
        content: [{ text: tipContent }]
      }
      setShowModel(true)
      setPrompt(promptData)
    }
  }, [response, tipContent])
  
  // 根据请求text值变化设置最新的弹窗显示内容
  useEffect(() => {
    handleText()
  },[text,rules])

  // 页面显示的时候
  useDidShow(() => {
    setResponse('')
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
    }else if (response == 'fail' &&　tipContent.length > 0) {
      setShowModel(false)
    } else if (response == 'integral_lack' ){
      Taro.redirectTo({ url: '/pages/getintegral/index' })
    }
    setTipContent([])
    setResponse('')
  }
  const close = () => {
    setShowModel(false)
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
  // 处理发布招工请求返回值中data提示框文字显示内容
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
  // 根据请求返回的结果，保存提示文本信息和显示的文本规则
  function saveData(res: FastIssue<FastData>){
    setText((res.data as FastData).text as string)
    setRules((res.data as FastData).rules as TextRules[])
    setResponse(res.errcode)
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
      content,
      paid_issue: response == 'paid_issue' ? 1 : 0
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
        // 手机号验证通过（即登录状态，用户信息中手机号跟发布填写手机号一致的情况）
        // 是：跳转到城市地址选择页，否：验证码页面
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
        // 后台限制用户
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
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
        saveData(res)
      } else if (res.errcode == "integral_lack"){
        // integral_lack付费发布积分不足提示
        saveData(res)
      } else if (res.errcode == "auth_forbid"){
        // auth_forbid 用户实名认证限制提示
        ShowActionModal({
          title: '提示',
          confirmText: '去实名',
          msg: res.errmsg,
          success: function(){
            Taro.navigateTo({ url:"pages/realname/index"})
          }
        })
      } else if (res.errcode == "fail" &&　res.data) {
        // 到达每天的付费发布次数提示
        saveData(res)
      }else {
        console.log("res",res)
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
    prompt,
    close
  }
}
