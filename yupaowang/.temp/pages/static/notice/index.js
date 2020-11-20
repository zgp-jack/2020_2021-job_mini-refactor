import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, RichText, Button } from '@tarojs/components';
import { newsInfoAction } from "../../../utils/request/index";
import { getUserShareMessage } from "../../../utils/helper/index";
import { ISCANSHARE } from "../../../config/index";
import './index.scss';
export default class Notice extends Taro.Component {
  config = {
    navigationBarTitleText: '咨讯详情'
  };

  render() {
    const router = Taro.useRouter();
    let { id } = router.params;
    const [data, setData] = Taro.useState();
    Taro.useEffect(() => {
      newsInfoAction(id).then(res => {
        // 图片显示有问题，设置他的最大宽度
        const ImgData = res.data.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        res.data.content = ImgData;
        setData({ item: res.data });
      });
    }, []);
    // 设置分享信息
    Taro.useShareAppMessage(() => {
      return {
        ...getUserShareMessage()
      };
    });
    return <View className="consultationDetails-content">
      {data && <View>
        <View className="consultationDetails-title">{data.item.title}</View>
        <View className="consultationDetails-flex">
          <View>作者：{data.item.author}</View>
          <View>{data.item.time}</View>
        </View>
        <View className="consultationDetails-substance">
          <RichText space="nbsp" nodes={data.item.content} className="consultationDetails-richText" />
        </View>
      </View>}
      {ISCANSHARE && <Button className="consultationDetails-button" openType="share">分享</Button>}
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
Notice.config = { navigationBarTitleText: '咨讯详情' };