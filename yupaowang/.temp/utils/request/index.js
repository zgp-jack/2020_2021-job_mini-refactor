import Taro, { getStorageSync as _getStorageSync, showLoading as _showLoading, request as _request, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import * as api from "../api/index";
import { TOKEN, VERSION } from "../../config/index";
import Msg from "../msg/index";
import { UserInfo } from '../../config/store';
// 请求失败提示信息
function requestShowToast(show) {
  if (show) {
    setTimeout(() => {
      Msg('网络错误，请求失败');
    }, 200);
  }
}
// 获取header请求头信息
function getRequestHeaderInfo() {
  // 获取用户信息
  let userInfo = _getStorageSync(UserInfo);
  const requestHeader = userInfo.login ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid,
    version: VERSION
  } : {
    'content-type': 'application/x-www-form-urlencoded',
    version: VERSION
  };
  return requestHeader;
}
// 配置默认请求参数
const getRequestHeaderInfoAction = () => {
  let headers = getRequestHeaderInfo();
  return {
    url: '',
    method: 'GET',
    header: { ...headers },
    data: {},
    loading: true,
    title: '数据加载中...',
    failToast: true,
    user: true
  };
};
// 全局通用请求方法
export function doRequestAction(reqData) {
  let req = { ...getRequestHeaderInfoAction(), ...reqData };
  if (req.loading) {
    _showLoading({
      title: req.title
    });
  }
  let data = { ...req.data, wechat_token: TOKEN };
  // 获取用户信息
  let userInfo = _getStorageSync(UserInfo);
  if (req.method === 'POST' && userInfo.login && req.user) {
    data.userId = userInfo.userId;
    data.token = userInfo.token;
    data.tokenTime = userInfo.tokenTime;
  }
  return new Promise((resolve, reject) => {
    _request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : req.url,
      method: req.method,
      header: req.header,
      data: data,
      success: res => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          requestShowToast(req.failToast);
          reject(res);
        }
      },
      fail: e => {
        // todo requestShowToast(req.failToast)
        requestShowToast(req.failToast);
        reject(e);
      },
      complete: function () {
        if (req.loading) {
          _hideLoading();
        }
      }
    });
  });
}
// 用户授权-获取session_key
export function getUserSessionKey(code) {
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  });
}
// session_key换取userinfo
export function GetUserInfo(data) {
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  });
}
// 获取首页banner以及公告
export function getBannerNotice() {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  });
}
// 获取首页列表数据
export function getAllListItem(data) {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  });
}
// 获取招工列表
export function getRecruitList(data) {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data,
    method: 'POST'
  });
}
// 获取找活列表
export function getResumeList(data) {
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  });
}
// 获取二手交易列表
export function getFleamarketList(data) {
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  });
}
// 获取微信号以及公告
export function getWechatNotice() {
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  });
}
// 获取列表页筛选条件
export function getListFilterData() {
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  });
}
// tabbar未读消息统计
export function getTabbarMsg() {
  return;
}
// 获取积分记录分页数据
export function getIntegralList(data) {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  });
}
// 初始化发布招工信息视图
export function getPublishRecruitView(data) {
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  });
}
// 获取城市数据
export function getAllAreas(loading = true) {
  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  });
}
// 获取热门城市
export function getHotAreas() {}
// 检验adcode是否有效
export function checkAdcodeValid(adcode) {
  return doRequestAction({
    url: api.CheckAdcodeValid,
    method: 'POST',
    data: {
      adcode: adcode
    }
  });
}
// 获取用户邀请链接
export function getUserInviteLink() {
  return doRequestAction({
    url: api.GetUserInviteLink,
    method: 'POST',
    failToast: true
  });
}
// 获取充值选项
export function getRechargeList() {
  return doRequestAction({
    url: api.GetRechargeList,
    method: 'POST'
  });
}
// 用户充值获取openid
export function getRechargeOpenid(code) {
  return doRequestAction({
    url: api.GetRechargeOpenid,
    method: 'POST',
    data: {
      js_code: code
    }
  });
}
// 用户创建充值订单
export function getRechargeOrder(data) {
  return doRequestAction({
    url: api.GetRechargeOrder,
    method: 'POST',
    data: data
  });
}
// 初始化用户发布二手交易信息
export function getUsedInfoModel(data) {
  return doRequestAction({
    url: api.GetUsedInfoModel,
    data: data,
    method: 'POST'
  });
}
// 发布二手交易
export function publishUsedInfo(data) {
  return doRequestAction({
    url: api.PublishUsedInfo,
    data: data,
    method: 'POST'
  });
}
// 获取验证码
export function getUserPhoneCode(data) {
  return doRequestAction({
    url: api.GetUserPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  });
}
// 获取登录验证码
export function GetUserLoginPhoneCode(data) {
  return doRequestAction({
    url: api.GetUserLoginPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  });
}
// 二手交易详情
export function getUsedInfo(id) {
  return doRequestAction({
    url: api.GetUsedInfo,
    method: 'POST',
    data: {
      infoId: id
    }
  });
}
// 用户实名查询
export function getUserIsAuth(tel) {
  return doRequestAction({
    url: api.CheckAuth,
    method: 'POST',
    data: {
      tel: tel
    }
  });
}
// 验证当前用户是否实名
export function checkMineAuthInfo() {
  return doRequestAction({
    url: api.CheckMineAuthInfo,
    method: 'POST'
  });
}
// 用户会员中心
export function getMemberInfo() {
  return doRequestAction({
    url: api.getMemberInfo,
    method: 'POST'
  });
}
// 获取当前用户的提示信息
export function getMemberMsgNumber(type) {
  return doRequestAction({
    url: api.getMemberMsgNumber,
    method: 'POST',
    data: {
      terminal_type: type ? 'ios' : 'android'
    },
    loading: false,
    failToast: false
  });
}
// 用户实名认证
export function getUserAuthInfo() {
  return doRequestAction({
    url: api.getUserAuthInfo,
    method: 'POST'
  });
}
// 提交实名认证信息
export function postUserAuthInfo(data) {
  return doRequestAction({
    url: api.postUserAuthInfo,
    method: 'POST',
    data: data
  });
}
// 用户完善信息
export function postUserAddInfo(data) {
  return doRequestAction({
    url: api.postUserAddInfo,
    method: 'POST',
    data: data
  });
}
// 用户修改头像
export function userChangeAvatar(img) {
  return doRequestAction({
    url: api.userChangeAvatar,
    method: 'POST',
    data: {
      headerImg: img
    }
  });
}
// 用户修改名字
export function userUpdateName(name) {
  return doRequestAction({
    url: api.userUpdateName,
    method: 'POST',
    data: {
      username: name
    }
  });
}
// 用户更换手机
export function userChangePhone(tel, code) {
  return doRequestAction({
    url: api.userChangePhone,
    method: 'POST',
    data: {
      tel: tel,
      code: code
    }
  });
}
// 用户获取已发布招工列表
export function userGetPublishedRecruitLists(data) {
  return doRequestAction({
    url: api.userGetPublishedRecruitList,
    data: data,
    method: 'POST'
  });
}
// 用户改变发布招工状态
export function userChangeRecruitStatus(id) {
  return doRequestAction({
    url: api.userChangeRecruitStatus,
    data: { infoId: id },
    method: 'POST'
  });
}
// 用户获取已发布二手列表
export function userGetPublishedUsedLists(data) {
  return doRequestAction({
    url: api.userGetPublishedUsedList,
    data: data,
    method: 'POST'
  });
}
// 用户改变二手状态
export function userChangeUsedStatus(id) {
  return doRequestAction({
    url: api.userChangeUsedStatus,
    data: { infoId: id },
    method: 'POST'
  });
}
// 二手交易刷新置顶
export function userUpdateUsedInfo(id) {
  return doRequestAction({
    url: api.userUpdateUserInfo,
    data: { infoId: id },
    method: 'POST'
  });
}
// 收藏招工请求数据
export function getCollectionRecruitListData(page) {
  return doRequestAction({
    url: api.getCollectionRecruitList,
    method: 'POST',
    data: {
      page
    },
    failToast: true
  });
}
// 收藏找活请求数据
export function getCollectionResumeListData(page) {
  return doRequestAction({
    url: api.getCollectionResumeList,
    method: 'POST',
    failToast: true,
    data: {
      page
    }
  });
}
// 取消招工收藏
export function recruitListCancelCollectionAction(id) {
  return doRequestAction({
    url: api.recruitCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      id
    }
  });
}
// 取消找活收藏
export function ResumeCancelCollectionAction(resume_uuid) {
  return doRequestAction({
    url: api.ResumeCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      resume_uuid
    }
  });
}
// 使用教程
export function requestAction() {
  return doRequestAction({
    url: api.requestActionUrl,
    method: 'POST',
    failToast: true
  });
}
// 意见反馈
export function feedbackAction(page) {
  return doRequestAction({
    url: api.feedbackUrl,
    method: 'POST',
    failToast: true,
    data: {
      page
    }
  });
}
// 意见返回提交
export function feedbackSubmissionAction(params) {
  return doRequestAction({
    url: api.feedbackSubmissionUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 帮助中心
export function helpAction(page, system) {
  return doRequestAction({
    url: api.helpUrl,
    failToast: true,
    data: {
      page,
      system
    }
  });
}
// 新闻类型
export function newsTypesAction() {
  return doRequestAction({
    url: api.newsTypesUrl,
    failToast: true
  });
}
// 新闻列表
export function newListAction(params) {
  return doRequestAction({
    url: api.newListUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 资讯详情
export function newsInfoAction(id) {
  return doRequestAction({
    url: api.newsInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      id
    }
  });
}
// 排名规则
export function resumesSortAction() {
  return doRequestAction({
    url: api.resumesSortUrl,
    method: 'POST',
    failToast: true
  });
}
// 排名规则点击按钮发请求
export function resumesAddClickLogAction(type) {
  return doRequestAction({
    url: api.resumesAddClickLog,
    method: 'POST',
    failToast: true,
    data: {
      type
    }
  });
}
// 我的信息
export function userMessagesAction(type) {
  return doRequestAction({
    url: api.userMessagesUrl,
    method: 'POST',
    failToast: true,
    data: {
      terminal_type: type
    }
  });
}
// 我的信息详情
export function messagesTypeAction(params) {
  return doRequestAction({
    url: api.messagesTypeUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取积分分类
export function integralSourceConfigAction(params) {
  return doRequestAction({
    url: api.integralSourceConfigUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分数据
export function integralSourceListsAction(params) {
  return doRequestAction({
    url: api.integralSourceListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分消耗
export function integralExpendConfigAction() {
  return doRequestAction({
    url: api.integralExpendConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 积分消耗 数量
export function integralExpendListsAction(params) {
  return doRequestAction({
    url: api.integralExpendListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 消耗积分弹窗内容
export function integralUseInfoAction(logId) {
  return doRequestAction({
    url: api.integralUseInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      logId
    }
  });
}
// 投诉
export function publishComplainAction(params) {
  return doRequestAction({
    url: api.publishComplainUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情
export function jobInfoAction(params) {
  return doRequestAction({
    url: api.jobInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情，没有用户信息
export function jobNoUserInfoAction(params) {
  return doRequestAction({
    url: api.jobNoUserInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取电话号码
export function jobGetTelAction(params) {
  return doRequestAction({
    url: api.jobGetTelUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 修改状态
export function jobEndStatusAction(infoId) {
  return doRequestAction({
    url: api.jobEndStatusUrl,
    method: 'POST',
    failToast: true,
    data: {
      infoId
    }
  });
}
// 置顶信息
export function jobTopConfigAction() {
  return doRequestAction({
    url: api.jobTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 置顶区域
export function jobTopHotAreasAction() {
  return doRequestAction({
    url: api.jobTopHotAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 招工置顶
export function jobDoTopAction(detail) {
  return doRequestAction({
    url: api.jobDoTopUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 修改置顶获取数据
export function jobGetTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobGetTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 更新招工置顶城市
export function jobChangeTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobChangeTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 取消招工置顶
export function jobUpdateTopStatusAction(detail) {
  return doRequestAction({
    url: api.jobUpdateTopStatusUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 找活详情
export function resumeDetailAction(obj) {
  return doRequestAction({
    url: api.resumeDetailUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情列表
export function recommendListAction(obj) {
  return doRequestAction({
    url: api.recommendListUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情查看电话
export function resumesGetTelAcrion(obj) {
  return doRequestAction({
    url: api.resumesGetTelUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 赞
export function resumeSupportAction(obj) {
  return doRequestAction({
    url: api.resumeSupportUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 分享
export function resumeCollectAction(obj) {
  return doRequestAction({
    url: api.resumeCollectUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活名片完善
export function resumeListAction() {
  return doRequestAction({
    url: api.resumeListUrl,
    method: 'POST',
    failToast: true
  });
}
// 发布招工信息
export function publishRecruitInfo(data) {
  return doRequestAction({
    url: api.PublishRecruitInfo,
    method: 'POST',
    data: data,
    failToast: true
  });
}
// 找活名片推荐
export function jobRecommendListAction(data) {
  return doRequestAction({
    url: api.jobRecommendListUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
//删除技能证书
export function delCertificateAction(data) {
  return doRequestAction({
    url: api.delCertificateUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 新增技能证书
export function resumesCertificateAction(data) {
  return doRequestAction({
    url: api.resumesCertificateUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 新增项目
export function resumesProjectAction(data) {
  // 获取用户信息
  let userInfo = _getStorageSync(UserInfo);
  return doRequestAction({
    url: api.resumesProjectUrl,
    header: {
      version: '1.0.1',
      'content-type': 'application/x-www-form-urlencoded',
      mid: userInfo.userId,
      uuid: userInfo.uuid,
      token: userInfo.token,
      time: userInfo.tokenTime
    },
    method: 'POST',
    failToast: true,
    data
  });
}
// 基础信息
export function addResumeAction(data) {
  return doRequestAction({
    url: api.addResumeUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 获取当前位置
export function checkAdcodeAction(data) {
  return doRequestAction({
    url: api.checkAdcodeUrl,
    method: 'GET',
    failToast: true,
    data
  });
}
// 找活页面获取公用数据
export function resumesGetDataAction() {
  return doRequestAction({
    url: api.resumesGetDataUrl,
    method: 'POST',
    failToast: true
  });
}
// 人员信息
export function resumesIntroduceAction(data) {
  return doRequestAction({
    url: api.resumesIntroduceUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活名片修改状态
export function resumesEditEndAction(data) {
  // 获取用户信息
  let userInfo = _getStorageSync(UserInfo);
  return doRequestAction({
    url: api.resumesEditEndUrl,
    method: 'POST',
    failToast: true,
    header: {
      version: '1.0.1',
      'content-type': 'application/x-www-form-urlencoded',
      // mid: 95,
      // uuid:'1588057764721312',
      // token:''
      mid: userInfo.userId,
      token: userInfo.token,
      time: userInfo.tokenTime,
      uuid: userInfo.uuid
    },
    data
  });
}
// 删除项目经验
export function resumesDelProjectAction(data) {
  return doRequestAction({
    url: api.resumesDelProjectUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活置顶获取省
export function resumesTopAreasAction() {
  return doRequestAction({
    url: api.resumesTopAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶内容
export function resumesTopConfigAction() {
  return doRequestAction({
    url: api.resumesTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶
export function resumesDoTopAction(data) {
  return doRequestAction({
    url: api.resumesDoTopUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活页面置顶修改
export function resumesChangeTopStatusAction(data) {
  return doRequestAction({
    url: api.resumesChangeTopStatusUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活名片头像修改
export function resumesEditImgAction(data) {
  return doRequestAction({
    url: api.resumesEditImgUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
//找活置顶配置
export function resumesTopConfigV2Action(data) {
  return doRequestAction({
    url: api.resumesTopConfigV2Url,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活置顶v2
export function resumesDoTopV2Action(data) {
  return doRequestAction({
    url: api.resumesDoTopV2Url,
    method: 'POST',
    failToast: true,
    data
  });
}
// 修改找活置顶
export function resumesUpdateTopResumeAction(data) {
  return doRequestAction({
    url: api.resumesUpdateTopResumeUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 找活投诉
export function resumesComplainAction(data) {
  return doRequestAction({
    url: api.resumesComplainUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 消息推送
export function leavingMessageAction(data) {
  return doRequestAction({
    url: api.leavingMessageUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 用户验证码登录
export function userAccountLogin(data) {
  return doRequestAction({
    url: api.userAccountUrl,
    method: 'POST',
    failToast: true,
    data
  });
}
// 用户账号登录
export function userTelCodeLogin(data) {
  return doRequestAction({
    url: api.userTelCodeLogin,
    method: 'POST',
    failToast: true,
    data
  });
}
// 发起抖音支付
export function userDouyinRecharge(data) {
  return doRequestAction({
    url: api.userDouyinRecharge,
    method: 'POST',
    data
  });
}
// 检测抖音用户是否充值成功
export function userCheckDouyinRecharge(data) {
  return doRequestAction({
    url: api.userCheckDouyinRecharge,
    method: 'POST',
    data
  });
}
// 用户修改密码
export function updataPassword(data) {
  return doRequestAction({
    url: api.updataPassword,
    method: 'POST',
    failToast: true,
    data
  });
}
// 实名查询
export function queryAction(params) {
  return doRequestAction({
    url: api.realnameQueryUrl,
    method: 'POST',
    data: params
  });
}
// 发布找活基本信息 配置项
export function getResumeAddInfoConfig() {
  return doRequestAction({
    url: api.getResumeAddInfoConfig,
    method: 'POST'
  });
}
// 排名规则数据
export function getRankRulesList() {
  return doRequestAction({
    url: api.getRankRulesList,
    method: 'POST'
  });
}
// 大转盘获取抽奖次数
export function turntableIndex() {
  return doRequestAction({
    url: api.turntableIndex,
    method: 'POST',
    title: '正在初始化数据'
  });
}
// 大转盘抽奖
export function turntableDraw() {
  return doRequestAction({
    url: api.turntableDraw,
    method: 'POST'
  });
}
// 大转盘看视频结束后的回调
export function turntableVideoEnd() {
  return doRequestAction({
    url: api.turntableVideoEnd,
    method: 'POST'
  });
}
// 获取鱼泡币页面大转盘展示控制
export function memberTurntable() {
  return doRequestAction({
    url: api.memberTurntable,
    method: 'POST'
  });
}