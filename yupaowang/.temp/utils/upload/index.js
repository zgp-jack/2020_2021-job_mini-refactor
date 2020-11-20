import Taro, { chooseImage as _chooseImage, showActionSheet as _showActionSheet, getStorageSync as _getStorageSync, showLoading as _showLoading, uploadFile as _uploadFile, showToast as _showToast, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import { UserInfo } from '../../config/store';
import { UPLOADIMGURL, BAIDU, MINIVERSION } from "../../config/index";
export default function UploadImgAction(url = UPLOADIMGURL) {
  let uploadUrl = url || UPLOADIMGURL;
  return new Promise(resolve => {
    _chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        AppUploadImg(resolve, res, uploadUrl);
      }
    });
  });
}
export function CameraAndAlbum(url = UPLOADIMGURL) {
  return new Promise(resolve => {
    _showActionSheet({
      itemList: ['拍照', '从相册中选择']
    }).then(res => {
      let index = res.tapIndex;
      _chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: index === 0 ? ['camera'] : ['album'],
        success: function (res) {
          AppUploadImg(resolve, res, url);
        }
      });
    });
  });
}
function AppUploadImg(resolve, res, url = UPLOADIMGURL) {
  const userInfo = _getStorageSync(UserInfo);
  _showLoading({ title: '图片上传中' });
  _uploadFile({
    url: url,
    filePath: res.tempFilePaths[0],
    header: {
      userid: userInfo ? userInfo.userId : ''
    },
    name: 'file',
    success(response) {
      // 百度小程序出来之后是一个纯json 但是其他端就不是， 解决百度冲突
      let mydata = MINIVERSION == BAIDU ? response.data : JSON.parse(response.data);
      // let resData = { local: response, remote: mydata}
      _showToast({
        title: mydata.errmsg,
        icon: "none",
        duration: 2000
      });
      if (mydata.errcode == "ok") {
        resolve(mydata);
      }
    },
    fail: function () {
      _showToast({
        title: "网络错误，上传失败！",
        icon: "none",
        duration: 2000
      });
    },
    complete: function () {
      _hideLoading();
    }
  });
}