import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, showModal as _showModal, setNavigationBarTitle as _setNavigationBarTitle, makePhoneCall as _makePhoneCall, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Picker, Text, Image } from '@tarojs/components';
import { jobTopConfigAction, jobDoTopAction, jobGetTopAreasAction, jobChangeTopAreasAction, resumesTopConfigV2Action, resumesDoTopAction, resumesDoTopV2Action, resumesUpdateTopResumeAction } from '../../utils/request/index';
import { SERVERPHONE, IMGCDNURL } from "../../config/index";
import { UserInfo } from '../../config/store';
import Msg from "../../utils/msg/index";
import setRecruitTopArea from '../../actions/recruit_top';
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import './index.scss';
export const contextItem = Taro.createContext({});
export default class Topping extends Taro.Component {
  config = {
    navigationBarTitleText: '招工置顶'
  };

  render() {
    const dispatch = useDispatch();
    const AreParams = useSelector(store => store.recruitTop['AreParams']);
    const router = Taro.useRouter();
    let { id, type, rec, areaData, endTimes, endTimeStr } = router.params;
    // 获取userInfo
    let userInfo = _getStorageSync(UserInfo);
    const [data, setData] = Taro.useState({
      top_rules: []
    });
    // 积分
    const [num, setNum] = Taro.useState(0);
    // 天
    const [paramsDay, setParamsDay] = Taro.useState(0);
    //置顶天数
    const [day, setDay] = Taro.useState('请选择置顶天数');
    // 修改置顶天数
    const [editData, seteditDay] = Taro.useState('延长');
    // 下拉框总参数
    const [list, setList] = Taro.useState([]);
    // 最大省市
    const [city, setCity] = Taro.useState({
      max_city: 0,
      max_province: 0
    });
    const [params, setParams] = Taro.useState({
      city: [],
      province: [],
      whole: []
    });
    const [province, setProvince] = Taro.useState([]);
    // 到期时间
    const [endTime, setEndTime] = Taro.useState('');
    // 到期时间时间戳
    const [end, setEnd] = Taro.useState(0);
    // 显示最新到期时间
    const [displayTime, setdisplayTime] = Taro.useState(false);
    // 最新时间
    const [newTime, setNewTime] = Taro.useState('');
    // 修改时最大积分
    const [maxNum, setMaxNum] = Taro.useState(0);
    // 找活省份最大的长度
    const [provinceNum, setProvinceNum] = Taro.useState(0);
    // 找活天数
    const [recDay, setRecDay] = Taro.useState('1');
    const [basics, setBasics] = Taro.useState({
      max_number: 0,
      province_integral: 0,
      max_top_days: 0,
      max_city: 0,
      max_province: 0
    });
    // 当redux更新后 ，立即更新视图区域
    Taro.useEffect(() => {
      setParams({ ...AreParams });
      calcPrice(AreParams.city, AreParams.province, AreParams.whole);
    }, [AreParams]);
    // 修改超过最大就显示消耗积分
    Taro.useEffect(() => {
      if (type) {
        if (!rec) {
          const val = {
            job_id: id,
            time: userInfo.tokenTime
          };
          jobGetTopAreasAction(val).then(res => {
            if (res.errcode === 'ok') {
              setParams({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country });
              dispatch(setRecruitTopArea({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country }));
              setEndTime(res.data.end_time_string);
              setEnd(res.data.end_time);
              setMaxNum(res.data.max_price);
            } else {
              _showModal({
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
        _setNavigationBarTitle({
          title: '找活置顶'
        });
        let params = {
          interface_version: 'v2'
        };
        resumesTopConfigV2Action(params).then(res => {
          if (res.errcode === 'ok') {
            setData({ top_rules: res.data.top_rules });
            let array = [];
            for (let i = 0; i < res.data.days.length; i++) {
              array.push(i + "天");
            }
            if (type) {
              if (areaData) {
                const areList = JSON.parse(areaData);
                let city = [];
                let province = [];
                let whole = [];
                let recDay = Math.ceil((parseInt(endTimes) - new Date().getTime() / 1000) / 86400);
                let maxPrice = 0;
                areList.map(v => {
                  if (v.pid === '1') {
                    city.push(v);
                  } else if (v.pid === '0') {
                    whole.push(v);
                  } else {
                    province.push(v);
                  }
                });
                {
                  maxPrice = (city.length * 20 + province.length * 20) * recDay;
                }

                setParams({ city, province, whole });
                dispatch(setRecruitTopArea({ city, province, whole }));
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
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
          }
        });
      } else {
        jobTopConfigAction().then(res => {
          if (res.errcode === 'ok') {
            setData({ top_rules: res.data.top_rules });
            setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
            let array = [];
            let daysarr = res.data.days;
            for (let i = 0; i < daysarr.length; i++) {
              array.push(daysarr[i] + "天");
            }
            setList(array);
          } else {
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
          }
        });
      }
    }, []);
    const getMyDate = str => {
      const oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' + addZero(oMin);
      return oTime;
    };
    const addZero = num => {
      if (parseInt(num) < 10) {
        num = '0' + num;
      }
      return num;
    };
    const handleClick = e => {
      setDay(list[e.detail.value]);
      if (type) {
        // 增加时间 新增天数*新的单价
        // 修改地区 单价比原单价大，差价*天数，
        // 时间和城市都改变了 新单价大于原单价 ：新价-旧价*剩余天数+新价格*新增天数 新单价小于原单价：旧价格*新增天数
        seteditDay('修改');
        setdisplayTime(true);
        // 时间
        let all = 86400000 * (parseInt(e.detail.value) + 1) + ((end - 0) * 1000 - 0);
        const newTime = getMyDate(all);
        setNewTime(newTime);
        // 获取旧价格
        const oldPrice = maxNum;
        // 获取价格
        let newPrice;
        if (rec) {
          newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
        } else {
          newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
        }
        // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        let remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        // 只改变时间
        let money;
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
          let numData = 0;
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
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // 置顶
    const handleTopping = () => {
      const province_ids = params.province.map(v => v.id);
      const city_ids = params.city.map(v => v.id);
      const country_ids = params.whole.map(v => v.id);
      if (!province_ids.length && !city_ids.length && !country_ids.length) {
        _showModal({
          title: '温馨提示',
          content: '请选择您的置顶城市',
          showCancel: false
        });
        return;
      }
      const detail = {
        is_country: country_ids.toString(),
        mid: userInfo.userId,
        province_ids: province_ids.toString(),
        city_ids: city_ids.toString(),
        day: paramsDay,
        job_id: id,
        time: userInfo.tokenTime
      };
      const editDetail = {
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
          resumesUpdateTopResumeAction(editDetail).then(res => {
            if (res.errcode === 'ok') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: () => {
                  Taro.navigateBack({
                    delta: 1
                  });
                }
              });
              return;
            } else if (res.errcode === 'get_integral') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: true,
                success(res) {
                  if (res.confirm == true) {
                    Taro.navigateTo({
                      // 前往积分页面
                      url: `/pages/getintegral/index`
                    });
                  }
                }
              });
              return;
            } else if (res.errcode === 'auth_forbid') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                cancelText: '取消',
                confirmText: '去实名',
                success(res) {
                  if (res.cancel) {
                    Taro.navigateBack({
                      delta: 1
                    });
                  } else if (res.confirm) {
                    let backtwo = "backtwo";
                    Taro.redirectTo({
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
        } else {
          jobChangeTopAreasAction(editDetail).then(res => {
            if (res.errcode === 'ok') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: () => {
                  Taro.navigateBack({
                    delta: 1
                  });
                }
              });
              return;
            } else if (res.errcode === 'get_integral') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: true,
                success(res) {
                  if (res.confirm == true) {
                    Taro.navigateTo({
                      // 前往积分页面
                      url: `/pages/getintegral/index`
                    });
                  }
                }
              });
              return;
            } else if (res.errcode === 'auth_forbid') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                cancelText: '取消',
                confirmText: '去实名',
                success(res) {
                  if (res.cancel) {
                    Taro.navigateBack({
                      delta: 1
                    });
                  } else if (res.confirm) {
                    let backtwo = "backtwo";
                    Taro.redirectTo({
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
        }
      } else {
        if (!province_ids || !city_ids) {
          _showModal({
            title: '温馨提示',
            content: '请设置置顶城市',
            showCancel: false
          });
          return;
        }
        if (paramsDay === 0) {
          _showModal({
            title: '温馨提示',
            content: '请设置置顶天数',
            showCancel: false
          });
          return;
        }
        if (rec) {
          resumesDoTopV2Action(detail).then(res => {
            if (res.errcode === 'ok') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: () => {
                  Taro.navigateBack({
                    delta: 1
                  });
                }
              });
            }
          });
        } else {
          jobDoTopAction(detail).then(res => {
            if (res.errcode === 'ok') {
              _showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: () => {
                  Taro.navigateBack({
                    delta: 1
                  });
                }
              });
            }
          });
        }
      }
    };
    const handleAddJump = () => {
      userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`);
    };
    // 传递方法
    const transferFun = ({ city, province, whole }) => {
      dispatch(setRecruitTopArea({ city, province, whole }));
      setParams({ city, province, whole });
      calcPrice(city, province, whole);
    };
    const calcPrice = (city, province, whole) => {
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
          const oldPrice = maxNum;
          // 获取价格
          // 时间差
          let remDay = (end - new Date().getTime() / 1000) / 86400;
          let newPrice;
          if (rec) {
            newPrice = whole.length ? 500 : (city.length * 20 + province.length * 20) * 1;
          } else {
            newPrice = whole.length ? 500 : (city.length * 10 + province.length * 20) * 1;
          }
          // 修改区域
          const changeCity = true; //修改区域
          // 只改变时间
          let money;
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
          let num = 0;
          if (money <= 0) {
            num = 0;
          } else {
            num = num;
          }
          setNum(money);
        } else {
          let numData = 0;
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
    const modifyFun = province => {
      setProvince(province);
      // 设置积分
      recIntegral(province);
    };
    const recIntegral = province => {
      let num = 0;
      if (province.length) {
        num = basics.province_integral * province.length * parseInt(recDay);
      } else {
        num = 0;
      }
      setNum(num);
    };
    // 删除
    const handleDel = v => {
      if (rec) {
        if (v.pid === '1') {
          params.city.map((val, i) => {
            if (val.id === v.id) {
              params.city.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
          dispatch(setRecruitTopArea({ city: params.city, province: params.province, whole: params.whole }));
        }
      }
      if (v.pid === '1') {
        params.province.map((val, i) => {
          if (val.id === v.id) {
            params.province.splice(i, 1);
          }
        });
        setParams({ city: params.city, province: params.province, whole: params.whole });
        dispatch(setRecruitTopArea({ city: params.city, province: params.province, whole: params.whole }));
      } else if (v.pid === '0') {
        params.whole.map((val, i) => {
          if (val.id === v.id) {
            params.whole.splice(i, 1);
          }
        });
        setParams({ city: params.city, province: params.province, whole: params.whole });
        dispatch(setRecruitTopArea({ city: params.city, province: params.province, whole: params.whole }));
      } else {
        params.city.map((val, i) => {
          if (val.id === v.id) {
            params.city.splice(i, 1);
          }
        });
        setParams({ city: params.city, province: params.province, whole: params.whole });
        dispatch(setRecruitTopArea({ city: params.city, province: params.province, whole: params.whole }));
      }
      // 积分 
      // 省市大于原来的省市就改变，不然就是直接最大积分
      // 获取旧价格
      const oldPrice = maxNum;
      // 获取价格
      let newPrice;
      if (rec) {
        newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
      } else {
        newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
      }
      // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
      // 时间差
      let remDay = (end - new Date().getTime() / 1000) / 86400;
      // 修改区域
      const changeCity = true; //修改区域
      // 修改时间
      let money;
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
      let num = 0;
      if (money <= 0) {
        num = 0;
      } else {
        num = money;
      }
      setNum(num);
    };
    // 取消
    const handleCancel = () => {
      const oldPrice = maxNum;
      // 获取价格
      const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
      // 时间差
      let remDay = (end - new Date().getTime() / 1000) / 86400;
      // 修改区域
      // 修改时间
      let money;
      // 只改变时间
      if (oldPrice > newPrice) {
        const num = (newPrice - oldPrice) * 1;
        if (num > 0) {
          money = num;
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
    const handleJump = () => {
      if (!rec) {
        userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`);
      } else {
        userRouteJump(`/pages/topping/distruction/index?max_city=${basics.max_city}&max_province=${basics.max_province}`);
      }
    };
    const handleRecDay = e => {
      let reg = /^\d{0,2}$/;
      if (!reg.test(e.detail.value)) {
        _showModal({
          title: '温馨提示',
          content: '只能输入整数，请重新输入',
          showCancel: false,
          success() {
            setRecDay('');
          }
        });
        return;
      }
      let num = 0;
      if (e.detail.value) {
        num = basics.province_integral * province.length * parseInt(e.detail.value);
      } else {
        num = 0;
      }
      setRecDay(e.detail.value);
      setNum(num);
    };
    const handleRecDel = v => {
      const list = JSON.parse(JSON.stringify(province));
      list.map((val, i) => {
        if (val.id === v.id) {
          list.splice(i, 1);
        }
        return val;
      });
      let num = 0;
      num = list.length * basics.province_integral * parseInt(recDay);
      setProvince(list);
      setNum(num);
    };
    // 找活置顶
    const handleRecTopping = () => {
      const province_ids = params.province.map(v => v.id);
      const city_ids = params.city.map(v => v.id);
      const country_ids = params.whole.map(v => v.id);
      const provinces = [...province_ids, ...city_ids, ...country_ids];
      if (!province_ids.length && !city_ids.length && !country_ids.length) {
        _showModal({
          title: '温馨提示',
          content: '请选择您的置顶城市',
          showCancel: false
        });
        return;
      }
      if (!parseInt(recDay) || parseInt(recDay) == 0) {
        _showModal({
          title: '温馨提示',
          content: '输入的置顶天数不能为0或者为空',
          showCancel: false
        });
        return;
      }
      if (parseInt(recDay) > basics.max_top_days) {
        Msg(`最多可置顶${basics.max_top_days}天！`);
        return;
      }
      // const provinces = (province.map(v=>v.id)).join(',');
      // const citys = (city.map(v => v.id)).join(',');
      // let params={
      //   days: parseInt(recDay),
      //   citys: 0,
      //   provinces,
      // }
      let details = {
        days: paramsDay,
        citys: 0,
        provinces
      };
      // return;
      if (!type) {
        resumesDoTopAction(details).then(res => {
          if (res.errcode === 'ok') {
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false,
              success() {
                Taro.navigateBack({
                  delta: 1
                });
              }
            });
          } else if (res.errcode === 'resume_null') {
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              // showCancel: false,
              success() {
                Taro.navigateTo({
                  url: `pages/resume/newJobs/index`
                });
              }
            });
            return;
            //获取积分
          } else if (res.errcode === 'get_integral') {
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              success() {
                Taro.navigateTo({
                  url: `/pages/getintegral/index`
                });
              }
            });
            return;
          } else {
            _showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false,
              success() {
                Taro.navigateBack({
                  delta: 1
                });
              }
            });
            return;
          }
        });
      }
    };
    return <View className="topping">
      <View className="topping-title">当前选择置顶范围：</View>
      <View className="topping-list-box">
        
        {province && province.map(v => <View className="topping-list" onClick={() => handleDel(v)}>
              {v.name}
              <Image src={`${IMGCDNURL}lpy/delete.png`} className="topping-list-image" />
            </View>)}
        
          {params && params.city.map(v => <View className="topping-list" onClick={() => handleDel(v)}>
            {v.name}
            <Image src={`${IMGCDNURL}lpy/delete.png`} className="topping-list-image" />
          </View>)}
          {params && params.province.map(v => <View className="topping-list" onClick={() => handleDel(v)}>
            {v.name}
              <Image src={`${IMGCDNURL}lpy/delete.png`} className="topping-list-image" />
          </View>)}
        {params && params.whole.map(v => <View className="topping-list" onClick={() => handleDel(v)}>
            {v.name}
            <Image src={`${IMGCDNURL}lpy/delete.png`} className="topping-list-image" />
          </View>)}
        
        {!rec ? <View>
          {(params.city.length || params.province.length) && (params.city.length < 3 || params.province.length < 2) && <View onClick={handleAddJump} className="topping-list-add">添加更多</View>}
          {!params.city.length && !params.province.length && !params.whole.length && <View className="topping-change-btnBox" onClick={handleJump}><View className="topping-change-btnBox-btn">点击选择置顶范围</View></View>}
        </View> :
        // 找活
        <View>
          {(params.city.length || params.province.length) && (params.city.length < basics.max_city || params.province.length < basics.max_province) && <View onClick={handleAddJump} className="topping-list-add">添加更多</View>}
          {!params.city.length && !params.province.length && !params.whole.length && <View className="topping-change-btnBox" onClick={handleJump}><View className="topping-change-btnBox-btn">点击选择置顶范围</View></View>}
        </View>}
      </View>
      <View className="topping-day">请选择置顶天数：</View>
        
        {type ? <View className="topping-edit-list">
          <View className="topping-edit-list-box">
            <View className="topping-edit-list-box-time">当前到期时间: {endTime}</View>
            <View className="topping-edit-list-box-day">
            <Picker mode="selector" range={list} value={0} onChange={e => handleClick(e)}>
                <Text className="topping-edit-list-box-input">{editData}</Text>
            </Picker>
            </View>
          </View>
          {displayTime && <View>
            <View className="topping-edit-list-box">
              <View className="topping-edit-list-box-time">最新到期时间:<Text className="topping-edit-list-box-time-edit"> {newTime}</Text></View>
              <View className="topping-edit-list-box-cancel" onClick={handleCancel}>取消</View>
            </View>
            
          </View>}
          {num !== 0 && <View className="topping-input-box-list">消耗积分:<View className="topping-input-box-list-num">{num}分</View></View>}
      </View> : <View className="topping-input-box">
        <Picker mode="selector" range={list} value={0} onChange={e => handleClick(e)}>
          <View className="topping-input-box-list">置顶天数:
            <Text className="topping-input-box-list-input">{day}</Text>
          </View>
        </Picker>
        <View className="topping-input-box-list">消耗积分:<View className="topping-input-box-list-num">{num}分</View></View>
      </View>}
    
    
        <View className="topping-confirm-btnBox"><View className="topping-confirm-btnBox-btn" onClick={handleTopping}>确定置顶</View></View>
      <View>
        <View className="topping-toprule">置顶规则</View>
        {data.top_rules.map((v, i) => <View key={i + i} className="topping-toprule-list">{v}</View>)}
        
          <View className="topping-toprule-phone" onClick={() => {
          _makePhoneCall({ phoneNumber: SERVERPHONE });
        }}>{SERVERPHONE}</View>
        
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
Topping.config = { navigationBarTitleText: '招工置顶' };