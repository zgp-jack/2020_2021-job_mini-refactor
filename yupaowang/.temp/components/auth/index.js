import Nerv from "nervjs";
import Taro, { login as _login, getSetting as _getSetting, getUserInfo as _getUserInfo, openSetting as _openSetting, getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { AtMessage } from 'taro-ui';
import { View, Text, Image, Button, Block } from '@tarojs/components';
import { IMGCDNURL, SERVERPHONE } from "../../config/index";
import { getUserSessionKey, GetUserInfo } from "../../utils/request/index";
import Msg, { errMsg } from "../../utils/msg/index";
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import { setUserInfo } from '../../actions/user';
import { UserInfo, REFID } from '../../config/store';
import LoginComponet from '../login/index';
import { userCancelAuth as userCancelAuthAction } from "../../utils/helper/index";
import './index.scss';
export default class Auth extends Taro.Component {
  render() {
    const { page = false, callback, userCancelAuth } = this.props;

    const dispatch = useDispatch();
    const login = useSelector(state => state.User['login']);
    // 返回上一页
    const pageBack = () => {
      Taro.navigateBack();
    };
    // 取消授权
    const cancelAuth = () => {
      if (userCancelAuth) {
        userCancelAuth();
      } else {
        userCancelAuthAction();
      }
    };
    // 用户确认授权
    const userAuthAction = e => {
      if (e.detail.userInfo) {
        _login({
          success: res => {
            if (res.code) {
              getUserSessionKey(res.code).then(res => {
                var sessionKey = res.session_key;
                decodeSessionKey(sessionKey);
              });
            } else {
              Msg(`授权失败，客服电话${SERVERPHONE}`);
            }
          }
        });
      } else {
        errMsg('您取消了授权');
      }
    };
    // 解密sessionkey
    const decodeSessionKey = key => {
      _getSetting({
        success: res => {
          if (!res.authSetting['scope.userInfo']) {
            _getUserInfo({
              success: () => {
                doAuthRequest(key);
              },
              fail: () => {
                _openSetting();
              }
            });
          } else {
            doAuthRequest(key);
          }
        }
      });
    };
    // 发起授权请求
    const doAuthRequest = key => {
      _getUserInfo({
        success: res => {
          let encryptedData = res.encryptedData;
          let iv = res.iv;
          let refId = _getStorageSync(REFID);
          const data = {
            session_key: key,
            encryptedData: encryptedData,
            iv: iv,
            refId: refId || 0,
            source: ''
          };
          GetUserInfo(data).then(res => {
            if (res.errcode === 'ok') {
              const user = {
                userId: res.data.id,
                token: res.data.sign.token,
                tokenTime: res.data.sign.time,
                uuid: res.data.uuid,
                login: true
              };
              _setStorageSync(UserInfo, user);
              dispatch(setUserInfo(user));
              callback && callback();
              if (page) pageBack();
            } else {
              errMsg(res.errmsg);
            }
          });
        }
      });
    };
    return <Nerv.Fragment>
    {(!login && !page || page) && ISWEIXIN && <View>
      <AtMessage />
      <View className="user-auth-container">
        <Image className="user-auth-img" src={IMGCDNURL + 'userauth-topicon.png'} />
        <View className="user-auth-title">登录鱼泡网</View>
        <Text className="user-auth-tips">招工 找活抢先一步，用的安心 赚的开心。</Text>
        <Button className="user-btn user-auth-submit" openType="getUserInfo" onGetUserInfo={e => userAuthAction(e)}>微信授权登录</Button>
        {page ? <Button className="user-btn user-auth-return" onClick={() => pageBack()}>返回上一页</Button> : <Button className="user-btn user-auth-return" onClick={() => cancelAuth()}>取消授权</Button>}
      </View>
    </View>}
      {!ISWEIXIN && !login && <LoginComponet />}
    </Nerv.Fragment>;
  }

}