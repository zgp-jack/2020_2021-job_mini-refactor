import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button, Image, Text, Block } from '@tarojs/components';
import Nodata from "../../../components/nodata/index";
import { IMGCDNURL } from "../../../config/index";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import './index.scss';
export default class CollectionResumeList extends Taro.Component {
  render() {
    const { data = [], onHandlerClick, bottom = true, recruitNoMoreData } = this.props;

    // 定义弹窗
    const [isOpened, setIsOpened] = Taro.useState(false);
    // 弹窗内容
    const [modalContent, setModalContent] = Taro.useState('');
    // 弹窗
    const onHandleClick = (type, uuid) => {
      // 1 审核中 2 通过 0 失败
      if (type == '2') {
        Taro.navigateTo({
          url: `/pages/resume/detail/index?uuid=${uuid}`
        });
      } else if (type == '0') {
        setIsOpened(true);
        setModalContent('该信息未通过人工审核，审核通过后，即可查看');
      } else if (type == '1') {
        setIsOpened(true);
        setModalContent('该信息正在人工审核中，请稍后再试');
      }
    };
    return <View className="resume-list-container" style={bottom ? '' : 'padding-bottom:0'}>
      {!data.length && <Nodata text="没有找到相关的数据" />}
      {data && data.map(item => <Nerv.Fragment key={item.id}>
          {<View className="resume-list-item" onClick={() => onHandleClick(item.resume.check, item.resume_uuid)} key={item.id}>
              <View className="resume-list-header">
                  <Image className="resume-list-user" src={item.resume.headerimg} />
                <View className="resume-list-userinfo">
                  <View className="resume-list-userinfo-detail">
                      <Text className="resume-userinfo-name">{item.resume.username}</Text>
                      {item.resume.birthday && <Text className="resume-userinfo-birthday">{item.resume.birthday}岁</Text>}
                      {item.resume.certificate == 1 && <Image className="resume-userinfo-img" src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                    <Text className="resume-list-type">{item.resume.type}</Text>
                  <View className="resume-otherinfo">
                      <Text className="resume-otherinfo-text">{item.resume.nation}</Text>
                      <Text className="resume-otherinfo-text">{item.resume.prof_degree}</Text>
                      <Text className="resume-otherinfo-text">{item.resume.experience}</Text>
                  </View>
                </View>
              </View>
              <View className="resume-list-works">
                  
              </View>
                <View className="resume-list-content overwords">{item.resume.introduce}</View>
              <View className="resume-list-footer">
                  <View className="resume-list-loctxt overwords">{item.resume.time}</View>
                <Button size="mini" className="resume-list-button" onClick={e => {
              e.stopPropagation();onHandlerClick(item.resume_uuid);
            }}>取消收藏</Button>
              </View>
            </View>}
        </Nerv.Fragment>)}
      {data.length && recruitNoMoreData && <View className="resume-lists-noData">没有更多数据了</View>}
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