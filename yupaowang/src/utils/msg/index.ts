import Taro from '@tarojs/taro'

export default function Msg(msg: string, duration: number = 3000) {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  })
}

interface ShowBackModel {
  title?: string,
  msg: string,
  confirmText?: string,
  success?: (data?) => void,
  showCancel?:boolean,
  confirmColor?:string,
}

export function ShowActionModal(data: ShowBackModel){
  let { title = '温馨提示', confirmText = '确定', msg, success, showCancel = false, confirmColor='' } = data
  Taro.showModal({
    title: title,
    content: (typeof data === 'string') ? data : msg,
    showCancel,
    confirmText: confirmText,
    confirmColor: '#108EEF',
    success: ()=> {
      success && success(data)
    }
  })
}

export function errMsg(msg: string = ''){
  Taro.atMessage({
    'message': msg,
    'type': 'error',
  })
}

export function warnMsg(msg: string = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'warning',
  })
}

export function successMsg(msg: string = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'success',
  })
}


export function showModalTip(obj) {
  let { title = '温馨提示',showCancel = false } = obj
  Taro.showModal({
    title: title,
    content: obj.tips,
    showCancel: showCancel,
    success() {
      obj.callback ? obj.callback() : "";
    }
  })
}