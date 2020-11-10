import Taro, {useEffect, useState} from '@tarojs/taro'
import {View, Text, Image} from "@tarojs/components";
import './index.scss'
import {getRankRulesList} from "../../utils/request";

interface RankRulesItem {
  type_name: string
  img_url: string
  description: string
  is_share: number
  share_type: string
  button_words: string
  click_type: number
}

export default function () {
  const [list, setList] = useState<RankRulesItem[]>([])
  const [tips, setTips] = useState<string[]>([])
  const [postError, setPostError] = useState<boolean>(false)
  useEffect(() => {
    getRankRulesList().then(res => {
      const {sort_rule_lists, warm_tips} = res.data
      setList(sort_rule_lists)
      setTips(warm_tips)
    }).catch(e => {
      setPostError(true)
    })
  }, [])
  if (postError) {
    return (
      <View className="error-page">
        <View className="error-img-bor">
          <Image className="error-img" src="http://cdn.yupao.com/miniprogram/images/nodata.png"/>
        </View>
        <View className="error-text">网络出错请点击<Text className="reload-text">重新加载</Text></View>
      </View>
    )
  }
  return (
    <View className="rank-rules">
      <View className="header">
        <View className="header-point">
          <Text className="point-text">我的排名点：</Text>
          <Text className="point-text">0</Text>
        </View>
        <View className="header-detail">
          <Text className="detail-text">注：找活名片只有审核通过后，才会在列表展示。排名点越高，排名越靠前。
          </Text>
        </View>
      </View>
      <View className="rank-list">
        {
          list.map((item, i) => (
            <View className="rank-item" key={i}>
              <View className="item-info-box">
                <View className="info-img-bor">
                  <Image className="info-img" src={item.img_url}/>
                </View>
                <View className="infos">
                  <View className="info-name">
                    {item.type_name}
                  </View>
                  <View className="info-dec">
                    {item.description}
                  </View>
                </View>
              </View>
              <View className="item-btn">{item.button_words}</View>
            </View>
          ))
        }
      </View>
      <View className="rank-tips">
        <View className="tips-title">温馨提示</View>
        <View className="tips-content">
          {
            tips.map((item, i) => (
              <View className="tips-item" key={i}>{item}</View>
            ))
          }
        </View>
      </View>
    </View>
  )
}
