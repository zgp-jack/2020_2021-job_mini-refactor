import {Text, View} from "@tarojs/components";
import Taro, {Config} from "@tarojs/taro";
import {AtTextarea, AtImagePicker} from "taro-ui";
import './index.scss'
import useState = Taro.useState;

export default function Complaint() {
  const [value, setValue] = useState<any>('')
  const [images, setImages] = useState<any>([])
  const onChange = files => {
    setImages(files)
  }
  const onFail = () => {
    Taro.showToast({
      title: '选择图片失败'
    })
  }
  return (
    <View className="complaint">
      <View className="complaint-tips">
        恶意投诉会被封号，请如实填写
      </View>
      <View className="container">
        <View className="complaint-title">
          投诉内容<Text className="complaint-sub-title">（必填）</Text>
        </View>
        <AtTextarea
          value={value}
          onChange={val => setValue(val.detail.value)}
          maxLength={300}
          placeholder='请如实填写投诉内容'
          placeholderClass="placeholder-class"
        />
        <View className="complaint-title">
          上传凭证<Text className="complaint-sub-title">（可不传）</Text>
        </View>
        <AtImagePicker
          length={3}
          count={6}
          files={images}
          onChange={onChange}
          onFail={onFail}
          showAddBtn={images < 7}
        />
        <View className="complaint-btn">
          提交
        </View>
      </View>
    </View>
  )
}
Complaint.config = {
  navigationBarTitleText: '投诉',
} as Config
