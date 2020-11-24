import Nerv from "nervjs";
import Taro, { login as _login, requestPayment as _requestPayment, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { SERVERPHONE, MINIVERSION, DOUYIN } from "../../config/index";
import { getRechargeList, getRechargeOpenid, getRechargeOrder, userDouyinRecharge, userCheckDouyinRecharge } from "../../utils/request/index";
import Msg, { ShowActionModal, errMsg } from "../../utils/msg/index";
import { useDispatch } from "@tarojs/redux-h5";
// import { changeTabbar } from '../../actions/tabbar'
import classnames from 'classnames';
import { AtMessage } from 'taro-ui';
import { MEMBER } from '../../constants/tabbar';
import { getPointNumber } from "../../utils/helper/index";
import './index.scss';
export default class Recharge extends Taro.Component {
  config = {
    navigationBarTitleText: '用户充值积分',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    const dispatch = useDispatch();
    // 积分列表数据与用户当前积分数量
    const [lists, setLists] = Taro.useState([]);
    const [integral, setIntegral] = Taro.useState(0);
    const [current, setCurrent] = Taro.useState(0);
    const [price, setPrice] = Taro.useState(0);
    // 初始化积分充值选项
    Taro.useEffect(() => {
      getRechargeList().then(res => {
        if (res.errcode == 'ok') {
          setLists(res.list);
          setIntegral(parseInt(res.user.integral));
          let i = res.list.findIndex(item => item.default == '1');
          setCurrent(i);
          let price = getPointNumber(res.list[i].price, res.list[i].integral);
          setPrice(price);
        } else {
          ShowActionModal({
            msg: res.errmsg,
            success: () => {
              Taro.navigateBack();
            }
          });
        }
      });
    }, []);
    // 用户选择充值项
    const userChooseItem = i => {
      setCurrent(i);
      let price = getPointNumber(lists[i].price, lists[i].integral);
      setPrice(price);
      let newLists = JSON.parse(JSON.stringify(lists));
      newLists.map((d, index) => {
        d.default = index == i ? '1' : '0';
      });
      setLists(newLists);
    };
    // 用户充值
    const userRechargeAction = () => {
      let rechargeIntegral = lists[current].integral;
      if (ISWEIXIN) {
        weixinProPay(rechargeIntegral);
        return false;
      } else if (MINIVERSION == DOUYIN) {
        douyinProPay();
      }
    };
    // 检测订单
    const getOrderStatusAction = order_no => {
      return new Promise((resolve, reject) => {
        resolve({ code: 0 });
        userCheckDouyinRecharge({ order_no: order_no }).then(res => {
          Msg(res.errmsg);
          if (res.errcode == 'ok') {
            setIntegral(res.integral);
            resolve({ code: 0 });
          }
        }).catch(err => {
          Msg('支付失败');
          reject(err);
        });
      });
    };
    // 抖音支付
    const douyinProPay = () => {
      let id = lists[current].id;
      userDouyinRecharge({ integral_price_id: id }).then(res => {
        let order_no = res.data.biteOrderInfo.out_order_no;
        tt.pay({
          orderInfo: res.data.biteOrderInfo,
          service: 3,
          getOrderStatus: () => {
            return getOrderStatusAction(order_no);
          },
          success: res => {
            if (res.code == 0) {
              Msg('支付成功');
            }
            if (res.code == 9) {
              getOrderStatusAction(order_no);
            } else {
              Msg('支付失败');
            }
          },
          fail: err => {
            Msg('支付失败');
          }
        });
      }).catch(err => console.log(err));
    };
    // 微信支付
    const weixinProPay = rechargeIntegral => {
      _login({
        success: res => {
          getRechargeOpenid(res.code).then(openidData => {
            let data = {
              priceType: lists[current].id,
              openid: openidData.openid
            };
            getRechargeOrder(data).then(orderData => {
              _requestPayment({ ...orderData.payData }).then(() => {
                let afterIntegral = integral + rechargeIntegral;
                setIntegral(afterIntegral);
                _showModal({
                  title: '恭喜您',
                  content: `您已成功充值${rechargeIntegral}个积分`,
                  cancelText: '会员中心',
                  confirmText: '继续充值',
                  success: res => {
                    if (res.cancel) {
                      // dispatch(changeTabbar(MEMBER))
                      Taro.reLaunch({ url: '/pages/index/index?type=' + MEMBER });
                    }
                  }
                });
              }).catch(() => {
                errMsg(`用户取消充值`);
              });
            }).catch(() => {
              errMsg(`网络异常，充值失败，客服电话${SERVERPHONE}`);
            });
          }).catch(() => {
            ShowActionModal({ msg: `充值失败，请联系客服电话${SERVERPHONE}` });
          });
        }
      });
    };
    return <View className="recharge-container">
      <AtMessage />
      <View className="recharge-header">
        <View className="recharge-info-item">
          剩余积分：<Text className="recharge-info-text">{integral}</Text>
        </View>
        <View className="recharge-info-item">
          充值金额：<Text className="recharge-info-text">{lists[current].price}元</Text>
        </View>
        <View className="recharge-info-item">
          积分价格：<Text className="recharge-info-text">{price}元/个</Text>
        </View>
        <View className="recharge-info-item">
          充值积分：<Text className="recharge-info-text">{lists[current].integral}积分（可查看{lists[current].integral}个电话号码）</Text>
        </View>
      </View>
      <View className="recharge-body">
        <View className="recharge-title">请选择充值金额</View>
        <View className="recharge-content clearfix">
          {lists.map((item, index) => <View className="recharge-list" key={item.id} onClick={() => userChooseItem(index)}>
              <View className={classnames({
              'recharge-list-box': true,
              'recharge-list-box-active': index === current
            })}>
                <View className="recharge-money">{item.price}元</View>
                <View className="recharge-num">{item.integral}积分</View>
              </View>
            </View>)}
        </View>
      </View>
      <View className="recharge-btn" onClick={() => userRechargeAction()}>充值</View>
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
Recharge.config = { navigationBarTitleText: '用户充值积分', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };