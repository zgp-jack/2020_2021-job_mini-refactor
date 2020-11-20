import Taro, { showToast as _showToast, showModal as _showModal } from "@tarojs/taro-h5";
export default function Msg(msg, duration = 3000) {
  _showToast({
    title: msg,
    icon: 'none',
    duration: duration
  });
}
export function ShowActionModal(data) {
  let { title = '温馨提示', confirmText = '确定', msg, success } = data;
  _showModal({
    title: title,
    content: typeof data === 'string' ? data : msg,
    showCancel: false,
    confirmText: confirmText,
    success: () => {
      success && success();
    }
  });
}
export function errMsg(msg = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'error'
  });
}
export function warnMsg(msg = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'warning'
  });
}
export function successMsg(msg = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'success'
  });
}
export function showModalTip(obj) {
  let { title = '温馨提示', showCancel = false } = obj;
  _showModal({
    title: title,
    content: obj.tips,
    showCancel: showCancel,
    success() {
      obj.callback ? obj.callback() : "";
    }
  });
}