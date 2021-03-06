import Taro, { getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { getPublishRecruitView, publishRecruitInfo } from "../../utils/request/index";
import { UserLastPublishArea, UserLocationCity } from '../../config/store';
import { AREABEIJING } from '../../models/area';
import { userAuthLoction } from "../../utils/helper/index";
import { ShowActionModal } from "../../utils/msg/index";
import { SubscribeToNews } from "../../utils/subscribeToNews/index";
import { useSelector, useDispatch } from "@tarojs/redux-h5";
import { isVaildVal, isPhone } from "../../utils/v/index";
import { setAreaInfo, setArea } from '../../actions/recruit'; //获取发布招工信息action
export default function usePublishViewInfo(InitParams) {
  // 获取用户信息
  const login = useSelector(state => state.User['login']);
  // 视图显示信息
  const [model, setModel] = Taro.useState();
  // 是否展开图片上传
  const [showUpload, setShowUpload] = Taro.useState(false);
  // 是否显示工种选择
  const [showProfession, setShowProssion] = Taro.useState(false);
  // 招工详情的字数
  const [num, setNum] = Taro.useState(0);
  // 备份手机号码
  const [phone, setPhone] = Taro.useState('');
  // 备份当前数据 用于强制修改判断
  const [bakModel, setBakModel] = Taro.useState({});
  //获取redux中发布招工区域详细数据
  const areaInfo = useSelector(state => state.MyAreaInfo);
  // 获取redux中区域名称数据
  // 获取dispatch分发action
  const dispatch = useDispatch();
  // 初始化招工信息
  Taro.useEffect(() => {
    // 判断是否登录，没有登录直接返回
    if (!login) return;
    getPublishRecruitView(InitParams).then(res => {
      // 获取初始化发布招工数据，参数为{ type: type,infoId: id }
      if (res.errcode == 'ok') {
        let InitViewInfo = {
          placeholder: res.placeholder,
          classifies: res.selectedClassifies,
          maxImageCount: res.typeTextArr.maxImageCount,
          maxClassifyCount: res.typeTextArr.maxClassifyCount,
          classifyTree: res.classifyTree,
          title: res.model.title || '',
          address: res.model.address || '',
          detail: res.model.detail || '',
          infoId: res.model.id || InitParams.infoId,
          type: res.type,
          user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
          code: '',
          user_name: res.model.user_name,
          view_images: res.view_image,
          province_id: res.model.province_id || '',
          city_id: res.model.city_id || '',
          location: res.model.location || '',
          adcode: '',
          county_id: res.model.county_id || '',
          is_check: res.model.hasOwnProperty('is_check') ? res.model.is_check : 1,
          check_fail_msg: res.model.check_fail_msg || ''
        };
        // 数据保存到model中
        setModel(InitViewInfo);
        // 初始化用户区域数据
        initUserAreaInfo(res);
        if (InitViewInfo.is_check == 0) bakModelInfo(InitViewInfo);
        // 将数据保存到redux中的areaInfo中
        dispatch(setAreaInfo({ ...areaInfo, title: InitViewInfo.address }));
        // 保存手机号
        setPhone(InitViewInfo.user_mobile);
        // 如果有上传图片保存图片showUpload中
        if (res.view_image.length) setShowUpload(true);
        // 如果填写有招工详情数据，将填写数据长度保存到num中
        if (InitViewInfo.detail) setNum(InitViewInfo.detail.length);
      } else {
        // 请求数据失败走提示框返回上一页面
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack();
          }
        });
      }
    });
  }, [login]);
  // 初始化用户区域数据
  function initUserAreaInfo(data) {
    //  如果传递参数有infoid代表是修改，保存修改的里面默认区域数据
    if (InitParams.infoId) {
      dispatch(setArea(data.default_search_name.name));
    } else {
      let userLoctionCity = _getStorageSync(UserLocationCity);
      if (userLoctionCity) {
        dispatch(setArea(userLoctionCity.city));
      } else {
        userAuthLoction().then(res => {
          dispatch(setArea(res.city));
        }).catch(() => {
          dispatch(setArea(AREABEIJING.name));
        });
      }
    }
    // 如果是修改设置详细发布地址
    if (InitParams.infoId) {
      dispatch(setAreaInfo({
        title: data.model.address,
        location: data.model.location,
        info: '',
        adcode: data.model.adcode || ''
      }));
    } else {
      // 获取用户最后发布的区域信息
      let userLastPublishArea = _getStorageSync(UserLastPublishArea);
      if (userLastPublishArea) {
        dispatch(setAreaInfo(userLastPublishArea));
      }
    }
  }
  function bakModelInfo(model) {
    const data = {
      title: model.title,
      address: model.address,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: '',
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(item => item.url)
    };
    setBakModel(data);
    ShowActionModal({
      title: '审核失败',
      msg: model.check_fail_msg
    });
  }
  function getPublishedInfo() {
    if (!model) return;
    const data = {
      title: model.title,
      address: areaInfo.title,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: areaInfo.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(item => item.url)
    };
    let mydata = JSON.parse(JSON.stringify(data));
    let imgs = mydata.images.join(',');
    let classifies = mydata.classifies.join(',');
    mydata = { ...mydata, images: imgs, classifies: classifies };
    return mydata;
  }
  function userPublishRecruitAction() {
    let data = getPublishedInfo();
    if (!data) return;
    if (!isVaildVal(data.title, 3)) {
      ShowActionModal({ msg: '请正确输入3~12字中文标题!' });
      return;
    }
    if (!data.classifies.length) {
      ShowActionModal({ msg: '请选择您的工种!' });
      return;
    }
    if (!data.province_id && !data.address) {
      ShowActionModal({ msg: '请选择您的详细地址!' });
      return;
    }
    if (!isVaildVal(data.user_name, 2)) {
      ShowActionModal({ msg: '请正确输入2~6字中文姓名!' });
      return;
    }
    if (!isPhone(data.user_mobile)) {
      ShowActionModal({ msg: '手机号输入有误!' });
      return;
    }
    if (phone != data.user_mobile) {
      if (!data.code) {
        ShowActionModal({ msg: '请输入正确的验证码!' });
        return;
      }
    }
    if (!isVaildVal(data.detail, 15)) {
      ShowActionModal({ msg: '请正确输入15~500字招工详情!' });
      return;
    }
    // 如果是审核失败 那么久必须强制修改
    if (model && model.is_check == 0) {
      let bak = JSON.stringify(bakModel);
      let mydata = JSON.stringify(data);
      if (bak == mydata) {
        ShowActionModal({
          title: '审核失败',
          msg: model && model.check_fail_msg
        });
        return;
      }
    }
    // 拼接小地址的描述
    data.address += '@@@@@' + areaInfo.info;
    publishRecruitInfo(data).then(res => {
      if (res.errcode == 'ok') {
        SubscribeToNews("recruit", () => {
          ShowActionModal({
            msg: res.errmsg,
            success: () => {
              Taro.reLaunch({
                url: '/pages/published/recruit/index'
              });
            }
          });
        });
      } else {
        ShowActionModal({
          msg: res.errmsg
        });
      }
    });
  }
  return {
    model,
    setModel,
    showUpload,
    setShowUpload,
    showProfession,
    setShowProssion,
    userPublishRecruitAction,
    // area,
    // setArea,
    // areaInfo,
    // setAreaInfo,
    num,
    setNum,
    phone
  };
}