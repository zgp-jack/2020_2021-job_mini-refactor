import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image, Block, Button } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../../components/nodata/index";
import './index.scss';
export default class CollectionRecruitList extends Taro.Component {
  render() {
    const { data = [], onHandlerClick, recruitNoMoreData, bottom = true } = this.props;

    // 定义弹窗
    const [isOpened, setIsOpened] = Taro.useState(false);
    // 弹窗内容
    const [modalContent, setModalContent] = Taro.useState('');
    // 弹窗
    const onHandleClick = (type, id) => {
      // 1 审核中 2 通过 0 失败
      if (type == '2') {
        Taro.navigateTo({
          url: `/pages/detail/info/index?id=${id}`
        });
      } else if (type == '0') {
        setIsOpened(true);
        setModalContent('该信息未通过人工审核，审核通过后，即可查看');
      } else if (type == '1') {
        setIsOpened(true);
        setModalContent('该信息正在人工审核中，请稍后再试');
      }
    };
    return <View className="recruit-lists-container" style={bottom ? '' : 'padding-bottom:0'}>
      {!data.length && <Nodata text="没有找到相关的数据" />}
      {data && data.map(item => <Nerv.Fragment key={item.id}>
          {
        // item.map((d) => (
        <View className="recruit-list-item" onClick={() => {
          onHandleClick(item.is_check, item.id);
        }} key={item.id}>
              
              {item.is_end == '2' && <Image className="recruit-findend-img" src={IMGCDNURL + 'newlist-jobfindend.png'} />}
              <View className="recruit-list-header">
                <View className="recruit-list-title overwords">{item.title}</View>
                
              </View>
              <View className="recruit-list-body">
                <Image className="recruit-list-user" src={item.header_img} />
                <View className="recruit-list-body-content">
                  <View className="recruit-body-header">
                    <Text className="recruit-list-username">{item.user_name}</Text>
                    {item.is_end !== '2' && <Image className="recruit-list-finding" src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className="recruit-list-words">
                    <View className="recruit-words-text">{item.detail}</View>
                  </View>
                </View>
              </View>
              <View className="recruit-list-footer">
                
                <View className="recruit-list-loctxt overwords">{item.time}</View>
                <Button size="mini" className="recruit-list-button" onClick={e => {
              e.stopPropagation();onHandlerClick(item.id);
            }}>取消收藏</Button>
              </View>
            </View>}
        </Nerv.Fragment>)}
      {data.length && recruitNoMoreData && <View className="recruit-lists-noData">没有更多数据了</View>} 
      <AtModal isOpened={isOpened}>
        <AtModalHeader>温馨提示</AtModalHeader>
        <AtModalContent>
          {modalContent}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => {
            setIsOpened(false);
          }}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>;
  }

}