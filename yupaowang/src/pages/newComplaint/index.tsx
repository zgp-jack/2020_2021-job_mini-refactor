import Taro, { Config, useState,useRouter } from '@tarojs/taro'
import { View, Text, Switch, Button, Textarea } from '@tarojs/components'
import UploadImgAction from '../../utils/upload'
import { resumesComplainAction, publishComplainAction } from '../../utils/request/index';
import NewImageview from '../../components/newImageview';
import WordsTotal from '../../components/wordstotal/index';
import './index.scss'

interface ImageArrType{
  item: ImageItem[]
}
interface ImageItem{
  url: string,
  httpurl: string
}
export default function NewComplaintPage() {
  const router = useRouter();
  let { page, type, infoId } = router.params;
  const [display, setDisplay] = useState<boolean>(false);
  const [imageArr, setImageArr] = useState <ImageArrType>({
    item:[],
  })
  const [details, setDetails] = useState<string>('');
  const [num, setNum] =useState<number>(0);
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) {
        setImageArr({item: [...imageArr.item, imageItem]})
      } else {
        imageArr.item[i] = imageItem
        setImageArr({ ...imageArr })
      }
    })
  }
  // 用户删除图片
  const userDelImg = (i: number) => {
    imageArr.item.splice(i, 1)
    setImageArr({ ...imageArr })
  }
  // 提交
  const handleSub = ()=>{
    const image = display ? imageArr.item :[];
     // 找工作投诉请求参数
    let jobParams = { infoId, type: type, content: details, image  };
    // 找工人投诉请求参数
    let resumeParams = { resume_uuid: infoId, content: details, image};
    let params = (page === "detail" && type === "resume") ? resumeParams : jobParams;
    // 投诉请求url
    let url = (page === "detail" && type === "resume") ? resumesComplainAction : publishComplainAction;
    url(params).then(res=>{
      if (res.errcode == "ok") {
        Taro.navigateBack({delta:1})
      }else{
        Taro.showModal({
          title: '提示',
          content: res.errmsg,
          showCancel: false,
          confirmText: res.errcode == 'pass_complaint' ? '知道了' : '确定'
        })
      }
    })
  }
  return(
    <View className='complaintPage'>
      <View className='complaintPage-tips'>恶意投诉会被封号，请如实填写</View>
      <View>
        <View className='complaintPage-content'>
          <View className='complaintPage-content-title'>投诉内容<Text className='complaintPage-content-title-text'>（必填）</Text></View>
          <Textarea
            className='complaintPage-content-textArea'
            value={details}
            onInput={(e) => { setDetails(e.detail.value), setNum(e.detail.value.length)}}
            maxlength={300}
            placeholder='请如实填写投诉内容'
          />
          <WordsTotal num={num} total={300}/>
        </View>
        <View className='complaintPage-imgBox'>
          <View className='complaintPage-imgBox-top'>
          <View className='complaintPage-imgBox-title'>上传凭证<Text className='complaintPage-imgBox-title-text'>（可不上传）</Text></View>
            <View className='complaintPage-imgBox-btn'>
              <Switch
              style='zoom:0.8'
              checked={display}
              onClick={() => setDisplay(!display)}
              className='complaintPage-imgBox-btn-switch' 
              color='rgba(20, 169, 0, 1)'/></View>
          </View>
          {display && 
          <View>
            <NewImageview 
              images={imageArr.item}
              max={6}
              userDelImg={(i) => userDelImg(i)}
              userUploadImg={(i) => userUploadImg(i)}
            />
          </View>}
        </View>
        <View className='complaintPage-footer'>
          <View><Button className='complaintPage-footer-btn' onClick={handleSub}>提交</Button></View>
        </View>
      </View>
    </View>
  )
}

NewComplaintPage.config = {
  navigationBarTitleText: '投诉',
} as Config