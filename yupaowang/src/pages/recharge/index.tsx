import Taro, {useEffect, useState, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {
  SERVERPHONE,
  BAIDUSERIES,
  ZIJIESERIES,
  WEIXINSERIES,
  QQSERIES,
  SERIES,
} from '../../config'
import {
  getRechargeList,
  getRechargeOpenid,
  getRechargeOrder,
  userDouyinRecharge,
  userCheckDouyinRecharge,
  getBaiduTpOrderId,
  checkBaiduOrderStatusAction, userQQRecharge
} from '../../utils/request'
import {GetRechargeListType} from '../../utils/request/index.d'
import Msg, {ShowActionModal, errMsg} from '../../utils/msg'
import {useDispatch} from '@tarojs/redux'
// import { changeTabbar } from '../../actions/tabbar'
import classnames from 'classnames'
import {AtMessage} from 'taro-ui'
import {MEMBER} from '../../constants/tabbar'
import {getPointNumber} from '../../utils/helper'
import './index.scss'

export interface CreateOrder {
  openid: string,
  priceType: string
}

interface QqSeriesRes extends Taro.General.CallbackResult{
  tapIndex:number
}

export default function Recharge() {

  // 积分列表数据与用户当前积分数量
  const [lists, setLists] = useState<GetRechargeListType[]>([])
  const [integral, setIntegral] = useState<number>(0)
  const [current, setCurrent] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  // 判断是是否能用扣扣吊起微信支付
  const [isWxPayment, setIsWxPayment] = useState<boolean>(false);
  // 初始化积分充值选项
  useEffect(() => {
    getRechargeList().then(res => {
      if (res.errcode == 'ok') {
        setLists(res.list)
        setIntegral(parseInt(res.user.integral))
        let i = res.list.findIndex(item => item.default == '1')
        setCurrent(i)
        let price = getPointNumber(res.list[i].price, res.list[i].integral)
        setPrice(price)
      } else {
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack()
          }
        })
      }
    })
    // 判断是是否能用扣扣吊起微信支付
    const isWxPayment = Taro.canIUse && Taro.canIUse('requestWxPayment');
    console.error(isWxPayment,'111')
    if(isWxPayment){
      setIsWxPayment(true)
    }
  }, [])

  // 用户选择充值项
  const userChooseItem = (i: number) => {
    setCurrent(i)
    let price = getPointNumber(lists[i].price, lists[i].integral)
    setPrice(price)
    let newLists = JSON.parse(JSON.stringify(lists))
    newLists.map((d: GetRechargeListType, index: number) => {
      d.default = (index == i) ? '1' : '0'
    })
    setLists(newLists)
  }

  // 用户充值
  const userRechargeAction = () => {
    let rechargeIntegral: number = lists[current].integral
    if (SERIES == WEIXINSERIES) {
      weixinProPay(rechargeIntegral)
      return false
    } else if (SERIES == ZIJIESERIES) {
      douyinProPay()
    } else if (SERIES == BAIDUSERIES) {
      baiduProPay(rechargeIntegral)
    } else if (SERIES == QQSERIES) {
      let itemList:string[] = [];
      if (isWxPayment){
        itemList =  ['QQ支付', '微信支付'];
      }else{
        itemList = ['QQ支付'];
      }
      Taro.showActionSheet({
        itemList: itemList,
        success: function (res:QqSeriesRes) {
          if (res.tapIndex == 0) {
            handleQQPay(rechargeIntegral)
          }
          if (res.tapIndex == 1) {
            handleQQWeChatPay(rechargeIntegral)
          }
        },
        fail: function (res) {
          Msg('支付失败')
        }
      })
    }
  }

  // 检测订单
  const getOrderStatusAction = (order_no: string) => {
    return new Promise((resolve, reject) => {
      resolve({code: 0})
      userCheckDouyinRecharge({order_no: order_no})
        .then(res => {
          Msg(res.errmsg)
          if (res.errcode == 'ok') {
            setIntegral(res.integral)
            resolve({code: 0})
          }
        }).catch((err) => {
        Msg('支付失败')
        reject(err)
      })
    })
  }

  // 抖音支付
  const douyinProPay = () => {
    let id: string = lists[current].id
    userDouyinRecharge({integral_price_id: id}).then(res => {
      let order_no: string = res.data.biteOrderInfo.out_order_no
      tt.pay({
        orderInfo: res.data.biteOrderInfo,
        service: 3,
        getOrderStatus: () => {
          return getOrderStatusAction(order_no)
        },
        success: (res) => {
          if (res.code == 0) {
            Msg('支付成功')
          }
          if (res.code == 9) {
            getOrderStatusAction(order_no)
          } else {
            Msg('支付失败')
          }
        },
        fail: (err) => {
          Msg('支付失败')
        },
      })
    }).catch(err => console.log(err))
  }
  //qq支付
  const handleQQPay = (rechargeIntegral: number) => {
    //当前选中的充值套餐id
    let priceType = lists[current].id
    userQQRecharge({priceType}).then(res => {
      let data = res.data
      qq.requestPayment({
        package: "prepay_id=" + data.prepay_id,
        // bargainor_id: "",
        success(res) {
          Msg('支付成功')
          setIntegral(integral + rechargeIntegral)
        },
        fail(res) {
          Msg('支付失败')
        }
      })
    })
  }
  //qq内调用微信支付
  const handleQQWeChatPay = (rechargeIntegral: number) => {
    let priceType = lists[current].id
    userQQRecharge({priceType, is_wx: true}).then(res => {
      const {mweb_url, order_no, referer} = res.data
      qq.requestWxPayment({
        url: mweb_url,
        referer: referer,
        success(resquest) {
          checkQqOrderStatusFun(order_no,rechargeIntegral)
        },
        fail(res) {
          Taro.showModal({content: '支付失败' + JSON.stringify(res)})
        }
      })
    })
  }

  // 微信支付
  const weixinProPay = (rechargeIntegral: number) => {
    Taro.login({
      success: (res) => {
        getRechargeOpenid(res.code).then(openidData => {
          let data: CreateOrder = {
            priceType: lists[current].id,
            openid: openidData.openid
          }
          getRechargeOrder(data).then(orderData => {
            Taro.requestPayment({...orderData.payData}).then(() => {
              let afterIntegral: number = integral + rechargeIntegral
              setIntegral(afterIntegral)
              Taro.showModal({
                title: '恭喜您',
                content: `您已成功充值${rechargeIntegral}个积分`,
                cancelText: '会员中心',
                confirmText: '继续充值',
                success: (res) => {
                  if (res.cancel) {
                    // dispatch(changeTabbar(MEMBER))
                    Taro.reLaunch({url: '/pages/index/index?type=' + MEMBER})
                  }
                }
              })
            }).catch(() => {
              errMsg(`用户取消充值`)
            })
          }).catch(() => {
            errMsg(`网络异常，充值失败，客服电话${SERVERPHONE}`)
          })
        }).catch(() => {
          ShowActionModal({msg: `充值失败，请联系客服电话${SERVERPHONE}`})
        })
      }
    })
  }

  // 百度支付
  const baiduProPay = (rechargeIntegral: number) => {
    let id: string = lists[current].id
    console.log(id)
    getBaiduTpOrderId({priceType: id}).then(res => {
      if (res.errcode == 'ok') {
        swan.requestPolymerPayment({
          orderInfo: {...res.payData},
          success: () => {
            // 校验百度支付是否成功 // 每3秒发起一次 直到成功
            checkBaiduOrderStatusFun(res.payData.tpOrderId, rechargeIntegral)
          },
          fail: err => {
            ShowActionModal({msg: err.errMsg})
          }
        });
      } else {
        ShowActionModal({msg: `支付失败，请联系客服电话 ${SERVERPHONE}`})
      }
    })
  }

  const checkQqOrderStatusFun = (tpOrderId, rechargeIntegral: number) => {
    checkBaiduOrderStatusAction({tpOrderId}).then(res => {
      if (res.errcode == 'ok') {
        if (res.data.order_status == 2) {
          let afterIntegral: number = integral + rechargeIntegral
          setIntegral(afterIntegral)
          Taro.showToast({title:'支付成功',icon:'none'});
        }else{
          Taro.showToast({title:'支付失败',icon:'none'});
        }
      }
    })
  }

  const checkBaiduOrderStatusFun = (tpOrderId, rechargeIntegral: number) => {
    var mytimer = setInterval(() => {
      checkBaiduOrderStatusAction({tpOrderId}).then(res => {
        if (res.errcode == 'ok') {
          if (res.data.order_status == 2) {
            let afterIntegral: number = integral + rechargeIntegral
            setIntegral(afterIntegral)
            clearInterval(mytimer)
            ShowActionModal({msg: '支付成功'})
          }
        }
      })
    }, 1000)
  }

  return (
    <View className='recharge-container'>
      <AtMessage/>
      <View className='recharge-header'>
        <View className='recharge-info-item'>
          剩余积分：<Text className='recharge-info-text'>{integral}</Text>
        </View>
        <View className='recharge-info-item'>
          充值金额：<Text className='recharge-info-text'>{lists[current].price}元</Text>
        </View>
        <View className='recharge-info-item'>
          积分价格：<Text className='recharge-info-text'>{price}元/个</Text>
        </View>
        <View className='recharge-info-item'>
          充值积分：<Text
          className='recharge-info-text'>{lists[current].integral}积分（可查看{lists[current].integral}个电话号码）</Text>
        </View>
      </View>
      <View className='recharge-body'>
        <View className='recharge-title'>请选择充值金额</View>
        <View className='recharge-content clearfix'>
          {lists.map((item, index) => (
            <View className='recharge-list' key={item.id} onClick={() => userChooseItem(index)}>
              <View className={classnames({
                'recharge-list-box': true,
                'recharge-list-box-active': index === current
              })}>
                <View className='recharge-money'>{item.price}元</View>
                <View className='recharge-num'>{item.integral}积分</View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View className='recharge-btn' onClick={() => userRechargeAction()}>充值</View>
    </View>
  )
}

Recharge.config = {
  navigationBarTitleText: '用户充值积分',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
