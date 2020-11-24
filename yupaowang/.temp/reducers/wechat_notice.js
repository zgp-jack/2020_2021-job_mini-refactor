import { SERVERPHONE } from "../config/index";
import SUCCESS from '../constants/wechat_notice';
const DEFAULT_STATE = {
  notice: [],
  phone: SERVERPHONE,
  wechat: {
    number: '',
    outTime: 600
  },
  success: false
};
export default function WechatNotice(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
}