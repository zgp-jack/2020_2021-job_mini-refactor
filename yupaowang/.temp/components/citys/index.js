import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Input, Text, Image } from '@tarojs/components';
import { MAXCACHECITYNUM, IMGCDNURL } from "../../config/index";
import { HistoryCities } from '../../config/store';
import AREAS from '../../models/area';
import { objDeepCopy } from "../../utils/helper/index";
import './index.scss';
export default class Cities extends Taro.Component {
  render() {
    const { data = [], parent = false, userTapCityBtn, userChangeCity, area, userLoc } = this.props;

    // 最近访问城市数据
    const [recentlyCities, setRecentlyCities] = Taro.useState([]);
    // 是否显示input过滤城市
    const [show, setShow] = Taro.useState(false);
    // 输入框内容
    const [text, setText] = Taro.useState('');
    const [inputCity, setInputCity] = Taro.useState([]);
    const [saveAreaData, setSaveAreaData] = Taro.useState([]);
    // 用户点击城市
    const userTapCity = city => {
      let historyCities = _getStorageSync(HistoryCities);
      if (historyCities) {
        let id = city.id;
        let result = historyCities.findIndex(item => item.id === id);
        if (result !== -1) historyCities.splice(result, 1);
        historyCities.unshift(city);
        historyCities.splice(MAXCACHECITYNUM);
      } else {
        historyCities = [city];
      }
      // 储存最新的用户点击历史城市数据
      _setStorageSync(HistoryCities, historyCities);
      userChangeCity && userChangeCity(city.city);
      userTapCityBtn(false);
      userRecentlyCities();
    };
    // 用户点击搜索数据
    const userTapInputCity = item => {
      setShow(false);
      //delete item['city_name']
      userTapCity(item);
    };
    // 用户最新选择城市
    const userRecentlyCities = () => {
      // 获取历史城市数据列表
      let historyCities = _getStorageSync(HistoryCities);
      if (historyCities) {
        // 如果有用户定位位置信息
        if (userLoc.id) {
          // 在历史选择城市信息中有定位城市信息删除该信息，否则删除历史城市信息最后一条
          let LocIdex = historyCities.findIndex(item => {
            return item.id == userLoc.id;
          });
          if (LocIdex != -1) {
            historyCities.splice(LocIdex, 1);
          } else {
            historyCities.splice(MAXCACHECITYNUM - 1);
          }
          setRecentlyCities(historyCities);
          return;
        }
      }
    };
    // 初始化城市数据
    Taro.useEffect(() => {
      // 初始化用户定位城市
      userRecentlyCities();
      let copyArr = objDeepCopy(AREAS);
      let areaObj = [];
      copyArr.shift();
      copyArr.map(item => {
        let child = item.has_children;
        if (child) {
          let childData = item.children;
          for (let i = 0; i < childData.length; i++) {
            if (!parent) {
              if (i === 0) continue;
            }
            let obj = {
              id: childData[i].id,
              pid: childData[i].pid,
              city: childData[i].name,
              ad_name: childData[i].ad_name,
              city_name: item.name + '-' + childData[i].name
            };
            areaObj.push(obj);
          }
        } else {
          let obj = {
            id: item.id,
            pid: item.pid,
            city: item.name,
            ad_name: item.ad_name,
            city_name: item.name
          };
          areaObj.push(obj);
        }
      });
      setInputCity(areaObj);
      setSaveAreaData(areaObj);
    }, []);
    const userEnterCity = e => {
      let val = e.detail.value;
      setText(val);
      const newData = saveAreaData.filter(item => item.city_name.indexOf(val) !== -1);
      setInputCity(newData);
    };
    // 输入框获取焦点
    const onInputFocus = () => {
      setShow(true);
    };
    // 用户清空输入框内容
    const userClearContent = () => {
      setText('');
      setShow(false);
    };
    return <View className="citiesbox">
      <View className="city-header">
        <View className="city-header-input">
          <Input placeholder="请输入城市名" onFocus={() => onInputFocus()} onInput={e => userEnterCity(e)} value={text} />
          <Image className="city-header-clear" onClick={() => userClearContent()} src={IMGCDNURL + 'clear-input.png'} />
        </View>
        <Text className="city-header-close" onClick={() => userTapCityBtn(false)}>取消</Text>
      </View>
      <View className="city-area-tips">当前选择城市：{area}</View>
      <View className="city-area-container">

        
        <View className="city-area-item">
          <View className="city-area-title">当前定位城市/最近访问</View>
          <View className="city-area-content clearfix">
            {userLoc.id && <View className="city-item" onClick={() => userTapCity(userLoc)}>
              <View className="city-item-posi">
                <Image className="city-item-img" src={IMGCDNURL + 'gps-posi.png'} />
                {userLoc.city}
              </View>
            </View>}
            {recentlyCities.map(item => <View className="city-item" key={'rec' + item.id} onClick={() => userTapCity(item)}>
                <Text className="city-item-text overwords">{item.city}</Text>
              </View>)}
          </View>
        </View>

        
        {data.map((item, index) => <View className="city-area-item" key={index + item[0].id}>
            {index === 0 ? <View className="city-area-title">热门城市</View> : <View className="city-area-title">{item[0].city}</View>}
            
            <View className="city-area-content clearfix">
              {item.map((d, key) => index === 0 && key === 0 ? '' : <View className="city-item" key={key + d.id} onClick={() => userTapCity(d)}>
                <Text className="city-item-text overwords">{d.city}</Text>
              </View>)}
            </View>
          </View>)}
      </View>

      
      {show && <View className="inputlist">
        {inputCity.length ? inputCity.map(item => <View className="input-list-item" onClick={() => userTapInputCity(item)} key={item.id}>{item.city_name}</View>) : <View className="notsearchdata">
            <Image className="notimg" src={IMGCDNURL + 'nodata.png'} />
            <Text className="nottext">暂无数据</Text>
          </View>}
      </View>}

    </View>;
  }

}