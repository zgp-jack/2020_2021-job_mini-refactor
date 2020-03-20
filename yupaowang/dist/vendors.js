<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";e.exports=n(23).default,e.exports.default=e.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.REQUESTURL="https://miniapi.zhaogong.vrtbbs.com/",t.UPLOADIMGURL="https://miniapi.zhaogong.vrtbbs.com/index/upload/",t.IMGCDNURL="http://cdn.yupao.com/miniprogram/images/",t.SERVERPHONE="400-838-1888",t.UNITID="adunit-80f40e8b4f60c3f6",t.VERSION="3.0.0",t.MAPKEY="20f12aae660c04de86f993d3eff590a0",t.TOKEN="jizhao",t.AUTHPATH="/pages/userauth/index",t.PAGETITLE="鱼泡网-",t.MAXCACHECITYNUM=3,t.UserPublishAreaHistoryMaxNum=10},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.doRequestAction=doRequestAction,t.getUserSessionKey=function getUserSessionKey(e){return doRequestAction({"url":r.GetUserSessionKey,"data":{"code":e}})},t.GetUserInfo=function GetUserInfo(e){return doRequestAction({"url":r.GetUserInfo,"data":e})},t.getBannerNotice=function getBannerNotice(){return doRequestAction({"url":r.GetBannerNotice,"loading":!1})},t.getAllListItem=function getAllListItem(e){return doRequestAction({"url":r.GetAllListItem,"data":e})},t.getRecruitList=function getRecruitList(e){return doRequestAction({"url":r.GetRecruitlist,"data":e})},t.getResumeList=function getResumeList(e){return doRequestAction({"url":r.GetResumelist,"data":e})},t.getFleamarketList=function getFleamarketList(e){return doRequestAction({"url":r.GetFleamarketlist,"data":e})},t.getWechatNotice=function getWechatNotice(){return doRequestAction({"url":r.GetWechatNotice,"method":"POST","loading":!1})},t.getListFilterData=function getListFilterData(){return doRequestAction({"url":r.GetListFilterData,"loading":!1})},t.getTabbarMsg=function getTabbarMsg(){return},t.getIntegralList=function getIntegralList(e){return doRequestAction({"url":r.GetIntegralList,"data":e,"method":"POST"})},t.getPublishRecruitView=function getPublishRecruitView(e){return doRequestAction({"url":r.GetPublisRecruitView,"data":e,"method":"POST"})},t.getAllAreas=function getAllAreas(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return doRequestAction({"url":r.GetAllAreas,"loading":e})},t.getHotAreas=function getHotAreas(){},t.checkAdcodeValid=function checkAdcodeValid(e){return doRequestAction({"url":r.CheckAdcodeValid,"method":"POST","data":{"adcode":e}})},t.getUserInviteLink=function getUserInviteLink(){return doRequestAction({"url":r.GetUserInviteLink,"method":"POST","failToast":!0})};var a=_interopRequireDefault(n(0)),r=function _interopRequireWildcard(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(44)),s=n(1),o=_interopRequireDefault(n(7)),c=n(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function requestShowToast(e){e&&setTimeout(function(){(0,o.default)("网络错误，请求失败")},200)}var u={"url":"","method":"GET","header":function getRequestHeaderInfo(){var e=a.default.getStorageSync(c.UserInfo);return e.login?{"content-type":"application/x-www-form-urlencoded","mid":e.userId,"token":e.token,"time":e.tokenTime,"uuid":e.uuid}:{"content-type":"application/x-www-form-urlencoded"}}(),"data":{},"loading":!0,"title":"数据加载中...","failToast":!0};function doRequestAction(e){var r=i({},u,e);r.loading&&a.default.showLoading({"title":r.title});var o=i({},r.data,{"wechat_token":s.TOKEN}),t=a.default.getStorageSync(c.UserInfo);return"POST"===r.method&&t.login&&(o.userId=t.userId,o.token=t.token,o.tokenTime=t.tokenTime),new Promise(function(t,n){a.default.request({"url":(/^http(s?):\/\//.test(r.url),r.url),"method":r.method,"header":r.header,"data":o,"success":function success(e){200===e.statusCode?t(e.data):(requestShowToast(r.failToast),n(e))},"fail":function fail(e){requestShowToast(r.failToast),n(e)},"complete":function complete(){r.loading&&a.default.hideLoading()}})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.UserInfo="userInfo",t.Areas="areaData",t.HistoryCities="historyCities",t.UserLocationCity="userLocationCity",t.UserListChooseCity="userListChooseCity",t.UserLastPublishArea="userLastPublishArea",t.UserPublishAreaHistory="userPublishAreaHistory"},function(e,t,n){"use strict";e.exports=n(26).default,e.exports.default=e.exports},function(e,t,n){"use strict";var r,a,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":s(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=classNames.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}a={}.hasOwnProperty,e.exports?(classNames.default=classNames,e.exports=classNames):"object"===s(n(20))&&n(20)?void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r):window.classNames=classNames},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function Msg(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1500;s.default.showToast({"title":e,"icon":"none","duration":t})},t.ShowActionModel=function ShowActionModel(e){var t=e.title,n=void 0===t?"温馨提示":t,r=e.confirmText,o=void 0===r?"确定":r,i=e.msg,a=e.success;s.default.showModal({"title":n,"content":"string"==typeof e?e:i,"showCancel":!1,"confirmText":o,"success":function success(){a&&a()}})},t.errMsg=function errMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"error"})},t.warnMsg=function warnMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"warning"})},t.successMsg=function successMsg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";s.default.atMessage({"message":e,"type":"success"})};var s=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.getCityInfo=function getCityInfo(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=v.length,r=!1;if(e){var o=v.filter(function(e){return-1!==t.city.indexOf(e.name)});if(o.length)return o[0];for(var i=0;i<n;i++){var a=v[i];if(a.has_children){for(var s=a.children,c=s.length,u=0;u<c;u++){var d=s[u];if(-1!==t.city.indexOf(d.name))return r=!0,d}if(r)break}}}else{var l=v.filter(function(e){return-1!==t.province.indexOf(e.name)});if(l.length)return l[0];for(var f=0;f<n;f++){var p=v[f];if(p.has_children){for(var m=p.children,h=m.length,y=0;y<h;y++){var g=m[y];if(-1!==t.city.indexOf(g.name)){var _={"id":p.id,"pid":p.pid,"ad_name":p.ad_name,"name":p.name};return r=!0,_}}if(r)break}}}return e?S:b};var v=[{"id":"1","pid":"0","name":"全国","ad_name":"中国","has_children":0,"children":[]},{"id":"2","pid":"1","name":"北京","ad_name":"北京市","has_children":0,"children":[]},{"id":"3","pid":"1","name":"安徽","ad_name":"安徽省","has_children":1,"children":[{"id":"3","pid":"1","name":"安徽","ad_name":"安徽省"},{"id":"36","pid":"3","name":"安庆","ad_name":"安庆市"},{"id":"37","pid":"3","name":"蚌埠","ad_name":"蚌埠市"},{"id":"39","pid":"3","name":"池州","ad_name":"池州市"},{"id":"40","pid":"3","name":"滁州","ad_name":"滁州市"},{"id":"41","pid":"3","name":"阜阳","ad_name":"阜阳市"},{"id":"42","pid":"3","name":"淮北","ad_name":"淮北市"},{"id":"43","pid":"3","name":"淮南","ad_name":"淮南市"},{"id":"44","pid":"3","name":"黄山","ad_name":"黄山市"},{"id":"45","pid":"3","name":"六安","ad_name":"六安市"},{"id":"46","pid":"3","name":"马鞍山","ad_name":"马鞍山市"},{"id":"47","pid":"3","name":"宿州","ad_name":"宿州市"},{"id":"48","pid":"3","name":"铜陵","ad_name":"铜陵市"},{"id":"49","pid":"3","name":"芜湖","ad_name":"芜湖市"},{"id":"50","pid":"3","name":"宣城","ad_name":"宣城市"},{"id":"51","pid":"3","name":"亳州","ad_name":"亳州市"},{"id":"3401","pid":"3","name":"合肥","ad_name":"合肥市"}]},{"id":"4","pid":"1","name":"福建","ad_name":"福建省","has_children":1,"children":[{"id":"4","pid":"1","name":"福建","ad_name":"福建省"},{"id":"53","pid":"4","name":"福州","ad_name":"福州市"},{"id":"54","pid":"4","name":"龙岩","ad_name":"龙岩市"},{"id":"55","pid":"4","name":"南平","ad_name":"南平市"},{"id":"56","pid":"4","name":"宁德","ad_name":"宁德市"},{"id":"57","pid":"4","name":"莆田","ad_name":"莆田市"},{"id":"58","pid":"4","name":"泉州","ad_name":"泉州市"},{"id":"59","pid":"4","name":"三明","ad_name":"三明市"},{"id":"60","pid":"4","name":"厦门","ad_name":"厦门市"},{"id":"61","pid":"4","name":"漳州","ad_name":"漳州市"}]},{"id":"5","pid":"1","name":"甘肃","ad_name":"甘肃省","has_children":1,"children":[{"id":"5","pid":"1","name":"甘肃","ad_name":"甘肃省"},{"id":"62","pid":"5","name":"兰州","ad_name":"兰州市"},{"id":"63","pid":"5","name":"白银","ad_name":"白银市"},{"id":"64","pid":"5","name":"定西","ad_name":"定西市"},{"id":"65","pid":"5","name":"甘南","ad_name":"甘南藏族自治州"},{"id":"66","pid":"5","name":"嘉峪关","ad_name":"嘉峪关市"},{"id":"67","pid":"5","name":"金昌","ad_name":"金昌市"},{"id":"68","pid":"5","name":"酒泉","ad_name":"酒泉市"},{"id":"69","pid":"5","name":"临夏","ad_name":"临夏回族自治州"},{"id":"70","pid":"5","name":"陇南","ad_name":"陇南市"},{"id":"71","pid":"5","name":"平凉","ad_name":"平凉市"},{"id":"72","pid":"5","name":"庆阳","ad_name":"庆阳市"},{"id":"73","pid":"5","name":"天水","ad_name":"天水市"},{"id":"74","pid":"5","name":"武威","ad_name":"武威市"},{"id":"75","pid":"5","name":"张掖","ad_name":"张掖市"}]},{"id":"6","pid":"1","name":"广东","ad_name":"广东省","has_children":1,"children":[{"id":"6","pid":"1","name":"广东","ad_name":"广东省"},{"id":"76","pid":"6","name":"广州","ad_name":"广州市"},{"id":"77","pid":"6","name":"深圳","ad_name":"深圳市"},{"id":"78","pid":"6","name":"潮州","ad_name":"潮州市"},{"id":"79","pid":"6","name":"东莞","ad_name":"东莞市"},{"id":"80","pid":"6","name":"佛山","ad_name":"佛山市"},{"id":"81","pid":"6","name":"河源","ad_name":"河源市"},{"id":"82","pid":"6","name":"惠州","ad_name":"惠州市"},{"id":"83","pid":"6","name":"江门","ad_name":"江门市"},{"id":"84","pid":"6","name":"揭阳","ad_name":"揭阳市"},{"id":"85","pid":"6","name":"茂名","ad_name":"茂名市"},{"id":"86","pid":"6","name":"梅州","ad_name":"梅州市"},{"id":"87","pid":"6","name":"清远","ad_name":"清远市"},{"id":"88","pid":"6","name":"汕头","ad_name":"汕头市"},{"id":"89","pid":"6","name":"汕尾","ad_name":"汕尾市"},{"id":"90","pid":"6","name":"韶关","ad_name":"韶关市"},{"id":"91","pid":"6","name":"阳江","ad_name":"阳江市"},{"id":"92","pid":"6","name":"云浮","ad_name":"云浮市"},{"id":"93","pid":"6","name":"湛江","ad_name":"湛江市"},{"id":"94","pid":"6","name":"肇庆","ad_name":"肇庆市"},{"id":"95","pid":"6","name":"中山","ad_name":"中山市"},{"id":"96","pid":"6","name":"珠海","ad_name":"珠海市"}]},{"id":"7","pid":"1","name":"广西","ad_name":"广西壮族自治区","has_children":1,"children":[{"id":"7","pid":"1","name":"广西","ad_name":"广西壮族自治区"},{"id":"97","pid":"7","name":"南宁","ad_name":"南宁市"},{"id":"98","pid":"7","name":"桂林","ad_name":"桂林市"},{"id":"99","pid":"7","name":"百色","ad_name":"百色市"},{"id":"100","pid":"7","name":"北海","ad_name":"北海市"},{"id":"101","pid":"7","name":"崇左","ad_name":"崇左市"},{"id":"102","pid":"7","name":"防城港","ad_name":"防城港市"},{"id":"103","pid":"7","name":"贵港","ad_name":"贵港市"},{"id":"104","pid":"7","name":"河池","ad_name":"河池市"},{"id":"105","pid":"7","name":"贺州","ad_name":"贺州市"},{"id":"106","pid":"7","name":"来宾","ad_name":"来宾市"},{"id":"107","pid":"7","name":"柳州","ad_name":"柳州市"},{"id":"108","pid":"7","name":"钦州","ad_name":"钦州市"},{"id":"109","pid":"7","name":"梧州","ad_name":"梧州市"},{"id":"110","pid":"7","name":"玉林","ad_name":"玉林市"}]},{"id":"8","pid":"1","name":"贵州","ad_name":"贵州省","has_children":1,"children":[{"id":"8","pid":"1","name":"贵州","ad_name":"贵州省"},{"id":"111","pid":"8","name":"贵阳","ad_name":"贵阳市"},{"id":"112","pid":"8","name":"安顺","ad_name":"安顺市"},{"id":"113","pid":"8","name":"毕节","ad_name":"毕节市"},{"id":"114","pid":"8","name":"六盘水","ad_name":"六盘水市"},{"id":"115","pid":"8","name":"黔东南","ad_name":"黔东南苗族侗族自治州"},{"id":"116","pid":"8","name":"黔南","ad_name":"黔南布依族苗族自治州"},{"id":"117","pid":"8","name":"黔西南","ad_name":"黔西南布依族苗族自治州"},{"id":"118","pid":"8","name":"铜仁","ad_name":"铜仁市"},{"id":"119","pid":"8","name":"遵义","ad_name":"遵义市"}]},{"id":"9","pid":"1","name":"海南","ad_name":"海南省","has_children":1,"children":[{"id":"9","pid":"1","name":"海南","ad_name":"海南省"},{"id":"120","pid":"9","name":"海口","ad_name":"海口市"},{"id":"121","pid":"9","name":"三亚","ad_name":"三亚市"},{"id":"122","pid":"9","name":"白沙","ad_name":"白沙黎族自治县"},{"id":"123","pid":"9","name":"保亭","ad_name":"保亭黎族苗族自治县"},{"id":"124","pid":"9","name":"昌江","ad_name":"昌江"},{"id":"125","pid":"9","name":"澄迈县","ad_name":"澄迈县"},{"id":"126","pid":"9","name":"定安县","ad_name":"定安县"},{"id":"127","pid":"9","name":"东方","ad_name":"东方市"},{"id":"128","pid":"9","name":"乐东","ad_name":"乐东黎族自治县"},{"id":"129","pid":"9","name":"临高县","ad_name":"临高县"},{"id":"130","pid":"9","name":"陵水","ad_name":"陵水黎族自治县"},{"id":"131","pid":"9","name":"琼海","ad_name":"琼海市"},{"id":"132","pid":"9","name":"琼中","ad_name":"琼中黎族苗族自治县"},{"id":"133","pid":"9","name":"屯昌县","ad_name":"屯昌县"},{"id":"134","pid":"9","name":"万宁","ad_name":"万宁市"},{"id":"135","pid":"9","name":"文昌","ad_name":"文昌市"},{"id":"136","pid":"9","name":"五指山","ad_name":"五指山市"},{"id":"137","pid":"9","name":"儋州","ad_name":"儋州市"}]},{"id":"10","pid":"1","name":"河北","ad_name":"河北省","has_children":1,"children":[{"id":"10","pid":"1","name":"河北","ad_name":"河北省"},{"id":"138","pid":"10","name":"石家庄","ad_name":"石家庄市"},{"id":"139","pid":"10","name":"保定","ad_name":"保定市"},{"id":"140","pid":"10","name":"沧州","ad_name":"沧州市"},{"id":"141","pid":"10","name":"承德","ad_name":"承德市"},{"id":"142","pid":"10","name":"邯郸","ad_name":"邯郸市"},{"id":"143","pid":"10","name":"衡水","ad_name":"衡水市"},{"id":"144","pid":"10","name":"廊坊","ad_name":"廊坊市"},{"id":"145","pid":"10","name":"秦皇岛","ad_name":"秦皇岛市"},{"id":"146","pid":"10","name":"唐山","ad_name":"唐山市"},{"id":"147","pid":"10","name":"邢台","ad_name":"邢台市"},{"id":"148","pid":"10","name":"张家口","ad_name":"张家口市"}]},{"id":"11","pid":"1","name":"河南","ad_name":"河南省","has_children":1,"children":[{"id":"11","pid":"1","name":"河南","ad_name":"河南省"},{"id":"149","pid":"11","name":"郑州","ad_name":"郑州市"},{"id":"150","pid":"11","name":"洛阳","ad_name":"洛阳市"},{"id":"151","pid":"11","name":"开封","ad_name":"开封市"},{"id":"152","pid":"11","name":"安阳","ad_name":"安阳市"},{"id":"153","pid":"11","name":"鹤壁","ad_name":"鹤壁市"},{"id":"154","pid":"11","name":"济源","ad_name":"济源市"},{"id":"155","pid":"11","name":"焦作","ad_name":"焦作市"},{"id":"156","pid":"11","name":"南阳","ad_name":"南阳市"},{"id":"157","pid":"11","name":"平顶山","ad_name":"平顶山市"},{"id":"158","pid":"11","name":"三门峡","ad_name":"三门峡市"},{"id":"159","pid":"11","name":"商丘","ad_name":"商丘市"},{"id":"160","pid":"11","name":"新乡","ad_name":"新乡市"},{"id":"161","pid":"11","name":"信阳","ad_name":"信阳市"},{"id":"162","pid":"11","name":"许昌","ad_name":"许昌市"},{"id":"163","pid":"11","name":"周口","ad_name":"周口市"},{"id":"164","pid":"11","name":"驻马店","ad_name":"驻马店市"},{"id":"165","pid":"11","name":"漯河","ad_name":"漯河市"},{"id":"166","pid":"11","name":"濮阳","ad_name":"濮阳市"}]},{"id":"12","pid":"1","name":"黑龙江","ad_name":"黑龙江省","has_children":1,"children":[{"id":"12","pid":"1","name":"黑龙江","ad_name":"黑龙江省"},{"id":"167","pid":"12","name":"哈尔滨","ad_name":"哈尔滨市"},{"id":"168","pid":"12","name":"大庆","ad_name":"大庆市"},{"id":"169","pid":"12","name":"大兴安岭","ad_name":"大兴安岭地区"},{"id":"170","pid":"12","name":"鹤岗","ad_name":"鹤岗市"},{"id":"171","pid":"12","name":"黑河","ad_name":"黑河市"},{"id":"172","pid":"12","name":"鸡西","ad_name":"鸡西市"},{"id":"173","pid":"12","name":"佳木斯","ad_name":"佳木斯市"},{"id":"174","pid":"12","name":"牡丹江","ad_name":"牡丹江市"},{"id":"175","pid":"12","name":"七台河","ad_name":"七台河市"},{"id":"176","pid":"12","name":"齐齐哈尔","ad_name":"齐齐哈尔市"},{"id":"177","pid":"12","name":"双鸭山","ad_name":"双鸭山市"},{"id":"178","pid":"12","name":"绥化","ad_name":"绥化市"},{"id":"179","pid":"12","name":"伊春","ad_name":"伊春市"}]},{"id":"13","pid":"1","name":"湖北","ad_name":"湖北省","has_children":1,"children":[{"id":"13","pid":"1","name":"湖北","ad_name":"湖北省"},{"id":"180","pid":"13","name":"武汉","ad_name":"武汉市"},{"id":"181","pid":"13","name":"仙桃","ad_name":"仙桃市"},{"id":"182","pid":"13","name":"鄂州","ad_name":"鄂州市"},{"id":"183","pid":"13","name":"黄冈","ad_name":"黄冈市"},{"id":"184","pid":"13","name":"黄石","ad_name":"黄石市"},{"id":"185","pid":"13","name":"荆门","ad_name":"荆门市"},{"id":"186","pid":"13","name":"荆州","ad_name":"荆州市"},{"id":"187","pid":"13","name":"潜江","ad_name":"潜江市"},{"id":"188","pid":"13","name":"神农架林区","ad_name":"神农架林区"},{"id":"189","pid":"13","name":"十堰","ad_name":"十堰市"},{"id":"190","pid":"13","name":"随州","ad_name":"随州市"},{"id":"191","pid":"13","name":"天门","ad_name":"天门市"},{"id":"192","pid":"13","name":"咸宁","ad_name":"咸宁市"},{"id":"193","pid":"13","name":"襄阳","ad_name":"襄阳市"},{"id":"194","pid":"13","name":"孝感","ad_name":"孝感市"},{"id":"195","pid":"13","name":"宜昌","ad_name":"宜昌市"},{"id":"196","pid":"13","name":"恩施","ad_name":"恩施"}]},{"id":"14","pid":"1","name":"湖南","ad_name":"湖南省","has_children":1,"children":[{"id":"14","pid":"1","name":"湖南","ad_name":"湖南省"},{"id":"197","pid":"14","name":"长沙","ad_name":"长沙市"},{"id":"198","pid":"14","name":"张家界","ad_name":"张家界市"},{"id":"199","pid":"14","name":"常德","ad_name":"常德市"},{"id":"200","pid":"14","name":"郴州","ad_name":"郴州市"},{"id":"201","pid":"14","name":"衡阳","ad_name":"衡阳市"},{"id":"202","pid":"14","name":"怀化","ad_name":"怀化市"},{"id":"203","pid":"14","name":"娄底","ad_name":"娄底市"},{"id":"204","pid":"14","name":"邵阳","ad_name":"邵阳市"},{"id":"205","pid":"14","name":"湘潭","ad_name":"湘潭市"},{"id":"206","pid":"14","name":"湘西","ad_name":"湘西土家族苗族自治州"},{"id":"207","pid":"14","name":"益阳","ad_name":"益阳市"},{"id":"208","pid":"14","name":"永州","ad_name":"永州市"},{"id":"209","pid":"14","name":"岳阳","ad_name":"岳阳市"},{"id":"210","pid":"14","name":"株洲","ad_name":"株洲市"}]},{"id":"15","pid":"1","name":"吉林","ad_name":"吉林省","has_children":1,"children":[{"id":"15","pid":"1","name":"吉林","ad_name":"吉林省"},{"id":"211","pid":"15","name":"长春","ad_name":"长春市"},{"id":"212","pid":"15","name":"吉林","ad_name":"吉林市"},{"id":"213","pid":"15","name":"白城","ad_name":"白城市"},{"id":"214","pid":"15","name":"白山","ad_name":"白山市"},{"id":"215","pid":"15","name":"辽源","ad_name":"辽源市"},{"id":"216","pid":"15","name":"四平","ad_name":"四平市"},{"id":"217","pid":"15","name":"松原","ad_name":"松原市"},{"id":"218","pid":"15","name":"通化","ad_name":"通化市"},{"id":"219","pid":"15","name":"延边","ad_name":"延边朝鲜族自治州"}]},{"id":"16","pid":"1","name":"江苏","ad_name":"江苏省","has_children":1,"children":[{"id":"16","pid":"1","name":"江苏","ad_name":"江苏省"},{"id":"220","pid":"16","name":"南京","ad_name":"南京市"},{"id":"221","pid":"16","name":"苏州","ad_name":"苏州市"},{"id":"222","pid":"16","name":"无锡","ad_name":"无锡市"},{"id":"223","pid":"16","name":"常州","ad_name":"常州市"},{"id":"224","pid":"16","name":"淮安","ad_name":"淮安市"},{"id":"225","pid":"16","name":"连云港","ad_name":"连云港市"},{"id":"226","pid":"16","name":"南通","ad_name":"南通市"},{"id":"227","pid":"16","name":"宿迁","ad_name":"宿迁市"},{"id":"228","pid":"16","name":"泰州","ad_name":"泰州市"},{"id":"229","pid":"16","name":"徐州","ad_name":"徐州市"},{"id":"230","pid":"16","name":"盐城","ad_name":"盐城市"},{"id":"231","pid":"16","name":"扬州","ad_name":"扬州市"},{"id":"232","pid":"16","name":"镇江","ad_name":"镇江市"}]},{"id":"17","pid":"1","name":"江西","ad_name":"江西省","has_children":1,"children":[{"id":"17","pid":"1","name":"江西","ad_name":"江西省"},{"id":"233","pid":"17","name":"南昌","ad_name":"南昌市"},{"id":"234","pid":"17","name":"抚州","ad_name":"抚州市"},{"id":"235","pid":"17","name":"赣州","ad_name":"赣州市"},{"id":"236","pid":"17","name":"吉安","ad_name":"吉安市"},{"id":"237","pid":"17","name":"景德镇","ad_name":"景德镇市"},{"id":"238","pid":"17","name":"九江","ad_name":"九江市"},{"id":"239","pid":"17","name":"萍乡","ad_name":"萍乡市"},{"id":"240","pid":"17","name":"上饶","ad_name":"上饶市"},{"id":"241","pid":"17","name":"新余","ad_name":"新余市"},{"id":"242","pid":"17","name":"宜春","ad_name":"宜春市"},{"id":"243","pid":"17","name":"鹰潭","ad_name":"鹰潭市"}]},{"id":"18","pid":"1","name":"辽宁","ad_name":"辽宁省","has_children":1,"children":[{"id":"18","pid":"1","name":"辽宁","ad_name":"辽宁省"},{"id":"244","pid":"18","name":"沈阳","ad_name":"沈阳市"},{"id":"245","pid":"18","name":"大连","ad_name":"大连市"},{"id":"246","pid":"18","name":"鞍山","ad_name":"鞍山市"},{"id":"247","pid":"18","name":"本溪","ad_name":"本溪市"},{"id":"248","pid":"18","name":"朝阳","ad_name":"朝阳市"},{"id":"249","pid":"18","name":"丹东","ad_name":"丹东市"},{"id":"250","pid":"18","name":"抚顺","ad_name":"抚顺市"},{"id":"251","pid":"18","name":"阜新","ad_name":"阜新市"},{"id":"252","pid":"18","name":"葫芦岛","ad_name":"葫芦岛市"},{"id":"253","pid":"18","name":"锦州","ad_name":"锦州市"},{"id":"254","pid":"18","name":"辽阳","ad_name":"辽阳市"},{"id":"255","pid":"18","name":"盘锦","ad_name":"盘锦市"},{"id":"256","pid":"18","name":"铁岭","ad_name":"铁岭市"},{"id":"257","pid":"18","name":"营口","ad_name":"营口市"}]},{"id":"19","pid":"1","name":"内蒙古","ad_name":"内蒙古自治区","has_children":1,"children":[{"id":"19","pid":"1","name":"内蒙古","ad_name":"内蒙古自治区"},{"id":"258","pid":"19","name":"呼和浩特","ad_name":"呼和浩特市"},{"id":"259","pid":"19","name":"阿拉善盟","ad_name":"阿拉善盟"},{"id":"260","pid":"19","name":"巴彦淖尔盟","ad_name":"巴彦淖尔市"},{"id":"261","pid":"19","name":"包头","ad_name":"包头市"},{"id":"262","pid":"19","name":"赤峰","ad_name":"赤峰市"},{"id":"263","pid":"19","name":"鄂尔多斯","ad_name":"鄂尔多斯市"},{"id":"264","pid":"19","name":"呼伦贝尔","ad_name":"呼伦贝尔市"},{"id":"265","pid":"19","name":"通辽","ad_name":"通辽市"},{"id":"266","pid":"19","name":"乌海","ad_name":"乌海市"},{"id":"267","pid":"19","name":"乌兰察布市","ad_name":"乌兰察布市"},{"id":"268","pid":"19","name":"锡林郭勒盟","ad_name":"锡林郭勒盟"},{"id":"269","pid":"19","name":"兴安盟","ad_name":"兴安盟"}]},{"id":"20","pid":"1","name":"宁夏","ad_name":"宁夏回族自治区","has_children":1,"children":[{"id":"20","pid":"1","name":"宁夏","ad_name":"宁夏回族自治区"},{"id":"270","pid":"20","name":"银川","ad_name":"银川市"},{"id":"271","pid":"20","name":"固原","ad_name":"固原市"},{"id":"272","pid":"20","name":"石嘴山","ad_name":"石嘴山市"},{"id":"273","pid":"20","name":"吴忠","ad_name":"吴忠市"},{"id":"274","pid":"20","name":"中卫","ad_name":"中卫市"}]},{"id":"21","pid":"1","name":"青海","ad_name":"青海省","has_children":1,"children":[{"id":"21","pid":"1","name":"青海","ad_name":"青海省"},{"id":"275","pid":"21","name":"西宁","ad_name":"西宁市"},{"id":"276","pid":"21","name":"果洛","ad_name":"果洛藏族自治州"},{"id":"277","pid":"21","name":"海北","ad_name":"海北藏族自治州"},{"id":"278","pid":"21","name":"海东","ad_name":"海东市"},{"id":"279","pid":"21","name":"海南","ad_name":"海南藏族自治州"},{"id":"280","pid":"21","name":"海西","ad_name":"海西蒙古族藏族自治州"},{"id":"281","pid":"21","name":"黄南","ad_name":"黄南藏族自治州"},{"id":"282","pid":"21","name":"玉树","ad_name":"玉树"}]},{"id":"22","pid":"1","name":"山东","ad_name":"山东省","has_children":1,"children":[{"id":"22","pid":"1","name":"山东","ad_name":"山东省"},{"id":"283","pid":"22","name":"济南","ad_name":"济南市"},{"id":"284","pid":"22","name":"青岛","ad_name":"青岛市"},{"id":"285","pid":"22","name":"滨州","ad_name":"滨州市"},{"id":"286","pid":"22","name":"德州","ad_name":"德州市"},{"id":"287","pid":"22","name":"东营","ad_name":"东营市"},{"id":"288","pid":"22","name":"菏泽","ad_name":"菏泽市"},{"id":"289","pid":"22","name":"济宁","ad_name":"济宁市"},{"id":"291","pid":"22","name":"聊城","ad_name":"聊城市"},{"id":"292","pid":"22","name":"临沂","ad_name":"临沂市"},{"id":"293","pid":"22","name":"日照","ad_name":"日照市"},{"id":"294","pid":"22","name":"泰安","ad_name":"泰安市"},{"id":"295","pid":"22","name":"威海","ad_name":"威海市"},{"id":"296","pid":"22","name":"潍坊","ad_name":"潍坊市"},{"id":"297","pid":"22","name":"烟台","ad_name":"烟台市"},{"id":"298","pid":"22","name":"枣庄","ad_name":"枣庄市"},{"id":"299","pid":"22","name":"淄博","ad_name":"淄博市"}]},{"id":"23","pid":"1","name":"山西","ad_name":"山西省","has_children":1,"children":[{"id":"23","pid":"1","name":"山西","ad_name":"山西省"},{"id":"300","pid":"23","name":"太原","ad_name":"太原市"},{"id":"301","pid":"23","name":"长治","ad_name":"长治市"},{"id":"302","pid":"23","name":"大同","ad_name":"大同市"},{"id":"303","pid":"23","name":"晋城","ad_name":"晋城市"},{"id":"304","pid":"23","name":"晋中","ad_name":"晋中市"},{"id":"305","pid":"23","name":"临汾","ad_name":"临汾市"},{"id":"306","pid":"23","name":"吕梁","ad_name":"吕梁市"},{"id":"307","pid":"23","name":"朔州","ad_name":"朔州市"},{"id":"308","pid":"23","name":"忻州","ad_name":"忻州市"},{"id":"309","pid":"23","name":"阳泉","ad_name":"阳泉市"},{"id":"310","pid":"23","name":"运城","ad_name":"运城市"}]},{"id":"24","pid":"1","name":"陕西","ad_name":"陕西省","has_children":1,"children":[{"id":"24","pid":"1","name":"陕西","ad_name":"陕西省"},{"id":"311","pid":"24","name":"西安","ad_name":"西安市"},{"id":"312","pid":"24","name":"安康","ad_name":"安康市"},{"id":"313","pid":"24","name":"宝鸡","ad_name":"宝鸡市"},{"id":"314","pid":"24","name":"汉中","ad_name":"汉中市"},{"id":"315","pid":"24","name":"商洛","ad_name":"商洛市"},{"id":"316","pid":"24","name":"铜川","ad_name":"铜川市"},{"id":"317","pid":"24","name":"渭南","ad_name":"渭南市"},{"id":"318","pid":"24","name":"咸阳","ad_name":"咸阳市"},{"id":"319","pid":"24","name":"延安","ad_name":"延安市"},{"id":"320","pid":"24","name":"榆林","ad_name":"榆林市"}]},{"id":"25","pid":"1","name":"上海","ad_name":"上海市","has_children":0,"children":[]},{"id":"26","pid":"1","name":"四川","ad_name":"四川省","has_children":1,"children":[{"id":"26","pid":"1","name":"四川","ad_name":"四川省"},{"id":"322","pid":"26","name":"成都","ad_name":"成都市"},{"id":"323","pid":"26","name":"绵阳","ad_name":"绵阳市"},{"id":"324","pid":"26","name":"阿坝","ad_name":"阿坝藏族羌族自治州"},{"id":"325","pid":"26","name":"巴中","ad_name":"巴中市"},{"id":"326","pid":"26","name":"达州","ad_name":"达州市"},{"id":"327","pid":"26","name":"德阳","ad_name":"德阳市"},{"id":"328","pid":"26","name":"甘孜","ad_name":"甘孜藏族自治州"},{"id":"329","pid":"26","name":"广安","ad_name":"广安市"},{"id":"330","pid":"26","name":"广元","ad_name":"广元市"},{"id":"331","pid":"26","name":"乐山","ad_name":"乐山市"},{"id":"332","pid":"26","name":"凉山","ad_name":"凉山彝族自治州"},{"id":"333","pid":"26","name":"眉山","ad_name":"眉山市"},{"id":"334","pid":"26","name":"南充","ad_name":"南充市"},{"id":"335","pid":"26","name":"内江","ad_name":"内江市"},{"id":"336","pid":"26","name":"攀枝花","ad_name":"攀枝花市"},{"id":"337","pid":"26","name":"遂宁","ad_name":"遂宁市"},{"id":"338","pid":"26","name":"雅安","ad_name":"雅安市"},{"id":"339","pid":"26","name":"宜宾","ad_name":"宜宾市"},{"id":"340","pid":"26","name":"资阳","ad_name":"资阳市"},{"id":"341","pid":"26","name":"自贡","ad_name":"自贡市"},{"id":"342","pid":"26","name":"泸州","ad_name":"泸州市"}]},{"id":"27","pid":"1","name":"天津","ad_name":"天津市","has_children":0,"children":[]},{"id":"28","pid":"1","name":"西藏","ad_name":"西藏自治区","has_children":1,"children":[{"id":"28","pid":"1","name":"西藏","ad_name":"西藏自治区"},{"id":"344","pid":"28","name":"拉萨","ad_name":"拉萨市"},{"id":"345","pid":"28","name":"阿里","ad_name":"阿里地区"},{"id":"346","pid":"28","name":"昌都","ad_name":"昌都市"},{"id":"347","pid":"28","name":"林芝","ad_name":"林芝市"},{"id":"348","pid":"28","name":"那曲","ad_name":"那曲市"},{"id":"349","pid":"28","name":"日喀则","ad_name":"日喀则市"},{"id":"350","pid":"28","name":"山南","ad_name":"山南市"}]},{"id":"29","pid":"1","name":"新疆","ad_name":"新疆维吾尔自治区","has_children":1,"children":[{"id":"29","pid":"1","name":"新疆","ad_name":"新疆维吾尔自治区"},{"id":"351","pid":"29","name":"乌鲁木齐","ad_name":"乌鲁木齐市"},{"id":"352","pid":"29","name":"阿克苏","ad_name":"阿克苏地区"},{"id":"353","pid":"29","name":"阿拉尔","ad_name":"阿拉尔市"},{"id":"354","pid":"29","name":"巴音郭楞","ad_name":"巴音郭楞蒙古自治州"},{"id":"355","pid":"29","name":"博尔塔拉","ad_name":"博尔塔拉蒙古自治州"},{"id":"356","pid":"29","name":"昌吉","ad_name":"昌吉回族自治州"},{"id":"357","pid":"29","name":"哈密","ad_name":"哈密市"},{"id":"358","pid":"29","name":"和田","ad_name":"和田地区"},{"id":"359","pid":"29","name":"喀什","ad_name":"喀什地区"},{"id":"360","pid":"29","name":"克拉玛依","ad_name":"克拉玛依市"},{"id":"361","pid":"29","name":"克孜勒苏","ad_name":"克孜勒苏柯尔克孜自治州"},{"id":"362","pid":"29","name":"石河子","ad_name":"石河子市"},{"id":"363","pid":"29","name":"图木舒克","ad_name":"图木舒克市"},{"id":"364","pid":"29","name":"吐鲁番","ad_name":"吐鲁番市"},{"id":"365","pid":"29","name":"五家渠","ad_name":"五家渠市"},{"id":"366","pid":"29","name":"伊犁","ad_name":"伊犁哈萨克自治州"},{"id":"6156","pid":"29","name":"塔城地区","ad_name":"塔城地区"},{"id":"6157","pid":"29","name":"阿勒泰地区","ad_name":"阿勒泰地区"}]},{"id":"30","pid":"1","name":"云南","ad_name":"云南省","has_children":1,"children":[{"id":"30","pid":"1","name":"云南","ad_name":"云南省"},{"id":"367","pid":"30","name":"昆明","ad_name":"昆明市"},{"id":"368","pid":"30","name":"怒江","ad_name":"怒江"},{"id":"369","pid":"30","name":"普洱","ad_name":"普洱市"},{"id":"370","pid":"30","name":"丽江","ad_name":"丽江市"},{"id":"371","pid":"30","name":"保山","ad_name":"保山市"},{"id":"372","pid":"30","name":"楚雄","ad_name":"楚雄彝族自治州"},{"id":"373","pid":"30","name":"大理","ad_name":"大理白族自治州"},{"id":"374","pid":"30","name":"德宏","ad_name":"德宏傣族景颇族自治州"},{"id":"375","pid":"30","name":"迪庆","ad_name":"迪庆藏族自治州"},{"id":"376","pid":"30","name":"红河","ad_name":"红河哈尼族彝族自治州"},{"id":"377","pid":"30","name":"临沧","ad_name":"临沧市"},{"id":"378","pid":"30","name":"曲靖","ad_name":"曲靖市"},{"id":"379","pid":"30","name":"文山","ad_name":"文山壮族苗族自治州"},{"id":"380","pid":"30","name":"西双版纳","ad_name":"西双版纳傣族自治州"},{"id":"381","pid":"30","name":"玉溪","ad_name":"玉溪市"},{"id":"382","pid":"30","name":"昭通","ad_name":"昭通市"}]},{"id":"31","pid":"1","name":"浙江","ad_name":"浙江省","has_children":1,"children":[{"id":"31","pid":"1","name":"浙江","ad_name":"浙江省"},{"id":"383","pid":"31","name":"杭州","ad_name":"杭州市"},{"id":"384","pid":"31","name":"湖州","ad_name":"湖州市"},{"id":"385","pid":"31","name":"嘉兴","ad_name":"嘉兴市"},{"id":"386","pid":"31","name":"金华","ad_name":"金华市"},{"id":"387","pid":"31","name":"丽水","ad_name":"丽水市"},{"id":"388","pid":"31","name":"宁波","ad_name":"宁波市"},{"id":"389","pid":"31","name":"绍兴","ad_name":"绍兴市"},{"id":"390","pid":"31","name":"台州","ad_name":"台州市"},{"id":"391","pid":"31","name":"温州","ad_name":"温州市"},{"id":"392","pid":"31","name":"舟山","ad_name":"舟山市"},{"id":"393","pid":"31","name":"衢州","ad_name":"衢州市"}]},{"id":"32","pid":"1","name":"重庆","ad_name":"重庆市","has_children":0,"children":[]}],b=t.AREACHINA=v[0],S=t.AREABEIJING=v[1];t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.objDeepCopy=function objDeepCopy(e){var t=e instanceof Array?[]:{};for(var n in e)t[n]="object"===r(e[n])?objDeepCopy(e[n]):e[n];return t},t.userAuthLoction=function userAuthLoction(){return new Promise(function(n,e){new a.default.AMapWX({"key":i.MAPKEY}).getRegeo({"success":function success(e){var t={"province":e[0].regeocodeData.addressComponent.province,"city":e[0].regeocodeData.addressComponent.city,"adcode":e[0].regeocodeData.addressComponent.adcode,"citycode":e[0].regeocodeData.addressComponent.citycode};o.default.setStorageSync(s.UserLocationCity,t),n(t)},"fail":function fail(){e()}})})},t.getAmapPoiList=function getAmapPoiList(e){return new Promise(function(t,n){new a.default.AMapWX({"key":i.MAPKEY}).getInputtips({"keywords":e,"success":function success(e){e?t(e.tips):n()},"fail":function fail(){n()}})})},t.userJumpPage=function userJumpPage(e){o.default.navigateTo({"url":e})};var o=_interopRequireDefault(n(0)),i=n(1),a=_interopRequireDefault(n(45)),s=n(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}},function(e,t,n){},function(e,t,n){"use strict";e.exports=n(87)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(0);(function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}})(i);function ad(n){if(n&&"object"===(void 0===n?"undefined":o(n))){var r="";return Object.keys(n).forEach(function(e){var t=e.replace(/([A-Z])/g,"-$1").toLowerCase();r+=t+":"+n[e]+";"}),r}return n&&"string"==typeof n?n:""}var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":o(e))&&t&&"object"===(void 0===t?"undefined":o(t))?Object.assign({},e,t):ad(e)+ad(t)}}]),AtComponent.options={"addGlobalClass":!0},AtComponent);function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.typeInTabbar=function typeInTabbar(e){return r.includes(e)};var r=[t.HOME="home",t.RECRUIT="recruit",t.RESUME="resume",t.MEMBER="member"]},function(e,t,n){"use strict";e.exports=n(25).default,e.exports.default=e.exports},function(e,t,n){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{"value":!0});function Rd(){return Math.random().toString(36).substring(7).split("").join(".")}var d=function _interopDefault(e){return e&&"object"===(void 0===e?"undefined":u(e))&&"default"in e?e.default:e}(n(28)),l={"INIT":"@@redux/INIT"+Rd(),"REPLACE":"@@redux/REPLACE"+Rd(),"PROBE_UNKNOWN_ACTION":function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+Rd()}};function isPlainObject(e){if("object"===(void 0===e?"undefined":u(e))&&null!==e){for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}}function bindActionCreator(e,t){return function(){return t(e.apply(this,arguments))}}function ownKeys(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function _objectSpread2(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(i,!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ownKeys(i).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function compose(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.__DO_NOT_USE__ActionTypes=l,t.applyMiddleware=function applyMiddleware(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(o){return function(){var e=o.apply(void 0,arguments),t=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={"getState":e.getState,"dispatch":function dispatch(){return t.apply(void 0,arguments)}},r=i.map(function(e){return e(n)});return _objectSpread2({},e,{"dispatch":t=compose.apply(void 0,r)(e.dispatch)})}}},t.bindActionCreators=function bindActionCreators(e,t){if("function"==typeof e)return bindActionCreator(e,t);if("object"!==(void 0===e?"undefined":u(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":u(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=bindActionCreator(o,t))}return n},t.combineReducers=function combineReducers(e){for(var t=Object.keys(e),p={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(p[r]=e[r])}var m,h=Object.keys(p);try{!function assertReducerShape(n){Object.keys(n).forEach(function(e){var t=n[e];if(void 0===t(void 0,{"type":l.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{"type":l.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+l.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(p)}catch(e){m=e}return function combination(e,t){if(void 0===e&&(e={}),m)throw m;for(var n,r,o,i=!1,a={},s=0;s<h.length;s++){var c=h[s],u=p[c],d=e[c],l=u(d,t);if(void 0===l){var f=(n=c,"Given "+((o=(r=t)&&r.type)&&'action "'+String(o)+'"'||"an action")+', reducer "'+n+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');throw new Error(f)}a[c]=l,i=i||l!==d}return(i=i||h.length!==Object.keys(e).length)?a:e}},t.compose=compose,t.createStore=function createStore(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(createStore)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,a=[],s=a,c=!1;function ensureCanMutateNextListeners(){s===a&&(s=a.slice())}function getState(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function subscribe(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var n=!0;return ensureCanMutateNextListeners(),s.push(t),function unsubscribe(){if(n){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");n=!1,ensureCanMutateNextListeners();var e=s.indexOf(t);s.splice(e,1),a=null}}}function dispatch(e){if(!isPlainObject(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,i=o(i,e)}finally{c=!1}for(var t=a=s,n=0;n<t.length;n++)(0,t[n])();return e}return dispatch({"type":l.INIT}),(r={"dispatch":dispatch,"subscribe":subscribe,"getState":getState,"replaceReducer":function replaceReducer(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,dispatch({"type":l.REPLACE})}})[d]=function observable(){var e,t=subscribe;return(e={"subscribe":function subscribe(e){if("object"!==(void 0===e?"undefined":u(e))||null===e)throw new TypeError("Expected the observer to be an object.");function observeState(){e.next&&e.next(getState())}return observeState(),{"unsubscribe":t(observeState)}}})[d]=function(){return this},e},r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.default="success"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GET="get",t.SET="set"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.changeTabbar=function changeTabbar(e){return{"type":e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.DEFAULT_PROPS={"indicatorDots":!1,"autoplay":!0,"current":0,"interval":3500,"duration":500,"circular":!0,"vertical":!1,"classname":"","lists":[]}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";var r=n(93).Symbol;e.exports=r},,function(e,ae,se){"use strict";(function(e,t){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(ae,"__esModule",{"value":!0});var f=se(14);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":i(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":i(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};function shallowEqual(e,t){if("object"!==_typeof(e)&&"object"!==_typeof(t))return e===t;if(null===e&&null===t)return!0;if(null===e||null===t)return!1;if(a(e,t))return!0;var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(!t.hasOwnProperty(i)||!a(e[i],t[i]))return!1}return!0}var n=function(){function SimpleMap(){_classCallCheck(this,SimpleMap),this.cache=[],this.size=0}return _createClass(SimpleMap,[{"key":"set","value":function set(e,t){var n=this.cache.length;if(!n)return this.cache.push({"k":e,"v":t}),void(this.size+=1);for(var r=0;r<n;r++){var o=this.cache[r];if(o.k===e)return void(o.v=t)}this.cache.push({"k":e,"v":t}),this.size+=1}},{"key":"get","value":function get(e){var t=this.cache.length;if(t)for(var n=0;n<t;n++){var r=this.cache[n];if(r.k===e)return r.v}}},{"key":"has","value":function has(e){var t=this.cache.length;if(!t)return!1;for(var n=0;n<t;n++){if(this.cache[n].k===e)return!0}return!1}},{"key":"delete","value":function _delete(e){for(var t=this.cache.length,n=0;n<t;n++){if(this.cache[n].k===e)return this.cache.splice(n,1),--this.size,!0}return!1}},{"key":"clear","value":function clear(){var e=this.cache.length;if(this.size=0,e)for(;e;)this.cache.pop(),e--}}]),SimpleMap}();function getCurrentPageUrl(){var e=getCurrentPages(),t=e[e.length-1];return function addLeadingSlash(e){return"/"===e.charAt(0)?e:"/"+e}(t.route||t.__route__)}var c=function nextTick(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e="function"==typeof e?e.bind.apply(e,[null].concat(n)):e,(wx.nextTick?wx.nextTick:setTimeout)(e)},r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={"exports":{}},t.exports),t.exports}var o=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{"value":!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function y(e){if("object"===_typeof(e)&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case l:case i:case s:case a:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case c:return e;default:return t}}case g:case h:case o:return t}}}function z(e){return y(e)===l}t.typeOf=y,t.AsyncMode=d,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===s||e===a||e===p||e===m||"object"===_typeof(e)&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===_||e.$$typeof===v||e.$$typeof===b)},t.isAsyncMode=function(e){return z(e)||y(e)===d},t.isConcurrentMode=z,t.isContextConsumer=function(e){return y(e)===u},t.isContextProvider=function(e){return y(e)===c},t.isElement=function(e){return"object"===_typeof(e)&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return y(e)===f},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===g},t.isMemo=function(e){return y(e)===h},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===s},t.isStrictMode=function(e){return y(e)===a},t.isSuspense=function(e){return y(e)===p}});unwrapExports(o);o.typeOf,o.AsyncMode,o.ConcurrentMode,o.ContextConsumer,o.ContextProvider,o.Element,o.ForwardRef,o.Fragment,o.Lazy,o.Memo,o.Portal,o.Profiler,o.StrictMode,o.Suspense,o.isValidElementType,o.isAsyncMode,o.isConcurrentMode,o.isContextConsumer,o.isContextProvider,o.isElement,o.isForwardRef,o.isFragment,o.isLazy,o.isMemo,o.isPortal,o.isProfiler,o.isStrictMode,o.isSuspense;var s=createCommonjsModule(function(e,t){0});unwrapExports(s);s.typeOf,s.AsyncMode,s.ConcurrentMode,s.ContextConsumer,s.ContextProvider,s.Element,s.ForwardRef,s.Fragment,s.Lazy,s.Memo,s.Portal,s.Profiler,s.StrictMode,s.Suspense,s.isValidElementType,s.isAsyncMode,s.isConcurrentMode,s.isContextConsumer,s.isContextProvider,s.isElement,s.isForwardRef,s.isFragment,s.isLazy,s.isMemo,s.isPortal,s.isProfiler,s.isStrictMode,s.isSuspense,createCommonjsModule(function(e){e.exports=o});var u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;!function shouldUseNative(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},r)).join("")?void 0:1}catch(e){return}}()||Object.assign;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Function.call.bind(Object.prototype.hasOwnProperty);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var m=createCommonjsModule(function(e){e.exports=function factoryWithThrowingShims(){function shim(e,t,n,r,o,i){if(i!==p){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}var e={"array":shim.isRequired=shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e}()}),h="object"==_typeof(r)&&r&&r.Object===Object&&r,g="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,_=(h||g||Function("return this")()).Symbol,v=Object.prototype,b=v.hasOwnProperty,S=v.toString,C=_?_.toStringTag:void 0;var w=function getRawTag(e){var t=b.call(e,C),n=e[C];try{e[C]=void 0}catch(e){}var r=S.call(e);return t?e[C]=n:delete e[C],r},P=Object.prototype.toString;var O=function objectToString(e){return P.call(e)},j=_?_.toStringTag:void 0;var k=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(j&&j in Object(e)?w:O)(e)};var A=function overArg(t,n){return function(e){return t(n(e))}}(Object.getPrototypeOf,Object);var E=function isObjectLike(e){return null!=e&&"object"==_typeof(e)},T=Function.prototype,x=Object.prototype,R=T.toString,I=x.hasOwnProperty,M=R.call(Object);var D=function isPlainObject(e){if(!E(e)||"[object Object]"!=k(e))return!1;var t=A(e);if(null===t)return!0;var n=I.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&R.call(n)==M};function isEmptyObject(e){if(e&&D(e)){for(var t in e)if(e.hasOwnProperty(t))return;return 1}}function isUndefined(e){return void 0===e}function isFunction(e){return"function"==typeof e}function isArray(e){return Array.isArray(e)}var L=Object.keys,U=Object.prototype.hasOwnProperty;function diffObjToPath(c,u,e,t){for(var d=2<arguments.length&&void 0!==e?e:{},l=3<arguments.length&&void 0!==t?t:"",f=L(c),n=f.length,r=function _loop2(e){var t=f[e],n=c[t],r=u[t],o="".concat(l).concat(t);if(/^\$compid__/.test(t))d[o]=n;else{if(n===r)return"continue";if(U.call(u,t))if(_typeof(n)!==_typeof(r))d[o]=n;else if("object"!==_typeof(n))d[o]=n;else{var i=isArray(n),a=isArray(r);if(i!==a)d[o]=n;else if(i&&a)n.length<r.length?d[o]=n:function diffArrToPath(s,c,e,t){for(var u=2<arguments.length&&void 0!==e?e:{},d=3<arguments.length&&void 0!==t?t:"",n=s.length,r=function _loop(e){var t=s[e],n=c[e],r="".concat(d,"[").concat(e,"]");if(t===n)return"continue";if(_typeof(t)!==_typeof(n))u[r]=t;else if("object"!==_typeof(t))u[r]=t;else{var o=isArray(t),i=isArray(n);if(o!==i)u[r]=t;else if(o&&i)t.length<n.length?u[r]=t:diffArrToPath(t,n,u,"".concat(r));else if(!t||!n||L(t).length<L(n).length)u[r]=t;else{var a=D(t);a&&Object.keys(n).some(function(e){if(void 0===t[e]&&void 0!==n[e])return!(a=!1)}),a?diffObjToPath(t,n,u,"".concat(r,".")):u[r]=t}}},o=0;o<n;o++)r(o);return u}(n,r,d,"".concat(o));else if(n&&r){var s=D(n);s&&Object.keys(r).some(function(e){if(void 0===n[e]&&void 0!==r[e])return!(s=!1)}),s?diffObjToPath(n,r,d,"".concat(o,".")):d[o]=n}else d[o]=n}else d[o]=n}},o=0;o<n;o++)r(o);return d}function queryToJson(e){for(var t,n,r,o=decodeURIComponent,i=e.split("&"),a={},s=0,c=i.length;s<c;++s)if((r=i[s]).length){var u=r.indexOf("=");n=u<0?(t=o(r),""):(t=o(r.slice(0,u)),o(r.slice(u+1))),"string"==typeof a[t]&&(a[t]=[a[t]]),isArray(a[t])?a[t].push(n):a[t]=n}return a}var $=(new Date).getTime().toString(),F=1;function getUniqueKey(){return $+F++}var N,W=0;function genId(){return String(W++)}try{N=new Map}catch(e){N=new n}var q=0;var B={};function cacheDataSet(e,t){B[e]=t}function cacheDataGet(e,t){var n=B[e];return t&&delete B[e],n}function cacheDataHas(e){return e in B}var G=new(function(){function Manager(){_classCallCheck(this,Manager),_defineProperty(this,"map",{}),_defineProperty(this,"observers",{})}return _createClass(Manager,[{"key":"set","value":function set(e,t,n){var r=0<arguments.length&&void 0!==e?e:{},i=1<arguments.length?t:void 0,o=2<arguments.length?n:void 0;if(i){o&&this.delete(o);var a=this.observers;this.map[i]||Object.defineProperty(this.map,i,{"configurable":!0,"get":function get(){return this["__".concat(i)]},"set":function set(e){this["__".concat(i)]=e;var t=a[i]&&a[i].component,n=a[i]&&a[i].ComponentClass;if(t&&n&&t.__isReady){var r=t.$scope&&t.$scope.data&&t.$scope.data.extraProps||null,o=filterProps(n.defaultProps,e,t.props,r);t.props=o,c(function(){t._unsafeCallUpdate=!0,updateComponent(t),t._unsafeCallUpdate=!1})}}}),this.map[i]=r}}},{"key":"delete","value":function _delete(e){delete this.map[e],delete this.map["__".concat(e)],delete this.observers[e]}}]),Manager}()),H="funPrivate",V="__key_",Q="__preload_",K="preload",J="$preloadComponent",X=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","onResize"];function bindMultipleSlots(e,t){var n=t.multipleSlots;n&&(e.options=function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}({},e.options,{"multipleSlots":n}))}function bindEvents(e,t){e.methods=e.methods||{};var n=e.methods;t.forEach(function(e){!function processEvent(f,e){e[f]||(e[f]=function(e){e&&(e.preventDefault=function(){},e.stopPropagation=function(){},e.currentTarget=e.currentTarget||e.target||{},e.target&&Object.assign(e.target,e.detail),Object.assign(e.currentTarget,e.detail));var t=this.$component,n=t,r=-1<f.indexOf(H),o=[],i=[],a=[],s=!1,c=e.currentTarget.dataset||{},u={},d=e.type.toLocaleLowerCase();if(Object.keys(c).forEach(function(e){var t=e.toLocaleLowerCase();if(/^e/.test(t)&&0<=(t=t.replace(/^e/,"")).indexOf(d)){var n=t.replace(d,"");/^(a[a-z]|so)$/.test(n)&&(u[n]=c[e])}}),e.detail&&e.detail.__arguments&&0<e.detail.__arguments.length&&(i=e.detail.__arguments),r){var l=null;"so"in u&&("this"!==u.so&&(l=u.so),s=!0,delete u.so),0<i.length&&(!s&&i[0]&&(n=i[0]),i.shift()),isEmptyObject(u)||(a=Object.keys(u).sort().map(function(e){return u[e]})),o=[l].concat(_toConsumableArray(a),_toConsumableArray(i),[e])}else"so"in u&&("this"!==u.so&&(n=u.so),s=!0,delete u.so),0<i.length&&(!s&&i[0]&&(n=i[0]),i.shift()),isEmptyObject(u)||(a=Object.keys(u).sort().map(function(e){return u[e]})),o=_toConsumableArray(a).concat(_toConsumableArray(i),[e]);return t[f].apply(n,o)})}(e,n)})}function filterProps(e,t,n,r){var o=0<arguments.length&&void 0!==e?e:{},i=1<arguments.length&&void 0!==t?t:{},a=2<arguments.length&&void 0!==n?n:{},s=3<arguments.length?r:void 0,c=Object.assign({},a,i);if(!isEmptyObject(o))for(var u in o)void 0===c[u]&&(c[u]=o[u]);return s&&(c=Object.assign({},c,s)),c}function componentTrigger(n,e,t){var r;if(t=t||[],"componentDidMount"===e){if(n.$$refs&&0<n.$$refs.length){var o={};n.$$refs.forEach(function(e){var t;"component"===e.type?t=(t=n.$scope.selectComponent("#".concat(e.id)))?t.$component||t:null:t=wx.createSelectorQuery().in(n.$scope).select("#".concat(e.id));f.commitAttachRef(e,t,n,o,!0),e.target=t}),n.refs=Object.assign({},n.refs||{},o)}n.$$hasLoopRef&&(f.Current.current=n,f.Current.index=0,n._disableEffect=!0,n._createData(n.state,n.props,!0),n._disableEffect=!1,f.Current.current=null)}if("componentWillUnmount"===e){var i=n.$scope.data.compid;i&&G.delete(i)}n[e]&&"function"==typeof n[e]&&(r=n[e]).call.apply(r,[n].concat(_toConsumableArray(t))),"componentWillMount"===e&&(n._dirty=!1,n._disable=!1,n.state=n.getState()),"componentWillUnmount"===e&&(n._dirty=!0,n._disable=!0,n.$router={"params":{},"path":""},n._pendingStates=[],n._pendingCallbacks=[],f.detachAllRef(n))}function initComponent(e,t){if(!this.$component.__isReady){if(this.$component.__isReady=!0,t)this.$component.$router.path=getCurrentPageUrl();else{var n=this.data.compid;n&&(G.observers[n]={"component":this.$component,"ComponentClass":e});var r=filterProps(e.defaultProps,G.map[n],this.$component.props,this.data.extraProps);this.$component.props=r}!function mountComponent(e){var t=e.props;e.__componentWillMountTriggered||e._constructor&&e._constructor(t);var n=callGetDerivedStateFromProps(e,t,e.state);isUndefined(n)||(e.state=n);e._dirty=!1,e._disable=!1,e._isForceUpdate=!1,e.__componentWillMountTriggered||(e.__componentWillMountTriggered=!0,hasNewLifecycle(e)||componentTrigger(e,"componentWillMount"));doUpdate(e,t,e.state),e.prevProps=e.props,e.prevState=e.state}(this.$component)}}var Y=void 0===t||!t.env||!1;function hasNewLifecycle(e){var t=e.constructor.getDerivedStateFromProps,n=e.getSnapshotBeforeUpdate;return isFunction(t)||isFunction(n)}function callGetDerivedStateFromProps(e,t,n){var r,o=e.constructor.getDerivedStateFromProps;if(isFunction(o)){var i=o(t,n);isUndefined(i)?console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。"):r=Object.assign({},n,i)}return r}function updateComponent(e){var t=e.props,n=e.__propTypes;if(Y&&n){var r=e.constructor.name;if(isUndefined(r)){var o=e.constructor.toString().match(/^function\s*([^\s(]+)/);r=isArray(o)?o[0]:"Component"}m.checkPropTypes(n,t,"prop",r)}var i=e.prevProps||t;e.props=i,e.__mounted&&!0===e._unsafeCallUpdate&&!hasNewLifecycle(e)&&e.componentWillReceiveProps&&(e._disable=!0,e.componentWillReceiveProps(t),e._disable=!1);var a=e.getState(),s=e.prevState||a,c=callGetDerivedStateFromProps(e,t,a);isUndefined(c)||(a=c);var u=!1;e.__mounted&&("function"!=typeof e.shouldComponentUpdate||e._isForceUpdate||!1!==e.shouldComponentUpdate(t,a)?!hasNewLifecycle(e)&&isFunction(e.componentWillUpdate)&&e.componentWillUpdate(t,a):u=!0),e.props=t,e.state=a,e._dirty=!1,e._isForceUpdate=!1,u||doUpdate(e,i,s),e.prevProps=e.props,e.prevState=e.state}function doUpdate(n,t,r){var e=n.state,o=n.props,i=void 0===o?{}:o,a=e||{};if(n._createData&&(n.__isReady&&(!function injectContextType(t){var e=t.constructor.contextType;if(e){var n=e.context,r=n.emitter;if(null===r)return void(t.context=n._defaultValue);t._hasContext||(t._hasContext=!0,r.on(function(e){return enqueueRender(t)})),t.context=r.value}}(n),f.Current.current=n,f.Current.index=0,f.invokeEffects(n,!0)),a=n._createData(e,i)||a,n.__isReady&&(f.Current.current=null)),a=Object.assign({},i,a),n.$usedState&&n.$usedState.length){var s={};n.$usedState.forEach(function(e){var t=f.internal_safe_get(a,e);if(void 0!==t)if("object"===_typeof(t)){if(isEmptyObject(t))return f.internal_safe_set(s,e,{});isEmptyObject(t=function cloneDeep(e){var t;if(isArray(e)){t=[];for(var n=e.length,r=0;r<n;r++)t.push(cloneDeep(e[r]))}else{if(!D(e))return e;for(var o in t={},e){var i=cloneDeep(e[o]);t[o]=i}}return t}(t))||f.internal_safe_set(s,e,t)}else f.internal_safe_set(s,e,t)}),a=s}a.$taroCompReady=!0;var c,u=f.getIsUsingDiff()?diffObjToPath(a,n.$scope.data):a,d=n.__mounted;d&&(c=function callGetSnapshotBeforeUpdate(e,t,n){var r,o=e.getSnapshotBeforeUpdate;return isFunction(o)&&(r=o.call(e,t,n)),r}(n,t,r));var l=[];n._pendingCallbacks&&n._pendingCallbacks.length&&(l=n._pendingCallbacks,n._pendingCallbacks=[]);function Gs(){if(d&&(f.invokeEffects(n),n.$$refs&&0<n.$$refs.length&&n.$$refs.forEach(function(e){if("component"===e.type){var t=n.$scope.selectComponent("#".concat(e.id));(t=t?t.$component||t:null)!==e.target&&(f.commitAttachRef(e,t,n,n.refs),e.target=t)}}),n.$$hasLoopRef&&(f.Current.current=n,f.Current.index=0,n._disableEffect=!0,n._createData(n.state,n.props,!0),n._disableEffect=!1,f.Current.current=null),isFunction(n.componentDidUpdate)&&n.componentDidUpdate(t,r,c)),l.length)for(var e=l.length;0<=--e;)"function"==typeof l[e]&&l[e].call(n)}0===Object.keys(u).length?Gs():n.$scope.setData(u,Gs)}var Z=[];function enqueueRender(e,t){var n=1<arguments.length&&void 0!==t&&t;e._isForceUpdate=n,!e._dirty&&(e._dirty=!0)&&1===Z.push(e)&&c(function(){!function rerender(){var e,t=Z;Z=[];for(;e=t.pop();)e._dirty&&updateComponent(e)}()})}var ee="preload",te=function(){function BaseComponent(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;_classCallCheck(this,BaseComponent),_defineProperty(this,"__computed",{}),_defineProperty(this,"__props",{}),_defineProperty(this,"__isReady",!1),_defineProperty(this,"__mounted",!1),_defineProperty(this,"context",{}),_defineProperty(this,"_dirty",!0),_defineProperty(this,"_disable",!0),_defineProperty(this,"_isForceUpdate",!1),_defineProperty(this,"_pendingStates",[]),_defineProperty(this,"_pendingCallbacks",[]),_defineProperty(this,"$componentType",""),_defineProperty(this,"$router",{"params":{},"path":""}),_defineProperty(this,"_afterScheduleEffect",!1),_defineProperty(this,"_disableEffect",!1),_defineProperty(this,"hooks",[]),_defineProperty(this,"effects",[]),_defineProperty(this,"layoutEffects",[]),this.state={},this.props=e,this.$componentType=t?"PAGE":"COMPONENT",this.$prefix=function genCompPrefix(){return String(q++)}(),this.isTaroComponent=this.$componentType&&this.$router&&this._pendingStates}return _createClass(BaseComponent,[{"key":"_constructor","value":function _constructor(e){this.props=e||{}}},{"key":"_init","value":function _init(e){this.$scope=e}},{"key":"setState","value":function setState(e,t){e&&(this._pendingStates=this._pendingStates||[]).push(e),isFunction(t)&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(t),this._disable||enqueueRender(this,t===f.internal_force_update)}},{"key":"getState","value":function getState(){var t=this,e=this._pendingStates,n=this.state,r=this.props,o=Object.assign({},n);if(delete o.__data,!e.length)return o;var i=e.concat();return this._pendingStates.length=0,i.forEach(function(e){isFunction(e)&&(e=e.call(t,o,r)),Object.assign(o,e)}),o}},{"key":"forceUpdate","value":function forceUpdate(e){isFunction(e)&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(e),this._isForceUpdate=!0,updateComponent(this)}},{"key":"$preload","value":function $preload(e,t){var n=cacheDataGet(ee)||{};if("object"===_typeof(e))for(var r in e)n[r]=e[r];else n[e]=t;cacheDataSet(ee,n)}},{"key":"__triggerPropsFn","value":function __triggerPropsFn(e,t){var n=e.split("."),r="__event_"+n.shift();if(r in this){var o=t.shift();(0<n.length?f.internal_safe_get(this[r],n.join(".")):this[r]).apply(o,t)}else{var i=e.toLocaleLowerCase(),a={"__isCustomEvt":!0,"__arguments":t};0<t.length&&(a.value=t.slice(1)),this.$scope.triggerEvent(i,a)}}}]),BaseComponent}(),ne=function(){function PureComponent(){var e,t;_classCallCheck(this,PureComponent);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?_assertThisInitialized(e):t}(this,(e=_getPrototypeOf(PureComponent)).call.apply(e,[this].concat(r))),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"isPureComponent",!0),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(PureComponent,te),_createClass(PureComponent,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e,t){return!shallowEqual(this.props,e)||!shallowEqual(this.state,t)}}]),PureComponent}();var re={"MAX_REQUEST":10,"queue":[],"pendingQueue":[],"request":function request(e){return this.queue.push(e),this.run()},"run":function run(){var a=this;if(this.queue.length)for(var e=function _loop(){var r=a.queue.shift(),o=r.success,i=r.fail;return r.success=function(){a.pendingQueue=a.pendingQueue.filter(function(e){return e!==r}),a.run();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o&&o.apply(r,t)},r.fail=function(){a.pendingQueue=a.pendingQueue.filter(function(e){return e!==r}),a.run();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i&&i.apply(r,t)},a.pendingQueue.push(r),{"v":wx.request(r)}};this.pendingQueue.length<this.MAX_REQUEST;){var t=e();if("object"===_typeof(t))return t.v}}};var oe=new f.Link(function taroInterceptor(e){return function request(e){"string"==typeof(e=e||{})&&(e={"url":e});var r,o=e.success,i=e.fail,a=e.complete,t=new Promise(function(t,n){e.success=function(e){o&&o(e),t(e)},e.fail=function(e){i&&i(e),n(e)},e.complete=function(e){a&&a(e)},r=re.request(e)});return t.abort=function(e){return e&&e(),r&&r.abort(),t},t}(e.requestParams)});function canIUseWebp(){var e=wx.getSystemInfoSync().platform.toLowerCase();return"android"===e||"devtools"===e}function initNativeApi(e){!function processApis(e){var t=Object.assign({},f.onAndSyncApis,f.noPromiseApis,f.otherApis),S={"navigateTo":!0,"redirectTo":!0,"reLaunch":!0};Object.keys(t).forEach(function(b){b in wx?f.onAndSyncApis[b]||f.noPromiseApis[b]?e[b]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length,o=t.concat(),i=o[r-1];return i&&i.isTaroComponent&&i.$scope&&o.splice(r-1,1,i.$scope),wx[b].apply(wx,o)}:e[b]=function(o){for(var e=arguments.length,t=new Array(1<e?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];o=o||{};var r,i=null,a=Object.assign({},o);if("string"==typeof o)return t.length?(r=wx)[b].apply(r,[o].concat(t)):wx[b](o);if("navigateTo"===b||"redirectTo"===b){var s=a.url?a.url.replace(/^\//,""):"";-1<s.indexOf("?")&&(s=s.split("?")[0]);var c=cacheDataGet(s);if(c){var u=new c;if(u.componentWillPreload){var d=getUniqueKey(),l=a.url.indexOf("?"),f=-1<l,p=queryToJson(f?a.url.substring(l+1,a.url.length):"");a.url+=(f?"&":"?")+"".concat("__preload_","=").concat(d),cacheDataSet(d,u.componentWillPreload(p)),cacheDataSet("$preloadComponent",u)}}}if(S[b]){var m=a.url=a.url||"",h=m.indexOf("?"),y=-1<h,g=queryToJson(y?m.substring(h+1,m.length):""),_=getUniqueKey();a.url+=(y?"&":"?")+"".concat("__key_","=").concat(_),cacheDataSet(_,g)}var v=new Promise(function(n,r){var e;(["fail","success","complete"].forEach(function(t){a[t]=function(e){o[t]&&o[t](e),"success"===t?n("connectSocket"===b?Promise.resolve().then(function(){return Object.assign(i,e)}):e):"fail"===t&&r(e)}}),t.length)?i=(e=wx)[b].apply(e,[a].concat(t)):i=wx[b](a)});return"uploadFile"!==b&&"downloadFile"!==b||(v.progress=function(e){return i&&i.onProgressUpdate(e),v},v.headersReceived=function(e){return i&&i.onHeadersReceived(e),v},v.abort=function(e){return e&&e(),i&&i.abort(),v}),v}:e[b]=function(){console.warn("微信小程序暂不支持 ".concat(b))}})}(e),e.request=oe.request.bind(oe),e.addInterceptor=oe.addInterceptor.bind(oe),e.cleanInterceptors=oe.cleanInterceptors.bind(oe),e.getCurrentPages=getCurrentPages,e.getApp=getApp,e.requirePlugin=requirePlugin,e.initPxTransform=f.initPxTransform.bind(e),e.pxTransform=function pxTransform(e){var t=this.config||{},n=t.designWidth,r=void 0===n?750:n,o=t.deviceRatio,i=void 0===o?{"640":1.17,"750":1,"828":.905}:o;if(!(r in i))throw new Error("deviceRatio 配置中不存在 ".concat(r," 的设置！"));return parseInt(e,10)/i[r]+"rpx"}.bind(e),e.canIUseWebp=canIUseWebp,function wxCloud(e){var t=wx.cloud||{},n={};["init","database","uploadFile","downloadFile","getTempFileURL","deleteFile","callFunction","CloudID"].forEach(function(e){n[e]=t[e]}),e.cloud=n}(e),function wxEnvObj(e){var t=wx.env||{},n={};["USER_DATA_PATH"].forEach(function(e){return n[e]=t[e]}),e.env=n}(e)}var ie={"Component":te,"PureComponent":ne,"createApp":function createApp(e){var t=new e,n={"onLaunch":function onLaunch(e){t.$app=this,t.$app.$router=t.$router={"params":e},t.componentWillMount&&t.componentWillMount(),t.componentDidMount&&t.componentDidMount()},"onShow":function onShow(e){Object.assign(t.$router.params,e),t.componentDidShow&&t.componentDidShow()},"onHide":function onHide(){t.componentDidHide&&t.componentDidHide()},"onError":function onError(e){t.componentDidCatchError&&t.componentDidCatchError(e)},"onPageNotFound":function onPageNotFound(e){t.componentDidNotFound&&t.componentDidNotFound(e)}};return Object.assign(n,t)},"initNativeApi":initNativeApi,"Events":f.Events,"eventCenter":f.eventCenter,"getEnv":f.getEnv,"createRef":f.createRef,"render":f.render,"ENV_TYPE":f.ENV_TYPE,"internal_safe_get":f.internal_safe_get,"internal_safe_set":f.internal_safe_set,"internal_inline_style":f.internal_inline_style,"createComponent":function createComponent(r,o){var e={},t=filterProps(r.defaultProps),i=new r(t);i._constructor&&i._constructor(t);try{f.Current.current=i,f.Current.index=0,i.state=i._createData()||i.state}catch(e){o?console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！"):console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"),console.warn(e)}var a={"data":e=Object.assign({},e,i.props,i.state),"created":function created(e){var t=0<arguments.length&&void 0!==e?e:{};o&&cacheDataHas(J)?(this.$component=cacheDataGet(J,!0),this.$component.$componentType="PAGE"):this.$component=new r({},o),this.$component._init(this),this.$component.render=this.$component._createData,this.$component.__propTypes=r.propTypes,Object.assign(this.$component.$router.params,t)},"attached":function attached(){var e;if(o){var t={};if(t=(e=cacheDataHas(this.data[V]))?Object.assign({},r.defaultParams,cacheDataGet(this.data[V],!0)):function filterParams(e,t){var n=1<arguments.length&&void 0!==t?t:{},r={};for(var o in n)r[o]=o in e?e[o]:n[o];return r}(this.data,r.defaultParams),cacheDataHas(K)){var n=cacheDataGet(K,!0);this.$component.$router.preload=n}Object.assign(this.$component.$router.params,t),cacheDataHas(this.data[Q])?this.$component.$preloadData=cacheDataGet(this.data[Q],!0):this.$component.$preloadData=null}!e&&o||initComponent.apply(this,[r,o])},"ready":function ready(){o||this.$component.__mounted||(this.$component.__mounted=!0,componentTrigger(this.$component,"componentDidMount"))},"detached":function detached(){var e=this.$component;componentTrigger(e,"componentWillUnmount"),e.hooks.forEach(function(e){isFunction(e.cleanup)&&e.cleanup()});var t=e.$$renderPropsEvents;isArray(t)&&t.forEach(function(e){return f.eventCenter.off(e)})}};return o?(a.methods=a.methods||{},a.methods.onLoad=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$component.__isReady||(Object.assign(this.$component.$router.params,e),initComponent.apply(this,[r,o]))},a.methods.onReady=function(){this.$component.__mounted=!0,componentTrigger(this.$component,"componentDidMount")},a.methods.onShow=function(){componentTrigger(this.$component,"componentDidShow")},a.methods.onHide=function(){componentTrigger(this.$component,"componentDidHide")},X.forEach(function(n){i[n]&&"function"==typeof i[n]&&(a.methods[n]=function(){var e,t=this.$component;if(t&&t[n]&&"function"==typeof t[n])return(e=t[n]).call.apply(e,[t].concat(Array.prototype.slice.call(arguments)))})}),__wxRoute&&cacheDataSet(__wxRoute,r)):(a.pageLifetimes=a.pageLifetimes||{},a.pageLifetimes.show=function(){componentTrigger(this.$component,"componentDidShow")},a.pageLifetimes.hide=function(){componentTrigger(this.$component,"componentDidHide")},a.pageLifetimes.resize=function(){componentTrigger(this.$component,"onResize")}),function bindProperties(e,a,s){if(e.properties={},s){e.properties[V]={"type":null,"value":null},e.properties[Q]={"type":null,"value":null};var t=a.defaultParams||{};for(var n in t)t.hasOwnProperty(n)&&(e.properties[n]={"type":null,"value":null})}e.properties.compid={"type":null,"value":null,"observer":function observer(e,t){var n=this;if(initComponent.apply(this,[a,s]),t&&t!==e){var r=this.data.extraProps,o=this.$component;G.observers[e]={"component":o,"ComponentClass":o.constructor};var i=filterProps(o.constructor.defaultProps,G.map[e],o.props,r||null);this.$component.props=i,c(function(){n.$component._unsafeCallUpdate=!0,updateComponent(n.$component),n.$component._unsafeCallUpdate=!1})}}},e.properties.extraProps={"type":null,"value":null,"observer":function observer(){var e=this;if(this.$component&&this.$component.__isReady){var t=filterProps(a.defaultProps,{},this.$component.props,this.data.extraProps);this.$component.props=t,c(function(){e.$component._unsafeCallUpdate=!0,updateComponent(e.$component),e.$component._unsafeCallUpdate=!1})}}}}(a,r,o),function bindBehaviors(e,t){t.behaviors&&(e.behaviors=t.behaviors)}(a,r),function bindStaticFns(t,n){for(var e in n)"function"==typeof n[e]&&(t[e]=n[e]);Object.getOwnPropertyNames(n).forEach(function(e){["arguments","caller","length","name","prototype"].indexOf(e)<0&&"function"==typeof n[e]&&(t[e]=n[e])})}(a,r),function bindStaticOptions(e,t){t.options&&(e.options=t.options)}(a,r),bindMultipleSlots(a,r),r.$$events&&bindEvents(a,r.$$events),r.externalClasses&&r.externalClasses.length&&(a.externalClasses=r.externalClasses),a},"internal_get_original":f.internal_get_original,"handleLoopRef":f.handleLoopRef(function getElementById(e,t,n){return e&&(r="component"===n?(r=e.selectComponent(t))?r.$component||r:null:wx.createSelectorQuery().in(e).select(t))||null;var r}),"propsManager":G,"interceptors":f.interceptors,"RefsArray":f.RefsArray,"genCompid":function genCompid(e,t){if(!f.Current||!f.Current.current||!f.Current.current.$scope)return[];var n=N.get(e);if(t){var r=genId();return N.set(e,r),[n,r]}var o=n||genId();return n||N.set(e,o),[null,o]},"useEffect":f.useEffect,"useLayoutEffect":f.useLayoutEffect,"useReducer":f.useReducer,"useState":f.useState,"useDidShow":f.useDidShow,"useDidHide":f.useDidHide,"usePullDownRefresh":f.usePullDownRefresh,"useReachBottom":f.useReachBottom,"usePageScroll":f.usePageScroll,"useResize":f.useResize,"useShareAppMessage":f.useShareAppMessage,"useTabItemTap":f.useTabItemTap,"useRouter":f.useRouter,"useScope":f.useScope,"useRef":f.useRef,"useCallback":f.useCallback,"useMemo":f.useMemo,"useImperativeHandle":f.useImperativeHandle,"useContext":f.useContext,"createContext":f.createContext,"memo":f.memo,"shallowEqual":shallowEqual,"setIsUsingDiff":f.setIsUsingDiff};initNativeApi(ie),ae.Taro=ie,ae.default=ie}).call(this,se(6),se(24))},function(e,t,n){"use strict";var r,o,i=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(t){if(r===setTimeout)return setTimeout(t,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{o="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){o=defaultClearTimeout}}();var a,s=[],c=!1,u=-1;function cleanUpNextTick(){c&&a&&(c=!1,a.length?s=a.concat(s):u=-1,s.length&&drainQueue())}function drainQueue(){if(!c){var e=runTimeout(cleanUpNextTick);c=!0;for(var t=s.length;t;){for(a=s,s=[];++u<t;)a&&a[u].run();u=-1,t=s.length}a=null,c=!1,function runClearTimeout(t){if(o===clearTimeout)return clearTimeout(t);if((o===defaultClearTimeout||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{return o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new Item(e,t)),1!==s.length||c||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,te,t){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":n(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _objectSpread(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):t[n]=r})}return o}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _construct(e,t,n){return(_construct=function isNativeReflectConstruct(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function _construct(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{"constructor":{"value":Wrapper,"enumerable":!1,"writable":!0,"configurable":!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(te,"__esModule",{"value":!0}),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}),"function"!=typeof Object.defineProperties&&(Object.defineProperties=function(e,t){function convertToDescriptor(e){function hasProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function isCallable(e){return"function"==typeof e}if("object"!==_typeof(e)||null===e)throw new TypeError("bad desc");var t={};if(hasProperty(e,"enumerable")&&(t.enumerable=!!e.enumerable),hasProperty(e,"configurable")&&(t.configurable=!!e.configurable),hasProperty(e,"value")&&(t.value=e.value),hasProperty(e,"writable")&&(t.writable=!!e.writable),hasProperty(e,"get")){var n=e.get;if(!isCallable(n)&&void 0!==n)throw new TypeError("bad get");t.get=n}if(hasProperty(e,"set")){var r=e.set;if(!isCallable(r)&&void 0!==r)throw new TypeError("bad set");t.set=r}if(("get"in t||"set"in t)&&("value"in t||"writable"in t))throw new TypeError("identity-confused descriptor");return t}if("object"!==_typeof(e)||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=Object.keys(t),r=[],o=0;o<n.length;o++)r.push([n[o],convertToDescriptor(t[n[o]])]);for(o=0;o<r.length;o++)Object.defineProperty(e,r[o][0],r[o][1]);return e});function Wv(e){_classCallCheck(this,Wv),this.state={},this.props=e||{}}var t="Expected a function",r="__lodash_hash_undefined__",o="[object Function]",i="[object GeneratorFunction]",a="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,u=/^\./,d=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,p="object"===(void 0===e?"undefined":_typeof(e))&&e&&e.Object===Object&&e,m="object"===("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,h=p||m||Function("return this")(),y=9007199254740991,g=/^(?:0|[1-9]\d*)$/;var _,v=Array.prototype,b=Function.prototype,S=Object.prototype,C=h["__core-js_shared__"],w=(_=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",P=b.toString,O=S.hasOwnProperty,j=S.toString,k=RegExp("^"+P.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A=h.Symbol,E=v.splice,T=getNative(h,"Map"),x=getNative(Object,"create"),R=A?A.prototype:void 0,I=R?R.toString:void 0;function Hash(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ListCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function MapCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}function baseGet(e,t){for(var n=0,r=(t=function isKey(e,t){if(D(e))return;var n=_typeof(e);if("number"==n||"symbol"==n||"boolean"==n||null==e||isSymbol(e))return 1;return c.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:castPath(t)).length;null!=e&&n<r;)e=e[toKey(t[n++])];return n&&n==r?e:void 0}function baseIsNative(e){return isObject(e)&&!function isMasked(e){return w&&w in e}(e)&&(function isFunction(e){var t=isObject(e)?j.call(e):"";return t==o||t==i}(e)||function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?k:f).test(function toSource(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function castPath(e){return D(e)?e:M(e)}function getMapData(e,t){var n=e.__data__;return function isKeyable(e){var t=_typeof(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function getNative(e,t){var n=function getValue(e,t){return null==e?void 0:e[t]}(e,t);return baseIsNative(n)?n:void 0}Hash.prototype.clear=function hashClear(){this.__data__=x?x(null):{}},Hash.prototype.delete=function hashDelete(e){return this.has(e)&&delete this.__data__[e]},Hash.prototype.get=function hashGet(e){var t=this.__data__;if(x){var n=t[e];return n===r?void 0:n}return O.call(t,e)?t[e]:void 0},Hash.prototype.has=function hashHas(e){var t=this.__data__;return x?void 0!==t[e]:O.call(t,e)},Hash.prototype.set=function hashSet(e,t){return this.__data__[e]=x&&void 0===t?r:t,this},ListCache.prototype.clear=function listCacheClear(){this.__data__=[]},ListCache.prototype.delete=function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);return!(n<0)&&(n==t.length-1?t.pop():E.call(t,n,1),!0)},ListCache.prototype.get=function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return n<0?void 0:t[n][1]},ListCache.prototype.has=function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)},ListCache.prototype.set=function listCacheSet(e,t){var n=this.__data__,r=assocIndexOf(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},MapCache.prototype.clear=function mapCacheClear(){this.__data__={"hash":new Hash,"map":new(T||ListCache),"string":new Hash}},MapCache.prototype.delete=function mapCacheDelete(e){return getMapData(this,e).delete(e)},MapCache.prototype.get=function mapCacheGet(e){return getMapData(this,e).get(e)},MapCache.prototype.has=function mapCacheHas(e){return getMapData(this,e).has(e)},MapCache.prototype.set=function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this};var M=memoize(function(e){e=function toString(e){return null==e?"":function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(e);var o=[];return u.test(e)&&o.push(""),e.replace(d,function(e,t,n,r){o.push(n?r.replace(l,"$1"):t||e)}),o});function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function memoize(o,i){if("function"!=typeof o||i&&"function"!=typeof i)throw new TypeError(t);function Pz(){var e=arguments,t=i?i.apply(this,e):e[0],n=Pz.cache;if(n.has(t))return n.get(t);var r=o.apply(this,e);return Pz.cache=n.set(t,r),r}return Pz.cache=new(memoize.Cache||MapCache),Pz}function eq(e,t){return e===t||e!=e&&t!=t}memoize.Cache=MapCache;var D=Array.isArray;function isObject(e){var t=_typeof(e);return e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"===_typeof(e)||function isObjectLike(e){return!!e&&"object"===_typeof(e)}(e)&&j.call(e)==a}O=Object.prototype.hasOwnProperty;function assignValue(e,t,n){var r=e[t];O.call(e,t)&&eq(r,n)&&(void 0!==n||t in e)||!function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{"configurable":!0,"enumerable":!0,"value":n,"writable":!0}):e[t]=n}(e,t,n)}function get(e,t,n){var r=null==e?void 0:baseGet(e,t);return void 0===r?n:r}function set$1(e,t,n){return null==e?e:function baseSet(e,t,n,r){if(!isObject(e))return e;for(var o,i,a,s=(t=castPath(t)).length,c=s-1,u=-1,d=e;null!=d&&++u<s;){var l=toKey(t[u]),f=n;if(u!=c){var p=d[l];void 0===(f=r?r(p,l,d):void 0)&&(f=isObject(p)?p:(o=t[u+1],i=void 0,a=_typeof(o),(i=null==i?y:i)&&("number"==a||"symbol"!=a&&g.test(o))&&-1<o&&o%1==0&&o<i?[]:{}))}assignValue(d,l,f),d=d[l]}return e}(e,t,n)}var L=/([A-Z])/g;function dashLower(e){return"-"+e.toLowerCase()}function inlineStyle(t){if(null==t)return"";if("string"==typeof t)return t;if(null==t)return"";if(!function isObject$1(e){return null!=e&&"object"===_typeof(e)&&!1===Array.isArray(e)}(t))throw new TypeError("style 只能是一个对象或字符串。");return Object.keys(t).map(function(e){return function dashify(e){return e.replace(L,dashLower)}(e).concat(":").concat(t[e])}).join(";")}var U={"WEAPP":"WEAPP","WEB":"WEB","RN":"RN","SWAN":"SWAN","ALIPAY":"ALIPAY","QUICKAPP":"QUICKAPP","TT":"TT","QQ":"QQ","JD":"JD"},$=null;function getEnv(){return $||("undefined"!=typeof jd&&jd.getSystemInfo?($=U.JD,U.JD):"undefined"!=typeof qq&&qq.getSystemInfo?($=U.QQ,U.QQ):"undefined"!=typeof tt&&tt.getSystemInfo?($=U.TT,U.TT):"undefined"!=typeof wx&&wx.getSystemInfo?($=U.WEAPP,U.WEAPP):"undefined"!=typeof qa&&qa.getSystemInfo?($=U.QUICKAPP,U.QUICKAPP):"undefined"!=typeof swan&&swan.getSystemInfo?($=U.SWAN,U.SWAN):"undefined"!=typeof my&&my.getSystemInfo?($=U.ALIPAY,U.ALIPAY):void 0!==e&&e.__fbGenNativeModule?($=U.RN,U.RN):"undefined"!=typeof window?($=U.WEB,U.WEB):"Unknown environment")}var F=null;function getOriginal(e){return null===F&&(F=getEnv()),function isObject$2(e){return e===Object(e)&&"function"!=typeof e}(e)&&e[F===U.SWAN?"privateOriginal":"$original"]||e}var N=function(){function Events(e){_classCallCheck(this,Events),void 0!==e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}return _createClass(Events,[{"key":"on","value":function on(e,t,n){var r,o,i,a,s;if(!t)return this;for(e=e.split(Events.eventSplitter),r=this.callbacks;o=e.shift();)(i=(s=r[o])?s.tail:{}).next=a={},i.context=n,i.callback=t,r[o]={"tail":a,"next":s?s.next:i};return this}},{"key":"once","value":function once(r,o,i){var a=this;return this.on(r,function wrapper(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o.apply(a,t),a.off(r,wrapper,i)},i),this}},{"key":"off","value":function off(e,t,n){var r,o,i,a,s,c;if(!(o=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(Events.eventSplitter):Object.keys(o);r=e.shift();)if(i=o[r],delete o[r],i&&(t||n))for(a=i.tail;(i=i.next)!==a;)s=i.callback,c=i.context,(t&&s!==t||n&&c!==n)&&this.on(r,s,c);return this}},{"key":"trigger","value":function trigger(e){var t,n,r,o,i;if(!(r=this.callbacks))return this;for(e=e.split(Events.eventSplitter),i=[].slice.call(arguments,1);t=e.shift();)if(n=r[t])for(o=n.tail;(n=n.next)!==o;)n.callback.apply(n.context||this,i);return this}}]),Events}();function render(){}function createRef(){return{"current":null}}function commitAttachRef(e,t,n,r){4<arguments.length&&void 0!==arguments[4]&&arguments[4]&&!t||("refName"in e&&e.refName?r[e.refName]=t:"fn"in e&&"function"==typeof e.fn?e.fn.call(n,t):e.fn&&"object"===_typeof(e.fn)&&"current"in e.fn&&(e.fn.current=t))}function detachAllRef(t){t.$$refs&&0<t.$$refs.length&&(t.$$refs.forEach(function(e){"function"==typeof e.fn?e.fn.call(t,null):e.fn&&"object"===_typeof(e.fn)&&"current"in e.fn&&(e.fn.current=null),"target"in e&&delete e.target}),t.refs={})}N.eventSplitter=/\s+/;var W=function(){function RefsArray(){var e,t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return _classCallCheck(this,RefsArray),(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(RefsArray)).call.apply(e,[this].concat(_toConsumableArray(n))))).inited=!1,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(RefsArray,_wrapNativeSuper(Array)),_createClass(RefsArray,[{"key":"pushRefs","value":function pushRefs(e){var t=this;this.inited||(e.forEach(function(e){return t.pushRef(e)}),this.inited=!0)}},{"key":"pushRef","value":function pushRef(t){this.find(function(e){return e.id===t.id})||this.push(t)}}]),RefsArray}();function handleLoopRef(a){return function(e,t,n,r){if(!e)return null;var o=a(e,t,n),i=_typeof(r);if("function"!==i&&"object"!==i)return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(i));"object"===i?r.current=o:"function"===i&&r.call(e.$component,o)}}var q=function(){function Chain(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;_classCallCheck(this,Chain),this.index=n,this.requestParams=e,this.interceptors=t}return _createClass(Chain,[{"key":"proceed","value":function proceed(e){if(this.requestParams=e,this.index>=this.interceptors.length)throw new Error("chain 参数错误, 请勿直接修改 request.chain");var t=this._getNextInterceptor()(this._getNextChain()),n=t.catch(function(e){return Promise.reject(e)});return"function"==typeof t.abort&&(n.abort=t.abort),n}},{"key":"_getNextInterceptor","value":function _getNextInterceptor(){return this.interceptors[this.index]}},{"key":"_getNextChain","value":function _getNextChain(){return new Chain(this.requestParams,this.interceptors,this.index+1)}}]),Chain}(),B=function(){function Link(e){_classCallCheck(this,Link),this.taroInterceptor=e,this.chain=new q}return _createClass(Link,[{"key":"request","value":function request(e){var t=this;return this.chain.interceptors=this.chain.interceptors.filter(function(e){return e!==t.taroInterceptor}),this.chain.interceptors.push(this.taroInterceptor),this.chain.proceed(_objectSpread({},e))}},{"key":"addInterceptor","value":function addInterceptor(e){this.chain.interceptors.push(e)}},{"key":"cleanInterceptors","value":function cleanInterceptors(){this.chain=new q}}]),Link}();var G=Object.freeze({"timeoutInterceptor":function timeoutInterceptor(e){var o,i=e.requestParams,t=new Promise(function(t,n){var r=setTimeout(function(){r=null,n(new Error("网络链接超时,请稍后再试！"))},i&&i.timeout||6e4);(o=e.proceed(i)).then(function(e){r&&(clearTimeout(r),t(e))}).catch(function(e){r&&clearTimeout(r),n(e)})});return"function"==typeof o.abort&&(t.abort=o.abort),t},"logInterceptor":function logInterceptor(e){var t=e.requestParams,n=t.method,r=t.data,o=t.url;console.log("http ".concat(n||"GET"," --\x3e ").concat(o," data: "),r);var i=e.proceed(t),a=i.then(function(e){return console.log("http <-- ".concat(o," result:"),e),e});return"function"==typeof i.abort&&(a.abort=i.abort),a}}),H={"onSocketOpen":!0,"onSocketError":!0,"onSocketMessage":!0,"onSocketClose":!0,"onBackgroundAudioPlay":!0,"onBackgroundAudioPause":!0,"onBackgroundAudioStop":!0,"onNetworkStatusChange":!0,"onAccelerometerChange":!0,"offAccelerometerChange":!0,"onCompassChange":!0,"onBluetoothAdapterStateChange":!0,"onBluetoothDeviceFound":!0,"onBLEConnectionStateChange":!0,"onBLECharacteristicValueChange":!0,"onBeaconUpdate":!0,"onBeaconServiceChange":!0,"onUserCaptureScreen":!0,"onHCEMessage":!0,"onGetWifiList":!0,"onWifiConnected":!0,"offWifiConnected":!0,"offGetWifiList":!0,"onDeviceMotionChange":!0,"setStorageSync":!0,"getStorageSync":!0,"getStorageInfoSync":!0,"removeStorageSync":!0,"clearStorageSync":!0,"getSystemInfoSync":!0,"getExtConfigSync":!0,"getLogManager":!0,"onMemoryWarning":!0,"reportMonitor":!0,"reportAnalytics":!0,"navigateToSmartGameProgram":!0,"getFileSystemManager":!0,"getLaunchOptionsSync":!0,"onPageNotFound":!0,"onError":!0,"onAppShow":!0,"onAppHide":!0,"offPageNotFound":!0,"offError":!0,"offAppShow":!0,"offAppHide":!0,"onAudioInterruptionEnd":!0,"onAudioInterruptionBegin":!0,"onLocationChange":!0,"offLocationChange":!0},z={"stopRecord":!0,"getRecorderManager":!0,"pauseVoice":!0,"stopVoice":!0,"pauseBackgroundAudio":!0,"stopBackgroundAudio":!0,"getBackgroundAudioManager":!0,"createAudioContext":!0,"createInnerAudioContext":!0,"createVideoContext":!0,"createCameraContext":!0,"createLivePlayerContext":!0,"createLivePusherContext":!0,"createMapContext":!0,"canIUse":!0,"startAccelerometer":!0,"stopAccelerometer":!0,"startCompass":!0,"stopCompass":!0,"hideToast":!0,"hideLoading":!0,"showNavigationBarLoading":!0,"hideNavigationBarLoading":!0,"createAnimation":!0,"createSelectorQuery":!0,"createOffscreenCanvas":!0,"createCanvasContext":!0,"drawCanvas":!0,"hideKeyboard":!0,"stopPullDownRefresh":!0,"createIntersectionObserver":!0,"nextTick":!0,"getMenuButtonBoundingClientRect":!0,"onWindowResize":!0,"offWindowResize":!0,"arrayBufferToBase64":!0,"base64ToArrayBuffer":!0,"getAccountInfoSync":!0,"getUpdateManager":!0,"createWorker":!0,"createRewardedVideoAd":!0,"createInterstitialAd":!0,"getRealtimeLogManager":!0},V={"uploadFile":!0,"downloadFile":!0,"connectSocket":!0,"sendSocketMessage":!0,"closeSocket":!0,"chooseImage":!0,"chooseMessageFile":!0,"previewImage":!0,"getImageInfo":!0,"compressImage":!0,"saveImageToPhotosAlbum":!0,"startRecord":!0,"playVoice":!0,"setInnerAudioOption":!0,"getAvailableAudioSources":!0,"getBackgroundAudioPlayerState":!0,"playBackgroundAudio":!0,"seekBackgroundAudio":!0,"chooseVideo":!0,"saveVideoToPhotosAlbum":!0,"loadFontFace":!0,"saveFile":!0,"getFileInfo":!0,"getSavedFileList":!0,"getSavedFileInfo":!0,"removeSavedFile":!0,"openDocument":!0,"setStorage":!0,"getStorage":!0,"getStorageInfo":!0,"removeStorage":!0,"clearStorage":!0,"navigateBack":!0,"navigateTo":!0,"redirectTo":!0,"switchTab":!0,"reLaunch":!0,"startLocationUpdate":!0,"startLocationUpdateBackground":!0,"stopLocationUpdate":!0,"getLocation":!0,"chooseLocation":!0,"openLocation":!0,"getSystemInfo":!0,"getNetworkType":!0,"makePhoneCall":!0,"scanCode":!0,"setClipboardData":!0,"getClipboardData":!0,"openBluetoothAdapter":!0,"closeBluetoothAdapter":!0,"getBluetoothAdapterState":!0,"startBluetoothDevicesDiscovery":!0,"stopBluetoothDevicesDiscovery":!0,"getBluetoothDevices":!0,"getConnectedBluetoothDevices":!0,"createBLEConnection":!0,"closeBLEConnection":!0,"getBLEDeviceServices":!0,"getBLEDeviceCharacteristics":!0,"readBLECharacteristicValue":!0,"writeBLECharacteristicValue":!0,"notifyBLECharacteristicValueChange":!0,"startBeaconDiscovery":!0,"stopBeaconDiscovery":!0,"getBeacons":!0,"setScreenBrightness":!0,"getScreenBrightness":!0,"setKeepScreenOn":!0,"vibrateLong":!0,"vibrateShort":!0,"addPhoneContact":!0,"getHCEState":!0,"startHCE":!0,"stopHCE":!0,"sendHCEMessage":!0,"startWifi":!0,"stopWifi":!0,"connectWifi":!0,"getWifiList":!0,"setWifiList":!0,"getConnectedWifi":!0,"startDeviceMotionListening":!0,"stopDeviceMotionListening":!0,"pageScrollTo":!0,"showToast":!0,"showLoading":!0,"showModal":!0,"showActionSheet":!0,"setNavigationBarTitle":!0,"setNavigationBarColor":!0,"setTabBarBadge":!0,"removeTabBarBadge":!0,"showTabBarRedDot":!0,"hideTabBarRedDot":!0,"setTabBarStyle":!0,"setTabBarItem":!0,"showTabBar":!0,"hideTabBar":!0,"setTopBarText":!0,"startPullDownRefresh":!0,"canvasToTempFilePath":!0,"canvasGetImageData":!0,"canvasPutImageData":!0,"setBackgroundColor":!0,"setBackgroundTextStyle":!0,"getSelectedTextRange":!0,"hideHomeButton":!0,"getExtConfig":!0,"login":!0,"checkSession":!0,"authorize":!0,"getUserInfo":!0,"checkIsSupportFacialRecognition":!0,"startFacialRecognitionVerify":!0,"startFacialRecognitionVerifyAndUploadVideo":!0,"faceVerifyForPay":!0,"requestPayment":!0,"showShareMenu":!0,"hideShareMenu":!0,"updateShareMenu":!0,"getShareInfo":!0,"chooseAddress":!0,"addCard":!0,"openCard":!0,"openSetting":!0,"getSetting":!0,"getWeRunData":!0,"navigateToMiniProgram":!0,"navigateBackMiniProgram":!0,"chooseInvoice":!0,"chooseInvoiceTitle":!0,"checkIsSupportSoterAuthentication":!0,"startSoterAuthentication":!0,"checkIsSoterEnrolledInDevice":!0,"requestSubscribeMessage":!0,"setEnableDebug":!0,"getOpenUserInfo":!0,"ocrIdCard":!0,"ocrBankCard":!0,"ocrDrivingLicense":!0,"ocrVehicleLicense":!0,"textReview":!0,"textToAudio":!0,"imageAudit":!0,"advancedGeneralIdentify":!0,"objectDetectIdentify":!0,"carClassify":!0,"dishClassify":!0,"logoClassify":!0,"animalClassify":!0,"plantClassify":!0,"setPageInfo":!0,"getSwanId":!0,"requestPolymerPayment":!0,"navigateToSmartProgram":!0,"navigateBackSmartProgram":!0,"preloadSubPackage":!0};function initPxTransform(e){var t=e.designWidth,n=void 0===t?700:t,r=e.deviceRatio,o=void 0===r?{"640":1.17,"750":1,"828":.905}:r;this.config=this.config||{},this.config.designWidth=n,this.config.deviceRatio=o}function objectIs(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function isFunction$1(e){return"function"==typeof e}var Q="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;function isUndefined(e){return void 0===e}function isNullOrUndef(e){return isUndefined(e)||null===e}var K=!0;function getIsUsingDiff(){return K}function setIsUsingDiff(e){K=Boolean(e)}function forceUpdateCallback(){}function getHooks(e){if(null===te.Current.current)throw new Error("invalid hooks call: hooks can only be called in a stateless component.");var t=te.Current.current.hooks;return e>=t.length&&t.push({}),t[e]}function useState(e){isFunction$1(e)&&(e=e());var n=getHooks(te.Current.index++);return n.state||(n.component=te.Current.current,n.state=[e,function(e){var t=isFunction$1(e)?e(n.state[0]):e;n.state[0]!==t&&(n.state[0]=t,n.component._disable=!1,n.component.setState({},forceUpdateCallback))}]),n.state}function usePageLifecycle(e,t){var n=getHooks(te.Current.index++);if(n.marked)n.callback=e;else{n.marked=!0,n.component=te.Current.current,n.callback=e;var r=n.component,o=r[t];n.component[t]=function(){var e=n.callback;return o&&o.call.apply(o,[r].concat(Array.prototype.slice.call(arguments))),e&&e.call.apply(e,[r].concat(Array.prototype.slice.call(arguments)))}}}function useDidShow(e){usePageLifecycle(e,"componentDidShow")}function useDidHide(e){usePageLifecycle(e,"componentDidHide")}function usePullDownRefresh(e){usePageLifecycle(e,"onPullDownRefresh")}function useReachBottom(e){usePageLifecycle(e,"onReachBottom")}function usePageScroll(e){usePageLifecycle(e,"onPageScroll")}function useResize(e){usePageLifecycle(e,"onResize")}function useShareAppMessage(e){usePageLifecycle(e,"onShareAppMessage")}function useTabItemTap(e){usePageLifecycle(e,"onTabItemTap")}function useRouter(){var e=getHooks(te.Current.index++);return e.router||(e.component=te.Current.current,e.router=e.component.$router),e.router}function useScope(){var e=getHooks(te.Current.index++);return e.scope||(e.component=te.Current.current,e.scope=e.component.$scope),e.scope}function useReducer(t,e,n){isFunction$1(e)&&(e=e());var r=getHooks(te.Current.index++);return r.state||(r.component=te.Current.current,r.state=[isUndefined(n)?e:n(e),function(e){r.state[0]=t(r.state[0],e),r.component._disable=!1,r.component.setState({},forceUpdateCallback)}]),r.state}function areDepsChanged(n,e){return isNullOrUndef(n)||isNullOrUndef(e)||e.some(function(e,t){return!objectIs(e,n[t])})}function invokeEffects(e,t){(t?e.effects:e.layoutEffects).forEach(function(e){isFunction$1(e.cleanup)&&e.cleanup();var t=e.effect();isFunction$1(t)&&(e.cleanup=t)}),t?e.effects=[]:e.layoutEffects=[]}te.Current={"current":null,"index":0};var J=[];function useEffectImpl(e,t,n){var r=getHooks(te.Current.index++);!te.Current.current._disableEffect&&te.Current.current.__isReady&&areDepsChanged(r.deps,t)&&(r.effect=e,r.deps=t,n?(te.Current.current.effects=te.Current.current.effects.concat(r),function invokeScheduleEffects(e){e._afterScheduleEffect||(e._afterScheduleEffect=!0,J.push(e),1===J.length&&Q(function(){setTimeout(function(){J.forEach(function(e){e._afterScheduleEffect=!1,invokeEffects(e,!0)}),J=[]},0)}))}(te.Current.current)):te.Current.current.layoutEffects=te.Current.current.layoutEffects.concat(r))}function useEffect(e,t){useEffectImpl(e,t,!0)}function useLayoutEffect(e,t){useEffectImpl(e,t)}function useRef(e){var t=getHooks(te.Current.index++);return t.ref||(t.ref={"current":e}),t.ref}function useMemo(e,t){var n=getHooks(te.Current.index++);return areDepsChanged(n.deps,t)&&(n.deps=t,n.callback=e,n.value=e()),n.value}function useCallback(e,t){return useMemo(function(){return e},t)}function useImperativeHandle(e,t,n){useLayoutEffect(function(){return isFunction$1(e)?(e(t()),function(){return e(null)}):isUndefined(e)?void 0:(e.current=t(),function(){delete e.current})},function isArray$1(e){return Array.isArray(e)}(n)?n.concat([e]):void 0)}function useContext(e){var t=e.context,n=t.emitter;if(null===n)return t._defaultValue;var r=getHooks(te.Current.index++);return isUndefined(r.context)&&(r.context=!0,r.component=te.Current.current,n.on(function(e){r.component&&(r.component._disable=!1,r.component.setState({}))})),n.value}var X=function(){function Emitter(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,Emitter),this.value=e,this.handlers=[]}return _createClass(Emitter,[{"key":"on","value":function on(e){this.handlers.push(e)}},{"key":"off","value":function off(t){this.handlers=this.handlers.filter(function(e){return e!==t})}},{"key":"set","value":function set(e){var t=this;objectIs(e,this.value)||(this.value=e,this.handlers.forEach(function(e){return e(t.value)}))}}]),Emitter}(),Y=0;function createContext(n){var r={"emitter":null,"_id":"__context_"+Y+++"__","_defaultValue":n};return{"Provider":function Provider(e){var t=r.emitter;t?t.set(e):r.emitter=new X(n)},"context":r}}var Z=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};function memo(e,t){return e.prototype.shouldComponentUpdate=function(e){return isFunction$1(t)?!t(this.props,e):!function shallowEqual(e,t){if("object"!==_typeof(e)&&"object"!==_typeof(t))return e===t;if(null===e&&null===t)return 1;if(null!==e&&null!==t){if(Z(e,t))return 1;var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length){for(var o=0;o<n.length;o++){var i=n[o];if(!t.hasOwnProperty(i)||!Z(e[i],t[i]))return}return 1}}}(this.props,e)},e}te.eventCenter=new N;var ee={"Component":Wv,"Events":N,"eventCenter":te.eventCenter,"getEnv":getEnv,"ENV_TYPE":U,"render":render,"internal_safe_get":get,"internal_safe_set":set$1,"internal_inline_style":inlineStyle,"internal_get_original":getOriginal,"internal_force_update":forceUpdateCallback,"noPromiseApis":z,"onAndSyncApis":H,"otherApis":V,"initPxTransform":initPxTransform,"createRef":createRef,"commitAttachRef":commitAttachRef,"detachAllRef":detachAllRef,"Link":B,"interceptors":G,"RefsArray":W,"handleLoopRef":handleLoopRef,"Current":te.Current,"useEffect":useEffect,"useLayoutEffect":useLayoutEffect,"useReducer":useReducer,"useState":useState,"useDidShow":useDidShow,"useDidHide":useDidHide,"usePullDownRefresh":usePullDownRefresh,"useReachBottom":useReachBottom,"usePageScroll":usePageScroll,"useResize":useResize,"useShareAppMessage":useShareAppMessage,"useTabItemTap":useTabItemTap,"useRouter":useRouter,"useScope":useScope,"useRef":useRef,"useCallback":useCallback,"useMemo":useMemo,"useImperativeHandle":useImperativeHandle,"invokeEffects":invokeEffects,"useContext":useContext,"createContext":createContext,"memo":memo,"getIsUsingDiff":getIsUsingDiff,"setIsUsingDiff":setIsUsingDiff};te.Component=Wv,te.Events=N,te.getEnv=getEnv,te.ENV_TYPE=U,te.render=render,te.internal_safe_get=get,te.internal_safe_set=set$1,te.internal_inline_style=inlineStyle,te.internal_get_original=getOriginal,te.internal_force_update=forceUpdateCallback,te.noPromiseApis=z,te.onAndSyncApis=H,te.otherApis=V,te.initPxTransform=initPxTransform,te.createRef=createRef,te.commitAttachRef=commitAttachRef,te.detachAllRef=detachAllRef,te.Link=B,te.interceptors=G,te.RefsArray=W,te.handleLoopRef=handleLoopRef,te.useEffect=useEffect,te.useLayoutEffect=useLayoutEffect,te.useReducer=useReducer,te.useState=useState,te.useDidShow=useDidShow,te.useDidHide=useDidHide,te.usePullDownRefresh=usePullDownRefresh,te.useReachBottom=useReachBottom,te.usePageScroll=usePageScroll,te.useResize=useResize,te.useShareAppMessage=useShareAppMessage,te.useTabItemTap=useTabItemTap,te.useRouter=useRouter,te.useScope=useScope,te.useRef=useRef,te.useCallback=useCallback,te.useMemo=useMemo,te.useImperativeHandle=useImperativeHandle,te.invokeEffects=invokeEffects,te.useContext=useContext,te.createContext=createContext,te.memo=memo,te.getIsUsingDiff=getIsUsingDiff,te.setIsUsingDiff=setIsUsingDiff,te.default=ee}).call(this,t(6))},function(e,c,u){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(c,"__esModule",{"value":!0});var f=u(14),t=function _interopDefault(e){return e&&"object"===(void 0===e?"undefined":n(e))&&"default"in e?e.default:e}(f),r=null,o=e||{};Object.getPrototypeOf(o);function getStore(){return r}function setStore(e){r=e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function _typeof(e){return void 0===e?"undefined":n(e)}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(e,t,n){var r=function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function isObject(e){return null!=e&&"object"===_typeof(e)&&!Array.isArray(e)}function mergeObjects(e,t){var n=Object.assign({},e);if(isObject(e)&&isObject(t))for(var r in t)isObject(e[r])&&isObject(t[r])?n[r]=mergeObjects(e[r],t[r]):n[r]=t[r];return n}function connect(i,e){var a=getStore(),t=a.dispatch,s=function wrapPropsWithDispatch(r,o){return"function"==typeof r?r(o):isObject(r)?Object.keys(r).reduce(function(e,t){var n=r[t];return"function"==typeof n&&(e[t]=function(){return o(n.apply(void 0,arguments))}),e},{}):{}}(e,t);s.dispatch=t;return function connectComponent(t){var e=i(a.getState(),t.defaultProps||{});t.properties&&e&&Object.keys(e).forEach(function(e){delete t.properties[e]});var n=null;return function(){function Connect(e,t){var n;return _classCallCheck(this,Connect),n=_possibleConstructorReturn(this,_getPrototypeOf(Connect).call(this,Object.assign.apply(Object,Array.prototype.slice.call(arguments).concat([mergeObjects(i(a.getState(),e),s)])),t)),Object.keys(s).forEach(function(e){n["__event_".concat(e)]=s[e]}),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&_setPrototypeOf(e,t)}(Connect,t),_createClass(Connect,[{"key":"_constructor","value":function _constructor(){if(this.$scope){var e=getStore();Object.assign(this.props,mergeObjects(i(e.getState(),this.props),s)),n=e.subscribe(function stateListener(){var n=this,r=!1,o=i(a.getState(),this.props),e=Object.assign({},this.props);Object.keys(o).forEach(function(e){var t=o[e];isObject(t)&&isObject(s[e])&&(t=mergeObjects(t,s[e])),n.props[e]!==t&&(n.props[e]=t,r=!0)}),r&&(this.prevProps=e,this._unsafeCallUpdate=!0,this.setState({},function(){delete n._unsafeCallUpdate}))}.bind(this)),_get(_getPrototypeOf(Connect.prototype),"_constructor",this)&&_get(_getPrototypeOf(Connect.prototype),"_constructor",this).call(this,this.props)}else _get(_getPrototypeOf(Connect.prototype),"_constructor",this)&&_get(_getPrototypeOf(Connect.prototype),"_constructor",this).call(this,this.props)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){_get(_getPrototypeOf(Connect.prototype),"componentWillUnmount",this)&&_get(_getPrototypeOf(Connect.prototype),"componentWillUnmount",this).call(this),n&&n(),n=null}}]),Connect}()}}function nE(){_classCallCheck(this,nE)}var i=t.createContext(null);function useReduxContext(){return f.useContext(i)}function useStore(){return useReduxContext().store}function useDispatch(){return useStore().dispatch}function pE(e){e()}var a={"notify":function notify(){}};function createListenerCollection(){var e=function getBatch(){return pE}(),n=[],r=[];return{"clear":function clear(){n=r=null},"notify":function notify(){var t=n=r;e(function(){for(var e=0;e<t.length;e++)t[e]()})},"get":function get(){return r},"subscribe":function subscribe(e){var t=!0;return r===n&&(r=n.slice()),r.push(e),function unsubscribe(){t&&null!==n&&(t=!1,r===n&&(r=n.slice()),r.splice(r.indexOf(e),1))}}}}var p=function(){function Subscription(e,t){_classCallCheck(this,Subscription),this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=a,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return _createClass(Subscription,[{"key":"addNestedSub","value":function addNestedSub(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{"key":"notifyNestedSubs","value":function notifyNestedSubs(){this.listeners.notify()}},{"key":"handleChangeWrapper","value":function handleChangeWrapper(){this.onStateChange&&this.onStateChange()}},{"key":"isSubscribed","value":function isSubscribed(){return Boolean(this.unsubscribe)}},{"key":"trySubscribe","value":function trySubscribe(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=createListenerCollection())}},{"key":"tryUnsubscribe","value":function tryUnsubscribe(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)}}]),Subscription}();function uE(e,t){return e===t}function useSelector(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:uE;!function invariant(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],d=0;(c=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}(e,"You must pass a selector to useSelectors");var n,r=useReduxContext(),o=r.store,i=r.subscription,a=_slicedToArray(f.useReducer(function(e){return e+1},0),2)[1],s=f.useMemo(function(){return new p(o,i)},[o,i]),c=f.useRef(),u=f.useRef(),d=f.useRef();try{n=e!==u.current||c.current?e(o.getState()):d.current}catch(e){var l="An error occured while selecting the store state: ".concat(e.message,".");throw c.current&&(l+="\nThe error may be correlated with this previous error:\n".concat(c.current.stack,"\n\nOriginal stack trace:")),new Error(l)}return f.useEffect(function(){u.current=e,d.current=n,c.current=void 0}),f.useEffect(function(){function checkForUpdates(){try{var e=u.current(o.getState());if(t(e,d.current))return;d.current=e}catch(e){c.current=e}a({})}return s.onStateChange=checkForUpdates,s.trySubscribe(),checkForUpdates(),function(){return s.tryUnsubscribe()}},[o,s]),n}var s={"connect":connect,"Provider":nE,"getStore":getStore,"setStore":setStore,"useDispatch":useDispatch,"useSelector":useSelector,"useStore":useStore,"ReduxContext":i};c.default=s,c.connect=connect,c.Provider=nE,c.getStore=getStore,c.setStore=setStore,c.useDispatch=useDispatch,c.useSelector=useSelector,c.useStore=useStore,c.ReduxContext=i}).call(this,u(6))},,function(e,i,a){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{"value":!0});var n,r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(30));n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:t;var o=(0,r.default)(n);i.default=o}).call(this,a(6),a(29)(e))},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{"enumerable":!0,"get":function get(){return e.l}}),Object.defineProperty(e,"id",{"enumerable":!0,"get":function get(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function symbolObservablePonyfill(e){var t,n=e.Symbol;"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable";return t}},function(e,t,n){"use strict";function createThunkMiddleware(o){return function(e){var n=e.dispatch,r=e.getState;return function(t){return function(e){return"function"==typeof e?e(n,r,o):t(e)}}}}t.__esModule=!0;var r=createThunkMiddleware();r.withExtraArgument=createThunkMiddleware,t.default=r},function(y,g,e){"use strict";(function(A){var e,s,p,h,E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};h=function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}})}function r(e,t){Object.defineProperty(this,"kind",{"value":e,"enumerable":!0}),t&&t.length&&Object.defineProperty(this,"path",{"value":t,"enumerable":!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{"value":t,"enumerable":!0}),Object.defineProperty(this,"rhs",{"value":r,"enumerable":!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{"value":t,"enumerable":!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{"value":t,"enumerable":!0})}function a(e,t,n){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{"value":t,"enumerable":!0}),Object.defineProperty(this,"item",{"value":n,"enumerable":!0})}function f(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function u(e){var t=void 0===e?"undefined":w(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(r,s,c,d,e,t,p){p=p||[];var m=(e=e||[]).slice(0);if(void 0!==t){if(d){if("function"==typeof d&&d(m,t))return;if("object"===(void 0===d?"undefined":w(d))){if(d.prefilter&&d.prefilter(m,t))return;if(d.normalize){var h=d.normalize(m,t,r,s);h&&(r=h[0],s=h[1])}}}m.push(t)}"regexp"===u(r)&&"regexp"===u(s)&&(r=r.toString(),s=s.toString());var y=void 0===r?"undefined":w(r),g=void 0===s?"undefined":w(s),_="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(t),v="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(t);if(!_&&v)c(new o(m,s));else if(!v&&_)c(new i(m,r));else if(u(r)!==u(s))c(new n(m,r,s));else if("date"===u(r)&&r-s!=0)c(new n(m,r,s));else if("object"===y&&null!==r&&null!==s)if(p.filter(function(e){return e.lhs===r}).length)r!==s&&c(new n(m,r,s));else{if(p.push({"lhs":r,"rhs":s}),Array.isArray(r)){var b;for(r.length,b=0;b<r.length;b++)b>=s.length?c(new a(m,b,new i(void 0,r[b]))):l(r[b],s[b],c,d,m,b,p);for(;b<s.length;)c(new a(m,b,new o(void 0,s[b++])))}else{var S=Object.keys(r),C=Object.keys(s);S.forEach(function(e,t){var n=C.indexOf(e);0<=n?(l(r[e],s[e],c,d,m,e,p),C=f(C,n)):l(r[e],void 0,c,d,m,e,p)}),C.forEach(function(e){l(void 0,s[e],c,d,m,e,p)})}p.length=p.length-1}else r!==s&&("number"===y&&isNaN(r)&&isNaN(s)||c(new n(m,r,s)))}function c(e,t,n,r){return r=r||[],l(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function d(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function s(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":s(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":s(e[t],n.index,n.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=n.rhs}return e}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function v(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+j[t].text,function y(e){return"color: "+j[e].color+"; font-weight: bold"}(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,n,r){switch(void 0===e?"undefined":w(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,P(n)):e[r];case"function":return e(t);default:return e}}function x(j,k){var A=k.logger,E=k.actionTransformer,e=k.titleFormatter,T=void 0===e?function w(e){var o=e.timestamp,i=e.duration;return function(e,t,n){var r=["action"];return r.push("%c"+String(e.type)),o&&r.push("%c@ "+t),i&&r.push("%c(in "+n.toFixed(2)+" ms)"),r.join(" ")}}(k):e,x=k.collapsed,R=k.colors,I=k.level,M=k.diff,D=void 0===k.titleFormatter;j.forEach(function(e,t){var n=e.started,r=e.startedTime,o=e.action,i=e.prevState,a=e.error,s=e.took,c=e.nextState,u=j[t+1];u&&(c=u.prevState,s=u.started-n);var d=E(o),l="function"==typeof x?x(function(){return c},o,e):x,f=L(r),p=R.title?"color: "+R.title(d)+";":"",h=["color: gray; font-weight: lighter;"];h.push(p),k.timestamp&&h.push("color: gray; font-weight: lighter;"),k.duration&&h.push("color: gray; font-weight: lighter;");var y=T(d,f,s);try{l?R.title&&D?A.groupCollapsed.apply(A,["%c "+y].concat(h)):A.groupCollapsed(y):R.title&&D?A.group.apply(A,["%c "+y].concat(h)):A.group(y)}catch(e){A.log(y)}var g=m(I,d,[i],"prevState"),_=m(I,d,[d],"action"),v=m(I,d,[a,i],"error"),S=m(I,d,[c],"nextState");if(g)if(R.prevState){var C="color: "+R.prevState(i)+"; font-weight: bold";A[g]("%c prev state",C,i)}else A[g]("prev state",i);if(_)if(R.action){var w="color: "+R.action(d)+"; font-weight: bold";A[_]("%c action    ",w,d)}else A[_]("action    ",d);if(a&&v)if(R.error){var P="color: "+R.error(a,i)+"; font-weight: bold;";A[v]("%c error     ",P,a)}else A[v]("error     ",a);if(S)if(R.nextState){var O="color: "+R.nextState(c)+"; font-weight: bold";A[S]("%c next state",O,c)}else A[S]("next state",c);M&&b(i,c,A,l);try{A.groupEnd()}catch(e){A.log("—— log end ——")}})}function S(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign({},k,e),t=a.logger,s=a.stateTransformer,c=a.errorTransformer,u=a.predicate,d=a.logErrors,l=a.diffPredicate;if(void 0===t)return function(){return function(t){return function(e){return t(e)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(t){return function(e){return t(e)}}};var f=[];return function(e){var i=e.getState;return function(o){return function(e){if("function"==typeof u&&!u(i,e))return o(e);var t={};f.push(t),t.started=C.now(),t.startedTime=new Date,t.prevState=s(i()),t.action=e;var n=void 0;if(d)try{n=o(e)}catch(e){t.error=c(e)}else n=o(e);t.took=C.now()-t.started,t.nextState=s(i());var r=a.diff&&"function"==typeof l?l(i,e):a.diff;if(x(f,Object.assign({},a,{"diff":r})),f.length=0,t.error)throw t.error;return n}}}}function HH(e,t){return function E(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e}var _,v,L=function D(e){return HH(e.getHours(),2)+":"+HH(e.getMinutes(),2)+":"+HH(e.getSeconds(),2)+"."+HH(e.getMilliseconds(),3)},C="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,w="function"==typeof Symbol&&"symbol"==E(Symbol.iterator)?function(e){return void 0===e?"undefined":E(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":E(e)},P=function P(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},O=[];_="object"===(void 0===A?"undefined":w(A))&&A?A:"undefined"!=typeof window?window:{},(v=_.DeepDiff)&&O.push(function(){void 0!==v&&_.DeepDiff===c&&(_.DeepDiff=v,v=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{"diff":{"value":c,"enumerable":!0},"observableDiff":{"value":l,"enumerable":!0},"applyDiff":{"value":function h(t,r,o){if(t&&r){l(t,r,function n(e){o&&!o(t,r,e)||d(t,r,e)})}},"enumerable":!0},"applyChange":{"value":d,"enumerable":!0},"revertChange":{"value":function g(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":!function p(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":p(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":p(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=f(e,t)}return e}(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}},"enumerable":!0},"isConflict":{"value":function value(){return void 0!==v},"enumerable":!0},"noConflict":{"value":function value(){return O&&(O.forEach(function(e){e()}),O=null),c},"enumerable":!0}});function PH(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.dispatch,r=t.getState;return"function"==typeof n||"function"==typeof r?S()({"dispatch":n,"getState":r}):void 0}var j={"E":{"color":"#2196F3","text":"CHANGED:"},"N":{"color":"#4CAF50","text":"ADDED:"},"D":{"color":"#F44336","text":"DELETED:"},"A":{"color":"#2196F3","text":"ARRAY:"}},k={"level":"log","logger":console,"logErrors":!0,"collapsed":void 0,"predicate":void 0,"duration":!1,"timestamp":!0,"stateTransformer":function stateTransformer(e){return e},"actionTransformer":function actionTransformer(e){return e},"errorTransformer":function errorTransformer(e){return e},"colors":{"title":function title(){return"inherit"},"prevState":function prevState(){return"#9E9E9E"},"action":function action(){return"#03A9F4"},"nextState":function nextState(){return"#4CAF50"},"error":function error(){return"#F20404"}},"diff":!1,"diffPredicate":void 0,"transformer":void 0};e.defaults=k,e.createLogger=S,e.logger=PH,e.default=PH,Object.defineProperty(e,"__esModule",{"value":!0})},"object"==E(g)&&void 0!==y?h(g):(s=[g],void 0===(p="function"==typeof(e=h)?e.apply(g,s):e)||(y.exports=p))}).call(this,e(6))},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.context=void 0;var I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=n(0),L=_interopRequireDefault(D),U=_interopRequireDefault(n(43)),$=_interopRequireDefault(n(46)),F=_interopRequireDefault(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(47);var N=t.context=(0,D.createContext)({}),o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PublishRecruit,L.default.Component),r(PublishRecruit,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(PublishRecruit.prototype.__proto__||Object.getPrototypeOf(PublishRecruit.prototype),"_constructor",this).call(this,e),this.$$refs=new L.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){function OM(e){x(e)}function TM(e,t){var n=e.detail.value,r=JSON.parse(JSON.stringify(_));r[t]=n,v(r)}this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,o=(0,D.genCompid)(r+"$compid__16"),i=M(o,2),a=i[0],s=i[1],c=(0,D.genCompid)(r+"$compid__17"),u=M(c,2),d=u[0],l=u[1],f=(0,D.genCompid)(r+"$compid__18"),p=M(f,2),m=p[0],h=p[1],y={"type":"job","infoId":(0,D.useRouter)().params.id||""},g=(0,U.default)(y),_=g.model,v=g.setModel,b=g.showUpload,S=g.setShowUpload,C=g.showProfession,w=g.setShowProssion,P=g.area,O=g.setArea,j=g.setAreaInfo,k=g.getPublishRecruitInfo,A=(0,D.useState)(!1),E=M(A,2),T=E[0],x=E[1],R={"area":P,"setArea":function setArea(e){return O(e)},"setAreaInfo":function setAreaInfo(e){return j(e)},"setPublishArea":function setPublishArea(e){_&&v(I({},_,{"address":e}))}};return N.Provider(R),this.anonymousFunc0=function(e,t,n){return function userClickProfession(e,t,n){if(_){var r=JSON.parse(JSON.stringify(_.classifyTree)),o=r[e].children[t].is_check;if(!o){var i=_.maxClassifyCount;if(i<=_.classifies.length)return void(0,F.default)("工种最多可以选择"+i+"个")}r[e].children[t].is_check=!o;var a=JSON.parse(JSON.stringify(_.classifies)),s=o?a.filter(function(e){return e!==n}):[].concat(_toConsumableArray(a),[n]);v(I({},_,{"classifyTree":r,"classifies":s}))}}(e,t,n)},this.anonymousFunc1=function(e){return TM(e,"title")},this.anonymousFunc2=function(){return function showProfessionAction(){w(!0)}()},this.anonymousFunc3=function(){return function userChooseArea(){_&&L.default.navigateTo({"url":"/pages/map/recruit/index"})}()},this.anonymousFunc4=function(e){return TM(e,"user_name")},this.anonymousFunc5=function(e){return TM(e,"user_mobile")},this.anonymousFunc6=function(){return OM(!0)},this.anonymousFunc7=function(){return OM(!1)},this.anonymousFunc8=function(e){return TM(e,"detail")},this.anonymousFunc9=function(){return function changeShowUpload(){S(!b)}()},this.anonymousFunc10=function(){return function userPublishRecruit(){var e=k();console.log(e)}()},C&&D.propsManager.set({"closeProfession":function closeProfession(){w(!1)},"data":_&&_.classifyTree,"onClickItem":this.anonymousFunc0,"num":3},s,a),D.propsManager.set({"num":0},l,d),b&&_&&D.propsManager.set({"images":_.view_images,"max":_.maxImageCount,"userUploadImg":function userUploadImg(e){var n=0<arguments.length&&void 0!==e?e:-1;(0,$.default)().then(function(e){var t={"url":e.url,"httpurl":e.httpurl};_&&(-1===n?v(I({},_,{"view_images":[].concat(_toConsumableArray(_.view_images),[t])})):(_.view_images[n]=t,v(I({},_))))})}},h,m),Object.assign(this.__state,{"model":_,"$compid__16":s,"$compid__17":l,"$compid__18":h,"showProfession":C,"textFocus":T,"showUpload":b}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}}]),PublishRecruit);function PublishRecruit(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PublishRecruit);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PublishRecruit.__proto__||Object.getPrototypeOf(PublishRecruit)).apply(this,arguments));return e.$usedState=["model","$compid__16","$compid__17","$compid__18","showProfession","textFocus","showUpload"],e.customComponents=["Profession","WordsTotal","ImageView"],e}o.$$events=["anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10"],o.$$componentPath="pages/recruit/publish/index",t.default=o,Component(n(0).default.createComponent(o,!0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function usePublishViewInfo(r){var e=(0,w.useState)(),t=C(e,2),n=t[0],o=t[1],i=(0,w.useState)(!1),a=C(i,2),s=a[0],c=a[1],u=(0,w.useState)(!1),d=C(u,2),l=d[0],f=d[1],p=(0,w.useState)(k.AREABEIJING.name),m=C(p,2),h=m[0],y=m[1],g=(0,w.useState)({"title":"","adcode":"","location":"","info":""}),_=C(g,2),v=_[0],b=_[1];return(0,w.useEffect)(function(){(0,O.getPublishRecruitView)(r).then(function(e){var t={"placeholder":e.placeholder,"classifies":e.selectedClassifies,"maxImageCount":e.typeTextArr.maxImageCount,"maxClassifyCount":e.typeTextArr.maxClassifyCount,"classifyTree":e.classifyTree,"title":e.model.title||"","address":e.model.address||"","detail":e.model.detail||"","infoId":e.model.id||r.infoId,"type":e.type,"user_mobile":e.model.user_mobile||e.memberInfo.tel||"","code":"","user_name":e.model.user_name,"view_images":e.view_image,"province_id":e.model.province_id||"","city_id":e.model.city_id||"","location":e.model.location||"","adcode":"","county_id":e.model.county_id||""};o(t),function initUserAreaInfo(e){if(r.infoId)y(e.default_search_name.name);else{var t=P.default.getStorageSync(j.UserLocationCity);t?y(t.city):(0,A.userAuthLoction)().then(function(e){y(e.city)}).then(function(){y(k.AREABEIJING.name)})}if(r.infoId)b({"title":e.model.address,"location":e.model.location,"info":"","adcode":e.model.adcode||""});else{var n=P.default.getStorageSync(j.UserLastPublishArea);n&&b(n)}}(e),b(S({},v,{"title":t.address})),e.view_image.length&&c(!0)})},[]),{"model":n,"setModel":o,"showUpload":s,"setShowUpload":c,"showProfession":l,"setShowProssion":f,"getPublishRecruitInfo":function getPublishRecruitInfo(){if(!n)return;return{"title":n.title,"address":v.title+"@@@@@"+v.info,"detail":n.detail,"infoId":n.infoId,"type":n.type,"user_mobile":n.user_mobile,"code":n.code,"user_name":n.user_name,"province_id":n.province_id,"city_id":n.city_id,"location":n.location,"adcode":n.adcode,"county_id":n.county_id,"classifies":n.classifies,"images":n.view_images.map(function(e){return e.url})}},"area":h,"setArea":y,"areaInfo":v,"setAreaInfo":b}};var w=n(0),P=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(w),O=n(2),j=n(3),k=n(8),A=n(9)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.GetUserInviteLink=t.CheckAdcodeValid=t.GetAllAreas=t.GetPublisRecruitView=t.GetIntegralList=t.GetTabbarMsg=t.GetListFilterData=t.GetWechatNotice=t.GetFleamarketlist=t.GetResumelist=t.GetRecruitlist=t.GetAllListItem=t.GetBannerNotice=t.GetUserInfo=t.GetUserSessionKey=void 0;var r=n(1);t.GetUserSessionKey=r.REQUESTURL+"user/user-info/",t.GetUserInfo=r.REQUESTURL+"user/make-user/",t.GetBannerNotice=r.REQUESTURL+"index/index-banner-carousel/",t.GetAllListItem=r.REQUESTURL+"index/new-index-msg/",t.GetRecruitlist=r.REQUESTURL+"job/list-new/",t.GetResumelist=r.REQUESTURL+"resumes/index/",t.GetFleamarketlist=r.REQUESTURL+"index/info-list/",t.GetWechatNotice=r.REQUESTURL+"index/less-search-data/",t.GetListFilterData=r.REQUESTURL+"index/index-search-tree/",t.GetTabbarMsg=r.REQUESTURL+"member/original-message/",t.GetIntegralList=r.REQUESTURL+"integral/integral-record/",t.GetPublisRecruitView=r.REQUESTURL+"publish/new-job/",t.GetAllAreas=r.REQUESTURL+"index/index-area/",t.CheckAdcodeValid=r.REQUESTURL+"publish/checking-adcode/",t.GetUserInviteLink=r.REQUESTURL+"index/invite-friends/"},function(e,t,n){"use strict";function AMapWX(e){this.key=e.key,this.requestConfig={"key":e.key,"s":"rsx","platform":"WXJS","appname":e.key,"sdkversion":"1.2.0","logversion":"2.0"}}AMapWX.prototype.getWxLocation=function(t,n){wx.getLocation({"type":"gcj02","success":function success(e){var t=e.longitude+","+e.latitude;wx.setStorage({"key":"userLocation","data":t}),n(t)},"fail":function fail(e){wx.getStorage({"key":"userLocation","success":function success(e){e.data&&n(e.data)}}),t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getRegeo=function(l){function c(d){var e=t.requestConfig;wx.request({"url":"https://restapi.amap.com/v3/geocode/regeo","data":{"key":t.key,"location":d,"extensions":"all","s":e.s,"platform":e.platform,"appname":t.key,"sdkversion":e.sdkversion,"logversion":e.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n,r,o,i,a,s,c,u;e.data.status&&"1"==e.data.status?(n=(t=e.data.regeocode).addressComponent,r=[],o="",t&&t.roads[0]&&t.roads[0].name&&(o=t.roads[0].name+"附近"),i=d.split(",")[0],a=d.split(",")[1],t.pois&&t.pois[0]&&(o=t.pois[0].name+"附近",(s=t.pois[0].location)&&(i=parseFloat(s.split(",")[0]),a=parseFloat(s.split(",")[1]))),n.provice&&r.push(n.provice),n.city&&r.push(n.city),n.district&&r.push(n.district),n.streetNumber&&n.streetNumber.street&&n.streetNumber.number?(r.push(n.streetNumber.street),r.push(n.streetNumber.number)):(c="",t&&t.roads[0]&&t.roads[0].name&&(c=t.roads[0].name),r.push(c)),r=r.join(""),u=[{"iconPath":l.iconPath,"width":l.iconWidth,"height":l.iconHeight,"name":r,"desc":o,"longitude":i,"latitude":a,"id":0,"regeocodeData":t}],l.success(u)):l.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){l.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var t=this;l.location?c(l.location):t.getWxLocation(l,function(e){c(e)})},AMapWX.prototype.getWeather=function(r){function d(e){var t="base";r.type&&"forecast"==r.type&&(t="all"),wx.request({"url":"https://restapi.amap.com/v3/weather/weatherInfo","data":{"key":n.key,"city":e,"extensions":t,"s":o.s,"platform":o.platform,"appname":n.key,"sdkversion":o.sdkversion,"logversion":o.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n;e.data.status&&"1"==e.data.status?e.data.lives?(t=e.data.lives)&&0<t.length&&((n=function c(e){return{"city":{"text":"城市","data":e.city},"weather":{"text":"天气","data":e.weather},"temperature":{"text":"温度","data":e.temperature},"winddirection":{"text":"风向","data":e.winddirection+"风"},"windpower":{"text":"风力","data":e.windpower+"级"},"humidity":{"text":"湿度","data":e.humidity+"%"}}}(t=t[0])).liveData=t,r.success(n)):e.data.forecasts&&e.data.forecasts[0]&&r.success({"forecast":e.data.forecasts[0]}):r.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){r.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var n=this,o=n.requestConfig;r.city?d(r.city):n.getWxLocation(r,function(e){!function e(t){wx.request({"url":"https://restapi.amap.com/v3/geocode/regeo","data":{"key":n.key,"location":t,"extensions":"all","s":o.s,"platform":o.platform,"appname":n.key,"sdkversion":o.sdkversion,"logversion":o.logversion},"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n;e.data.status&&"1"==e.data.status?((n=e.data.regeocode).addressComponent?t=n.addressComponent.adcode:n.aois&&0<n.aois.length&&(t=n.aois[0].adcode),d(t)):r.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){r.fail({"errCode":"0","errMsg":e.errMsg||""})}})}(e)})},AMapWX.prototype.getPoiAround=function(i){function d(e){var t={"key":n.key,"location":e,"s":r.s,"platform":r.platform,"appname":n.key,"sdkversion":r.sdkversion,"logversion":r.logversion};i.querytypes&&(t.types=i.querytypes),i.querykeywords&&(t.keywords=i.querykeywords),wx.request({"url":"https://restapi.amap.com/v3/place/around","data":t,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){var t,n,r,o;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(t=[],n=0;n<e.pois.length;n++)r=0==n?i.iconPathSelected:i.iconPath,t.push({"latitude":parseFloat(e.pois[n].location.split(",")[1]),"longitude":parseFloat(e.pois[n].location.split(",")[0]),"iconPath":r,"width":22,"height":32,"id":n,"name":e.pois[n].name,"address":e.pois[n].address});o={"markers":t,"poisData":e.pois},i.success(o)}}else i.fail({"errCode":e.data.infocode,"errMsg":e.data.info})},"fail":function fail(e){i.fail({"errCode":"0","errMsg":e.errMsg||""})}})}var n=this,r=n.requestConfig;i.location?d(i.location):n.getWxLocation(i,function(e){d(e)})},AMapWX.prototype.getStaticmap=function(n){function f(e){r.push("location="+e),n.zoom&&r.push("zoom="+n.zoom),n.size&&r.push("size="+n.size),n.scale&&r.push("scale="+n.scale),n.markers&&r.push("markers="+n.markers),n.labels&&r.push("labels="+n.labels),n.paths&&r.push("paths="+n.paths),n.traffic&&r.push("traffic="+n.traffic);var t=o+r.join("&");n.success({"url":t})}var e,r=[],o="https://restapi.amap.com/v3/staticmap?";r.push("key="+this.key),e=this.requestConfig,r.push("s="+e.s),r.push("platform="+e.platform),r.push("appname="+e.appname),r.push("sdkversion="+e.sdkversion),r.push("logversion="+e.logversion),n.location?f(n.location):this.getWxLocation(n,function(e){f(e)})},AMapWX.prototype.getInputtips=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.location&&(n.location=t.location),t.keywords&&(n.keywords=t.keywords),t.type&&(n.type=t.type),t.city&&(n.city=t.city),t.citylimit&&(n.citylimit=t.citylimit),wx.request({"url":"https://restapi.amap.com/v3/assistant/inputtips","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.tips&&t.success({"tips":e.data.tips})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getDrivingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),t.strategy&&(n.strategy=t.strategy),t.waypoints&&(n.waypoints=t.waypoints),t.avoidpolygons&&(n.avoidpolygons=t.avoidpolygons),t.avoidroad&&(n.avoidroad=t.avoidroad),wx.request({"url":"https://restapi.amap.com/v3/direction/driving","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.route&&t.success({"paths":e.data.route.paths,"taxi_cost":e.data.route.taxi_cost||""})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getWalkingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),wx.request({"url":"https://restapi.amap.com/v3/direction/walking","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.route&&t.success({"paths":e.data.route.paths})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getTransitRoute=function(n){var e=this.requestConfig,t={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};n.origin&&(t.origin=n.origin),n.destination&&(t.destination=n.destination),n.strategy&&(t.strategy=n.strategy),n.city&&(t.city=n.city),n.cityd&&(t.cityd=n.cityd),wx.request({"url":"https://restapi.amap.com/v3/direction/transit/integrated","data":t,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){if(e&&e.data&&e.data.route){var t=e.data.route;n.success({"distance":t.distance||"","taxi_cost":t.taxi_cost||"","transits":t.transits})}},"fail":function fail(e){n.fail({"errCode":"0","errMsg":e.errMsg||""})}})},AMapWX.prototype.getRidingRoute=function(t){var e=this.requestConfig,n={"key":this.key,"s":e.s,"platform":e.platform,"appname":this.key,"sdkversion":e.sdkversion,"logversion":e.logversion};t.origin&&(n.origin=t.origin),t.destination&&(n.destination=t.destination),wx.request({"url":"https://restapi.amap.com/v4/direction/bicycling","data":n,"method":"GET","header":{"content-type":"application/json"},"success":function success(e){e&&e.data&&e.data.data&&t.success({"paths":e.data.data.paths})},"fail":function fail(e){t.fail({"errCode":"0","errMsg":e.errMsg||""})}})},e.exports.AMapWX=AMapWX},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function UploadImgAction(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.UPLOADIMGURL;return new Promise(function(t){i.default.chooseImage({"count":1,"sizeType":["compressed"],"sourceType":["album","camera"],"success":function success(e){AppUploadImg(t,e,n)}})})},t.CameraAndAlbum=function CameraAndAlbum(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.UPLOADIMGURL;return new Promise(function(n){i.default.showActionSheet({"itemList":["拍照","从相册中选择"]}).then(function(e){var t=e.tapIndex;i.default.chooseImage({"count":1,"sizeType":["compressed"],"sourceType":0===t?["camera"]:["album"],"success":function success(e){AppUploadImg(n,e,r)}})})})};var i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),a=n(3),s=n(1);function AppUploadImg(n,e,t){var r=2<arguments.length&&void 0!==t?t:s.UPLOADIMGURL,o=i.default.getStorageSync(a.UserInfo);i.default.showLoading({"title":"图片上传中"}),i.default.uploadFile({"url":r,"filePath":e.tempFilePaths[0],"header":{"userid":o?o.userId:""},"name":"file","success":function success(e){var t=JSON.parse(e.data);i.default.showToast({"title":t.errmsg,"icon":"none","duration":2e3}),"ok"==t.errcode&&n(t)},"fail":function fail(){i.default.showToast({"title":"网络错误，上传失败！","icon":"none","duration":2e3})},"complete":function complete(){i.default.hideLoading()}})}},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var s=n(88);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}var e={"array":shim.isRequired=shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,function(e,t,n){"use strict";var r=n(92),o=n(97);e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){"use strict";var r=n(21),o=n(95),i=n(96),a=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(a&&a in Object(e)?o:i)(e)}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(94),i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")();e.exports=a},function(r,e,t){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n="object"==(void 0===e?"undefined":t(e))&&e&&e.Object===Object&&e;r.exports=n}).call(this,t(6))},function(e,t,n){"use strict";var r=n(21),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0}catch(e){}var r=a.call(e);return t?e[s]=n:delete e[s],r}},function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function objectToString(e){return r.call(e)}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function isObject(e){var t=void 0===e?"undefined":r(e);return null!=e&&("object"==t||"function"==t)}}]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

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

var Taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/dist/index.esm.js");
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

/***/ "./node_modules/@tarojs/taro-weapp/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/taro-weapp/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/dist/index.esm.js");

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
  var timerFunc = wx.nextTick ? wx.nextTick : setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
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

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval};
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
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
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
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

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
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

  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
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
function cloneDeep(obj) {
  var newObj;

  if (isArray(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(cloneDeep(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      var ret = cloneDeep(obj[key]);
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
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
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

    if (/^\$compid__/.test(key)) {
      res[targetKey] = toItem;
    } else if (toItem === fromItem) {
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
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
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
function getElementById(component, id, type) {
  if (!component) return null;
  var res;

  if (type === 'component') {
    res = component.selectComponent(id);
    res = res ? res.$component || res : null;
  } else {
    var query = wx.createSelectorQuery().in(component);
    res = query.select(id);
  }

  if (res) return res;
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
            var extraProps = component.$scope && component.$scope.data && component.$scope.data.extraProps || null;
            var nextProps = filterProps(ComponentClass.defaultProps, props, component.props, extraProps);
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
var routerParamsPrivateKey = '__key_';
var preloadPrivateKey = '__preload_';
var PRELOAD_DATA_KEY = 'preload';
var preloadInitedComponent = '$preloadComponent';
var pageExtraFns = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];

function bindProperties(weappComponentConf, ComponentClass, isPage) {
  weappComponentConf.properties = {};

  if (isPage) {
    weappComponentConf.properties[routerParamsPrivateKey] = {
      type: null,
      value: null
    };
    weappComponentConf.properties[preloadPrivateKey] = {
      type: null,
      value: null
    };
    var defaultParams = ComponentClass.defaultParams || {};

    for (var key in defaultParams) {
      if (defaultParams.hasOwnProperty(key)) {
        weappComponentConf.properties[key] = {
          type: null,
          value: null
        };
      }
    }
  }

  weappComponentConf.properties.compid = {
    type: null,
    value: null,
    observer: function observer(newVal, oldVal) {
      var _this = this;

      initComponent.apply(this, [ComponentClass, isPage]);

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
  weappComponentConf.properties.extraProps = {
    type: null,
    value: null,
    observer: function observer() {
      var _this2 = this;

      // update Component
      if (!this.$component || !this.$component.__isReady) return;
      var nextProps = filterProps(ComponentClass.defaultProps, {}, this.$component.props, this.data.extraProps);
      this.$component.props = nextProps;
      nextTick(function () {
        _this2.$component._unsafeCallUpdate = true;
        updateComponent(_this2.$component);
        _this2.$component._unsafeCallUpdate = false;
      });
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

function bindMultipleSlots(weappComponentConf, ComponentClass) {
  var multipleSlots = ComponentClass.multipleSlots;

  if (!multipleSlots) {
    return;
  }

  weappComponentConf.options = _objectSpread({}, weappComponentConf.options, {
    multipleSlots: multipleSlots
  });
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
    var eventType = event.type.toLocaleLowerCase();
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
  var target = weappComponentConf.methods;
  events.forEach(function (name) {
    processEvent(name, target);
  });
}

function filterProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsFromPropsManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var curAllProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var extraProps = arguments.length > 3 ? arguments[3] : undefined;
  var newProps = Object.assign({}, curAllProps, propsFromPropsManager);

  if (!isEmptyObject(defaultProps)) {
    for (var propName in defaultProps) {
      if (newProps[propName] === undefined) {
        newProps[propName] = defaultProps[propName];
      }
    }
  }

  if (extraProps) {
    newProps = Object.assign({}, newProps, extraProps);
  }

  return newProps;
}

function filterParams(data) {
  var defaultParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var res = {};

  for (var paramName in defaultParams) {
    res[paramName] = paramName in data ? data[paramName] : defaultParams[paramName];
  }

  return res;
}

function componentTrigger(component, key, args) {
  var _component$key;

  args = args || [];

  if (key === 'componentDidMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var refs = {};
      component['$$refs'].forEach(function (ref) {
        var target;

        if (ref.type === 'component') {
          target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
        } else {
          var query = wx.createSelectorQuery().in(component.$scope);
          target = query.select("#".concat(ref.id));
        }

        taro.commitAttachRef(ref, target, component, refs, true);
        ref.target = target;
      });
      component.refs = Object.assign({}, component.refs || {}, refs);
    }

    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }
  }

  if (key === 'componentWillUnmount') {
    var compid = component.$scope.data.compid;
    if (compid) propsManager.delete(compid);
  } // eslint-disable-next-line no-useless-call


  component[key] && typeof component[key] === 'function' && (_component$key = component[key]).call.apply(_component$key, [component].concat(_toConsumableArray(args)));

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }

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
}

function initComponent(ComponentClass, isPage) {
  if (this.$component.__isReady) return; // ready之后才可以setData,
  // ready之前，小程序组件初始化时仍然会触发observer，__isReady为否的时候放弃处理observer

  this.$component.__isReady = true; // 页面Ready的时候setData更新，此时并未didMount,触发observer但不会触发子组件更新
  // 小程序组件ready，但是数据并没有ready，需要通过updateComponent来初始化数据，setData完成之后才是真正意义上的组件ready
  // 动态组件执行改造函数副本的时,在初始化数据前计算好props

  if (!isPage) {
    var compid = this.data.compid;

    if (compid) {
      propsManager.observers[compid] = {
        component: this.$component,
        ComponentClass: ComponentClass
      };
    }

    var nextProps = filterProps(ComponentClass.defaultProps, propsManager.map[compid], this.$component.props, this.data.extraProps);
    this.$component.props = nextProps;
  } else {
    this.$component.$router.path = getCurrentPageUrl();
  }

  mountComponent(this.$component);
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

      if (isPage && cacheDataHas(preloadInitedComponent)) {
        this.$component = cacheDataGet(preloadInitedComponent, true);
        this.$component.$componentType = 'PAGE';
      } else {
        this.$component = new ComponentClass({}, isPage);
      }

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      this.$component.__propTypes = ComponentClass.propTypes;
      Object.assign(this.$component.$router.params, options);
    },
    attached: function attached() {
      var hasParamsCache;

      if (isPage) {
        // params
        var params = {};
        hasParamsCache = cacheDataHas(this.data[routerParamsPrivateKey]);

        if (hasParamsCache) {
          params = Object.assign({}, ComponentClass.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], true));
        } else {
          // 直接启动，非内部跳转
          params = filterParams(this.data, ComponentClass.defaultParams);
        }

        if (cacheDataHas(PRELOAD_DATA_KEY)) {
          var data = cacheDataGet(PRELOAD_DATA_KEY, true);
          this.$component.$router.preload = data;
        }

        Object.assign(this.$component.$router.params, params); // preload

        if (cacheDataHas(this.data[preloadPrivateKey])) {
          this.$component.$preloadData = cacheDataGet(this.data[preloadPrivateKey], true);
        } else {
          this.$component.$preloadData = null;
        }
      }

      if (hasParamsCache || !isPage) {
        initComponent.apply(this, [ComponentClass, isPage]);
      }
    },
    ready: function ready() {
      if (!isPage && !this.$component.__mounted) {
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
    weappComponentConf.methods = weappComponentConf.methods || {};

    weappComponentConf.methods['onLoad'] = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.$component.__isReady) return;
      Object.assign(this.$component.$router.params, options);
      initComponent.apply(this, [ComponentClass, isPage]);
    };

    weappComponentConf.methods['onReady'] = function () {
      this.$component.__mounted = true;
      componentTrigger(this.$component, 'componentDidMount');
    };

    weappComponentConf.methods['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.methods['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        weappComponentConf.methods[fn] = function () {
          var component = this.$component;

          if (component && component[fn] && typeof component[fn] === 'function') {
            var _component$fn;

            // eslint-disable-next-line no-useless-call
            return (_component$fn = component[fn]).call.apply(_component$fn, [component].concat(Array.prototype.slice.call(arguments)));
          }
        };
      }
    });
    __wxRoute && cacheDataSet(__wxRoute, ComponentClass);
  } else {
    weappComponentConf.pageLifetimes = weappComponentConf.pageLifetimes || {};

    weappComponentConf.pageLifetimes['show'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.pageLifetimes['hide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    weappComponentConf.pageLifetimes['resize'] = function () {
      componentTrigger(this.$component, 'onResize');
    };
  }

  bindProperties(weappComponentConf, ComponentClass, isPage);
  bindBehaviors(weappComponentConf, ComponentClass);
  bindStaticFns(weappComponentConf, ComponentClass);
  bindStaticOptions(weappComponentConf, ComponentClass);
  bindMultipleSlots(weappComponentConf, ComponentClass);
  ComponentClass['$$events'] && bindEvents(weappComponentConf, ComponentClass['$$events'], isPage);

  if (ComponentClass['externalClasses'] && ComponentClass['externalClasses'].length) {
    weappComponentConf['externalClasses'] = ComponentClass['externalClasses'];
  }

  return weappComponentConf;
}

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
        if (isEmptyObject(val)) return taro.internal_safe_set(_data, key, {});
        val = cloneDeep(val);
        if (!isEmptyObject(val)) taro.internal_safe_set(_data, key, val);
      } else {
        taro.internal_safe_set(_data, key, val);
      }
    });
    data = _data;
  }

  data['$taroCompReady'] = true;
  var dataDiff = taro.getIsUsingDiff() ? diffObjToPath(data, component.$scope.data) : data;
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
    if (__mounted) {
      taro.invokeEffects(component);

      if (component['$$refs'] && component['$$refs'].length > 0) {
        component['$$refs'].forEach(function (ref) {
          // 只有 component 类型能做判断。因为 querySelector 每次调用都一定返回 nodeRefs，无法得知 dom 类型的挂载状态。
          if (ref.type !== 'component') return;
          var target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
          var prevRef = ref.target;

          if (target !== prevRef) {
            taro.commitAttachRef(ref, target, component, component.refs);
            ref.target = target;
          }
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

      if (isFunction(component.componentDidUpdate)) {
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

// #私有的__componentProps更新用于触发子组件中对应obsever，生命周期componentWillReceiveProps,componentShouldUpdate在这里处理
// #父组件传过来的props放到data.__props中供模板使用，这么做的目的是模拟receiveProps生命周期
// 执行顺序：组件setState -> 组件_createData() -> 对应的小程序组件setData（组件更新）-> 子组件的__componentProps.observer执行
//          -> 触发子组件componentWillReceiveProps，更新子组件props,componentShouldUpdate -> 子组件_createData -> 子组件setData

var PRELOAD_DATA_KEY$1 = 'preload';

var BaseComponent =
/*#__PURE__*/
function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  function BaseComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPage = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseComponent);

    _defineProperty(this, "__computed", {});

    _defineProperty(this, "__props", {});

    _defineProperty(this, "__isReady", false);

    _defineProperty(this, "__mounted", false);

    _defineProperty(this, "context", {});

    _defineProperty(this, "_dirty", true);

    _defineProperty(this, "_disable", true);

    _defineProperty(this, "_isForceUpdate", false);

    _defineProperty(this, "_pendingStates", []);

    _defineProperty(this, "_pendingCallbacks", []);

    _defineProperty(this, "$componentType", '');

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

      if (isFunction(callback)) {
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
        if (isFunction(nextState)) {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (isFunction(callback)) {
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
        var detail = {
          __isCustomEvt: true,
          __arguments: args
        };

        if (args.length > 0) {
          detail.value = args.slice(1);
        }

        this.$scope.triggerEvent(keyLower, detail);
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
  MAX_REQUEST: 10,
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
        v: wx.request(options)
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
  var useDataCacheApis = {
    'navigateTo': true,
    'redirectTo': true,
    'reLaunch': true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in wx)) {
      taro$$1[key] = function () {
        console.warn('\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(key));
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
            var _wx;

            return (_wx = wx)[key].apply(_wx, [options].concat(args));
          }

          return wx[key](options);
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

        if (useDataCacheApis[key]) {
          var _url = obj['url'] = obj['url'] || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = queryToJson(_urlQueryStr);

          var _cacheKey = getUniqueKey();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          cacheDataSet(_cacheKey, _params);
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
            var _wx2;

            task = (_wx2 = wx)[key].apply(_wx2, [obj].concat(args));
          } else {
            task = wx[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.headersReceived = function (cb) {
            if (task) {
              task.onHeadersReceived(cb);
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

        return wx[key].apply(wx, newArgs);
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

function canIUseWebp() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function wxCloud(taro$$1) {
  var wxC = wx.cloud || {};
  var wxcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction', 'CloudID'];
  apiList.forEach(function (v) {
    wxcloud[v] = wxC[v];
  });
  taro$$1.cloud = wxcloud;
}

function wxEnvObj(taro$$1) {
  var wxEnv = wx.env || {};
  var taroEnv = {};
  var envList = ['USER_DATA_PATH'];
  envList.forEach(function (key) {
    return taroEnv[key] = wxEnv[key];
  });
  taro$$1.env = taroEnv;
}

function initNativeApi(taro$$1) {
  processApis(taro$$1);
  taro$$1.request = link.request.bind(link);
  taro$$1.addInterceptor = link.addInterceptor.bind(link);
  taro$$1.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro$$1.getCurrentPages = getCurrentPages;
  taro$$1.getApp = getApp;
  taro$$1.requirePlugin = requirePlugin;
  taro$$1.initPxTransform = taro.initPxTransform.bind(taro$$1);
  taro$$1.pxTransform = pxTransform.bind(taro$$1);
  taro$$1.canIUseWebp = canIUseWebp;
  wxCloud(taro$$1);
  wxEnvObj(taro$$1);
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
  handleLoopRef: taro.handleLoopRef(getElementById),
  propsManager: propsManager,
  interceptors: taro.interceptors,
  RefsArray: taro.RefsArray,
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
  shallowEqual: shallowEqual,
  setIsUsingDiff: taro.setIsUsingDiff
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro-weapp/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tarojs/taro-weapp/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro-weapp/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tarojs/taro/dist/index.esm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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
  if (call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function")) {
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

var root = freeGlobal || freeSelf || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval};
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
      return console.warn("\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A".concat(handlerType));
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

var Current;

{
  exports.Current = Current = {
    current: null,
    index: 0
  };
}

function forceUpdateCallback() {//
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
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
  var hook = getHooks(Current.index++);

  if (!hook.marked) {
    hook.marked = true;
    hook.component = Current.current;
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
  var hook = getHooks(Current.index++);

  if (!hook.router) {
    hook.component = Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}
function useScope() {
  var hook = getHooks(Current.index++);

  if (!hook.scope) {
    hook.component = Current.current;
    hook.scope = hook.component.$scope;
  }

  return hook.scope;
}
function useReducer(reducer, initialState, initializer) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
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
  var hook = getHooks(Current.index++);

  if (Current.current._disableEffect || !Current.current.__isReady) {
    return;
  }

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
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
  var hook = getHooks(Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}
function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);

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

  var hook = getHooks(Current.index++);

  if (isUndefined(hook.context)) {
    hook.context = true;
    hook.component = Current.current;
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
var eventCenter;

{
  exports.eventCenter = eventCenter = new Events();
}
var index = {
  Component: Component,
  Events: Events,
  eventCenter: eventCenter,
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
  Current: Current,
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

exports.default = index;
exports.Component = Component;
exports.Events = Events;
exports.eventCenter = eventCenter;
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
exports.Current = Current;
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
//# sourceMappingURL=index.esm.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

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
}(_taroWeapp.Component), _class.options = {
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

/***/ })

}]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
