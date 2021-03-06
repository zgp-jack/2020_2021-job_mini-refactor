import Nerv from "nervjs";
import Taro, { showModal as _showModal, showLoading as _showLoading, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import { Image, Swiper, SwiperItem, View } from "@tarojs/components";
import { IMGCDNURL } from "../../config/index";
import "./index.scss";
import { turntableDraw, turntableIndex, turntableVideoEnd } from "../../utils/request/index";
import Msg, { showModalTip } from "../../utils/msg/index";
import { userCancelAuth } from "../../utils/helper/index";
let videoAd;
let JZ = require("../../../src/config/minis/jizhao");
export default class Turntable extends Taro.Component {
  config = {
    navigationBarTitleText: "鱼泡网大转盘",
    navigationBarBackgroundColor: "#e9463f"
  };

  render() {
    // * 中奖名单
    const [scrollname, setScrollname] = Taro.useState({
      num: 100,
      current: 0,
      autoplay: true,
      circleTime: 15,
      indicatorDots: false,
      circular: true,
      vertical: true,
      interval: 3000,
      duration: 1000,
      nameArr: [] // * 中将名单
    });
    // * 接口请求的数据（频繁操作）
    const [serversData, setServersData] = Taro.useState({
      userTimes: 0,
      overVideoTimes: 0,
      allVideoTimes: 0 // * 看视频总次数
    });
    // * 转盘是否停止
    let [isComplete, setIsComplete] = Taro.useState(true);
    // * 选择角度/时间
    let [rotateDegTime, setRotateDegTime] = Taro.useState({
      rotateDeg: 0,
      transTime: 5
    });
    const getRand = (start, end) => {
      if (start == 0) return Math.floor((end + 1) * Math.random());
      return Math.floor(Math.random() * end + 1);
    };
    const sliceArrGroup = arr => {
      let result = [];
      let chunk = 4;
      for (var i = 0, j = arr.length; i < j; i += chunk) {
        result.push(arr.slice(i, i + chunk));
      }
      return result;
    };
    const initOrderLists = () => {
      let firstName = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴鬱胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍卻璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易";
      let firstNameArr = firstName.split("");
      let _integral = [10, 10, 10, 10, 10, 10, 10, 100, 100, 300];
      let firstLen = firstName.length - 1;
      let nameArr = [];
      for (let i = 0; i < scrollname.num; i++) {
        let nameStr = firstNameArr[getRand(0, firstLen)] + "先生";
        let integral = _integral[getRand(0, _integral.length - 1)];
        nameArr.push({ name: nameStr, integral: integral });
      }
      scrollname.current = scrollname.num / 4 - 1;
      scrollname.nameArr = sliceArrGroup(nameArr);
      setScrollname({ ...scrollname });
    };
    // * 获取配置信息
    const initUserinfo = () => {
      turntableIndex().then(res => {
        if (res.code == 200) {
          let { all_video_times, over_video_times } = res.data;
          setServersData({
            userTimes: all_video_times - over_video_times,
            overVideoTimes: over_video_times,
            allVideoTimes: all_video_times
          });
        }
      });
    };
    // * 旋转角度/时间
    function rotationAngle(edg, time) {
      rotateDegTime.rotateDeg = edg;
      rotateDegTime.transTime = time;
      setRotateDegTime({ ...rotateDegTime });
    }
    // * 开始抽奖
    const startTurntable = () => {
      if (!isComplete) return false;
      isComplete = false;
      setIsComplete(isComplete);
      turntableDraw().then(res => {
        if (res.code == 200) {
          let { all_video_times, over_video_times, rotate } = res.data;
          let userTimes = all_video_times - over_video_times;
          // 旋转角度
          rotationAngle(rotate - 30, 5);
          let timer = setTimeout(function () {
            setIsComplete(true);
            clearTimeout(timer);
            _showModal({
              title: "恭喜中奖",
              content: res.errmsg,
              confirmText: "确定",
              success: response => {
                if (response.confirm) {
                  // 旋转角度
                  rotationAngle(0, 0);
                  serversData.userTimes = userTimes;
                  setServersData({ ...serversData });
                }
              }
            });
          }, 5000);
        } else if (res.code == 206 || res.code == 207) {
          let { all_video_times, over_video_times, rotate } = res.data;
          let userTimes = all_video_times - over_video_times;
          // 旋转角度
          rotationAngle(rotate - 30, 5);
          let timer = setTimeout(function () {
            setIsComplete(true);
            clearTimeout(timer);
            _showModal({
              title: '谢谢参与',
              content: res.errmsg,
              showCancel: false,
              confirmText: res.code == 206 ? '再来一次' : '确定',
              success: () => {
                // 旋转角度
                rotationAngle(0, 0);
                serversData.userTimes = userTimes;
                setServersData({ ...serversData });
              }
            });
          }, 5000);
        } else if (res.code == 405) {
          _showModal({
            title: "温馨提示",
            content: res.errmsg,
            cancelText: "取消",
            confirmText: "去观看",
            success: response => {
              if (response.confirm) {
                _showLoading({
                  mask: true
                });
                userSeeVideo();
              }
            }
          });
          setIsComplete(true);
        } else {
          showModalTip({
            title: "温馨提示",
            tips: res.errmsg
          });
        }
        setIsComplete(true);
      });
    };
    function userSeeVideo() {
      if (videoAd) {
        videoAd.show().then(() => {
          _hideLoading();
        }).catch(() => {
          // 失败重试
          videoAd.load().then(() => {
            videoAd.show();
          }).catch(err => {
            _hideLoading();
            //两次展示广告失败，直接获得奖励
            console.log('两次展示广告失败，直接获得奖励');
          });
        });
      }
    }
    // * 创建视频
    const createVideo = () => {
      if (Taro.createRewardedVideoAd) {
        videoAd = Taro.createRewardedVideoAd({
          adUnitId: JZ.VIDEOAD
        });
        videoAd.onLoad(() => {});
        videoAd.onError(err => {
          showModalTip({
            title: "温馨提示",
            tips: "广告创建失败，请重新进入！",
            callback: () => {
              userCancelAuth();
            }
          });
        });
        videoAd.onClose(status => {
          if (status && status.isEnded || status === undefined) {
            videoAdStop();
          }
        });
      }
    };
    function videoAdStop() {
      turntableVideoEnd().then(res => {
        if (res.code == 200) {
          _showLoading({
            title: "视频加载中",
            mask: true
          });
          startTurntable();
        } else if (res.code == 205) {
          _showLoading({
            mask: true
          });
          startTurntable();
        } else {
          Msg(res.errmsg);
        }
      });
    }
    Taro.useEffect(() => {
      createVideo();
      initOrderLists();
      initUserinfo();
    }, []);
    return <View>
      <View className="yupao-common-container">
        <View className="turntable-container">
          <Image src={`${IMGCDNURL}turntable-daymustwin.png?t=1`} className="xydzpimg"></Image>
          <View className="turntable-content">
            <View className="turntable-content-bg" style={{
              transform: `rotate(${rotateDegTime.rotateDeg}deg)`,
              transition: `transform ${rotateDegTime.transTime}s ease-in-out 0s`
            }}></View>
            <View onClick={() => startTurntable()} className="turntable-btnbox"></View>
            <View className="turntable-shade"></View>
          </View>

          <View className="turntable-footer">
            <View className="turntable-footer-item">
              <View className="turntable-times-tips">
                今日可抽奖次数：{serversData.userTimes} 次
              </View>
            </View>
            <View className="turntable-footer-item">
              <View className="turntable-names-scroll">
                <View className="index-swiperbox">
                  <View className="index-Swiper-opacity"></View>
                  <View className="turntable-names-tips">中奖名单</View>
                  <Swiper className="scorllname-swiper" indicator-dots={scrollname.indicatorDots} autoplay={scrollname.autoplay} interval={scrollname.interval} duration={scrollname.duration} circular={scrollname.circular} vertical={scrollname.vertical}>
                    {scrollname.nameArr.map((item, i) => <SwiperItem key={i}>
                        <View className="scrollname-item">
                          {item.map((sonItem, sonIndex) => <View key={sonIndex}>
                              恭喜 {sonItem.name} 中奖！获得 {sonItem.integral}{" "}
                              临时积分
                            </View>)}
                        </View>
                      </SwiperItem>)}
                  </Swiper>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
Turntable.config = { navigationBarTitleText: "鱼泡网大转盘", navigationBarBackgroundColor: "#e9463f" };