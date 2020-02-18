export default function Msg(msg: string, duration: number = 1500) {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  })
}