import {Image, Text, View} from "@tarojs/components";
import Taro, {Config} from "@tarojs/taro";
import {AtTextarea} from "taro-ui";
import './index.scss'
import {IMGCDNURL} from "../../config";
import useState = Taro.useState;
import UploadImgAction from "../../utils/upload";
import {isVaildVal} from "../../utils/v";
import Msg, {SubPopup} from "../../utils/msg";
import {publishComplainAction} from "../../utils/request";
import useRouter = Taro.useRouter;

interface ImageItem {
  errcode: string
  errmsg: string
  httpurl: string
  url: string
}

export default function Complaint() {
  const query = useRouter()
  const [jobId] = useState(query.params.id)
  const [value, setValue] = useState<any>('')
  const [images, setImages] = useState<ImageItem[]>([])
  const [showPreview, setShowPreview] = useState<number | null>(null)
  // const [canSave, setCanSave] = useState<boolean>(false)
  const handlePicker = () => {
    UploadImgAction().then((res: ImageItem) => {
      setImages([...images, res])
    })
  }
  const handlePreview = (i: number) => {
    setShowPreview(i)
  }
  const handleDelete = (i: number) => {
    let _images = JSON.parse(JSON.stringify(images))
    _images.splice(i, 1)
    setImages(_images)
  }
  const handleSubmit = () => {
    if (!isVaildVal(value, 15, 300)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    let _images = ''
    images.forEach((item, i) => {
      if (i === 0) {
        _images += item.url
      } else {
        _images += ',' + item.url
      }
    })
    const params = {
      content: value,
      type: 'job',
      infoId: jobId,
      image: _images
    };
    publishComplainAction(params).then((res) => {
      if (res.errcode === 'ok') {
        Taro.showToast({
          title: res.errmsg,
          duration: 5000,
          icon: "none",
          success: function () {
            setTimeout(function () {
              Taro.navigateBack()
            }, 3000)
          }
        })

        // SubscribeToNews('complain', () => {
        //   SubPopup({
        //     tips: res.errmsg,
        //     callback: () => {
        //       // Taro.navigateBack()
        //     }
        //   })
        // })
      } else {
        Taro.showToast({
          title: res.errmsg,
          icon: "none",
        })
      }
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
          height={200}
        />
        <View className="complaint-title">
          上传凭证<Text className="complaint-sub-title">（可不传）</Text>
        </View>
        <View className="picker-box">
          {
            images.map((item, i) => (
              <View className="select-img" key={i}>
                <Image className='upload-img' src={item.httpurl} onClick={() => handlePreview(i)}/>
                <Image className="img-close" src={IMGCDNURL + 'new-published-close-icon.png'}
                       onClick={() => handleDelete(i)}/>
              </View>
            ))
          }
          {
            images.length < 6 &&
            <Image className='upload-img' src={IMGCDNURL + 'yc/upload-img.png'} onClick={handlePicker}/>
          }
        </View>
        <View className={"complaint-btn " + (value ? 'can-save' : '')} onClick={handleSubmit}>
          提交
        </View>
        <View className={"preview-bor " + (showPreview !== null ? "show-preview" : "")}
              onClick={() => setShowPreview(null)}>
          <Image className="preview-img" src={images[(showPreview as number)].httpurl}/>
        </View>
      </View>
    </View>
  )
}
Complaint.config = {
  navigationBarTitleText: '投诉',
} as Config
