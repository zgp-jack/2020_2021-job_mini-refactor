import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image, Block } from '@tarojs/components';
import classnames from 'classnames';
import { getMemberMsgNumber } from "../../utils/request/index";
import { isIos } from "../../utils/v/index";
import { useSelector, useDispatch } from "@tarojs/redux-h5";
import { setMsg } from '../../actions/msg';
import { changeTabbar } from '../../actions/tabbar';
import { MemberMsgTimerInterval, PUBLISHRECRUIT, PUBLISHRESUME, PUBLISHUSED, IMGCDNURL } from "../../config/index";
import './index.scss';
export default class Tabbar extends Taro.Component {
  render() {
    const { notredirect } = this.props;

    const tabbar = useSelector(state => state.tabbar);
    const login = useSelector(state => state.User['login']);
    const memberMsg = useSelector(state => state.msg['messageNumber']);
    const dispatch = useDispatch();
    // 是否展示发布
    const [show, setShow] = Taro.useState(false);
    // 展开发布的动画效果
    const [active, setActive] = Taro.useState(false);
    // * 判断跳转还是切换tabbar
    const changeTabbarAction = item => {
      if (item.click) {
        if (item.click == 'openPublishMenu') {
          openPublishMenu();
          setTimeout(() => {
            setActive(true);
          }, 10);
        }
        return;
      }
      if (notredirect) dispatch(changeTabbar(item.id));else Taro.reLaunch({ url: '/pages/index/index?type=' + item.id });
    };
    // 点击发布按钮
    const openPublishMenu = () => {
      setShow(true);
    };
    // 点击遮罩可以关闭广告
    const closePublishMenu = () => {
      setShow(false);
      setActive(false);
    };
    // 用户点击弹出的发布类型按钮
    const userTapPublishItem = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // 统计未读信息
    const getMemberMsg = () => {
      if (!login) return;
      getMemberMsgNumber(isIos()).then(data => {
        if (data.errcode == 'ok') dispatch(setMsg(data.data));
      });
    };
    // 定时请求未读信息
    Taro.useEffect(() => {
      getMemberMsg();
      let timer = setInterval(() => {
        getMemberMsg();
      }, MemberMsgTimerInterval);
      // 清除页面定时器
      return () => clearInterval(timer);
    }, []);
    return <Nerv.Fragment>
      <View className="common-footer-tabbar">
        {tabbar.list.map(item => <View className={classnames({
          'common-footer-tabbar-list': true,
          'common-footer-tabbar-list-active': item.id === tabbar.key
        })} key={item.id} onClick={() => changeTabbarAction(item)}>
            <Image className="commmon-footer-tabbar-img" src={item.id === tabbar.key ? item.activeImg : item.defaultImg} />
            <Text className="commmon-footer-tabbar-text">{item.title}</Text>
            {item.msg && memberMsg && <Text className="footermsg">{memberMsg > 9 ? '9+' : memberMsg}</Text>}
          </View>)}
      </View>
      {show && <View className={classnames({
        'tabbar-publish-container': true,
        'tabbar-publish-container-active': active
      })} onClick={() => closePublishMenu()}>
        <Image className={classnames({
          'tabbar-publish-img': true,
          'tabbar-publish-img-active': active
        })} src={IMGCDNURL + 'publish.png'}></Image>
        <View className={classnames({
          'tabbar-publish-items': true,
          'tabbar-publish-items-active': active
        })}>
          <View className="tabbar-publish-item" onClick={() => userTapPublishItem(PUBLISHRECRUIT)}>
            <Image className="tabbar-publih-item-img" src={IMGCDNURL + 'publish-recruit.png'}></Image>
            <Text className="tabbar-publih-item-text">发布招工</Text>
          </View>
          <View className="tabbar-publish-item" onClick={() => userTapPublishItem(PUBLISHRESUME)}>
            <Image className="tabbar-publih-item-img" src={IMGCDNURL + 'publish-card.png'}></Image>
            <Text className="tabbar-publih-item-text">发布找活</Text>
          </View>
          <View className="tabbar-publish-item" onClick={() => userTapPublishItem(PUBLISHUSED)}>
            <Image className="tabbar-publih-item-img" src={IMGCDNURL + 'publish-used.png'}></Image>
            <Text className="tabbar-publih-item-text">二手交易</Text>
          </View>
        </View>
      </View>}
    </Nerv.Fragment>;
  }

}