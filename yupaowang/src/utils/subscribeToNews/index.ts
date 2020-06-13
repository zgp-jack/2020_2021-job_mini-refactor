
import Taro from '@tarojs/taro'
import { UserInfo } from '../../config/store'
import { leavingMessageAction } from '../../utils/request/index';
import TmplId  from './temp_ids';

// 消息推送
export function SubscribeToNews(type:string, callback:Function){
  let userInfo = Taro.getStorageSync(UserInfo);
  if (Taro.canIUse('requestSubscribeMessage') === true) {
    Taro.requestSubscribeMessage({
      tmplIds: [TmplId[type].id],
      success(res) {
        callback();
        if (res.errMsg == "requestSubscribeMessage:ok") {
          let status = res[TmplId[type].id];
          if (status == "accept") {
            let params={
              userId: userInfo.userId,
              token: userInfo.token,
              tokenTime: userInfo.tokenTime,
              type: TmplId[type].type
            }
            leavingMessageAction(params)
          }
        }
      }
    })
  }else{
    callback()
  }
}
