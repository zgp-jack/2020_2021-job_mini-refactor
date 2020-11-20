import Nerv from "nervjs";
import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading } from "@tarojs/taro-h5";
import { View, Text, Image, Video } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import classnames from 'classnames';
import { requestAction } from "../../../utils/request/index";
import { AtAccordion, AtList } from 'taro-ui';
import Nodata from "../../../components/nodata/index";
import './index.scss';
export default class Course extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-使用教程'
  };

  render() {
    // 设置高亮
    const [highlight, setHighlight] = Taro.useState(1);
    // 设置默认tab
    const tab = [{
      id: 1, text: '招工老板', icon: `${IMGCDNURL}course-laoban.png`, activeIcon: `${IMGCDNURL}course-laoban-active.png`
    }, {
      id: 2, text: '工人师傅', icon: `${IMGCDNURL}course-geren.png`, activeIcon: `${IMGCDNURL}course-geren-active.png`
    }];
    const handleClick = id => {
      setHighlight(id);
    };
    // 招工老老板
    const [bossData, setBossData] = Taro.useState({
      item: []
    });
    // 工人师傅
    const [workerMaster, setWorkerMaster] = Taro.useState({
      item: []
    });
    // 请求数据
    Taro.useEffect(() => {
      requestAction().then(res => {
        _hideNavigationBarLoading();
        // 增加默认关闭字段
        for (let i = 0; i < res.masterList.length; i++) {
          res.masterList[i].isShow = false;
        }
        for (let i = 0; i < res.userList.length; i++) {
          res.userList[i].isShow = false;
        }
        setBossData({ item: [...res.masterList] });
        setWorkerMaster({ item: [...res.userList] });
      });
    }, []);
    const bossIsShow = id => {
      let mydata = JSON.parse(JSON.stringify(bossData));
      mydata.item.forEach(v => {
        let flag = v.id === id && !v.isShow;
        v.isShow = flag ? true : false;
      });
      setBossData(mydata);
    };
    const workerMasterIsShow = id => {
      let workerMasterData = JSON.parse(JSON.stringify(workerMaster));
      workerMasterData.item.forEach(v => {
        let flag = v.id === id && !v.isShow;
        v.isShow = flag ? true : false;
      });
      setWorkerMaster(workerMasterData);
    };
    return <View className="course-content">
    <View className="course-tab">
      {!tab.length && <Nodata />}
      {tab.map(item => <View className="course-tab-box" key={item.id} onClick={() => {
          handleClick(item.id);
        }}>
          <View className="course-tab-content">
            <View className={classnames({
              'course-tab-border': item.id === highlight,
              'course-tab-content': true
            })}>
            <View className="course-tab-img">
                <Image className="course-tab-img-box" src={item.id === highlight ? item.activeIcon : item.icon}></Image>
            </View>
            <Text className={classnames({
                'course.active-text': item.id === highlight
              })}>{item.text}</Text>
          </View>
          </View>
        </View>)}
    
    </View>
      <View className="course-atAccordion-box">
    {highlight === 1 && <View>
          {bossData.item.map(item => <AtAccordion open={item.isShow} onClick={() => {
            bossIsShow(item.id);
          }} title={item.title}>
              <AtList hasBorder={false}>
                <Video className="course-atAccordion-box-video" src={item.video_url} />
              </AtList>
            </AtAccordion>)}
        </View>}
    {highlight === 2 && <View>
          {workerMaster.item.map(item => <AtAccordion open={item.isShow} onClick={() => {
            workerMasterIsShow(item.id);
          }} title={item.title}>
              <AtList hasBorder={false}>
                <Video className="course-atAccordion-box-video" src={item.video_url} controls />
              </AtList>
            </AtAccordion>)}
        </View>}
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
Course.config = { navigationBarTitleText: '鱼泡网-使用教程' };