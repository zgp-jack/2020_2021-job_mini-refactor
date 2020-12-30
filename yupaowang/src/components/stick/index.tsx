import Taro from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components';
import './index.scss'

export default function Stick() {
    return (
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
                <View className='stick-bottom-middle'>
                    <View className='stick-middle-header'>
                        广东找佛山油漆工成都长期安保通知万年场
                    </View>
                    <View className='stick-middle-connect-context'>
                        成都长期安保通知万年场地铁站附需要两名长期安保队员，要求身高173以上，听话，无犯罪记录少爷勿扰。上班
                    </View>
                    <View className='stick-bottom-context-btn'>
                        <Button>修改</Button>
                        <Button>重新招工</Button>
                        <Button>我要置顶</Button>
                    </View>
                </View>
                <Button className='stick-bottom-btn'>我知道了</Button>
            </View>
        </View>
    )
} 
