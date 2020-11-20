import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setNavigationBarTitle as _setNavigationBarTitle, openLocation as _openLocation, showModal as _showModal, setStorageSync as _setStorageSync, previewImage as _previewImage, showLoading as _showLoading, makePhoneCall as _makePhoneCall, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Text, Image, Icon, Button } from '@tarojs/components';
import { jobInfoAction, publishComplainAction, jobGetTelAction, recruitListCancelCollectionAction, jobEndStatusAction, jobUpdateTopStatusAction, jobNoUserInfoAction } from '../../../utils/request/index';
import WechatNotice from "../../../components/wechat/index";
import { IMGCDNURL, SERVERPHONE, AUTHPATH, CODEAUTHPATH, ISCANSHARE } from "../../../config/index";
import { useSelector } from "@tarojs/redux-h5";
import { isVaildVal } from "../../../utils/v/index";
import Report from "../../../components/report/index";
import { getUserShareMessage } from "../../../utils/helper/index";
import Msg, { ShowActionModal, showModalTip } from "../../../utils/msg/index";
import { SubscribeToNews } from "../../../utils/subscribeToNews/index";
import { REFID, UserInfo } from '../../../config/store';
import './index.scss';
export default class DetailInfoPage extends Taro.Component {
  config = {
    navigationBarTitleText: ''
  };

