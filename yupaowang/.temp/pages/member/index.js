import Nerv from "nervjs";
import Taro, { removeStorageSync as _removeStorageSync } from "@tarojs/taro-h5";
import { View, Image, Text } from '@tarojs/components';
import { useSelector, useDispatch } from "@tarojs/redux-h5";
import { getMemberInfo } from "../../utils/request/index";
import { IMGCDNURL, AUTHPATH, CODEAUTHPATH, PUBLISHRESUME, PUBLISHEDRECRUIT, INVITEPATH, PROREQUESTURL, REQUESTURL } from "../../config/index";
import { setMemberInfo } from '../../actions/member';
import Msg, { ShowActionModal } from "../../utils/msg/index";
import { loginOut } from '../../actions/user';
import { resetMsg } from '../../actions/msg';
import { isIos } from "../../utils/v/index";
import './index.scss';
import { UserInfo } from '../../config/store';
export default class Member extends Taro.Component {
  render() {
    const { memberIndex = 0 } = this.props;

    const dispatch = useDispatch();
    // 获取用户信息
    const login = useSelector(state => state.User['login']);
    // member信息
    const [model, setModel] = Taro.useState();
    // 获取招工信息更新数量
    const jobNumber = useSelector(state => state.msg['jobNumber']);
    // 获取我的信息未读数量
    const msgNumber = useSelector(state => state.msg['messageNumber']);
    // 判断是否是ios
    const [ios, setIos] = Taro.useState(false);
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // 初始化用户信息
    const initMemberInfo = () => {
      if (!login) return;
      getMemberInfo().then(data => {
        if (data.errcode == 'ok') {
          const value = {
            username: data.member.username || data.member.nickname,
            avatar: data.member.headimgurl || '',
            phone: data.member.tel || '',
            pwd_status: data.member.pwd_status || '',
            changeName: data.is_checking == 2 && data.member.is_check == '2' ? false : true
          };
          dispatch(setMemberInfo(value));
          setModel(data);
        } else ShowActionModal({
          msg: data.errmsg
        });
      });
    };
    Taro.useEffect(() => {
      setIos(isIos());
    }, []);
    Taro.useEffect(() => {
      //Taro.setNavigationBarTitle({ title: IndexTabbarConfig[MEMBER].navigationBarTitleText })
      if (!login) return;
      initMemberInfo();
    }, [login, memberIndex]);
    // 清理用户登录信息
    const userClearSession = () => {
      _removeStorageSync(UserInfo);
      dispatch(loginOut());
      dispatch(resetMsg());
      Msg('您已成功退出该账号');
    };
    return <View className="member-container">
      <View className="member-header-box">
        <View className="member-header-title">会员中心</View>
        <View className="member-userinfobox">
          
          {login && model ? <View className="member-userinfo">
            <View className="member-userinfo-content">
              <Image className="member-userinfo-avatar" src={model.member.headimgurl} />
              <View className="member-username">
                <View className="member-username-text">
                {model.member.username || model.member.nickname}
                {model.is_checking == 2 && model.member.is_check == '2' && <Image className="member-realnameimg" src="http://cdn.yupao.com/miniprogram/images/newresume-infolist-ysm.png" />}
                </View>
              </View>
              <View className="member-usernum">会员编号：<Text className="member-id">{model.member.id}</Text></View>
              {model.member.tel ? <View className="member-editinfo" onClick={() => userRouteJump(`/pages/userinfo/info/index`)}>修改资料</View> : <View className="member-editinfo" onClick={() => userRouteJump('/pages/userinfo/add/index')}>完善资料</View>}
            </View>
            <View className="member-user-integral">
                <View className="member-integral-item" onClick={() => userRouteJump('/pages/integral/tabber/index?info=0&office=0')}>
                <Text className="member-integral-num">{model.member.integral}</Text>
                <Text className="member-integral-text">积分</Text>
              </View>
              <View className="member-integral-item" onClick={() => userRouteJump('/pages/integral/temp/index')}>
                <Text className="member-integral-num">{model.member.temporary_integral}</Text>
                <Text className="member-integral-text">临时积分</Text>
                <Text className="member-integral-tips">详情</Text>
              </View>
            </View>
          </View> : <View className="member-userinfo member-userinfo-null" onClick={() => userRouteJump(ISWEIXIN ? AUTHPATH : CODEAUTHPATH)}>
            <View className="member-toauth">
              <Image className="member-user-nullimg" src={IMGCDNURL + 'userauth-userinfo-null.png'} />
              <Text className="member-user-login">登录/注册</Text>
            </View>
            <View className="member-login-tips">点击上方登录/注册按钮可以前往登录页面，登录成功后可解锁小程序全部功能，方便您能更便捷的招工找活。</View>
          </View>}
        </View>
      </View>
      <View className="member-body-container">
        <View className="member-list-container">
          <View className="member-list-item" onClick={() => userRouteJump(PUBLISHEDRECRUIT)}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-recruit.png'} />
            <Text className="member-list-title">我的招工</Text>
            {jobNumber && <Text className="member-list-tips">状态有更新</Text>}
          </View>
          <View className="member-list-item" onClick={() => userRouteJump(PUBLISHRESUME)}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-resume.png'} />
            <Text className="member-list-title">我的找活名片</Text>
            <Text className="member-list-tips">{model && model.member.resume_status.resume_tips_string}</Text>
          </View>
          <View className="member-list-item" onClick={() => userRouteJump('/pages/published/used/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-used.png'} />
            <Text className="member-list-title">我的二手交易</Text>
          </View>
          <View className="member-list-item" onClick={() => userRouteJump('/pages/information/mymessage/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-info.png'} />
            <View className="member-list-title">
              <Text>我的信息</Text>
              {msgNumber && <View className="member-num-dotbox">
                <Text className="member-num-dot">{msgNumber > 9 ? '9+' : msgNumber}</Text>
              </View>}
            </View>
            {msgNumber && <Text className="member-list-tips">有新信息待查看</Text>}
          </View>
        </View>
        <View className="member-list-container">
          <View className="member-list-item" onClick={() => userRouteJump('/pages/getintegral/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-integral.png'} />
            <Text className="member-list-title">获取积分</Text>
            {!ios && <Text className="member-list-tips">去充值</Text>}
          </View>
          <View className="member-list-item" onClick={() => userRouteJump(INVITEPATH)}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-invite.png'} />
            <Text className="member-list-title">邀请工友</Text>
            <Text className="member-list-tips">邀请好友得积分</Text>
          </View>
          <View className="member-list-item" onClick={() => userRouteJump(`/pages/integral/tabber/index?info=1`)}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-expend.png'} />
            <Text className="member-list-title">积分消耗记录</Text>
          </View>
          <View className="member-list-item" onClick={() => userRouteJump(`/pages/integral/tabber/index?info=0`)}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-origin.png'} />
            <Text className="member-list-title">积分来源</Text>
          </View>
        </View>
        <View className="member-list-container">
          <View className="member-list-item" onClick={() => userRouteJump('/pages/realname/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-realname.png'} />
            <Text className="member-list-title">实名认证</Text>
            <Text className="member-list-tips">{model && model.member.check_state}</Text>
          </View>
          <View className="member-list-item">
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-collect.png'} />
            <Text className="member-list-title" onClick={() => userRouteJump('/pages/collection/index')}>我的收藏</Text>
          </View>
        </View>
        <View className="member-list-container">
          <View className="member-list-item" onClick={() => userRouteJump('/pages/feedbacklist/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-feedback.png'} />
            <View className="member-list-title">
              <Text>意见反馈</Text>
              {model && model.member.has_notice_msg.hasNoticeMsgg && <Text className="member-list-dot"></Text>}
            </View>
            {model && model.member.has_notice_msg.hasNoticeMsgg && <Text className="member-list-tips">有最新回复</Text>}
          </View>
          <View className="member-list-item" onClick={() => userRouteJump('/pages/help/index')}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-help.png'} />
            <Text className="member-list-title">帮助中心</Text>
            <Text className="member-list-tips">使用教程</Text>
          </View>
          {PROREQUESTURL != REQUESTURL && <View className="member-list-item" onClick={() => userClearSession()}>
            <Image className="member-list-icon" src={IMGCDNURL + 'lpy/ucenter/newcenter-set.png'} />
            <Text className="member-list-title">清理缓存</Text>
            <Text className="member-list-tips">退出登录</Text>
          </View>}
        </View>
      </View>
    </View>;
  }

}