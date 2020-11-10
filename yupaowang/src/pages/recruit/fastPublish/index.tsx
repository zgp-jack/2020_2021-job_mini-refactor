import Taro, { useRouter, RouterInfo, createContext, Config } from '@tarojs/taro'
import { View, Text, Form, Input, Textarea, Block } from '@tarojs/components'
import './index.scss'

export default function FastPublish () {
    let Textarea_value :string = ''
    return (
        <View className='publish-view'>
            <View className="item-input-view">
                <Text className="publish-title item-input-title">招工详情:</Text>
                <Textarea className="textarea-publish" placeholder='请输粘贴或输入您要发布得招工信息' value={Textarea_value}></Textarea>
            </View>
            <View>
                <Text className="publish-title item-input-title">招工详情:</Text>
                <Input type="text" placeholder=""/>
            </View>
        </View>
    )
}

FastPublish.config = {
    navigationBarTitleText: '急速发布',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
} as Config