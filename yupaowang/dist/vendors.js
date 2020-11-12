<<<<<<< HEAD
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";e.exports=n(47).default,e.exports.default=e.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.doRequestAction=doRequestAction,t.getUserSessionKey=function getUserSessionKey(e){return doRequestAction({"url":r.GetUserSessionKey,"data":{"code":e}})},t.GetUserInfo=function GetUserInfo(e){return doRequestAction({"url":r.GetUserInfo,"data":e})},t.getBannerNotice=function getBannerNotice(){return doRequestAction({"url":r.GetBannerNotice,"loading":!1})},t.getAllListItem=function getAllListItem(e){return doRequestAction({"url":r.GetAllListItem,"data":e})},t.getRecruitList=function getRecruitList(e){return doRequestAction({"url":r.GetRecruitlist,"data":e,"method":"POST"})},t.getResumeList=function getResumeList(e){return doRequestAction({"url":r.GetResumelist,"data":e})},t.getFleamarketList=function getFleamarketList(e){return doRequestAction({"url":r.GetFleamarketlist,"data":e})},t.getWechatNotice=function getWechatNotice(){return doRequestAction({"url":r.GetWechatNotice,"method":"POST","loading":!1})},t.getListFilterData=function getListFilterData(){return doRequestAction({"url":r.GetListFilterData,"loading":!1})},t.getTabbarMsg=function getTabbarMsg(){return},t.getIntegralList=function getIntegralList(e){return doRequestAction({"url":r.GetIntegralList,"data":e,"method":"POST"})},t.getPublishRecruitView=function getPublishRecruitView(e){return doRequestAction({"url":r.GetPublisRecruitView,"data":e,"method":"POST"})},t.getAllAreas=function getAllAreas(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return doRequestAction({"url":r.GetAllAreas,"loading":e})},t.getHotAreas=function getHotAreas(){},t.checkAdcodeValid=function checkAdcodeValid(e){return doRequestAction({"url":r.CheckAdcodeValid,"method":"POST","data":{"adcode":e}})},t.getUserInviteLink=function getUserInviteLink(){return doRequestAction({"url":r.GetUserInviteLink,"method":"POST","failToast":!0})},t.getRechargeList=function getRechargeList(){return doRequestAction({"url":r.GetRechargeList,"method":"POST"})},t.getRechargeOpenid=function getRechargeOpenid(e){return doRequestAction({"url":r.GetRechargeOpenid,"method":"POST","data":{"js_code":e}})},t.getRechargeOrder=function getRechargeOrder(e){return doRequestAction({"url":r.GetRechargeOrder,"method":"POST","data":e})},t.getUsedInfoModel=function getUsedInfoModel(e){return doRequestAction({"url":r.GetUsedInfoModel,"data":e,"method":"POST"})},t.publishUsedInfo=function publishUsedInfo(e){return doRequestAction({"url":r.PublishUsedInfo,"data":e,"method":"POST"})},t.getUserPhoneCode=function getUserPhoneCode(e){return doRequestAction({"url":r.GetUserPhoneCode,"method":"POST","data":e,"title":"验证码获取中"})},t.GetUserLoginPhoneCode=function GetUserLoginPhoneCode(e){return doRequestAction({"url":r.GetUserLoginPhoneCode,"method":"POST","data":e,"title":"验证码获取中"})},t.getUsedInfo=function getUsedInfo(e){return doRequestAction({"url":r.GetUsedInfo,"method":"POST","data":{"infoId":e}})},t.getUserIsAuth=function getUserIsAuth(e){return doRequestAction({"url":r.CheckAuth,"method":"POST","data":{"tel":e}})},t.checkMineAuthInfo=function checkMineAuthInfo(){return doRequestAction({"url":r.CheckMineAuthInfo,"method":"POST"})},t.getMemberInfo=function getMemberInfo(){return doRequestAction({"url":r.getMemberInfo,"method":"POST"})},t.getMemberMsgNumber=function getMemberMsgNumber(e){return doRequestAction({"url":r.getMemberMsgNumber,"method":"POST","data":{"terminal_type":e?"ios":"android"},"loading":!1})},t.getUserAuthInfo=function getUserAuthInfo(){return doRequestAction({"url":r.getUserAuthInfo,"method":"POST"})},t.postUserAuthInfo=function postUserAuthInfo(e){return doRequestAction({"url":r.postUserAuthInfo,"method":"POST","data":e})},t.postUserAddInfo=function postUserAddInfo(e){return doRequestAction({"url":r.postUserAddInfo,"method":"POST","data":e})},t.userChangeAvatar=function userChangeAvatar(e){return doRequestAction({"url":r.userChangeAvatar,"method":"POST","data":{"headerImg":e}})},t.userUpdateName=function userUpdateName(e){return doRequestAction({"url":r.userUpdateName,"method":"POST","data":{"username":e}})},t.userChangePhone=function userChangePhone(e,t){return doRequestAction({"url":r.userChangePhone,"method":"POST","data":{"tel":e,"code":t}})},t.userGetPublishedRecruitLists=function userGetPublishedRecruitLists(e){return doRequestAction({"url":r.userGetPublishedRecruitList,"data":e,"method":"POST"})},t.userChangeRecruitStatus=function userChangeRecruitStatus(e){return doRequestAction({"url":r.userChangeRecruitStatus,"data":{"infoId":e},"method":"POST"})},t.userGetPublishedUsedLists=function userGetPublishedUsedLists(e){return doRequestAction({"url":r.userGetPublishedUsedList,"data":e,"method":"POST"})},t.userChangeUsedStatus=function userChangeUsedStatus(e){return doRequestAction({"url":r.userChangeUsedStatus,"data":{"infoId":e},"method":"POST"})},t.userUpdateUsedInfo=function userUpdateUsedInfo(e){return doRequestAction({"url":r.userUpdateUserInfo,"data":{"infoId":e},"method":"POST"})},t.getCollectionRecruitListData=function getCollectionRecruitListData(e){return doRequestAction({"url":r.getCollectionRecruitList,"method":"POST","data":{"page":e},"failToast":!0})},t.getCollectionResumeListData=function getCollectionResumeListData(e){return doRequestAction({"url":r.getCollectionResumeList,"method":"POST","failToast":!0,"data":{"page":e}})},t.recruitListCancelCollectionAction=function recruitListCancelCollectionAction(e){return doRequestAction({"url":r.recruitCancelCollection,"method":"POST","failToast":!0,"data":{"id":e}})},t.ResumeCancelCollectionAction=function ResumeCancelCollectionAction(e){return doRequestAction({"url":r.ResumeCancelCollection,"method":"POST","failToast":!0,"data":{"resume_uuid":e}})},t.requestAction=function requestAction(){return doRequestAction({"url":r.requestActionUrl,"method":"POST","failToast":!0})},t.feedbackAction=function feedbackAction(e){return doRequestAction({"url":r.feedbackUrl,"method":"POST","failToast":!0,"data":{"page":e}})},t.feedbackSubmissionAction=function feedbackSubmissionAction(e){return doRequestAction({"url":r.feedbackSubmissionUrl,"method":"POST","failToast":!0,"data":e})},t.helpAction=function helpAction(e,t){return doRequestAction({"url":r.helpUrl,"failToast":!0,"data":{"page":e,"system":t}})},t.newsTypesAction=function newsTypesAction(){return doRequestAction({"url":r.newsTypesUrl,"failToast":!0})},t.newListAction=function newListAction(e){return doRequestAction({"url":r.newListUrl,"method":"POST","failToast":!0,"data":e})},t.newsInfoAction=function newsInfoAction(e){return doRequestAction({"url":r.newsInfoUrl,"method":"POST","failToast":!0,"data":{"id":e}})},t.resumesSortAction=function resumesSortAction(){return doRequestAction({"url":r.resumesSortUrl,"method":"POST","failToast":!0})},t.resumesAddClickLogAction=function resumesAddClickLogAction(e){return doRequestAction({"url":r.resumesAddClickLog,"method":"POST","failToast":!0,"data":{"type":e}})},t.userMessagesAction=function userMessagesAction(e){return doRequestAction({"url":r.userMessagesUrl,"method":"POST","failToast":!0,"data":{"terminal_type":e}})},t.messagesTypeAction=function messagesTypeAction(e){return doRequestAction({"url":r.messagesTypeUrl,"method":"POST","failToast":!0,"data":e})},t.integralSourceConfigAction=function integralSourceConfigAction(e){return doRequestAction({"url":r.integralSourceConfigUrl,"method":"POST","failToast":!0,"data":e})},t.integralSourceListsAction=function integralSourceListsAction(e){return doRequestAction({"url":r.integralSourceListsUrl,"method":"POST","failToast":!0,"data":e})},t.integralExpendConfigAction=function integralExpendConfigAction(){return doRequestAction({"url":r.integralExpendConfigUrl,"method":"POST","failToast":!0})},t.integralExpendListsAction=function integralExpendListsAction(e){return doRequestAction({"url":r.integralExpendListsUrl,"method":"POST","failToast":!0,"data":e})},t.integralUseInfoAction=function integralUseInfoAction(e){return doRequestAction({"url":r.integralUseInfoUrl,"method":"POST","failToast":!0,"data":{"logId":e}})},t.publishComplainAction=function publishComplainAction(e){return doRequestAction({"url":r.publishComplainUrl,"method":"POST","failToast":!0,"data":e})},t.jobInfoAction=function jobInfoAction(e){return doRequestAction({"url":r.jobInfoUrl,"method":"POST","failToast":!0,"data":e})},t.jobNoUserInfoAction=function jobNoUserInfoAction(e){return doRequestAction({"url":r.jobNoUserInfoUrl,"method":"POST","failToast":!0,"data":e})},t.jobGetTelAction=function jobGetTelAction(e){return doRequestAction({"url":r.jobGetTelUrl,"method":"POST","failToast":!0,"data":e})},t.jobEndStatusAction=function jobEndStatusAction(e){return doRequestAction({"url":r.jobEndStatusUrl,"method":"POST","failToast":!0,"data":{"infoId":e}})},t.jobTopConfigAction=function jobTopConfigAction(){return doRequestAction({"url":r.jobTopConfigUrl,"method":"POST","failToast":!0})},t.jobTopHotAreasAction=function jobTopHotAreasAction(){return doRequestAction({"url":r.jobTopHotAreasUrl,"method":"POST","failToast":!0})},t.jobDoTopAction=function jobDoTopAction(e){return doRequestAction({"url":r.jobDoTopUrl,"method":"POST","failToast":!0,"data":e})},t.jobGetTopAreasAction=function jobGetTopAreasAction(e){return doRequestAction({"url":r.jobGetTopAreasUrl,"method":"POST","failToast":!0,"data":e})},t.jobChangeTopAreasAction=function jobChangeTopAreasAction(e){return doRequestAction({"url":r.jobChangeTopAreasUrl,"method":"POST","failToast":!0,"data":e})},t.jobUpdateTopStatusAction=function jobUpdateTopStatusAction(e){return doRequestAction({"url":r.jobUpdateTopStatusUrl,"method":"POST","failToast":!0,"data":e})},t.resumeDetailAction=function resumeDetailAction(e){return doRequestAction({"url":r.resumeDetailUrl,"method":"POST","failToast":!0,"data":e})},t.recommendListAction=function recommendListAction(e){return doRequestAction({"url":r.recommendListUrl,"method":"POST","failToast":!0,"data":e})},t.resumesGetTelAcrion=function resumesGetTelAcrion(e){return doRequestAction({"url":r.resumesGetTelUrl,"method":"POST","failToast":!0,"data":e})},t.resumeSupportAction=function resumeSupportAction(e){return doRequestAction({"url":r.resumeSupportUrl,"method":"POST","failToast":!0,"data":e})},t.resumeCollectAction=function resumeCollectAction(e){return doRequestAction({"url":r.resumeCollectUrl,"method":"POST","failToast":!0,"data":e})},t.resumeListAction=function resumeListAction(){return doRequestAction({"url":r.resumeListUrl,"method":"POST","failToast":!0})},t.publishRecruitInfo=function publishRecruitInfo(e){return doRequestAction({"url":r.PublishRecruitInfo,"method":"POST","data":e,"failToast":!0})},t.jobRecommendListAction=function jobRecommendListAction(e){return doRequestAction({"url":r.jobRecommendListUrl,"method":"POST","failToast":!0,"data":e})},t.delCertificateAction=function delCertificateAction(e){return doRequestAction({"url":r.delCertificateUrl,"method":"POST","failToast":!0,"data":e})},t.resumesCertificateAction=function resumesCertificateAction(e){return doRequestAction({"url":r.resumesCertificateUrl,"method":"POST","failToast":!0,"data":e})},t.resumesProjectAction=function resumesProjectAction(e){var t=a.default.getStorageSync(u.UserInfo);return doRequestAction({"url":r.resumesProjectUrl,"header":{"version":"1.0.1","content-type":"application/x-www-form-urlencoded","mid":t.userId,"uuid":t.uuid,"token":t.token,"time":t.tokenTime},"method":"POST","failToast":!0,"data":e})},t.addResumeAction=function addResumeAction(e){return doRequestAction({"url":r.addResumeUrl,"method":"POST","failToast":!0,"data":e})},t.checkAdcodeAction=function checkAdcodeAction(e){return doRequestAction({"url":r.checkAdcodeUrl,"method":"GET","failToast":!0,"data":e})},t.resumesGetDataAction=function resumesGetDataAction(){return doRequestAction({"url":r.resumesGetDataUrl,"method":"POST","failToast":!0})},t.resumesIntroduceAction=function resumesIntroduceAction(e){return doRequestAction({"url":r.resumesIntroduceUrl,"method":"POST","failToast":!0,"data":e})},t.resumesEditEndAction=function resumesEditEndAction(e){var t=a.default.getStorageSync(u.UserInfo);return doRequestAction({"url":r.resumesEditEndUrl,"method":"POST","failToast":!0,"header":{"version":"1.0.1","content-type":"application/x-www-form-urlencoded","mid":t.userId,"token":t.token,"time":t.tokenTime,"uuid":t.uuid},"data":e})},t.resumesDelProjectAction=function resumesDelProjectAction(e){return doRequestAction({"url":r.resumesDelProjectUrl,"method":"POST","failToast":!0,"data":e})},t.resumesTopAreasAction=function resumesTopAreasAction(){return doRequestAction({"url":r.resumesTopAreasUrl,"method":"POST","failToast":!0})},t.resumesTopConfigAction=function resumesTopConfigAction(){return doRequestAction({"url":r.resumesTopConfigUrl,"method":"POST","failToast":!0})},t.resumesDoTopAction=function resumesDoTopAction(e){return doRequestAction({"url":r.resumesDoTopUrl,"method":"POST","failToast":!0,"data":e})},t.resumesChangeTopStatusAction=function resumesChangeTopStatusAction(e){return doRequestAction({"url":r.resumesChangeTopStatusUrl,"method":"POST","failToast":!0,"data":e})},t.resumesEditImgAction=function resumesEditImgAction(e){return doRequestAction({"url":r.resumesEditImgUrl,"method":"POST","failToast":!0,"data":e})},t.resumesTopConfigV2Action=function resumesTopConfigV2Action(e){return doRequestAction({"url":r.resumesTopConfigV2Url,"method":"POST","failToast":!0,"data":e})},t.resumesDoTopV2Action=function resumesDoTopV2Action(e){return doRequestAction({"url":r.resumesDoTopV2Url,"method":"POST","failToast":!0,"data":e})},t.resumesUpdateTopResumeAction=function resumesUpdateTopResumeAction(e){return doRequestAction({"url":r.resumesUpdateTopResumeUrl,"method":"POST","failToast":!0,"data":e})},t.resumesComplainAction=function resumesComplainAction(e){return doRequestAction({"url":r.resumesComplainUrl,"method":"POST","failToast":!0,"data":e})},t.leavingMessageAction=function leavingMessageAction(e){return doRequestAction({"url":r.leavingMessageUrl,"method":"POST","failToast":!0,"data":e})},t.userAccountLogin=function userAccountLogin(e){return doRequestAction({"url":r.userAccountUrl,"method":"POST","failToast":!0,"data":e})},t.userTelCodeLogin=function userTelCodeLogin(e){return doRequestAction({"url":r.userTelCodeLogin,"method":"POST","failToast":!0,"data":e})},t.userDouyinRecharge=function userDouyinRecharge(e){return doRequestAction({"url":r.userDouyinRecharge,"method":"POST","data":e})},t.userCheckDouyinRecharge=function userCheckDouyinRecharge(e){return doRequestAction({"url":r.userCheckDouyinRecharge,"method":"POST","data":e})},t.updataPassword=function updataPassword(e){return doRequestAction({"url":r.updataPassword,"method":"POST","failToast":!0,"data":e})},t.queryAction=function queryAction(e){return doRequestAction({"url":r.realnameQueryUrl,"method":"POST","data":e})},t.getResumeAddInfoConfig=function getResumeAddInfoConfig(){return doRequestAction({"url":r.getResumeAddInfoConfig,"method":"POST"})},t.getRankRulesList=function getRankRulesList(){return doRequestAction({"url":r.getRankRulesList,"method":"POST"})},t.turntableIndex=function turntableIndex(){return doRequestAction({"url":r.turntableIndex,"method":"POST","title":"正在初始化数据"})},t.turntableDraw=function turntableDraw(){return doRequestAction({"url":r.turntableDraw,"method":"POST"})},t.turntableVideoEnd=function turntableVideoEnd(){return doRequestAction({"url":r.turntableVideoEnd,"method":"POST"})},t.memberTurntable=function memberTurntable(){return doRequestAction({"url":r.memberTurntable,"method":"POST"})};var a=_interopRequireDefault(n(0)),r=function _interopRequireWildcard(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(37)),s=n(2),o=_interopRequireDefault(n(4)),u=n(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function requestShowToast(e){e&&setTimeout(function(){(0,o.default)("网络错误，请求失败")},200)}var c=function getRequestHeaderInfoAction(){var e=function getRequestHeaderInfo(){var e=a.default.getStorageSync(u.UserInfo);return e.login?{"content-type":"application/x-www-form-urlencoded","mid":e.userId,"token":e.token,"time":e.tokenTime,"uuid":e.uuid,"version":s.VERSION}:{"content-type":"application/x-www-form-urlencoded","version":s.VERSION}}();return{"url":"","method":"GET","header":i({},e),"data":{},"loading":!0,"title":"数据加载中...","failToast":!0}};function doRequestAction(e){var r=i({},c(),e);r.loading&&a.default.showLoading({"title":r.title});var o=i({},r.data,{"wechat_token":s.TOKEN}),t=a.default.getStorageSync(u.UserInfo);return"POST"===r.method&&t.login&&(o.userId=t.userId,o.token=t.token,o.tokenTime=t.tokenTime),new Promise(function(t,n){a.default.request({"url":(/^http(s?):\/\//.test(r.url),r.url),"method":r.method,"header":r.header,"data":o,"success":function success(e){200===e.statusCode?t(e.data):(requestShowToast(r.failToast),n(e))},"fail":function fail(e){requestShowToast(r.failToast),n(e)},"complete":function complete(){r.loading&&a.default.hideLoading()}})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=t.MINIVERSION="douyin",o=t.MINICONFIG=n(62)("./"+r+".ts"),i=t.DEVREQUESTURL="https://miniapi.zhaogong.vrtbbs.com/",a=t.PROREQUESTURL="https://newyupaomini.54xiaoshuo.com/";t.REQUESTURL=i,t.UPLOADIMGURL=a+"index/upload/",t.ALIYUNCDN="http://cdn.yupao.com",t.ALIYUNCDNMINIIMG="/miniprogram/images/",t.IMGCDNURL="http://cdn.yupao.com/miniprogram/images/",t.SERVERPHONE="400-838-1888",t.VERSION="1.0.5",t.MAPKEY="20f12aae660c04de86f993d3eff590a0",t.MAXCACHECITYNUM=3,t.UserPublishAreaHistoryMaxNum=10,t.MemberMsgTimerInterval=6e4,t.CertificateMaxNum=3,t.CertificateImgMaxNum=3,t.ResumeMemberLabelsMaxNum=3,t.ProjectListMaxNum=5,t.ProjectImgMaxNum=6,t.INDEXPATH="/pages/index/index",t.PUBLISHRECRUIT="/pages/recruit/publish/index",t.PUBLISHRESUME="/pages/resume/publish/index",t.PUBLISHUSED="/pages/used/publish/index",t.REALNAMEPATH="/pages/realname/index",t.AUTHPATH="/pages/userauth/index",t.CODEAUTHPATH="/pages/login/index",t.PUBLISHEDRECRUIT="/pages/published/recruit/index",t.DownloadApp="https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile",t.BAIDU="baidu",t.DOUYIN="douyin",t.PAGETITLE=o.PAGETITLE,t.TOKEN=o.TOKEN,t.UNITID=o.UNITID,t.INVITESOURCE=o.INVITESOURCE,t.USESUBSCRIBEMESSAGE=o.USESUBSCRIBEMESSAGE,t.ISCANSHARE=o.ISCANSHARE},function(e,t,n){"use strict";e.exports=n(53).default,e.exports.default=e.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function Msg(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3e3;s.default.showToast({"title":e,"icon":"none","duration":t})},t.ShowActionModal=function ShowActionModal(e){var t=e.title,n=void 0===t?"温馨提示":t,r=e.confirmText,o=void 0===r?"确定":r,i=e.msg,a=e.success;s.default.showModal({"title":n,"content":"string"==typeof e?e:i,"showCancel":!1,"confirmText":o,"success":function success(){a&&a()}})},t.errMsg=function errMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"error"})},t.warnMsg=function warnMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"warning"})},t.successMsg=function successMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"success"})},t.showModalTip=function showModalTip(e){var t=e.title,n=void 0===t?"温馨提示":t,r=e.showCancel,o=void 0!==r&&r;s.default.showModal({"title":n,"content":e.tips,"showCancel":o,"success":function success(){e.callback&&e.callback()}})};var s=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0))},function(e,t,n){"use strict";var r,a,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":s(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=classNames.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}a={}.hasOwnProperty,e.exports?(classNames.default=classNames,e.exports=classNames):"object"===s(n(38))&&n(38)?void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r):window.classNames=classNames},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.UserInfo="userInfo",t.Areas="areaData",t.HistoryCities="historyCities",t.UserLocationCity="userLocationCity",t.UserListChooseCity="userListChooseCity",t.UserLastPublishArea="userLastPublishArea",t.UserPublishAreaHistory="userPublishAreaHistory",t.SearchList="searchList",t.UserLocation="userLocation",t.Introinfo="introinfo"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.isPhone=function isPhone(e){return/^1[0-9]{10}$/.test(e)},t.isNumber=isNumber,t.isVaildNumber=function isVaildNumber(e){var t=e.num,n=e.min,r=void 0===n?0:n,o=e.max,i=void 0===o?10:o;return!!isNumber(t)&&(r<=t&&t<=i)},t.randIntNumber=function randIntNumber(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;return Math.floor(Math.random()*(t-e))+e},t.getRandNumber=function getRandNumber(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;return e+Math.random()*(t-e)},t.isUrl=function isUrl(e){return/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(e)},t.isRequire=function isRequire(e){var t=e.replace(/\s+/g,"");return""!=t&&null!=t&&null!=t&&"null"!=t&&null!=t},t.isVaildVal=function isVaildVal(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:15,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,r=new RegExp("[\\u4E00-\\u9FFF]+");return n?r.test(e)&&e.length>=t&&e.length<=n:r.test(e)&&e.length>=t},t.isIdcard=function isIdcard(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},t.isType=function isType(e,t){var n=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return t?n==t:n},t.isIos=function isIos(){return"ios"===r.default.getSystemInfoSync().platform},t.isRequireLen=function isRequireLen(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:6;return""!=e&&null!=e&&null!=e&&e.length>=t},t.isChinese=function isChinese(e){if(new RegExp("[\\u4E00-\\u9FFF]+","g").test(e))return!0;return!1},t.allChinese=function allChinese(e){if(new RegExp("^[一-龥]{2,5}$").test(e))return!0;return!1};var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0));function isNumber(e){return/^[0-9]+$/.test(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.objDeepCopy=function objDeepCopy(e){var t=e instanceof Array?[]:{};for(var n in e)t[n]="object"===r(e[n])?objDeepCopy(e[n]):e[n];return t},t.userAuthLoction=function userAuthLoction(){return new Promise(function(o,e){var t=i.default.getStorageSync(u.UserLocationCity);t&&o(t),new s.default.AMapWX({"key":a.MAPKEY}).getRegeo({"success":function success(e){var t=e[0].regeocodeData.addressComponent.city,n="string"==typeof e[0].regeocodeData.addressComponent.city,r={"province":e[0].regeocodeData.addressComponent.province,"city":n?t:e[0].regeocodeData.addressComponent.province,"adcode":e[0].regeocodeData.addressComponent.adcode,"citycode":e[0].regeocodeData.addressComponent.citycode};i.default.setStorageSync(u.UserLocationCity,r),o(r)},"fail":function fail(){e()}})})},t.getAmapPoiList=function getAmapPoiList(e){return new Promise(function(t,n){new s.default.AMapWX({"key":a.MAPKEY}).getInputtips({"keywords":e,"success":function success(e){e?t(e.tips):n()},"fail":function fail(){n()}})})},t.userJumpPage=function userJumpPage(e){i.default.navigateTo({"url":e})},t.getPointNumber=function getPointNumber(e,t){return Math.floor(e/t*100)/100},t.getSystemInfo=function getSystemInfo(){return i.default.getSystemInfoSync().platform},t.recSerAuthLoction=function recSerAuthLoction(){return new Promise(function(t,e){new s.default.AMapWX({"key":a.MAPKEY}).getRegeo({"success":function success(e){t(e)},"fail":function fail(){e()}})})},t.userCancelAuth=function userCancelAuth(){i.default.navigateBack()},t.getLocation=function getLocation(){return(0,d.default)("位置获取中..."),new Promise(function(o,i){new s.default.AMapWX({"key":a.MAPKEY}).getRegeo({"type":"gcj02","success":function success(n){var r=n[0].regeocodeData.addressComponent,e={"adcode":r.adcode};(0,c.checkAdcodeAction)(e).then(function(e){if("ok"==e.errcode){var t={"province":e.province,"city":e.city,"adcode":r.adcode,"citycode":r.citycode,"address":n[0].name,"oadcode":r.adcode,"longitude":n[0].longitude+"","latitude":n[0].latitude+"","wardenryid":e.city,"regionone":""};o(t)}else(0,d.default)("定位失败,请重新定位"),i()}).catch(function(e){(0,d.default)("定位失败,请重新定位"),i(e)})},"fail":function fail(e){(0,d.default)("定位失败,请重新定位"),i(e)}})})},t.setClipboardData=setClipboardData,t.copyWechatNumber=function copyWechatNumber(e){setClipboardData(e,"微信号:"+e+"已复制到粘贴板，去微信-添加朋友-搜索框粘贴")},t.userCallPhone=function userCallPhone(e){i.default.makePhoneCall({"phoneNumber":e})},t.getUserShareMessage=function getUserShareMessage(){return{"title":"全国建筑工地招工平台","imageUrl":a.IMGCDNURL+"minishare.png"}};var i=_interopRequireDefault(n(0)),a=n(2),s=_interopRequireDefault(n(87)),u=n(6),c=n(1),o=n(4),d=_interopRequireDefault(o);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function setClipboardData(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"内容已成功复制到粘贴板";i.default.setClipboardData({"data":e,"success":function success(){i.default.hideToast(),(0,o.ShowActionModal)({"msg":t})}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.getCityInfo=function getCityInfo(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=_.length,r=!1;if(e){var o=_.filter(function(e){return-1!==t.city.indexOf(e.name)});if(o.length)return o[0];for(var i=0;i<n;i++){var a=_[i];if(a.has_children){for(var s=a.children,u=s.length,c=0;c<u;c++){var d=s[c];if(-1!==t.city.indexOf(d.name))return r=!0,d}if(r)break}}}else{var l=_.filter(function(e){return-1!==t.province.indexOf(e.name)});if(l.length)return l[0];for(var f=0;f<n;f++){var p=_[f];if(p.has_children){for(var m=p.children,h=m.length,y=0;y<h;y++){var g=m[y];if(-1!==t.city.indexOf(g.name)){var v={"id":p.id,"pid":p.pid,"ad_name":p.ad_name,"name":p.name};return r=!0,v}}if(r)break}}}return e?S:b},t.getLongAreaAdname=function getLongAreaAdname(e){if(!e)return"北京市";for(var t=!1,n=1,r=_.length-1;n<r&&!t;n++){if(-1!==e.indexOf(_[n].name))return _[n].ad_name;if(_[n].has_children)for(var o=_[n].children,i=0;i<0;i++)if(-1!==e.indexOf(o[i].name))return t=!0,o[i].ad_name}return"北京市"},t.getCityInfoById=function getCityInfoById(t){var e=0,n=0,r=!1,o=_.findIndex(function(e){return e.id==t});if(-1<o)return _[o];for(var i=0;i<_.length;i++){if(_[i].has_children)for(var a=_[i].children,s=0;s<a.length;s++){if(a[s].id==t){e=i,n=s,r=!0;break}}if(r)break}return r?_[e].children[n]:_[e]};var _=[{"id":"1","pid":"0","name":"全国","ad_name":"中国","has_children":0,"children":[]},{"id":"2","pid":"1","name":"北京","ad_name":"北京市","has_children":0,"children":[]},{"id":"3","pid":"1","name":"安徽","ad_name":"安徽省","has_children":1,"children":[{"id":"3","pid":"1","name":"安徽","ad_name":"安徽省"},{"id":"36","pid":"3","name":"安庆","ad_name":"安庆市"},{"id":"37","pid":"3","name":"蚌埠","ad_name":"蚌埠市"},{"id":"39","pid":"3","name":"池州","ad_name":"池州市"},{"id":"40","pid":"3","name":"滁州","ad_name":"滁州市"},{"id":"41","pid":"3","name":"阜阳","ad_name":"阜阳市"},{"id":"42","pid":"3","name":"淮北","ad_name":"淮北市"},{"id":"43","pid":"3","name":"淮南","ad_name":"淮南市"},{"id":"44","pid":"3","name":"黄山","ad_name":"黄山市"},{"id":"45","pid":"3","name":"六安","ad_name":"六安市"},{"id":"46","pid":"3","name":"马鞍山","ad_name":"马鞍山市"},{"id":"47","pid":"3","name":"宿州","ad_name":"宿州市"},{"id":"48","pid":"3","name":"铜陵","ad_name":"铜陵市"},{"id":"49","pid":"3","name":"芜湖","ad_name":"芜湖市"},{"id":"50","pid":"3","name":"宣城","ad_name":"宣城市"},{"id":"51","pid":"3","name":"亳州","ad_name":"亳州市"},{"id":"3401","pid":"3","name":"合肥","ad_name":"合肥市"}]},{"id":"4","pid":"1","name":"福建","ad_name":"福建省","has_children":1,"children":[{"id":"4","pid":"1","name":"福建","ad_name":"福建省"},{"id":"53","pid":"4","name":"福州","ad_name":"福州市"},{"id":"54","pid":"4","name":"龙岩","ad_name":"龙岩市"},{"id":"55","pid":"4","name":"南平","ad_name":"南平市"},{"id":"56","pid":"4","name":"宁德","ad_name":"宁德市"},{"id":"57","pid":"4","name":"莆田","ad_name":"莆田市"},{"id":"58","pid":"4","name":"泉州","ad_name":"泉州市"},{"id":"59","pid":"4","name":"三明","ad_name":"三明市"},{"id":"60","pid":"4","name":"厦门","ad_name":"厦门市"},{"id":"61","pid":"4","name":"漳州","ad_name":"漳州市"}]},{"id":"5","pid":"1","name":"甘肃","ad_name":"甘肃省","has_children":1,"children":[{"id":"5","pid":"1","name":"甘肃","ad_name":"甘肃省"},{"id":"62","pid":"5","name":"兰州","ad_name":"兰州市"},{"id":"63","pid":"5","name":"白银","ad_name":"白银市"},{"id":"64","pid":"5","name":"定西","ad_name":"定西市"},{"id":"65","pid":"5","name":"甘南","ad_name":"甘南藏族自治州"},{"id":"66","pid":"5","name":"嘉峪关","ad_name":"嘉峪关市"},{"id":"67","pid":"5","name":"金昌","ad_name":"金昌市"},{"id":"68","pid":"5","name":"酒泉","ad_name":"酒泉市"},{"id":"69","pid":"5","name":"临夏","ad_name":"临夏回族自治州"},{"id":"70","pid":"5","name":"陇南","ad_name":"陇南市"},{"id":"71","pid":"5","name":"平凉","ad_name":"平凉市"},{"id":"72","pid":"5","name":"庆阳","ad_name":"庆阳市"},{"id":"73","pid":"5","name":"天水","ad_name":"天水市"},{"id":"74","pid":"5","name":"武威","ad_name":"武威市"},{"id":"75","pid":"5","name":"张掖","ad_name":"张掖市"}]},{"id":"6","pid":"1","name":"广东","ad_name":"广东省","has_children":1,"children":[{"id":"6","pid":"1","name":"广东","ad_name":"广东省"},{"id":"76","pid":"6","name":"广州","ad_name":"广州市"},{"id":"77","pid":"6","name":"深圳","ad_name":"深圳市"},{"id":"78","pid":"6","name":"潮州","ad_name":"潮州市"},{"id":"79","pid":"6","name":"东莞","ad_name":"东莞市"},{"id":"80","pid":"6","name":"佛山","ad_name":"佛山市"},{"id":"81","pid":"6","name":"河源","ad_name":"河源市"},{"id":"82","pid":"6","name":"惠州","ad_name":"惠州市"},{"id":"83","pid":"6","name":"江门","ad_name":"江门市"},{"id":"84","pid":"6","name":"揭阳","ad_name":"揭阳市"},{"id":"85","pid":"6","name":"茂名","ad_name":"茂名市"},{"id":"86","pid":"6","name":"梅州","ad_name":"梅州市"},{"id":"87","pid":"6","name":"清远","ad_name":"清远市"},{"id":"88","pid":"6","name":"汕头","ad_name":"汕头市"},{"id":"89","pid":"6","name":"汕尾","ad_name":"汕尾市"},{"id":"90","pid":"6","name":"韶关","ad_name":"韶关市"},{"id":"91","pid":"6","name":"阳江","ad_name":"阳江市"},{"id":"92","pid":"6","name":"云浮","ad_name":"云浮市"},{"id":"93","pid":"6","name":"湛江","ad_name":"湛江市"},{"id":"94","pid":"6","name":"肇庆","ad_name":"肇庆市"},{"id":"95","pid":"6","name":"中山","ad_name":"中山市"},{"id":"96","pid":"6","name":"珠海","ad_name":"珠海市"}]},{"id":"7","pid":"1","name":"广西","ad_name":"广西壮族自治区","has_children":1,"children":[{"id":"7","pid":"1","name":"广西","ad_name":"广西壮族自治区"},{"id":"97","pid":"7","name":"南宁","ad_name":"南宁市"},{"id":"98","pid":"7","name":"桂林","ad_name":"桂林市"},{"id":"99","pid":"7","name":"百色","ad_name":"百色市"},{"id":"100","pid":"7","name":"北海","ad_name":"北海市"},{"id":"101","pid":"7","name":"崇左","ad_name":"崇左市"},{"id":"102","pid":"7","name":"防城港","ad_name":"防城港市"},{"id":"103","pid":"7","name":"贵港","ad_name":"贵港市"},{"id":"104","pid":"7","name":"河池","ad_name":"河池市"},{"id":"105","pid":"7","name":"贺州","ad_name":"贺州市"},{"id":"106","pid":"7","name":"来宾","ad_name":"来宾市"},{"id":"107","pid":"7","name":"柳州","ad_name":"柳州市"},{"id":"108","pid":"7","name":"钦州","ad_name":"钦州市"},{"id":"109","pid":"7","name":"梧州","ad_name":"梧州市"},{"id":"110","pid":"7","name":"玉林","ad_name":"玉林市"}]},{"id":"8","pid":"1","name":"贵州","ad_name":"贵州省","has_children":1,"children":[{"id":"8","pid":"1","name":"贵州","ad_name":"贵州省"},{"id":"111","pid":"8","name":"贵阳","ad_name":"贵阳市"},{"id":"112","pid":"8","name":"安顺","ad_name":"安顺市"},{"id":"113","pid":"8","name":"毕节","ad_name":"毕节市"},{"id":"114","pid":"8","name":"六盘水","ad_name":"六盘水市"},{"id":"115","pid":"8","name":"黔东南","ad_name":"黔东南苗族侗族自治州"},{"id":"116","pid":"8","name":"黔南","ad_name":"黔南布依族苗族自治州"},{"id":"117","pid":"8","name":"黔西南","ad_name":"黔西南布依族苗族自治州"},{"id":"118","pid":"8","name":"铜仁","ad_name":"铜仁市"},{"id":"119","pid":"8","name":"遵义","ad_name":"遵义市"}]},{"id":"9","pid":"1","name":"海南","ad_name":"海南省","has_children":1,"children":[{"id":"9","pid":"1","name":"海南","ad_name":"海南省"},{"id":"120","pid":"9","name":"海口","ad_name":"海口市"},{"id":"121","pid":"9","name":"三亚","ad_name":"三亚市"},{"id":"122","pid":"9","name":"白沙","ad_name":"白沙黎族自治县"},{"id":"123","pid":"9","name":"保亭","ad_name":"保亭黎族苗族自治县"},{"id":"124","pid":"9","name":"昌江","ad_name":"昌江"},{"id":"125","pid":"9","name":"澄迈县","ad_name":"澄迈县"},{"id":"126","pid":"9","name":"定安县","ad_name":"定安县"},{"id":"127","pid":"9","name":"东方","ad_name":"东方市"},{"id":"128","pid":"9","name":"乐东","ad_name":"乐东黎族自治县"},{"id":"129","pid":"9","name":"临高县","ad_name":"临高县"},{"id":"130","pid":"9","name":"陵水","ad_name":"陵水黎族自治县"},{"id":"131","pid":"9","name":"琼海","ad_name":"琼海市"},{"id":"132","pid":"9","name":"琼中","ad_name":"琼中黎族苗族自治县"},{"id":"133","pid":"9","name":"屯昌县","ad_name":"屯昌县"},{"id":"134","pid":"9","name":"万宁","ad_name":"万宁市"},{"id":"135","pid":"9","name":"文昌","ad_name":"文昌市"},{"id":"136","pid":"9","name":"五指山","ad_name":"五指山市"},{"id":"137","pid":"9","name":"儋州","ad_name":"儋州市"}]},{"id":"10","pid":"1","name":"河北","ad_name":"河北省","has_children":1,"children":[{"id":"10","pid":"1","name":"河北","ad_name":"河北省"},{"id":"138","pid":"10","name":"石家庄","ad_name":"石家庄市"},{"id":"139","pid":"10","name":"保定","ad_name":"保定市"},{"id":"140","pid":"10","name":"沧州","ad_name":"沧州市"},{"id":"141","pid":"10","name":"承德","ad_name":"承德市"},{"id":"142","pid":"10","name":"邯郸","ad_name":"邯郸市"},{"id":"143","pid":"10","name":"衡水","ad_name":"衡水市"},{"id":"144","pid":"10","name":"廊坊","ad_name":"廊坊市"},{"id":"145","pid":"10","name":"秦皇岛","ad_name":"秦皇岛市"},{"id":"146","pid":"10","name":"唐山","ad_name":"唐山市"},{"id":"147","pid":"10","name":"邢台","ad_name":"邢台市"},{"id":"148","pid":"10","name":"张家口","ad_name":"张家口市"}]},{"id":"11","pid":"1","name":"河南","ad_name":"河南省","has_children":1,"children":[{"id":"11","pid":"1","name":"河南","ad_name":"河南省"},{"id":"149","pid":"11","name":"郑州","ad_name":"郑州市"},{"id":"150","pid":"11","name":"洛阳","ad_name":"洛阳市"},{"id":"151","pid":"11","name":"开封","ad_name":"开封市"},{"id":"152","pid":"11","name":"安阳","ad_name":"安阳市"},{"id":"153","pid":"11","name":"鹤壁","ad_name":"鹤壁市"},{"id":"154","pid":"11","name":"济源","ad_name":"济源市"},{"id":"155","pid":"11","name":"焦作","ad_name":"焦作市"},{"id":"156","pid":"11","name":"南阳","ad_name":"南阳市"},{"id":"157","pid":"11","name":"平顶山","ad_name":"平顶山市"},{"id":"158","pid":"11","name":"三门峡","ad_name":"三门峡市"},{"id":"159","pid":"11","name":"商丘","ad_name":"商丘市"},{"id":"160","pid":"11","name":"新乡","ad_name":"新乡市"},{"id":"161","pid":"11","name":"信阳","ad_name":"信阳市"},{"id":"162","pid":"11","name":"许昌","ad_name":"许昌市"},{"id":"163","pid":"11","name":"周口","ad_name":"周口市"},{"id":"164","pid":"11","name":"驻马店","ad_name":"驻马店市"},{"id":"165","pid":"11","name":"漯河","ad_name":"漯河市"},{"id":"166","pid":"11","name":"濮阳","ad_name":"濮阳市"}]},{"id":"12","pid":"1","name":"黑龙江","ad_name":"黑龙江省","has_children":1,"children":[{"id":"12","pid":"1","name":"黑龙江","ad_name":"黑龙江省"},{"id":"167","pid":"12","name":"哈尔滨","ad_name":"哈尔滨市"},{"id":"168","pid":"12","name":"大庆","ad_name":"大庆市"},{"id":"169","pid":"12","name":"大兴安岭","ad_name":"大兴安岭地区"},{"id":"170","pid":"12","name":"鹤岗","ad_name":"鹤岗市"},{"id":"171","pid":"12","name":"黑河","ad_name":"黑河市"},{"id":"172","pid":"12","name":"鸡西","ad_name":"鸡西市"},{"id":"173","pid":"12","name":"佳木斯","ad_name":"佳木斯市"},{"id":"174","pid":"12","name":"牡丹江","ad_name":"牡丹江市"},{"id":"175","pid":"12","name":"七台河","ad_name":"七台河市"},{"id":"176","pid":"12","name":"齐齐哈尔","ad_name":"齐齐哈尔市"},{"id":"177","pid":"12","name":"双鸭山","ad_name":"双鸭山市"},{"id":"178","pid":"12","name":"绥化","ad_name":"绥化市"},{"id":"179","pid":"12","name":"伊春","ad_name":"伊春市"}]},{"id":"13","pid":"1","name":"湖北","ad_name":"湖北省","has_children":1,"children":[{"id":"13","pid":"1","name":"湖北","ad_name":"湖北省"},{"id":"180","pid":"13","name":"武汉","ad_name":"武汉市"},{"id":"181","pid":"13","name":"仙桃","ad_name":"仙桃市"},{"id":"182","pid":"13","name":"鄂州","ad_name":"鄂州市"},{"id":"183","pid":"13","name":"黄冈","ad_name":"黄冈市"},{"id":"184","pid":"13","name":"黄石","ad_name":"黄石市"},{"id":"185","pid":"13","name":"荆门","ad_name":"荆门市"},{"id":"186","pid":"13","name":"荆州","ad_name":"荆州市"},{"id":"187","pid":"13","name":"潜江","ad_name":"潜江市"},{"id":"188","pid":"13","name":"神农架林区","ad_name":"神农架林区"},{"id":"189","pid":"13","name":"十堰","ad_name":"十堰市"},{"id":"190","pid":"13","name":"随州","ad_name":"随州市"},{"id":"191","pid":"13","name":"天门","ad_name":"天门市"},{"id":"192","pid":"13","name":"咸宁","ad_name":"咸宁市"},{"id":"193","pid":"13","name":"襄阳","ad_name":"襄阳市"},{"id":"194","pid":"13","name":"孝感","ad_name":"孝感市"},{"id":"195","pid":"13","name":"宜昌","ad_name":"宜昌市"},{"id":"196","pid":"13","name":"恩施","ad_name":"恩施"}]},{"id":"14","pid":"1","name":"湖南","ad_name":"湖南省","has_children":1,"children":[{"id":"14","pid":"1","name":"湖南","ad_name":"湖南省"},{"id":"197","pid":"14","name":"长沙","ad_name":"长沙市"},{"id":"198","pid":"14","name":"张家界","ad_name":"张家界市"},{"id":"199","pid":"14","name":"常德","ad_name":"常德市"},{"id":"200","pid":"14","name":"郴州","ad_name":"郴州市"},{"id":"201","pid":"14","name":"衡阳","ad_name":"衡阳市"},{"id":"202","pid":"14","name":"怀化","ad_name":"怀化市"},{"id":"203","pid":"14","name":"娄底","ad_name":"娄底市"},{"id":"204","pid":"14","name":"邵阳","ad_name":"邵阳市"},{"id":"205","pid":"14","name":"湘潭","ad_name":"湘潭市"},{"id":"206","pid":"14","name":"湘西","ad_name":"湘西土家族苗族自治州"},{"id":"207","pid":"14","name":"益阳","ad_name":"益阳市"},{"id":"208","pid":"14","name":"永州","ad_name":"永州市"},{"id":"209","pid":"14","name":"岳阳","ad_name":"岳阳市"},{"id":"210","pid":"14","name":"株洲","ad_name":"株洲市"}]},{"id":"15","pid":"1","name":"吉林","ad_name":"吉林省","has_children":1,"children":[{"id":"15","pid":"1","name":"吉林","ad_name":"吉林省"},{"id":"211","pid":"15","name":"长春","ad_name":"长春市"},{"id":"212","pid":"15","name":"吉林","ad_name":"吉林市"},{"id":"213","pid":"15","name":"白城","ad_name":"白城市"},{"id":"214","pid":"15","name":"白山","ad_name":"白山市"},{"id":"215","pid":"15","name":"辽源","ad_name":"辽源市"},{"id":"216","pid":"15","name":"四平","ad_name":"四平市"},{"id":"217","pid":"15","name":"松原","ad_name":"松原市"},{"id":"218","pid":"15","name":"通化","ad_name":"通化市"},{"id":"219","pid":"15","name":"延边","ad_name":"延边朝鲜族自治州"}]},{"id":"16","pid":"1","name":"江苏","ad_name":"江苏省","has_children":1,"children":[{"id":"16","pid":"1","name":"江苏","ad_name":"江苏省"},{"id":"220","pid":"16","name":"南京","ad_name":"南京市"},{"id":"221","pid":"16","name":"苏州","ad_name":"苏州市"},{"id":"222","pid":"16","name":"无锡","ad_name":"无锡市"},{"id":"223","pid":"16","name":"常州","ad_name":"常州市"},{"id":"224","pid":"16","name":"淮安","ad_name":"淮安市"},{"id":"225","pid":"16","name":"连云港","ad_name":"连云港市"},{"id":"226","pid":"16","name":"南通","ad_name":"南通市"},{"id":"227","pid":"16","name":"宿迁","ad_name":"宿迁市"},{"id":"228","pid":"16","name":"泰州","ad_name":"泰州市"},{"id":"229","pid":"16","name":"徐州","ad_name":"徐州市"},{"id":"230","pid":"16","name":"盐城","ad_name":"盐城市"},{"id":"231","pid":"16","name":"扬州","ad_name":"扬州市"},{"id":"232","pid":"16","name":"镇江","ad_name":"镇江市"}]},{"id":"17","pid":"1","name":"江西","ad_name":"江西省","has_children":1,"children":[{"id":"17","pid":"1","name":"江西","ad_name":"江西省"},{"id":"233","pid":"17","name":"南昌","ad_name":"南昌市"},{"id":"234","pid":"17","name":"抚州","ad_name":"抚州市"},{"id":"235","pid":"17","name":"赣州","ad_name":"赣州市"},{"id":"236","pid":"17","name":"吉安","ad_name":"吉安市"},{"id":"237","pid":"17","name":"景德镇","ad_name":"景德镇市"},{"id":"238","pid":"17","name":"九江","ad_name":"九江市"},{"id":"239","pid":"17","name":"萍乡","ad_name":"萍乡市"},{"id":"240","pid":"17","name":"上饶","ad_name":"上饶市"},{"id":"241","pid":"17","name":"新余","ad_name":"新余市"},{"id":"242","pid":"17","name":"宜春","ad_name":"宜春市"},{"id":"243","pid":"17","name":"鹰潭","ad_name":"鹰潭市"}]},{"id":"18","pid":"1","name":"辽宁","ad_name":"辽宁省","has_children":1,"children":[{"id":"18","pid":"1","name":"辽宁","ad_name":"辽宁省"},{"id":"244","pid":"18","name":"沈阳","ad_name":"沈阳市"},{"id":"245","pid":"18","name":"大连","ad_name":"大连市"},{"id":"246","pid":"18","name":"鞍山","ad_name":"鞍山市"},{"id":"247","pid":"18","name":"本溪","ad_name":"本溪市"},{"id":"248","pid":"18","name":"朝阳","ad_name":"朝阳市"},{"id":"249","pid":"18","name":"丹东","ad_name":"丹东市"},{"id":"250","pid":"18","name":"抚顺","ad_name":"抚顺市"},{"id":"251","pid":"18","name":"阜新","ad_name":"阜新市"},{"id":"252","pid":"18","name":"葫芦岛","ad_name":"葫芦岛市"},{"id":"253","pid":"18","name":"锦州","ad_name":"锦州市"},{"id":"254","pid":"18","name":"辽阳","ad_name":"辽阳市"},{"id":"255","pid":"18","name":"盘锦","ad_name":"盘锦市"},{"id":"256","pid":"18","name":"铁岭","ad_name":"铁岭市"},{"id":"257","pid":"18","name":"营口","ad_name":"营口市"}]},{"id":"19","pid":"1","name":"内蒙古","ad_name":"内蒙古自治区","has_children":1,"children":[{"id":"19","pid":"1","name":"内蒙古","ad_name":"内蒙古自治区"},{"id":"258","pid":"19","name":"呼和浩特","ad_name":"呼和浩特市"},{"id":"259","pid":"19","name":"阿拉善盟","ad_name":"阿拉善盟"},{"id":"260","pid":"19","name":"巴彦淖尔盟","ad_name":"巴彦淖尔市"},{"id":"261","pid":"19","name":"包头","ad_name":"包头市"},{"id":"262","pid":"19","name":"赤峰","ad_name":"赤峰市"},{"id":"263","pid":"19","name":"鄂尔多斯","ad_name":"鄂尔多斯市"},{"id":"264","pid":"19","name":"呼伦贝尔","ad_name":"呼伦贝尔市"},{"id":"265","pid":"19","name":"通辽","ad_name":"通辽市"},{"id":"266","pid":"19","name":"乌海","ad_name":"乌海市"},{"id":"267","pid":"19","name":"乌兰察布市","ad_name":"乌兰察布市"},{"id":"268","pid":"19","name":"锡林郭勒盟","ad_name":"锡林郭勒盟"},{"id":"269","pid":"19","name":"兴安盟","ad_name":"兴安盟"}]},{"id":"20","pid":"1","name":"宁夏","ad_name":"宁夏回族自治区","has_children":1,"children":[{"id":"20","pid":"1","name":"宁夏","ad_name":"宁夏回族自治区"},{"id":"270","pid":"20","name":"银川","ad_name":"银川市"},{"id":"271","pid":"20","name":"固原","ad_name":"固原市"},{"id":"272","pid":"20","name":"石嘴山","ad_name":"石嘴山市"},{"id":"273","pid":"20","name":"吴忠","ad_name":"吴忠市"},{"id":"274","pid":"20","name":"中卫","ad_name":"中卫市"}]},{"id":"21","pid":"1","name":"青海","ad_name":"青海省","has_children":1,"children":[{"id":"21","pid":"1","name":"青海","ad_name":"青海省"},{"id":"275","pid":"21","name":"西宁","ad_name":"西宁市"},{"id":"276","pid":"21","name":"果洛","ad_name":"果洛藏族自治州"},{"id":"277","pid":"21","name":"海北","ad_name":"海北藏族自治州"},{"id":"278","pid":"21","name":"海东","ad_name":"海东市"},{"id":"279","pid":"21","name":"海南","ad_name":"海南藏族自治州"},{"id":"280","pid":"21","name":"海西","ad_name":"海西蒙古族藏族自治州"},{"id":"281","pid":"21","name":"黄南","ad_name":"黄南藏族自治州"},{"id":"282","pid":"21","name":"玉树","ad_name":"玉树"}]},{"id":"22","pid":"1","name":"山东","ad_name":"山东省","has_children":1,"children":[{"id":"22","pid":"1","name":"山东","ad_name":"山东省"},{"id":"283","pid":"22","name":"济南","ad_name":"济南市"},{"id":"284","pid":"22","name":"青岛","ad_name":"青岛市"},{"id":"285","pid":"22","name":"滨州","ad_name":"滨州市"},{"id":"286","pid":"22","name":"德州","ad_name":"德州市"},{"id":"287","pid":"22","name":"东营","ad_name":"东营市"},{"id":"288","pid":"22","name":"菏泽","ad_name":"菏泽市"},{"id":"289","pid":"22","name":"济宁","ad_name":"济宁市"},{"id":"291","pid":"22","name":"聊城","ad_name":"聊城市"},{"id":"292","pid":"22","name":"临沂","ad_name":"临沂市"},{"id":"293","pid":"22","name":"日照","ad_name":"日照市"},{"id":"294","pid":"22","name":"泰安","ad_name":"泰安市"},{"id":"295","pid":"22","name":"威海","ad_name":"威海市"},{"id":"296","pid":"22","name":"潍坊","ad_name":"潍坊市"},{"id":"297","pid":"22","name":"烟台","ad_name":"烟台市"},{"id":"298","pid":"22","name":"枣庄","ad_name":"枣庄市"},{"id":"299","pid":"22","name":"淄博","ad_name":"淄博市"}]},{"id":"23","pid":"1","name":"山西","ad_name":"山西省","has_children":1,"children":[{"id":"23","pid":"1","name":"山西","ad_name":"山西省"},{"id":"300","pid":"23","name":"太原","ad_name":"太原市"},{"id":"301","pid":"23","name":"长治","ad_name":"长治市"},{"id":"302","pid":"23","name":"大同","ad_name":"大同市"},{"id":"303","pid":"23","name":"晋城","ad_name":"晋城市"},{"id":"304","pid":"23","name":"晋中","ad_name":"晋中市"},{"id":"305","pid":"23","name":"临汾","ad_name":"临汾市"},{"id":"306","pid":"23","name":"吕梁","ad_name":"吕梁市"},{"id":"307","pid":"23","name":"朔州","ad_name":"朔州市"},{"id":"308","pid":"23","name":"忻州","ad_name":"忻州市"},{"id":"309","pid":"23","name":"阳泉","ad_name":"阳泉市"},{"id":"310","pid":"23","name":"运城","ad_name":"运城市"}]},{"id":"24","pid":"1","name":"陕西","ad_name":"陕西省","has_children":1,"children":[{"id":"24","pid":"1","name":"陕西","ad_name":"陕西省"},{"id":"311","pid":"24","name":"西安","ad_name":"西安市"},{"id":"312","pid":"24","name":"安康","ad_name":"安康市"},{"id":"313","pid":"24","name":"宝鸡","ad_name":"宝鸡市"},{"id":"314","pid":"24","name":"汉中","ad_name":"汉中市"},{"id":"315","pid":"24","name":"商洛","ad_name":"商洛市"},{"id":"316","pid":"24","name":"铜川","ad_name":"铜川市"},{"id":"317","pid":"24","name":"渭南","ad_name":"渭南市"},{"id":"318","pid":"24","name":"咸阳","ad_name":"咸阳市"},{"id":"319","pid":"24","name":"延安","ad_name":"延安市"},{"id":"320","pid":"24","name":"榆林","ad_name":"榆林市"}]},{"id":"25","pid":"1","name":"上海","ad_name":"上海市","has_children":0,"children":[]},{"id":"26","pid":"1","name":"四川","ad_name":"四川省","has_children":1,"children":[{"id":"26","pid":"1","name":"四川","ad_name":"四川省"},{"id":"322","pid":"26","name":"成都","ad_name":"成都市"},{"id":"323","pid":"26","name":"绵阳","ad_name":"绵阳市"},{"id":"324","pid":"26","name":"阿坝","ad_name":"阿坝藏族羌族自治州"},{"id":"325","pid":"26","name":"巴中","ad_name":"巴中市"},{"id":"326","pid":"26","name":"达州","ad_name":"达州市"},{"id":"327","pid":"26","name":"德阳","ad_name":"德阳市"},{"id":"328","pid":"26","name":"甘孜","ad_name":"甘孜藏族自治州"},{"id":"329","pid":"26","name":"广安","ad_name":"广安市"},{"id":"330","pid":"26","name":"广元","ad_name":"广元市"},{"id":"331","pid":"26","name":"乐山","ad_name":"乐山市"},{"id":"332","pid":"26","name":"凉山","ad_name":"凉山彝族自治州"},{"id":"333","pid":"26","name":"眉山","ad_name":"眉山市"},{"id":"334","pid":"26","name":"南充","ad_name":"南充市"},{"id":"335","pid":"26","name":"内江","ad_name":"内江市"},{"id":"336","pid":"26","name":"攀枝花","ad_name":"攀枝花市"},{"id":"337","pid":"26","name":"遂宁","ad_name":"遂宁市"},{"id":"338","pid":"26","name":"雅安","ad_name":"雅安市"},{"id":"339","pid":"26","name":"宜宾","ad_name":"宜宾市"},{"id":"340","pid":"26","name":"资阳","ad_name":"资阳市"},{"id":"341","pid":"26","name":"自贡","ad_name":"自贡市"},{"id":"342","pid":"26","name":"泸州","ad_name":"泸州市"}]},{"id":"27","pid":"1","name":"天津","ad_name":"天津市","has_children":0,"children":[]},{"id":"28","pid":"1","name":"西藏","ad_name":"西藏自治区","has_children":1,"children":[{"id":"28","pid":"1","name":"西藏","ad_name":"西藏自治区"},{"id":"344","pid":"28","name":"拉萨","ad_name":"拉萨市"},{"id":"345","pid":"28","name":"阿里","ad_name":"阿里地区"},{"id":"346","pid":"28","name":"昌都","ad_name":"昌都市"},{"id":"347","pid":"28","name":"林芝","ad_name":"林芝市"},{"id":"348","pid":"28","name":"那曲","ad_name":"那曲市"},{"id":"349","pid":"28","name":"日喀则","ad_name":"日喀则市"},{"id":"350","pid":"28","name":"山南","ad_name":"山南市"}]},{"id":"29","pid":"1","name":"新疆","ad_name":"新疆维吾尔自治区","has_children":1,"children":[{"id":"29","pid":"1","name":"新疆","ad_name":"新疆维吾尔自治区"},{"id":"351","pid":"29","name":"乌鲁木齐","ad_name":"乌鲁木齐市"},{"id":"352","pid":"29","name":"阿克苏","ad_name":"阿克苏地区"},{"id":"353","pid":"29","name":"阿拉尔","ad_name":"阿拉尔市"},{"id":"354","pid":"29","name":"巴音郭楞","ad_name":"巴音郭楞蒙古自治州"},{"id":"355","pid":"29","name":"博尔塔拉","ad_name":"博尔塔拉蒙古自治州"},{"id":"356","pid":"29","name":"昌吉","ad_name":"昌吉回族自治州"},{"id":"357","pid":"29","name":"哈密","ad_name":"哈密市"},{"id":"358","pid":"29","name":"和田","ad_name":"和田地区"},{"id":"359","pid":"29","name":"喀什","ad_name":"喀什地区"},{"id":"360","pid":"29","name":"克拉玛依","ad_name":"克拉玛依市"},{"id":"361","pid":"29","name":"克孜勒苏","ad_name":"克孜勒苏柯尔克孜自治州"},{"id":"362","pid":"29","name":"石河子","ad_name":"石河子市"},{"id":"363","pid":"29","name":"图木舒克","ad_name":"图木舒克市"},{"id":"364","pid":"29","name":"吐鲁番","ad_name":"吐鲁番市"},{"id":"365","pid":"29","name":"五家渠","ad_name":"五家渠市"},{"id":"366","pid":"29","name":"伊犁","ad_name":"伊犁哈萨克自治州"},{"id":"6156","pid":"29","name":"塔城地区","ad_name":"塔城地区"},{"id":"6157","pid":"29","name":"阿勒泰地区","ad_name":"阿勒泰地区"}]},{"id":"30","pid":"1","name":"云南","ad_name":"云南省","has_children":1,"children":[{"id":"30","pid":"1","name":"云南","ad_name":"云南省"},{"id":"367","pid":"30","name":"昆明","ad_name":"昆明市"},{"id":"368","pid":"30","name":"怒江","ad_name":"怒江"},{"id":"369","pid":"30","name":"普洱","ad_name":"普洱市"},{"id":"370","pid":"30","name":"丽江","ad_name":"丽江市"},{"id":"371","pid":"30","name":"保山","ad_name":"保山市"},{"id":"372","pid":"30","name":"楚雄","ad_name":"楚雄彝族自治州"},{"id":"373","pid":"30","name":"大理","ad_name":"大理白族自治州"},{"id":"374","pid":"30","name":"德宏","ad_name":"德宏傣族景颇族自治州"},{"id":"375","pid":"30","name":"迪庆","ad_name":"迪庆藏族自治州"},{"id":"376","pid":"30","name":"红河","ad_name":"红河哈尼族彝族自治州"},{"id":"377","pid":"30","name":"临沧","ad_name":"临沧市"},{"id":"378","pid":"30","name":"曲靖","ad_name":"曲靖市"},{"id":"379","pid":"30","name":"文山","ad_name":"文山壮族苗族自治州"},{"id":"380","pid":"30","name":"西双版纳","ad_name":"西双版纳傣族自治州"},{"id":"381","pid":"30","name":"玉溪","ad_name":"玉溪市"},{"id":"382","pid":"30","name":"昭通","ad_name":"昭通市"}]},{"id":"31","pid":"1","name":"浙江","ad_name":"浙江省","has_children":1,"children":[{"id":"31","pid":"1","name":"浙江","ad_name":"浙江省"},{"id":"383","pid":"31","name":"杭州","ad_name":"杭州市"},{"id":"384","pid":"31","name":"湖州","ad_name":"湖州市"},{"id":"385","pid":"31","name":"嘉兴","ad_name":"嘉兴市"},{"id":"386","pid":"31","name":"金华","ad_name":"金华市"},{"id":"387","pid":"31","name":"丽水","ad_name":"丽水市"},{"id":"388","pid":"31","name":"宁波","ad_name":"宁波市"},{"id":"389","pid":"31","name":"绍兴","ad_name":"绍兴市"},{"id":"390","pid":"31","name":"台州","ad_name":"台州市"},{"id":"391","pid":"31","name":"温州","ad_name":"温州市"},{"id":"392","pid":"31","name":"舟山","ad_name":"舟山市"},{"id":"393","pid":"31","name":"衢州","ad_name":"衢州市"}]},{"id":"32","pid":"1","name":"重庆","ad_name":"重庆市","has_children":0,"children":[]}],b=t.AREACHINA=_[0],S=t.AREABEIJING=_[1];t.default=_},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(0);(function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}})(i);function Kg(n){if(n&&"object"===(void 0===n?"undefined":o(n))){var r="";return Object.keys(n).forEach(function(e){var t=e.replace(/([A-Z])/g,"-$1").toLowerCase();r+=t+":"+n[e]+";"}),r}return n&&"string"==typeof n?n:""}var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":o(e))&&t&&"object"===(void 0===t?"undefined":o(t))?Object.assign({},e,t):Kg(e)+Kg(t)}}]),AtComponent.options={"addGlobalClass":!0},AtComponent);function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}t.default=a},function(e,t,n){"use strict";e.exports=n(208)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.SendTypeNo=t.SendTypeHave=void 0;var d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function useCode(e){var t=(0,l.useState)(!1!==e&&!!e),n=d(t,2),r=n[0],o=n[1],i=!1===e?y:h,a=(0,l.useState)(g),s=d(a,2),u=s[0],c=s[1];return{"disabled":r,"text":u,"userGetCode":function userGetCode(e){if(!r)if((0,f.isPhone)(e)){var t={"tel":e,"sendType":i};o(!0),(0,m.getUserPhoneCode)(t).then(function(e){if((0,p.default)(e.errmsg,2500),"ok"==e.errcode){var t=e.refresh||60;c(t+"s后重新获取");var n=setInterval(function(){if(0===--t)return o(!1),clearInterval(n),c(g),!1;c(t+"s后重新获取")},1e3)}})}else(0,p.default)("请先输入正确的手机号码")}}};var l=n(0),f=n(7),p=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(4)),m=n(1);var h=t.SendTypeHave="have",y=t.SendTypeNo="no",g="获取验证码"},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.typeInTabbar=function typeInTabbar(e){return s.includes(e)};var r=t.HOME="home",o=t.RECRUIT="recruit",i=t.RESUME="resume",a=t.MEMBER="member",s=(t.USED="used",[r,o,i,a])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.SubscribeToNews=function SubscribeToNews(n,r){if(!s.USESUBSCRIBEMESSAGE)return void r();var o=i.default.getStorageSync(a.UserInfo);!0===i.default.canIUse("requestSubscribeMessage")?i.default.requestSubscribeMessage({"tmplIds":[c.default[n].id],"success":function success(e){if((r(),"requestSubscribeMessage:ok"==e.errMsg)&&"accept"==e[c.default[n].id]){var t={"userId":o.userId,"token":o.token,"tokenTime":o.tokenTime,"type":c.default[n].type};(0,u.leavingMessageAction)(t)}}}):r()};var i=_interopRequireDefault(n(0)),a=n(6),s=n(2),u=n(1),c=_interopRequireDefault(n(107));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function UploadImgAction(){var n=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.UPLOADIMGURL)||s.UPLOADIMGURL;return new Promise(function(t){i.default.chooseImage({"count":1,"sizeType":["compressed"],"sourceType":["album","camera"],"success":function success(e){AppUploadImg(t,e,n)}})})},t.CameraAndAlbum=function CameraAndAlbum(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.UPLOADIMGURL;return new Promise(function(n){i.default.showActionSheet({"itemList":["拍照","从相册中选择"]}).then(function(e){var t=e.tapIndex;i.default.chooseImage({"count":1,"sizeType":["compressed"],"sourceType":0===t?["camera"]:["album"],"success":function success(e){AppUploadImg(n,e,r)}})})})};var i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),a=n(6),s=n(2);function AppUploadImg(n,e,t){var r=2<arguments.length&&void 0!==t?t:s.UPLOADIMGURL,o=i.default.getStorageSync(a.UserInfo);i.default.showLoading({"title":"图片上传中"}),i.default.uploadFile({"url":r,"filePath":e.tempFilePaths[0],"header":{"userid":o?o.userId:""},"name":"file","success":function success(e){var t=JSON.parse(e.data);i.default.showToast({"title":t.errmsg,"icon":"none","duration":2e3}),"ok"==t.errcode&&n(t)},"fail":function fail(){i.default.showToast({"title":"网络错误，上传失败！","icon":"none","duration":2e3})},"complete":function complete(){i.default.hideLoading()}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setAreaInfo=function setAreaInfo(e){return{"type":r.SETAREAINFO,"data":e}},t.getAreaInfo=function getAreaInfo(){return{"type":r.GETAREAINFO}},t.setArea=function setArea(e){return{"type":r.SETAREA,"data":e}},t.getArea=function getArea(){return{"type":r.GETAREA}},t.setPositionStaus=function setPositionStaus(e){return{"type":r.SETPOSITIONSTATUS,"data":e}};var r=n(30)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.AreaPickerKey="area",t.ClassifyPickerKey="classify",t.FilterPickerKey="filter",t.MemberPickerKey="member",t.ResumeFilterPickerKey="resumefilter"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function useResume(){var y=(0,Te.useDispatch)(),e=(0,Te.useSelector)(function(e){return e.User.login}),t=(0,Te.useSelector)(function(e){return e.resumeData}),n=(0,ge.useState)(t.info),r=ye(n,2),o=r[0],g=r[1],i=(0,ge.useState)(t.introducesData),a=ye(i,2),s=a[0],v=a[1],u=(0,ge.useState)(t.projectData),c=ye(u,2),d=c[0],_=c[1],l=(0,ge.useState)(t.certificates),f=ye(l,2),p=f[0],b=f[1],m=(0,ge.useState)(be.RESUME_TOP_DATA),h=ye(m,2),S=h[0],T=h[1],R=(0,ge.useState)(0),E=ye(R,2),C=E[0],A=E[1],U=(0,ge.useState)(0),P=ye(U,2),w=P[0],O=P[1],j=(0,ge.useState)(0),k=ye(j,2),I=k[0],x=k[1],L=(0,ge.useState)(0),M=ye(L,2),D=M[0],N=M[1],F=(0,ge.useState)([]),q=ye(F,2),$=q[0],G=q[1],Q=(0,ge.useState)(0),B=ye(Q,2),W=B[0],H=B[1],V=(0,ge.useState)(""),z=ye(V,2),Y=z[0],K=z[1],X=(0,ge.useState)(""),J=ye(X,2),Z=J[0],ee=J[1],te=(0,ge.useState)(""),ne=ye(te,2),re=ne[0],oe=ne[1],ie=(0,ge.useState)(0),ae=ye(ie,2),se=ae[0],ue=ae[1],ce=(0,ge.useState)(0),de=ye(ce,2),le=de[0],fe=de[1];(0,ge.useEffect)(function(){pe()},[e]),(0,ge.useEffect)(function(){t.isSet&&(g(t.info),v(t.introducesData),_(t.projectData),b(t.certificates))},[t]);var pe=function initResumeData(){e&&(0,_e.resumeListAction)().then(function(e){if(200===e.errcode){var t=void 0,n=0<(t=e.data.info.birthday?(new Date).getFullYear()-e.data.info.birthday.split("-")[0]:0)?t+"岁":"未填写";e.data.info.age=n;var r=he({},be.INFODATA_DATA);r=he({},r,e.data.info),g(he({},r)),y((0,Re.setAreaInfo)({"title":"","location":"","adcode":"","info":"","provice":"","city":""}));for(var o=[],i=[],a=[].concat(_toConsumableArray(e.data.project)),s=0;s<a.length;s++)a[s].endTime=new Date(a[s].completion_time).getTime(),0!=a[s].image.length?(a[s].index=s,o.push(a[s])):(a[s].index=s,i.push(a[s]));var u="";if(0<e.data.project.length)for(var c=0;c<e.data.project.length;c++){u=e.data.project[c].check,e.data.project[c].check="0";break}ee(u);var d="";if(e.data.certificates.length)for(var l=0;l<e.data.certificates.length;l++){d=e.data.certificates[l].check,e.data.certificates[l].check="0";break}oe(d);var f=o.sort(me("endTime")),p=i.sort(me("endTime")),m=[].concat(_toConsumableArray(f),_toConsumableArray(p));m.length&&(new Date(m[0].completion_time).getTime()/864e5<parseInt(((new Date).getTime()/864e5).toString())?m.length&&(m[0].completion_timeTitle="zhijing"):m[0].completion_timeTitle="zhijin"),_([].concat(_toConsumableArray(m))),A(e.data.is_introduces),O(e.data.project_count),x(e.data.certificate_count),N(e.data.content&&e.data.content.show_tips||0),G(e.data.status),K(e.data.info.check);var h=he({},be.INTRODUCERS_DATA);h=he({},h,e.data.introduces),ue(e.data.fail_project),fe(e.data.fail_certificate),v(he({},h)),b([].concat(_toConsumableArray(e.data.certificates))),T(he({},e.data.resume_top)),y((0,Se.setUseResume)({"info":e.data.info,"introducesData":e.data.introduces,"certificates":e.data.certificates,"projectData":m,"resume_uuid":e.data.info&&e.data.info.uuid||"","isSet":!0}))}else(0,Ce.default)(e.errmsg)})},me=function projectSort(o){return function(e,t){var n=e[o],r=t[o];return n<r?1:r<n?-1:0}};return{"infoData":o,"introducesData":s,"projectData":d,"certificates":p,"resume_top":S,"initResumeData":pe,"is_introduces":C,"project_count":w,"certificate_count":I,"show_tips":D,"selectData":$,"selectDataIndex":W,"handleSelectData":function handleSelectData(){if("2"==Y){for(var e=[],t=[],n=0;n<$.length;n++)e.push($[n].name);for(var r=0;r<$.length;r++)t.push($[r].id);ve.default.showActionSheet({"itemList":e,"success":function success(e){W!=e.tapIndex&&(H(e.tapIndex),(0,_e.resumesEditEndAction)({"type":t[e.tapIndex],"resume_uuid":o.uuid}).then(function(e){"ok"==e.errcode?((0,Ee.ShowActionModal)({"title":"温馨提示","msg":e.errmsg}),pe()):(0,Ee.ShowActionModal)({"title":"温馨提示","msg":e.errmsg})}))}})}else{if("1"==Y)return void(0,Ee.ShowActionModal)({"title":"温馨提示","msg":"审核中请耐心等待"});if("0"==Y)return void(0,Ee.ShowActionModal)({"title":"温馨提示","msg":"审核未通过，请修改信息"})}},"isModifySkill":re,"isModifyProject":Z,"projectNum":se,"certificatesNum":le}};var ge=n(0),ve=_interopRequireDefault(ge),_e=n(1),be=n(35),Se=n(177),Te=n(3),Re=n(17),Ee=n(4),Ce=_interopRequireDefault(Ee);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.changeTabbar=function changeTabbar(e){return{"type":e}}},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setFilter=function setFilter(e){return{"type":r.SET,"data":e}},t.getFilter=function getFilter(){return{"type":r.GET}};var r=n(29)},function(e,t,n){"use strict";e.exports=n(49).default,e.exports.default=e.exports},function(e,t,n){"use strict";var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{"value":!0});function im(){return Math.random().toString(36).substring(7).split("").join(".")}var d=function _interopDefault(e){return e&&"object"===(void 0===e?"undefined":c(e))&&"default"in e?e.default:e}(n(55)),l={"INIT":"@@redux/INIT"+im(),"REPLACE":"@@redux/REPLACE"+im(),"PROBE_UNKNOWN_ACTION":function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+im()}};function isPlainObject(e){if("object"===(void 0===e?"undefined":c(e))&&null!==e){for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}}function bindActionCreator(e,t){return function(){return t(e.apply(this,arguments))}}function ownKeys(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function _objectSpread2(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(i,!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ownKeys(i).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function compose(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.__DO_NOT_USE__ActionTypes=l,t.applyMiddleware=function applyMiddleware(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(o){return function(){var e=o.apply(void 0,arguments),t=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={"getState":e.getState,"dispatch":function dispatch(){return t.apply(void 0,arguments)}},r=i.map(function(e){return e(n)});return _objectSpread2({},e,{"dispatch":t=compose.apply(void 0,r)(e.dispatch)})}}},t.bindActionCreators=function bindActionCreators(e,t){if("function"==typeof e)return bindActionCreator(e,t);if("object"!==(void 0===e?"undefined":c(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":c(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=bindActionCreator(o,t))}return n},t.combineReducers=function combineReducers(e){for(var t=Object.keys(e),p={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(p[r]=e[r])}var m,h=Object.keys(p);try{!function assertReducerShape(n){Object.keys(n).forEach(function(e){var t=n[e];if(void 0===t(void 0,{"type":l.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{"type":l.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+l.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(p)}catch(e){m=e}return function combination(e,t){if(void 0===e&&(e={}),m)throw m;for(var n,r,o,i=!1,a={},s=0;s<h.length;s++){var u=h[s],c=p[u],d=e[u],l=c(d,t);if(void 0===l){var f=(n=u,"Given "+((o=(r=t)&&r.type)&&'action "'+String(o)+'"'||"an action")+', reducer "'+n+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');throw new Error(f)}a[u]=l,i=i||l!==d}return(i=i||h.length!==Object.keys(e).length)?a:e}},t.compose=compose,t.createStore=function createStore(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(createStore)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,a=[],s=a,u=!1;function ensureCanMutateNextListeners(){s===a&&(s=a.slice())}function getState(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function subscribe(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var n=!0;return ensureCanMutateNextListeners(),s.push(t),function unsubscribe(){if(n){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");n=!1,ensureCanMutateNextListeners();var e=s.indexOf(t);s.splice(e,1),a=null}}}function dispatch(e){if(!isPlainObject(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,i=o(i,e)}finally{u=!1}for(var t=a=s,n=0;n<t.length;n++)(0,t[n])();return e}return dispatch({"type":l.INIT}),(r={"dispatch":dispatch,"subscribe":subscribe,"getState":getState,"replaceReducer":function replaceReducer(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,dispatch({"type":l.REPLACE})}})[d]=function observable(){var e,t=subscribe;return(e={"subscribe":function subscribe(e){if("object"!==(void 0===e?"undefined":c(e))||null===e)throw new TypeError("Expected the observer to be an object.");function observeState(){e.next&&e.next(getState())}return observeState(),{"unsubscribe":t(observeState)}}})[d]=function(){return this},e},r}},function(e,t,n){"use strict";e.exports={"PAGETITLE":"鱼泡网-","TOKEN":"jizhao","UNITID":"adunit-80f40e8b4f60c3f6","INVITESOURCE":"712790d9629c6dcea00e3f5bff60132b","USESUBSCRIBEMESSAGE":!0,"VIDEOAD":"adunit-31b05acadbd2a1d1"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.default="success"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETAREAINFO="getareainfo",t.SETAREAINFO="setareainfo",t.SETAREA="setarea",t.GETAREA="getarea",t.SETPOSITIONSTATUS="setpositionstatus"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set",t.TEL="tel"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set",t.SETFUN="setfun",t.SETAREA="setarea"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETUSERRESUME="getUseResume",t.SETUSERRESUME="setUseResume",t.SETINTRODUCE="setIntroduce",t.SETCERTIFICATE="setCertificate",t.SETPROJECT="setproject"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.INFODATA_DATA={"ad_code":0,"address":"","admin_last_edit_time":"","admin_user_id":"","authentication":"","birthday":"","certificate_show":0,"check":"","city":"","collect_num":"","complain_num":"","country":"","current_admin":"","distance":"","experience":"","extens":"","gender":"","headerimg":"","hometown":"","id":"","img":"","introduce":"","ip_address":"","is_end":"","is_introduces":"","location":"","miniInfoOccupations":[],"nation":"","nation_id":"","note":"","number_people":"","occupations":[],"occupations_id":"","prof_degree":"","progress":"0","province":"","provinces":"","ranking":"","refresh_time":"","sort_flag":"","source":"","tags":[],"tel":"","time":"","type":"","update_time":"","user_id":"","user_uuid":"","username":"","uuid":"","view_num":"","zan_num":"","age":"","title":"","code":""},t.INTRODUCERS_DATA={"check":"","experience":"","experience_str":"","hometown":"","hometown_id":"","number_people":"","prof_degree":"","prof_degree_str":"","tag_id":"","tags":[],"type":"","type_str":""},t.RESUME_TOP_DATA={"has_top":0,"is_top":0,"is_top_text":"","is_top_to_text":"","top_tips_string":""}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.SETSUBPACKPROJECT="setSubpackageProject",t.SETSUBPACKCERTIFICATE="setSubpackCertificate"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.memberTurntable=t.turntableVideoEnd=t.turntableDraw=t.turntableIndex=t.getRankRulesList=t.getResumeAddInfoConfig=t.realnameQueryUrl=t.userCheckDouyinRecharge=t.userDouyinRecharge=void 0,t.userTelCodeLogin=t.userAccountUrl=t.leavingMessageUrl=t.resumesComplainUrl=t.resumesUpdateTopResumeUrl=t.resumesDoTopV2Url=t.resumesTopConfigV2Url=t.resumesEditImgUrl=t.resumesChangeTopStatusUrl=t.resumesDoTopUrl=t.resumesTopConfigUrl=t.resumesTopAreasUrl=t.resumesDelProjectUrl=t.resumesEditEndUrl=t.resumesIntroduceUrl=t.resumesGetDataUrl=t.checkAdcodeUrl=t.addResumeUrl=t.resumesProjectUrl=t.resumesCertificateUrl=t.delCertificateUrl=t.jobRecommendListUrl=t.resumeListUrl=t.resumeCollectUrl=t.resumeSupportUrl=t.resumesGetTelUrl=t.recommendListUrl=t.resumeDetailUrl=t.jobUpdateTopStatusUrl=t.jobChangeTopAreasUrl=t.jobGetTopAreasUrl=t.jobDoTopUrl=t.jobTopHotAreasUrl=t.jobTopConfigUrl=t.jobEndStatusUrl=t.jobGetTelUrl=t.jobNoUserInfoUrl=t.jobInfoUrl=t.publishComplainUrl=t.integralUseInfoUrl=t.integralExpendListsUrl=t.integralExpendConfigUrl=t.integralSourceListsUrl=t.integralSourceConfigUrl=t.messagesTypeUrl=t.userMessagesUrl=t.resumesAddClickLog=t.resumesSortUrl=t.newsInfoUrl=t.newsTypesUrl=t.newListUrl=t.helpUrl=t.feedbackSubmissionUrl=t.feedbackUrl=t.requestActionUrl=t.ResumeCancelCollection=t.recruitCancelCollection=t.getCollectionResumeList=t.getCollectionRecruitList=t.userUpdateUserInfo=t.userChangeUsedStatus=t.userGetPublishedUsedList=t.userChangeRecruitStatus=t.userGetPublishedRecruitList=t.updataPassword=t.userChangePhone=t.userUpdateName=t.userChangeAvatar=t.postUserAddInfo=t.getIdcardAuthInfo=t.postUserAuthInfo=t.getUserAuthInfo=t.getMemberMsgNumber=t.getMemberInfo=t.CheckMineAuthInfo=t.CheckAuth=t.GetUsedInfo=t.GetUserLoginPhoneCode=t.GetUserPhoneCode=t.PublishUsedInfo=t.GetUsedInfoModel=t.GetRechargeOrder=t.GetRechargeOpenid=t.GetRechargeList=t.GetUserInviteLink=t.CheckAdcodeValid=t.GetAllAreas=t.PublishRecruitInfo=t.GetPublisRecruitView=t.GetIntegralList=t.GetTabbarMsg=t.GetListFilterData=t.GetWechatNotice=t.GetFleamarketlist=t.GetResumelist=t.GetRecruitlist=t.GetAllListItem=t.GetBannerNotice=t.GetUserInfo=t.GetUserSessionKey=void 0;var r=n(2);t.GetUserSessionKey=r.REQUESTURL+"user/user-info/",t.GetUserInfo=r.REQUESTURL+"user/make-user/",t.GetBannerNotice=r.REQUESTURL+"index/index-banner-carousel/",t.GetAllListItem=r.REQUESTURL+"index/new-index-msg/",t.GetRecruitlist=r.REQUESTURL+"job/list-new/",t.GetResumelist=r.REQUESTURL+"resumes/new-index/",t.GetFleamarketlist=r.REQUESTURL+"index/info-list/",t.GetWechatNotice=r.REQUESTURL+"index/less-search-data/",t.GetListFilterData=r.REQUESTURL+"index/index-search-tree/",t.GetTabbarMsg=r.REQUESTURL+"member/original-message/",t.GetIntegralList=r.REQUESTURL+"integral/integral-record/",t.GetPublisRecruitView=r.REQUESTURL+"publish/new-job/",t.PublishRecruitInfo=r.REQUESTURL+"publish/save-job/",t.GetAllAreas=r.REQUESTURL+"index/index-area/",t.CheckAdcodeValid=r.REQUESTURL+"publish/checking-adcode/",t.GetUserInviteLink=r.REQUESTURL+"index/invite-friends/",t.GetRechargeList=r.REQUESTURL+"integral/integral-price/",t.GetRechargeOpenid=r.REQUESTURL+"get-openid/",t.GetRechargeOrder=r.REQUESTURL+"create-order/",t.GetUsedInfoModel=r.REQUESTURL+"publish/view-message/",t.PublishUsedInfo=r.REQUESTURL+"publish/publish-msg/",t.GetUserPhoneCode=r.REQUESTURL+"index/get-code/",t.GetUserLoginPhoneCode=r.REQUESTURL+"baidu-auth/get-code/",t.GetUsedInfo=r.REQUESTURL+"fleamarket/fleamarket-info/",t.CheckAuth=r.REQUESTURL+"resume/query-worker/",t.CheckMineAuthInfo=r.REQUESTURL+"resume/auth-status/",t.getMemberInfo=r.REQUESTURL+"user/personal/",t.getMemberMsgNumber=r.REQUESTURL+"member/original-message/",t.getUserAuthInfo=r.REQUESTURL+"user/auth-view/",t.postUserAuthInfo=r.REQUESTURL+"user/do-auth/",t.getIdcardAuthInfo=r.PROREQUESTURL+"index/authid-card/",t.postUserAddInfo=r.REQUESTURL+"user/bind-tel/",t.userChangeAvatar=r.REQUESTURL+"user/update-header/",t.userUpdateName=r.REQUESTURL+"user/update-username/",t.userChangePhone=r.REQUESTURL+"user/update-tel/",t.updataPassword=r.REQUESTURL+"user/update-pwd/",t.userGetPublishedRecruitList=r.REQUESTURL+"job/issue-lists/",t.userChangeRecruitStatus=r.REQUESTURL+"job/job-end-status/",t.userGetPublishedUsedList=r.REQUESTURL+"fleamarket/issues-v1/",t.userChangeUsedStatus=r.REQUESTURL+"fleamarket/fleamarket-end-status/",t.userUpdateUserInfo=r.REQUESTURL+"fleamarket/update-time/",t.getCollectionRecruitList=r.REQUESTURL+"job/collect-list/",t.getCollectionResumeList=r.REQUESTURL+"resumes/collect-list/",t.recruitCancelCollection=r.REQUESTURL+"job/collect/",t.ResumeCancelCollection=r.REQUESTURL+"resumes/resume-collect/",t.requestActionUrl=r.REQUESTURL+"index/course/",t.feedbackUrl=r.REQUESTURL+"leaving-message/list/",t.feedbackSubmissionUrl=r.REQUESTURL+"leaving-message/publish/",t.helpUrl=r.REQUESTURL+"others/help-feedback/",t.newListUrl=r.REQUESTURL+"news/list/",t.newsTypesUrl=r.REQUESTURL+"news/types/",t.newsInfoUrl=r.REQUESTURL+"news/info/",t.resumesSortUrl=r.REQUESTURL+"resumes/sort/",t.resumesAddClickLog=r.REQUESTURL+"resumes/add-click-log/",t.userMessagesUrl=r.REQUESTURL+"member/user-messages/",t.messagesTypeUrl=r.REQUESTURL+"member/message-of-type/",t.integralSourceConfigUrl=r.REQUESTURL+"integral/source-config/",t.integralSourceListsUrl=r.REQUESTURL+"integral/source-lists/",t.integralExpendConfigUrl=r.REQUESTURL+"integral/expend-config/",t.integralExpendListsUrl=r.REQUESTURL+"integral/expend-lists/",t.integralUseInfoUrl=r.REQUESTURL+"integral/look-used-info/",t.publishComplainUrl=r.REQUESTURL+"publish/complain/",t.jobInfoUrl=r.REQUESTURL+"job/job-info/",t.jobNoUserInfoUrl=r.REQUESTURL+"/job/no-user-info/",t.jobGetTelUrl=r.REQUESTURL+"job/get-tel/",t.jobEndStatusUrl=r.REQUESTURL+"job/job-end-status/",t.jobTopConfigUrl=r.REQUESTURL+"job/top-config/",t.jobTopHotAreasUrl=r.REQUESTURL+"/job/top-hot-areas-v1/",t.jobDoTopUrl=r.REQUESTURL+"job/do-top/",t.jobGetTopAreasUrl=r.REQUESTURL+"job/get-top-areas/",t.jobChangeTopAreasUrl=r.REQUESTURL+"job/change-top-areas/",t.jobUpdateTopStatusUrl=r.REQUESTURL+"job/update-top-status/",t.resumeDetailUrl=r.REQUESTURL+"resumes/resume-detail/",t.recommendListUrl=r.REQUESTURL+"resumes/resume-recommend-list/",t.resumesGetTelUrl=r.REQUESTURL+"resumes/get-tel/",t.resumeSupportUrl=r.REQUESTURL+"resumes/resume-support/",t.resumeCollectUrl=r.REQUESTURL+"resumes/resume-collect/",t.resumeListUrl=r.REQUESTURL+"resumes/resume-list/",t.jobRecommendListUrl=r.REQUESTURL+"/job/job-recommend-list/",t.delCertificateUrl=r.REQUESTURL+"resumes/del-certificate/",t.resumesCertificateUrl=r.REQUESTURL+"resumes/certificate/",t.resumesProjectUrl=r.REQUESTURL+"resumes/project/",t.addResumeUrl=r.REQUESTURL+"resumes/add-resume/",t.checkAdcodeUrl=r.REQUESTURL+"resumes/check-adcode/",t.resumesGetDataUrl=r.REQUESTURL+"resumes/get-data/",t.resumesIntroduceUrl=r.REQUESTURL+"resumes/introduce/",t.resumesEditEndUrl=r.REQUESTURL+"resumes/edit-end/",t.resumesDelProjectUrl=r.REQUESTURL+"resumes/del-project/",t.resumesTopAreasUrl=r.REQUESTURL+"resumes/top-areas/",t.resumesTopConfigUrl=r.REQUESTURL+"resumes/top-config/",t.resumesDoTopUrl=r.REQUESTURL+"resumes/do-top/",t.resumesChangeTopStatusUrl=r.REQUESTURL+"resumes/change-top-status/",t.resumesEditImgUrl=r.REQUESTURL+"resumes/edit-img/",t.resumesTopConfigV2Url=r.REQUESTURL+"/resumes/top-config/",t.resumesDoTopV2Url=r.REQUESTURL+"/resumes/do-top-v2/",t.resumesUpdateTopResumeUrl=r.REQUESTURL+"/resumes/update-top-resume/",t.resumesComplainUrl=r.REQUESTURL+"resumes/complain/",t.leavingMessageUrl=r.REQUESTURL+"leaving-message/add-subscribe-msg/",t.userAccountUrl=r.REQUESTURL+"baidu-auth/login/",t.userTelCodeLogin=r.REQUESTURL+"baidu-auth/code-login/",t.userDouyinRecharge=r.REQUESTURL+"pay/bytedance-order/",t.userCheckDouyinRecharge=r.REQUESTURL+"/pay/byte-check/",t.realnameQueryUrl=r.REQUESTURL+"resume/auth-worker-find/",t.getResumeAddInfoConfig=r.REQUESTURL+"resumes/get-data/",t.getRankRulesList=r.REQUESTURL+"resumes/sort/",t.turntableIndex=r.REQUESTURL+"turntable/index/",t.turntableDraw=r.REQUESTURL+"turntable/draw/",t.turntableVideoEnd=r.REQUESTURL+"turntable/video-end/",t.memberTurntable=r.REQUESTURL+"member/turntable/"},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setMemberInfo=function setMemberInfo(e){return{"type":r.SET,"data":e}},t.getUserInfo=function getUserInfo(){return{"type":r.GET}},t.setMemberTel=function setMemberTel(e){return{"type":r.TEL,"data":e}};var r=n(31)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function useResumeAddInfo(){var n=(0,y.useDispatch)(),e=(0,y.useSelector)(function(e){return e.resumeAddInfo}),t=(0,m.useState)(e),r=p(t,2),o=r[0],i=r[1],a=(0,m.useState)(0),s=p(a,2),u=s[0],c=(s[1],(0,m.useState)(0)),d=p(c,2),l=(d[0],d[1],(new Date).getFullYear()-60+"-01-01");return(0,m.useEffect)(function(){e.isset||(0,h.getResumeAddInfoConfig)().then(function(e){var t=f({},e,{"isset":!0});i(f({},t)),n((0,g.setResumeInfoConfig)(f({},t)))})},[]),{"infoConfig":o,"genderCurrent":u,"startDatePicker":l}};var m=n(0),h=n(1),y=n(3),g=n(180)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setUserInfo=function setUserInfo(e){return{"type":r.SET,"data":e}},t.getUserInfo=function getUserInfo(){return{"type":r.GET}};var r=n(27)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.delayGetScrollOffset=t.delayGetClientRect=t.handleTouchScroll=t.pxTransform=t.isTest=t.initTestEnv=t.getEventDetail=t.uuid=t.delayQuerySelector=t.delay=void 0;var s=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0));var u=s.default.getEnv();function delay(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;return new Promise(function(e){[s.default.ENV_TYPE.WEB,s.default.ENV_TYPE.SWAN].includes(u)?setTimeout(function(){e()},t):e()})}var r=0;t.delay=delay,t.delayQuerySelector=function delayQuerySelector(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:500,t=u===s.default.ENV_TYPE.WEB?e:e.$scope,o=s.default.createSelectorQuery().in(t);return new Promise(function(t){delay(r).then(function(){o.select(n).boundingClientRect().exec(function(e){t(e)})})})},t.uuid=function uuid(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:16,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],o=0;if(t=t||n.length,e)for(o=0;o<e;o++)r[o]=n[0|Math.random()*t];else{var i=void 0;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",o=0;o<36;o++)r[o]||(i=0|16*Math.random(),r[o]=n[19===o?3&i|8:i])}return r.join("")},t.getEventDetail=function getEventDetail(e){var t=void 0;switch(u){case s.default.ENV_TYPE.WEB:t={"pageX":e.pageX,"pageY":e.pageY,"clientX":e.clientX,"clientY":e.clientY,"offsetX":e.offsetX,"offsetY":e.offsetY,"x":e.x,"y":e.y};break;case s.default.ENV_TYPE.WEAPP:t={"pageX":e.touches[0].pageX,"pageY":e.touches[0].pageY,"clientX":e.touches[0].clientX,"clientY":e.touches[0].clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case s.default.ENV_TYPE.ALIPAY:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case s.default.ENV_TYPE.SWAN:t={"pageX":e.changedTouches[0].pageX,"pageY":e.changedTouches[0].pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.detail.x,"y":e.detail.y};break;default:t={"pageX":0,"pageY":0,"clientX":0,"clientY":0,"offsetX":0,"offsetY":0,"x":0,"y":0},console.warn("getEventDetail暂未支持该环境")}return t},t.initTestEnv=function initTestEnv(){0},t.isTest=function isTest(){return!1},t.pxTransform=function pxTransform(e){return e?s.default.pxTransform(e):""},t.handleTouchScroll=function handleTouchScroll(e){u===s.default.ENV_TYPE.WEB&&(e?(r=document.documentElement.scrollTop,document.body.classList.add("at-frozen"),document.body.style.top=-r+"px"):(document.body.style.top=null,document.body.classList.remove("at-frozen"),document.documentElement.scrollTop=r))},t.delayGetClientRect=function delayGetClientRect(e){var t=e.self,n=e.selectorStr,r=e.delayTime,o=void 0===r?500:r,i=u===s.default.ENV_TYPE.WEB||u===s.default.ENV_TYPE.SWAN?t:t.$scope,a=s.default.createSelectorQuery().in(i);return new Promise(function(t){delay(o).then(function(){a.select(n).boundingClientRect().exec(function(e){t(e)})})})},t.delayGetScrollOffset=function delayGetScrollOffset(e){var t=e.delayTime,n=void 0===t?500:t;return new Promise(function(t){delay(n).then(function(){s.default.createSelectorQuery().selectViewport().scrollOffset().exec(function(e){t(e)})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.DEFAULT_PROPS={"indicatorDots":!1,"autoplay":!0,"current":0,"interval":3500,"duration":500,"circular":!0,"vertical":!1,"classname":"","lists":[]}},function(e,t,n){"use strict";var r=n(243),o=n(248);e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){"use strict";var r=n(244).Symbol;e.exports=r},,function(e,ae,se){"use strict";(function(e,t){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(ae,"__esModule",{"value":!0});var l=se(23);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":i(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":i(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};function shallowEqual(e,t){if("object"!==_typeof(e)&&"object"!==_typeof(t))return e===t;if(null===e&&null===t)return!0;if(null===e||null===t)return!1;if(a(e,t))return!0;var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(!t.hasOwnProperty(i)||!a(e[i],t[i]))return!1}return!0}var n=function(){function SimpleMap(){_classCallCheck(this,SimpleMap),this.cache=[],this.size=0}return _createClass(SimpleMap,[{"key":"set","value":function set(e,t){var n=this.cache.length;if(!n)return this.cache.push({"k":e,"v":t}),void(this.size+=1);for(var r=0;r<n;r++){var o=this.cache[r];if(o.k===e)return void(o.v=t)}this.cache.push({"k":e,"v":t}),this.size+=1}},{"key":"get","value":function get(e){var t=this.cache.length;if(t)for(var n=0;n<t;n++){var r=this.cache[n];if(r.k===e)return r.v}}},{"key":"has","value":function has(e){var t=this.cache.length;if(!t)return!1;for(var n=0;n<t;n++){if(this.cache[n].k===e)return!0}return!1}},{"key":"delete","value":function _delete(e){for(var t=this.cache.length,n=0;n<t;n++){if(this.cache[n].k===e)return this.cache.splice(n,1),--this.size,!0}return!1}},{"key":"clear","value":function clear(){var e=this.cache.length;if(this.size=0,e)for(;e;)this.cache.pop(),e--}}]),SimpleMap}();function getCurrentPageUrl(){var e=getCurrentPages(),t=e[e.length-1];return function addLeadingSlash(e){return"/"===e.charAt(0)?e:"/"+e}(t.route||t.__route__)}var s=function nextTick(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e="function"==typeof e?e.bind.apply(e,[null].concat(n)):e,(tt.nextTick?tt.nextTick:setTimeout)(e)},r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={"exports":{}},t.exports),t.exports}var o="object"==_typeof(r)&&r&&r.Object===Object&&r,u="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,c=(o||u||Function("return this")()).Symbol,d=Object.prototype,f=d.hasOwnProperty,p=d.toString,m=c?c.toStringTag:void 0;var h=function getRawTag(e){var t=f.call(e,m),n=e[m];try{e[m]=void 0}catch(e){}var r=p.call(e);return t?e[m]=n:delete e[m],r},g=Object.prototype.toString;var v=function objectToString(e){return g.call(e)},_=c?c.toStringTag:void 0;var b=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(_&&_ in Object(e)?h:v)(e)};var S=function overArg(t,n){return function(e){return t(n(e))}}(Object.getPrototypeOf,Object);var T=function isObjectLike(e){return null!=e&&"object"==_typeof(e)},R=Function.prototype,E=Object.prototype,C=R.toString,A=E.hasOwnProperty,U=C.call(Object);var P=function isPlainObject(e){if(!T(e)||"[object Object]"!=b(e))return!1;var t=S(e);if(null===t)return!0;var n=A.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&C.call(n)==U};function isEmptyObject(e){if(e&&P(e)){for(var t in e)if(e.hasOwnProperty(t))return;return 1}}function isUndefined(e){return void 0===e}function isFunction(e){return"function"==typeof e}function isArray(e){return Array.isArray(e)}var w=Object.keys,O=Object.prototype.hasOwnProperty;function diffObjToPath(u,c,e,t){for(var d=2<arguments.length&&void 0!==e?e:{},l=3<arguments.length&&void 0!==t?t:"",f=w(u),n=f.length,r=function _loop2(e){var t=f[e],n=u[t],r=c[t],o="".concat(l).concat(t);if(n===r)return"continue";if(O.call(c,t))if(_typeof(n)!==_typeof(r))d[o]=n;else if("object"!==_typeof(n))d[o]=n;else{var i=isArray(n),a=isArray(r);if(i!==a)d[o]=n;else if(i&&a)n.length<r.length?d[o]=n:function diffArrToPath(s,u,e,t){for(var c=2<arguments.length&&void 0!==e?e:{},d=3<arguments.length&&void 0!==t?t:"",n=s.length,r=function _loop(e){var t=s[e],n=u[e],r="".concat(d,"[").concat(e,"]");if(t===n)return"continue";if(_typeof(t)!==_typeof(n))c[r]=t;else if("object"!==_typeof(t))c[r]=t;else{var o=isArray(t),i=isArray(n);if(o!==i)c[r]=t;else if(o&&i)t.length<n.length?c[r]=t:diffArrToPath(t,n,c,"".concat(r));else if(!t||!n||w(t).length<w(n).length)c[r]=t;else{var a=!0;Object.keys(n).some(function(e){if(void 0===t[e]&&void 0!==n[e])return!(a=!1)}),a?diffObjToPath(t,n,c,"".concat(r,".")):c[r]=t}}},o=0;o<n;o++)r(o);return c}(n,r,d,"".concat(o));else if(n&&r){var s=!0;Object.keys(r).some(function(e){if(void 0===n[e]&&void 0!==r[e])return!(s=!1)}),s?diffObjToPath(n,r,d,"".concat(o,".")):d[o]=n}else d[o]=n}else d[o]=n},o=0;o<n;o++)r(o);return d}var j=(new Date).getTime().toString(),k=1;function triggerLoopRef(e,t,n){var r=_typeof(n);if("function"!==r&&"object"!==r)return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(r));"object"===r?n.current=t:"function"===r&&n.call(e,t)}var I,x=0;function genId(){return String(x++)}try{I=new Map}catch(e){I=new n}var L=0;var M={};function cacheDataSet(e,t){M[e]=t}function cacheDataGet(e,t){var n=M[e];return t&&delete M[e],n}function cacheDataHas(e){return e in M}var D=new(function(){function Manager(){_classCallCheck(this,Manager),_defineProperty(this,"map",{}),_defineProperty(this,"observers",{})}return _createClass(Manager,[{"key":"set","value":function set(e,t,n){var r=0<arguments.length&&void 0!==e?e:{},o=1<arguments.length?t:void 0,i=2<arguments.length?n:void 0;if(o){i&&this.delete(i);var a=this.observers;this.map[o]||Object.defineProperty(this.map,o,{"configurable":!0,"get":function get(){return this["__".concat(o)]},"set":function set(e){this["__".concat(o)]=e;var t=a[o]&&a[o].component,n=a[o]&&a[o].ComponentClass;if(t&&n&&t.__isReady){var r=filterProps(n.defaultProps,e,t.props);t.props=r,s(function(){t._unsafeCallUpdate=!0,updateComponent(t),t._unsafeCallUpdate=!1})}}}),this.map[o]=r}}},{"key":"delete","value":function _delete(e){delete this.map[e],delete this.map["__".concat(e)],delete this.observers[e]}}]),Manager}()),N="funPrivate",F="__preload_",q="$preloadComponent",$="preload",G=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap"];function bindEvents(e,t,n){e.methods=e.methods||{};var r=n?e:e.methods;t.forEach(function(e){!function processEvent(f,e){e[f]||(e[f]=function(e){e&&(e.preventDefault=function(){},e.stopPropagation=function(){},e.currentTarget=e.currentTarget||e.target||{},e.target&&Object.assign(e.target,e.detail),Object.assign(e.currentTarget,e.detail));var t=this.$component,n=t,r=-1<f.indexOf(N),o=[],i=[],a=[],s=!1,u=e.currentTarget.dataset||{},c={},d=e.type?e.type.toLocaleLowerCase():null;if(e.detail&&e.detail.__detail&&Object.assign(u,e.detail.__detail),Object.keys(u).forEach(function(e){var t=e.toLocaleLowerCase();if(/^e/.test(t)&&0<=(t=t.replace(/^e/,"")).indexOf(d)){var n=t.replace(d,"");/^(a[a-z]|so)$/.test(n)&&(c[n]=u[e])}}),e.detail&&e.detail.__arguments&&0<e.detail.__arguments.length&&(i=e.detail.__arguments),r){var l=null;"so"in c&&("this"!==c.so&&(l=c.so),s=!0,delete c.so),0<i.length&&(!s&&i[0]&&(n=i[0]),i.shift()),isEmptyObject(c)||(a=Object.keys(c).sort().map(function(e){return c[e]})),o=[l].concat(_toConsumableArray(a),_toConsumableArray(i),[e])}else"so"in c&&("this"!==c.so&&(n=c.so),s=!0,delete c.so),0<i.length&&(!s&&i[0]&&(n=i[0]),i.shift()),isEmptyObject(c)||(a=Object.keys(c).sort().map(function(e){return c[e]})),o=_toConsumableArray(a).concat(_toConsumableArray(i),[e]);return t[f].apply(n,o)})}(e,r)})}function filterProps(e,t,n){var r=0<arguments.length&&void 0!==e?e:{},o=1<arguments.length&&void 0!==t?t:{},i=2<arguments.length&&void 0!==n?n:{},a=Object.assign({},i,o);if(!isEmptyObject(r))for(var s in r)void 0===a[s]&&(a[s]=r[s]);return a}function componentTrigger(o,t,n){if(n=n||[],"componentDidMount"===t&&(o.$$hasLoopRef&&(l.Current.current=o,l.Current.index=0,o._disableEffect=!0,o._createData(o.state,o.props,!0),o._disableEffect=!1,l.Current.current=null),o.$$refs&&0<o.$$refs.length)){var r={},e=[];return o.$$refs.forEach(function(r){e.push(new Promise(function(t,e){var n=tt.createSelectorQuery().in(o.$scope);"component"===r.type?o.$scope.selectComponent("#".concat(r.id),function(e){t({"target":e?e.$component||e:null,"ref":r})}):t({"target":n.select("#".concat(r.id)),"ref":r})}))}),void Promise.all(e).then(function(e){e.forEach(function(e){var t=e.ref,n=e.target;l.commitAttachRef(t,n,o,r,!0),t.target=n}),o.refs=Object.assign({},o.refs||{},r),o[t]&&"function"==typeof o[t]&&o[t].apply(o,_toConsumableArray(n))}).catch(function(e){console.error(e),o[t]&&"function"==typeof o[t]&&o[t].apply(o,_toConsumableArray(n))})}if("componentWillUnmount"===t){var i=o.$scope.data.compid;i&&D.delete(i)}o[t]&&"function"==typeof o[t]&&o[t].apply(o,_toConsumableArray(n)),"componentWillUnmount"===t&&(o._dirty=!0,o._disable=!0,o.$router={"params":{},"path":""},o._pendingStates=[],o._pendingCallbacks=[],l.detachAllRef(o)),"componentWillMount"===t&&(o._dirty=!1,o._disable=!1,o.state=o.getState())}var Q=!1;function initComponent(e,t){if(this.$component&&!this.$component.__isReady){if(this.$component.__isReady=!0,t&&!Q&&(Q=!0),Q&&!t){var n=this.data.compid;n&&(D.observers[n]={"component":this.$component,"ComponentClass":e});var r=filterProps(e.defaultProps,D.map[n],this.$component.props);this.$component.props=r}(Q||t)&&!function mountComponent(e){var t=e.props;e.__componentWillMountTriggered||e._constructor&&e._constructor(t);var n=callGetDerivedStateFromProps(e,t,e.state);isUndefined(n)||(e.state=n);e._dirty=!1,e._disable=!1,e._isForceUpdate=!1,e.__componentWillMountTriggered||(e.__componentWillMountTriggered=!0,hasNewLifecycle(e)||componentTrigger(e,"componentWillMount"));doUpdate(e,t,e.state),e.prevProps=e.props,e.prevState=e.state}(this.$component)}}var B=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{"value":!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function y(e){if("object"===_typeof(e)&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case l:case i:case s:case a:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case u:return e;default:return t}}case g:case h:case o:return t}}}function z(e){return y(e)===l}t.typeOf=y,t.AsyncMode=d,t.ConcurrentMode=l,t.ContextConsumer=c,t.ContextProvider=u,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===s||e===a||e===p||e===m||"object"===_typeof(e)&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===_||e.$$typeof===b)},t.isAsyncMode=function(e){return z(e)||y(e)===d},t.isConcurrentMode=z,t.isContextConsumer=function(e){return y(e)===c},t.isContextProvider=function(e){return y(e)===u},t.isElement=function(e){return"object"===_typeof(e)&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return y(e)===f},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===g},t.isMemo=function(e){return y(e)===h},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===s},t.isStrictMode=function(e){return y(e)===a},t.isSuspense=function(e){return y(e)===p}});unwrapExports(B);B.typeOf,B.AsyncMode,B.ConcurrentMode,B.ContextConsumer,B.ContextProvider,B.Element,B.ForwardRef,B.Fragment,B.Lazy,B.Memo,B.Portal,B.Profiler,B.StrictMode,B.Suspense,B.isValidElementType,B.isAsyncMode,B.isConcurrentMode,B.isContextConsumer,B.isContextProvider,B.isElement,B.isForwardRef,B.isFragment,B.isLazy,B.isMemo,B.isPortal,B.isProfiler,B.isStrictMode,B.isSuspense;var W=createCommonjsModule(function(e,t){0});unwrapExports(W);W.typeOf,W.AsyncMode,W.ConcurrentMode,W.ContextConsumer,W.ContextProvider,W.Element,W.ForwardRef,W.Fragment,W.Lazy,W.Memo,W.Portal,W.Profiler,W.StrictMode,W.Suspense,W.isValidElementType,W.isAsyncMode,W.isConcurrentMode,W.isContextConsumer,W.isContextProvider,W.isElement,W.isForwardRef,W.isFragment,W.isLazy,W.isMemo,W.isPortal,W.isProfiler,W.isStrictMode,W.isSuspense,createCommonjsModule(function(e){e.exports=B});var H=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;!function shouldUseNative(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},r)).join("")?void 0:1}catch(e){return}}()||Object.assign;var K="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Function.call.bind(Object.prototype.hasOwnProperty);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var X=createCommonjsModule(function(e){e.exports=function factoryWithThrowingShims(){function shim(e,t,n,r,o,i){if(i!==K){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}var e={"array":shim.isRequired=shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e}()}),J=void 0===t||!t.env||!1;function hasNewLifecycle(e){var t=e.constructor.getDerivedStateFromProps,n=e.getSnapshotBeforeUpdate;return isFunction(t)||isFunction(n)}function callGetDerivedStateFromProps(e,t,n){var r,o=e.constructor.getDerivedStateFromProps;if(isFunction(o)){var i=o(t,n);isUndefined(i)?console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。"):r=Object.assign({},n,i)}return r}function updateComponent(e){var t=e.props,n=e.__propTypes;if(J&&n){var r=e.constructor.name;if(isUndefined(r)){var o=e.constructor.toString().match(/^function\s*([^\s(]+)/);r=isArray(o)?o[0]:"Component"}X.checkPropTypes(n,t,"prop",r)}var i=e.prevProps||t;e.props=i,e.__mounted&&!0===e._unsafeCallUpdate&&!hasNewLifecycle(e)&&e.componentWillReceiveProps&&(e._disable=!0,e.componentWillReceiveProps(t),e._disable=!1);var a=e.getState(),s=e.prevState||a,u=callGetDerivedStateFromProps(e,t,a);isUndefined(u)||(a=u);var c=!1;e.__mounted&&("function"!=typeof e.shouldComponentUpdate||e._isForceUpdate||!1!==e.shouldComponentUpdate(t,a)?!hasNewLifecycle(e)&&isFunction(e.componentWillUpdate)&&e.componentWillUpdate(t,a):c=!0),e.props=t,e.state=a,e._dirty=!1,e._isForceUpdate=!1,c||doUpdate(e,i,s),e.prevProps=e.props,e.prevState=e.state}function doUpdate(n,t,r){var e=n.state,o=n.props,i=void 0===o?{}:o,a=e||{};if(n._createData&&(n.__isReady&&(!function injectContextType(t){var e=t.constructor.contextType;if(e){var n=e.context,r=n.emitter;if(null===r)return void(t.context=n._defaultValue);t._hasContext||(t._hasContext=!0,r.on(function(e){return enqueueRender(t)})),t.context=r.value}}(n),l.Current.current=n,l.Current.index=0,l.invokeEffects(n,!0)),a=n._createData(e,i)||a,n.__isReady&&(l.Current.current=null)),a=Object.assign({},i,a),n.$usedState&&n.$usedState.length){var s={};n.$usedState.forEach(function(e){var t=l.internal_safe_get(a,e);if(void 0!==t)if("object"===_typeof(t)){if(isEmptyObject(t))return l.internal_safe_set(s,e,t);isEmptyObject(t=function shakeFnFromObject(e){var t;if(isArray(e)){t=[];for(var n=e.length,r=0;r<n;r++)t.push(shakeFnFromObject(e[r]))}else{if(!P(e))return e;for(var o in t={},e)if(!isFunction(e[o])){var i=shakeFnFromObject(e[o]);t[o]=i}}return t}(t))||l.internal_safe_set(s,e,t)}else l.internal_safe_set(s,e,t)}),a=s}a.$taroCompReady=!0;var u,c=diffObjToPath(a,n.$scope.data);n.__mounted&&(u=function callGetSnapshotBeforeUpdate(e,t,n){var r,o=e.getSnapshotBeforeUpdate;return isFunction(o)&&(r=o.call(e,t,n)),r}(n,t,r));var d=[];n._pendingCallbacks&&n._pendingCallbacks.length&&(d=n._pendingCallbacks,n._pendingCallbacks=[]);function ZF(){if(n.__mounted&&(l.invokeEffects(n),n.$$refs&&0<n.$$refs.length&&n.$$refs.forEach(function(t){"component"===t.type&&n.$scope.selectComponent("#".concat(t.id),function(e){(e=e?e.$component||e:null)!==t.target&&(l.commitAttachRef(t,e,n,n.refs),t.target=e)})}),n.$$hasLoopRef&&(l.Current.current=n,l.Current.index=0,n._disableEffect=!0,n._createData(n.state,n.props,!0),n._disableEffect=!1,l.Current.current=null),"function"==typeof n.componentDidUpdate&&n.componentDidUpdate(t,r,u)),d.length)for(var e=d.length;0<=--e;)"function"==typeof d[e]&&d[e].call(n)}0===Object.keys(c).length?ZF():n.$scope.setData(c,ZF)}var Z=[];function enqueueRender(e,t){var n=1<arguments.length&&void 0!==t&&t;e._isForceUpdate=n,!e._dirty&&(e._dirty=!0)&&1===Z.push(e)&&s(function(){!function rerender(){var e,t=Z;Z=[];for(;e=t.pop();)e._dirty&&updateComponent(e)}()})}var ee="preload",te=function(){function BaseComponent(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;_classCallCheck(this,BaseComponent),_defineProperty(this,"__computed",{}),_defineProperty(this,"__props",{}),_defineProperty(this,"__isReady",!1),_defineProperty(this,"__mounted",!1),_defineProperty(this,"nextProps",{}),_defineProperty(this,"_dirty",!0),_defineProperty(this,"_disable",!0),_defineProperty(this,"_isForceUpdate",!1),_defineProperty(this,"_pendingStates",[]),_defineProperty(this,"_pendingCallbacks",[]),_defineProperty(this,"$componentType",""),_defineProperty(this,"refs",{}),_defineProperty(this,"$router",{"params":{},"path":""}),_defineProperty(this,"_afterScheduleEffect",!1),_defineProperty(this,"_disableEffect",!1),_defineProperty(this,"hooks",[]),_defineProperty(this,"effects",[]),_defineProperty(this,"layoutEffects",[]),this.state={},this.props=e,this.$componentType=t?"PAGE":"COMPONENT",this.$prefix=function genCompPrefix(){return String(L++)}(),this.isTaroComponent=this.$componentType&&this.$router&&this._pendingStates}return _createClass(BaseComponent,[{"key":"_constructor","value":function _constructor(e){this.props=e||{}}},{"key":"_init","value":function _init(e){this.$scope=e}},{"key":"setState","value":function setState(e,t){e&&(this._pendingStates=this._pendingStates||[]).push(e),"function"==typeof t&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(t),this._disable||enqueueRender(this,t===l.internal_force_update)}},{"key":"getState","value":function getState(){var t=this,e=this._pendingStates,n=this.state,r=this.props,o=Object.assign({},n);if(delete o.__data,!e.length)return o;var i=e.concat();return this._pendingStates.length=0,i.forEach(function(e){"function"==typeof e&&(e=e.call(t,o,r)),Object.assign(o,e)}),o}},{"key":"forceUpdate","value":function forceUpdate(e){"function"==typeof e&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(e),this._isForceUpdate=!0,updateComponent(this)}},{"key":"$preload","value":function $preload(e,t){var n=cacheDataGet(ee)||{};if("object"===_typeof(e))for(var r in e)n[r]=e[r];else n[e]=t;cacheDataSet(ee,n)}},{"key":"__triggerPropsFn","value":function __triggerPropsFn(e,t){var n=e.split("."),r="__event_"+n.shift();if(r in this){var o=t.shift();(0<n.length?l.internal_safe_get(this[r],n.join(".")):this[r]).apply(o,t)}else{var i=e.toLocaleLowerCase(),a={"__isCustomEvt":!0,"__arguments":t},s=this.$scope.dataset;Object.keys(s).length&&(a.__detail=s),this.$scope.triggerEvent(i,a)}}}]),BaseComponent}(),ne=function(){function PureComponent(){var e,t;_classCallCheck(this,PureComponent);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?_assertThisInitialized(e):t}(this,(e=_getPrototypeOf(PureComponent)).call.apply(e,[this].concat(r))),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"isPureComponent",!0),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(PureComponent,te),_createClass(PureComponent,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e,t){return!shallowEqual(this.props,e)||!shallowEqual(this.state,t)}}]),PureComponent}();var re={"MAX_REQUEST":5,"queue":[],"pendingQueue":[],"request":function request(e){return this.queue.push(e),this.run()},"run":function run(){var a=this;if(this.queue.length)for(var e=function _loop(){var r=a.queue.shift(),o=r.success,i=r.fail;return r.success=function(){a.pendingQueue=a.pendingQueue.filter(function(e){return e!==r}),a.run();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o&&o.apply(r,t)},r.fail=function(){a.pendingQueue=a.pendingQueue.filter(function(e){return e!==r}),a.run();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i&&i.apply(r,t)},a.pendingQueue.push(r),{"v":tt.request(r)}};this.pendingQueue.length<this.MAX_REQUEST;){var t=e();if("object"===_typeof(t))return t.v}}};var oe=new l.Link(function taroInterceptor(e){return function request(e){"string"==typeof(e=e||{})&&(e={"url":e});var r,o=e.success,i=e.fail,a=e.complete,t=new Promise(function(t,n){e.success=function(e){o&&o(e),t(e)},e.fail=function(e){i&&i(e),n(e)},e.complete=function(e){a&&a(e)},r=re.request(e)});return t.abort=function(e){return e&&e(),r&&r.abort(),t},t}(e.requestParams)});function processApis(e){var t=Object.assign({},l.onAndSyncApis,l.noPromiseApis,l.otherApis);Object.keys(t).forEach(function(h){h in tt?l.onAndSyncApis[h]||l.noPromiseApis[h]?e[h]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length,o=t.concat(),i=o[r-1];return i&&i.isTaroComponent&&i.$scope&&o.splice(r-1,1,i.$scope),tt[h].apply(tt,o)}:e[h]=function(o){for(var e=arguments.length,t=new Array(1<e?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];o=o||{};var r,i=null,a=Object.assign({},o);if("string"==typeof o)return t.length?(r=tt)[h].apply(r,[o].concat(t)):tt[h](o);if("navigateTo"===h||"redirectTo"===h){var s=a.url?a.url.replace(/^\//,""):"";-1<s.indexOf("?")&&(s=s.split("?")[0]);var u=cacheDataGet(s);if(u){var c=new u;if(c.componentWillPreload){var d=function getUniqueKey(){return j+k++}(),l=a.url.indexOf("?"),f=-1<l,p=function queryToJson(e){for(var t,n,r,o=decodeURIComponent,i=e.split("&"),a={},s=0,u=i.length;s<u;++s)if((r=i[s]).length){var c=r.indexOf("=");n=c<0?(t=o(r),""):(t=o(r.slice(0,c)),o(r.slice(c+1))),"string"==typeof a[t]&&(a[t]=[a[t]]),isArray(a[t])?a[t].push(n):a[t]=n}return a}(f?a.url.substring(l+1,a.url.length):"");a.url+=(f?"&":"?")+"".concat("__preload_","=").concat(d),cacheDataSet(d,c.componentWillPreload(p)),cacheDataSet("$preloadComponent",c)}}}var m=new Promise(function(n,r){var e;(["fail","success","complete"].forEach(function(t){a[t]=function(e){o[t]&&o[t](e),"success"===t?n("connectSocket"===h?Promise.resolve().then(function(){return Object.assign(i,e)}):e):"fail"===t&&r(e)}}),t.length)?i=(e=tt)[h].apply(e,[a].concat(t)):i=tt[h](a)});return"uploadFile"!==h&&"downloadFile"!==h||(m.progress=function(e){return i&&i.onProgressUpdate(e),m},m.abort=function(e){return e&&e(),i&&i.abort(),m}),m}:e[h]=function(){console.warn("头条小程序暂不支持 ".concat(h))}})}function initNativeApi(e){processApis(e),e.request=oe.request.bind(oe),e.addInterceptor=oe.addInterceptor.bind(oe),e.cleanInterceptors=oe.cleanInterceptors.bind(oe),e.getCurrentPages=getCurrentPages,e.getApp=getApp,e.initPxTransform=l.initPxTransform.bind(e),e.pxTransform=function pxTransform(e){var t=this.config||{},n=t.designWidth,r=void 0===n?750:n,o=t.deviceRatio,i=void 0===o?{"640":1.17,"750":1,"828":.905}:o;if(!(r in i))throw new Error("deviceRatio 配置中不存在 ".concat(r," 的设置！"));return parseInt(e,10)/i[r]+"rpx"}.bind(e)}var ie={"Component":te,"PureComponent":ne,"createApp":function createApp(e){var t=new e,n={"onLaunch":function onLaunch(e){t.$app=this,t.$app.$router=t.$router={"params":e},t.componentWillMount&&t.componentWillMount(),t.componentDidMount&&t.componentDidMount()},"onShow":function onShow(e){Object.assign(t.$router.params,e),t.componentDidShow&&t.componentDidShow()},"onHide":function onHide(){t.componentDidHide&&t.componentDidHide()},"onError":function onError(e){t.componentDidCatchError&&t.componentDidCatchError(e)},"onPageNotFound":function onPageNotFound(e){t.componentDidNotFound&&t.componentDidNotFound(e)}};return Object.assign(n,t)},"initNativeApi":initNativeApi,"Events":l.Events,"eventCenter":l.eventCenter,"getEnv":l.getEnv,"createRef":l.createRef,"render":l.render,"ENV_TYPE":l.ENV_TYPE,"internal_safe_get":l.internal_safe_get,"internal_safe_set":l.internal_safe_set,"internal_inline_style":l.internal_inline_style,"createComponent":function createComponent(r,o){var e={},t=filterProps(r.defaultProps),n=new r(t);n._constructor&&n._constructor(t);try{l.Current.current=n,l.Current.index=0,n.state=n._createData()||n.state}catch(e){o?console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！"):console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"),console.warn(e)}var i={"data":e=Object.assign({},e,n.props,n.state),"created":function created(e){var t=0<arguments.length&&void 0!==e?e:{};if(o&&(Q=!1),o&&cacheDataHas(q)?(this.$component=cacheDataGet(q,!0),this.$component.$componentType="PAGE"):this.$component=new r({},o),this.$component._init(this),this.$component.render=this.$component._createData,this.$component.__propTypes=r.propTypes,o){if(cacheDataHas($)){var n=cacheDataGet($,!0);this.$component.$router.preload=n}Object.assign(this.$component.$router.params,t),cacheDataHas(t[F])?this.$component.$preloadData=cacheDataGet(t[F],!0):this.$component.$preloadData={},this.$component.$router.path=getCurrentPageUrl(),initComponent.apply(this,[r,o])}},"attached":function attached(){initComponent.apply(this,[r,o])},"ready":function ready(){this.$component.__mounted||(this.$component.__mounted=!0,componentTrigger(this.$component,"componentDidMount"))},"detached":function detached(){var e=this.$component;componentTrigger(e,"componentWillUnmount"),e.hooks.forEach(function(e){isFunction(e.cleanup)&&e.cleanup()});var t=e.$$renderPropsEvents;isArray(t)&&t.forEach(function(e){return l.eventCenter.off(e)})}};return o&&(i.onLoad=i.created,i.onReady=i.ready,i.onUnload=i.detached,i.onShow=function(){componentTrigger(this.$component,"componentDidShow")},i.onHide=function(){componentTrigger(this.$component,"componentDidHide")},G.forEach(function(t){n[t]&&"function"==typeof n[t]&&(i[t]=function(){var e=this.$component;if(e&&e[t]&&"function"==typeof e[t])return e[t].apply(e,arguments)})}),globPageRegistPath&&cacheDataSet(globPageRegistPath,r)),function bindProperties(e,t,n){e.properties={},n&&(e.properties[F]={"type":null,"value":null}),e.properties.compid={"type":null,"value":null,"observer":function observer(e,t){var n=this;if(t&&t!==e){var r=this.data.extraProps,o=this.$component;D.observers[e]={"component":o,"ComponentClass":o.constructor};var i=filterProps(o.constructor.defaultProps,D.map[e],o.props,r||null);this.$component.props=i,s(function(){n.$component._unsafeCallUpdate=!0,updateComponent(n.$component),n.$component._unsafeCallUpdate=!1})}}}}(i,0,o),function bindBehaviors(e,t){t.behaviors&&(e.behaviors=t.behaviors)}(i,r),function bindStaticFns(t,n){for(var e in n)"function"==typeof n[e]&&(t[e]=n[e]);Object.getOwnPropertyNames(n).forEach(function(e){["arguments","caller","length","name","prototype"].indexOf(e)<0&&"function"==typeof n[e]&&(t[e]=n[e])})}(i,r),function bindStaticOptions(e,t){t.options&&(e.options=t.options)}(i,r),r.$$events&&bindEvents(i,r.$$events,o),r.externalClasses&&r.externalClasses.length&&(i.externalClasses=r.externalClasses),i},"internal_get_original":l.internal_get_original,"interceptors":l.interceptors,"RefsArray":l.RefsArray,"handleLoopRef":function handleLoopRef(t,e,n,r){return t&&("component"===n?t.selectComponent(e,function(e){(e=e?e.$component||e:null)&&triggerLoopRef(t.$component,e,r)}):(o=wx.createSelectorQuery().in(t).select(e))&&triggerLoopRef(t.$component,o,r)),null;var o},"propsManager":D,"genCompid":function genCompid(e,t){if(!l.Current||!l.Current.current||!l.Current.current.$scope)return[];var n=I.get(e);if(t){var r=genId();return I.set(e,r),[n,r]}var o=n||genId();return n||I.set(e,o),[null,o]},"useEffect":l.useEffect,"useLayoutEffect":l.useLayoutEffect,"useReducer":l.useReducer,"useState":l.useState,"useDidShow":l.useDidShow,"useDidHide":l.useDidHide,"usePullDownRefresh":l.usePullDownRefresh,"useReachBottom":l.useReachBottom,"usePageScroll":l.usePageScroll,"useResize":l.useResize,"useShareAppMessage":l.useShareAppMessage,"useTabItemTap":l.useTabItemTap,"useRouter":l.useRouter,"useScope":l.useScope,"useRef":l.useRef,"useCallback":l.useCallback,"useMemo":l.useMemo,"useImperativeHandle":l.useImperativeHandle,"useContext":l.useContext,"createContext":l.createContext,"memo":l.memo,"shallowEqual":shallowEqual};initNativeApi(ie),ae.Taro=ie,ae.default=ie}).call(this,se(13),se(48))},function(e,t,n){"use strict";var r,o,i=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(t){if(r===setTimeout)return setTimeout(t,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{o="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){o=defaultClearTimeout}}();var a,s=[],u=!1,c=-1;function cleanUpNextTick(){u&&a&&(u=!1,a.length?s=a.concat(s):c=-1,s.length&&drainQueue())}function drainQueue(){if(!u){var e=runTimeout(cleanUpNextTick);u=!0;for(var t=s.length;t;){for(a=s,s=[];++c<t;)a&&a[c].run();c=-1,t=s.length}a=null,u=!1,function runClearTimeout(t){if(o===clearTimeout)return clearTimeout(t);if((o===defaultClearTimeout||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{return o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new Item(e,t)),1!==s.length||u||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,te,t){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":n(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):t[n]=r})}return o}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _construct(e,t,n){return(_construct=function isNativeReflectConstruct(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function _construct(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{"constructor":{"value":Wrapper,"enumerable":!1,"writable":!0,"configurable":!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(te,"__esModule",{"value":!0}),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}),"function"!=typeof Object.defineProperties&&(Object.defineProperties=function(e,t){function convertToDescriptor(e){function hasProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function isCallable(e){return"function"==typeof e}if("object"!==_typeof(e)||null===e)throw new TypeError("bad desc");var t={};if(hasProperty(e,"enumerable")&&(t.enumerable=!!e.enumerable),hasProperty(e,"configurable")&&(t.configurable=!!e.configurable),hasProperty(e,"value")&&(t.value=e.value),hasProperty(e,"writable")&&(t.writable=!!e.writable),hasProperty(e,"get")){var n=e.get;if(!isCallable(n)&&void 0!==n)throw new TypeError("bad get");t.get=n}if(hasProperty(e,"set")){var r=e.set;if(!isCallable(r)&&void 0!==r)throw new TypeError("bad set");t.set=r}if(("get"in t||"set"in t)&&("value"in t||"writable"in t))throw new TypeError("identity-confused descriptor");return t}if("object"!==_typeof(e)||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=Object.keys(t),r=[],o=0;o<n.length;o++)r.push([n[o],convertToDescriptor(t[n[o]])]);for(o=0;o<r.length;o++)Object.defineProperty(e,r[o][0],r[o][1]);return e});function TI(e){_classCallCheck(this,TI),this.state={},this.props=e||{}}var t="Expected a function",r="__lodash_hash_undefined__",o="[object Function]",i="[object GeneratorFunction]",a="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,c=/^\./,d=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,p="object"===(void 0===e?"undefined":_typeof(e))&&e&&e.Object===Object&&e,m="object"===("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,h=p||m||Function("return this")(),y=9007199254740991,g=/^(?:0|[1-9]\d*)$/;var v,_=Array.prototype,b=Function.prototype,S=Object.prototype,T=h["__core-js_shared__"],R=(v=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+v:"",E=b.toString,C=S.hasOwnProperty,A=S.toString,U=RegExp("^"+E.call(C).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=h.Symbol,w=_.splice,O=getNative(h,"Map"),j=getNative(Object,"create"),k=P?P.prototype:void 0,I=k?k.toString:void 0;function Hash(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ListCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function MapCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}function baseGet(e,t){for(var n=0,r=(t=function isKey(e,t){if(L(e))return;var n=_typeof(e);if("number"==n||"symbol"==n||"boolean"==n||null==e||isSymbol(e))return 1;return u.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:castPath(t)).length;null!=e&&n<r;)e=e[toKey(t[n++])];return n&&n==r?e:void 0}function baseIsNative(e){return isObject(e)&&!function isMasked(e){return R&&R in e}(e)&&(function isFunction(e){var t=isObject(e)?A.call(e):"";return t==o||t==i}(e)||function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?U:f).test(function toSource(e){if(null!=e){try{return E.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function castPath(e){return L(e)?e:x(e)}function getMapData(e,t){var n=e.__data__;return function isKeyable(e){var t=_typeof(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function getNative(e,t){var n=function getValue(e,t){return null==e?void 0:e[t]}(e,t);return baseIsNative(n)?n:void 0}Hash.prototype.clear=function hashClear(){this.__data__=j?j(null):{}},Hash.prototype.delete=function hashDelete(e){return this.has(e)&&delete this.__data__[e]},Hash.prototype.get=function hashGet(e){var t=this.__data__;if(j){var n=t[e];return n===r?void 0:n}return C.call(t,e)?t[e]:void 0},Hash.prototype.has=function hashHas(e){var t=this.__data__;return j?void 0!==t[e]:C.call(t,e)},Hash.prototype.set=function hashSet(e,t){return this.__data__[e]=j&&void 0===t?r:t,this},ListCache.prototype.clear=function listCacheClear(){this.__data__=[]},ListCache.prototype.delete=function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);return!(n<0)&&(n==t.length-1?t.pop():w.call(t,n,1),!0)},ListCache.prototype.get=function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return n<0?void 0:t[n][1]},ListCache.prototype.has=function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)},ListCache.prototype.set=function listCacheSet(e,t){var n=this.__data__,r=assocIndexOf(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},MapCache.prototype.clear=function mapCacheClear(){this.__data__={"hash":new Hash,"map":new(O||ListCache),"string":new Hash}},MapCache.prototype.delete=function mapCacheDelete(e){return getMapData(this,e).delete(e)},MapCache.prototype.get=function mapCacheGet(e){return getMapData(this,e).get(e)},MapCache.prototype.has=function mapCacheHas(e){return getMapData(this,e).has(e)},MapCache.prototype.set=function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this};var x=memoize(function(e){e=function toString(e){return null==e?"":function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(e);var o=[];return c.test(e)&&o.push(""),e.replace(d,function(e,t,n,r){o.push(n?r.replace(l,"$1"):t||e)}),o});function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function memoize(o,i){if("function"!=typeof o||i&&"function"!=typeof i)throw new TypeError(t);function KM(){var e=arguments,t=i?i.apply(this,e):e[0],n=KM.cache;if(n.has(t))return n.get(t);var r=o.apply(this,e);return KM.cache=n.set(t,r),r}return KM.cache=new(memoize.Cache||MapCache),KM}function eq(e,t){return e===t||e!=e&&t!=t}memoize.Cache=MapCache;var L=Array.isArray;function isObject(e){var t=_typeof(e);return e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"===_typeof(e)||function isObjectLike(e){return!!e&&"object"===_typeof(e)}(e)&&A.call(e)==a}C=Object.prototype.hasOwnProperty;function assignValue(e,t,n){var r=e[t];C.call(e,t)&&eq(r,n)&&(void 0!==n||t in e)||!function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{"configurable":!0,"enumerable":!0,"value":n,"writable":!0}):e[t]=n}(e,t,n)}function get(e,t,n){var r=null==e?void 0:baseGet(e,t);return void 0===r?n:r}function set$1(e,t,n){return null==e?e:function baseSet(e,t,n,r){if(!isObject(e))return e;for(var o,i,a,s=(t=castPath(t)).length,u=s-1,c=-1,d=e;null!=d&&++c<s;){var l=toKey(t[c]),f=n;if(c!=u){var p=d[l];void 0===(f=r?r(p,l,d):void 0)&&(f=isObject(p)?p:(o=t[c+1],i=void 0,a=_typeof(o),(i=null==i?y:i)&&("number"==a||"symbol"!=a&&g.test(o))&&-1<o&&o%1==0&&o<i?[]:{}))}assignValue(d,l,f),d=d[l]}return e}(e,t,n)}var M=/([A-Z])/g;function dashLower(e){return"-"+e.toLowerCase()}function inlineStyle(t){if(null==t)return"";if("string"==typeof t)return t;if(null==t)return"";if(!function isObject$1(e){return null!=e&&"object"===_typeof(e)&&!1===Array.isArray(e)}(t))throw new TypeError("style 只能是一个对象或字符串。");return Object.keys(t).map(function(e){return function dashify(e){return e.replace(M,dashLower)}(e).concat(":").concat(t[e])}).join(";")}var D={"WEAPP":"WEAPP","WEB":"WEB","RN":"RN","SWAN":"SWAN","ALIPAY":"ALIPAY","QUICKAPP":"QUICKAPP","TT":"TT","QQ":"QQ","JD":"JD"},N=null;function getEnv(){return N||("undefined"!=typeof jd&&jd.getSystemInfo?(N=D.JD,D.JD):"undefined"!=typeof qq&&qq.getSystemInfo?(N=D.QQ,D.QQ):"undefined"!=typeof tt&&tt.getSystemInfo?(N=D.TT,D.TT):"undefined"!=typeof wx&&wx.getSystemInfo?(N=D.WEAPP,D.WEAPP):"undefined"!=typeof qa&&qa.getSystemInfo?(N=D.QUICKAPP,D.QUICKAPP):"undefined"!=typeof swan&&swan.getSystemInfo?(N=D.SWAN,D.SWAN):"undefined"!=typeof my&&my.getSystemInfo?(N=D.ALIPAY,D.ALIPAY):void 0!==e&&e.__fbGenNativeModule?(N=D.RN,D.RN):"undefined"!=typeof window?(N=D.WEB,D.WEB):"Unknown environment")}var F=null;function getOriginal(e){return null===F&&(F=getEnv()),function isObject$2(e){return e===Object(e)&&"function"!=typeof e}(e)&&e[F===D.SWAN?"privateOriginal":"$original"]||e}var q=function(){function Events(e){_classCallCheck(this,Events),void 0!==e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}return _createClass(Events,[{"key":"on","value":function on(e,t,n){var r,o,i,a,s;if(!t)return this;for(e=e.split(Events.eventSplitter),r=this.callbacks;o=e.shift();)(i=(s=r[o])?s.tail:{}).next=a={},i.context=n,i.callback=t,r[o]={"tail":a,"next":s?s.next:i};return this}},{"key":"once","value":function once(r,o,i){var a=this;return this.on(r,function wrapper(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o.apply(a,t),a.off(r,wrapper,i)},i),this}},{"key":"off","value":function off(e,t,n){var r,o,i,a,s,u;if(!(o=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(Events.eventSplitter):Object.keys(o);r=e.shift();)if(i=o[r],delete o[r],i&&(t||n))for(a=i.tail;(i=i.next)!==a;)s=i.callback,u=i.context,(t&&s!==t||n&&u!==n)&&this.on(r,s,u);return this}},{"key":"trigger","value":function trigger(e){var t,n,r,o,i;if(!(r=this.callbacks))return this;for(e=e.split(Events.eventSplitter),i=[].slice.call(arguments,1);t=e.shift();)if(n=r[t])for(o=n.tail;(n=n.next)!==o;)n.callback.apply(n.context||this,i);return this}}]),Events}();function render(){}function createRef(){return{"current":null}}function commitAttachRef(e,t,n,r){4<arguments.length&&void 0!==arguments[4]&&arguments[4]&&!t||("refName"in e&&e.refName?r[e.refName]=t:"fn"in e&&"function"==typeof e.fn?e.fn.call(n,t):e.fn&&"object"===_typeof(e.fn)&&"current"in e.fn&&(e.fn.current=t))}function detachAllRef(t){t.$$refs&&0<t.$$refs.length&&(t.$$refs.forEach(function(e){"function"==typeof e.fn?e.fn.call(t,null):e.fn&&"object"===_typeof(e.fn)&&"current"in e.fn&&(e.fn.current=null),"target"in e&&delete e.target}),t.refs={})}q.eventSplitter=/\s+/;var $=function(){function RefsArray(){var e,t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return _classCallCheck(this,RefsArray),(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(RefsArray)).call.apply(e,[this].concat(_toConsumableArray(n))))).inited=!1,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(RefsArray,_wrapNativeSuper(Array)),_createClass(RefsArray,[{"key":"pushRefs","value":function pushRefs(e){var t=this;this.inited||(e.forEach(function(e){return t.pushRef(e)}),this.inited=!0)}},{"key":"pushRef","value":function pushRef(t){this.find(function(e){return e.id===t.id})||this.push(t)}}]),RefsArray}();function handleLoopRef(a){return function(e,t,n,r){if(!e)return null;var o=a(e,t,n),i=_typeof(r);if("function"!==i&&"object"!==i)return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(i));"object"===i?r.current=o:"function"===i&&r.call(e.$component,o)}}var G=function(){function Chain(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;_classCallCheck(this,Chain),this.index=n,this.requestParams=e,this.interceptors=t}return _createClass(Chain,[{"key":"proceed","value":function proceed(e){if(this.requestParams=e,this.index>=this.interceptors.length)throw new Error("chain 参数错误, 请勿直接修改 request.chain");var t=this._getNextInterceptor()(this._getNextChain()),n=t.catch(function(e){return Promise.reject(e)});return"function"==typeof t.abort&&(n.abort=t.abort),n}},{"key":"_getNextInterceptor","value":function _getNextInterceptor(){return this.interceptors[this.index]}},{"key":"_getNextChain","value":function _getNextChain(){return new Chain(this.requestParams,this.interceptors,this.index+1)}}]),Chain}(),Q=function(){function Link(e){_classCallCheck(this,Link),this.taroInterceptor=e,this.chain=new G}return _createClass(Link,[{"key":"request","value":function request(e){var t=this;return this.chain.interceptors=this.chain.interceptors.filter(function(e){return e!==t.taroInterceptor}),this.chain.interceptors.push(this.taroInterceptor),this.chain.proceed(_objectSpread({},e))}},{"key":"addInterceptor","value":function addInterceptor(e){this.chain.interceptors.push(e)}},{"key":"cleanInterceptors","value":function cleanInterceptors(){this.chain=new G}}]),Link}();var B=Object.freeze({"timeoutInterceptor":function timeoutInterceptor(e){var o,i=e.requestParams,t=new Promise(function(t,n){var r=setTimeout(function(){r=null,n(new Error("网络链接超时,请稍后再试！"))},i&&i.timeout||6e4);(o=e.proceed(i)).then(function(e){r&&(clearTimeout(r),t(e))}).catch(function(e){r&&clearTimeout(r),n(e)})});return"function"==typeof o.abort&&(t.abort=o.abort),t},"logInterceptor":function logInterceptor(e){var t=e.requestParams,n=t.method,r=t.data,o=t.url;console.log("http ".concat(n||"GET"," --\x3e ").concat(o," data: "),r);var i=e.proceed(t),a=i.then(function(e){return console.log("http <-- ".concat(o," result:"),e),e});return"function"==typeof i.abort&&(a.abort=i.abort),a}}),W={"onSocketOpen":!0,"onSocketError":!0,"onSocketMessage":!0,"onSocketClose":!0,"onBackgroundAudioPlay":!0,"onBackgroundAudioPause":!0,"onBackgroundAudioStop":!0,"onNetworkStatusChange":!0,"onAccelerometerChange":!0,"offAccelerometerChange":!0,"onCompassChange":!0,"onBluetoothAdapterStateChange":!0,"onBluetoothDeviceFound":!0,"onBLEConnectionStateChange":!0,"onBLECharacteristicValueChange":!0,"onBeaconUpdate":!0,"onBeaconServiceChange":!0,"onUserCaptureScreen":!0,"onHCEMessage":!0,"onGetWifiList":!0,"onWifiConnected":!0,"offWifiConnected":!0,"offGetWifiList":!0,"onDeviceMotionChange":!0,"setStorageSync":!0,"getStorageSync":!0,"getStorageInfoSync":!0,"removeStorageSync":!0,"clearStorageSync":!0,"getSystemInfoSync":!0,"getExtConfigSync":!0,"getLogManager":!0,"onMemoryWarning":!0,"reportMonitor":!0,"reportAnalytics":!0,"navigateToSmartGameProgram":!0,"getFileSystemManager":!0,"getLaunchOptionsSync":!0,"onPageNotFound":!0,"onError":!0,"onAppShow":!0,"onAppHide":!0,"offPageNotFound":!0,"offError":!0,"offAppShow":!0,"offAppHide":!0,"onAudioInterruptionEnd":!0,"onAudioInterruptionBegin":!0,"onLocationChange":!0,"offLocationChange":!0},H={"stopRecord":!0,"getRecorderManager":!0,"pauseVoice":!0,"stopVoice":!0,"pauseBackgroundAudio":!0,"stopBackgroundAudio":!0,"getBackgroundAudioManager":!0,"createAudioContext":!0,"createInnerAudioContext":!0,"createVideoContext":!0,"createCameraContext":!0,"createLivePlayerContext":!0,"createLivePusherContext":!0,"createMapContext":!0,"canIUse":!0,"startAccelerometer":!0,"stopAccelerometer":!0,"startCompass":!0,"stopCompass":!0,"hideToast":!0,"hideLoading":!0,"showNavigationBarLoading":!0,"hideNavigationBarLoading":!0,"createAnimation":!0,"createSelectorQuery":!0,"createOffscreenCanvas":!0,"createCanvasContext":!0,"drawCanvas":!0,"hideKeyboard":!0,"stopPullDownRefresh":!0,"createIntersectionObserver":!0,"nextTick":!0,"getMenuButtonBoundingClientRect":!0,"onWindowResize":!0,"offWindowResize":!0,"arrayBufferToBase64":!0,"base64ToArrayBuffer":!0,"getAccountInfoSync":!0,"getUpdateManager":!0,"createWorker":!0,"createRewardedVideoAd":!0,"createInterstitialAd":!0,"getRealtimeLogManager":!0},V={"uploadFile":!0,"downloadFile":!0,"connectSocket":!0,"sendSocketMessage":!0,"closeSocket":!0,"chooseImage":!0,"chooseMessageFile":!0,"previewImage":!0,"getImageInfo":!0,"compressImage":!0,"saveImageToPhotosAlbum":!0,"startRecord":!0,"playVoice":!0,"setInnerAudioOption":!0,"getAvailableAudioSources":!0,"getBackgroundAudioPlayerState":!0,"playBackgroundAudio":!0,"seekBackgroundAudio":!0,"chooseVideo":!0,"saveVideoToPhotosAlbum":!0,"loadFontFace":!0,"saveFile":!0,"getFileInfo":!0,"getSavedFileList":!0,"getSavedFileInfo":!0,"removeSavedFile":!0,"openDocument":!0,"setStorage":!0,"getStorage":!0,"getStorageInfo":!0,"removeStorage":!0,"clearStorage":!0,"navigateBack":!0,"navigateTo":!0,"redirectTo":!0,"switchTab":!0,"reLaunch":!0,"startLocationUpdate":!0,"startLocationUpdateBackground":!0,"stopLocationUpdate":!0,"getLocation":!0,"chooseLocation":!0,"openLocation":!0,"getSystemInfo":!0,"getNetworkType":!0,"makePhoneCall":!0,"scanCode":!0,"setClipboardData":!0,"getClipboardData":!0,"openBluetoothAdapter":!0,"closeBluetoothAdapter":!0,"getBluetoothAdapterState":!0,"startBluetoothDevicesDiscovery":!0,"stopBluetoothDevicesDiscovery":!0,"getBluetoothDevices":!0,"getConnectedBluetoothDevices":!0,"createBLEConnection":!0,"closeBLEConnection":!0,"getBLEDeviceServices":!0,"getBLEDeviceCharacteristics":!0,"readBLECharacteristicValue":!0,"writeBLECharacteristicValue":!0,"notifyBLECharacteristicValueChange":!0,"startBeaconDiscovery":!0,"stopBeaconDiscovery":!0,"getBeacons":!0,"setScreenBrightness":!0,"getScreenBrightness":!0,"setKeepScreenOn":!0,"vibrateLong":!0,"vibrateShort":!0,"addPhoneContact":!0,"getHCEState":!0,"startHCE":!0,"stopHCE":!0,"sendHCEMessage":!0,"startWifi":!0,"stopWifi":!0,"connectWifi":!0,"getWifiList":!0,"setWifiList":!0,"getConnectedWifi":!0,"startDeviceMotionListening":!0,"stopDeviceMotionListening":!0,"pageScrollTo":!0,"showToast":!0,"showLoading":!0,"showModal":!0,"showActionSheet":!0,"setNavigationBarTitle":!0,"setNavigationBarColor":!0,"setTabBarBadge":!0,"removeTabBarBadge":!0,"showTabBarRedDot":!0,"hideTabBarRedDot":!0,"setTabBarStyle":!0,"setTabBarItem":!0,"showTabBar":!0,"hideTabBar":!0,"setTopBarText":!0,"startPullDownRefresh":!0,"canvasToTempFilePath":!0,"canvasGetImageData":!0,"canvasPutImageData":!0,"setBackgroundColor":!0,"setBackgroundTextStyle":!0,"getSelectedTextRange":!0,"hideHomeButton":!0,"getExtConfig":!0,"login":!0,"checkSession":!0,"authorize":!0,"getUserInfo":!0,"checkIsSupportFacialRecognition":!0,"startFacialRecognitionVerify":!0,"startFacialRecognitionVerifyAndUploadVideo":!0,"faceVerifyForPay":!0,"requestPayment":!0,"showShareMenu":!0,"hideShareMenu":!0,"updateShareMenu":!0,"getShareInfo":!0,"chooseAddress":!0,"addCard":!0,"openCard":!0,"openSetting":!0,"getSetting":!0,"getWeRunData":!0,"navigateToMiniProgram":!0,"navigateBackMiniProgram":!0,"chooseInvoice":!0,"chooseInvoiceTitle":!0,"checkIsSupportSoterAuthentication":!0,"startSoterAuthentication":!0,"checkIsSoterEnrolledInDevice":!0,"requestSubscribeMessage":!0,"setEnableDebug":!0,"getOpenUserInfo":!0,"ocrIdCard":!0,"ocrBankCard":!0,"ocrDrivingLicense":!0,"ocrVehicleLicense":!0,"textReview":!0,"textToAudio":!0,"imageAudit":!0,"advancedGeneralIdentify":!0,"objectDetectIdentify":!0,"carClassify":!0,"dishClassify":!0,"logoClassify":!0,"animalClassify":!0,"plantClassify":!0,"setPageInfo":!0,"getSwanId":!0,"requestPolymerPayment":!0,"navigateToSmartProgram":!0,"navigateBackSmartProgram":!0,"preloadSubPackage":!0};function initPxTransform(e){var t=e.designWidth,n=void 0===t?700:t,r=e.deviceRatio,o=void 0===r?{"640":1.17,"750":1,"828":.905}:r;this.config=this.config||{},this.config.designWidth=n,this.config.deviceRatio=o}function objectIs(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function isFunction$1(e){return"function"==typeof e}var z="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;function isUndefined(e){return void 0===e}function isNullOrUndef(e){return isUndefined(e)||null===e}var Y=!0;function getIsUsingDiff(){return Y}function setIsUsingDiff(e){Y=Boolean(e)}function forceUpdateCallback(){}function getHooks(e){if(null===te.Current.current)throw new Error("invalid hooks call: hooks can only be called in a stateless component.");var t=te.Current.current.hooks;return e>=t.length&&t.push({}),t[e]}function useState(e){isFunction$1(e)&&(e=e());var n=getHooks(te.Current.index++);return n.state||(n.component=te.Current.current,n.state=[e,function(e){var t=isFunction$1(e)?e(n.state[0]):e;n.state[0]!==t&&(n.state[0]=t,n.component._disable=!1,n.component.setState({},forceUpdateCallback))}]),n.state}function usePageLifecycle(e,t){var n=getHooks(te.Current.index++);if(n.marked)n.callback=e;else{n.marked=!0,n.component=te.Current.current,n.callback=e;var r=n.component,o=r[t];n.component[t]=function(){var e=n.callback;return o&&o.call.apply(o,[r].concat(Array.prototype.slice.call(arguments))),e&&e.call.apply(e,[r].concat(Array.prototype.slice.call(arguments)))}}}function useDidShow(e){usePageLifecycle(e,"componentDidShow")}function useDidHide(e){usePageLifecycle(e,"componentDidHide")}function usePullDownRefresh(e){usePageLifecycle(e,"onPullDownRefresh")}function useReachBottom(e){usePageLifecycle(e,"onReachBottom")}function usePageScroll(e){usePageLifecycle(e,"onPageScroll")}function useResize(e){usePageLifecycle(e,"onResize")}function useShareAppMessage(e){usePageLifecycle(e,"onShareAppMessage")}function useTabItemTap(e){usePageLifecycle(e,"onTabItemTap")}function useRouter(){var e=getHooks(te.Current.index++);return e.router||(e.component=te.Current.current,e.router=e.component.$router),e.router}function useScope(){var e=getHooks(te.Current.index++);return e.scope||(e.component=te.Current.current,e.scope=e.component.$scope),e.scope}function useReducer(t,e,n){isFunction$1(e)&&(e=e());var r=getHooks(te.Current.index++);return r.state||(r.component=te.Current.current,r.state=[isUndefined(n)?e:n(e),function(e){r.state[0]=t(r.state[0],e),r.component._disable=!1,r.component.setState({},forceUpdateCallback)}]),r.state}function areDepsChanged(n,e){return isNullOrUndef(n)||isNullOrUndef(e)||e.some(function(e,t){return!objectIs(e,n[t])})}function invokeEffects(e,t){(t?e.effects:e.layoutEffects).forEach(function(e){isFunction$1(e.cleanup)&&e.cleanup();var t=e.effect();isFunction$1(t)&&(e.cleanup=t)}),t?e.effects=[]:e.layoutEffects=[]}te.Current={"current":null,"index":0};var K=[];function useEffectImpl(e,t,n){var r=getHooks(te.Current.index++);!te.Current.current._disableEffect&&te.Current.current.__isReady&&areDepsChanged(r.deps,t)&&(r.effect=e,r.deps=t,n?(te.Current.current.effects=te.Current.current.effects.concat(r),function invokeScheduleEffects(e){e._afterScheduleEffect||(e._afterScheduleEffect=!0,K.push(e),1===K.length&&z(function(){setTimeout(function(){K.forEach(function(e){e._afterScheduleEffect=!1,invokeEffects(e,!0)}),K=[]},0)}))}(te.Current.current)):te.Current.current.layoutEffects=te.Current.current.layoutEffects.concat(r))}function useEffect(e,t){useEffectImpl(e,t,!0)}function useLayoutEffect(e,t){useEffectImpl(e,t)}function useRef(e){var t=getHooks(te.Current.index++);return t.ref||(t.ref={"current":e}),t.ref}function useMemo(e,t){var n=getHooks(te.Current.index++);return areDepsChanged(n.deps,t)&&(n.deps=t,n.callback=e,n.value=e()),n.value}function useCallback(e,t){return useMemo(function(){return e},t)}function useImperativeHandle(e,t,n){useLayoutEffect(function(){return isFunction$1(e)?(e(t()),function(){return e(null)}):isUndefined(e)?void 0:(e.current=t(),function(){delete e.current})},function isArray$1(e){return Array.isArray(e)}(n)?n.concat([e]):void 0)}function useContext(e){var t=e.context,n=t.emitter;if(null===n)return t._defaultValue;var r=getHooks(te.Current.index++);return isUndefined(r.context)&&(r.context=!0,r.component=te.Current.current,n.on(function(e){r.component&&(r.component._disable=!1,r.component.setState({}))})),n.value}var X=function(){function Emitter(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,Emitter),this.value=e,this.handlers=[]}return _createClass(Emitter,[{"key":"on","value":function on(e){this.handlers.push(e)}},{"key":"off","value":function off(t){this.handlers=this.handlers.filter(function(e){return e!==t})}},{"key":"set","value":function set(e){var t=this;objectIs(e,this.value)||(this.value=e,this.handlers.forEach(function(e){return e(t.value)}))}}]),Emitter}(),J=0;function createContext(n){var r={"emitter":null,"_id":"__context_"+J+++"__","_defaultValue":n};return{"Provider":function Provider(e){var t=r.emitter;t?t.set(e):r.emitter=new X(n)},"context":r}}var Z=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};function memo(e,t){return e.prototype.shouldComponentUpdate=function(e){return isFunction$1(t)?!t(this.props,e):!function shallowEqual(e,t){if("object"!==_typeof(e)&&"object"!==_typeof(t))return e===t;if(null===e&&null===t)return 1;if(null!==e&&null!==t){if(Z(e,t))return 1;var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length){for(var o=0;o<n.length;o++){var i=n[o];if(!t.hasOwnProperty(i)||!Z(e[i],t[i]))return}return 1}}}(this.props,e)},e}te.eventCenter=new q;var ee={"Component":TI,"Events":q,"eventCenter":te.eventCenter,"getEnv":getEnv,"ENV_TYPE":D,"render":render,"internal_safe_get":get,"internal_safe_set":set$1,"internal_inline_style":inlineStyle,"internal_get_original":getOriginal,"internal_force_update":forceUpdateCallback,"noPromiseApis":H,"onAndSyncApis":W,"otherApis":V,"initPxTransform":initPxTransform,"createRef":createRef,"commitAttachRef":commitAttachRef,"detachAllRef":detachAllRef,"Link":Q,"interceptors":B,"RefsArray":$,"handleLoopRef":handleLoopRef,"Current":te.Current,"useEffect":useEffect,"useLayoutEffect":useLayoutEffect,"useReducer":useReducer,"useState":useState,"useDidShow":useDidShow,"useDidHide":useDidHide,"usePullDownRefresh":usePullDownRefresh,"useReachBottom":useReachBottom,"usePageScroll":usePageScroll,"useResize":useResize,"useShareAppMessage":useShareAppMessage,"useTabItemTap":useTabItemTap,"useRouter":useRouter,"useScope":useScope,"useRef":useRef,"useCallback":useCallback,"useMemo":useMemo,"useImperativeHandle":useImperativeHandle,"invokeEffects":invokeEffects,"useContext":useContext,"createContext":createContext,"memo":memo,"getIsUsingDiff":getIsUsingDiff,"setIsUsingDiff":setIsUsingDiff};te.Component=TI,te.Events=q,te.getEnv=getEnv,te.ENV_TYPE=D,te.render=render,te.internal_safe_get=get,te.internal_safe_set=set$1,te.internal_inline_style=inlineStyle,te.internal_get_original=getOriginal,te.internal_force_update=forceUpdateCallback,te.noPromiseApis=H,te.onAndSyncApis=W,te.otherApis=V,te.initPxTransform=initPxTransform,te.createRef=createRef,te.commitAttachRef=commitAttachRef,te.detachAllRef=detachAllRef,te.Link=Q,te.interceptors=B,te.RefsArray=$,te.handleLoopRef=handleLoopRef,te.useEffect=useEffect,te.useLayoutEffect=useLayoutEffect,te.useReducer=useReducer,te.useState=useState,te.useDidShow=useDidShow,te.useDidHide=useDidHide,te.usePullDownRefresh=usePullDownRefresh,te.useReachBottom=useReachBottom,te.usePageScroll=usePageScroll,te.useResize=useResize,te.useShareAppMessage=useShareAppMessage,te.useTabItemTap=useTabItemTap,te.useRouter=useRouter,te.useScope=useScope,te.useRef=useRef,te.useCallback=useCallback,te.useMemo=useMemo,te.useImperativeHandle=useImperativeHandle,te.invokeEffects=invokeEffects,te.useContext=useContext,te.createContext=createContext,te.memo=memo,te.getIsUsingDiff=getIsUsingDiff,te.setIsUsingDiff=setIsUsingDiff,te.default=ee}).call(this,t(13))},function(e,t,n){"use strict";e.exports=n(51)},function(e,t,n){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(52),r="function"==typeof Symbol&&Symbol.for,l=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function B(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function ca(e,t,n,r,o,i,a,s){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var _={"isMounted":function isMounted(){return!1},"enqueueForceUpdate":function enqueueForceUpdate(){},"enqueueReplaceState":function enqueueReplaceState(){},"enqueueSetState":function enqueueSetState(){}},b={};function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||_}function F(){}function G(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||_}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":u(e))&&"function"!=typeof e&&null!=e&&B("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var C=G.prototype=new F;C.constructor=G,d(C,E.prototype),C.isPureReactComponent=!0;var A={"current":null},P={"current":null},w=Object.prototype.hasOwnProperty,O={"key":!0,"ref":!0,"__self":!0,"__source":!0};function M(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{"$$typeof":l,"type":e,"key":i,"ref":a,"props":o,"_owner":P.current}}function N(e){return"object"===(void 0===e?"undefined":u(e))&&null!==e&&e.$$typeof===l}var j=/\/+/g,k=[];function Q(e,t,n,r){if(k.length){var o=k.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{"result":e,"keyPrefix":t,"func":n,"context":r,"count":0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,k.length<10&&k.push(e)}function U(e,t,n){return null==e?0:function S(e,t,n,r){var o=void 0===e?"undefined":u(e);"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case c:i=!0}}if(i)return n(r,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=t+T(o=e[a],a);i+=S(o,s,n,r)}else if("function"==typeof(s=null!==e&&"object"===(void 0===e?"undefined":u(e))&&"function"==typeof(s=v&&e[v]||e["@@iterator"])?s:null))for(e=s.call(e),a=0;!(o=e.next()).done;)i+=S(o=o.value,s=t+T(o,a++),n,r);else"object"===o&&B("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}(e,"",t,n)}function T(e,t){return"object"===(void 0===e?"undefined":u(e))&&null!==e&&null!=e.key?function escape(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function ea(e,t){e.func.call(e.context,t,e.count++)}function fa(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,n,function(e){return e}):null!=e&&(N(e)&&(e=function da(e,t){return{"$$typeof":l,"type":e.type,"key":t,"ref":e.ref,"props":e.props,"_owner":e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n)),r.push(e))}function V(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(j,"$&/")+"/"),U(e,fa,t=Q(t,i,r,o)),R(t)}function W(){var e=A.current;return null===e&&B("307"),e}var I={"Children":{"map":function map(e,t,n){if(null==e)return e;var r=[];return V(e,r,null,t,n),r},"forEach":function forEach(e,t,n){if(null==e)return e;U(e,ea,t=Q(null,null,t,n)),R(t)},"count":function count(e){return U(e,function(){return null},null)},"toArray":function toArray(e){var t=[];return V(e,t,null,function(e){return e}),t},"only":function only(e){return N(e)||B("143"),e}},"createRef":function createRef(){return{"current":null}},"Component":E,"PureComponent":G,"createContext":function createContext(e,t){return void 0===t&&(t=null),(e={"$$typeof":f,"_calculateChangedBits":t,"_currentValue":e,"_currentValue2":e,"_threadCount":0,"Provider":null,"Consumer":null}).Provider={"$$typeof":s,"_context":e},e.Consumer=e},"forwardRef":function forwardRef(e){return{"$$typeof":m,"render":e}},"lazy":function lazy(e){return{"$$typeof":g,"_ctor":e,"_status":-1,"_result":null}},"memo":function memo(e,t){return{"$$typeof":y,"type":e,"compare":void 0===t?null:t}},"useCallback":function useCallback(e,t){return W().useCallback(e,t)},"useContext":function useContext(e,t){return W().useContext(e,t)},"useEffect":function useEffect(e,t){return W().useEffect(e,t)},"useImperativeHandle":function useImperativeHandle(e,t,n){return W().useImperativeHandle(e,t,n)},"useDebugValue":function useDebugValue(){},"useLayoutEffect":function useLayoutEffect(e,t){return W().useLayoutEffect(e,t)},"useMemo":function useMemo(e,t){return W().useMemo(e,t)},"useReducer":function useReducer(e,t,n){return W().useReducer(e,t,n)},"useRef":function useRef(e){return W().useRef(e)},"useState":function useState(e){return W().useState(e)},"Fragment":o,"StrictMode":i,"Suspense":h,"createElement":M,"cloneElement":function cloneElement(e,t,n){null==e&&B("267",e);var r=void 0,o=d({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,s=P.current),void 0!==t.key&&(i=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){u=Array(r);for(var c=0;c<r;c++)u[c]=arguments[c+2];o.children=u}return{"$$typeof":l,"type":e.type,"key":i,"ref":a,"props":o,"_owner":s}},"createFactory":function createFactory(e){var t=M.bind(null,e);return t.type=e,t},"isValidElement":N,"version":"16.8.0","unstable_ConcurrentMode":p,"unstable_Profiler":a,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED":{"ReactCurrentDispatcher":A,"ReactCurrentOwner":P,"assign":d}};e.exports=I.default||I},function(e,t,n){"use strict";var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;e.exports=function shouldUseNative(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},r)).join("")?void 0:1}catch(e){return}}()?Object.assign:function(e,t){for(var n,r,o=function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))c.call(n,a)&&(o[a]=n[a]);if(u){r=u(n);for(var s=0;s<r.length;s++)d.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o}},function(e,u,c){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(u,"__esModule",{"value":!0});var f=c(23),t=function _interopDefault(e){return e&&"object"===(void 0===e?"undefined":n(e))&&"default"in e?e.default:e}(f),r=null,o=e||{};Object.getPrototypeOf(o);function getStore(){return r}function setStore(e){r=e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":n(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(e,t,n){var r=function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function isObject(e){return null!=e&&"object"===_typeof(e)&&!Array.isArray(e)}function mergeObjects(e,t){var n=Object.assign({},e);if(isObject(e)&&isObject(t))for(var r in t)isObject(e[r])&&isObject(t[r])?n[r]=mergeObjects(e[r],t[r]):n[r]=t[r];return n}function connect(i,e){var a=getStore(),t=a.dispatch,s=function wrapPropsWithDispatch(r,o){return"function"==typeof r?r(o):isObject(r)?Object.keys(r).reduce(function(e,t){var n=r[t];return"function"==typeof n&&(e[t]=function(){return o(n.apply(void 0,arguments))}),e},{}):{}}(e,t);s.dispatch=t;return function connectComponent(t){var e=i(a.getState(),t.defaultProps||{});t.properties&&e&&Object.keys(e).forEach(function(e){delete t.properties[e]});var n=null;return function(){function Connect(e,t){var n;return _classCallCheck(this,Connect),n=_possibleConstructorReturn(this,_getPrototypeOf(Connect).call(this,Object.assign.apply(Object,Array.prototype.slice.call(arguments).concat([mergeObjects(i(a.getState(),e),s)])),t)),Object.keys(s).forEach(function(e){n["__event_".concat(e)]=s[e]}),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(Connect,t),_createClass(Connect,[{"key":"_constructor","value":function _constructor(){if(this.$scope){var e=getStore();Object.assign(this.props,mergeObjects(i(e.getState(),this.props),s)),n=e.subscribe(function stateListener(){var n=this,r=!1,o=i(a.getState(),this.props),e=Object.assign({},this.props);Object.keys(o).forEach(function(e){var t=o[e];isObject(t)&&isObject(s[e])&&(t=mergeObjects(t,s[e])),n.props[e]!==t&&(n.props[e]=t,r=!0)}),r&&(this.prevProps=e,this._unsafeCallUpdate=!0,this.setState({},function(){delete n._unsafeCallUpdate}))}.bind(this)),_get(_getPrototypeOf(Connect.prototype),"_constructor",this)&&_get(_getPrototypeOf(Connect.prototype),"_constructor",this).call(this,this.props)}else _get(_getPrototypeOf(Connect.prototype),"_constructor",this)&&_get(_getPrototypeOf(Connect.prototype),"_constructor",this).call(this,this.props)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){_get(_getPrototypeOf(Connect.prototype),"componentWillUnmount",this)&&_get(_getPrototypeOf(Connect.prototype),"componentWillUnmount",this).call(this),n&&n(),n=null}}]),Connect}()}}function AU(){_classCallCheck(this,AU)}var i=t.createContext(null);function useReduxContext(){return f.useContext(i)}function useStore(){return useReduxContext().store}function useDispatch(){return useStore().dispatch}function CU(e){e()}var a={"notify":function notify(){}};function createListenerCollection(){var e=function getBatch(){return CU}(),n=[],r=[];return{"clear":function clear(){n=r=null},"notify":function notify(){var t=n=r;e(function(){for(var e=0;e<t.length;e++)t[e]()})},"get":function get(){return r},"subscribe":function subscribe(e){var t=!0;return r===n&&(r=n.slice()),r.push(e),function unsubscribe(){t&&null!==n&&(t=!1,r===n&&(r=n.slice()),r.splice(r.indexOf(e),1))}}}}var p=function(){function Subscription(e,t){_classCallCheck(this,Subscription),this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=a,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return _createClass(Subscription,[{"key":"addNestedSub","value":function addNestedSub(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{"key":"notifyNestedSubs","value":function notifyNestedSubs(){this.listeners.notify()}},{"key":"handleChangeWrapper","value":function handleChangeWrapper(){this.onStateChange&&this.onStateChange()}},{"key":"isSubscribed","value":function isSubscribed(){return Boolean(this.unsubscribe)}},{"key":"trySubscribe","value":function trySubscribe(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=createListenerCollection())}},{"key":"tryUnsubscribe","value":function tryUnsubscribe(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)}}]),Subscription}();function HU(e,t){return e===t}function useSelector(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:HU;!function invariant(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],d=0;(u=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}(e,"You must pass a selector to useSelectors");var n,r=useReduxContext(),o=r.store,i=r.subscription,a=_slicedToArray(f.useReducer(function(e){return e+1},0),2)[1],s=f.useMemo(function(){return new p(o,i)},[o,i]),u=f.useRef(),c=f.useRef(),d=f.useRef();try{n=e!==c.current||u.current?e(o.getState()):d.current}catch(e){var l="An error occured while selecting the store state: ".concat(e.message,".");throw u.current&&(l+="\nThe error may be correlated with this previous error:\n".concat(u.current.stack,"\n\nOriginal stack trace:")),new Error(l)}return f.useEffect(function(){c.current=e,d.current=n,u.current=void 0}),f.useEffect(function(){function checkForUpdates(){try{var e=c.current(o.getState());if(t(e,d.current))return;d.current=e}catch(e){u.current=e}a({})}return s.onStateChange=checkForUpdates,s.trySubscribe(),checkForUpdates(),function(){return s.tryUnsubscribe()}},[o,s]),n}var s={"connect":connect,"Provider":AU,"getStore":getStore,"setStore":setStore,"useDispatch":useDispatch,"useSelector":useSelector,"useStore":useStore,"ReduxContext":i};u.default=s,u.connect=connect,u.Provider=AU,u.getStore=getStore,u.setStore=setStore,u.useDispatch=useDispatch,u.useSelector=useSelector,u.useStore=useStore,u.ReduxContext=i}).call(this,c(13))},,function(e,i,a){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{"value":!0});var n,r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(57));n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:t;var o=(0,r.default)(n);i.default=o}).call(this,a(13),a(56)(e))},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{"enumerable":!0,"get":function get(){return e.l}}),Object.defineProperty(e,"id",{"enumerable":!0,"get":function get(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function symbolObservablePonyfill(e){var t,n=e.Symbol;"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable";return t}},function(e,t,n){"use strict";function createThunkMiddleware(o){return function(e){var n=e.dispatch,r=e.getState;return function(t){return function(e){return"function"==typeof e?e(n,r,o):t(e)}}}}t.__esModule=!0;var r=createThunkMiddleware();r.withExtraArgument=createThunkMiddleware,t.default=r},function(y,g,e){"use strict";(function(P){var e,s,p,h,w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};h=function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}})}function r(e,t){Object.defineProperty(this,"kind",{"value":e,"enumerable":!0}),t&&t.length&&Object.defineProperty(this,"path",{"value":t,"enumerable":!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{"value":t,"enumerable":!0}),Object.defineProperty(this,"rhs",{"value":r,"enumerable":!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{"value":t,"enumerable":!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{"value":t,"enumerable":!0})}function a(e,t,n){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{"value":t,"enumerable":!0}),Object.defineProperty(this,"item",{"value":n,"enumerable":!0})}function f(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function u(e){var t=void 0===e?"undefined":R(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(r,s,c,d,e,t,p){p=p||[];var m=(e=e||[]).slice(0);if(void 0!==t){if(d){if("function"==typeof d&&d(m,t))return;if("object"===(void 0===d?"undefined":R(d))){if(d.prefilter&&d.prefilter(m,t))return;if(d.normalize){var h=d.normalize(m,t,r,s);h&&(r=h[0],s=h[1])}}}m.push(t)}"regexp"===u(r)&&"regexp"===u(s)&&(r=r.toString(),s=s.toString());var y=void 0===r?"undefined":R(r),g=void 0===s?"undefined":R(s),v="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(t),_="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(t);if(!v&&_)c(new o(m,s));else if(!_&&v)c(new i(m,r));else if(u(r)!==u(s))c(new n(m,r,s));else if("date"===u(r)&&r-s!=0)c(new n(m,r,s));else if("object"===y&&null!==r&&null!==s)if(p.filter(function(e){return e.lhs===r}).length)r!==s&&c(new n(m,r,s));else{if(p.push({"lhs":r,"rhs":s}),Array.isArray(r)){var b;for(r.length,b=0;b<r.length;b++)b>=s.length?c(new a(m,b,new i(void 0,r[b]))):l(r[b],s[b],c,d,m,b,p);for(;b<s.length;)c(new a(m,b,new o(void 0,s[b++])))}else{var S=Object.keys(r),T=Object.keys(s);S.forEach(function(e,t){var n=T.indexOf(e);0<=n?(l(r[e],s[e],c,d,m,e,p),T=f(T,n)):l(r[e],void 0,c,d,m,e,p)}),T.forEach(function(e){l(void 0,s[e],c,d,m,e,p)})}p.length=p.length-1}else r!==s&&("number"===y&&isNaN(r)&&isNaN(s)||c(new n(m,r,s)))}function c(e,t,n,r){return r=r||[],l(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function d(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function s(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":s(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":s(e[t],n.index,n.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=n.rhs}return e}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function v(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+A[t].text,function y(e){return"color: "+A[e].color+"; font-weight: bold"}(t)].concat(E(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,n,r){switch(void 0===e?"undefined":R(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,E(n)):e[r];case"function":return e(t);default:return e}}function x(A,U){var P=U.logger,w=U.actionTransformer,e=U.titleFormatter,O=void 0===e?function w(e){var o=e.timestamp,i=e.duration;return function(e,t,n){var r=["action"];return r.push("%c"+String(e.type)),o&&r.push("%c@ "+t),i&&r.push("%c(in "+n.toFixed(2)+" ms)"),r.join(" ")}}(U):e,j=U.collapsed,k=U.colors,I=U.level,x=U.diff,L=void 0===U.titleFormatter;A.forEach(function(e,t){var n=e.started,r=e.startedTime,o=e.action,i=e.prevState,a=e.error,s=e.took,u=e.nextState,c=A[t+1];c&&(u=c.prevState,s=c.started-n);var d=w(o),l="function"==typeof j?j(function(){return u},o,e):j,f=M(r),p=k.title?"color: "+k.title(d)+";":"",h=["color: gray; font-weight: lighter;"];h.push(p),U.timestamp&&h.push("color: gray; font-weight: lighter;"),U.duration&&h.push("color: gray; font-weight: lighter;");var y=O(d,f,s);try{l?k.title&&L?P.groupCollapsed.apply(P,["%c "+y].concat(h)):P.groupCollapsed(y):k.title&&L?P.group.apply(P,["%c "+y].concat(h)):P.group(y)}catch(e){P.log(y)}var g=m(I,d,[i],"prevState"),v=m(I,d,[d],"action"),_=m(I,d,[a,i],"error"),S=m(I,d,[u],"nextState");if(g)if(k.prevState){var T="color: "+k.prevState(i)+"; font-weight: bold";P[g]("%c prev state",T,i)}else P[g]("prev state",i);if(v)if(k.action){var R="color: "+k.action(d)+"; font-weight: bold";P[v]("%c action    ",R,d)}else P[v]("action    ",d);if(a&&_)if(k.error){var E="color: "+k.error(a,i)+"; font-weight: bold;";P[_]("%c error     ",E,a)}else P[_]("error     ",a);if(S)if(k.nextState){var C="color: "+k.nextState(u)+"; font-weight: bold";P[S]("%c next state",C,u)}else P[S]("next state",u);x&&b(i,u,P,l);try{P.groupEnd()}catch(e){P.log("—— log end ——")}})}function S(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign({},U,e),t=a.logger,s=a.stateTransformer,u=a.errorTransformer,c=a.predicate,d=a.logErrors,l=a.diffPredicate;if(void 0===t)return function(){return function(t){return function(e){return t(e)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(t){return function(e){return t(e)}}};var f=[];return function(e){var i=e.getState;return function(o){return function(e){if("function"==typeof c&&!c(i,e))return o(e);var t={};f.push(t),t.started=T.now(),t.startedTime=new Date,t.prevState=s(i()),t.action=e;var n=void 0;if(d)try{n=o(e)}catch(e){t.error=u(e)}else n=o(e);t.took=T.now()-t.started,t.nextState=s(i());var r=a.diff&&"function"==typeof l?l(i,e):a.diff;if(x(f,Object.assign({},a,{"diff":r})),f.length=0,t.error)throw t.error;return n}}}}function UX(e,t){return function E(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e}var v,_,M=function D(e){return UX(e.getHours(),2)+":"+UX(e.getMinutes(),2)+":"+UX(e.getSeconds(),2)+"."+UX(e.getMilliseconds(),3)},T="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,R="function"==typeof Symbol&&"symbol"==w(Symbol.iterator)?function(e){return void 0===e?"undefined":w(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":w(e)},E=function P(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},C=[];v="object"===(void 0===P?"undefined":R(P))&&P?P:"undefined"!=typeof window?window:{},(_=v.DeepDiff)&&C.push(function(){void 0!==_&&v.DeepDiff===c&&(v.DeepDiff=_,_=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{"diff":{"value":c,"enumerable":!0},"observableDiff":{"value":l,"enumerable":!0},"applyDiff":{"value":function h(t,r,o){if(t&&r){l(t,r,function n(e){o&&!o(t,r,e)||d(t,r,e)})}},"enumerable":!0},"applyChange":{"value":d,"enumerable":!0},"revertChange":{"value":function g(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":!function p(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":p(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":p(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=f(e,t)}return e}(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}},"enumerable":!0},"isConflict":{"value":function value(){return void 0!==_},"enumerable":!0},"noConflict":{"value":function value(){return C&&(C.forEach(function(e){e()}),C=null),c},"enumerable":!0}});function aY(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.dispatch,r=t.getState;return"function"==typeof n||"function"==typeof r?S()({"dispatch":n,"getState":r}):void 0}var A={"E":{"color":"#2196F3","text":"CHANGED:"},"N":{"color":"#4CAF50","text":"ADDED:"},"D":{"color":"#F44336","text":"DELETED:"},"A":{"color":"#2196F3","text":"ARRAY:"}},U={"level":"log","logger":console,"logErrors":!0,"collapsed":void 0,"predicate":void 0,"duration":!1,"timestamp":!0,"stateTransformer":function stateTransformer(e){return e},"actionTransformer":function actionTransformer(e){return e},"errorTransformer":function errorTransformer(e){return e},"colors":{"title":function title(){return"inherit"},"prevState":function prevState(){return"#9E9E9E"},"action":function action(){return"#03A9F4"},"nextState":function nextState(){return"#4CAF50"},"error":function error(){return"#F20404"}},"diff":!1,"diffPredicate":void 0,"transformer":void 0};e.defaults=U,e.createLogger=S,e.logger=aY,e.default=aY,Object.defineProperty(e,"__esModule",{"value":!0})},"object"==w(g)&&void 0!==y?h(g):(s=[g],void 0===(p="function"==typeof(e=h)?e.apply(g,s):e)||(y.exports=p))}).call(this,e(13))},,,function(e,t,n){var r={"./baidu.ts":63,"./douyin.ts":64,"./jizhao.ts":25};function webpackContext(e){var t=webpackContextResolve(e);return n(t)}function webpackContextResolve(e){if(n.o(r,e))return r[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}webpackContext.keys=function webpackContextKeys(){return Object.keys(r)},webpackContext.resolve=webpackContextResolve,(e.exports=webpackContext).id=62},function(e,t,n){"use strict";e.exports={"PAGETITLE":"鱼泡网-","TOKEN":"baidu","UNITID":"adunit-80f40e8b4f60c3f6","INVITESOURCE":"712790d9629c6dcea00e3f5bff60132b","USESUBSCRIBEMESSAGE":!1,"ISCANSHARE":!0}},function(e,t,n){"use strict";e.exports={"PAGETITLE":"鱼泡网-","TOKEN":"douyin","UNITID":"adunit-80f40e8b4f60c3f6","INVITESOURCE":"712790d9629c6dcea00e3f5bff60132b","USESUBSCRIBEMESSAGE":!1,"ISCANSHARE":!0}},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function AMapWX(e){this.key=e.key,this.requestConfig={"key":e.key,"s":"rsx","platform":"WXJS","appname":e.key,"sdkversion":"1.2.0","logversion":"2.0"}}AMapWX.prototype.getWxLocation=function(t,n){wx.getLocation({"type":"gcj02","success":function success(e){var t=e.longitude+","+e.latitude;wx.setStorage({"key":"userLocation","data":t}),n(t)},"fail":function fail(e){wx.getStorage({"key":"userLocation","success":function success(e){e.data&&n(e.data)}}),t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getRegeo=function(l){function c(d){var e=t.requestConfig;wx.request({"url":"https://restapi.amap.com/v3/geocode/regeo","data":{"key":t.key,"location":d,"extensions":"all","s":e.s,"platform":e.platform,"appname":t.key,"sdkversion":e.sdkversion,"logversion":e.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n,r,o,i,a,s,u,c;e.data.status&&"1"==e.data.status?(n=(t=e.data.regeocode).addressComponent,r=[],o="",t&&t.roads[0]&&t.roads[0].name&&(o=t.roads[0].name+"附近"),i=d.split(",")[0],a=d.split(",")[1],t.pois&&t.pois[0]&&(o=t.pois[0].name+"附近",(s=t.pois[0].location)&&(i=parseFloat(s.split(",")[0]),a=parseFloat(s.split(",")[1]))),n.provice&&r.push(n.provice),n.city&&r.push(n.city),n.district&&r.push(n.district),n.streetNumber&&n.streetNumber.street&&n.streetNumber.number?(r.push(n.streetNumber.street),r.push(n.streetNumber.number)):(u="",t&&t.roads[0]&&t.roads[0].name&&(u=t.roads[0].name),r.push(u)),r=r.join(""),c=[{"iconPath":l.iconPath,"width":l.iconWidth,"height":l.iconHeight,"name":r,"desc":o,"longitude":i,"latitude":a,"id":0,"regeocodeData":t}],l.success(c)):l.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){l.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var t=this;l.location?c(l.location):t.getWxLocation(l,function(e){c(e)})},AMapWX.prototype.getWeather=function(r){function d(e){var t="base";r.type&&"forecast"==r.type&&(t="all"),wx.request({"url":"https://restapi.amap.com/v3/weather/weatherInfo","data":{"key":n.key,"city":e,"extensions":t,"s":o.s,"platform":o.platform,"appname":n.key,"sdkversion":o.sdkversion,"logversion":o.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n;e.data.status&&"1"==e.data.status?e.data.lives?(t=e.data.lives)&&0<t.length&&((n=function c(e){return{"city":{"text":"城市","data":e.city},"weather":{"text":"天气","data":e.weather},"temperature":{"text":"温度","data":e.temperature},"winddirection":{"text":"风向","data":e.winddirection+"风"},"windpower":{"text":"风力","data":e.windpower+"级"},"humidity":{"text":"湿度","data":e.humidity+"%"}}}(t=t[0])).liveData=t,r.success(n)):e.data.forecasts&&e.data.forecasts[0]&&r.success({"forecast":e.data.forecasts[0]}):r.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){r.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var n=this,o=n.requestConfig;r.city?d(r.city):n.getWxLocation(r,function(e){!function e(t){wx.request({"url":"https://restapi.amap.com/v3/geocode/regeo","data":{"key":n.key,"location":t,"extensions":"all","s":o.s,"platform":o.platform,"appname":n.key,"sdkversion":o.sdkversion,"logversion":o.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n;e.data.status&&"1"==e.data.status?((n=e.data.regeocode).addressComponent?t=n.addressComponent.adcode:n.aois&&0<n.aois.length&&(t=n.aois[0].adcode),d(t)):r.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){r.fail({"errCode":"0","errMsg":e.errMsg||""})}})}(e)})},AMapWX.prototype.getPoiAround=function(i){function d(e){var t={"key":n.key,"location":e,"s":r.s,"platform":r.platform,"appname":n.key,"sdkversion":r.sdkversion,"logversion":r.logversion};i.querytypes&&(t.types=i.querytypes),i.querykeywords&&(t.keywords=i.querykeywords),wx.request({"url":"https://restapi.amap.com/v3/place/around","data":t,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n,r,o;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(t=[],n=0;n<e.pois.length;n++)r=0==n?i.iconPathSelected:i.iconPath,t.push({"latitude":parseFloat(e.pois[n].location.split(",")[1]),"longitude":parseFloat(e.pois[n].location.split(",")[0]),"iconPath":r,"width":22,"height":32,"id":n,"name":e.pois[n].name,"address":e.pois[n].address});o={"markers":t,"poisData":e.pois},i.success(o)}}else i.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){i.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var n=this,r=n.requestConfig;i.location?d(i.location):n.getWxLocation(i,function(e){d(e)})},AMapWX.prototype.getStaticmap=function(n){function f(e){r.push("location="+e),n.zoom&&r.push("zoom="+n.zoom),n.size&&r.push("size="+n.size),n.scale&&r.push("scale="+n.scale),n.markers&&r.push("markers="+n.markers),n.labels&&r.push("labels="+n.labels),n.paths&&r.push("paths="+n.paths),n.traffic&&r.push("traffic="+n.traffic);var t=o+r.join("&");n.success({"url":t})}var e,r=[],o="https://restapi.amap.com/v3/staticmap?";r.push("key="+this.key),e=this.requestConfig,r.push("s="+e.s),r.push("platform="+e.platform),r.push("appname="+e.appname),r.push("sdkversion="+e.sdkversion),r.push("logversion="+e.logversion),n.location?f(n.location):this.getWxLocation(n,function(e){f(e)})},AMapWX.prototype.getInputtips=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.location&&(n.location=t.location),t.keywords&&(n.keywords=t.keywords),t.type&&(n.type=t.type),t.city&&(n.city=t.city),t.citylimit&&(n.citylimit=t.citylimit),wx.request({"url":"https://restapi.amap.com/v3/assistant/inputtips","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.tips&&t.success({"tips":e.data.tips})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getDrivingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),t.strategy&&(n.strategy=t.strategy),t.waypoints&&(n.waypoints=t.waypoints),t.avoidpolygons&&(n.avoidpolygons=t.avoidpolygons),t.avoidroad&&(n.avoidroad=t.avoidroad),wx.request({"url":"https://restapi.amap.com/v3/direction/driving","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.route&&t.success({"paths":e.data.route.paths,"taxi_cost":e.data.route.taxi_cost||""})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getWalkingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),wx.request({"url":"https://restapi.amap.com/v3/direction/walking","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.route&&t.success({"paths":e.data.route.paths})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getTransitRoute=function(n){var e=this.requestConfig,t={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};n.origin&&(t.origin=n.origin),n.destination&&(t.destination=n.destination),n.strategy&&(t.strategy=n.strategy),n.city&&(t.city=n.city),n.cityd&&(t.cityd=n.cityd),wx.request({"url":"https://restapi.amap.com/v3/direction/transit/integrated","data":t,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){if(e&&e.data&&e.data.route){var t=e.data.route;n.success({"distance":t.distance||"","taxi_cost":t.taxi_cost||"","transits":t.transits})}},"fail":function fail(e){n.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getRidingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),wx.request({"url":"https://restapi.amap.com/v4/direction/bicycling","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.data&&t.success({"paths":e.data.data.paths})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},e.exports.AMapWX=AMapWX},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.default={"msg":{"id":"z5y8OFD9gs0SY0sT7FZwiWsrzT3rNp3CJFH7yhv7dUE","type":1},"pay":{"id":"vpEpkHfo5tlmGB8oZXq-qVU3ySmsxTzPrgNsv_2l6Go","type":0},"complain":{"id":"uZcoNQz86gAr3P4DYtgt85PnVgMcN_Je27TeHdKhz14","type":5},"auth":{"id":"6Kda5y-LXhIySRw-ouD94xMnndZplmvfsmmAZ9kbKp4","type":6},"recruit":{"id":"G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A","type":3},"resume":{"id":"G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A","type":4}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.contextItem=void 0;var we=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Oe=n(0),je=_interopRequireDefault(Oe),ke=n(1),Ie=n(2),xe=n(6);n(173);_interopRequireDefault(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var Le=t.contextItem=(0,Oe.createContext)({}),o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Topping,je.default.Component),r(Topping,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(Topping.prototype.__proto__||Object.getPrototypeOf(Topping.prototype),"_constructor",this).call(this,e),this.$$refs=new je.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var r=this;this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,Oe.useRouter)().params,i=o.id,c=o.type,d=o.rec,l=o.areaData,f=o.endTimes,p=o.endTimeStr,a=je.default.getStorageSync(xe.UserInfo),s=(0,Oe.useState)({"top_rules":[]}),u=we(s,2),m=u[0],h=u[1],y=(0,Oe.useState)(0),g=we(y,2),v=g[0],_=g[1],b=(0,Oe.useState)(0),S=we(b,2),T=S[0],R=S[1],E=(0,Oe.useState)("请选择置顶天数"),C=we(E,2),A=C[0],U=C[1],P=(0,Oe.useState)("延长"),w=we(P,2),O=w[0],j=w[1],k=(0,Oe.useState)([]),I=we(k,2),x=I[0],L=I[1],M=(0,Oe.useState)({"max_city":0,"max_province":0}),D=we(M,2),N=D[0],F=D[1],q=(0,Oe.useState)({"city":[],"province":[],"whole":[]}),$=we(q,2),G=$[0],Q=$[1],B=(0,Oe.useState)([]),W=we(B,2),H=W[0],V=(W[1],(0,Oe.useState)("")),z=we(V,2),Y=z[0],K=z[1],X=(0,Oe.useState)(0),J=we(X,2),Z=J[0],ee=J[1],te=(0,Oe.useState)(!1),ne=we(te,2),re=ne[0],oe=ne[1],ie=(0,Oe.useState)(""),ae=we(ie,2),se=ae[0],ue=ae[1],ce=(0,Oe.useState)(0),de=we(ce,2),le=de[0],fe=de[1],pe=(0,Oe.useState)(0),me=we(pe,2),he=(me[0],me[1],(0,Oe.useState)("1")),ye=we(he,2),ge=(ye[0],ye[1],(0,Oe.useState)({"max_number":0,"province_integral":0,"max_top_days":0,"max_city":0,"max_province":0})),ve=we(ge,2),_e=ve[0],be=ve[1];function e4(e){if(U(x[e.detail.value]),c){j("修改"),oe(!0);var t=function getMyDate(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),i=t.getHours(),a=t.getMinutes();return t.getSeconds(),n+"-"+Se(r)+"-"+Se(o)+" "+Se(i)+":"+Se(a)}(864e5*(parseInt(e.detail.value)+1)+1e3*Z);ue(t);var n=le,r=void 0;r=d?G.whole.length?500:20*G.city.length+20*G.province.length:G.whole.length?500:10*G.city.length+20*G.province.length;var o=(Z-(new Date).getTime()/1e3)/86400,i=void 0;i=n===r?r*(parseInt(e.detail.value)+1):0<r-n?d?Math.round((r-n)*o+(20*G.city.length+20*G.province.length)*(parseInt(e.detail.value)+1)):Math.round((r-n)*o+r*(parseInt(e.detail.value)+1)):n*(parseInt(e.detail.value)+1),_(i)}else if(G){var a=0;a=G.whole.length?500*(parseInt(e.detail.value)+1):d?(20*G.city.length+20*G.province.length)*(parseInt(e.detail.value)+1):(10*G.city.length+20*G.province.length)*(parseInt(e.detail.value)+1),_(a)}R(parseInt(e.detail.value)+1)}function f4(e){je.default.navigateTo({"url":e})}function h4(){f4("/pages/topping/distruction/index?max_city="+N.max_city+"&max_province="+N.max_province)}function n4(n){d&&"1"===n.pid&&(G.city.map(function(e,t){e.id===n.id&&G.city.splice(t,1)}),Q({"city":G.city,"province":G.province,"whole":G.whole})),"1"===n.pid?G.province.map(function(e,t){e.id===n.id&&G.province.splice(t,1)}):"0"===n.pid?G.whole.map(function(e,t){e.id===n.id&&G.whole.splice(t,1)}):G.city.map(function(e,t){e.id===n.id&&G.city.splice(t,1)}),Q({"city":G.city,"province":G.province,"whole":G.whole});var e=le,t=void 0;t=d?G.whole.length?500:20*G.city.length+20*G.province.length:G.whole.length?500:10*G.city.length+20*G.province.length;var r=(Z-(new Date).getTime()/1e3)/86400,o=void 0;0!==T&&e===t?o=t*T:0===T&&t<e?o=(t-e)*T:0===T?e<t&&(o=Math.round((t-e)*r)):o=0<t-e?Math.round((t-e)*r+t*T):e*T,_(o<=0?0:o)}function p4(){f4(d?"/pages/topping/distruction/index?max_city="+_e.max_city+"&max_province="+_e.max_province:"/pages/topping/distruction/index?max_city="+N.max_city+"&max_province="+N.max_province)}(0,Oe.useEffect)(function(){if(c&&!d){var e={"job_id":i,"time":a.tokenTime};(0,ke.jobGetTopAreasAction)(e).then(function(e){"ok"===e.errcode?(Q({"city":e.data.top_city,"province":e.data.top_province,"whole":e.data.top_country}),K(e.data.end_time_string),ee(e.data.end_time),fe(e.data.max_price)):je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})}d?(je.default.setNavigationBarTitle({"title":"找活置顶"}),(0,ke.resumesTopConfigV2Action)({"interface_version":"v2"}).then(function(e){if("ok"===e.errcode){h({"top_rules":e.data.top_rules});for(var t=[],n=0;n<e.data.max_top_days;n++)t.push(n+1+"天");if(c&&l){var r,o=JSON.parse(l),i=[],a=[],s=[],u=Math.ceil((parseInt(f)-(new Date).getTime()/1e3)/86400);o.map(function(e){"1"===e.pid?i.push(e):"0"===e.pid?s.push(e):a.push(e)}),r=(20*i.length+20*a.length)*u,Q({"city":i,"province":a,"whole":s}),K(p),ee(parseInt(f)),fe(r)}L(t),F({"max_city":e.data.max_city,"max_province":e.data.max_province}),be({"province_integral":e.data.province_integral,"max_number":e.data.max_number,"max_top_days":e.data.max_top_days,"max_province":e.data.max_province,"max_city":e.data.max_city})}else je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})):(0,ke.jobTopConfigAction)().then(function(e){if("ok"===e.errcode){h({"top_rules":e.data.top_rules}),F({"max_city":e.data.max_city,"max_province":e.data.max_province});for(var t=[],n=0;n<e.data.max_top_days;n++)t.push(n+1+"天");L(t)}else je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})},[]);var Se=function addZero(e){return parseInt(e)<10&&(e="0"+e),e},Te=function calcPrice(e,t,n){if(e||t||n)if(c){var r=le,o=(Z-(new Date).getTime()/1e3)/86400,i=void 0;i=d?n.length?500:20*e.length+20*t.length:n.length?500:10*e.length+20*t.length;var a=void 0;0!==T&&r===i?a=i*T:0===T&&i<r?a=(i-r)*T:0===T?r<i&&(a=Math.round((i-r)*o)):a=0<i-r?d?Math.round(i-r+(20*e.length+20*t.length)*T):Math.round((i-r)*o+i*T):r*T;var s=0;s=a<=0?0:s,_(a)}else{var u=0;u=n.length?500*T:d?(20*e.length+20*t.length)*T:(10*e.length+20*t.length)*T,_(u)}},Re={"AreParams":G,"setAreParams":function setAreParams(e,t,n){return function transferFun(e){var t=e.city,n=e.province,r=e.whole;Q({"city":t,"province":n,"whole":r}),Te(t,n,r)}({"city":e,"province":t,"whole":n})}};Le.Provider(Re),this.anonymousFunc4=h4,this.anonymousFunc5=p4,this.anonymousFunc6=h4,this.anonymousFunc7=p4,this.anonymousFunc8=function(e){return e4(e)},this.anonymousFunc9=function handleCancel(){var e=le,t=10*G.city.length+20*G.province.length,n=(Z-(new Date).getTime()/1e3)/86400,r=void 0;if(t<e){var o=t-e;r=0<o?o:0}else r=e==t?0:e<t?Math.round((t-e)*n):e;_(r),oe(!1),R(0)},this.anonymousFunc10=function(e){return e4(e)},this.anonymousFunc11=function handleTopping(){var e=G.province.map(function(e){return e.id}),t=G.city.map(function(e){return e.id}),n=G.whole.map(function(e){return e.id});if(e.length||t.length||n.length){var r={"is_country":n.toString(),"mid":a.userId,"province_ids":e.toString(),"city_ids":t.toString(),"day":T,"job_id":i,"time":a.tokenTime},o={"is_country":G.whole.length?1:0,"mid":a.userId,"province_ids":e.toString(),"city_ids":t.toString(),"update_days":T,"job_id":i,"time":a.tokenTime,"update_integral":v};if(c)d?(0,ke.resumesUpdateTopResumeAction)(o).then(function(e){"ok"!==e.errcode?"get_integral"!==e.errcode?"auth_forbid"!==e.errcode?"member_forbid"!=e.errcode?je.default.showToast({"title":e.errmsg,"icon":"none","duration":1500}):je.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var t=Ie.SERVERPHONE;je.default.makePhoneCall({"phoneNumber":t})}}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?je.default.navigateBack({"delta":1}):e.confirm&&je.default.redirectTo({"url":"/pages/realname/index?backtwo=backtwo"})}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!0,"success":function success(e){1==e.confirm&&je.default.navigateTo({"url":"/pages/getintegral/index"})}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){je.default.navigateBack({"delta":1})}})}):(0,ke.jobChangeTopAreasAction)(o).then(function(e){"ok"!==e.errcode?"get_integral"!==e.errcode?"auth_forbid"!==e.errcode?"member_forbid"!=e.errcode?je.default.showToast({"title":e.errmsg,"icon":"none","duration":1500}):je.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var t=Ie.SERVERPHONE;je.default.makePhoneCall({"phoneNumber":t})}}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?je.default.navigateBack({"delta":1}):e.confirm&&je.default.redirectTo({"url":"/pages/realname/index?backtwo=backtwo"})}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!0,"success":function success(e){1==e.confirm&&je.default.navigateTo({"url":"/pages/getintegral/index"})}}):je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){je.default.navigateBack({"delta":1})}})});else{if(!e||!t)return void je.default.showModal({"title":"温馨提示","content":"请设置置顶城市","showCancel":!1});if(0===T)return void je.default.showModal({"title":"温馨提示","content":"请设置置顶天数","showCancel":!1});d?(0,ke.resumesDoTopV2Action)(r).then(function(e){"ok"===e.errcode&&je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){je.default.navigateBack({"delta":1})}})}):(0,ke.jobDoTopAction)(r).then(function(e){"ok"===e.errcode&&je.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){je.default.navigateBack({"delta":1})}})})}}else je.default.showModal({"title":"温馨提示","content":"请选择您的置顶城市","showCancel":!1})},this.anonymousFunc12=function(){je.default.makePhoneCall({"phoneNumber":Ie.SERVERPHONE})};var Ee=H?H.map(function(e,t){e={"$original":(0,Oe.internal_get_original)(e)};var n="iczzz"+t;return r.anonymousFunc0Map[n]=function(){return n4(e.$original)},{"_$indexKey":n,"$original":e.$original}}):[],Ce=G?G.city.map(function(e,t){e={"$original":(0,Oe.internal_get_original)(e)};var n="idzzz"+t;return r.anonymousFunc1Map[n]=function(){return n4(e.$original)},{"_$indexKey2":n,"$original":e.$original}}):[],Ae=G?G.province.map(function(e,t){e={"$original":(0,Oe.internal_get_original)(e)};var n="iezzz"+t;return r.anonymousFunc2Map[n]=function(){return n4(e.$original)},{"_$indexKey3":n,"$original":e.$original}}):[],Ue=G?G.whole.map(function(e,t){e={"$original":(0,Oe.internal_get_original)(e)};var n="ifzzz"+t;return r.anonymousFunc3Map[n]=function(){return n4(e.$original)},{"_$indexKey4":n,"$original":e.$original}}):[],Pe=m.top_rules.map(function(e,t){return{"$loopState__temp2":t+t,"$original":(e={"$original":(0,Oe.internal_get_original)(e)}).$original}});return Object.assign(this.__state,{"params":G,"data":m,"loopArray74":Ee,"loopArray75":Ce,"loopArray76":Ae,"loopArray77":Ue,"loopArray78":Pe,"province":H,"IMGCDNURL":Ie.IMGCDNURL,"rec":d,"basics":_e,"type":c,"list":x,"displayTime":re,"num":v,"endTime":Y,"editData":O,"newTime":se,"day":A,"SERVERPHONE":Ie.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,r)}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc1Map[e]&&(t=this.anonymousFunc1Map)[e].apply(t,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc2Map[e]&&(t=this.anonymousFunc2Map)[e].apply(t,r)}},{"key":"anonymousFunc3","value":function anonymousFunc3(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc3Map[e]&&(t=this.anonymousFunc3Map)[e].apply(t,r)}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),Topping);function Topping(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Topping);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Topping.__proto__||Object.getPrototypeOf(Topping)).apply(this,arguments));return e.config={"navigationBarTitleText":"招工置顶"},e.$usedState=["params","data","loopArray74","loopArray75","loopArray76","loopArray77","loopArray78","province","IMGCDNURL","rec","basics","type","list","displayTime","num","endTime","editData","newTime","day","SERVERPHONE"],e.anonymousFunc0Map={},e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.anonymousFunc3Map={},e.customComponents=[],e}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],o.$$componentPath="pages/topping/index",o.config={"navigationBarTitleText":"招工置顶"},t.default=o,Page(n(0).default.createComponent(o,!0))},function(e,t,n){},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.getUseResume=function getUseResume(e){return{"type":r.GETUSERRESUME,"data":e}},t.setUseResume=function setUseResume(e){return{"type":r.SETUSERRESUME,"data":e}},t.setIntroduceInfo=function setIntroduceInfo(e){return{"type":r.SETINTRODUCE,"data":e}},t.setCertificateList=function setCertificateList(e){return{"type":r.SETCERTIFICATE,"data":e}},t.setProjectList=function setProjectList(e){return{"type":r.SETPROJECT,"data":e}};var r=n(34)},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setResumeInfoConfig=function setResumeInfoConfig(e){return{"type":r.SET,"data":e}},t.getResumeInfoConfig=function getResumeInfoConfig(){return{"type":r.GET}};var r=n(33)},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var s=n(209);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}var e={"array":shim.isRequired=shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(45),o=n(246),i=n(247),a=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(a&&a in Object(e)?o:i)(e)}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(245),i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")();e.exports=a},function(r,e,t){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n="object"==(void 0===e?"undefined":t(e))&&e&&e.Object===Object&&e;r.exports=n}).call(this,t(13))},function(e,t,n){"use strict";var r=n(45),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0}catch(e){}var r=a.call(e);return t?e[s]=n:delete e[s],r}},function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function objectToString(e){return r.call(e)}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function isObject(e){var t=void 0===e?"undefined":r(e);return null!=e&&("object"==t||"function"==t)}}]]);
=======
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@tarojs/redux/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tarojs/redux/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof2(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var Taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
var Taro__default = _interopDefault(Taro);

var store = null;
var appGlobal = global || {};
var globalRef = Object.getPrototypeOf(appGlobal) || appGlobal;
function getStore() {

  return store;
}
function setStore(arg) {
  {
    store = arg;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function isObject(arg) {
  return arg != null && _typeof(arg) === 'object' && !Array.isArray(arg);
}
function mergeObjects(obj1, obj2) {
  var result = Object.assign({}, obj1);

  if (isObject(obj1) && isObject(obj2)) {
    for (var p in obj2) {
      if (isObject(obj1[p]) && isObject(obj2[p])) {
        result[p] = mergeObjects(obj1[p], obj2[p]);
      } else {
        result[p] = obj2[p];
      }
    }
  }

  return result;
}

function wrapPropsWithDispatch(mapDispatchToProps, dispatch) {
  if (typeof mapDispatchToProps === 'function') {
    return mapDispatchToProps(dispatch);
  }

  if (isObject(mapDispatchToProps)) {
    return Object.keys(mapDispatchToProps).reduce(function (props, key) {
      var actionCreator = mapDispatchToProps[key];

      if (typeof actionCreator === 'function') {
        props[key] = function () {
          return dispatch(actionCreator.apply(undefined, arguments));
        };
      }

      return props;
    }, {});
  }

  return {};
}

function connect(mapStateToProps, mapDispatchToProps) {
  var store = getStore();
  var dispatch = store.dispatch;
  var initMapDispatch = wrapPropsWithDispatch(mapDispatchToProps, dispatch);
  initMapDispatch.dispatch = dispatch;

  var stateListener = function stateListener() {
    var _this = this;

    var isChanged = false;
    var newMapState = mapStateToProps(store.getState(), this.props);
    var prevProps = Object.assign({}, this.props);
    Object.keys(newMapState).forEach(function (key) {
      var val = newMapState[key];

      if (isObject(val) && isObject(initMapDispatch[key])) {
        val = mergeObjects(val, initMapDispatch[key]);
      }

      if (_this.props[key] !== val) {
        _this.props[key] = val;
        isChanged = true;
      }
    });

    if (isChanged) {
      this.prevProps = prevProps;
      this._unsafeCallUpdate = true;
      this.setState({}, function () {
        delete _this._unsafeCallUpdate;
      });
    }
  };

  return function connectComponent(Component) {
    // 将从redux而来的props从配置中剔除
    var mapState = mapStateToProps(store.getState(), Component.defaultProps || {});
    Component.properties && mapState && Object.keys(mapState).forEach(function (key) {
      delete Component.properties[key];
    });
    var unSubscribe = null;
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(Connect, _Component);

        function Connect(props, isPage) {
          var _this2;

          _classCallCheck(this, Connect);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Connect).call(this, Object.assign.apply(Object, Array.prototype.slice.call(arguments).concat([mergeObjects(mapStateToProps(store.getState(), props), initMapDispatch)])), isPage));
          Object.keys(initMapDispatch).forEach(function (key) {
            _this2["__event_".concat(key)] = initMapDispatch[key];
          });
          return _this2;
        }

        _createClass(Connect, [{
          key: "_constructor",
          value: function _constructor() {
            if (!this.$scope) {
              if (_get(_getPrototypeOf(Connect.prototype), "_constructor", this)) {
                _get(_getPrototypeOf(Connect.prototype), "_constructor", this).call(this, this.props);
              }

              return;
            }

            var store = getStore();
            Object.assign(this.props, mergeObjects(mapStateToProps(store.getState(), this.props), initMapDispatch));
            unSubscribe = store.subscribe(stateListener.bind(this));

            if (_get(_getPrototypeOf(Connect.prototype), "_constructor", this)) {
              _get(_getPrototypeOf(Connect.prototype), "_constructor", this).call(this, this.props);
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (_get(_getPrototypeOf(Connect.prototype), "componentWillUnmount", this)) {
              _get(_getPrototypeOf(Connect.prototype), "componentWillUnmount", this).call(this);
            }

            if (unSubscribe) {
              unSubscribe();
            }

            unSubscribe = null;
          }
        }]);

        return Connect;
      }(Component)
    );
  };
}

var Provider = function Provider() {
  _classCallCheck(this, Provider);
};

var ReduxContext = Taro__default.createContext(null);

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Taro.useContext(ReduxContext);
  return contextValue;
}

/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

function useStore() {
  var _useReduxContext = useReduxContext(),
      store = _useReduxContext.store;

  return store;
}

/**
 * A hook to access the redux `dispatch` function. Note that in most cases where you
 * might want to use this hook it is recommended to use `useActions` instead to bind
 * action creators to the `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useReduxDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

function useDispatch() {
  var store = useStore();
  return store.dispatch;
}

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var getBatch = function getBatch() {
  return batch;
};

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  _createClass(Subscription, [{
    key: "addNestedSub",
    value: function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    }
  }, {
    key: "notifyNestedSubs",
    value: function notifyNestedSubs() {
      this.listeners.notify();
    }
  }, {
    key: "handleChangeWrapper",
    value: function handleChangeWrapper() {
      if (this.onStateChange) {
        this.onStateChange();
      }
    }
  }, {
    key: "isSubscribed",
    value: function isSubscribed() {
      return Boolean(this.unsubscribe);
    }
  }, {
    key: "trySubscribe",
    value: function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = createListenerCollection();
      }
    }
  }, {
    key: "tryUnsubscribe",
    value: function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    }
  }]);

  return Subscription;
}();

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

function invariant(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

var refEquality = function refEquality(a, b) {
  return a === b;
};
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

function useSelector(selector) {
  var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
  invariant(selector, "You must pass a selector to useSelectors");

  var _useReduxContext = useReduxContext(),
      store = _useReduxContext.store,
      contextSub = _useReduxContext.subscription;

  var _useReducer = Taro.useReducer(function (s) {
    return s + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceRender = _useReducer2[1];

  var subscription = Taro.useMemo(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Taro.useRef();
  var latestSelector = Taro.useRef();
  var latestSelectedState = Taro.useRef();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occured while selecting the store state: ".concat(err.message, ".");

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\nOriginal stack trace:");
    }

    throw new Error(errorMessage);
  }

  Taro.useEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Taro.useEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}

var index = {
  connect: connect,
  Provider: Provider,
  getStore: getStore,
  setStore: setStore,
  useDispatch: useDispatch,
  useSelector: useSelector,
  useStore: useStore,
  ReduxContext: ReduxContext
};

exports.default = index;
exports.connect = connect;
exports.Provider = Provider;
exports.getStore = getStore;
exports.setStore = setStore;
exports.useDispatch = useDispatch;
exports.useSelector = useSelector;
exports.useStore = useStore;
exports.ReduxContext = ReduxContext;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/redux/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@tarojs/redux/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/redux/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro-tt/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@tarojs/taro-tt/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* eslint-disable */
var objectIs = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap =
/*#__PURE__*/
function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    this.cache = [];
    this.size = 0;
  }

  _createClass(SimpleMap, [{
    key: "set",
    value: function set(k, v) {
      var len = this.cache.length;

      if (!len) {
        this.cache.push({
          k: k,
          v: v
        });
        this.size += 1;
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          item.v = v;
          return;
        }
      }

      this.cache.push({
        k: k,
        v: v
      });
      this.size += 1;
    }
  }, {
    key: "get",
    value: function get(k) {
      var len = this.cache.length;

      if (!len) {
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return item.v;
        }
      }
    }
  }, {
    key: "has",
    value: function has(k) {
      var len = this.cache.length;

      if (!len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      var len = this.cache.length;

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          this.cache.splice(i, 1);
          this.size -= 1;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      var len = this.cache.length;
      this.size = 0;

      if (!len) {
        return;
      }

      while (len) {
        this.cache.pop();
        len--;
      }
    }
  }]);

  return SimpleMap;
}();

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return addLeadingSlash(currentPage.route || currentPage.__route__);
}

var nextTick = function nextTick(fn) {
  var _fn;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn = typeof fn === 'function' ? (_fn = fn).bind.apply(_fn, [null].concat(args)) : fn;
  var timerFunc = tt.nextTick ? tt.nextTick : setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function isEmptyObject(obj) {
  if (!obj || !isPlainObject_1(obj)) {
    return false;
  }

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false;
    }
  }

  return true;
}
function isUndefined(o) {
  return o === undefined;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isArray(arg) {
  return Array.isArray(arg);
}
function shakeFnFromObject(obj) {
  var newObj;

  if (isArray(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(shakeFnFromObject(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      if (isFunction(obj[key])) {
        continue;
      }

      var ret = shakeFnFromObject(obj[key]);
      newObj[key] = ret;
    }
  } else {
    return obj;
  }

  return newObj;
}
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function diffArrToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var len = to.length;

  var _loop = function _loop(i) {
    var toItem = to[i];
    var fromItem = from[i];
    var targetKey = "".concat(keyPrev, "[").concat(i, "]");

    if (toItem === fromItem) {
      return "continue";
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = true;
            Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return res;
} // 比较的对象均为plainObject，且函数已被过滤


function diffObjToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var keys = keyList(to);
  var len = keys.length;

  var _loop2 = function _loop2(i) {
    var key = keys[i];
    var toItem = to[key];
    var fromItem = from[key];
    var targetKey = "".concat(keyPrev).concat(key);

    if (toItem === fromItem) {
      return "continue";
    } else if (!hasProp.call(from, key)) {
      res[targetKey] = toItem;
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          // null
          if (!toItem || !fromItem) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = true;
            Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret2 = _loop2(i);

    if (_ret2 === "continue") continue;
  }

  return res;
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _loadTime = new Date().getTime().toString();

var _i = 1;
function getUniqueKey() {
  return _loadTime + _i++;
}

function triggerLoopRef(that, dom, handler) {
  var handlerType = _typeof(handler);

  if (handlerType !== 'function' && handlerType !== 'object') {
    return console.warn('\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A'.concat(handlerType));
  }

  if (handlerType === 'object') {
    handler.current = dom;
  } else if (handlerType === 'function') {
    handler.call(that, dom);
  }
}

function handleLoopRef(component, id, type, handler) {
  if (!component) return null;
  var res;

  if (type === 'component') {
    component.selectComponent(id, function (res) {
      res = res ? res.$component || res : null;
      res && triggerLoopRef(component.$component, res, handler);
    });
  } else {
    var query = wx.createSelectorQuery().in(component);
    res = query.select(id);
    res && triggerLoopRef(component.$component, res, handler);
  }

  return null;
}
var id$1 = 0;

function genId() {
  return String(id$1++);
}

var compIdsMapper;

try {
  compIdsMapper = new Map();
} catch (error) {
  compIdsMapper = new SimpleMap();
}

function genCompid(key, isNeedCreate) {
  if (!taro.Current || !taro.Current.current || !taro.Current.current.$scope) return [];
  var prevId = compIdsMapper.get(key);

  if (isNeedCreate) {
    var _id = genId();

    compIdsMapper.set(key, _id);
    return [prevId, _id];
  } else {
    var _id2 = prevId || genId();

    !prevId && compIdsMapper.set(key, _id2);
    return [null, _id2];
  }
}
var prefix = 0;
function genCompPrefix() {
  return String(prefix++);
}

var data = {};
function cacheDataSet(key, val) {
  data[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = data[key];
  delelteAfterGet && delete data[key];
  return temp;
}
function cacheDataHas(key) {
  return key in data;
}

var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    _defineProperty(this, "map", {});

    _defineProperty(this, "observers", {});
  }

  _createClass(Manager, [{
    key: "set",
    value: function set() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var compid = arguments.length > 1 ? arguments[1] : undefined;
      var previd = arguments.length > 2 ? arguments[2] : undefined;
      if (!compid) return;

      if (previd) {
        this.delete(previd);
      }

      var observers = this.observers;

      if (!this.map[compid]) {
        Object.defineProperty(this.map, compid, {
          configurable: true,
          get: function get() {
            return this["__".concat(compid)];
          },
          set: function set(props) {
            this["__".concat(compid)] = props;
            var component = observers[compid] && observers[compid].component;
            var ComponentClass = observers[compid] && observers[compid].ComponentClass;
            if (!component || !ComponentClass || !component.__isReady) return;
            var nextProps = filterProps(ComponentClass.defaultProps, props, component.props);
            component.props = nextProps;
            nextTick(function () {
              component._unsafeCallUpdate = true;
              updateComponent(component);
              component._unsafeCallUpdate = false;
            });
          }
        });
      }

      this.map[compid] = props;
    }
  }, {
    key: "delete",
    value: function _delete(compid) {
      delete this.map[compid];
      delete this.map["__".concat(compid)];
      delete this.observers[compid];
    }
  }]);

  return Manager;
}();

var propsManager = new Manager();

var anonymousFnNamePreffix = 'funPrivate';
var preloadPrivateKey = '__preload_';
var preloadInitedComponent = '$preloadComponent';
var PRELOAD_DATA_KEY = 'preload';
var pageExtraFns = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];

function bindProperties(weappComponentConf, ComponentClass, isPage) {
  weappComponentConf.properties = {};

  if (isPage) {
    weappComponentConf.properties[preloadPrivateKey] = {
      type: null,
      value: null
    };
  }

  weappComponentConf.properties.compid = {
    type: null,
    value: null,
    observer: function observer(newVal, oldVal) {
      var _this = this;

      // 头条基础库1.38.2后，太早 setData $taroCompReady 为 true 时，setData 虽然成功，但 slot 会不显示。
      // 因此不在 observer 里 initComponent，在组件 attached 时 initComponent 吧。
      // initComponent.apply(this, [ComponentClass, isPage])
      if (oldVal && oldVal !== newVal) {
        var extraProps = this.data.extraProps;
        var component = this.$component;
        propsManager.observers[newVal] = {
          component: component,
          ComponentClass: component.constructor
        };
        var nextProps = filterProps(component.constructor.defaultProps, propsManager.map[newVal], component.props, extraProps || null);
        this.$component.props = nextProps;
        nextTick(function () {
          _this.$component._unsafeCallUpdate = true;
          updateComponent(_this.$component);
          _this.$component._unsafeCallUpdate = false;
        });
      }
    }
  };
}

function bindBehaviors(weappComponentConf, ComponentClass) {
  if (ComponentClass.behaviors) {
    weappComponentConf.behaviors = ComponentClass.behaviors;
  }
}

function bindStaticOptions(weappComponentConf, ComponentClass) {
  if (ComponentClass.options) {
    weappComponentConf.options = ComponentClass.options;
  }
}

function bindStaticFns(weappComponentConf, ComponentClass) {
  for (var key in ComponentClass) {
    typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
  } // 低版本 IOS 下部分属性不能直接访问


  Object.getOwnPropertyNames(ComponentClass).forEach(function (key) {
    var excludes = ['arguments', 'caller', 'length', 'name', 'prototype'];

    if (excludes.indexOf(key) < 0) {
      typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
    }
  });
}

function processEvent(eventHandlerName, obj) {
  if (obj[eventHandlerName]) return;

  obj[eventHandlerName] = function (event) {
    if (event) {
      event.preventDefault = function () {};

      event.stopPropagation = function () {};

      event.currentTarget = event.currentTarget || event.target || {};

      if (event.target) {
        Object.assign(event.target, event.detail);
      }

      Object.assign(event.currentTarget, event.detail);
    }

    var scope = this.$component;
    var callScope = scope;
    var isAnonymousFn = eventHandlerName.indexOf(anonymousFnNamePreffix) > -1;
    var realArgs = [];
    var detailArgs = [];
    var datasetArgs = [];
    var isScopeBinded = false; // 解析从dataset中传过来的参数

    var dataset = event.currentTarget.dataset || {};
    var bindArgs = {};
    var eventType = event.type ? event.type.toLocaleLowerCase() : null;
    if (event.detail && event.detail.__detail) Object.assign(dataset, event.detail.__detail);
    Object.keys(dataset).forEach(function (key) {
      var keyLower = key.toLocaleLowerCase();

      if (/^e/.test(keyLower)) {
        // 小程序属性里中划线后跟一个下划线会解析成不同的结果
        keyLower = keyLower.replace(/^e/, '');

        if (keyLower.indexOf(eventType) >= 0) {
          var argName = keyLower.replace(eventType, '');

          if (/^(a[a-z]|so)$/.test(argName)) {
            bindArgs[argName] = dataset[key];
          }
        }
      }
    }); // 如果是通过triggerEvent触发,并且带有参数

    if (event.detail && event.detail.__arguments && event.detail.__arguments.length > 0) {
      detailArgs = event.detail.__arguments;
    } // 普通的事件（非匿名函数），会直接call


    if (!isAnonymousFn) {
      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          callScope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = _toConsumableArray(datasetArgs).concat(_toConsumableArray(detailArgs), [event]);
    } else {
      // 匿名函数，会将scope作为第一个参数
      var _scope = null;

      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          _scope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [_scope].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    }

    return scope[eventHandlerName].apply(callScope, realArgs);
  };
}

function bindEvents(weappComponentConf, events, isPage) {
  weappComponentConf.methods = weappComponentConf.methods || {};
  var target = isPage ? weappComponentConf : weappComponentConf.methods;
  events.forEach(function (name) {
    processEvent(name, target);
  });
}

function filterProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsFromPropsManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var curAllProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var newProps = Object.assign({}, curAllProps, propsFromPropsManager);

  if (!isEmptyObject(defaultProps)) {
    for (var propName in defaultProps) {
      if (newProps[propName] === undefined) {
        newProps[propName] = defaultProps[propName];
      }
    }
  }

  return newProps;
}
function componentTrigger(component, key, args) {
  args = args || [];

  if (key === 'componentDidMount') {
    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }

    if (component['$$refs'] && component['$$refs'].length > 0) {
      var refs = {};
      var refComponents = [];
      component['$$refs'].forEach(function (ref) {
        refComponents.push(new Promise(function (resolve, reject) {
          var query = tt.createSelectorQuery().in(component.$scope);

          if (ref.type === 'component') {
            component.$scope.selectComponent("#".concat(ref.id), function (target) {
              resolve({
                target: target ? target.$component || target : null,
                ref: ref
              });
            });
          } else {
            resolve({
              target: query.select("#".concat(ref.id)),
              ref: ref
            });
          }
        }));
      });
      Promise.all(refComponents).then(function (targets) {
        targets.forEach(function (_ref) {
          var ref = _ref.ref,
              target = _ref.target;
          taro.commitAttachRef(ref, target, component, refs, true);
          ref.target = target;
        });
        component.refs = Object.assign({}, component.refs || {}, refs); // 此处执行componentDidMount

        component[key] && typeof component[key] === 'function' && component[key].apply(component, _toConsumableArray(args));
      }).catch(function (err) {
        console.error(err);
        component[key] && typeof component[key] === 'function' && component[key].apply(component, _toConsumableArray(args));
      }); // 此处跳过执行componentDidMount，在refComponents完成后再次执行

      return;
    }
  }

  if (key === 'componentWillUnmount') {
    var compid = component.$scope.data.compid;
    if (compid) propsManager.delete(compid);
  }

  component[key] && typeof component[key] === 'function' && component[key].apply(component, _toConsumableArray(args));

  if (key === 'componentWillUnmount') {
    component._dirty = true;
    component._disable = true;
    component.$router = {
      params: {},
      path: ''
    };
    component._pendingStates = [];
    component._pendingCallbacks = []; // refs

    taro.detachAllRef(component);
  }

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }
}
var hasPageInited = false;

function initComponent(ComponentClass, isPage) {
  if (!this.$component || this.$component.__isReady) return; // ready之后才可以setData,
  // ready之前，小程序组件初始化时仍然会触发observer，__isReady为否的时候放弃处理observer

  this.$component.__isReady = true;

  if (isPage && !hasPageInited) {
    hasPageInited = true;
  } // 页面Ready的时候setData更新，此时并未didMount,触发observer但不会触发子组件更新
  // 小程序组件ready，但是数据并没有ready，需要通过updateComponent来初始化数据，setData完成之后才是真正意义上的组件ready
  // 动态组件执行改造函数副本的时,在初始化数据前计算好props


  if (hasPageInited && !isPage) {
    var compid = this.data.compid;

    if (compid) {
      propsManager.observers[compid] = {
        component: this.$component,
        ComponentClass: ComponentClass
      };
    }

    var nextProps = filterProps(ComponentClass.defaultProps, propsManager.map[compid], this.$component.props);
    this.$component.props = nextProps;
  }

  if (hasPageInited || isPage) {
    mountComponent(this.$component);
  }
}

function createComponent(ComponentClass, isPage) {
  var initData = {};
  var componentProps = filterProps(ComponentClass.defaultProps);
  var componentInstance = new ComponentClass(componentProps);
  componentInstance._constructor && componentInstance._constructor(componentProps);

  try {
    taro.Current.current = componentInstance;
    taro.Current.index = 0;
    componentInstance.state = componentInstance._createData() || componentInstance.state;
  } catch (err) {
    if (isPage) {
      console.warn('[Taro warn] \u8BF7\u7ED9\u9875\u9762\u63D0\u4F9B\u521D\u59CB `state` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    } else {
      console.warn('[Taro warn] \u8BF7\u7ED9\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A `defaultProps` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    }

    console.warn(err);
  }

  initData = Object.assign({}, initData, componentInstance.props, componentInstance.state);
  var weappComponentConf = {
    data: initData,
    created: function created() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      isPage && (hasPageInited = false);

      if (isPage && cacheDataHas(preloadInitedComponent)) {
        this.$component = cacheDataGet(preloadInitedComponent, true);
        this.$component.$componentType = 'PAGE';
      } else {
        this.$component = new ComponentClass({}, isPage);
      }

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      this.$component.__propTypes = ComponentClass.propTypes;

      if (isPage) {
        if (cacheDataHas(PRELOAD_DATA_KEY)) {
          var data = cacheDataGet(PRELOAD_DATA_KEY, true);
          this.$component.$router.preload = data;
        }

        Object.assign(this.$component.$router.params, options);

        if (cacheDataHas(options[preloadPrivateKey])) {
          this.$component.$preloadData = cacheDataGet(options[preloadPrivateKey], true);
        } else {
          this.$component.$preloadData = {};
        }

        this.$component.$router.path = getCurrentPageUrl();
        initComponent.apply(this, [ComponentClass, isPage]);
      }
    },
    attached: function attached() {
      initComponent.apply(this, [ComponentClass, isPage]);
    },
    ready: function ready() {
      if (!this.$component.__mounted) {
        this.$component.__mounted = true;
        componentTrigger(this.$component, 'componentDidMount');
      }
    },
    detached: function detached() {
      var component = this.$component;
      componentTrigger(component, 'componentWillUnmount');
      component.hooks.forEach(function (hook) {
        if (isFunction(hook.cleanup)) {
          hook.cleanup();
        }
      });
      var events = component.$$renderPropsEvents;

      if (isArray(events)) {
        events.forEach(function (e) {
          return taro.eventCenter.off(e);
        });
      }
    }
  };

  if (isPage) {
    weappComponentConf['onLoad'] = weappComponentConf['created'];
    weappComponentConf['onReady'] = weappComponentConf['ready'];
    weappComponentConf['onUnload'] = weappComponentConf['detached'];

    weappComponentConf['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        weappComponentConf[fn] = function () {
          var component = this.$component;

          if (component && component[fn] && typeof component[fn] === 'function') {
            return component[fn].apply(component, arguments);
          }
        };
      }
    });
    globPageRegistPath && cacheDataSet(globPageRegistPath, ComponentClass);
  }

  bindProperties(weappComponentConf, ComponentClass, isPage);
  bindBehaviors(weappComponentConf, ComponentClass);
  bindStaticFns(weappComponentConf, ComponentClass);
  bindStaticOptions(weappComponentConf, ComponentClass);
  ComponentClass['$$events'] && bindEvents(weappComponentConf, ComponentClass['$$events'], isPage);

  if (ComponentClass['externalClasses'] && ComponentClass['externalClasses'].length) {
    weappComponentConf['externalClasses'] = ComponentClass['externalClasses'];
  }

  return weappComponentConf;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.fundamental") : 60117,
      w = b ? Symbol.for("react.responder") : 60118,
      x = b ? Symbol.for("react.scope") : 60119;

  function y(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case t:
        case r:
        case d:
          return u;
      }
    }
  }

  function z(a) {
    return y(a) === m;
  }

  exports.typeOf = y;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = t;
  exports.Memo = r;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
  };

  exports.isAsyncMode = function (a) {
    return z(a) || y(a) === l;
  };

  exports.isConcurrentMode = z;

  exports.isContextConsumer = function (a) {
    return y(a) === k;
  };

  exports.isContextProvider = function (a) {
    return y(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return y(a) === n;
  };

  exports.isFragment = function (a) {
    return y(a) === e;
  };

  exports.isLazy = function (a) {
    return y(a) === t;
  };

  exports.isMemo = function (a) {
    return y(a) === r;
  };

  exports.isPortal = function (a) {
    return y(a) === d;
  };

  exports.isProfiler = function (a) {
    return y(a) === g;
  };

  exports.isStrictMode = function (a) {
    return y(a) === f;
  };

  exports.isSuspense = function (a) {
    return y(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (true) {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
          if (format === undefined) {
            throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarningWithoutStack$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  if (false) {} else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty$2.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */

checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

if (true) {
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (true) {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});

var isDEV = typeof process === 'undefined' || !process.env || "development" !== 'production';

function hasNewLifecycle(component) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps,
      getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  return isFunction(getDerivedStateFromProps) || isFunction(getSnapshotBeforeUpdate);
}

function callGetDerivedStateFromProps(component, props, state) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps;
  var newState;

  if (isFunction(getDerivedStateFromProps)) {
    var partialState = getDerivedStateFromProps(props, state);

    if (!isUndefined(partialState)) {
      newState = Object.assign({}, state, partialState);
    } else {
      console.warn('getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。');
    }
  }

  return newState;
}

function callGetSnapshotBeforeUpdate(component, props, state) {
  var getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  var snapshot;

  if (isFunction(getSnapshotBeforeUpdate)) {
    snapshot = getSnapshotBeforeUpdate.call(component, props, state);
  }

  return snapshot;
}

function updateComponent(component) {
  var props = component.props,
      __propTypes = component.__propTypes;

  if (isDEV && __propTypes) {
    var componentName = component.constructor.name;

    if (isUndefined(componentName)) {
      var names = component.constructor.toString().match(/^function\s*([^\s(]+)/);
      componentName = isArray(names) ? names[0] : 'Component';
    }

    propTypes.checkPropTypes(__propTypes, props, 'prop', componentName);
  }

  var prevProps = component.prevProps || props;
  component.props = prevProps;

  if (component.__mounted && component._unsafeCallUpdate === true && !hasNewLifecycle(component) && component.componentWillReceiveProps) {
    component._disable = true;
    component.componentWillReceiveProps(props);
    component._disable = false;
  }

  var state = component.getState();
  var prevState = component.prevState || state;
  var stateFromProps = callGetDerivedStateFromProps(component, props, state);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  var skip = false;

  if (component.__mounted) {
    if (typeof component.shouldComponentUpdate === 'function' && !component._isForceUpdate && component.shouldComponentUpdate(props, state) === false) {
      skip = true;
    } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
      component.componentWillUpdate(props, state);
    }
  }

  component.props = props;
  component.state = state;
  component._dirty = false;
  component._isForceUpdate = false;

  if (!skip) {
    doUpdate(component, prevProps, prevState);
  }

  component.prevProps = component.props;
  component.prevState = component.state;
}

function injectContextType(component) {
  var ctxType = component.constructor.contextType;

  if (ctxType) {
    var context = ctxType.context;
    var emitter = context.emitter;

    if (emitter === null) {
      component.context = context._defaultValue;
      return;
    }

    if (!component._hasContext) {
      component._hasContext = true;
      emitter.on(function (_) {
        return enqueueRender(component);
      });
    }

    component.context = emitter.value;
  }
}

function mountComponent(component) {
  var props = component.props; // 在willMount前执行构造函数的副本

  if (!component.__componentWillMountTriggered) {
    component._constructor && component._constructor(props);
  }

  var newState = callGetDerivedStateFromProps(component, props, component.state);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  component._dirty = false;
  component._disable = false;
  component._isForceUpdate = false;

  if (!component.__componentWillMountTriggered) {
    component.__componentWillMountTriggered = true;

    if (!hasNewLifecycle(component)) {
      componentTrigger(component, 'componentWillMount');
    }
  }

  doUpdate(component, props, component.state);
  component.prevProps = component.props;
  component.prevState = component.state;
}

function doUpdate(component, prevProps, prevState) {
  var state = component.state,
      _component$props = component.props,
      props = _component$props === undefined ? {} : _component$props;
  var data = state || {};

  if (component._createData) {
    if (component.__isReady) {
      injectContextType(component);
      taro.Current.current = component;
      taro.Current.index = 0;
      taro.invokeEffects(component, true);
    }

    data = component._createData(state, props) || data;

    if (component.__isReady) {
      taro.Current.current = null;
    }
  }

  data = Object.assign({}, props, data);

  if (component.$usedState && component.$usedState.length) {
    var _data = {};
    component.$usedState.forEach(function (key) {
      var val = taro.internal_safe_get(data, key);

      if (typeof val === 'undefined') {
        return;
      }

      if (_typeof(val) === 'object') {
        if (isEmptyObject(val)) return taro.internal_safe_set(_data, key, val);
        val = shakeFnFromObject(val); // 避免筛选完 Fn 后产生了空对象还去渲染

        if (!isEmptyObject(val)) taro.internal_safe_set(_data, key, val);
      } else {
        taro.internal_safe_set(_data, key, val);
      }
    });
    data = _data;
  }

  data['$taroCompReady'] = true;
  var dataDiff = diffObjToPath(data, component.$scope.data);
  var __mounted = component.__mounted;
  var snapshot;

  if (__mounted) {
    snapshot = callGetSnapshotBeforeUpdate(component, prevProps, prevState);
  } // 每次 setData 都独立生成一个 callback 数组


  var cbs = [];

  if (component._pendingCallbacks && component._pendingCallbacks.length) {
    cbs = component._pendingCallbacks;
    component._pendingCallbacks = [];
  }

  var cb = function cb() {
    if (component.__mounted) {
      taro.invokeEffects(component);

      if (component['$$refs'] && component['$$refs'].length > 0) {
        component['$$refs'].forEach(function (ref) {
          // 只有 component 类型能做判断。因为 querySelector 每次调用都一定返回 nodeRefs，无法得知 dom 类型的挂载状态。
          if (ref.type !== 'component') return;
          component.$scope.selectComponent("#".concat(ref.id), function (target) {
            target = target ? target.$component || target : null;
            var prevRef = ref.target;

            if (target !== prevRef) {
              taro.commitAttachRef(ref, target, component, component.refs);
              ref.target = target;
            }
          });
        });
      }

      if (component['$$hasLoopRef']) {
        taro.Current.current = component;
        taro.Current.index = 0;
        component._disableEffect = true;

        component._createData(component.state, component.props, true);

        component._disableEffect = false;
        taro.Current.current = null;
      }

      if (typeof component.componentDidUpdate === 'function') {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }
    }

    if (cbs.length) {
      var i = cbs.length;

      while (--i >= 0) {
        typeof cbs[i] === 'function' && cbs[i].call(component);
      }
    }
  };

  if (Object.keys(dataDiff).length === 0) {
    cb();
  } else {
    component.$scope.setData(dataDiff, cb);
  }
}

var items = [];
function enqueueRender(component) {
  var isForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // tslint:disable-next-line:no-conditional-assignment
  component._isForceUpdate = isForceUpdate;

  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(function () {
      rerender();
    });
  }
}
function rerender() {
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, true);
    }
  }
}

// #私有的__componentProps更新用于触发子组件中对应obsever，生命周期componentWillReciveProps,componentShouldUpdate在这里处理
// #父组件传过来的props放到data.__props中供模板使用，这么做的目的是模拟reciveProps生命周期
// 执行顺序：组件setState -> 组件_createData() -> 对应的小程序组件setData（组件更新）-> 子组件的__componentProps.observer执行
//          -> 触发子组件componentWillReciveProps，更新子组件props,componentShouldUpdate -> 子组件_createData -> 子组件setData

var PRELOAD_DATA_KEY$1 = 'preload';

var BaseComponent =
/*#__PURE__*/
function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  // hooks
  function BaseComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPage = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseComponent);

    _defineProperty(this, "__computed", {});

    _defineProperty(this, "__props", {});

    _defineProperty(this, "__isReady", false);

    _defineProperty(this, "__mounted", false);

    _defineProperty(this, "nextProps", {});

    _defineProperty(this, "_dirty", true);

    _defineProperty(this, "_disable", true);

    _defineProperty(this, "_isForceUpdate", false);

    _defineProperty(this, "_pendingStates", []);

    _defineProperty(this, "_pendingCallbacks", []);

    _defineProperty(this, "$componentType", '');

    _defineProperty(this, "refs", {});

    _defineProperty(this, "$router", {
      params: {},
      path: ''
    });

    _defineProperty(this, "_afterScheduleEffect", false);

    _defineProperty(this, "_disableEffect", false);

    _defineProperty(this, "hooks", []);

    _defineProperty(this, "effects", []);

    _defineProperty(this, "layoutEffects", []);

    this.state = {};
    this.props = props;
    this.$componentType = isPage ? 'PAGE' : 'COMPONENT';
    this.$prefix = genCompPrefix();
    this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      this.props = props || {};
    }
  }, {
    key: "_init",
    value: function _init(scope) {
      this.$scope = scope;
    }
  }, {
    key: "setState",
    value: function setState(state, callback) {
      if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
      }

      if (typeof callback === 'function') {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      if (!this._disable) {
        enqueueRender(this, callback === taro.internal_force_update);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this = this;

      var _pendingStates = this._pendingStates,
          state = this.state,
          props = this.props;
      var stateClone = Object.assign({}, state);
      delete stateClone.__data;

      if (!_pendingStates.length) {
        return stateClone;
      }

      var queue = _pendingStates.concat();

      this._pendingStates.length = 0;
      queue.forEach(function (nextState) {
        if (typeof nextState === 'function') {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (typeof callback === 'function') {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      this._isForceUpdate = true;
      updateComponent(this);
    }
  }, {
    key: "$preload",
    value: function $preload(key, value) {
      var preloadData = cacheDataGet(PRELOAD_DATA_KEY$1) || {};

      if (_typeof(key) === 'object') {
        for (var k in key) {
          preloadData[k] = key[k];
        }
      } else {
        preloadData[key] = value;
      }

      cacheDataSet(PRELOAD_DATA_KEY$1, preloadData);
    } // 会被匿名函数调用

  }, {
    key: "__triggerPropsFn",
    value: function __triggerPropsFn(key, args) {
      var keyChain = key.split('.');
      var reduxFnPrefix = '__event_';
      var reduxFnName = reduxFnPrefix + keyChain.shift(); // redux标识过的方法，直接调用

      if (reduxFnName in this) {
        var scope = args.shift();
        var fn;

        if (keyChain.length > 0) {
          fn = taro.internal_safe_get(this[reduxFnName], keyChain.join('.'));
        } else {
          fn = this[reduxFnName];
        }

        fn.apply(scope, args);
      } else {
        // 普通的
        var keyLower = key.toLocaleLowerCase();
        var payload = {
          __isCustomEvt: true,
          __arguments: args
        };
        var detail = this.$scope.dataset;

        if (Object.keys(detail).length) {
          payload.__detail = detail;
        }

        this.$scope.triggerEvent(keyLower, payload);
      }
    }
  }]);

  return BaseComponent;
}();

var PureComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PureComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PureComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isPureComponent", true);

    return _this;
  }

  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }]);

  return PureComponent;
}(BaseComponent);

function createApp(AppClass) {
  var app = new AppClass();
  var weappAppConf = {
    onLaunch: function onLaunch(options) {
      app.$app = this;
      app.$app.$router = app.$router = {
        params: options
      };

      if (app.componentWillMount) {
        app.componentWillMount();
      }

      if (app.componentDidMount) {
        app.componentDidMount();
      }
    },
    onShow: function onShow(options) {
      Object.assign(app.$router.params, options);

      if (app.componentDidShow) {
        app.componentDidShow();
      }
    },
    onHide: function onHide() {
      if (app.componentDidHide) {
        app.componentDidHide();
      }
    },
    onError: function onError(err) {
      if (app.componentDidCatchError) {
        app.componentDidCatchError(err);
      }
    },
    onPageNotFound: function onPageNotFound(obj) {
      if (app.componentDidNotFound) {
        app.componentDidNotFound(obj);
      }
    }
  };
  return Object.assign(weappAppConf, app);
}

var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  pendingQueue: [],
  request: function request(options) {
    this.queue.push(options);
    return this.run();
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) return;

    var _loop = function _loop() {
      var options = _this.queue.shift();

      var successFn = options.success;
      var failFn = options.fail;

      options.success = function () {
        _this.pendingQueue = _this.pendingQueue.filter(function (item) {
          return item !== options;
        });

        _this.run();

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        successFn && successFn.apply(options, args);
      };

      options.fail = function () {
        _this.pendingQueue = _this.pendingQueue.filter(function (item) {
          return item !== options;
        });

        _this.run();

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        failFn && failFn.apply(options, args);
      };

      _this.pendingQueue.push(options);

      return {
        v: tt.request(options)
      };
    };

    while (this.pendingQueue.length < this.MAX_REQUEST) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new taro.Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options['success'];
  var originFail = options['fail'];
  var originComplete = options['complete'];
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options['success'] = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options['fail'] = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options['complete'] = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro$$1) {
  var weApis = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis);
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in tt)) {
      taro$$1[key] = function () {
        console.warn('\u5934\u6761\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(key));
      };

      return;
    }

    if (!taro.onAndSyncApis[key] && !taro.noPromiseApis[key]) {
      taro$$1[key] = function (options) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _tt;

            return (_tt = tt)[key].apply(_tt, [options].concat(args));
          }

          return tt[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo') {
          var url = obj['url'] ? obj['url'].replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = cacheDataGet(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = getUniqueKey();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = queryToJson(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              cacheDataSet(cacheKey, component.componentWillPreload(params));
              cacheDataSet(preloadInitedComponent, component);
            }
          }
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _tt2;

            task = (_tt2 = tt)[key].apply(_tt2, [obj].concat(args));
          } else {
            task = tt[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro$$1[key] = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return tt[key].apply(tt, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === undefined ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error('deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 '.concat(designWidth, ' \u7684\u8BBE\u7F6E\uFF01'));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function initNativeApi(taro$$1) {
  processApis(taro$$1);
  taro$$1.request = link.request.bind(link);
  taro$$1.addInterceptor = link.addInterceptor.bind(link);
  taro$$1.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro$$1.getCurrentPages = getCurrentPages;
  taro$$1.getApp = getApp;
  taro$$1.initPxTransform = taro.initPxTransform.bind(taro$$1);
  taro$$1.pxTransform = pxTransform.bind(taro$$1);
}

/* eslint-disable camelcase */
var Taro = {
  Component: BaseComponent,
  PureComponent: PureComponent,
  createApp: createApp,
  initNativeApi: initNativeApi,
  Events: taro.Events,
  eventCenter: taro.eventCenter,
  getEnv: taro.getEnv,
  createRef: taro.createRef,
  render: taro.render,
  ENV_TYPE: taro.ENV_TYPE,
  internal_safe_get: taro.internal_safe_get,
  internal_safe_set: taro.internal_safe_set,
  internal_inline_style: taro.internal_inline_style,
  createComponent: createComponent,
  internal_get_original: taro.internal_get_original,
  interceptors: taro.interceptors,
  RefsArray: taro.RefsArray,
  handleLoopRef: handleLoopRef,
  propsManager: propsManager,
  genCompid: genCompid,
  useEffect: taro.useEffect,
  useLayoutEffect: taro.useLayoutEffect,
  useReducer: taro.useReducer,
  useState: taro.useState,
  useDidShow: taro.useDidShow,
  useDidHide: taro.useDidHide,
  usePullDownRefresh: taro.usePullDownRefresh,
  useReachBottom: taro.useReachBottom,
  usePageScroll: taro.usePageScroll,
  useResize: taro.useResize,
  useShareAppMessage: taro.useShareAppMessage,
  useTabItemTap: taro.useTabItemTap,
  useRouter: taro.useRouter,
  useScope: taro.useScope,
  useRef: taro.useRef,
  useCallback: taro.useCallback,
  useMemo: taro.useMemo,
  useImperativeHandle: taro.useImperativeHandle,
  useContext: taro.useContext,
  createContext: taro.createContext,
  memo: taro.memo,
  shallowEqual: shallowEqual
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro-tt/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@tarojs/taro-tt/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro-tt/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@tarojs/taro/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var i = 0; i < descs.length; i++) {
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
    }

    return obj;
  };
}

var Component = function Component(props) {
  _classCallCheck(this, Component);

  this.state = {};
  this.props = props || {};
};

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = Infinity;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */

var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set$1(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var upperCasePattern = /([A-Z])/g;

function dashify(str) {
  return str.replace(upperCasePattern, dashLower);
}

function dashLower(c) {
  return '-' + c.toLowerCase();
}

function isObject$1(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
}

function inlineStyle(obj) {
  if (obj == null) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return '';
  }

  if (!isObject$1(obj)) {
    throw new TypeError('style 只能是一个对象或字符串。');
  }

  return Object.keys(obj).map(function (key) {
    return dashify(key).concat(':').concat(obj[key]);
  }).join(';');
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof qa !== 'undefined' && qa.getSystemInfo) {
    _env = ENV_TYPE.QUICKAPP;
    return ENV_TYPE.QUICKAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function isObject$2(arg) {
  return arg === Object(arg) && typeof arg !== 'function';
}

var env = null;
function getOriginal(item) {
  if (env === null) {
    env = getEnv();
  }

  if (isObject$2(item)) {
    return item[env === ENV_TYPE.SWAN ? 'privateOriginal' : '$original'] || item;
  }

  return item;
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this, args);

        _this.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

function createRef() {
  return {
    current: null
  };
}
/**
 * 赋值 ref
 * @param {Object} ref ref 对象/ref 函数/ref 字符串
 * @param {Object} target dom/component
 * @param {Object} component 组件实例
 * @param {Object} refs 字符串 ref 搜集器
 */

function commitAttachRef(ref, target, component, refs) {
  var isInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isInit && !target) return;

  if ('refName' in ref && ref['refName']) {
    refs[ref.refName] = target;
  } else if ('fn' in ref && typeof ref['fn'] === 'function') {
    ref['fn'].call(component, target);
  } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
    ref['fn'].current = target;
  }
}
function detachAllRef(component) {
  if (component['$$refs'] && component['$$refs'].length > 0) {
    component['$$refs'].forEach(function (ref) {
      if (typeof ref['fn'] === 'function') {
        ref['fn'].call(component, null);
      } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
        ref['fn'].current = null;
      }

      if ('target' in ref) delete ref['target'];
    });
    component.refs = {};
  }
}
var RefsArray =
/*#__PURE__*/
function (_Array) {
  _inherits(RefsArray, _Array);

  /**
   * @param {Array} initList
   */
  function RefsArray() {
    var _getPrototypeOf2;

    var _this;

    var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, RefsArray);

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefsArray)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(initList))));
    _this.inited = false;
    return _this;
  }

  _createClass(RefsArray, [{
    key: "pushRefs",
    value: function pushRefs($$refs) {
      var _this2 = this;

      if (this.inited) return;
      $$refs.forEach(function (ref) {
        return _this2.pushRef(ref);
      });
      this.inited = true;
    }
  }, {
    key: "pushRef",
    value: function pushRef(ref) {
      var isExist = this.find(function (item) {
        return item.id === ref.id;
      });
      !isExist && this.push(ref);
    }
  }]);

  return RefsArray;
}(_wrapNativeSuper(Array));
function handleLoopRef(getElementById) {
  return function (component, id, type, handler) {
    if (!component) return null;
    var dom = getElementById(component, id, type);

    var handlerType = _typeof(handler);

    if (handlerType !== 'function' && handlerType !== 'object') {
      return console.warn('\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A'.concat(handlerType));
    }

    if (handlerType === 'object') {
      handler.current = dom;
    } else if (handlerType === 'function') {
      handler.call(component.$component, dom);
    }
  };
}

var Chain =
/*#__PURE__*/
function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link =
/*#__PURE__*/
function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url;
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  offAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  offWifiConnected: true,
  offGetWifiList: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  nextTick: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true,
  // 调试
  getRealtimeLogManager: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === undefined ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}
function isFunction$1(arg) {
  return typeof arg === 'function';
}
var defer = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function isUndefined(o) {
  return o === undefined;
}
function isArray$1(arg) {
  return Array.isArray(arg);
}
function isNullOrUndef(o) {
  return isUndefined(o) || o === null;
}
var isUsingDiff = true;
function getIsUsingDiff() {
  return isUsingDiff;
}
function setIsUsingDiff(flag) {
  isUsingDiff = Boolean(flag);
}

{
  exports.Current = {
    current: null,
    index: 0
  };
}

function forceUpdateCallback() {//
}

function getHooks(index) {
  if (exports.Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = exports.Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(exports.Current.index++);

  if (!hook.state) {
    hook.component = exports.Current.current;
    hook.state = [initialState, function (action) {
      var nextState = isFunction$1(action) ? action(hook.state[0]) : action;
      if (hook.state[0] === nextState) return;
      hook.state[0] = nextState;
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function usePageLifecycle(callback, lifecycle) {
  var hook = getHooks(exports.Current.index++);

  if (!hook.marked) {
    hook.marked = true;
    hook.component = exports.Current.current;
    hook.callback = callback;
    var component = hook.component;
    var originalLifecycle = component[lifecycle];

    hook.component[lifecycle] = function () {
      var callback = hook.callback;
      originalLifecycle && originalLifecycle.call.apply(originalLifecycle, [component].concat(Array.prototype.slice.call(arguments)));
      return callback && callback.call.apply(callback, [component].concat(Array.prototype.slice.call(arguments)));
    };
  } else {
    hook.callback = callback;
  }
}

function useDidShow(callback) {
  usePageLifecycle(callback, 'componentDidShow');
}
function useDidHide(callback) {
  usePageLifecycle(callback, 'componentDidHide');
}
function usePullDownRefresh(callback) {
  usePageLifecycle(callback, 'onPullDownRefresh');
}
function useReachBottom(callback) {
  usePageLifecycle(callback, 'onReachBottom');
}
function usePageScroll(callback) {
  usePageLifecycle(callback, 'onPageScroll');
}
function useResize(callback) {
  usePageLifecycle(callback, 'onResize');
}
function useShareAppMessage(callback) {
  usePageLifecycle(callback, 'onShareAppMessage');
}
function useTabItemTap(callback) {
  usePageLifecycle(callback, 'onTabItemTap');
}
function useRouter() {
  var hook = getHooks(exports.Current.index++);

  if (!hook.router) {
    hook.component = exports.Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}
function useScope() {
  var hook = getHooks(exports.Current.index++);

  if (!hook.scope) {
    hook.component = exports.Current.current;
    hook.scope = hook.component.$scope;
  }

  return hook.scope;
}
function useReducer(reducer, initialState, initializer) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(exports.Current.index++);

  if (!hook.state) {
    hook.component = exports.Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction$1(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction$1(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}
var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      defer(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  var hook = getHooks(exports.Current.index++);

  if (exports.Current.current._disableEffect || !exports.Current.current.__isReady) {
    return;
  }

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      exports.Current.current.effects = exports.Current.current.effects.concat(hook);
      invokeScheduleEffects(exports.Current.current);
    } else {
      exports.Current.current.layoutEffects = exports.Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}
function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}
function useRef(initialValue) {
  var hook = getHooks(exports.Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}
function useMemo(factory, deps) {
  var hook = getHooks(exports.Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}
function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}
function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction$1(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray$1(deps) ? deps.concat([ref]) : undefined);
}
function useContext(_ref) {
  var context = _ref.context;
  var emitter = context.emitter;

  if (emitter === null) {
    return context._defaultValue;
  }

  var hook = getHooks(exports.Current.index++);

  if (isUndefined(hook.context)) {
    hook.context = true;
    hook.component = exports.Current.current;
    emitter.on(function (_) {
      if (hook.component) {
        hook.component._disable = false;
        hook.component.setState({});
      }
    });
  }

  return emitter.value;
}

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Emitter);

    this.value = value;
    this.handlers = [];
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "off",
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "set",
    value: function set(value) {
      var _this = this;

      if (objectIs(value, this.value)) {
        return;
      }

      this.value = value;
      this.handlers.forEach(function (h) {
        return h(_this.value);
      });
    }
  }]);

  return Emitter;
}();

var contextUid = 0;
function createContext(defaultValue) {
  var contextId = '__context_' + contextUid++ + '__';
  var context = {
    emitter: null,
    _id: contextId,
    _defaultValue: defaultValue
  };

  function Provider(newValue) {
    var emitter = context.emitter;

    if (!emitter) {
      context.emitter = new Emitter(defaultValue);
    } else {
      emitter.set(newValue);
    }
  }

  return {
    Provider: Provider,
    context: context
  };
}

/* eslint-disable */
var objectIs$1 = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs$1(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs$1(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

function memo(component, propsAreEqual) {
  component.prototype.shouldComponentUpdate = function (nextProps) {
    return isFunction$1(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  };

  return component;
}

/* eslint-disable camelcase */

{
  exports.eventCenter = new Events();
}
var index = {
  Component: Component,
  Events: Events,
  eventCenter: exports.eventCenter,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  internal_safe_get: get,
  internal_safe_set: set$1,
  internal_inline_style: inlineStyle,
  internal_get_original: getOriginal,
  internal_force_update: forceUpdateCallback,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  createRef: createRef,
  commitAttachRef: commitAttachRef,
  detachAllRef: detachAllRef,
  Link: Link,
  interceptors: interceptors,
  RefsArray: RefsArray,
  handleLoopRef: handleLoopRef,
  Current: exports.Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useDidShow: useDidShow,
  useDidHide: useDidHide,
  usePullDownRefresh: usePullDownRefresh,
  useReachBottom: useReachBottom,
  usePageScroll: usePageScroll,
  useResize: useResize,
  useShareAppMessage: useShareAppMessage,
  useTabItemTap: useTabItemTap,
  useRouter: useRouter,
  useScope: useScope,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  invokeEffects: invokeEffects,
  useContext: useContext,
  createContext: createContext,
  memo: memo,
  getIsUsingDiff: getIsUsingDiff,
  setIsUsingDiff: setIsUsingDiff
};

exports.Component = Component;
exports.Events = Events;
exports.getEnv = getEnv;
exports.ENV_TYPE = ENV_TYPE;
exports.render = render;
exports.internal_safe_get = get;
exports.internal_safe_set = set$1;
exports.internal_inline_style = inlineStyle;
exports.internal_get_original = getOriginal;
exports.internal_force_update = forceUpdateCallback;
exports.noPromiseApis = noPromiseApis;
exports.onAndSyncApis = onAndSyncApis;
exports.otherApis = otherApis;
exports.initPxTransform = initPxTransform;
exports.createRef = createRef;
exports.commitAttachRef = commitAttachRef;
exports.detachAllRef = detachAllRef;
exports.Link = Link;
exports.interceptors = interceptors;
exports.RefsArray = RefsArray;
exports.handleLoopRef = handleLoopRef;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useReducer = useReducer;
exports.useState = useState;
exports.useDidShow = useDidShow;
exports.useDidHide = useDidHide;
exports.usePullDownRefresh = usePullDownRefresh;
exports.useReachBottom = useReachBottom;
exports.usePageScroll = usePageScroll;
exports.useResize = useResize;
exports.useShareAppMessage = useShareAppMessage;
exports.useTabItemTap = useTabItemTap;
exports.useRouter = useRouter;
exports.useScope = useScope;
exports.useRef = useRef;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useImperativeHandle = useImperativeHandle;
exports.invokeEffects = invokeEffects;
exports.useContext = useContext;
exports.createContext = createContext;
exports.memo = memo;
exports.getIsUsingDiff = getIsUsingDiff;
exports.setIsUsingDiff = setIsUsingDiff;
exports.default = index;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;

  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */
    var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
        if (format === undefined) {
          throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarningWithoutStack$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
    var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

    // TODO: this is special because it gets imported during build.

    var ReactVersion = '16.8.0';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;

    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || (typeof maybeIterable === 'undefined' ? 'undefined' : _typeof(maybeIterable)) !== 'object') {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }
      return null;
    }

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var validateFormat = function validateFormat() {};

    {
      validateFormat = function validateFormat(format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }

    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);

      if (!condition) {
        var error = undefined;
        if (format === undefined) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    }

    // Relying on the `invariant()` implementation lets us
    // preserve the format and params in the www builds.

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning$1 = lowPriorityWarning;

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warningWithoutStack = function warningWithoutStack() {};

    {
      warningWithoutStack = function warningWithoutStack(condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");
        }
        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }
        if (condition) {
          return;
        }
        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format);

          // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }

    var warningWithoutStack$1 = warningWithoutStack;

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }
        warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }

    /**
     * This is the abstract API for an update queue.
     */
    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };

    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }

    /**
     * Base class helpers for the updating state of a component.
     */
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      // If a component has string refs, we will assign a different object later.
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};

    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
    Component.prototype.setState = function (partialState, callback) {
      !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : undefined;
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };

    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */
    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ['replaceState', "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      };
      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;

    /**
     * Convenience component with default shallow equality check for sCU.
     */
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      // If a component has string refs, we will assign a different object later.
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    // Avoid an extra prototype jump for these methods.
    _assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    // an immutable object with a single mutable value
    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    /**
     * Keeps track of the current dispatcher.
     */
    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
      var sourceInfo = '';
      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);
            if (match) {
              var pathBeforeSlash = match[1];
              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }
      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    };

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }
      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, "Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        }
      }
      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }
      if (typeof type === 'string') {
        return type;
      }
      switch (type) {
        case REACT_CONCURRENT_MODE_TYPE:
          return 'ConcurrentMode';
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';
        case REACT_PORTAL_TYPE:
          return 'Portal';
        case REACT_PROFILER_TYPE:
          return 'Profiler';
        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';
        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
      }
      if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';
          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');
          case REACT_MEMO_TYPE:
            return getComponentName(type.type);
          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
            }
        }
      }
      return null;
    }

    var ReactDebugCurrentFrame = {};

    var currentlyValidatingElement = null;

    function setCurrentlyValidatingElement(element) {
      {
        currentlyValidatingElement = element;
      }
    }

    {
      // Stack implementation injected by the current renderer.
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = '';

        // Add an extra top frame while an element is being validated
        if (currentlyValidatingElement) {
          var name = getComponentName(currentlyValidatingElement.type);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
        }

        // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }

    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentOwner: ReactCurrentOwner,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };

    {
      _assign(ReactSharedInternals, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    }

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = warningWithoutStack$1;

    {
      warning = function warning(condition, format) {
        if (condition) {
          return;
        }
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }

    var warning$1 = warning;

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };

    var specialPropKeyWarningShown = undefined;
    var specialPropRefWarningShown = undefined;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warningWithoutStack$1(false, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warningWithoutStack$1(false, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} key
     * @param {string|object} ref
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @param {*} owner
     * @param {*} props
     * @internal
     */
    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {};

        // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };

    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */
    function createElement(type, config, children) {
      var propName = undefined;

      // Reserved names are extracted
      var props = {};

      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        // Remaining properties are added to a new props object
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      }

      // Resolve default props
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    /**
     * Return a function that produces ReactElements of a given type.
     * See https://reactjs.org/docs/react-api.html#createfactory
     */

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

      return newElement;
    }

    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */
    function cloneElement(element, config, children) {
      !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : undefined;

      var propName = undefined;

      // Original props are copied
      var props = _assign({}, element.props);

      // Reserved names are extracted
      var key = element.key;
      var ref = element.ref;
      // Self is preserved since the owner is preserved.
      var self = element._self;
      // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.
      var source = element._source;

      // Owner will be preserved, unless ref is overridden
      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        // Remaining properties override existing props
        var defaultProps = undefined;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }

    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */
    function isValidElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';

    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });

      return '$' + escapedString;
    }

    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;

    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];
    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;
      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }

    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;
          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }
        }
      }

      if (invokeCallback) {
        callback(traverseContext, children,
        // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child = undefined;
      var nextName = undefined;
      var subtreeCount = 0; // Count of children found in the current subtree.
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              !didWarnAboutMaps ? warning$1(false, "Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.") : undefined;
              didWarnAboutMaps = true;
            }
          }

          var iterator = iteratorFn.call(children);
          var step = undefined;
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;
          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
        }
      }

      return subtreeCount;
    }

    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }

    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */
    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      }
      // Implicit key determined by the index in the set
      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;

      func.call(context, child, bookKeeping.count++);
    }

    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;

      var mappedChild = func.call(context, child, bookKeeping.count++);
      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
          return c;
        });
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }
        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';
      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }
      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }

    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */
    function countChildren(children) {
      return traverseAllChildren(children, function () {
        return null;
      }, null);
    }

    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */
    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
        return child;
      });
      return result;
    }

    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */
    function onlyChild(children) {
      !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : undefined;
      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, "createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits) : undefined;
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };

      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };

      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;

      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        };
        // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
          Provider: {
            get: function get() {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                warning$1(false, "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
              }
              return context.Provider;
            },
            set: function set(_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function get() {
              return context._currentValue;
            },
            set: function set(_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function get() {
              return context._currentValue2;
            },
            set: function set(_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function get() {
              return context._threadCount;
            },
            set: function set(_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function get() {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                warning$1(false, "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
              return context.Consumer;
            }
          }
        });
        // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
      }

      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }

      return context;
    }

    function lazy(ctor) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _ctor: ctor,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };

      {
        // In production, this would just set it on the object.
        var defaultProps = undefined;
        var propTypes = undefined;
        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function get() {
              return defaultProps;
            },
            set: function set(newDefaultProps) {
              warning$1(false, "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
              defaultProps = newDefaultProps;
              // Match production behavior more closely:
              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function get() {
              return propTypes;
            },
            set: function set(newPropTypes) {
              warning$1(false, "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
              propTypes = newPropTypes;
              // Match production behavior more closely:
              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }

      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          warningWithoutStack$1(false, "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        } else if (typeof render !== 'function') {
          warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render === 'undefined' ? 'undefined' : _typeof(render));
        } else {
          !(
          // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
          render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : undefined;
        }

        if (render != null) {
          !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?") : undefined;
        }
      }

      return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
    }

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          warningWithoutStack$1(false, "memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type === 'undefined' ? 'undefined' : _typeof(type));
        }
      }
      return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;
      !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)') : undefined;
      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        !(unstable_observedBits === undefined) ? warning$1(false, "useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : '') : undefined;

        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
          var realContext = Context._context;
          // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.
          if (realContext.Consumer === Context) {
            warning$1(false, "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
          } else if (realContext.Provider === Context) {
            warning$1(false, "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, inputs);
    }

    function useLayoutEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, inputs);
    }

    function useCallback(callback, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, inputs);
    }

    function useMemo(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, inputs);
    }

    function useImperativeHandle(ref, create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, inputs);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    /**
     * ReactElementValidator provides a wrapper around a element factory
     * which validates the props passed to the element. This is intended to be
     * used only in DEV and could be replaced by a static type checker for languages
     * that support it.
     */

    var propTypesMisspellWarningShown = undefined;

    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);
        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }
      return '';
    }

    function getSourceInfoErrorAddendum(elementProps) {
      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
        var source = elementProps.__source;
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }
      return '';
    }

    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }
      return info;
    }

    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;

      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }
      ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

      // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.
      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
      }

      setCurrentlyValidatingElement(element);
      {
        warning$1(false, "Each child in a list should have a unique \"key\" prop.%s%s See https://fb.me/react-warning-keys for more information.", currentComponentErrorInfo, childOwner);
      }
      setCurrentlyValidatingElement(null);
    }

    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
    function validateChildKeys(node, parentType) {
      if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step = undefined;
            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }

    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
    function validatePropTypes(element) {
      var type = element.type;
      if (type === null || type === undefined || typeof type === 'string') {
        return;
      }
      var name = getComponentName(type);
      var propTypes = undefined;
      if (typeof type === 'function') {
        propTypes = type.propTypes;
      } else if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
      // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      type.$$typeof === REACT_MEMO_TYPE)) {
        propTypes = type.propTypes;
      } else {
        return;
      }
      if (propTypes) {
        setCurrentlyValidatingElement(element);
        checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
        setCurrentlyValidatingElement(null);
      } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
        propTypesMisspellWarningShown = true;
        warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
      }
      if (typeof type.getDefaultProps === 'function') {
        !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.") : undefined;
      }
    }

    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */
    function validateFragmentProps(fragment) {
      setCurrentlyValidatingElement(fragment);

      var keys = Object.keys(fragment.props);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key !== 'children' && key !== 'key') {
          warning$1(false, "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
          break;
        }
      }

      if (fragment.ref !== null) {
        warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
      }

      setCurrentlyValidatingElement(null);
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type);

      // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.
      if (!validType) {
        var info = '';
        if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString = undefined;
        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type === 'undefined' ? 'undefined' : _typeof(type);
        }

        warning$1(false, "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
      }

      var element = createElement.apply(this, arguments);

      // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.
      if (element == null) {
        return element;
      }

      // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      // Legacy hook: remove it
      {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            lowPriorityWarning$1(false, "Factory.type is deprecated. Access the class directly before passing it to createFactory.");
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }

      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }

    // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:


    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.


    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


    // Gather advanced timing metrics for Profiler subtrees.


    // Trace which interactions trigger each commit.


    // Only used in www builds.
    // TODO: true? Here it might just be false.

    // Only used in www builds.


    // Only used in www builds.


    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties


    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    var enableStableConcurrentModeAPIs = false;

    var React = {
      Children: {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      },

      createRef: createRef,
      Component: Component,
      PureComponent: PureComponent,

      createContext: createContext,
      forwardRef: forwardRef,
      lazy: lazy,
      memo: memo,

      useCallback: useCallback,
      useContext: useContext,
      useEffect: useEffect,
      useImperativeHandle: useImperativeHandle,
      useDebugValue: useDebugValue,
      useLayoutEffect: useLayoutEffect,
      useMemo: useMemo,
      useReducer: useReducer,
      useRef: useRef,
      useState: useState,

      Fragment: REACT_FRAGMENT_TYPE,
      StrictMode: REACT_STRICT_MODE_TYPE,
      Suspense: REACT_SUSPENSE_TYPE,

      createElement: createElementWithValidation,
      cloneElement: cloneElementWithValidation,
      createFactory: createFactoryWithValidation,
      isValidElement: isValidElement,

      version: ReactVersion,

      unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
      unstable_Profiler: REACT_PROFILER_TYPE,

      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
    };

    // Note: some APIs are added with feature flags.
    // Make sure that stable builds for open source
    // don't modify the React object to avoid deopts.
    // Also let's not expose their names in stable builds.

    var React$2 = Object.freeze({
      default: React
    });

    var React$3 = React$2 && React || React$2;

    // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest.
    var react = React$3.default || React$3;

    module.exports = react;
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development */ "./node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function (e) {
  "use strict";

  function t(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
  }function r(e, t) {
    Object.defineProperty(this, "kind", { value: e, enumerable: true }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: true });
  }function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: true }), Object.defineProperty(this, "rhs", { value: r, enumerable: true });
  }function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: true });
  }function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: true });
  }function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: true }), Object.defineProperty(this, "item", { value: r, enumerable: true });
  }function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];var g = s.slice(0);if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;if (c.normalize) {
            var h = c.normalize(g, d, e, t);h && (e = h[0], t = h[1]);
          }
        }
      }g.push(d);
    }"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
          var w;e.length;for (w = 0; w < e.length; w++) {
            w >= t.length ? r(new a(g, w, new i(undefined, e[w]))) : l(e[w], t[w], r, c, g, w, p);
          }for (; w < t.length;) {
            r(new a(g, w, new o(undefined, t[w++])));
          }
        } else {
          var x = Object.keys(e),
              S = Object.keys(t);x.forEach(function (n, o) {
            var i = S.indexOf(n);i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], undefined, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(undefined, t[e], r, c, g, e, p);
          });
        }p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : undefined;
  }function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          s(o[r.path[n]], r.index, r.item);break;case "D":
          delete o[r.path[n]];break;case "E":case "N":
          o[r.path[n]] = r.rhs;}
    } else switch (r.kind) {case "A":
        s(e[t], r.index, r.item);break;case "D":
        e = f(e, t);break;case "E":case "N":
        e[t] = r.rhs;}return e;
  }function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) {
        "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
      }switch (r.kind) {case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);break;case "D":
          delete n[r.path[o]];break;case "E":case "N":
          n[r.path[o]] = r.rhs;}
    }
  }function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          p(o[r.path[n]], r.index, r.item);break;case "D":
          o[r.path[n]] = r.lhs;break;case "E":
          o[r.path[n]] = r.lhs;break;case "N":
          delete o[r.path[n]];}
    } else switch (r.kind) {case "A":
        p(e[t], r.index, r.item);break;case "D":
        e[t] = r.lhs;break;case "E":
        e[t] = r.lhs;break;case "N":
        e = f(e, t);}return e;
  }function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;for (o = r.path.length - 1, n = 0; n < o; n++) {
        "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
      }switch (r.kind) {case "A":
          p(i[r.path[n]], r.index, r.item);break;case "D":
          i[r.path[n]] = r.lhs;break;case "E":
          i[r.path[n]] = r.lhs;break;case "N":
          delete i[r.path[n]];}
    }
  }function h(e, t, r) {
    if (e && t) {
      var n = function n(_n) {
        r && !r(e, t, _n) || d(e, t, _n);
      };l(e, t, n);
    }
  }function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;switch (t) {case "E":
        return [r.join("."), n, "→", o];case "N":
        return [r.join("."), o];case "D":
        return [r.join(".")];case "A":
        return [r.join(".") + "[" + i + "]", a];default:
        return [];}
  }function b(e, t, r, n) {
    var o = c(e, t);try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];case "function":
        return e(t);default:
        return e;}
  }function w(e) {
    var t = e.timestamp,
        r = e.duration;return function (e, n, o) {
      var i = ["action"];return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = undefined === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];x && (w = x.prevState, v = x.started - d);var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");var O = i(S, j, v);try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";r[F]("%c next state", _, w);
      } else r[F]("next state", w);l && b(h, w, r, k);try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }function S() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };var u = [];return function (e) {
      var r = e.getState;return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);var c = {};u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;var s = undefined;if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);c.took = O.now() - c.started, c.nextState = n(r());var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;if (x(u, Object.assign({}, t, { diff: d })), u.length = 0, c.error) throw c.error;return s;
        };
      };
    };
  }var k,
      j,
      E = function E(e, t) {
    return new Array(t + 1).join(e);
  },
      A = function A(e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function D(e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      P = function P(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }return r;
    }return Array.from(e);
  },
      C = [];k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = undefined);
  }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: true }, observableDiff: { value: l, enumerable: true }, applyDiff: { value: h, enumerable: true }, applyChange: { value: d, enumerable: true }, revertChange: { value: g, enumerable: true }, isConflict: { value: function value() {
        return "undefined" != typeof j;
      }, enumerable: true }, noConflict: { value: function value() {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      }, enumerable: true } });var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
      L = { level: "log", logger: console, logErrors: true, collapsed: undefined, predicate: undefined, duration: false, timestamp: true, stateTransformer: function stateTransformer(e) {
      return e;
    }, actionTransformer: function actionTransformer(e) {
      return e;
    }, errorTransformer: function errorTransformer(e) {
      return e;
    }, colors: { title: function title() {
        return "inherit";
      }, prevState: function prevState() {
        return "#9E9E9E";
      }, action: function action() {
        return "#03A9F4";
      }, nextState: function nextState() {
        return "#4CAF50";
      }, error: function error() {
        return "#F20404";
      } }, diff: false, diffPredicate: undefined, transformer: undefined },
      T = function T() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : undefined;
  };e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: true });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-thunk/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*****************************************!*\
  !*** ./node_modules/redux/lib/redux.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var $$observable = _interopDefault(__webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/lib/index.js"));

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */

  function getState() {
    if (isDispatching) {
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */

  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */

function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === undefined) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(undefined, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === \"production\". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.");
}

exports.__DO_NOT_USE__ActionTypes = ActionTypes;
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;

/***/ }),

/***/ "./node_modules/symbol-observable/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/symbol-observable/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(/*! ./ponyfill */ "./node_modules/symbol-observable/lib/ponyfill.js");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/lib/ponyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/symbol-observable/lib/ponyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
  var result;
  var _Symbol = root.Symbol;

  if (typeof _Symbol === 'function') {
    if (_Symbol.observable) {
      result = _Symbol.observable;
    } else {
      result = _Symbol('observable');
      _Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
};

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/common/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/common/component.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var objectToString = function objectToString(style) {
  if (style && (typeof style === 'undefined' ? 'undefined' : _typeof(style)) === 'object') {
    var styleStr = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += lowerCaseKey + ':' + style[key] + ';';
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};

var AtComponent = (_temp = _class = function (_Component) {
  _inherits(AtComponent, _Component);

  function AtComponent() {
    _classCallCheck(this, AtComponent);

    return _possibleConstructorReturn(this, (AtComponent.__proto__ || Object.getPrototypeOf(AtComponent)).apply(this, arguments));
  }

  _createClass(AtComponent, [{
    key: 'mergeStyle',
    value: function mergeStyle(style1, style2) {
      if (style1 && (typeof style1 === 'undefined' ? 'undefined' : _typeof(style1)) === 'object' && style2 && (typeof style2 === 'undefined' ? 'undefined' : _typeof(style2)) === 'object') {
        return Object.assign({}, style1, style2);
      }
      return objectToString(style1) + objectToString(style2);
    }
  }]);

  return AtComponent;
}(_taroTt.Component), _class.options = {
  addGlobalClass: true

  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
}, _temp);
exports.default = AtComponent;

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/common/utils.ts":
/*!*********************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/common/utils.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayGetScrollOffset = exports.delayGetClientRect = exports.handleTouchScroll = exports.pxTransform = exports.isTest = exports.initTestEnv = exports.getEventDetail = exports.uuid = exports.delayQuerySelector = exports.delay = undefined;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENV = _taroTt2.default.getEnv();
function delay() {
  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

  return new Promise(function (resolve) {
    if ([_taroTt2.default.ENV_TYPE.WEB, _taroTt2.default.ENV_TYPE.SWAN].includes(ENV)) {
      setTimeout(function () {
        resolve();
      }, delayTime);
      return;
    }
    resolve();
  });
}
function delayQuerySelector(self, selectorStr) {
  var delayTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var $scope = ENV === _taroTt2.default.ENV_TYPE.WEB ? self : self.$scope;
  var selector = _taroTt2.default.createSelectorQuery().in($scope);
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function delayGetScrollOffset(_ref) {
  var _ref$delayTime = _ref.delayTime,
      delayTime = _ref$delayTime === undefined ? 500 : _ref$delayTime;

  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      _taroTt2.default.createSelectorQuery().selectViewport().scrollOffset().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function delayGetClientRect(_ref2) {
  var self = _ref2.self,
      selectorStr = _ref2.selectorStr,
      _ref2$delayTime = _ref2.delayTime,
      delayTime = _ref2$delayTime === undefined ? 500 : _ref2$delayTime;

  var $scope = ENV === _taroTt2.default.ENV_TYPE.WEB || ENV === _taroTt2.default.ENV_TYPE.SWAN ? self : self.$scope;
  var selector = _taroTt2.default.createSelectorQuery().in($scope);
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r = void 0;
    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  return value.join('');
}
function getEventDetail(event) {
  var detail = void 0;
  switch (ENV) {
    case _taroTt2.default.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;
    case _taroTt2.default.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _taroTt2.default.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _taroTt2.default.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;
    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }
  return detail;
}
function initTestEnv() {
  if (false) {}
}
function isTest() {
  return "development" === 'test';
}
var scrollTop = 0;
function handleTouchScroll(flag) {
  if (ENV !== _taroTt2.default.ENV_TYPE.WEB) {
    return;
  }
  if (flag) {
    scrollTop = document.documentElement.scrollTop;
    // 使body脱离文档流
    document.body.classList.add('at-frozen');
    // 把脱离文档流的body拉上去！否则页面会回到顶部！
    document.body.style.top = -scrollTop + 'px';
  } else {
    document.body.style.top = null;
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}
function pxTransform(size) {
  if (!size) return '';
  return _taroTt2.default.pxTransform(size);
}
exports.delay = delay;
exports.delayQuerySelector = delayQuerySelector;
exports.uuid = uuid;
exports.getEventDetail = getEventDetail;
exports.initTestEnv = initTestEnv;
exports.isTest = isTest;
exports.pxTransform = pxTransform;
exports.handleTouchScroll = handleTouchScroll;
exports.delayGetClientRect = delayGetClientRect;
exports.delayGetScrollOffset = delayGetScrollOffset;

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./src/actions/filter_classify.ts":
/*!****************************************!*\
  !*** ./src/actions/filter_classify.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilter = setFilter;
exports.getFilter = getFilter;

var _filter_classify = __webpack_require__(/*! ../constants/filter_classify */ "./src/constants/filter_classify.ts");

function setFilter(data) {
  return {
    type: _filter_classify.SET,
    data: data
  };
}
function getFilter() {
  return {
    type: _filter_classify.GET
  };
}

/***/ }),

/***/ "./src/actions/member.ts":
/*!*******************************!*\
  !*** ./src/actions/member.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMemberInfo = setMemberInfo;
exports.getUserInfo = getUserInfo;
exports.setMemberTel = setMemberTel;

var _member = __webpack_require__(/*! ../constants/member */ "./src/constants/member.ts");

function setMemberInfo(member) {
  return {
    type: _member.SET,
    data: member
  };
}
function getUserInfo() {
  return {
    type: _member.GET
  };
}
function setMemberTel(val) {
  return {
    type: _member.TEL,
    data: val
  };
}

/***/ }),

/***/ "./src/actions/recruit.ts":
/*!********************************!*\
  !*** ./src/actions/recruit.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAreaInfo = setAreaInfo;
exports.getAreaInfo = getAreaInfo;
exports.setArea = setArea;
exports.getArea = getArea;
exports.setPositionStaus = setPositionStaus;

var _recruit = __webpack_require__(/*! ../constants/recruit */ "./src/constants/recruit.ts");

function setAreaInfo(data) {
  return {
    type: _recruit.SETAREAINFO,
    data: data
  };
}
function getAreaInfo() {
  return {
    type: _recruit.GETAREAINFO
  };
}
function setArea(data) {
  return {
    type: _recruit.SETAREA,
    data: data
  };
}
function getArea() {
  return {
    type: _recruit.GETAREA
  };
}
function setPositionStaus(data) {
  return {
    type: _recruit.SETPOSITIONSTATUS,
    data: data
  };
}

/***/ }),

/***/ "./src/actions/resume_addinfo.ts":
/*!***************************************!*\
  !*** ./src/actions/resume_addinfo.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResumeInfoConfig = setResumeInfoConfig;
exports.getResumeInfoConfig = getResumeInfoConfig;

var _resume_addinfo = __webpack_require__(/*! ../constants/resume_addinfo */ "./src/constants/resume_addinfo.ts");

function setResumeInfoConfig(data) {
  return {
    type: _resume_addinfo.SET,
    data: data
  };
}
function getResumeInfoConfig() {
  return {
    type: _resume_addinfo.GET
  };
}

/***/ }),

/***/ "./src/actions/resume_data.ts":
/*!************************************!*\
  !*** ./src/actions/resume_data.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUseResume = getUseResume;
exports.setUseResume = setUseResume;
exports.setIntroduceInfo = setIntroduceInfo;
exports.setCertificateList = setCertificateList;
exports.setProjectList = setProjectList;

var _resume_data = __webpack_require__(/*! ../constants/resume_data */ "./src/constants/resume_data.ts");

function getUseResume(data) {
  return {
    type: _resume_data.GETUSERRESUME,
    data: data
  };
} /*
   * @Author: zyb
   * @Date: 2020-11-04 19:51:02
   * @LastEditors: zyb
   * @LastEditTime: 2020-11-10 10:01:29
   * @Description:
   */
function setUseResume(data) {
  return {
    type: _resume_data.SETUSERRESUME,
    data: data
  };
}
// 设置人员信息
function setIntroduceInfo(data) {
  return {
    type: _resume_data.SETINTRODUCE,
    data: data
  };
}
// 设置技能证书列表
function setCertificateList(data) {
  return {
    type: _resume_data.SETCERTIFICATE,
    data: data
  };
}
// 设置项目列表
function setProjectList(data) {
  return {
    type: _resume_data.SETPROJECT,
    data: data
  };
}

/***/ }),

/***/ "./src/actions/tabbar.ts":
/*!*******************************!*\
  !*** ./src/actions/tabbar.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeTabbar = exports.changeTabbar = function changeTabbar(val) {
  return {
    type: val
  };
};

/***/ }),

/***/ "./src/actions/user.tsx":
/*!******************************!*\
  !*** ./src/actions/user.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserInfo = setUserInfo;
exports.getUserInfo = getUserInfo;

var _user = __webpack_require__(/*! ../constants/user */ "./src/constants/user.tsx");

function setUserInfo(user) {
  return {
    type: _user.SET,
    data: user
  };
}
function getUserInfo() {
  return {
    type: _user.GET
  };
}

/***/ }),

/***/ "./src/components/swiper/index.ts":
/*!****************************************!*\
  !*** ./src/components/swiper/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_PROPS = exports.DEFAULT_PROPS = {
  indicatorDots: false,
  autoplay: true,
  current: 0,
  interval: 3500,
  duration: 500,
  circular: true,
  vertical: false,
  classname: '',
  lists: []
};

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ? 全局不动配置项 只做导出不做修改
// ! 根据不同编译脚本打包不同小程序
// * 当前打包版本
var MINIVERSION = exports.MINIVERSION = "douyin";
var MINICONFIG = exports.MINICONFIG = __webpack_require__("./src/config/minis sync recursive ^\\.\\/.*\\.ts$")("./" + MINIVERSION + ".ts");
// * 全局请求接口域名
// * 测试站
var DEVREQUESTURL = exports.DEVREQUESTURL = 'https://miniapi.zhaogong.vrtbbs.com/';
// * 正式站
var PROREQUESTURL = exports.PROREQUESTURL = 'https://newyupaomini.54xiaoshuo.com/';
// * 当前测试
var REQUESTURL = exports.REQUESTURL = DEVREQUESTURL;
// * 默认上传图片
var UPLOADIMGURL = exports.UPLOADIMGURL = PROREQUESTURL + 'index/upload/';
// * 阿里云CDN域名
var ALIYUNCDN = exports.ALIYUNCDN = 'http://cdn.yupao.com';
// * 阿里云小程序普通路径
var ALIYUNCDNMINIIMG = exports.ALIYUNCDNMINIIMG = '/miniprogram/images/';
// * 阿里云CDN图片域名
var IMGCDNURL = exports.IMGCDNURL = "http://cdn.yupao.com/miniprogram/images/";
// * 公司默认客服电话
var SERVERPHONE = exports.SERVERPHONE = '400-838-1888';
// * 小程序当前版本号
var VERSION = exports.VERSION = '1.0.5';
// * 高德地区key
var MAPKEY = exports.MAPKEY = '20f12aae660c04de86f993d3eff590a0';
// * 最大缓存历史城市数量
var MAXCACHECITYNUM = exports.MAXCACHECITYNUM = 3;
// * 用户发布 选择地址 历史记录 最大数量
var UserPublishAreaHistoryMaxNum = exports.UserPublishAreaHistoryMaxNum = 10;
// * 小程序tabbar msg统计 定时器请求间隔 1分钟
var MemberMsgTimerInterval = exports.MemberMsgTimerInterval = 60000;
// * 发布技能证书最大数量
var CertificateMaxNum = exports.CertificateMaxNum = 3;
// * 发布技能证书图片最大数量
var CertificateImgMaxNum = exports.CertificateImgMaxNum = 3;
// * 找活人员信息标签最大数量
var ResumeMemberLabelsMaxNum = exports.ResumeMemberLabelsMaxNum = 3;
// * 发布项目经验最大数量
var ProjectListMaxNum = exports.ProjectListMaxNum = 5;
// * 找活项目经验图片最大数量
var ProjectImgMaxNum = exports.ProjectImgMaxNum = 6;
// ! 页面内常用路径配置
// * 首页
var INDEXPATH = exports.INDEXPATH = '/pages/index/index';
// * 发布招工页面
var PUBLISHRECRUIT = exports.PUBLISHRECRUIT = '/pages/recruit/publish/index';
// * 发布找活页面
var PUBLISHRESUME = exports.PUBLISHRESUME = '/pages/resume/publish/index';
// * 发布二手交易
var PUBLISHUSED = exports.PUBLISHUSED = '/pages/used/publish/index';
// * 实名认证页面
var REALNAMEPATH = exports.REALNAMEPATH = '/pages/realname/index';
// * 授权登录页面
var AUTHPATH = exports.AUTHPATH = '/pages/userauth/index';
// * 微信外验证码登录
var CODEAUTHPATH = exports.CODEAUTHPATH = '/pages/login/index';
// * 已发布招工列表
var PUBLISHEDRECRUIT = exports.PUBLISHEDRECRUIT = '/pages/published/recruit/index';
// * 下载App
var DownloadApp = exports.DownloadApp = 'https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile';
// ! 所有小程序列表
// 百度
var BAIDU = exports.BAIDU = 'baidu';
// 抖音
var DOUYIN = exports.DOUYIN = 'douyin';
// ! 以下内容为每个小程序独立配置  
// * page-title-global
var PAGETITLE = exports.PAGETITLE = MINICONFIG.PAGETITLE;
// * 小程序token 
var TOKEN = exports.TOKEN = MINICONFIG.TOKEN;
// * 小程序广告unitid
var UNITID = exports.UNITID = MINICONFIG.UNITID;
// * 小程序邀请key
var INVITESOURCE = exports.INVITESOURCE = MINICONFIG.INVITESOURCE;
// * 是否使用推送信息
var USESUBSCRIBEMESSAGE = exports.USESUBSCRIBEMESSAGE = MINICONFIG.USESUBSCRIBEMESSAGE;
// * 是否能分享
var ISCANSHARE = exports.ISCANSHARE = MINICONFIG.ISCANSHARE;

/***/ }),

/***/ "./src/config/minis sync recursive ^\\.\\/.*\\.ts$":
/*!********************************************!*\
  !*** ./src/config/minis sync ^\.\/.*\.ts$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./baidu.ts": "./src/config/minis/baidu.ts",
	"./douyin.ts": "./src/config/minis/douyin.ts",
	"./jizhao.ts": "./src/config/minis/jizhao.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/config/minis sync recursive ^\\.\\/.*\\.ts$";

/***/ }),

/***/ "./src/config/minis/baidu.ts":
/*!***********************************!*\
  !*** ./src/config/minis/baidu.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// * 每个小程序单独配置  工地急招
// * page-title-global
var PAGETITLE = '鱼泡网-';
// * 小程序token 
var TOKEN = 'baidu';
// * 小程序是否能被分享
var ISCANSHARE = true;
// * 小程序广告unitid
var UNITID = 'adunit-80f40e8b4f60c3f6';
// * 邀请key
var INVITESOURCE = "712790d9629c6dcea00e3f5bff60132b";
// * 是否使用推送信息
var USESUBSCRIBEMESSAGE = false;
module.exports = {
  PAGETITLE: PAGETITLE,
  TOKEN: TOKEN,
  UNITID: UNITID,
  INVITESOURCE: INVITESOURCE,
  USESUBSCRIBEMESSAGE: USESUBSCRIBEMESSAGE,
  ISCANSHARE: ISCANSHARE
};

/***/ }),

/***/ "./src/config/minis/douyin.ts":
/*!************************************!*\
  !*** ./src/config/minis/douyin.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// * 每个小程序单独配置  工地急招
// * page-title-global
var PAGETITLE = '鱼泡网-';
// * 小程序token 
var TOKEN = 'douyin';
// * 小程序是否能被分享
var ISCANSHARE = false;
// * 小程序广告unitid
var UNITID = 'adunit-80f40e8b4f60c3f6';
// * 邀请key
var INVITESOURCE = "712790d9629c6dcea00e3f5bff60132b";
// * 是否使用推送信息
var USESUBSCRIBEMESSAGE = false;
module.exports = {
  PAGETITLE: PAGETITLE,
  TOKEN: TOKEN,
  UNITID: UNITID,
  INVITESOURCE: INVITESOURCE,
  USESUBSCRIBEMESSAGE: USESUBSCRIBEMESSAGE
};

/***/ }),

/***/ "./src/config/minis/jizhao.ts":
/*!************************************!*\
  !*** ./src/config/minis/jizhao.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: your name
 * @Date: 2020-10-28 11:04:26
 * @LastEditTime: 2020-11-06 17:06:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yupaowang\src\config\minis\jizhao.ts
 */
// * 每个小程序单独配置  工地急招
// * page-title-global
var PAGETITLE = '鱼泡网-';
// * 小程序token 
var TOKEN = 'jizhao';
// * 小程序是否能被分享
var ISCANSHARE = true;
// * 小程序广告unitid
var UNITID = 'adunit-80f40e8b4f60c3f6';
// * 邀请key
var INVITESOURCE = "712790d9629c6dcea00e3f5bff60132b";
// * 是否使用推送信息
var USESUBSCRIBEMESSAGE = true;
// * 激励视频
var VIDEOAD = 'adunit-31b05acadbd2a1d1';
module.exports = {
  PAGETITLE: PAGETITLE,
  TOKEN: TOKEN,
  UNITID: UNITID,
  INVITESOURCE: INVITESOURCE,
  USESUBSCRIBEMESSAGE: USESUBSCRIBEMESSAGE,
  VIDEOAD: VIDEOAD
};

/***/ }),

/***/ "./src/config/pages/lists.ts":
/*!***********************************!*\
  !*** ./src/config/pages/lists.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 招工、找活、二手列表页筛选条件配置
// 选择器 keys 配置
var AreaPickerKey = exports.AreaPickerKey = 'area';
var ClassifyPickerKey = exports.ClassifyPickerKey = 'classify';
var FilterPickerKey = exports.FilterPickerKey = 'filter';
var MemberPickerKey = exports.MemberPickerKey = 'member';
var ResumeFilterPickerKey = exports.ResumeFilterPickerKey = 'resumefilter';

/***/ }),

/***/ "./src/config/store.ts":
/*!*****************************!*\
  !*** ./src/config/store.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// * 本文件为小程序内部缓存声明文件
// 用户信息
var UserInfo = exports.UserInfo = 'userInfo';
// 城市数据 发布招工 首页都会用到
var Areas = exports.Areas = 'areaData';
// 历史选择城市
var HistoryCities = exports.HistoryCities = 'historyCities';
// 当前定位城市
var UserLocationCity = exports.UserLocationCity = 'userLocationCity';
// 列表选择城市
var UserListChooseCity = exports.UserListChooseCity = 'userListChooseCity';
// 最后发布招工地点
var UserLastPublishArea = exports.UserLastPublishArea = 'userLastPublishArea';
// 用户发布 选择地址 历史记录
var UserPublishAreaHistory = exports.UserPublishAreaHistory = 'userPublishAreaHistory';
// 招工置顶 暂存搜索记录
var SearchList = exports.SearchList = 'searchList';
// 高德api的userlocation
var UserLocation = exports.UserLocation = 'userLocation';
// 找活名片info信息
var Introinfo = exports.Introinfo = 'introinfo';

/***/ }),

/***/ "./src/constants/filter_classify.ts":
/*!******************************************!*\
  !*** ./src/constants/filter_classify.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/member.ts":
/*!*********************************!*\
  !*** ./src/constants/member.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';
var TEL = exports.TEL = 'tel';

/***/ }),

/***/ "./src/constants/msg.ts":
/*!******************************!*\
  !*** ./src/constants/msg.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/realname.ts":
/*!***********************************!*\
  !*** ./src/constants/realname.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';
var SETFUN = exports.SETFUN = 'setfun';
var SETAREA = exports.SETAREA = 'setarea';

/***/ }),

/***/ "./src/constants/recruit.ts":
/*!**********************************!*\
  !*** ./src/constants/recruit.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GETAREAINFO = exports.GETAREAINFO = 'getareainfo';
var SETAREAINFO = exports.SETAREAINFO = 'setareainfo';
var SETAREA = exports.SETAREA = 'setarea';
var GETAREA = exports.GETAREA = 'getarea';
var SETPOSITIONSTATUS = exports.SETPOSITIONSTATUS = 'setpositionstatus';

/***/ }),

/***/ "./src/constants/resume_addinfo.ts":
/*!*****************************************!*\
  !*** ./src/constants/resume_addinfo.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/resume_data.ts":
/*!**************************************!*\
  !*** ./src/constants/resume_data.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-04 19:51:52
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-10 10:00:53
 * @Description:
 */
// 获取找活详情全部数据
var GETUSERRESUME = exports.GETUSERRESUME = 'getUseResume';
var SETUSERRESUME = exports.SETUSERRESUME = 'setUseResume';
// 单独设置人员信息
var SETINTRODUCE = exports.SETINTRODUCE = 'setIntroduce';
// 单独设置技能证书
var SETCERTIFICATE = exports.SETCERTIFICATE = 'setCertificate';
// 单独设置项目
var SETPROJECT = exports.SETPROJECT = 'setproject';

/***/ }),

/***/ "./src/constants/resume_list.ts":
/*!**************************************!*\
  !*** ./src/constants/resume_list.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 项目经验
var SETSUBPACKPROJECT = exports.SETSUBPACKPROJECT = 'setSubpackageProject';
// 技能证书
var SETSUBPACKCERTIFICATE = exports.SETSUBPACKCERTIFICATE = 'setSubpackCertificate';

/***/ }),

/***/ "./src/constants/tabbar.ts":
/*!*********************************!*\
  !*** ./src/constants/tabbar.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeInTabbar = typeInTabbar;
var HOME = exports.HOME = 'home';
var RECRUIT = exports.RECRUIT = 'recruit';
var RESUME = exports.RESUME = 'resume';
var MEMBER = exports.MEMBER = 'member';
var USED = exports.USED = 'used';
var types = [HOME, RECRUIT, RESUME, MEMBER];
function typeInTabbar(val) {
  return types.includes(val);
}

/***/ }),

/***/ "./src/constants/user.tsx":
/*!********************************!*\
  !*** ./src/constants/user.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/wechat_notice.ts":
/*!****************************************!*\
  !*** ./src/constants/wechat_notice.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS = 'success';
exports.default = SUCCESS;

/***/ }),

/***/ "./src/hooks/code/index.ts":
/*!*********************************!*\
  !*** ./src/hooks/code/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendTypeNo = exports.SendTypeHave = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useCode;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _index = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用户获取验证码
var SendTypeHave = exports.SendTypeHave = 'have';
var SendTypeNo = exports.SendTypeNo = 'no';
var title = '获取验证码';
function useCode(type) {
  var _useState = (0, _taroTt.useState)(type === false ? false : !!type),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var sendType = type === false ? SendTypeNo : SendTypeHave;

  var _useState3 = (0, _taroTt.useState)(title),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1];

  var userGetCode = function userGetCode(tel) {
    if (disabled) return;
    if (!(0, _index.isPhone)(tel)) {
      (0, _index3.default)('请先输入正确的手机号码');
      return;
    }
    var data = { tel: tel, sendType: sendType };
    setDisabled(true);
    (0, _index4.getUserPhoneCode)(data).then(function (res) {
      (0, _index3.default)(res.errmsg, 2500);
      if (res.errcode == 'ok') {
        var t = res.refresh || 60;
        setText(t + 's后重新获取');
        var timer = setInterval(function () {
          t--;
          if (t === 0) {
            setDisabled(false);
            clearInterval(timer);
            setText(title);
            return false;
          }
          setText(t + 's后重新获取');
        }, 1000);
      }
    });
  };
  return {
    disabled: disabled,
    text: text,
    userGetCode: userGetCode
  };
}

/***/ }),

/***/ "./src/hooks/publish/resume.ts":
/*!*************************************!*\
  !*** ./src/hooks/publish/resume.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useResume;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _data = __webpack_require__(/*! ../../pages/resume/publish/data */ "./src/pages/resume/publish/data.ts");

var _resume_data = __webpack_require__(/*! ../../actions/resume_data */ "./src/actions/resume_data.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _recruit = __webpack_require__(/*! ../../actions/recruit */ "./src/actions/recruit.ts");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function useResume() {
  var dispatch = (0, _redux.useDispatch)();
  // 检测用户是否登录
  var login = (0, _redux.useSelector)(function (store) {
    return store.User['login'];
  });
  // 获取找活名片信息
  var resumeData = (0, _redux.useSelector)(function (state) {
    return state.resumeData;
  });
  // 基础信息

  var _useState = (0, _taroTt.useState)(resumeData.info),
      _useState2 = _slicedToArray(_useState, 2),
      infoData = _useState2[0],
      setInfoData = _useState2[1];
  // 人员信息


  var _useState3 = (0, _taroTt.useState)(resumeData.introducesData),
      _useState4 = _slicedToArray(_useState3, 2),
      introducesData = _useState4[0],
      setIntroducesData = _useState4[1];
  // 项目


  var _useState5 = (0, _taroTt.useState)(resumeData.projectData),
      _useState6 = _slicedToArray(_useState5, 2),
      projectData = _useState6[0],
      setProjectData = _useState6[1];
  // 职业技能


  var _useState7 = (0, _taroTt.useState)(resumeData.certificates),
      _useState8 = _slicedToArray(_useState7, 2),
      certificates = _useState8[0],
      setCertificates = _useState8[1];
  //置顶


  var _useState9 = (0, _taroTt.useState)(_data.RESUME_TOP_DATA),
      _useState10 = _slicedToArray(_useState9, 2),
      resume_top = _useState10[0],
      setResume_top = _useState10[1];
  // 人员信息


  var _useState11 = (0, _taroTt.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      is_introduces = _useState12[0],
      setIs_introduces = _useState12[1];
  // 最大项目长度


  var _useState13 = (0, _taroTt.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      project_count = _useState14[0],
      setProject_count = _useState14[1];
  // 最大技能长度


  var _useState15 = (0, _taroTt.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      certificate_count = _useState16[0],
      setCertificate_count = _useState16[1];
  // 显示图标


  var _useState17 = (0, _taroTt.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      show_tips = _useState18[0],
      setShow_tips = _useState18[1];
  // 工作状态


  var _useState19 = (0, _taroTt.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      selectData = _useState20[0],
      setSelectData = _useState20[1];
  // 工作状态索引


  var _useState21 = (0, _taroTt.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      selectDataIndex = _useState22[0],
      setSelectDataIndex = _useState22[1];
  // 工作状态


  var _useState23 = (0, _taroTt.useState)(''),
      _useState24 = _slicedToArray(_useState23, 2),
      check = _useState24[0],
      setCheck = _useState24[1];
  // 是否修改项目经验


  var _useState25 = (0, _taroTt.useState)(''),
      _useState26 = _slicedToArray(_useState25, 2),
      isModifyProject = _useState26[0],
      setIsModifyProject = _useState26[1];
  //是否修改技能证书


  var _useState27 = (0, _taroTt.useState)(''),
      _useState28 = _slicedToArray(_useState27, 2),
      isModifySkill = _useState28[0],
      setIsModifySkill = _useState28[1];
  // 修改项目数量


  var _useState29 = (0, _taroTt.useState)(0),
      _useState30 = _slicedToArray(_useState29, 2),
      projectNum = _useState30[0],
      setProjectNum = _useState30[1];
  // 修改职业技能数量


  var _useState31 = (0, _taroTt.useState)(0),
      _useState32 = _slicedToArray(_useState31, 2),
      certificatesNum = _useState32[0],
      setCertificatesNum = _useState32[1];
  // 项目列表


  (0, _taroTt.useEffect)(function () {
    initResumeData();
  }, [login]);
  // 当redux数据发生改变后， 将自动更新到页面上
  (0, _taroTt.useEffect)(function () {
    if (!resumeData.isSet) return;
    setInfoData(resumeData.info);
    setIntroducesData(resumeData.introducesData);
    setProjectData(resumeData.projectData);
    setCertificates(resumeData.certificates);
  }, [resumeData]);
  // 请求找活详情数据
  var initResumeData = function initResumeData() {
    if (!login) return;
    (0, _index.resumeListAction)().then(function (res) {
      if (res.errcode === 200) {
        // debugger
        // 生日需要单独设置
        var time = void 0;
        if (res.data.info.birthday) {
          time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        } else {
          time = 0;
        }
        var age = time > 0 ? time + '岁' : '未填写';
        res.data.info.age = age;
        //基本信息
        var info = _extends({}, _data.INFODATA_DATA);
        info = _extends({}, info, res.data.info);
        setInfoData(_extends({}, info));
        // 清除地图redux
        dispatch((0, _recruit.setAreaInfo)({
          title: '',
          location: '',
          adcode: '',
          info: '',
          provice: '',
          city: ''
        }));
        // 设置页面显示的项目
        // 定义有图片项目数组
        var hasImageProject = [];
        // 定义没图片的数组
        var NoImageProject = [];
        var data = [].concat(_toConsumableArray(res.data.project));
        for (var i = 0; i < data.length; i++) {
          // 将时间转成毫秒并存入数组
          data[i].endTime = new Date(data[i].completion_time).getTime();
          // 获取项目经验对象中images不为空的项目
          if (data[i].image.length != 0) {
            // 增加index字段作为data数组查找标识
            data[i].index = i;
            hasImageProject.push(data[i]);
          } else {
            data[i].index = i;
            NoImageProject.push(data[i]);
          }
        }
        // 设置是否修改项目经验
        var _isModifyProject = '';
        if (res.data.project.length > 0) {
          for (var _i = 0; _i < res.data.project.length; _i++) {
            _isModifyProject = res.data.project[_i].check;
            if (res.data.project[_i].check == '0') {
              break;
            }
          }
        }
        setIsModifyProject(_isModifyProject);
        // 是否修改技能证书
        var _isModifySkill = '';
        if (res.data.certificates.length) {
          for (var _i2 = 0; _i2 < res.data.certificates.length; _i2++) {
            _isModifySkill = res.data.certificates[_i2].check;
            if (res.data.certificates[_i2].check == '0') {
              break;
            }
          }
        }
        setIsModifySkill(_isModifySkill);
        // 将有图片的数组与没有图片的数组进行按照时间降序排列
        var sortImageProject = hasImageProject.sort(projectSort("endTime"));
        var sortNoImageProject = NoImageProject.sort(projectSort("endTime"));
        // 组合项目经验对象
        var projectItem = [].concat(_toConsumableArray(sortImageProject), _toConsumableArray(sortNoImageProject));
        // 获取排序后的第一个元素
        if (projectItem.length) {
          if (new Date(projectItem[0].completion_time).getTime() / 86400000 < parseInt((new Date().getTime() / 86400000).toString())) {
            // 项目
            if (projectItem.length) {
              projectItem[0].completion_timeTitle = 'zhijing';
            }
          } else {
            projectItem[0].completion_timeTitle = 'zhijin';
          }
        }
        console.error(projectItem, 'projectItemprojectItem');
        setProjectData([].concat(_toConsumableArray(projectItem)));
        // 是否有人员信息
        setIs_introduces(res.data.is_introduces);
        //最大项目长度
        setProject_count(res.data.project_count);
        // 最大技能长度
        setCertificate_count(res.data.certificate_count);
        // 头像旁边图片显示
        setShow_tips(res.data.content && res.data.content.show_tips || 0);
        // 工作状态
        setSelectData(res.data.status);
        // 工作状态用来选择是正在找工作还是已找到工作
        setCheck(res.data.info.check);
        //人员信息
        var introduces = _extends({}, _data.INTRODUCERS_DATA);
        introduces = _extends({}, introduces, res.data.introduces);
        // 修改项目数量
        setProjectNum(res.data.fail_project);
        // 修改技能证书数量
        setCertificatesNum(res.data.fail_certificate);
        setIntroducesData(_extends({}, introduces));
        setCertificates([].concat(_toConsumableArray(res.data.certificates)));
        setResume_top(_extends({}, res.data.resume_top));
        // 存redux
        dispatch((0, _resume_data.setUseResume)({
          info: res.data.info,
          introducesData: res.data.introduces,
          certificates: res.data.certificates,
          projectData: projectItem,
          resume_uuid: res.data.info && res.data.info.uuid || '',
          isSet: true
        }));
      } else {
        (0, _index3.default)(res.errmsg);
      }
    });
  };
  // 获取项目结束时间比较近的项目
  // 排序规则降序排列
  var projectSort = function projectSort(key) {
    return function (objectN, objectM) {
      var valueN = objectN[key];
      var valueM = objectM[key];
      if (valueN < valueM) return 1;else if (valueN > valueM) return -1;else return 0;
    };
  };
  // 工作状态
  var handleSelectData = function handleSelectData() {
    if (check == '2') {
      var selectdataList = [],
          selectdataId = [];
      for (var i = 0; i < selectData.length; i++) {
        selectdataList.push(selectData[i].name);
      }
      for (var _i3 = 0; _i3 < selectData.length; _i3++) {
        selectdataId.push(selectData[_i3].id);
      }
      _taroTt2.default.showActionSheet({
        itemList: selectdataList,
        success: function success(res) {
          if (selectDataIndex == res.tapIndex) {
            return;
          }
          setSelectDataIndex(res.tapIndex);
          (0, _index.resumesEditEndAction)({ type: selectdataId[res.tapIndex], resume_uuid: infoData.uuid }).then(function (res) {
            if (res.errcode == 'ok') {
              (0, _index2.ShowActionModal)({
                title: '温馨提示',
                msg: res.errmsg
              });
              initResumeData();
            } else {
              (0, _index2.ShowActionModal)({
                title: '温馨提示',
                msg: res.errmsg
              });
            }
          });
        }
      });
      // 审核中
    } else if (check == '1') {
      (0, _index2.ShowActionModal)({
        title: '温馨提示',
        msg: "审核中请耐心等待"
      });
      return;
      // 审核未通过
    } else if (check == '0') {
      (0, _index2.ShowActionModal)({
        title: '温馨提示',
        msg: "审核未通过，请修改信息"
      });
      return;
    }
  };
  return {
    infoData: infoData,
    introducesData: introducesData,
    projectData: projectData,
    certificates: certificates,
    resume_top: resume_top,
    initResumeData: initResumeData,
    is_introduces: is_introduces,
    project_count: project_count,
    certificate_count: certificate_count,
    show_tips: show_tips,
    selectData: selectData,
    selectDataIndex: selectDataIndex,
    handleSelectData: handleSelectData,
    isModifySkill: isModifySkill,
    isModifyProject: isModifyProject,
    projectNum: projectNum,
    certificatesNum: certificatesNum
  };
}

/***/ }),

/***/ "./src/hooks/resume_addinfo/index.ts":
/*!*******************************************!*\
  !*** ./src/hooks/resume_addinfo/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Author: zyb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Date: 2020-11-03 09:23:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @LastEditors: zyb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @LastEditTime: 2020-11-05 17:29:51
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Description:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


exports.default = useResumeAddInfo;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _resume_addinfo = __webpack_require__(/*! ../../actions/resume_addinfo */ "./src/actions/resume_addinfo.ts");

function useResumeAddInfo() {
  var dispatch = (0, _redux.useDispatch)();
  var addInfoConfig = (0, _redux.useSelector)(function (store) {
    return store['resumeAddInfo'];
  });
  // 保存配置项

  var _useState = (0, _taroTt.useState)(addInfoConfig),
      _useState2 = _slicedToArray(_useState, 2),
      infoConfig = _useState2[0],
      setInfoConfig = _useState2[1];
  // 当前性别的下标


  var _useState3 = (0, _taroTt.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      genderCurrent = _useState4[0],
      setGenderCurrent = _useState4[1];
  // 当前民族的下标


  var _useState5 = (0, _taroTt.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      nationCurrent = _useState6[0],
      setNationCurrent = _useState6[1];
  // 获取年月日范围


  var startDatePicker = new Date().getFullYear() - 60 + '-01-01';
  // 初始化基本信息数据
  //const 
  // 请求配置项数据
  (0, _taroTt.useEffect)(function () {
    if (addInfoConfig.isset) return;
    (0, _index.getResumeAddInfoConfig)().then(function (res) {
      var data = _extends({}, res, { isset: true });
      setInfoConfig(_extends({}, data));
      dispatch((0, _resume_addinfo.setResumeInfoConfig)(_extends({}, data)));
    });
  }, []);
  return {
    infoConfig: infoConfig,
    genderCurrent: genderCurrent,
    startDatePicker: startDatePicker
  };
}

/***/ }),

/***/ "./src/models/area.ts":
/*!****************************!*\
  !*** ./src/models/area.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCityInfo = getCityInfo;
exports.getLongAreaAdname = getLongAreaAdname;
exports.getCityInfoById = getCityInfoById;
var AREAS = [{
  "id": "1",
  "pid": "0",
  "name": "全国",
  "ad_name": "中国",
  "has_children": 0,
  "children": []
}, {
  "id": "2",
  "pid": "1",
  "name": "北京",
  "ad_name": "北京市",
  "has_children": 0,
  "children": []
}, {
  "id": "3",
  "pid": "1",
  "name": "安徽",
  "ad_name": "安徽省",
  "has_children": 1,
  "children": [{
    "id": "3",
    "pid": "1",
    "name": "安徽",
    "ad_name": "安徽省"
  }, {
    "id": "36",
    "pid": "3",
    "name": "安庆",
    "ad_name": "安庆市"
  }, {
    "id": "37",
    "pid": "3",
    "name": "蚌埠",
    "ad_name": "蚌埠市"
  }, {
    "id": "39",
    "pid": "3",
    "name": "池州",
    "ad_name": "池州市"
  }, {
    "id": "40",
    "pid": "3",
    "name": "滁州",
    "ad_name": "滁州市"
  }, {
    "id": "41",
    "pid": "3",
    "name": "阜阳",
    "ad_name": "阜阳市"
  }, {
    "id": "42",
    "pid": "3",
    "name": "淮北",
    "ad_name": "淮北市"
  }, {
    "id": "43",
    "pid": "3",
    "name": "淮南",
    "ad_name": "淮南市"
  }, {
    "id": "44",
    "pid": "3",
    "name": "黄山",
    "ad_name": "黄山市"
  }, {
    "id": "45",
    "pid": "3",
    "name": "六安",
    "ad_name": "六安市"
  }, {
    "id": "46",
    "pid": "3",
    "name": "马鞍山",
    "ad_name": "马鞍山市"
  }, {
    "id": "47",
    "pid": "3",
    "name": "宿州",
    "ad_name": "宿州市"
  }, {
    "id": "48",
    "pid": "3",
    "name": "铜陵",
    "ad_name": "铜陵市"
  }, {
    "id": "49",
    "pid": "3",
    "name": "芜湖",
    "ad_name": "芜湖市"
  }, {
    "id": "50",
    "pid": "3",
    "name": "宣城",
    "ad_name": "宣城市"
  }, {
    "id": "51",
    "pid": "3",
    "name": "亳州",
    "ad_name": "亳州市"
  }, {
    "id": "3401",
    "pid": "3",
    "name": "合肥",
    "ad_name": "合肥市"
  }]
}, {
  "id": "4",
  "pid": "1",
  "name": "福建",
  "ad_name": "福建省",
  "has_children": 1,
  "children": [{
    "id": "4",
    "pid": "1",
    "name": "福建",
    "ad_name": "福建省"
  }, {
    "id": "53",
    "pid": "4",
    "name": "福州",
    "ad_name": "福州市"
  }, {
    "id": "54",
    "pid": "4",
    "name": "龙岩",
    "ad_name": "龙岩市"
  }, {
    "id": "55",
    "pid": "4",
    "name": "南平",
    "ad_name": "南平市"
  }, {
    "id": "56",
    "pid": "4",
    "name": "宁德",
    "ad_name": "宁德市"
  }, {
    "id": "57",
    "pid": "4",
    "name": "莆田",
    "ad_name": "莆田市"
  }, {
    "id": "58",
    "pid": "4",
    "name": "泉州",
    "ad_name": "泉州市"
  }, {
    "id": "59",
    "pid": "4",
    "name": "三明",
    "ad_name": "三明市"
  }, {
    "id": "60",
    "pid": "4",
    "name": "厦门",
    "ad_name": "厦门市"
  }, {
    "id": "61",
    "pid": "4",
    "name": "漳州",
    "ad_name": "漳州市"
  }]
}, {
  "id": "5",
  "pid": "1",
  "name": "甘肃",
  "ad_name": "甘肃省",
  "has_children": 1,
  "children": [{
    "id": "5",
    "pid": "1",
    "name": "甘肃",
    "ad_name": "甘肃省"
  }, {
    "id": "62",
    "pid": "5",
    "name": "兰州",
    "ad_name": "兰州市"
  }, {
    "id": "63",
    "pid": "5",
    "name": "白银",
    "ad_name": "白银市"
  }, {
    "id": "64",
    "pid": "5",
    "name": "定西",
    "ad_name": "定西市"
  }, {
    "id": "65",
    "pid": "5",
    "name": "甘南",
    "ad_name": "甘南藏族自治州"
  }, {
    "id": "66",
    "pid": "5",
    "name": "嘉峪关",
    "ad_name": "嘉峪关市"
  }, {
    "id": "67",
    "pid": "5",
    "name": "金昌",
    "ad_name": "金昌市"
  }, {
    "id": "68",
    "pid": "5",
    "name": "酒泉",
    "ad_name": "酒泉市"
  }, {
    "id": "69",
    "pid": "5",
    "name": "临夏",
    "ad_name": "临夏回族自治州"
  }, {
    "id": "70",
    "pid": "5",
    "name": "陇南",
    "ad_name": "陇南市"
  }, {
    "id": "71",
    "pid": "5",
    "name": "平凉",
    "ad_name": "平凉市"
  }, {
    "id": "72",
    "pid": "5",
    "name": "庆阳",
    "ad_name": "庆阳市"
  }, {
    "id": "73",
    "pid": "5",
    "name": "天水",
    "ad_name": "天水市"
  }, {
    "id": "74",
    "pid": "5",
    "name": "武威",
    "ad_name": "武威市"
  }, {
    "id": "75",
    "pid": "5",
    "name": "张掖",
    "ad_name": "张掖市"
  }]
}, {
  "id": "6",
  "pid": "1",
  "name": "广东",
  "ad_name": "广东省",
  "has_children": 1,
  "children": [{
    "id": "6",
    "pid": "1",
    "name": "广东",
    "ad_name": "广东省"
  }, {
    "id": "76",
    "pid": "6",
    "name": "广州",
    "ad_name": "广州市"
  }, {
    "id": "77",
    "pid": "6",
    "name": "深圳",
    "ad_name": "深圳市"
  }, {
    "id": "78",
    "pid": "6",
    "name": "潮州",
    "ad_name": "潮州市"
  }, {
    "id": "79",
    "pid": "6",
    "name": "东莞",
    "ad_name": "东莞市"
  }, {
    "id": "80",
    "pid": "6",
    "name": "佛山",
    "ad_name": "佛山市"
  }, {
    "id": "81",
    "pid": "6",
    "name": "河源",
    "ad_name": "河源市"
  }, {
    "id": "82",
    "pid": "6",
    "name": "惠州",
    "ad_name": "惠州市"
  }, {
    "id": "83",
    "pid": "6",
    "name": "江门",
    "ad_name": "江门市"
  }, {
    "id": "84",
    "pid": "6",
    "name": "揭阳",
    "ad_name": "揭阳市"
  }, {
    "id": "85",
    "pid": "6",
    "name": "茂名",
    "ad_name": "茂名市"
  }, {
    "id": "86",
    "pid": "6",
    "name": "梅州",
    "ad_name": "梅州市"
  }, {
    "id": "87",
    "pid": "6",
    "name": "清远",
    "ad_name": "清远市"
  }, {
    "id": "88",
    "pid": "6",
    "name": "汕头",
    "ad_name": "汕头市"
  }, {
    "id": "89",
    "pid": "6",
    "name": "汕尾",
    "ad_name": "汕尾市"
  }, {
    "id": "90",
    "pid": "6",
    "name": "韶关",
    "ad_name": "韶关市"
  }, {
    "id": "91",
    "pid": "6",
    "name": "阳江",
    "ad_name": "阳江市"
  }, {
    "id": "92",
    "pid": "6",
    "name": "云浮",
    "ad_name": "云浮市"
  }, {
    "id": "93",
    "pid": "6",
    "name": "湛江",
    "ad_name": "湛江市"
  }, {
    "id": "94",
    "pid": "6",
    "name": "肇庆",
    "ad_name": "肇庆市"
  }, {
    "id": "95",
    "pid": "6",
    "name": "中山",
    "ad_name": "中山市"
  }, {
    "id": "96",
    "pid": "6",
    "name": "珠海",
    "ad_name": "珠海市"
  }]
}, {
  "id": "7",
  "pid": "1",
  "name": "广西",
  "ad_name": "广西壮族自治区",
  "has_children": 1,
  "children": [{
    "id": "7",
    "pid": "1",
    "name": "广西",
    "ad_name": "广西壮族自治区"
  }, {
    "id": "97",
    "pid": "7",
    "name": "南宁",
    "ad_name": "南宁市"
  }, {
    "id": "98",
    "pid": "7",
    "name": "桂林",
    "ad_name": "桂林市"
  }, {
    "id": "99",
    "pid": "7",
    "name": "百色",
    "ad_name": "百色市"
  }, {
    "id": "100",
    "pid": "7",
    "name": "北海",
    "ad_name": "北海市"
  }, {
    "id": "101",
    "pid": "7",
    "name": "崇左",
    "ad_name": "崇左市"
  }, {
    "id": "102",
    "pid": "7",
    "name": "防城港",
    "ad_name": "防城港市"
  }, {
    "id": "103",
    "pid": "7",
    "name": "贵港",
    "ad_name": "贵港市"
  }, {
    "id": "104",
    "pid": "7",
    "name": "河池",
    "ad_name": "河池市"
  }, {
    "id": "105",
    "pid": "7",
    "name": "贺州",
    "ad_name": "贺州市"
  }, {
    "id": "106",
    "pid": "7",
    "name": "来宾",
    "ad_name": "来宾市"
  }, {
    "id": "107",
    "pid": "7",
    "name": "柳州",
    "ad_name": "柳州市"
  }, {
    "id": "108",
    "pid": "7",
    "name": "钦州",
    "ad_name": "钦州市"
  }, {
    "id": "109",
    "pid": "7",
    "name": "梧州",
    "ad_name": "梧州市"
  }, {
    "id": "110",
    "pid": "7",
    "name": "玉林",
    "ad_name": "玉林市"
  }]
}, {
  "id": "8",
  "pid": "1",
  "name": "贵州",
  "ad_name": "贵州省",
  "has_children": 1,
  "children": [{
    "id": "8",
    "pid": "1",
    "name": "贵州",
    "ad_name": "贵州省"
  }, {
    "id": "111",
    "pid": "8",
    "name": "贵阳",
    "ad_name": "贵阳市"
  }, {
    "id": "112",
    "pid": "8",
    "name": "安顺",
    "ad_name": "安顺市"
  }, {
    "id": "113",
    "pid": "8",
    "name": "毕节",
    "ad_name": "毕节市"
  }, {
    "id": "114",
    "pid": "8",
    "name": "六盘水",
    "ad_name": "六盘水市"
  }, {
    "id": "115",
    "pid": "8",
    "name": "黔东南",
    "ad_name": "黔东南苗族侗族自治州"
  }, {
    "id": "116",
    "pid": "8",
    "name": "黔南",
    "ad_name": "黔南布依族苗族自治州"
  }, {
    "id": "117",
    "pid": "8",
    "name": "黔西南",
    "ad_name": "黔西南布依族苗族自治州"
  }, {
    "id": "118",
    "pid": "8",
    "name": "铜仁",
    "ad_name": "铜仁市"
  }, {
    "id": "119",
    "pid": "8",
    "name": "遵义",
    "ad_name": "遵义市"
  }]
}, {
  "id": "9",
  "pid": "1",
  "name": "海南",
  "ad_name": "海南省",
  "has_children": 1,
  "children": [{
    "id": "9",
    "pid": "1",
    "name": "海南",
    "ad_name": "海南省"
  }, {
    "id": "120",
    "pid": "9",
    "name": "海口",
    "ad_name": "海口市"
  }, {
    "id": "121",
    "pid": "9",
    "name": "三亚",
    "ad_name": "三亚市"
  }, {
    "id": "122",
    "pid": "9",
    "name": "白沙",
    "ad_name": "白沙黎族自治县"
  }, {
    "id": "123",
    "pid": "9",
    "name": "保亭",
    "ad_name": "保亭黎族苗族自治县"
  }, {
    "id": "124",
    "pid": "9",
    "name": "昌江",
    "ad_name": "昌江"
  }, {
    "id": "125",
    "pid": "9",
    "name": "澄迈县",
    "ad_name": "澄迈县"
  }, {
    "id": "126",
    "pid": "9",
    "name": "定安县",
    "ad_name": "定安县"
  }, {
    "id": "127",
    "pid": "9",
    "name": "东方",
    "ad_name": "东方市"
  }, {
    "id": "128",
    "pid": "9",
    "name": "乐东",
    "ad_name": "乐东黎族自治县"
  }, {
    "id": "129",
    "pid": "9",
    "name": "临高县",
    "ad_name": "临高县"
  }, {
    "id": "130",
    "pid": "9",
    "name": "陵水",
    "ad_name": "陵水黎族自治县"
  }, {
    "id": "131",
    "pid": "9",
    "name": "琼海",
    "ad_name": "琼海市"
  }, {
    "id": "132",
    "pid": "9",
    "name": "琼中",
    "ad_name": "琼中黎族苗族自治县"
  }, {
    "id": "133",
    "pid": "9",
    "name": "屯昌县",
    "ad_name": "屯昌县"
  }, {
    "id": "134",
    "pid": "9",
    "name": "万宁",
    "ad_name": "万宁市"
  }, {
    "id": "135",
    "pid": "9",
    "name": "文昌",
    "ad_name": "文昌市"
  }, {
    "id": "136",
    "pid": "9",
    "name": "五指山",
    "ad_name": "五指山市"
  }, {
    "id": "137",
    "pid": "9",
    "name": "儋州",
    "ad_name": "儋州市"
  }]
}, {
  "id": "10",
  "pid": "1",
  "name": "河北",
  "ad_name": "河北省",
  "has_children": 1,
  "children": [{
    "id": "10",
    "pid": "1",
    "name": "河北",
    "ad_name": "河北省"
  }, {
    "id": "138",
    "pid": "10",
    "name": "石家庄",
    "ad_name": "石家庄市"
  }, {
    "id": "139",
    "pid": "10",
    "name": "保定",
    "ad_name": "保定市"
  }, {
    "id": "140",
    "pid": "10",
    "name": "沧州",
    "ad_name": "沧州市"
  }, {
    "id": "141",
    "pid": "10",
    "name": "承德",
    "ad_name": "承德市"
  }, {
    "id": "142",
    "pid": "10",
    "name": "邯郸",
    "ad_name": "邯郸市"
  }, {
    "id": "143",
    "pid": "10",
    "name": "衡水",
    "ad_name": "衡水市"
  }, {
    "id": "144",
    "pid": "10",
    "name": "廊坊",
    "ad_name": "廊坊市"
  }, {
    "id": "145",
    "pid": "10",
    "name": "秦皇岛",
    "ad_name": "秦皇岛市"
  }, {
    "id": "146",
    "pid": "10",
    "name": "唐山",
    "ad_name": "唐山市"
  }, {
    "id": "147",
    "pid": "10",
    "name": "邢台",
    "ad_name": "邢台市"
  }, {
    "id": "148",
    "pid": "10",
    "name": "张家口",
    "ad_name": "张家口市"
  }]
}, {
  "id": "11",
  "pid": "1",
  "name": "河南",
  "ad_name": "河南省",
  "has_children": 1,
  "children": [{
    "id": "11",
    "pid": "1",
    "name": "河南",
    "ad_name": "河南省"
  }, {
    "id": "149",
    "pid": "11",
    "name": "郑州",
    "ad_name": "郑州市"
  }, {
    "id": "150",
    "pid": "11",
    "name": "洛阳",
    "ad_name": "洛阳市"
  }, {
    "id": "151",
    "pid": "11",
    "name": "开封",
    "ad_name": "开封市"
  }, {
    "id": "152",
    "pid": "11",
    "name": "安阳",
    "ad_name": "安阳市"
  }, {
    "id": "153",
    "pid": "11",
    "name": "鹤壁",
    "ad_name": "鹤壁市"
  }, {
    "id": "154",
    "pid": "11",
    "name": "济源",
    "ad_name": "济源市"
  }, {
    "id": "155",
    "pid": "11",
    "name": "焦作",
    "ad_name": "焦作市"
  }, {
    "id": "156",
    "pid": "11",
    "name": "南阳",
    "ad_name": "南阳市"
  }, {
    "id": "157",
    "pid": "11",
    "name": "平顶山",
    "ad_name": "平顶山市"
  }, {
    "id": "158",
    "pid": "11",
    "name": "三门峡",
    "ad_name": "三门峡市"
  }, {
    "id": "159",
    "pid": "11",
    "name": "商丘",
    "ad_name": "商丘市"
  }, {
    "id": "160",
    "pid": "11",
    "name": "新乡",
    "ad_name": "新乡市"
  }, {
    "id": "161",
    "pid": "11",
    "name": "信阳",
    "ad_name": "信阳市"
  }, {
    "id": "162",
    "pid": "11",
    "name": "许昌",
    "ad_name": "许昌市"
  }, {
    "id": "163",
    "pid": "11",
    "name": "周口",
    "ad_name": "周口市"
  }, {
    "id": "164",
    "pid": "11",
    "name": "驻马店",
    "ad_name": "驻马店市"
  }, {
    "id": "165",
    "pid": "11",
    "name": "漯河",
    "ad_name": "漯河市"
  }, {
    "id": "166",
    "pid": "11",
    "name": "濮阳",
    "ad_name": "濮阳市"
  }]
}, {
  "id": "12",
  "pid": "1",
  "name": "黑龙江",
  "ad_name": "黑龙江省",
  "has_children": 1,
  "children": [{
    "id": "12",
    "pid": "1",
    "name": "黑龙江",
    "ad_name": "黑龙江省"
  }, {
    "id": "167",
    "pid": "12",
    "name": "哈尔滨",
    "ad_name": "哈尔滨市"
  }, {
    "id": "168",
    "pid": "12",
    "name": "大庆",
    "ad_name": "大庆市"
  }, {
    "id": "169",
    "pid": "12",
    "name": "大兴安岭",
    "ad_name": "大兴安岭地区"
  }, {
    "id": "170",
    "pid": "12",
    "name": "鹤岗",
    "ad_name": "鹤岗市"
  }, {
    "id": "171",
    "pid": "12",
    "name": "黑河",
    "ad_name": "黑河市"
  }, {
    "id": "172",
    "pid": "12",
    "name": "鸡西",
    "ad_name": "鸡西市"
  }, {
    "id": "173",
    "pid": "12",
    "name": "佳木斯",
    "ad_name": "佳木斯市"
  }, {
    "id": "174",
    "pid": "12",
    "name": "牡丹江",
    "ad_name": "牡丹江市"
  }, {
    "id": "175",
    "pid": "12",
    "name": "七台河",
    "ad_name": "七台河市"
  }, {
    "id": "176",
    "pid": "12",
    "name": "齐齐哈尔",
    "ad_name": "齐齐哈尔市"
  }, {
    "id": "177",
    "pid": "12",
    "name": "双鸭山",
    "ad_name": "双鸭山市"
  }, {
    "id": "178",
    "pid": "12",
    "name": "绥化",
    "ad_name": "绥化市"
  }, {
    "id": "179",
    "pid": "12",
    "name": "伊春",
    "ad_name": "伊春市"
  }]
}, {
  "id": "13",
  "pid": "1",
  "name": "湖北",
  "ad_name": "湖北省",
  "has_children": 1,
  "children": [{
    "id": "13",
    "pid": "1",
    "name": "湖北",
    "ad_name": "湖北省"
  }, {
    "id": "180",
    "pid": "13",
    "name": "武汉",
    "ad_name": "武汉市"
  }, {
    "id": "181",
    "pid": "13",
    "name": "仙桃",
    "ad_name": "仙桃市"
  }, {
    "id": "182",
    "pid": "13",
    "name": "鄂州",
    "ad_name": "鄂州市"
  }, {
    "id": "183",
    "pid": "13",
    "name": "黄冈",
    "ad_name": "黄冈市"
  }, {
    "id": "184",
    "pid": "13",
    "name": "黄石",
    "ad_name": "黄石市"
  }, {
    "id": "185",
    "pid": "13",
    "name": "荆门",
    "ad_name": "荆门市"
  }, {
    "id": "186",
    "pid": "13",
    "name": "荆州",
    "ad_name": "荆州市"
  }, {
    "id": "187",
    "pid": "13",
    "name": "潜江",
    "ad_name": "潜江市"
  }, {
    "id": "188",
    "pid": "13",
    "name": "神农架林区",
    "ad_name": "神农架林区"
  }, {
    "id": "189",
    "pid": "13",
    "name": "十堰",
    "ad_name": "十堰市"
  }, {
    "id": "190",
    "pid": "13",
    "name": "随州",
    "ad_name": "随州市"
  }, {
    "id": "191",
    "pid": "13",
    "name": "天门",
    "ad_name": "天门市"
  }, {
    "id": "192",
    "pid": "13",
    "name": "咸宁",
    "ad_name": "咸宁市"
  }, {
    "id": "193",
    "pid": "13",
    "name": "襄阳",
    "ad_name": "襄阳市"
  }, {
    "id": "194",
    "pid": "13",
    "name": "孝感",
    "ad_name": "孝感市"
  }, {
    "id": "195",
    "pid": "13",
    "name": "宜昌",
    "ad_name": "宜昌市"
  }, {
    "id": "196",
    "pid": "13",
    "name": "恩施",
    "ad_name": "恩施"
  }]
}, {
  "id": "14",
  "pid": "1",
  "name": "湖南",
  "ad_name": "湖南省",
  "has_children": 1,
  "children": [{
    "id": "14",
    "pid": "1",
    "name": "湖南",
    "ad_name": "湖南省"
  }, {
    "id": "197",
    "pid": "14",
    "name": "长沙",
    "ad_name": "长沙市"
  }, {
    "id": "198",
    "pid": "14",
    "name": "张家界",
    "ad_name": "张家界市"
  }, {
    "id": "199",
    "pid": "14",
    "name": "常德",
    "ad_name": "常德市"
  }, {
    "id": "200",
    "pid": "14",
    "name": "郴州",
    "ad_name": "郴州市"
  }, {
    "id": "201",
    "pid": "14",
    "name": "衡阳",
    "ad_name": "衡阳市"
  }, {
    "id": "202",
    "pid": "14",
    "name": "怀化",
    "ad_name": "怀化市"
  }, {
    "id": "203",
    "pid": "14",
    "name": "娄底",
    "ad_name": "娄底市"
  }, {
    "id": "204",
    "pid": "14",
    "name": "邵阳",
    "ad_name": "邵阳市"
  }, {
    "id": "205",
    "pid": "14",
    "name": "湘潭",
    "ad_name": "湘潭市"
  }, {
    "id": "206",
    "pid": "14",
    "name": "湘西",
    "ad_name": "湘西土家族苗族自治州"
  }, {
    "id": "207",
    "pid": "14",
    "name": "益阳",
    "ad_name": "益阳市"
  }, {
    "id": "208",
    "pid": "14",
    "name": "永州",
    "ad_name": "永州市"
  }, {
    "id": "209",
    "pid": "14",
    "name": "岳阳",
    "ad_name": "岳阳市"
  }, {
    "id": "210",
    "pid": "14",
    "name": "株洲",
    "ad_name": "株洲市"
  }]
}, {
  "id": "15",
  "pid": "1",
  "name": "吉林",
  "ad_name": "吉林省",
  "has_children": 1,
  "children": [{
    "id": "15",
    "pid": "1",
    "name": "吉林",
    "ad_name": "吉林省"
  }, {
    "id": "211",
    "pid": "15",
    "name": "长春",
    "ad_name": "长春市"
  }, {
    "id": "212",
    "pid": "15",
    "name": "吉林",
    "ad_name": "吉林市"
  }, {
    "id": "213",
    "pid": "15",
    "name": "白城",
    "ad_name": "白城市"
  }, {
    "id": "214",
    "pid": "15",
    "name": "白山",
    "ad_name": "白山市"
  }, {
    "id": "215",
    "pid": "15",
    "name": "辽源",
    "ad_name": "辽源市"
  }, {
    "id": "216",
    "pid": "15",
    "name": "四平",
    "ad_name": "四平市"
  }, {
    "id": "217",
    "pid": "15",
    "name": "松原",
    "ad_name": "松原市"
  }, {
    "id": "218",
    "pid": "15",
    "name": "通化",
    "ad_name": "通化市"
  }, {
    "id": "219",
    "pid": "15",
    "name": "延边",
    "ad_name": "延边朝鲜族自治州"
  }]
}, {
  "id": "16",
  "pid": "1",
  "name": "江苏",
  "ad_name": "江苏省",
  "has_children": 1,
  "children": [{
    "id": "16",
    "pid": "1",
    "name": "江苏",
    "ad_name": "江苏省"
  }, {
    "id": "220",
    "pid": "16",
    "name": "南京",
    "ad_name": "南京市"
  }, {
    "id": "221",
    "pid": "16",
    "name": "苏州",
    "ad_name": "苏州市"
  }, {
    "id": "222",
    "pid": "16",
    "name": "无锡",
    "ad_name": "无锡市"
  }, {
    "id": "223",
    "pid": "16",
    "name": "常州",
    "ad_name": "常州市"
  }, {
    "id": "224",
    "pid": "16",
    "name": "淮安",
    "ad_name": "淮安市"
  }, {
    "id": "225",
    "pid": "16",
    "name": "连云港",
    "ad_name": "连云港市"
  }, {
    "id": "226",
    "pid": "16",
    "name": "南通",
    "ad_name": "南通市"
  }, {
    "id": "227",
    "pid": "16",
    "name": "宿迁",
    "ad_name": "宿迁市"
  }, {
    "id": "228",
    "pid": "16",
    "name": "泰州",
    "ad_name": "泰州市"
  }, {
    "id": "229",
    "pid": "16",
    "name": "徐州",
    "ad_name": "徐州市"
  }, {
    "id": "230",
    "pid": "16",
    "name": "盐城",
    "ad_name": "盐城市"
  }, {
    "id": "231",
    "pid": "16",
    "name": "扬州",
    "ad_name": "扬州市"
  }, {
    "id": "232",
    "pid": "16",
    "name": "镇江",
    "ad_name": "镇江市"
  }]
}, {
  "id": "17",
  "pid": "1",
  "name": "江西",
  "ad_name": "江西省",
  "has_children": 1,
  "children": [{
    "id": "17",
    "pid": "1",
    "name": "江西",
    "ad_name": "江西省"
  }, {
    "id": "233",
    "pid": "17",
    "name": "南昌",
    "ad_name": "南昌市"
  }, {
    "id": "234",
    "pid": "17",
    "name": "抚州",
    "ad_name": "抚州市"
  }, {
    "id": "235",
    "pid": "17",
    "name": "赣州",
    "ad_name": "赣州市"
  }, {
    "id": "236",
    "pid": "17",
    "name": "吉安",
    "ad_name": "吉安市"
  }, {
    "id": "237",
    "pid": "17",
    "name": "景德镇",
    "ad_name": "景德镇市"
  }, {
    "id": "238",
    "pid": "17",
    "name": "九江",
    "ad_name": "九江市"
  }, {
    "id": "239",
    "pid": "17",
    "name": "萍乡",
    "ad_name": "萍乡市"
  }, {
    "id": "240",
    "pid": "17",
    "name": "上饶",
    "ad_name": "上饶市"
  }, {
    "id": "241",
    "pid": "17",
    "name": "新余",
    "ad_name": "新余市"
  }, {
    "id": "242",
    "pid": "17",
    "name": "宜春",
    "ad_name": "宜春市"
  }, {
    "id": "243",
    "pid": "17",
    "name": "鹰潭",
    "ad_name": "鹰潭市"
  }]
}, {
  "id": "18",
  "pid": "1",
  "name": "辽宁",
  "ad_name": "辽宁省",
  "has_children": 1,
  "children": [{
    "id": "18",
    "pid": "1",
    "name": "辽宁",
    "ad_name": "辽宁省"
  }, {
    "id": "244",
    "pid": "18",
    "name": "沈阳",
    "ad_name": "沈阳市"
  }, {
    "id": "245",
    "pid": "18",
    "name": "大连",
    "ad_name": "大连市"
  }, {
    "id": "246",
    "pid": "18",
    "name": "鞍山",
    "ad_name": "鞍山市"
  }, {
    "id": "247",
    "pid": "18",
    "name": "本溪",
    "ad_name": "本溪市"
  }, {
    "id": "248",
    "pid": "18",
    "name": "朝阳",
    "ad_name": "朝阳市"
  }, {
    "id": "249",
    "pid": "18",
    "name": "丹东",
    "ad_name": "丹东市"
  }, {
    "id": "250",
    "pid": "18",
    "name": "抚顺",
    "ad_name": "抚顺市"
  }, {
    "id": "251",
    "pid": "18",
    "name": "阜新",
    "ad_name": "阜新市"
  }, {
    "id": "252",
    "pid": "18",
    "name": "葫芦岛",
    "ad_name": "葫芦岛市"
  }, {
    "id": "253",
    "pid": "18",
    "name": "锦州",
    "ad_name": "锦州市"
  }, {
    "id": "254",
    "pid": "18",
    "name": "辽阳",
    "ad_name": "辽阳市"
  }, {
    "id": "255",
    "pid": "18",
    "name": "盘锦",
    "ad_name": "盘锦市"
  }, {
    "id": "256",
    "pid": "18",
    "name": "铁岭",
    "ad_name": "铁岭市"
  }, {
    "id": "257",
    "pid": "18",
    "name": "营口",
    "ad_name": "营口市"
  }]
}, {
  "id": "19",
  "pid": "1",
  "name": "内蒙古",
  "ad_name": "内蒙古自治区",
  "has_children": 1,
  "children": [{
    "id": "19",
    "pid": "1",
    "name": "内蒙古",
    "ad_name": "内蒙古自治区"
  }, {
    "id": "258",
    "pid": "19",
    "name": "呼和浩特",
    "ad_name": "呼和浩特市"
  }, {
    "id": "259",
    "pid": "19",
    "name": "阿拉善盟",
    "ad_name": "阿拉善盟"
  }, {
    "id": "260",
    "pid": "19",
    "name": "巴彦淖尔盟",
    "ad_name": "巴彦淖尔市"
  }, {
    "id": "261",
    "pid": "19",
    "name": "包头",
    "ad_name": "包头市"
  }, {
    "id": "262",
    "pid": "19",
    "name": "赤峰",
    "ad_name": "赤峰市"
  }, {
    "id": "263",
    "pid": "19",
    "name": "鄂尔多斯",
    "ad_name": "鄂尔多斯市"
  }, {
    "id": "264",
    "pid": "19",
    "name": "呼伦贝尔",
    "ad_name": "呼伦贝尔市"
  }, {
    "id": "265",
    "pid": "19",
    "name": "通辽",
    "ad_name": "通辽市"
  }, {
    "id": "266",
    "pid": "19",
    "name": "乌海",
    "ad_name": "乌海市"
  }, {
    "id": "267",
    "pid": "19",
    "name": "乌兰察布市",
    "ad_name": "乌兰察布市"
  }, {
    "id": "268",
    "pid": "19",
    "name": "锡林郭勒盟",
    "ad_name": "锡林郭勒盟"
  }, {
    "id": "269",
    "pid": "19",
    "name": "兴安盟",
    "ad_name": "兴安盟"
  }]
}, {
  "id": "20",
  "pid": "1",
  "name": "宁夏",
  "ad_name": "宁夏回族自治区",
  "has_children": 1,
  "children": [{
    "id": "20",
    "pid": "1",
    "name": "宁夏",
    "ad_name": "宁夏回族自治区"
  }, {
    "id": "270",
    "pid": "20",
    "name": "银川",
    "ad_name": "银川市"
  }, {
    "id": "271",
    "pid": "20",
    "name": "固原",
    "ad_name": "固原市"
  }, {
    "id": "272",
    "pid": "20",
    "name": "石嘴山",
    "ad_name": "石嘴山市"
  }, {
    "id": "273",
    "pid": "20",
    "name": "吴忠",
    "ad_name": "吴忠市"
  }, {
    "id": "274",
    "pid": "20",
    "name": "中卫",
    "ad_name": "中卫市"
  }]
}, {
  "id": "21",
  "pid": "1",
  "name": "青海",
  "ad_name": "青海省",
  "has_children": 1,
  "children": [{
    "id": "21",
    "pid": "1",
    "name": "青海",
    "ad_name": "青海省"
  }, {
    "id": "275",
    "pid": "21",
    "name": "西宁",
    "ad_name": "西宁市"
  }, {
    "id": "276",
    "pid": "21",
    "name": "果洛",
    "ad_name": "果洛藏族自治州"
  }, {
    "id": "277",
    "pid": "21",
    "name": "海北",
    "ad_name": "海北藏族自治州"
  }, {
    "id": "278",
    "pid": "21",
    "name": "海东",
    "ad_name": "海东市"
  }, {
    "id": "279",
    "pid": "21",
    "name": "海南",
    "ad_name": "海南藏族自治州"
  }, {
    "id": "280",
    "pid": "21",
    "name": "海西",
    "ad_name": "海西蒙古族藏族自治州"
  }, {
    "id": "281",
    "pid": "21",
    "name": "黄南",
    "ad_name": "黄南藏族自治州"
  }, {
    "id": "282",
    "pid": "21",
    "name": "玉树",
    "ad_name": "玉树"
  }]
}, {
  "id": "22",
  "pid": "1",
  "name": "山东",
  "ad_name": "山东省",
  "has_children": 1,
  "children": [{
    "id": "22",
    "pid": "1",
    "name": "山东",
    "ad_name": "山东省"
  }, {
    "id": "283",
    "pid": "22",
    "name": "济南",
    "ad_name": "济南市"
  }, {
    "id": "284",
    "pid": "22",
    "name": "青岛",
    "ad_name": "青岛市"
  }, {
    "id": "285",
    "pid": "22",
    "name": "滨州",
    "ad_name": "滨州市"
  }, {
    "id": "286",
    "pid": "22",
    "name": "德州",
    "ad_name": "德州市"
  }, {
    "id": "287",
    "pid": "22",
    "name": "东营",
    "ad_name": "东营市"
  }, {
    "id": "288",
    "pid": "22",
    "name": "菏泽",
    "ad_name": "菏泽市"
  }, {
    "id": "289",
    "pid": "22",
    "name": "济宁",
    "ad_name": "济宁市"
  }, {
    "id": "291",
    "pid": "22",
    "name": "聊城",
    "ad_name": "聊城市"
  }, {
    "id": "292",
    "pid": "22",
    "name": "临沂",
    "ad_name": "临沂市"
  }, {
    "id": "293",
    "pid": "22",
    "name": "日照",
    "ad_name": "日照市"
  }, {
    "id": "294",
    "pid": "22",
    "name": "泰安",
    "ad_name": "泰安市"
  }, {
    "id": "295",
    "pid": "22",
    "name": "威海",
    "ad_name": "威海市"
  }, {
    "id": "296",
    "pid": "22",
    "name": "潍坊",
    "ad_name": "潍坊市"
  }, {
    "id": "297",
    "pid": "22",
    "name": "烟台",
    "ad_name": "烟台市"
  }, {
    "id": "298",
    "pid": "22",
    "name": "枣庄",
    "ad_name": "枣庄市"
  }, {
    "id": "299",
    "pid": "22",
    "name": "淄博",
    "ad_name": "淄博市"
  }]
}, {
  "id": "23",
  "pid": "1",
  "name": "山西",
  "ad_name": "山西省",
  "has_children": 1,
  "children": [{
    "id": "23",
    "pid": "1",
    "name": "山西",
    "ad_name": "山西省"
  }, {
    "id": "300",
    "pid": "23",
    "name": "太原",
    "ad_name": "太原市"
  }, {
    "id": "301",
    "pid": "23",
    "name": "长治",
    "ad_name": "长治市"
  }, {
    "id": "302",
    "pid": "23",
    "name": "大同",
    "ad_name": "大同市"
  }, {
    "id": "303",
    "pid": "23",
    "name": "晋城",
    "ad_name": "晋城市"
  }, {
    "id": "304",
    "pid": "23",
    "name": "晋中",
    "ad_name": "晋中市"
  }, {
    "id": "305",
    "pid": "23",
    "name": "临汾",
    "ad_name": "临汾市"
  }, {
    "id": "306",
    "pid": "23",
    "name": "吕梁",
    "ad_name": "吕梁市"
  }, {
    "id": "307",
    "pid": "23",
    "name": "朔州",
    "ad_name": "朔州市"
  }, {
    "id": "308",
    "pid": "23",
    "name": "忻州",
    "ad_name": "忻州市"
  }, {
    "id": "309",
    "pid": "23",
    "name": "阳泉",
    "ad_name": "阳泉市"
  }, {
    "id": "310",
    "pid": "23",
    "name": "运城",
    "ad_name": "运城市"
  }]
}, {
  "id": "24",
  "pid": "1",
  "name": "陕西",
  "ad_name": "陕西省",
  "has_children": 1,
  "children": [{
    "id": "24",
    "pid": "1",
    "name": "陕西",
    "ad_name": "陕西省"
  }, {
    "id": "311",
    "pid": "24",
    "name": "西安",
    "ad_name": "西安市"
  }, {
    "id": "312",
    "pid": "24",
    "name": "安康",
    "ad_name": "安康市"
  }, {
    "id": "313",
    "pid": "24",
    "name": "宝鸡",
    "ad_name": "宝鸡市"
  }, {
    "id": "314",
    "pid": "24",
    "name": "汉中",
    "ad_name": "汉中市"
  }, {
    "id": "315",
    "pid": "24",
    "name": "商洛",
    "ad_name": "商洛市"
  }, {
    "id": "316",
    "pid": "24",
    "name": "铜川",
    "ad_name": "铜川市"
  }, {
    "id": "317",
    "pid": "24",
    "name": "渭南",
    "ad_name": "渭南市"
  }, {
    "id": "318",
    "pid": "24",
    "name": "咸阳",
    "ad_name": "咸阳市"
  }, {
    "id": "319",
    "pid": "24",
    "name": "延安",
    "ad_name": "延安市"
  }, {
    "id": "320",
    "pid": "24",
    "name": "榆林",
    "ad_name": "榆林市"
  }]
}, {
  "id": "25",
  "pid": "1",
  "name": "上海",
  "ad_name": "上海市",
  "has_children": 0,
  "children": []
}, {
  "id": "26",
  "pid": "1",
  "name": "四川",
  "ad_name": "四川省",
  "has_children": 1,
  "children": [{
    "id": "26",
    "pid": "1",
    "name": "四川",
    "ad_name": "四川省"
  }, {
    "id": "322",
    "pid": "26",
    "name": "成都",
    "ad_name": "成都市"
  }, {
    "id": "323",
    "pid": "26",
    "name": "绵阳",
    "ad_name": "绵阳市"
  }, {
    "id": "324",
    "pid": "26",
    "name": "阿坝",
    "ad_name": "阿坝藏族羌族自治州"
  }, {
    "id": "325",
    "pid": "26",
    "name": "巴中",
    "ad_name": "巴中市"
  }, {
    "id": "326",
    "pid": "26",
    "name": "达州",
    "ad_name": "达州市"
  }, {
    "id": "327",
    "pid": "26",
    "name": "德阳",
    "ad_name": "德阳市"
  }, {
    "id": "328",
    "pid": "26",
    "name": "甘孜",
    "ad_name": "甘孜藏族自治州"
  }, {
    "id": "329",
    "pid": "26",
    "name": "广安",
    "ad_name": "广安市"
  }, {
    "id": "330",
    "pid": "26",
    "name": "广元",
    "ad_name": "广元市"
  }, {
    "id": "331",
    "pid": "26",
    "name": "乐山",
    "ad_name": "乐山市"
  }, {
    "id": "332",
    "pid": "26",
    "name": "凉山",
    "ad_name": "凉山彝族自治州"
  }, {
    "id": "333",
    "pid": "26",
    "name": "眉山",
    "ad_name": "眉山市"
  }, {
    "id": "334",
    "pid": "26",
    "name": "南充",
    "ad_name": "南充市"
  }, {
    "id": "335",
    "pid": "26",
    "name": "内江",
    "ad_name": "内江市"
  }, {
    "id": "336",
    "pid": "26",
    "name": "攀枝花",
    "ad_name": "攀枝花市"
  }, {
    "id": "337",
    "pid": "26",
    "name": "遂宁",
    "ad_name": "遂宁市"
  }, {
    "id": "338",
    "pid": "26",
    "name": "雅安",
    "ad_name": "雅安市"
  }, {
    "id": "339",
    "pid": "26",
    "name": "宜宾",
    "ad_name": "宜宾市"
  }, {
    "id": "340",
    "pid": "26",
    "name": "资阳",
    "ad_name": "资阳市"
  }, {
    "id": "341",
    "pid": "26",
    "name": "自贡",
    "ad_name": "自贡市"
  }, {
    "id": "342",
    "pid": "26",
    "name": "泸州",
    "ad_name": "泸州市"
  }]
}, {
  "id": "27",
  "pid": "1",
  "name": "天津",
  "ad_name": "天津市",
  "has_children": 0,
  "children": []
}, {
  "id": "28",
  "pid": "1",
  "name": "西藏",
  "ad_name": "西藏自治区",
  "has_children": 1,
  "children": [{
    "id": "28",
    "pid": "1",
    "name": "西藏",
    "ad_name": "西藏自治区"
  }, {
    "id": "344",
    "pid": "28",
    "name": "拉萨",
    "ad_name": "拉萨市"
  }, {
    "id": "345",
    "pid": "28",
    "name": "阿里",
    "ad_name": "阿里地区"
  }, {
    "id": "346",
    "pid": "28",
    "name": "昌都",
    "ad_name": "昌都市"
  }, {
    "id": "347",
    "pid": "28",
    "name": "林芝",
    "ad_name": "林芝市"
  }, {
    "id": "348",
    "pid": "28",
    "name": "那曲",
    "ad_name": "那曲市"
  }, {
    "id": "349",
    "pid": "28",
    "name": "日喀则",
    "ad_name": "日喀则市"
  }, {
    "id": "350",
    "pid": "28",
    "name": "山南",
    "ad_name": "山南市"
  }]
}, {
  "id": "29",
  "pid": "1",
  "name": "新疆",
  "ad_name": "新疆维吾尔自治区",
  "has_children": 1,
  "children": [{
    "id": "29",
    "pid": "1",
    "name": "新疆",
    "ad_name": "新疆维吾尔自治区"
  }, {
    "id": "351",
    "pid": "29",
    "name": "乌鲁木齐",
    "ad_name": "乌鲁木齐市"
  }, {
    "id": "352",
    "pid": "29",
    "name": "阿克苏",
    "ad_name": "阿克苏地区"
  }, {
    "id": "353",
    "pid": "29",
    "name": "阿拉尔",
    "ad_name": "阿拉尔市"
  }, {
    "id": "354",
    "pid": "29",
    "name": "巴音郭楞",
    "ad_name": "巴音郭楞蒙古自治州"
  }, {
    "id": "355",
    "pid": "29",
    "name": "博尔塔拉",
    "ad_name": "博尔塔拉蒙古自治州"
  }, {
    "id": "356",
    "pid": "29",
    "name": "昌吉",
    "ad_name": "昌吉回族自治州"
  }, {
    "id": "357",
    "pid": "29",
    "name": "哈密",
    "ad_name": "哈密市"
  }, {
    "id": "358",
    "pid": "29",
    "name": "和田",
    "ad_name": "和田地区"
  }, {
    "id": "359",
    "pid": "29",
    "name": "喀什",
    "ad_name": "喀什地区"
  }, {
    "id": "360",
    "pid": "29",
    "name": "克拉玛依",
    "ad_name": "克拉玛依市"
  }, {
    "id": "361",
    "pid": "29",
    "name": "克孜勒苏",
    "ad_name": "克孜勒苏柯尔克孜自治州"
  }, {
    "id": "362",
    "pid": "29",
    "name": "石河子",
    "ad_name": "石河子市"
  }, {
    "id": "363",
    "pid": "29",
    "name": "图木舒克",
    "ad_name": "图木舒克市"
  }, {
    "id": "364",
    "pid": "29",
    "name": "吐鲁番",
    "ad_name": "吐鲁番市"
  }, {
    "id": "365",
    "pid": "29",
    "name": "五家渠",
    "ad_name": "五家渠市"
  }, {
    "id": "366",
    "pid": "29",
    "name": "伊犁",
    "ad_name": "伊犁哈萨克自治州"
  }, {
    "id": "6156",
    "pid": "29",
    "name": "塔城地区",
    "ad_name": "塔城地区"
  }, {
    "id": "6157",
    "pid": "29",
    "name": "阿勒泰地区",
    "ad_name": "阿勒泰地区"
  }]
}, {
  "id": "30",
  "pid": "1",
  "name": "云南",
  "ad_name": "云南省",
  "has_children": 1,
  "children": [{
    "id": "30",
    "pid": "1",
    "name": "云南",
    "ad_name": "云南省"
  }, {
    "id": "367",
    "pid": "30",
    "name": "昆明",
    "ad_name": "昆明市"
  }, {
    "id": "368",
    "pid": "30",
    "name": "怒江",
    "ad_name": "怒江"
  }, {
    "id": "369",
    "pid": "30",
    "name": "普洱",
    "ad_name": "普洱市"
  }, {
    "id": "370",
    "pid": "30",
    "name": "丽江",
    "ad_name": "丽江市"
  }, {
    "id": "371",
    "pid": "30",
    "name": "保山",
    "ad_name": "保山市"
  }, {
    "id": "372",
    "pid": "30",
    "name": "楚雄",
    "ad_name": "楚雄彝族自治州"
  }, {
    "id": "373",
    "pid": "30",
    "name": "大理",
    "ad_name": "大理白族自治州"
  }, {
    "id": "374",
    "pid": "30",
    "name": "德宏",
    "ad_name": "德宏傣族景颇族自治州"
  }, {
    "id": "375",
    "pid": "30",
    "name": "迪庆",
    "ad_name": "迪庆藏族自治州"
  }, {
    "id": "376",
    "pid": "30",
    "name": "红河",
    "ad_name": "红河哈尼族彝族自治州"
  }, {
    "id": "377",
    "pid": "30",
    "name": "临沧",
    "ad_name": "临沧市"
  }, {
    "id": "378",
    "pid": "30",
    "name": "曲靖",
    "ad_name": "曲靖市"
  }, {
    "id": "379",
    "pid": "30",
    "name": "文山",
    "ad_name": "文山壮族苗族自治州"
  }, {
    "id": "380",
    "pid": "30",
    "name": "西双版纳",
    "ad_name": "西双版纳傣族自治州"
  }, {
    "id": "381",
    "pid": "30",
    "name": "玉溪",
    "ad_name": "玉溪市"
  }, {
    "id": "382",
    "pid": "30",
    "name": "昭通",
    "ad_name": "昭通市"
  }]
}, {
  "id": "31",
  "pid": "1",
  "name": "浙江",
  "ad_name": "浙江省",
  "has_children": 1,
  "children": [{
    "id": "31",
    "pid": "1",
    "name": "浙江",
    "ad_name": "浙江省"
  }, {
    "id": "383",
    "pid": "31",
    "name": "杭州",
    "ad_name": "杭州市"
  }, {
    "id": "384",
    "pid": "31",
    "name": "湖州",
    "ad_name": "湖州市"
  }, {
    "id": "385",
    "pid": "31",
    "name": "嘉兴",
    "ad_name": "嘉兴市"
  }, {
    "id": "386",
    "pid": "31",
    "name": "金华",
    "ad_name": "金华市"
  }, {
    "id": "387",
    "pid": "31",
    "name": "丽水",
    "ad_name": "丽水市"
  }, {
    "id": "388",
    "pid": "31",
    "name": "宁波",
    "ad_name": "宁波市"
  }, {
    "id": "389",
    "pid": "31",
    "name": "绍兴",
    "ad_name": "绍兴市"
  }, {
    "id": "390",
    "pid": "31",
    "name": "台州",
    "ad_name": "台州市"
  }, {
    "id": "391",
    "pid": "31",
    "name": "温州",
    "ad_name": "温州市"
  }, {
    "id": "392",
    "pid": "31",
    "name": "舟山",
    "ad_name": "舟山市"
  }, {
    "id": "393",
    "pid": "31",
    "name": "衢州",
    "ad_name": "衢州市"
  }]
}, {
  "id": "32",
  "pid": "1",
  "name": "重庆",
  "ad_name": "重庆市",
  "has_children": 0,
  "children": []
}];
// * 默认全国数据
var AREACHINA = exports.AREACHINA = AREAS[0];
// * 默认北京数据
var AREABEIJING = exports.AREABEIJING = AREAS[1];
// * 定位返回省份信息 0返回省份 1返回城市 
function getCityInfo(data) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var len = AREAS.length;
  var flag = false;
  if (!current) {
    var items = AREAS.filter(function (item) {
      return data.province.indexOf(item.name) !== -1;
    });
    if (items.length) {
      return items[0];
    } else {
      //根据城市名称查找
      for (var i = 0; i < len; i++) {
        var item = AREAS[i];
        if (item.has_children) {
          var itemArea = item.children;
          var dlen = itemArea.length;
          for (var k = 0; k < dlen; k++) {
            var d = itemArea[k];
            if (data.city.indexOf(d.name) !== -1) {
              var province = {
                id: item.id,
                pid: item.pid,
                ad_name: item.ad_name,
                name: item.name
              };
              flag = true;
              return province;
              break;
            }
          }
          if (flag) break;
        }
      }
    }
  } else {
    var _items = AREAS.filter(function (item) {
      return data.city.indexOf(item.name) !== -1;
    });
    if (_items.length) return _items[0];
    for (var _i = 0; _i < len; _i++) {
      var _item = AREAS[_i];
      if (_item.has_children) {
        var _itemArea = _item.children;
        var _dlen = _itemArea.length;
        for (var _k = 0; _k < _dlen; _k++) {
          var _d = _itemArea[_k];
          if (data.city.indexOf(_d.name) !== -1) {
            flag = true;
            return _d;
            break;
          }
        }
        if (flag) break;
      }
    }
  }
  // 查询不到内容 直接返回全国/北京
  return current ? AREABEIJING : AREACHINA;
}
// 根据城市名字返回数据内名字
function getLongAreaAdname(title) {
  var area = '北京市';
  if (!title) return area;
  var flag = false;
  for (var i = 1, len = AREAS.length - 1; i < len; i++) {
    if (flag) break;
    if (title.indexOf(AREAS[i].name) !== -1) {
      return AREAS[i].ad_name;
      break;
    }
    if (AREAS[i].has_children) {
      var ChildItems = AREAS[i].children;
      for (var j = 0, clen = 0; j < clen; j++) {
        if (title.indexOf(ChildItems[j].name) !== -1) {
          flag = true;
          return ChildItems[j].ad_name;
          break;
        }
      }
    }
  }
  return area;
}
// 根据城市id返回城市信息
function getCityInfoById(id) {
  var pCurrent = 0;
  var cCurrent = 0; //默认返回该下标的数据
  var flag = false; // 是否已经找到了数据
  var index = AREAS.findIndex(function (item) {
    return item.id == id;
  });
  if (index > -1) {
    return AREAS[index];
  }
  for (var i = 0; i < AREAS.length; i++) {
    if (AREAS[i].has_children) {
      var items = AREAS[i].children;
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        if (item.id == id) {
          pCurrent = i;
          cCurrent = j;
          flag = true;
          break;
        }
      }
    }
    if (flag) break;
  }
  if (flag) return AREAS[pCurrent].children[cCurrent];
  return AREAS[pCurrent];
}
exports.default = AREAS;

/***/ }),

/***/ "./src/pages/integral/index.scss":
/*!***************************************!*\
  !*** ./src/pages/integral/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/publish/data.ts":
/*!******************************************!*\
  !*** ./src/pages/resume/publish/data.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-03 18:49:37
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-10 09:34:01
 * @Description:
 */
// 基础信息默认参数
var INFODATA_DATA = exports.INFODATA_DATA = {
  ad_code: 0,
  address: '',
  admin_last_edit_time: '',
  admin_user_id: '',
  authentication: '',
  birthday: '',
  certificate_show: 0,
  check: '',
  city: '',
  collect_num: '',
  complain_num: '',
  country: '',
  current_admin: '',
  distance: '',
  experience: '',
  extens: '',
  gender: '',
  headerimg: '',
  hometown: '',
  id: '',
  img: '',
  introduce: '',
  ip_address: '',
  is_end: '',
  is_introduces: '',
  location: '',
  miniInfoOccupations: [],
  nation: '',
  nation_id: '',
  note: '',
  number_people: '',
  occupations: [],
  occupations_id: '',
  prof_degree: '',
  progress: '0',
  province: '',
  provinces: '',
  ranking: '',
  refresh_time: '',
  sort_flag: '',
  source: '',
  tags: [],
  tel: '',
  time: '',
  type: '',
  update_time: '',
  user_id: '',
  user_uuid: '',
  username: '',
  uuid: '',
  view_num: '',
  zan_num: '',
  age: '',
  title: '',
  code: ''
};
// 人员信息
var INTRODUCERS_DATA = exports.INTRODUCERS_DATA = {
  check: '',
  experience: '',
  experience_str: '',
  hometown: '',
  hometown_id: '',
  number_people: '',
  prof_degree: '',
  prof_degree_str: '',
  tag_id: '',
  tags: [],
  type: '',
  type_str: ''
};
// 置顶
var RESUME_TOP_DATA = exports.RESUME_TOP_DATA = {
  has_top: 0,
  is_top: 0,
  is_top_text: '',
  is_top_to_text: '',
  top_tips_string: ''
};

/***/ }),

/***/ "./src/pages/topping/index.scss":
/*!**************************************!*\
  !*** ./src/pages/topping/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/topping/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/topping/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextItem = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/topping/index.scss");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextItem = exports.contextItem = (0, _taroTt.createContext)({});

var Topping = function (_Taro$Component) {
  _inherits(Topping, _Taro$Component);

  function Topping() {
    _classCallCheck(this, Topping);

    var _this = _possibleConstructorReturn(this, (Topping.__proto__ || Object.getPrototypeOf(Topping)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '招工置顶'
    };

    _this.$usedState = ["params", "data", "loopArray74", "loopArray75", "loopArray76", "loopArray77", "loopArray78", "province", "IMGCDNURL", "rec", "basics", "type", "list", "displayTime", "num", "endTime", "editData", "newTime", "day", "SERVERPHONE"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.anonymousFunc3Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Topping, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Topping.prototype.__proto__ || Object.getPrototypeOf(Topping.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var router = (0, _taroTt.useRouter)();
      var _router$params = router.params,
          id = _router$params.id,
          type = _router$params.type,
          rec = _router$params.rec,
          areaData = _router$params.areaData,
          endTimes = _router$params.endTimes,
          endTimeStr = _router$params.endTimeStr;
      // 获取userInfo

      var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);

      var _useState = (0, _taroTt.useState)({
        top_rules: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 积分


      var _useState3 = (0, _taroTt.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          num = _useState4[0],
          setNum = _useState4[1];
      // 天


      var _useState5 = (0, _taroTt.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          paramsDay = _useState6[0],
          setParamsDay = _useState6[1];
      //置顶天数


      var _useState7 = (0, _taroTt.useState)('请选择置顶天数'),
          _useState8 = _slicedToArray(_useState7, 2),
          day = _useState8[0],
          setDay = _useState8[1];
      // 修改置顶天数


      var _useState9 = (0, _taroTt.useState)('延长'),
          _useState10 = _slicedToArray(_useState9, 2),
          editData = _useState10[0],
          seteditDay = _useState10[1];
      // 下拉框总参数


      var _useState11 = (0, _taroTt.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          list = _useState12[0],
          setList = _useState12[1];
      // 最大省市


      var _useState13 = (0, _taroTt.useState)({
        max_city: 0,
        max_province: 0
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          city = _useState14[0],
          setCity = _useState14[1];

      var _useState15 = (0, _taroTt.useState)({
        city: [],
        province: [],
        whole: []
      }),
          _useState16 = _slicedToArray(_useState15, 2),
          params = _useState16[0],
          setParams = _useState16[1];

      var _useState17 = (0, _taroTt.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          province = _useState18[0],
          setProvince = _useState18[1];
      // 到期时间


      var _useState19 = (0, _taroTt.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          endTime = _useState20[0],
          setEndTime = _useState20[1];
      // 到期时间时间戳


      var _useState21 = (0, _taroTt.useState)(0),
          _useState22 = _slicedToArray(_useState21, 2),
          end = _useState22[0],
          setEnd = _useState22[1];
      // 显示最新到期时间


      var _useState23 = (0, _taroTt.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          displayTime = _useState24[0],
          setdisplayTime = _useState24[1];
      // 最新时间


      var _useState25 = (0, _taroTt.useState)(''),
          _useState26 = _slicedToArray(_useState25, 2),
          newTime = _useState26[0],
          setNewTime = _useState26[1];
      // 修改时最大积分


      var _useState27 = (0, _taroTt.useState)(0),
          _useState28 = _slicedToArray(_useState27, 2),
          maxNum = _useState28[0],
          setMaxNum = _useState28[1];
      // 找活省份最大的长度


      var _useState29 = (0, _taroTt.useState)(0),
          _useState30 = _slicedToArray(_useState29, 2),
          provinceNum = _useState30[0],
          setProvinceNum = _useState30[1];
      // 找活天数


      var _useState31 = (0, _taroTt.useState)('1'),
          _useState32 = _slicedToArray(_useState31, 2),
          recDay = _useState32[0],
          setRecDay = _useState32[1];

      var _useState33 = (0, _taroTt.useState)({
        max_number: 0,
        province_integral: 0,
        max_top_days: 0,
        max_city: 0,
        max_province: 0
      }),
          _useState34 = _slicedToArray(_useState33, 2),
          basics = _useState34[0],
          setBasics = _useState34[1];
      // 修改超过最大就显示消耗积分


      (0, _taroTt.useEffect)(function () {
        if (type) {
          if (!rec) {
            var val = {
              job_id: id,
              time: userInfo.tokenTime
            };
            (0, _index.jobGetTopAreasAction)(val).then(function (res) {
              if (res.errcode === 'ok') {
                setParams({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country });
                setEndTime(res.data.end_time_string);
                setEnd(res.data.end_time);
                setMaxNum(res.data.max_price);
              } else {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false
                });
              }
            });
          }
        }
        // 找活
        if (rec) {
          _taroTt2.default.setNavigationBarTitle({
            title: '找活置顶'
          });
          var _params = {
            interface_version: 'v2'
          };
          (0, _index.resumesTopConfigV2Action)(_params).then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              var array = [];
              for (var i = 0; i < res.data.max_top_days; i++) {
                array.push(i + 1 + "天");
              }
              if (type) {
                if (areaData) {
                  var areList = JSON.parse(areaData);
                  var _city = [];
                  var _province = [];
                  var whole = [];
                  var _recDay = Math.ceil((parseInt(endTimes) - new Date().getTime() / 1000) / 86400);
                  var maxPrice = 0;
                  areList.map(function (v) {
                    if (v.pid === '1') {
                      _city.push(v);
                    } else if (v.pid === '0') {
                      whole.push(v);
                    } else {
                      _province.push(v);
                    }
                  });
                  {
                    maxPrice = (_city.length * 20 + _province.length * 20) * _recDay;
                  }
                  setParams({ city: _city, province: _province, whole: whole });
                  setEndTime(endTimeStr);
                  setEnd(parseInt(endTimes));
                  setMaxNum(maxPrice);
                }
              }
              setList(array);
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              setBasics({ province_integral: res.data.province_integral, max_number: res.data.max_number, max_top_days: res.data.max_top_days,
                max_province: res.data.max_province, max_city: res.data.max_city
              });
            } else {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        } else {
          (0, _index.jobTopConfigAction)().then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              var array = [];
              for (var i = 0; i < res.data.max_top_days; i++) {
                array.push(i + 1 + "天");
              }
              setList(array);
            } else {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        }
      }, []);
      var getMyDate = function getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' + addZero(oMin);
        return oTime;
      };
      var addZero = function addZero(num) {
        if (parseInt(num) < 10) {
          num = '0' + num;
        }
        return num;
      };
      var handleClick = function handleClick(e) {
        setDay(list[e.detail.value]);
        if (type) {
          // 增加时间 新增天数*新的单价
          // 修改地区 单价比原单价大，差价*天数，
          // 时间和城市都改变了 新单价大于原单价 ：新价-旧价*剩余天数+新价格*新增天数 新单价小于原单价：旧价格*新增天数
          seteditDay('修改');
          setdisplayTime(true);
          // 时间
          var all = 86400000 * (parseInt(e.detail.value) + 1) + ((end - 0) * 1000 - 0);
          var _newTime = getMyDate(all);
          setNewTime(_newTime);
          // 获取旧价格
          var oldPrice = maxNum;
          // 获取价格
          var newPrice = undefined;
          if (rec) {
            newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
          } else {
            newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
          }
          // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
          // 时间差
          var remDay = (end - new Date().getTime() / 1000) / 86400;
          // 修改区域
          // 只改变时间
          var money = undefined;
          if (oldPrice === newPrice) {
            money = newPrice * (parseInt(e.detail.value) + 1);
          } else {
            if (newPrice - oldPrice > 0) {
              if (rec) {
                money = Math.round((newPrice - oldPrice) * remDay + (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1));
              } else {
                money = Math.round((newPrice - oldPrice) * remDay + newPrice * (parseInt(e.detail.value) + 1));
              }
            } else {
              money = oldPrice * (parseInt(e.detail.value) + 1);
            }
          }
          setNum(money);
        } else {
          if (params) {
            var numData = 0;
            if (params.whole.length) {
              numData = 500 * (parseInt(e.detail.value) + 1);
            } else {
              if (rec) {
                numData = (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              } else {
                numData = (params.city.length * 10 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              }
            }
            setNum(numData);
          }
        }
        setParamsDay(parseInt(e.detail.value) + 1);
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      // 置顶
      var handleTopping = function handleTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        var detail = {
          is_country: country_ids.toString(),
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          day: paramsDay,
          job_id: id,
          time: userInfo.tokenTime
        };
        var editDetail = {
          is_country: params.whole.length ? 1 : 0,
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          update_days: paramsDay,
          job_id: id,
          time: userInfo.tokenTime,
          update_integral: num
        };
        // return
        if (type) {
          if (rec) {
            (0, _index.resumesUpdateTopResumeAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroTt2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroTt2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroTt2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroTt2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroTt2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroTt2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          } else {
            (0, _index.jobChangeTopAreasAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroTt2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroTt2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroTt2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroTt2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroTt2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroTt2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          }
        } else {
          if (!province_ids || !city_ids) {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶城市',
              showCancel: false
            });
            return;
          }
          if (paramsDay === 0) {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶天数',
              showCancel: false
            });
            return;
          }
          if (rec) {
            (0, _index.resumesDoTopV2Action)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroTt2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          } else {
            (0, _index.jobDoTopAction)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroTt2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          }
        }
      };
      var handleAddJump = function handleAddJump() {
        userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
      };
      // 传递方法
      var transferFun = function transferFun(_ref) {
        var city = _ref.city,
            province = _ref.province,
            whole = _ref.whole;

        setParams({ city: city, province: province, whole: whole });
        calcPrice(city, province, whole);
      };
      var calcPrice = function calcPrice(city, province, whole) {
        // if (whole.length){
        //   if(type){
        //   }else{
        //     const numData = 500 * (paramsDay)
        //     setNum(numData);
        //   }
        // }else{
        if (city || province || whole) {
          if (type) {
            // 获取旧价格
            var oldPrice = maxNum;
            // 获取价格
            // 时间差
            var remDay = (end - new Date().getTime() / 1000) / 86400;
            var newPrice = undefined;
            if (rec) {
              newPrice = whole.length ? 500 : (city.length * 20 + province.length * 20) * 1;
            } else {
              newPrice = whole.length ? 500 : (city.length * 10 + province.length * 20) * 1;
            }
            // 修改区域
            var changeCity = true; //修改区域
            // 只改变时间
            var money = undefined;
            if (paramsDay !== 0 && oldPrice === newPrice) {
              money = newPrice * paramsDay;
            } else if (paramsDay === 0 && oldPrice > newPrice) {
              money = (newPrice - oldPrice) * paramsDay;
            } else if (paramsDay === 0 && changeCity) {
              // 剩余天数
              if (newPrice > oldPrice) {
                if (rec) {
                  // 新的大于旧的金额
                  // 新的减去旧的再*天数
                  // money = Math.round((newPrice - oldPrice));
                  // money = newPrice - oldPrice - moneys;
                  money = Math.round((newPrice - oldPrice) * remDay);
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay);
                }
              }
            } else {
              // 时间变了，城市变了
              if (newPrice - oldPrice > 0) {
                if (rec) {
                  money = Math.round(newPrice - oldPrice + (city.length * 20 + province.length * 20) * paramsDay);
                  // money = Math.round(newPrice - oldPrice + oldPrice * paramsDay + newPrice * paramsDay)
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
                }
              } else {
                money = oldPrice * paramsDay;
              }
            }
            var _num = 0;
            if (money <= 0) {
              _num = 0;
            } else {
              _num = _num;
            }
            setNum(money);
          } else {
            var numData = 0;
            if (whole.length) {
              numData = 500 * paramsDay;
            } else {
              if (rec) {
                numData = (city.length * 20 + province.length * 20) * paramsDay;
              } else {
                numData = (city.length * 10 + province.length * 20) * paramsDay;
              }
            }
            setNum(numData);
          }
        }
      };
      // 需要传递的值
      var value = {
        AreParams: params,
        setAreParams: function setAreParams(city, province, whole) {
          return transferFun({ city: city, province: province, whole: whole });
        }
      };
      var modifyFun = function modifyFun(province) {
        setProvince(province);
        // 设置积分
        recIntegral(province);
      };
      var recIntegral = function recIntegral(province) {
        var num = 0;
        if (province.length) {
          num = basics.province_integral * province.length * parseInt(recDay);
        } else {
          num = 0;
        }
        setNum(num);
      };
      // 删除
      var handleDel = function handleDel(v) {
        if (rec) {
          if (v.pid === '1') {
            params.city.map(function (val, i) {
              if (val.id === v.id) {
                params.city.splice(i, 1);
              }
            });
            setParams({ city: params.city, province: params.province, whole: params.whole });
          }
        }
        if (v.pid === '1') {
          params.province.map(function (val, i) {
            if (val.id === v.id) {
              params.province.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
        } else if (v.pid === '0') {
          params.whole.map(function (val, i) {
            if (val.id === v.id) {
              params.whole.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
        } else {
          params.city.map(function (val, i) {
            if (val.id === v.id) {
              params.city.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
        }
        // 积分 
        // 省市大于原来的省市就改变，不然就是直接最大积分
        // 获取旧价格
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = void 0;
        if (rec) {
          newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
        } else {
          newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
        }
        // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        var changeCity = true; //修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (paramsDay !== 0 && oldPrice === newPrice) {
          money = newPrice * paramsDay;
          // setShowNum(true);
        } else if (paramsDay === 0 && oldPrice > newPrice) {
          // var remDay =  (到期时间 - 现在时间)/ 86400
          // var remDay =  (old_end_time - now_time)/ 86400
          money = (newPrice - oldPrice) * paramsDay;
        } else if (paramsDay === 0 && changeCity) {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          }
        } else {
          // 时间变了，城市变了
          if (newPrice - oldPrice > 0) {
            money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
          } else {
            money = oldPrice * paramsDay;
          }
        }
        var num = 0;
        if (money <= 0) {
          num = 0;
        } else {
          num = money;
        }
        setNum(num);
      };
      // 取消
      var handleCancel = function handleCancel() {
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (oldPrice > newPrice) {
          var _num2 = (newPrice - oldPrice) * 1;
          if (_num2 > 0) {
            money = _num2;
          } else {
            money = 0;
          }
        } else if (oldPrice == newPrice) {
          money = 0;
          // 价格没变
        } else {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          } else {
            money = oldPrice;
          }
        }
        setNum(money);
        setdisplayTime(false);
        setParamsDay(0);
      };
      var handleJump = function handleJump() {
        if (!rec) {
          userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
        } else {
          userRouteJump("/pages/topping/distruction/index?max_city=" + basics.max_city + "&max_province=" + basics.max_province);
        }
      };
      var handleRecDay = function handleRecDay(e) {
        var reg = /^\d{0,2}$/;
        if (!reg.test(e.detail.value)) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '只能输入整数，请重新输入',
            showCancel: false,
            success: function success() {
              setRecDay('');
            }
          });
          return;
        }
        var num = 0;
        if (e.detail.value) {
          num = basics.province_integral * province.length * parseInt(e.detail.value);
        } else {
          num = 0;
        }
        setRecDay(e.detail.value);
        setNum(num);
      };
      var handleRecDel = function handleRecDel(v) {
        var list = JSON.parse(JSON.stringify(province));
        list.map(function (val, i) {
          if (val.id === v.id) {
            list.splice(i, 1);
          }
          return val;
        });
        var num = 0;
        num = list.length * basics.province_integral * parseInt(recDay);
        setProvince(list);
        setNum(num);
      };
      // 找活置顶
      var handleRecTopping = function handleRecTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        var provinces = [].concat(_toConsumableArray(province_ids), _toConsumableArray(city_ids), _toConsumableArray(country_ids));
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        if (!parseInt(recDay) || parseInt(recDay) == 0) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '输入的置顶天数不能为0或者为空',
            showCancel: false
          });
          return;
        }
        if (parseInt(recDay) > basics.max_top_days) {
          (0, _index4.default)("\u6700\u591A\u53EF\u7F6E\u9876" + basics.max_top_days + "\u5929\uFF01");
          return;
        }
        // const provinces = (province.map(v=>v.id)).join(',');
        // const citys = (city.map(v => v.id)).join(',');
        // let params={
        //   days: parseInt(recDay),
        //   citys: 0,
        //   provinces,
        // }
        var details = {
          days: paramsDay,
          citys: 0,
          provinces: provinces
        };
        // return;
        if (!type) {
          (0, _index.resumesDoTopAction)(details).then(function (res) {
            if (res.errcode === 'ok') {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroTt2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            } else if (res.errcode === 'resume_null') {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                // showCancel: false,
                success: function success() {
                  _taroTt2.default.navigateTo({
                    url: "pages/resume/newJobs/index"
                  });
                }
              });
              return;
              //获取积分
            } else if (res.errcode === 'get_integral') {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                success: function success() {
                  _taroTt2.default.navigateTo({
                    url: "/pages/getintegral/index"
                  });
                }
              });
              return;
            } else {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroTt2.default.navigateBack({
                    delta: 1
                  });
                }
              });
              return;
            }
          });
        }
      };
      contextItem.Provider(value);
      this.anonymousFunc4 = handleAddJump;
      this.anonymousFunc5 = handleJump;
      this.anonymousFunc6 = handleAddJump;
      this.anonymousFunc7 = handleJump;
      this.anonymousFunc8 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc9 = handleCancel;
      this.anonymousFunc10 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc11 = handleTopping;
      this.anonymousFunc12 = function () {
        _taroTt2.default.makePhoneCall({ phoneNumber: _index2.SERVERPHONE });
      };
      var loopArray74 = province ? province.map(function (v, __index0) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey = "iczzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleDel(v.$original);
        };
        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      var loopArray75 = params ? params.city.map(function (v, __index1) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey2 = "idzzz" + __index1;
        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return handleDel(v.$original);
        };
        return {
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      }) : [];
      var loopArray76 = params ? params.province.map(function (v, __index2) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey3 = "iezzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          return handleDel(v.$original);
        };
        return {
          _$indexKey3: _$indexKey3,
          $original: v.$original
        };
      }) : [];
      var loopArray77 = params ? params.whole.map(function (v, __index3) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey4 = "ifzzz" + __index3;
        _this2.anonymousFunc3Map[_$indexKey4] = function () {
          return handleDel(v.$original);
        };
        return {
          _$indexKey4: _$indexKey4,
          $original: v.$original
        };
      }) : [];
      var loopArray78 = data.top_rules.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = i + i;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        params: params,
        data: data,
        loopArray74: loopArray74,
        loopArray75: loopArray75,
        loopArray76: loopArray76,
        loopArray77: loopArray77,
        loopArray78: loopArray78,
        province: province,
        IMGCDNURL: _index2.IMGCDNURL,
        rec: rec,
        basics: basics,
        type: type,
        list: list,
        displayTime: displayTime,
        num: num,
        endTime: endTime,
        editData: editData,
        newTime: newTime,
        day: day,
        SERVERPHONE: _index2.SERVERPHONE
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }]);

  return Topping;
}(_taroTt2.default.Component);

Topping.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
Topping.$$componentPath = "pages/topping/index";
Topping.config = { navigationBarTitleText: '招工置顶' };
exports.default = Topping;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Topping, true));

/***/ }),

/***/ "./src/utils/api/index.ts":
/*!********************************!*\
  !*** ./src/utils/api/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memberTurntable = exports.turntableVideoEnd = exports.turntableDraw = exports.turntableIndex = exports.getRankRulesList = exports.getResumeAddInfoConfig = exports.realnameQueryUrl = exports.userCheckDouyinRecharge = exports.userDouyinRecharge = undefined;
exports.userTelCodeLogin = exports.userAccountUrl = exports.leavingMessageUrl = exports.resumesComplainUrl = exports.resumesUpdateTopResumeUrl = exports.resumesDoTopV2Url = exports.resumesTopConfigV2Url = exports.resumesEditImgUrl = exports.resumesChangeTopStatusUrl = exports.resumesDoTopUrl = exports.resumesTopConfigUrl = exports.resumesTopAreasUrl = exports.resumesDelProjectUrl = exports.resumesEditEndUrl = exports.resumesIntroduceUrl = exports.resumesGetDataUrl = exports.checkAdcodeUrl = exports.addResumeUrl = exports.resumesProjectUrl = exports.resumesCertificateUrl = exports.delCertificateUrl = exports.jobRecommendListUrl = exports.resumeListUrl = exports.resumeCollectUrl = exports.resumeSupportUrl = exports.resumesGetTelUrl = exports.recommendListUrl = exports.resumeDetailUrl = exports.jobUpdateTopStatusUrl = exports.jobChangeTopAreasUrl = exports.jobGetTopAreasUrl = exports.jobDoTopUrl = exports.jobTopHotAreasUrl = exports.jobTopConfigUrl = exports.jobEndStatusUrl = exports.jobGetTelUrl = exports.jobNoUserInfoUrl = exports.jobInfoUrl = exports.publishComplainUrl = exports.integralUseInfoUrl = exports.integralExpendListsUrl = exports.integralExpendConfigUrl = exports.integralSourceListsUrl = exports.integralSourceConfigUrl = exports.messagesTypeUrl = exports.userMessagesUrl = exports.resumesAddClickLog = exports.resumesSortUrl = exports.newsInfoUrl = exports.newsTypesUrl = exports.newListUrl = exports.helpUrl = exports.feedbackSubmissionUrl = exports.feedbackUrl = exports.requestActionUrl = exports.ResumeCancelCollection = exports.recruitCancelCollection = exports.getCollectionResumeList = exports.getCollectionRecruitList = exports.userUpdateUserInfo = exports.userChangeUsedStatus = exports.userGetPublishedUsedList = exports.userChangeRecruitStatus = exports.userGetPublishedRecruitList = exports.updataPassword = exports.userChangePhone = exports.userUpdateName = exports.userChangeAvatar = exports.postUserAddInfo = exports.getIdcardAuthInfo = exports.postUserAuthInfo = exports.getUserAuthInfo = exports.getMemberMsgNumber = exports.getMemberInfo = exports.CheckMineAuthInfo = exports.CheckAuth = exports.GetUsedInfo = exports.GetUserLoginPhoneCode = exports.GetUserPhoneCode = exports.PublishUsedInfo = exports.GetUsedInfoModel = exports.GetRechargeOrder = exports.GetRechargeOpenid = exports.GetRechargeList = exports.GetUserInviteLink = exports.CheckAdcodeValid = exports.GetAllAreas = exports.PublishRecruitInfo = exports.GetPublisRecruitView = exports.GetIntegralList = exports.GetTabbarMsg = exports.GetListFilterData = exports.GetWechatNotice = exports.GetFleamarketlist = exports.GetResumelist = exports.GetRecruitlist = exports.GetAllListItem = exports.GetBannerNotice = exports.GetUserInfo = exports.GetUserSessionKey = undefined;

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

// 获取用户session_key
var GetUserSessionKey = exports.GetUserSessionKey = _index.REQUESTURL + 'user/user-info/';
// session_key获取用户信息
var GetUserInfo = exports.GetUserInfo = _index.REQUESTURL + 'user/make-user/';
// 获取首页banner以及公告
var GetBannerNotice = exports.GetBannerNotice = _index.REQUESTURL + 'index/index-banner-carousel/';
// 获取首页列表数据
var GetAllListItem = exports.GetAllListItem = _index.REQUESTURL + 'index/new-index-msg/';
// 获取招工列表
var GetRecruitlist = exports.GetRecruitlist = _index.REQUESTURL + 'job/list-new/';
// 获取找活列表
var GetResumelist = exports.GetResumelist = _index.REQUESTURL + 'resumes/new-index/';
// 获取二手交易列表
var GetFleamarketlist = exports.GetFleamarketlist = _index.REQUESTURL + 'index/info-list/';
// 获取微信号与公告列表
var GetWechatNotice = exports.GetWechatNotice = _index.REQUESTURL + 'index/less-search-data/';
// 获取列表页筛选条件
var GetListFilterData = exports.GetListFilterData = _index.REQUESTURL + 'index/index-search-tree/';
// 获取tabbar未读消息
var GetTabbarMsg = exports.GetTabbarMsg = _index.REQUESTURL + 'member/original-message/';
// 获取积分记录分页数据
var GetIntegralList = exports.GetIntegralList = _index.REQUESTURL + 'integral/integral-record/';
// 初始化发布招工视图
var GetPublisRecruitView = exports.GetPublisRecruitView = _index.REQUESTURL + 'publish/new-job/';
// 发布修改招工信息
var PublishRecruitInfo = exports.PublishRecruitInfo = _index.REQUESTURL + 'publish/save-job/';
// 获取城市数据
var GetAllAreas = exports.GetAllAreas = _index.REQUESTURL + 'index/index-area/';
// 检测adcode是否合法
var CheckAdcodeValid = exports.CheckAdcodeValid = _index.REQUESTURL + 'publish/checking-adcode/';
// 获取用户邀请链接
var GetUserInviteLink = exports.GetUserInviteLink = _index.REQUESTURL + 'index/invite-friends/';
// 获取积分充值选项
var GetRechargeList = exports.GetRechargeList = _index.REQUESTURL + 'integral/integral-price/';
// 用户充值获取openid
var GetRechargeOpenid = exports.GetRechargeOpenid = _index.REQUESTURL + 'get-openid/';
// 用户充值创建订单
var GetRechargeOrder = exports.GetRechargeOrder = _index.REQUESTURL + 'create-order/';
// 用户获取二手交易信息视图
var GetUsedInfoModel = exports.GetUsedInfoModel = _index.REQUESTURL + 'publish/view-message/';
// 用户发布二手交易
var PublishUsedInfo = exports.PublishUsedInfo = _index.REQUESTURL + 'publish/publish-msg/';
// 用户获取手机验证码
var GetUserPhoneCode = exports.GetUserPhoneCode = _index.REQUESTURL + 'index/get-code/';
// 用户登录获取验证码
var GetUserLoginPhoneCode = exports.GetUserLoginPhoneCode = _index.REQUESTURL + 'baidu-auth/get-code/';
// 获取二手交易详情
var GetUsedInfo = exports.GetUsedInfo = _index.REQUESTURL + 'fleamarket/fleamarket-info/';
// 用户实名查询
var CheckAuth = exports.CheckAuth = _index.REQUESTURL + 'resume/query-worker/';
// 验证当前用户是否实名
var CheckMineAuthInfo = exports.CheckMineAuthInfo = _index.REQUESTURL + 'resume/auth-status/';
// 初始化会员中心用户信息
var getMemberInfo = exports.getMemberInfo = _index.REQUESTURL + 'user/personal/';
// 用户通知信息数量
var getMemberMsgNumber = exports.getMemberMsgNumber = _index.REQUESTURL + 'member/original-message/';
// 获取用户实名认证信息
var getUserAuthInfo = exports.getUserAuthInfo = _index.REQUESTURL + 'user/auth-view/';
// 提交用户实名认证信息
var postUserAuthInfo = exports.postUserAuthInfo = _index.REQUESTURL + 'user/do-auth/';
// 实名认证识别身份证接口
var getIdcardAuthInfo = exports.getIdcardAuthInfo = _index.PROREQUESTURL + 'index/authid-card/';
// 用户完善资料
var postUserAddInfo = exports.postUserAddInfo = _index.REQUESTURL + 'user/bind-tel/';
// 用户修改头像
var userChangeAvatar = exports.userChangeAvatar = _index.REQUESTURL + 'user/update-header/';
// 用户修改名字
var userUpdateName = exports.userUpdateName = _index.REQUESTURL + 'user/update-username/';
// 用户更换手机
var userChangePhone = exports.userChangePhone = _index.REQUESTURL + 'user/update-tel/';
//修改电话号码
var updataPassword = exports.updataPassword = _index.REQUESTURL + 'user/update-pwd/';
// 用户获取已发布招工列表
var userGetPublishedRecruitList = exports.userGetPublishedRecruitList = _index.REQUESTURL + 'job/issue-lists/';
// 用户改变招工状态
var userChangeRecruitStatus = exports.userChangeRecruitStatus = _index.REQUESTURL + 'job/job-end-status/';
// 用户获取已发布二手列表
var userGetPublishedUsedList = exports.userGetPublishedUsedList = _index.REQUESTURL + 'fleamarket/issues-v1/';
// 用户改变二手交易信息状态
var userChangeUsedStatus = exports.userChangeUsedStatus = _index.REQUESTURL + 'fleamarket/fleamarket-end-status/';
// 二手交易 刷新置顶
var userUpdateUserInfo = exports.userUpdateUserInfo = _index.REQUESTURL + 'fleamarket/update-time/';
// 收藏招工列表
var getCollectionRecruitList = exports.getCollectionRecruitList = _index.REQUESTURL + 'job/collect-list/';
// 收藏找活列表
var getCollectionResumeList = exports.getCollectionResumeList = _index.REQUESTURL + 'resumes/collect-list/';
// 招工取消收藏
var recruitCancelCollection = exports.recruitCancelCollection = _index.REQUESTURL + 'job/collect/';
// 招活取消收藏
var ResumeCancelCollection = exports.ResumeCancelCollection = _index.REQUESTURL + 'resumes/resume-collect/';
// 使用教程
var requestActionUrl = exports.requestActionUrl = _index.REQUESTURL + 'index/course/';
// 意见反馈数据
var feedbackUrl = exports.feedbackUrl = _index.REQUESTURL + 'leaving-message/list/';
// 意见反馈提交
var feedbackSubmissionUrl = exports.feedbackSubmissionUrl = _index.REQUESTURL + 'leaving-message/publish/';
// 帮助中心
var helpUrl = exports.helpUrl = _index.REQUESTURL + 'others/help-feedback/';
// 新闻列表
var newListUrl = exports.newListUrl = _index.REQUESTURL + 'news/list/';
// 新闻类型
var newsTypesUrl = exports.newsTypesUrl = _index.REQUESTURL + 'news/types/';
// 咨询详情
var newsInfoUrl = exports.newsInfoUrl = _index.REQUESTURL + 'news/info/';
// 排名规则
var resumesSortUrl = exports.resumesSortUrl = _index.REQUESTURL + 'resumes/sort/';
// 排名规则点击时发送的请求
var resumesAddClickLog = exports.resumesAddClickLog = _index.REQUESTURL + 'resumes/add-click-log/';
// 我的信息
var userMessagesUrl = exports.userMessagesUrl = _index.REQUESTURL + 'member/user-messages/';
// 我的信息详情
var messagesTypeUrl = exports.messagesTypeUrl = _index.REQUESTURL + 'member/message-of-type/';
//获取积分来源分类信息
var integralSourceConfigUrl = exports.integralSourceConfigUrl = _index.REQUESTURL + 'integral/source-config/';
// 获取积分数量
var integralSourceListsUrl = exports.integralSourceListsUrl = _index.REQUESTURL + 'integral/source-lists/';
// 获取积分消耗分类信息
var integralExpendConfigUrl = exports.integralExpendConfigUrl = _index.REQUESTURL + 'integral/expend-config/';
// 积分消耗积分数量
var integralExpendListsUrl = exports.integralExpendListsUrl = _index.REQUESTURL + 'integral/expend-lists/';
// 消耗积分弹窗内容
var integralUseInfoUrl = exports.integralUseInfoUrl = _index.REQUESTURL + 'integral/look-used-info/';
// 投诉
var publishComplainUrl = exports.publishComplainUrl = _index.REQUESTURL + 'publish/complain/';
// 招工详情
var jobInfoUrl = exports.jobInfoUrl = _index.REQUESTURL + 'job/job-info/';
// 招工详情，没有用户信息
var jobNoUserInfoUrl = exports.jobNoUserInfoUrl = _index.REQUESTURL + '/job/no-user-info/';
// 获取完整电话好码
var jobGetTelUrl = exports.jobGetTelUrl = _index.REQUESTURL + 'job/get-tel/';
// 修改状态
var jobEndStatusUrl = exports.jobEndStatusUrl = _index.REQUESTURL + 'job/job-end-status/';
// 置顶信息
var jobTopConfigUrl = exports.jobTopConfigUrl = _index.REQUESTURL + 'job/top-config/';
// 置顶获取区域
var jobTopHotAreasUrl = exports.jobTopHotAreasUrl = _index.REQUESTURL + '/job/top-hot-areas-v1/';
// 招工置顶
var jobDoTopUrl = exports.jobDoTopUrl = _index.REQUESTURL + 'job/do-top/';
// 修改置顶获取数据
var jobGetTopAreasUrl = exports.jobGetTopAreasUrl = _index.REQUESTURL + 'job/get-top-areas/';
// 更新招工置顶城市
var jobChangeTopAreasUrl = exports.jobChangeTopAreasUrl = _index.REQUESTURL + 'job/change-top-areas/';
// 取消置顶
var jobUpdateTopStatusUrl = exports.jobUpdateTopStatusUrl = _index.REQUESTURL + 'job/update-top-status/';
// 找活名片内容
var resumeDetailUrl = exports.resumeDetailUrl = _index.REQUESTURL + 'resumes/resume-detail/';
// 找活名片相关推荐
var recommendListUrl = exports.recommendListUrl = _index.REQUESTURL + 'resumes/resume-recommend-list/';
// 找活名片查看完整电话
var resumesGetTelUrl = exports.resumesGetTelUrl = _index.REQUESTURL + 'resumes/get-tel/';
// 赞
var resumeSupportUrl = exports.resumeSupportUrl = _index.REQUESTURL + 'resumes/resume-support/';
// 收藏
var resumeCollectUrl = exports.resumeCollectUrl = _index.REQUESTURL + 'resumes/resume-collect/';
// 找活名片完善信息
var resumeListUrl = exports.resumeListUrl = _index.REQUESTURL + 'resumes/resume-list/';
// 找活详情推荐
var jobRecommendListUrl = exports.jobRecommendListUrl = _index.REQUESTURL + '/job/job-recommend-list/';
// 删除技能证书
var delCertificateUrl = exports.delCertificateUrl = _index.REQUESTURL + 'resumes/del-certificate/';
// 新增技能证书
var resumesCertificateUrl = exports.resumesCertificateUrl = _index.REQUESTURL + 'resumes/certificate/';
// 新增项目
var resumesProjectUrl = exports.resumesProjectUrl = _index.REQUESTURL + 'resumes/project/';
// 基础信息
var addResumeUrl = exports.addResumeUrl = _index.REQUESTURL + 'resumes/add-resume/';
// 获取当前位置
var checkAdcodeUrl = exports.checkAdcodeUrl = _index.REQUESTURL + 'resumes/check-adcode/';
// 在找活名片获取子页面公用数据只请求一次
var resumesGetDataUrl = exports.resumesGetDataUrl = _index.REQUESTURL + 'resumes/get-data/';
//人员信息
var resumesIntroduceUrl = exports.resumesIntroduceUrl = _index.REQUESTURL + 'resumes/introduce/';
// 找回名片修改状态
var resumesEditEndUrl = exports.resumesEditEndUrl = _index.REQUESTURL + 'resumes/edit-end/';
// 删除项目经验
var resumesDelProjectUrl = exports.resumesDelProjectUrl = _index.REQUESTURL + 'resumes/del-project/';
// 找活置顶获取省
var resumesTopAreasUrl = exports.resumesTopAreasUrl = _index.REQUESTURL + 'resumes/top-areas/';
// 找活置顶内容
var resumesTopConfigUrl = exports.resumesTopConfigUrl = _index.REQUESTURL + 'resumes/top-config/';
// 置顶找活
var resumesDoTopUrl = exports.resumesDoTopUrl = _index.REQUESTURL + 'resumes/do-top/';
// 找活页面置顶修改
var resumesChangeTopStatusUrl = exports.resumesChangeTopStatusUrl = _index.REQUESTURL + 'resumes/change-top-status/';
// 修改找活名片里的头像
var resumesEditImgUrl = exports.resumesEditImgUrl = _index.REQUESTURL + 'resumes/edit-img/';
// 找活置顶配置接口v2
var resumesTopConfigV2Url = exports.resumesTopConfigV2Url = _index.REQUESTURL + '/resumes/top-config/';
// 找活置顶v2
var resumesDoTopV2Url = exports.resumesDoTopV2Url = _index.REQUESTURL + '/resumes/do-top-v2/';
// 修改找活置顶
var resumesUpdateTopResumeUrl = exports.resumesUpdateTopResumeUrl = _index.REQUESTURL + '/resumes/update-top-resume/';
// 找活投诉
var resumesComplainUrl = exports.resumesComplainUrl = _index.REQUESTURL + 'resumes/complain/';
// 消息推送
var leavingMessageUrl = exports.leavingMessageUrl = _index.REQUESTURL + 'leaving-message/add-subscribe-msg/';
// 用户账号登录
var userAccountUrl = exports.userAccountUrl = _index.REQUESTURL + 'baidu-auth/login/';
// 用户验证码登录
var userTelCodeLogin = exports.userTelCodeLogin = _index.REQUESTURL + 'baidu-auth/code-login/';
// 抖音用户充值
var userDouyinRecharge = exports.userDouyinRecharge = _index.REQUESTURL + 'pay/bytedance-order/';
// 都要用户充值订单检测
var userCheckDouyinRecharge = exports.userCheckDouyinRecharge = _index.REQUESTURL + '/pay/byte-check/';
// 实名查询
var realnameQueryUrl = exports.realnameQueryUrl = _index.REQUESTURL + 'resume/auth-worker-find/';
// 找活信息发布基本资料 配置项
var getResumeAddInfoConfig = exports.getResumeAddInfoConfig = _index.REQUESTURL + 'resumes/get-data/';
//排名规则
var getRankRulesList = exports.getRankRulesList = _index.REQUESTURL + 'resumes/sort/';
// 大转盘获取抽奖次数
var turntableIndex = exports.turntableIndex = _index.REQUESTURL + 'turntable/index/';
// 大转盘 获取抽奖结果
var turntableDraw = exports.turntableDraw = _index.REQUESTURL + 'turntable/draw/';
// 大转盘看视频结束后的回调
var turntableVideoEnd = exports.turntableVideoEnd = _index.REQUESTURL + 'turntable/video-end/';
// 获取鱼泡币页面大转盘展示控制
var memberTurntable = exports.memberTurntable = _index.REQUESTURL + 'member/turntable/';

/***/ }),

/***/ "./src/utils/helper/index.ts":
/*!***********************************!*\
  !*** ./src/utils/helper/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.objDeepCopy = objDeepCopy;
exports.userAuthLoction = userAuthLoction;
exports.getAmapPoiList = getAmapPoiList;
exports.userJumpPage = userJumpPage;
exports.getPointNumber = getPointNumber;
exports.getSystemInfo = getSystemInfo;
exports.recSerAuthLoction = recSerAuthLoction;
exports.userCancelAuth = userCancelAuth;
exports.getLocation = getLocation;
exports.setClipboardData = setClipboardData;
exports.copyWechatNumber = copyWechatNumber;
exports.userCallPhone = userCallPhone;
exports.getUserShareMessage = getUserShareMessage;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _amapWx = __webpack_require__(/*! ../source/amap-wx */ "./src/utils/source/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../request/index */ "./src/utils/request/index.ts");

var _index3 = __webpack_require__(/*! ../msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 对象拷贝
function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = _typeof(source[item]) === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
// 获取用户定位
function userAuthLoction() {
  return new Promise(function (resolve, reject) {
    var loc = _taroTt2.default.getStorageSync(_store.UserLocationCity);
    if (loc) resolve(loc);
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getRegeo({
      success: function success(data) {
        var city = data[0].regeocodeData.addressComponent.city;
        var bool = typeof data[0].regeocodeData.addressComponent.city == 'string';
        var gpsLocation = {
          province: data[0].regeocodeData.addressComponent.province,
          city: bool ? city : data[0].regeocodeData.addressComponent.province,
          adcode: data[0].regeocodeData.addressComponent.adcode,
          citycode: data[0].regeocodeData.addressComponent.citycode
        };
        _taroTt2.default.setStorageSync(_store.UserLocationCity, gpsLocation); //定位信息
        resolve(gpsLocation);
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 请求高德api获取附近地点
function getAmapPoiList(val) {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getInputtips({
      keywords: val,
      success: function success(data) {
        if (data) resolve(data.tips);else reject();
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 页面跳转
function userJumpPage(url) {
  _taroTt2.default.navigateTo({ url: url });
}
// 数字四舍五入并向下取2位小数
function getPointNumber(p, n) {
  return Math.floor(p / n * 100) / 100;
}
// 获取设备系统
function getSystemInfo() {
  var system = _taroTt2.default.getSystemInfoSync();
  return system.platform;
}
// 找活基础页面获取定位
function recSerAuthLoction() {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getRegeo({
      success: function success(data) {
        resolve(data);
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 用户取消授权
function userCancelAuth() {
  _taroTt2.default.navigateBack();
}
// 用户获取定位
function getLocation() {
  (0, _index4.default)('位置获取中...');
  return new Promise(function (resolve, reject) {
    var myAmapFun = new _amapWx2.default.AMapWX({
      key: _index.MAPKEY
    }); //key注册高德地图开发者
    myAmapFun.getRegeo({
      type: 'gcj02',
      success: function success(data) {
        var mydata = data[0].regeocodeData.addressComponent;
        var params = {
          adcode: mydata.adcode
        };
        (0, _index2.checkAdcodeAction)(params).then(function (res) {
          if (res.errcode == 'ok') {
            var province = res.province;
            // let city: string = mydata.city
            // city = typeof city === 'string' ? city : province
            var gpsLocation = {
              province: province,
              city: res.city,
              adcode: mydata.adcode,
              citycode: mydata.citycode,
              address: data[0].name,
              oadcode: mydata.adcode,
              longitude: data[0].longitude + "",
              latitude: data[0].latitude + "",
              wardenryid: res.city,
              regionone: ''
            };
            resolve(gpsLocation);
          } else {
            (0, _index4.default)('定位失败,请重新定位');
            reject();
          }
        }).catch(function (err) {
          (0, _index4.default)('定位失败,请重新定位');
          reject(err);
        });
      },
      fail: function fail(err) {
        (0, _index4.default)('定位失败,请重新定位');
        reject(err);
      }
    });
  });
}
// 复制内容到粘贴板
function setClipboardData(val) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '内容已成功复制到粘贴板';

  _taroTt2.default.setClipboardData({
    data: val,
    success: function success() {
      _taroTt2.default.hideToast();
      (0, _index3.ShowActionModal)({
        msg: msg
      });
    }
  });
}
// 复制微信号到粘贴板
function copyWechatNumber(val) {
  var msg = "\u5FAE\u4FE1\u53F7:" + val + "\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u53BB\u5FAE\u4FE1-\u6DFB\u52A0\u670B\u53CB-\u641C\u7D22\u6846\u7C98\u8D34";
  setClipboardData(val, msg);
}
// 用户拨打电话
function userCallPhone(val) {
  _taroTt2.default.makePhoneCall({
    phoneNumber: val
  });
}
// 用户统一分享内容
function getUserShareMessage() {
  return {
    title: '全国建筑工地招工平台',
    imageUrl: _index.IMGCDNURL + "minishare.png"
  };
}

/***/ }),

/***/ "./src/utils/msg/index.ts":
/*!********************************!*\
  !*** ./src/utils/msg/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Msg;
exports.ShowActionModal = ShowActionModal;
exports.errMsg = errMsg;
exports.warnMsg = warnMsg;
exports.successMsg = successMsg;
exports.showModalTip = showModalTip;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Msg(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  _taroTt2.default.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  });
}
function ShowActionModal(data) {
  var _data$title = data.title,
      title = _data$title === undefined ? '温馨提示' : _data$title,
      _data$confirmText = data.confirmText,
      confirmText = _data$confirmText === undefined ? '确定' : _data$confirmText,
      msg = data.msg,
      _success = data.success;

  _taroTt2.default.showModal({
    title: title,
    content: typeof data === 'string' ? data : msg,
    showCancel: false,
    confirmText: confirmText,
    success: function success() {
      _success && _success();
    }
  });
}
function errMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroTt2.default.atMessage({
    'message': msg,
    'type': 'error'
  });
}
function warnMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroTt2.default.atMessage({
    'message': msg,
    'type': 'warning'
  });
}
function successMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroTt2.default.atMessage({
    'message': msg,
    'type': 'success'
  });
}
function showModalTip(obj) {
  var _obj$title = obj.title,
      title = _obj$title === undefined ? '温馨提示' : _obj$title,
      _obj$showCancel = obj.showCancel,
      showCancel = _obj$showCancel === undefined ? false : _obj$showCancel;

  _taroTt2.default.showModal({
    title: title,
    content: obj.tips,
    showCancel: showCancel,
    success: function success() {
      obj.callback ? obj.callback() : "";
    }
  });
}

/***/ }),

/***/ "./src/utils/request/index.ts":
/*!************************************!*\
  !*** ./src/utils/request/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.doRequestAction = doRequestAction;
exports.getUserSessionKey = getUserSessionKey;
exports.GetUserInfo = GetUserInfo;
exports.getBannerNotice = getBannerNotice;
exports.getAllListItem = getAllListItem;
exports.getRecruitList = getRecruitList;
exports.getResumeList = getResumeList;
exports.getFleamarketList = getFleamarketList;
exports.getWechatNotice = getWechatNotice;
exports.getListFilterData = getListFilterData;
exports.getTabbarMsg = getTabbarMsg;
exports.getIntegralList = getIntegralList;
exports.getPublishRecruitView = getPublishRecruitView;
exports.getAllAreas = getAllAreas;
exports.getHotAreas = getHotAreas;
exports.checkAdcodeValid = checkAdcodeValid;
exports.getUserInviteLink = getUserInviteLink;
exports.getRechargeList = getRechargeList;
exports.getRechargeOpenid = getRechargeOpenid;
exports.getRechargeOrder = getRechargeOrder;
exports.getUsedInfoModel = getUsedInfoModel;
exports.publishUsedInfo = publishUsedInfo;
exports.getUserPhoneCode = getUserPhoneCode;
exports.GetUserLoginPhoneCode = GetUserLoginPhoneCode;
exports.getUsedInfo = getUsedInfo;
exports.getUserIsAuth = getUserIsAuth;
exports.checkMineAuthInfo = checkMineAuthInfo;
exports.getMemberInfo = getMemberInfo;
exports.getMemberMsgNumber = getMemberMsgNumber;
exports.getUserAuthInfo = getUserAuthInfo;
exports.postUserAuthInfo = postUserAuthInfo;
exports.postUserAddInfo = postUserAddInfo;
exports.userChangeAvatar = userChangeAvatar;
exports.userUpdateName = userUpdateName;
exports.userChangePhone = userChangePhone;
exports.userGetPublishedRecruitLists = userGetPublishedRecruitLists;
exports.userChangeRecruitStatus = userChangeRecruitStatus;
exports.userGetPublishedUsedLists = userGetPublishedUsedLists;
exports.userChangeUsedStatus = userChangeUsedStatus;
exports.userUpdateUsedInfo = userUpdateUsedInfo;
exports.getCollectionRecruitListData = getCollectionRecruitListData;
exports.getCollectionResumeListData = getCollectionResumeListData;
exports.recruitListCancelCollectionAction = recruitListCancelCollectionAction;
exports.ResumeCancelCollectionAction = ResumeCancelCollectionAction;
exports.requestAction = requestAction;
exports.feedbackAction = feedbackAction;
exports.feedbackSubmissionAction = feedbackSubmissionAction;
exports.helpAction = helpAction;
exports.newsTypesAction = newsTypesAction;
exports.newListAction = newListAction;
exports.newsInfoAction = newsInfoAction;
exports.resumesSortAction = resumesSortAction;
exports.resumesAddClickLogAction = resumesAddClickLogAction;
exports.userMessagesAction = userMessagesAction;
exports.messagesTypeAction = messagesTypeAction;
exports.integralSourceConfigAction = integralSourceConfigAction;
exports.integralSourceListsAction = integralSourceListsAction;
exports.integralExpendConfigAction = integralExpendConfigAction;
exports.integralExpendListsAction = integralExpendListsAction;
exports.integralUseInfoAction = integralUseInfoAction;
exports.publishComplainAction = publishComplainAction;
exports.jobInfoAction = jobInfoAction;
exports.jobNoUserInfoAction = jobNoUserInfoAction;
exports.jobGetTelAction = jobGetTelAction;
exports.jobEndStatusAction = jobEndStatusAction;
exports.jobTopConfigAction = jobTopConfigAction;
exports.jobTopHotAreasAction = jobTopHotAreasAction;
exports.jobDoTopAction = jobDoTopAction;
exports.jobGetTopAreasAction = jobGetTopAreasAction;
exports.jobChangeTopAreasAction = jobChangeTopAreasAction;
exports.jobUpdateTopStatusAction = jobUpdateTopStatusAction;
exports.resumeDetailAction = resumeDetailAction;
exports.recommendListAction = recommendListAction;
exports.resumesGetTelAcrion = resumesGetTelAcrion;
exports.resumeSupportAction = resumeSupportAction;
exports.resumeCollectAction = resumeCollectAction;
exports.resumeListAction = resumeListAction;
exports.publishRecruitInfo = publishRecruitInfo;
exports.jobRecommendListAction = jobRecommendListAction;
exports.delCertificateAction = delCertificateAction;
exports.resumesCertificateAction = resumesCertificateAction;
exports.resumesProjectAction = resumesProjectAction;
exports.addResumeAction = addResumeAction;
exports.checkAdcodeAction = checkAdcodeAction;
exports.resumesGetDataAction = resumesGetDataAction;
exports.resumesIntroduceAction = resumesIntroduceAction;
exports.resumesEditEndAction = resumesEditEndAction;
exports.resumesDelProjectAction = resumesDelProjectAction;
exports.resumesTopAreasAction = resumesTopAreasAction;
exports.resumesTopConfigAction = resumesTopConfigAction;
exports.resumesDoTopAction = resumesDoTopAction;
exports.resumesChangeTopStatusAction = resumesChangeTopStatusAction;
exports.resumesEditImgAction = resumesEditImgAction;
exports.resumesTopConfigV2Action = resumesTopConfigV2Action;
exports.resumesDoTopV2Action = resumesDoTopV2Action;
exports.resumesUpdateTopResumeAction = resumesUpdateTopResumeAction;
exports.resumesComplainAction = resumesComplainAction;
exports.leavingMessageAction = leavingMessageAction;
exports.userAccountLogin = userAccountLogin;
exports.userTelCodeLogin = userTelCodeLogin;
exports.userDouyinRecharge = userDouyinRecharge;
exports.userCheckDouyinRecharge = userCheckDouyinRecharge;
exports.updataPassword = updataPassword;
exports.queryAction = queryAction;
exports.getResumeAddInfoConfig = getResumeAddInfoConfig;
exports.getRankRulesList = getRankRulesList;
exports.turntableIndex = turntableIndex;
exports.turntableDraw = turntableDraw;
exports.turntableVideoEnd = turntableVideoEnd;
exports.memberTurntable = memberTurntable;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../api/index */ "./src/utils/api/index.ts");

var api = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 请求失败提示信息
function requestShowToast(show) {
  if (show) {
    setTimeout(function () {
      (0, _index4.default)('网络错误，请求失败');
    }, 200);
  }
}
// 获取header请求头信息
function getRequestHeaderInfo() {
  // 获取用户信息
  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
  var requestHeader = userInfo.login ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid,
    version: _index2.VERSION
  } : {
    'content-type': 'application/x-www-form-urlencoded',
    version: _index2.VERSION
  };
  return requestHeader;
}
// 配置默认请求参数
var getRequestHeaderInfoAction = function getRequestHeaderInfoAction() {
  var headers = getRequestHeaderInfo();
  return {
    url: '',
    method: 'GET',
    header: _extends({}, headers),
    data: {},
    loading: true,
    title: '数据加载中...',
    failToast: true
  };
};
// 全局通用请求方法
function doRequestAction(reqData) {
  var req = _extends({}, getRequestHeaderInfoAction(), reqData);
  if (req.loading) {
    _taroTt2.default.showLoading({
      title: req.title
    });
  }
  var data = _extends({}, req.data, { wechat_token: _index2.TOKEN });
  // 获取用户信息
  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
  if (req.method === 'POST' && userInfo.login) {
    data.userId = userInfo.userId;
    data.token = userInfo.token;
    data.tokenTime = userInfo.tokenTime;
  }
  return new Promise(function (resolve, reject) {
    _taroTt2.default.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : req.url,
      method: req.method,
      header: req.header,
      data: data,
      success: function success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          requestShowToast(req.failToast);
          reject(res);
        }
      },
      fail: function fail(e) {
        // todo requestShowToast(req.failToast)
        requestShowToast(req.failToast);
        reject(e);
      },
      complete: function complete() {
        if (req.loading) {
          _taroTt2.default.hideLoading();
        }
      }
    });
  });
}
// 用户授权-获取session_key
function getUserSessionKey(code) {
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  });
}
// session_key换取userinfo
function GetUserInfo(data) {
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  });
}
// 获取首页banner以及公告
function getBannerNotice() {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  });
}
// 获取首页列表数据
function getAllListItem(data) {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  });
}
// 获取招工列表
function getRecruitList(data) {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data,
    method: 'POST'
  });
}
// 获取找活列表
function getResumeList(data) {
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  });
}
// 获取二手交易列表
function getFleamarketList(data) {
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  });
}
// 获取微信号以及公告
function getWechatNotice() {
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  });
}
// 获取列表页筛选条件
function getListFilterData() {
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  });
}
// tabbar未读消息统计
function getTabbarMsg() {
  return;
}
// 获取积分记录分页数据
function getIntegralList(data) {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  });
}
// 初始化发布招工信息视图
function getPublishRecruitView(data) {
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  });
}
// 获取城市数据
function getAllAreas() {
  var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  });
}
// 获取热门城市
function getHotAreas() {}
// 检验adcode是否有效
function checkAdcodeValid(adcode) {
  return doRequestAction({
    url: api.CheckAdcodeValid,
    method: 'POST',
    data: {
      adcode: adcode
    }
  });
}
// 获取用户邀请链接
function getUserInviteLink() {
  return doRequestAction({
    url: api.GetUserInviteLink,
    method: 'POST',
    failToast: true
  });
}
// 获取充值选项
function getRechargeList() {
  return doRequestAction({
    url: api.GetRechargeList,
    method: 'POST'
  });
}
// 用户充值获取openid
function getRechargeOpenid(code) {
  return doRequestAction({
    url: api.GetRechargeOpenid,
    method: 'POST',
    data: {
      js_code: code
    }
  });
}
// 用户创建充值订单
function getRechargeOrder(data) {
  return doRequestAction({
    url: api.GetRechargeOrder,
    method: 'POST',
    data: data
  });
}
// 初始化用户发布二手交易信息
function getUsedInfoModel(data) {
  return doRequestAction({
    url: api.GetUsedInfoModel,
    data: data,
    method: 'POST'
  });
}
// 发布二手交易
function publishUsedInfo(data) {
  return doRequestAction({
    url: api.PublishUsedInfo,
    data: data,
    method: 'POST'
  });
}
// 获取验证码
function getUserPhoneCode(data) {
  return doRequestAction({
    url: api.GetUserPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  });
}
// 获取登录验证码
function GetUserLoginPhoneCode(data) {
  return doRequestAction({
    url: api.GetUserLoginPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  });
}
// 二手交易详情
function getUsedInfo(id) {
  return doRequestAction({
    url: api.GetUsedInfo,
    method: 'POST',
    data: {
      infoId: id
    }
  });
}
// 用户实名查询
function getUserIsAuth(tel) {
  return doRequestAction({
    url: api.CheckAuth,
    method: 'POST',
    data: {
      tel: tel
    }
  });
}
// 验证当前用户是否实名
function checkMineAuthInfo() {
  return doRequestAction({
    url: api.CheckMineAuthInfo,
    method: 'POST'
  });
}
// 用户会员中心
function getMemberInfo() {
  return doRequestAction({
    url: api.getMemberInfo,
    method: 'POST'
  });
}
// 获取当前用户的提示信息
function getMemberMsgNumber(type) {
  return doRequestAction({
    url: api.getMemberMsgNumber,
    method: 'POST',
    data: {
      terminal_type: type ? 'ios' : 'android'
    },
    loading: false
  });
}
// 用户实名认证
function getUserAuthInfo() {
  return doRequestAction({
    url: api.getUserAuthInfo,
    method: 'POST'
  });
}
// 提交实名认证信息
function postUserAuthInfo(data) {
  return doRequestAction({
    url: api.postUserAuthInfo,
    method: 'POST',
    data: data
  });
}
// 用户完善信息
function postUserAddInfo(data) {
  return doRequestAction({
    url: api.postUserAddInfo,
    method: 'POST',
    data: data
  });
}
// 用户修改头像
function userChangeAvatar(img) {
  return doRequestAction({
    url: api.userChangeAvatar,
    method: 'POST',
    data: {
      headerImg: img
    }
  });
}
// 用户修改名字
function userUpdateName(name) {
  return doRequestAction({
    url: api.userUpdateName,
    method: 'POST',
    data: {
      username: name
    }
  });
}
// 用户更换手机
function userChangePhone(tel, code) {
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
function userGetPublishedRecruitLists(data) {
  return doRequestAction({
    url: api.userGetPublishedRecruitList,
    data: data,
    method: 'POST'
  });
}
// 用户改变发布招工状态
function userChangeRecruitStatus(id) {
  return doRequestAction({
    url: api.userChangeRecruitStatus,
    data: { infoId: id },
    method: 'POST'
  });
}
// 用户获取已发布二手列表
function userGetPublishedUsedLists(data) {
  return doRequestAction({
    url: api.userGetPublishedUsedList,
    data: data,
    method: 'POST'
  });
}
// 用户改变二手状态
function userChangeUsedStatus(id) {
  return doRequestAction({
    url: api.userChangeUsedStatus,
    data: { infoId: id },
    method: 'POST'
  });
}
// 二手交易刷新置顶
function userUpdateUsedInfo(id) {
  return doRequestAction({
    url: api.userUpdateUserInfo,
    data: { infoId: id },
    method: 'POST'
  });
}
// 收藏招工请求数据
function getCollectionRecruitListData(page) {
  return doRequestAction({
    url: api.getCollectionRecruitList,
    method: 'POST',
    data: {
      page: page
    },
    failToast: true
  });
}
// 收藏找活请求数据
function getCollectionResumeListData(page) {
  return doRequestAction({
    url: api.getCollectionResumeList,
    method: 'POST',
    failToast: true,
    data: {
      page: page
    }
  });
}
// 取消招工收藏
function recruitListCancelCollectionAction(id) {
  return doRequestAction({
    url: api.recruitCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      id: id
    }
  });
}
// 取消找活收藏
function ResumeCancelCollectionAction(resume_uuid) {
  return doRequestAction({
    url: api.ResumeCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      resume_uuid: resume_uuid
    }
  });
}
// 使用教程
function requestAction() {
  return doRequestAction({
    url: api.requestActionUrl,
    method: 'POST',
    failToast: true
  });
}
// 意见反馈
function feedbackAction(page) {
  return doRequestAction({
    url: api.feedbackUrl,
    method: 'POST',
    failToast: true,
    data: {
      page: page
    }
  });
}
// 意见返回提交
function feedbackSubmissionAction(params) {
  return doRequestAction({
    url: api.feedbackSubmissionUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 帮助中心
function helpAction(page, system) {
  return doRequestAction({
    url: api.helpUrl,
    failToast: true,
    data: {
      page: page,
      system: system
    }
  });
}
// 新闻类型
function newsTypesAction() {
  return doRequestAction({
    url: api.newsTypesUrl,
    failToast: true
  });
}
// 新闻列表
function newListAction(params) {
  return doRequestAction({
    url: api.newListUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 资讯详情
function newsInfoAction(id) {
  return doRequestAction({
    url: api.newsInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      id: id
    }
  });
}
// 排名规则
function resumesSortAction() {
  return doRequestAction({
    url: api.resumesSortUrl,
    method: 'POST',
    failToast: true
  });
}
// 排名规则点击按钮发请求
function resumesAddClickLogAction(type) {
  return doRequestAction({
    url: api.resumesAddClickLog,
    method: 'POST',
    failToast: true,
    data: {
      type: type
    }
  });
}
// 我的信息
function userMessagesAction(type) {
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
function messagesTypeAction(params) {
  return doRequestAction({
    url: api.messagesTypeUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取积分分类
function integralSourceConfigAction(params) {
  return doRequestAction({
    url: api.integralSourceConfigUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分数据
function integralSourceListsAction(params) {
  return doRequestAction({
    url: api.integralSourceListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分消耗
function integralExpendConfigAction() {
  return doRequestAction({
    url: api.integralExpendConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 积分消耗 数量
function integralExpendListsAction(params) {
  return doRequestAction({
    url: api.integralExpendListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 消耗积分弹窗内容
function integralUseInfoAction(logId) {
  return doRequestAction({
    url: api.integralUseInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      logId: logId
    }
  });
}
// 投诉
function publishComplainAction(params) {
  return doRequestAction({
    url: api.publishComplainUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情
function jobInfoAction(params) {
  return doRequestAction({
    url: api.jobInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情，没有用户信息
function jobNoUserInfoAction(params) {
  return doRequestAction({
    url: api.jobNoUserInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取电话号码
function jobGetTelAction(params) {
  return doRequestAction({
    url: api.jobGetTelUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 修改状态
function jobEndStatusAction(infoId) {
  return doRequestAction({
    url: api.jobEndStatusUrl,
    method: 'POST',
    failToast: true,
    data: {
      infoId: infoId
    }
  });
}
// 置顶信息
function jobTopConfigAction() {
  return doRequestAction({
    url: api.jobTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 置顶区域
function jobTopHotAreasAction() {
  return doRequestAction({
    url: api.jobTopHotAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 招工置顶
function jobDoTopAction(detail) {
  return doRequestAction({
    url: api.jobDoTopUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 修改置顶获取数据
function jobGetTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobGetTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 更新招工置顶城市
function jobChangeTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobChangeTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 取消招工置顶
function jobUpdateTopStatusAction(detail) {
  return doRequestAction({
    url: api.jobUpdateTopStatusUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 找活详情
function resumeDetailAction(obj) {
  return doRequestAction({
    url: api.resumeDetailUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情列表
function recommendListAction(obj) {
  return doRequestAction({
    url: api.recommendListUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情查看电话
function resumesGetTelAcrion(obj) {
  return doRequestAction({
    url: api.resumesGetTelUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 赞
function resumeSupportAction(obj) {
  return doRequestAction({
    url: api.resumeSupportUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 分享
function resumeCollectAction(obj) {
  return doRequestAction({
    url: api.resumeCollectUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活名片完善
function resumeListAction() {
  return doRequestAction({
    url: api.resumeListUrl,
    method: 'POST',
    failToast: true
  });
}
// 发布招工信息
function publishRecruitInfo(data) {
  return doRequestAction({
    url: api.PublishRecruitInfo,
    method: 'POST',
    data: data,
    failToast: true
  });
}
// 找活名片推荐
function jobRecommendListAction(data) {
  return doRequestAction({
    url: api.jobRecommendListUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
//删除技能证书
function delCertificateAction(data) {
  return doRequestAction({
    url: api.delCertificateUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 新增技能证书
function resumesCertificateAction(data) {
  return doRequestAction({
    url: api.resumesCertificateUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 新增项目
function resumesProjectAction(data) {
  // 获取用户信息
  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
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
    data: data
  });
}
// 基础信息
function addResumeAction(data) {
  return doRequestAction({
    url: api.addResumeUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 获取当前位置
function checkAdcodeAction(data) {
  return doRequestAction({
    url: api.checkAdcodeUrl,
    method: 'GET',
    failToast: true,
    data: data
  });
}
// 找活页面获取公用数据
function resumesGetDataAction() {
  return doRequestAction({
    url: api.resumesGetDataUrl,
    method: 'POST',
    failToast: true
  });
}
// 人员信息
function resumesIntroduceAction(data) {
  return doRequestAction({
    url: api.resumesIntroduceUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活名片修改状态
function resumesEditEndAction(data) {
  // 获取用户信息
  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
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
    data: data
  });
}
// 删除项目经验
function resumesDelProjectAction(data) {
  return doRequestAction({
    url: api.resumesDelProjectUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活置顶获取省
function resumesTopAreasAction() {
  return doRequestAction({
    url: api.resumesTopAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶内容
function resumesTopConfigAction() {
  return doRequestAction({
    url: api.resumesTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶
function resumesDoTopAction(data) {
  return doRequestAction({
    url: api.resumesDoTopUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活页面置顶修改
function resumesChangeTopStatusAction(data) {
  return doRequestAction({
    url: api.resumesChangeTopStatusUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活名片头像修改
function resumesEditImgAction(data) {
  return doRequestAction({
    url: api.resumesEditImgUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
//找活置顶配置
function resumesTopConfigV2Action(data) {
  return doRequestAction({
    url: api.resumesTopConfigV2Url,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活置顶v2
function resumesDoTopV2Action(data) {
  return doRequestAction({
    url: api.resumesDoTopV2Url,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 修改找活置顶
function resumesUpdateTopResumeAction(data) {
  return doRequestAction({
    url: api.resumesUpdateTopResumeUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活投诉
function resumesComplainAction(data) {
  return doRequestAction({
    url: api.resumesComplainUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 消息推送
function leavingMessageAction(data) {
  return doRequestAction({
    url: api.leavingMessageUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 用户验证码登录
function userAccountLogin(data) {
  return doRequestAction({
    url: api.userAccountUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 用户账号登录
function userTelCodeLogin(data) {
  return doRequestAction({
    url: api.userTelCodeLogin,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 发起抖音支付
function userDouyinRecharge(data) {
  return doRequestAction({
    url: api.userDouyinRecharge,
    method: 'POST',
    data: data
  });
}
// 检测抖音用户是否充值成功
function userCheckDouyinRecharge(data) {
  return doRequestAction({
    url: api.userCheckDouyinRecharge,
    method: 'POST',
    data: data
  });
}
// 用户修改密码
function updataPassword(data) {
  return doRequestAction({
    url: api.updataPassword,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 实名查询
function queryAction(params) {
  return doRequestAction({
    url: api.realnameQueryUrl,
    method: 'POST',
    data: params
  });
}
// 发布找活基本信息 配置项
function getResumeAddInfoConfig() {
  return doRequestAction({
    url: api.getResumeAddInfoConfig,
    method: 'POST'
  });
}
// 排名规则数据
function getRankRulesList() {
  return doRequestAction({
    url: api.getRankRulesList,
    method: 'POST'
  });
}
// 大转盘获取抽奖次数
function turntableIndex() {
  return doRequestAction({
    url: api.turntableIndex,
    method: 'POST',
    title: '正在初始化数据'
  });
}
// 大转盘抽奖
function turntableDraw() {
  return doRequestAction({
    url: api.turntableDraw,
    method: 'POST'
  });
}
// 大转盘看视频结束后的回调
function turntableVideoEnd() {
  return doRequestAction({
    url: api.turntableVideoEnd,
    method: 'POST'
  });
}
// 获取鱼泡币页面大转盘展示控制
function memberTurntable() {
  return doRequestAction({
    url: api.memberTurntable,
    method: 'POST'
  });
}

/***/ }),

/***/ "./src/utils/source/amap-wx.js":
/*!*************************************!*\
  !*** ./src/utils/source/amap-wx.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function AMapWX(a) {
  this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };
}AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({ type: "gcj02", success: function success(a) {
      var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);
    }, fail: function fail(c) {
      wx.getStorage({ key: "userLocation", success: function success(a) {
          a.data && b(a.data);
        } }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });
    } });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        function c(a) {
          var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;
        }var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }function e(e) {
    wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, d, e, f;if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });
            }f = { markers: c, poisData: b.pois }, a.success(f);
          }
        } else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });
  }var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.tips && a.success({ tips: b.data.tips });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });
      }
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.data && a.success({ paths: b.data.data.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "./src/utils/subscribeToNews/index.ts":
/*!********************************************!*\
  !*** ./src/utils/subscribeToNews/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscribeToNews = SubscribeToNews;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../request/index */ "./src/utils/request/index.ts");

var _temp_ids = __webpack_require__(/*! ./temp_ids */ "./src/utils/subscribeToNews/temp_ids.ts");

var _temp_ids2 = _interopRequireDefault(_temp_ids);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 消息推送
function SubscribeToNews(type, callback) {
  if (!_index.USESUBSCRIBEMESSAGE) {
    callback();
    return;
  }
  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
  if (_taroTt2.default.canIUse('requestSubscribeMessage') === true) {
    _taroTt2.default.requestSubscribeMessage({
      tmplIds: [_temp_ids2.default[type].id],
      success: function success(res) {
        callback();
        if (res.errMsg == "requestSubscribeMessage:ok") {
          var status = res[_temp_ids2.default[type].id];
          if (status == "accept") {
            var params = {
              userId: userInfo.userId,
              token: userInfo.token,
              tokenTime: userInfo.tokenTime,
              type: _temp_ids2.default[type].type
            };
            (0, _index2.leavingMessageAction)(params);
          }
        }
      }
    });
  } else {
    callback();
  }
}

/***/ }),

/***/ "./src/utils/subscribeToNews/temp_ids.ts":
/*!***********************************************!*\
  !*** ./src/utils/subscribeToNews/temp_ids.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TmplId = {
  msg: {
    id: "z5y8OFD9gs0SY0sT7FZwiWsrzT3rNp3CJFH7yhv7dUE",
    type: 1
  },
  pay: {
    id: "vpEpkHfo5tlmGB8oZXq-qVU3ySmsxTzPrgNsv_2l6Go",
    type: 0
  },
  complain: {
    id: "uZcoNQz86gAr3P4DYtgt85PnVgMcN_Je27TeHdKhz14",
    type: 5
  },
  auth: {
    id: "6Kda5y-LXhIySRw-ouD94xMnndZplmvfsmmAZ9kbKp4",
    type: 6
  },
  recruit: {
    id: "G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A",
    type: 3
  },
  resume: {
    id: "G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A",
    type: 4
  }
};
exports.default = TmplId;

/***/ }),

/***/ "./src/utils/upload/index.tsx":
/*!************************************!*\
  !*** ./src/utils/upload/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UploadImgAction;
exports.CameraAndAlbum = CameraAndAlbum;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadImgAction() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  var uploadUrl = url || _index.UPLOADIMGURL;
  return new Promise(function (resolve) {
    _taroTt2.default.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        AppUploadImg(resolve, res, uploadUrl);
      }
    });
  });
}
function CameraAndAlbum() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  return new Promise(function (resolve) {
    _taroTt2.default.showActionSheet({
      itemList: ['拍照', '从相册中选择']
    }).then(function (res) {
      var index = res.tapIndex;
      _taroTt2.default.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: index === 0 ? ['camera'] : ['album'],
        success: function success(res) {
          AppUploadImg(resolve, res, url);
        }
      });
    });
  });
}
function AppUploadImg(resolve, res) {
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _index.UPLOADIMGURL;

  var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
  _taroTt2.default.showLoading({ title: '图片上传中' });
  _taroTt2.default.uploadFile({
    url: url,
    filePath: res.tempFilePaths[0],
    header: {
      userid: userInfo ? userInfo.userId : ''
    },
    name: 'file',
    success: function success(response) {
      var mydata = JSON.parse(response.data);
      // let resData = { local: response, remote: mydata}
      _taroTt2.default.showToast({
        title: mydata.errmsg,
        icon: "none",
        duration: 2000
      });
      if (mydata.errcode == "ok") {
        resolve(mydata);
      }
    },

    fail: function fail() {
      _taroTt2.default.showToast({
        title: "网络错误，上传失败！",
        icon: "none",
        duration: 2000
      });
    },
    complete: function complete() {
      _taroTt2.default.hideLoading();
    }
  });
}

/***/ }),

/***/ "./src/utils/v/index.ts":
/*!******************************!*\
  !*** ./src/utils/v/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPhone = isPhone;
exports.isNumber = isNumber;
exports.isVaildNumber = isVaildNumber;
exports.randIntNumber = randIntNumber;
exports.getRandNumber = getRandNumber;
exports.isUrl = isUrl;
exports.isRequire = isRequire;
exports.isVaildVal = isVaildVal;
exports.isIdcard = isIdcard;
exports.isType = isType;
exports.isIos = isIos;
exports.isRequireLen = isRequireLen;
exports.isChinese = isChinese;
exports.allChinese = allChinese;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 是否是电话号码
function isPhone(tel) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(tel);
}
// 是否是数字
/*
 * @Author: zyb
 * @Date: 2020-11-03 09:23:50
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-10 11:53:46
 * @Description:
 */
function isNumber(num) {
  var reg = /^[0-9]+$/;
  return reg.test(num);
}
function isVaildNumber(_ref) {
  var num = _ref.num,
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 10 : _ref$max;

  if (!isNumber(num)) return false;
  return num >= min && num <= max;
}
// 生成区间整数
function randIntNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  return Math.floor(Math.random() * (max - min)) + min;
}
// 生成随机数
function getRandNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  return min + Math.random() * (max - min);
}
// 检测是否是网址
function isUrl(url) {
  var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
  return reg.test(url);
}
// 检测必填
function isRequire(val) {
  var str = val.replace(/\s+/g, '');
  return str != '' && str != null && str != undefined && str != 'null' && str != undefined;
}
// 内容必须有汉字 且不少于 min 字
function isVaildVal(val) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var reg = new RegExp('[\\u4E00-\\u9FFF]+');
  return max ? reg.test(val) && val.length >= min && val.length <= max : reg.test(val) && val.length >= min;
}
// 检测是否是身份证
function isIdcard(val) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
}
// 检测数据类型
function isType(data, type) {
  var reg = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  if (!type) return reg;
  if (reg == type) return true;
  return false;
}
// 检测是否是ios客户端
function isIos() {
  var system = _taroTt2.default.getSystemInfoSync();
  return system.platform === 'ios';
}
//验证必填项且长度
function isRequireLen(str) {
  var _len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

  return str != '' && str != null && str != undefined && str.length >= _len ? true : false;
}
// 含有中文
function isChinese(str) {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+', "g");
  if (reg.test(str)) {
    return true;
  }
  return false;
}
// 2-5汉字
function allChinese(str) {
  var reg = new RegExp('^[\u4E00-\u9FA5]{2,5}$');
  if (reg.test(str)) {
    return true;
  }
  return false;
}

/***/ })

}]);
>>>>>>> 362778e952e4a5aec7044418fb814a231a66c2ce
