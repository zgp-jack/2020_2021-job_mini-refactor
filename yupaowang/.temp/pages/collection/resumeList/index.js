import Nerv from "nervjs";
import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import CollectionResumeList from "../collectionResumeList/index";
import { getCollectionResumeListData, ResumeCancelCollectionAction } from "../../../utils/request/index";
import './index.scss';
export default class ResumeList extends Taro.Component {
  render() {
    const { bottom, initPage } = this.props;

    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // * 定义找活列表数组
    const [resLists, setResLists] = Taro.useState([]);
    // 找活初始页数
    const [initResPage, setinitResPage] = Taro.useState({
      page: 1
    });
    // 没有更多数据
    const [recruitNoMoreData, setRecruitNoMoreData] = Taro.useState(false);
    // 请求数据
    Taro.useEffect(() => {
      getCollectionResumeListData(initResPage.page).then(res => {
        _hideNavigationBarLoading();
        _stopPullDownRefresh();
        if (!res.data.length) {
          setRecruitNoMoreData(true);
        }
        if (initResPage.page === 1) {
          setResLists([...res.data]);
        } else {
          setResLists([...resLists, ...res.data]);
        }
        if (refresh) setRefresh(false);
      });
    }, [initResPage]);
    // 上拉加载更多
    Taro.useEffect(() => {
      if (!bottom) return;
      if (recruitNoMoreData) return;
      setinitResPage({ ...initResPage, page: initResPage.page + 1 });
    }, [bottom]);
    // 下拉
    Taro.useEffect(() => {
      if (!initPage) return;
      setRecruitNoMoreData(false);
      setinitResPage({ page: initPage });
    }, [initPage]);
    // 找活取消收藏
    const resumeListHandler = id => {
      ResumeCancelCollectionAction(id).then(res => {
        if (res.errcode === 'ok') {
          setinitResPage({ page: 1 });
        }
      });
    };
    return <View className="recruit-container">
      <View className="recruit-lists-containerbox">
        <CollectionResumeList data={resLists} onHandlerClick={resumeListHandler} recruitNoMoreData={recruitNoMoreData} />
      </View>
    </View>;
  }

}