import Taro from '@tarojs/taro'
import {UserInfo} from '../../config/store'
import {UPLOADIMGURL} from '../../config'

interface ResultImage {
  errcode: string,
  errmsg: string,
  url: string,
  httpurl: string,
  card_info?: ResultCardInfoImage
}

interface ResultCardInfoImage {
  success: boolean,
  tips_message: string,
  address: string,
  birth: string,
  gender: number,
  name: string,
  nation_id: string,
  nationality: string,
  num: string,
  sex: string
}

export default function UploadImgAction(url: string = UPLOADIMGURL): Promise<ResultImage> {
  let uploadUrl = url || UPLOADIMGURL
  return new Promise((resolve) => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        AppUploadImg(resolve, res, uploadUrl)
      }
    })
  })
}


export function CameraAndAlbum(url: string = UPLOADIMGURL): Promise<ResultImage> {
  return new Promise((resolve) => {
    Taro.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
    })
      .then(res => {
        let index = res.tapIndex
        Taro.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: index === 0 ? ['camera'] : ['album'],
          success: function (res) {
            AppUploadImg(resolve, res, url)
          },
        })
      })
  })
}


function AppUploadImg(resolve, res: any, url: string = UPLOADIMGURL) {

  const userInfo = Taro.getStorageSync(UserInfo)
  Taro.showLoading({title: '图片上传中'})
  Taro.uploadFile({
    url: url,
    filePath: res.tempFilePaths[0],
    header: {
      userid: userInfo ? userInfo.userId : ''
    },
    name: 'file',
    success(response) {
      let mydata = JSON.parse(response.data);
      // let resData = { local: response, remote: mydata}
      Taro.showToast({
        title: mydata.errmsg,
        icon: "none",
        duration: 2000,
      })
      if (mydata.errcode == "ok") {
        resolve(mydata)
      }
    },
    fail: function () {
      Taro.showToast({
        title: "网络错误，上传失败！",
        icon: "none",
        duration: 2000
      })
    },
    complete: function () {
      Taro.hideLoading()
    }
  })
}
