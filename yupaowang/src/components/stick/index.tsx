import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components';
import './index.scss'
import { IMGCDNURL } from '../../config';

export default function Stick(props) {
  // 判断显示/隐藏弹出框
  const { tatol } = props
  const [popup, setPopup] = useState<string>(tatol)
  return (
    <View>
      {
        popup === "1" &&
        <View className='box'>
        <View className='stick-box'>
          <View className='stick-box-top'>
            <View className='stick-top-header'>
              鱼泡提示
                </View>
            <View className='stick-top-context'>
              点击信息右下角"我要置顶"功能，即可将信息状态升级为置顶信息，让您的信息被更多的工友浏览
                </View>
          </View>
          <View className='stick-box-bottom'>
            <Image className='stick-box-bottom-img' src={`${IMGCDNURL}new-published-settop-tips.png`} />
            <Button className='stick-bottom-btn' onClick={() => setPopup("0")}>我知道了</Button>
          </View>
        </View>
        </View>
      }
    </View>
  )
} 
