import Taro, { getStorageSync as _getStorageSync, canIUse as _canIUse } from "@tarojs/taro-h5";
import { UserInfo } from '../../config/store';
import { USESUBSCRIBEMESSAGE } from "../../config/index";
import { leavingMessageAction } from "../request/index";
import TmplId from './temp_ids';
// 消息推送
export function SubscribeToNews(type, callback) {
  if (!USESUBSCRIBEMESSAGE) {
    callback();
    return;
  }
  let userInfo = _getStorageSync(UserInfo);
  if (_canIUse('requestSubscribeMessage') === true) {
    Taro.requestSubscribeMessage({
      tmplIds: [TmplId[type].id],
      success(res) {
        callback();
        if (res.errMsg == "requestSubscribeMessage:ok") {
          let status = res[TmplId[type].id];
          if (status == "accept") {
            let params = {
              userId: userInfo.userId,
              token: userInfo.token,
              tokenTime: userInfo.tokenTime,
              type: TmplId[type].type
            };
            leavingMessageAction(params);
          }
        }
      }
    });
  } else {
    callback();
  }
}