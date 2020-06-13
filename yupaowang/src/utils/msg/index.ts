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
  success?: () => void
}

export function ShowActionModal(data: string | ShowBackModel){
  let { title = '温馨提示', confirmText = '确定', msg, success } = data as ShowBackModel
  Taro.showModal({
    title: title,
    content: (typeof data === 'string') ? data : msg,
    showCancel: false,
    confirmText: confirmText,
    success: ()=> {
      success && success()
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


export function SubPopup(obj) {
  Taro.showModal({
    title: obj.title || '温馨提示',
    content: obj.tips,
    showCancel: obj.hasOwnProperty('cancel') ? obj.cancel : false,
    success() {
      obj.callback ? obj.callback() : "";
    }
  })
}