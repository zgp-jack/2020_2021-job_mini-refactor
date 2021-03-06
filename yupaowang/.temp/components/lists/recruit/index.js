import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image, Block } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../nodata/index";
import './index.scss';
export default class RecruitList extends Taro.Component {
  render() {
    const { data, bottom = true, hasMore = false } = this.props;

    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <View className="recruit-lists-container" style={bottom ? '' : 'padding-bottom:0'}>
      {data && data.map(item => <Nerv.Fragment>
          {item && item.map(d => <View className="recruit-list-item" key={d.id} onClick={() => userRouteJump(`/pages/detail/info/index?id=${d.id}`)}>
              {d.top && <Image className="list-toprecruit-img" src={IMGCDNURL + 'newlist-jobzd.png'} />}
              {d.is_end == 2 && <Image className="recruit-findend-img" src={IMGCDNURL + 'newlist-jobfindend.png'} />}
              <View className="recruit-list-header">
                <View className="recruit-list-title overwords">{d.title}</View>
                
              </View>
              <View className="recruit-list-body">
                <Image className="recruit-list-user" src={d.image} />
                <View className="recruit-list-body-content">
                  <View className="recruit-body-header">
                    <Text className="recruit-list-username">{d.user_name}</Text>
                    {d.is_end !== 2 && <Image className="recruit-list-finding" src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className="recruit-list-words">
                    <View className="recruit-words-text">{d.detail}</View>
                  </View>
                </View>
              </View>
              <View className="recruit-list-footer">
                <Image className="recruit-list-loc" src={IMGCDNURL + 'newlist-jobposi.png'} />
                <View className="recruit-list-loctxt overwords">{d.show_address}</View>
                <Text className="recruit-list-time">{d.time}</Text>
              </View>
            </View>)}
        </Nerv.Fragment>)}
      {data && data[0] && data[0].length && !hasMore && <View className="list-data-notmore">没有更多数据了</View>} 
      {data && data[0] && !data[0].length && <Nodata text="暂无相关数据" />}
    </View>;
  }

}