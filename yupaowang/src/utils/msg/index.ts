import Taro from '@tarojs/taro'

export default function Msg(msg: string, duration: number = 1500) {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  })
}

export function errMsg(msg: string = ''){
  Taro.atMessage({
    'message': msg,
    'type': 'error',
  })
}