  render() {
    const router = Taro.useRouter();
    let { id = '', refId = '' } = router.params;
    // 获取userInfo
    let userInfo = _getStorageSync(UserInfo);
    const [data, setData] = Taro.useState({
      title: '',
      time: '',
      image: '',
      user_name: '',
      classifyName: [],
      detail: '',
      show_full_address: '',
      location: '',
      map_address_name: '',
      map_street_name: '',
      tel_str: '',
      show_ajax_btn: false,
      id: 0,
      is_collect: 0,
      view_images: [],
      is_end: 0,
      is_check: 0,
      has_top: 0,
      show_complaint: {
        show_complaint: 0,
        tips_message: ''
      },
      top_info: {
        is_top: ''
      }
    });
    // 投诉
    const [complaintModal, setComplaintModal] = Taro.useState(false);
    // textarea
    const [textarea, setTextarea] = Taro.useState('');
    // 刷新一次
    const [refresh, setRefresh] = Taro.useState(false);
    // 是否收藏
    const [isCollection, setIsCollection] = Taro.useState(0);
    // 判断招聘类型
    const [resCode, setResCode] = Taro.useState('');
    // 是否显示停止招工
    const [stopHiring, setStopHiring] = Taro.useState(false);
    // 是够能继续投诉
    const [complaint, setComplaint] = Taro.useState(false);
    // 重新招工
    const [again, setAgain] = Taro.useState(false);
    // 电话
    const [phone, setPhone] = Taro.useState('');
    // 修改电话后投诉
    const [complaintInfo, setComplaintInfo] = Taro.useState(false);
    // 修改电话后，显示投诉和拨打
    const [editPhone, setEditPhone] = Taro.useState(true);
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // 相关推荐
    const [recommend, setRecommend] = Taro.useState([]);
    // 返回刷新页面
    Taro.useDidShow(() => {
      if (refresh) {
        setRefresh(false);
        return;
      }
      getRecruitInfo();
    });
    // 获取招工详情
    const getRecruitInfo = () => {
      const params = {
        type: 'job',
        // 先写死
        infoId: id
      };
      // let userInfo = Taro.getStorageSync("userInfo");
      // login
      // 用户没有认证
      let result = login ? jobInfoAction(params) : jobNoUserInfoAction(params);
      result.then(res => {
        detailGetTelAction(res, () => {
          setRefresh(false);
          setData(res.result);
          setPhone(res.result.tel_str);
          setEditPhone(res.result.show_ajax_btn);
          _setNavigationBarTitle({
            title: res.result.title
          });
          setIsCollection(res.result.is_collect);
          if (userInfo.userId === res.result.user_id) {
            // 判断是自己发布的招工
            setResCode('own');
          } else {
            setResCode(res.errcode);
          }
        });
        // let paramsObj = {
        //   page:1,
        //   type:1,
        //   area_id: res.result.city_id,
        //   job_ids: res.result.id,
        //   classify_id:[res.result.occupations].join(','),
        // }
        // jobRecommendListAction(paramsObj).then(res=>{
        //   setRecommend(res.data.list);
        // })
      });
    };
    // 地图
    const handleMap = () => {
      let locArr = data.location.split(",");
      setRefresh(true);
      _openLocation({
        latitude: parseFloat(locArr[1]),
        longitude: parseFloat(locArr[0]),
        name: data.map_address_name,
        address: data.map_street_name,
        scale: 18
      });
    };
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    const handleTextarea = e => {
      let val = e.detail.value;
      setTextarea(val);
    };
    // 提交投诉
    const handleSubmit = () => {
      if (!isVaildVal(textarea, 5, 500)) {
        ShowActionModal({ msg: '输入内容不少于5个字且必须包含文字' });
        return false;
      }
      const params = {
        content: textarea,
        type: 'job',
        infoId: data.id
      };
      // publishComplainAction(params).then((res) => {
      //   Msg('提交成功')
      //   setComplaintModal(false);
      //   setComplaint(true)
      // })
      publishComplainAction(params).then(res => {
        if (res.errcode === 'ok') {
          SubscribeToNews('complain', () => {
            showModalTip({
              tips: res.errmsg,
              callback: () => {
                setComplaintModal(false);
                setComplaint(true);
              }
            });
          });
        }
      });
    };
    // 操作授权
    const vaildUserLogin = () => {
      if (!login) {
        Taro.navigateTo({
          url: ISWEIXIN ? AUTHPATH : CODEAUTHPATH
        });
        return false;
      }
      return true;
    };
    // 处理获取电话号码的不同状态码
    const detailGetTelAction = (res, callback) => {
      if (res.errcode == 'ok' || res.errcode == 'end' || res.errcode == 'ajax') {
        callback && callback();
      } else if (res.errcode == 'end') {
        Msg(res.errmsg);
      } else if (res.errcode == 'auth_not_pass' || res.errcode == 'to_auth') {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          success(res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/realname/index'
              });
            } else {
              Taro.navigateBack();
            }
          }
        });
      } else if (res.errcode == 'none_tel') {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          cancelText: "返回列表",
          confirmText: "绑定手机",
          success(res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/userinfo/add/index'
              });
            } else if (res.cancel) {
              Taro.navigateBack();
            }
          }
        });
      } else if (res.errcode == 'get_integral') {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          cancelText: "返回列表",
          confirmText: "获取积分",
          success(res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/getintegral/index'
              });
            } else if (res.cancel) {
              Taro.navigateBack();
            }
          }
        });
      } else if (res.errcode == 'reload') {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
          confirmText: "确定",
          success(res) {
            if (res.confirm) {
              getRecruitInfo();
            }
          }
        });
      } else if (res.errcode == 'goback') {
        let pages = Taro.getCurrentPages();
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          confirmText: "确定",
          showCancel: false,
          success(res) {
            if (res.confirm) {
              if (pages.length > 1) {
                Taro.navigateBack();
              } else {
                Taro.reLaunch({ url: '/pages/index/index' });
              }
            }
          }
        });
      } else {
        _showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
          confirmText: "我知道了",
          success() {
            Taro.navigateBack();
          }
        });
      }
    };
    // 监听是否是别人分享的页面
    Taro.useEffect(() => {
      if (refId) _setStorageSync(REFID, refId);
    }, [refId]);
    // 设置分享信息
    Taro.useShareAppMessage(() => {
      let path = `/pages/detail/index/index?id=${id}`;
      let userInfo = _getStorageSync(UserInfo);
      return {
        ...getUserShareMessage(),
        path: userInfo ? `${path}&refId=${userInfo.userId}` : path
      };
    });
    // 获取电话
    const jobGetTel = () => {
      if (!vaildUserLogin()) return;
      const params = {
        type: 'job',
        infoId: data.id
      };
      jobGetTelAction(params).then(res => {
        detailGetTelAction(res, () => {
          setRefresh(true);
          setPhone(res.tel);
          setComplaintInfo(true);
          setEditPhone(false);
        });
      });
    };
    const footerComplaint = () => {
      if (resCode === 'end') {
        _showModal({
          title: '温馨提示',
          content: '该招工信息已招到，暂时不能投诉',
          showCancel: false
        });
      } else {
        // 投诉过一次就不能投诉了
        if (complaint) {
          _showModal({
            title: '提示',
            content: '您已投诉该信息，请勿重复操作！',
            showCancel: false
          });
        } else {
          // 查看电话可以投诉一次
          if (complaintInfo) {
            setComplaintModal(true);
            // 没有看到电话不能投诉
          } else if (data.show_ajax_btn) {
            Msg('请查看完整的手机号码后再操作！');
          } else {
            if (data.is_end === 2 || !data.show_complaint.show_complaint) {
              _showModal({
                title: '提示',
                content: '您已投诉该信息，请勿重复投诉！',
                showCancel: false
              });
            } else {
              setComplaintModal(true);
            }
          }
        }
      }
    };
    // 收藏
    const collection = () => {
      if (!vaildUserLogin()) return;
      recruitListCancelCollectionAction(data.id.toString()).then(res => {
        Msg(res.errmsg);
        if (res.action === 'add') {
          setIsCollection(1);
        } else {
          setIsCollection(0);
        }
      });
    };
    const handleImage = v => {
      setRefresh(true);
      _previewImage({
        current: v,
        urls: [v]
      });
    };
    const handleStatus = () => {
      jobEndStatusAction(data.id).then(res => {
        if (res.errcode === 'ok') {
          // if (stopHiring || (data.is_end === 2)) {
          //   setAgain(true);
          // }else{
          //   setStopHiring(true);
          // setStopHiring se
          Msg(res.errmsg);
          setStopHiring(false);
          setRefresh(true);
          // }
        } else {
          Msg(res.errmsg);
        }
      });
    };
    // 置顶
    const handleTopping = data => {
      if (data.has_top) {
        let endtime = parseInt(data.top_info.end_time);
        let timestr = new Date().getTime() / 1000;
        if (timestr < endtime) {
          _showLoading({
            title: '正在执行操作'
          });
          const params = {
            infoId: id,
            status: data.toping == '0' ? '1' : "0"
          };
          jobUpdateTopStatusAction(params).then(res => {
            if (res.errcode === 'ok') {
              Msg(res.errmsg);
              setRefresh(true);
              setStopHiring(true);
              // setSearchData({ ...searchData, page: searchData.page })
            } else if (res.errcode === 'auth_forbid') {
              // 去实名
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                cancelText: '取消',
                confirmText: '去实名',
                success(res) {
                  if (res.confirm) {
                    let backtwo = "backtwo";
                    Taro.navigateTo({
                      url: `/pages/realname/index?backtwo=${backtwo}`
                    });
                  }
                }
              });
              return;
            } else if (res.errcode == "member_forbid") {
              _showModal({
                title: '温馨提示',
                content: "mydata.errmsg",
                cancelText: "取消",
                confirmText: "联系客服",
                success(res) {
                  if (res.confirm) {
                    let tel = SERVERPHONE;
                    _makePhoneCall({
                      phoneNumber: tel
                    });
                  }
                }
              });
              return;
            } else {
              _showToast({
                title: res.errmsg,
                icon: "none",
                duration: 1500
              });
            }
          });
          return false;
        }
      }
      userRouteJump(`/pages/topping/index?id=${data.id}`);
    };
    return <View className="detailInfo">
      <WechatNotice />
      <View className="detailInfo-head">
        <View className="detailInfo-head-titleBox">
          <View className="detailInfo-head-titleBox-title">{data.title}</View>
          <View className="detailInfo-head-titleBox-time">发布时间: {data.time}</View>
        </View>
        <View className="detailInfo-userContent">
          <Image className="detailInfo-userContent-image" src={data.image} />
          <View className="detailInfo-userContent-content">
            <View className="detailInfo-userContent-content-list">{data.user_name}</View>
            <View className="detailInfo-userContent-content-list">{phone}</View>
          </View>
          
          {resCode === 'own' ? <View></View> :
          // 判断是否已经找到
          resCode === 'end' ? <View className="detailInfo-userContent-buttonBox-"><Button className="detailInfo-userContent-button-end">已招到</Button></View> :
          // 判断是够查看到电话号码
          editPhone ? <View className="detailInfo-userContent-buttonBox"><Button className="detailInfo-userContent-button" onClick={() => jobGetTel()}>查看招工电话</Button></View> : <View className="detailInfo-userContent-buttonBox">
                  <View className="detailInfo-userContent-button-call" onClick={() => {
              _makePhoneCall({ phoneNumber: phone });
            }}>点击拨打</View>
                <View className="detailInfo-userContent-button-complaint" onClick={footerComplaint}>投诉</View>
              </View>}
          
        </View>
      </View>
      <View className="detailInfo-tips-box">
        <View className="detailInfo-tips">联系我时请说明是在“<Text className="detailInfo-tips-color">鱼泡网</Text>”上看到的</View>
      </View>
      <View className="detailInfo-prompt-content">
        <View className="detailInfo-prompt-content-title">
          <Icon type="info" color="#F94046" size="15" className="detailInfo-prompt-content-title-icon" /> 
          <View className="detailInfo-prompt-content-title-tips">鱼泡提示</View>
        </View>
        <View>
          

          <View onClick={() => userRouteJump('/subpackage/pages/anti-fraud/index')}><Text className="detailInfo-prompt-content-blued">《防骗指南》</Text>：此信息由鱼泡网用户提供，但联系时仍需注意识信息真伪。</View>
          <View onClick={() => userRouteJump(`/pages/static/notice/index?id=32`)}> <View>关注“鱼泡网”微信公众号接收新工作提醒  <Text className="detailInfo-prompt-content-blued">如何关注</Text></View></View>
        </View>
      </View>
      <View className="detailInfo-project-content">
        <View className="detailInfo-project-content-title">项目描述:</View>
        <View className="detailInfo-project-content-classifyName-box">
        {data.classifyName.map((v, i) => <View key={i + i} className="detailInfo-project-content-classifyName">{v}</View>)}
        </View>
        <View className="detailInfo-project-content-detail">{data.detail}</View>
        {data.view_images.length && <View className="detailInfo-project-content-image-box">
            {data.view_images.map((v, i) => <Image src={v} key={i + i} className="detailInfo-project-content-image" onClick={() => handleImage(v)} />)}
          </View>}
        <View className="detailInfo-project-content-address">项目地址: 
        {data.location ? <View className="detailInfo-project-content-address-color">{data.show_full_address}</View> : <Text className="detailInfo-project-content-address-color">{data.show_full_address}</Text>}
          {data.location && <View className="detailInfo-project-content-map" onClick={handleMap}>查看地图</View>}
        </View>
      </View>
      <View className="detailInfo-Image-box">
        <Image src={`${IMGCDNURL}download.png`} className="detailInfo-Image" onClick={() => userRouteJump('/subpackage/pages/download/index')} />
      </View>
      
      
      
      
      
      
      
      
      
        
      {resCode !== 'own' && <View className="detailInfo-footer-content">
          <View className="detailInfo-footer-content-box">
            <View className="detailInfo-footer-content-box-list" onClick={collection}>
              <View><Image src={isCollection === 1 ? `${IMGCDNURL}job-collect-active.png` : `${IMGCDNURL}job-collect-normal.png`} className="detailInfo-footer-content-box-image" /></View>
              <View className="detailInfo-footer-content-box-text">{isCollection === 0 ? '收藏' : '已收藏'}</View>
            </View>
            <View className="detailInfo-footer-content-box-list" onClick={footerComplaint}>
              <View><Image src={`${IMGCDNURL}newjobinfo-complain.png`} className="detailInfo-footer-content-box-image" /></View>
              <View className="detailInfo-footer-content-box-text">投诉</View>
            </View>
            {ISCANSHARE && <Button openType="share" className="detailInfo-footer-content-box-list">
              <View><Image src={`${IMGCDNURL}newjobinfo-share.png`} className="detailInfo-footer-content-box-image" /></View>
              <View className="detailInfo-footer-content-box-text">分享</View>
            </Button>}
            <View>
              {resCode === 'end' ? <Button className="detailInfo-footer-content-box-button detailInfo-button-end">已招到</Button> : editPhone ? <Button className="detailInfo-footer-content-box-button" onClick={() => jobGetTel()}>查看招工电话</Button> : <Button className="detailInfo-footer-content-box-button" onClick={() => {
              _makePhoneCall({ phoneNumber: phone });
            }}>拨打电话</Button>}
              
            </View>
          </View>
        </View>}
      
      
      
      {complaintModal && <Report display={complaintModal} textarea={textarea} handleTextarea={handleTextarea} setComplaintModal={setComplaintModal} handleSubmit={handleSubmit} />}
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
DetailInfoPage.config = { navigationBarTitleText: '' };