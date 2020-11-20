import Taro, { showModal as _showModal } from "@tarojs/taro-h5";
import { getUsedInfoModel, publishUsedInfo } from "../../utils/request/index";
import Msg, { ShowActionModal } from "../../utils/msg/index";
import { objDeepCopy } from "../../utils/helper/index";
import { REALNAMEPATH } from "../../config/index";
import { isVaildVal, isPhone } from "../../utils/v/index";
import { useSelector } from "@tarojs/redux-h5";
// 保存area地区数据
let areaTree = false;
let userTel = '';
let modelStr = '';
export default function useUsedInfo(id) {
  // 检测用户是否登录
  const login = useSelector(store => store.User.login);
  let data = {
    type: 'fleamarket',
    infoId: id
  };
  // 用户发布信息模型
  const [model, setModel] = Taro.useState({
    type: 'fleamarket',
    infoId: id,
    user_mobile: '',
    title: '',
    user_name: '',
    detail: '',
    code: '',
    province_id: '',
    city_id: '',
    category_id: '',
    attribute_id: ''
  });
  // 用户初始化信息模型
  const [initModel, setInitModel] = Taro.useState();
  // 父级索引
  const [parentCurrent, setParentCurrent] = Taro.useState(0);
  // 子级索引
  const [childCurrent, setChildCurrent] = Taro.useState(0);
  // 目的名字
  const [classifyName, setClassiryName] = Taro.useState('');
  // 城市名字
  const [cityName, setCityName] = Taro.useState('');
  // picker 省份索引
  const [pIndex, setPIndex] = Taro.useState(0);
  // picker 省份数据
  const [areaProvince, setAreaProvince] = Taro.useState([]);
  // picker 市级索引
  const [cIndex, setCIndex] = Taro.useState(0);
  // picker 市级索引
  const [areaCity, setAreaCity] = Taro.useState([]);
  Taro.useEffect(() => {
    if (!login) return;
    initUsedPublishViewInfo();
  }, [login]);
  // 初始化用户发布信息的视图渲染
  const initUsedPublishViewInfo = () => {
    if (!login) return;
    getUsedInfoModel(data).then(data => {
      if (data.errcode == 'ok') {
        // 正常获取到内容
        areaTree = data.areaTree;
        setInitModel(data);
        initPublishModelInfo(data);
        initAreaPicker(data);
      } else if (data.errcode == 'to_auth') {
        // 用户当前未实名 或者实名没通过
        _showModal({
          title: '温馨提示',
          content: data.errmsg,
          cancelText: '取消',
          confirmText: '去实名',
          success(res) {
            if (res.cancel) {
              Taro.navigateBack();
            } else if (res.confirm) {
              Taro.navigateTo({
                url: REALNAMEPATH
              });
            }
          }
        });
      } else if (data.errcode == 'auth_checking') {
        // 当前用户的实名信息正在审核中
        ShowActionModal({
          msg: data.errmsg,
          success: () => Taro.navigateBack()
        });
      } else {
        // 其他状态
        ShowActionModal({
          msg: data.errmsg,
          success: () => {
            Taro.navigateBack();
          }
        });
      }
    });
  };
  // 设置发布信息模型
  const initPublishModelInfo = data => {
    let InitData = {
      ...model,
      title: data.model.title || '',
      attribute_id: data.model.attribute_id || '',
      category_id: data.model.category_id || '',
      detail: data.model.detail || '',
      user_mobile: data.model.user_mobile || '',
      user_name: data.model.user_name || '',
      province_id: data.model.province_id || '',
      city_id: data.model.city_id || ''
    };
    userTel = InitData.user_mobile;
    if (data.model.is_check === 0) modelStr = JSON.stringify(InitData);
    setModel(InitData);
    setCityName(data.show_address);
    if (InitData.category_id) {
      let pIndex = data.classifyTree.findIndex(item => item.id == InitData.category_id);
      let cIndex = data.classifyTree[pIndex].attributes.findIndex(item => item.id == InitData.attribute_id);
      setClassiryName(data.classifyTree[pIndex].name + '-' + data.classifyTree[pIndex].attributes[cIndex].name);
      setChildCurrent(cIndex);
      setParentCurrent(pIndex);
    }
  };
  // 初始化地区picker
  const initAreaPicker = data => {
    let areaData = objDeepCopy(data.areaTree);
    let id = data.model.province_id || '';
    let cid = data.model.city_id || '';
    let current = 0;
    let areaProvince = [];
    areaData.map((item, index) => {
      if (id == item.id) {
        setPIndex(index);
        current = index;
      }
      let has_children = item.has_children;
      areaProvince.push({
        id: item.id,
        has_children: has_children,
        name: item.name
      });
      if (has_children) {
        let childrens = item.children;
        let len = childrens.length;
        for (let i = 0; i < len; i++) {
          if (cid == childrens[i].id) {
            setCIndex(i);
            break;
          }
        }
      }
    });
    setAreaProvince(areaProvince);
    thisCurrentAreaCity(current);
  };
  // 确定数组信息
  const thisCurrentAreaCity = i => {
    if (!areaTree) return;
    let areaData = objDeepCopy(areaTree[i]);
    let has = areaData.has_children;
    if (has) {
      setAreaCity(areaData.children);
    } else {
      setAreaCity([{
        id: areaData.id,
        pid: areaData.pid,
        name: areaData.name
      }]);
    }
  };
  // 验证发布信息
  const vaildPublishModelInfo = () => {
    if (!isVaildVal(model.title, 3, 30)) {
      Msg('请输入3-30字的标题');
      return false;
    }
    if (!model.category_id || !model.attribute_id) {
      Msg('请选择交易目的');
      return false;
    }
    if (!model.province_id || !model.city_id) {
      Msg('请选择您的地区');
      return false;
    }
    if (!model.user_name) {
      Msg('请输入您的姓名');
      return false;
    }
    if (!isPhone(model.user_mobile)) {
      Msg('请输入正确的联系电话');
      return false;
    }
    if (model.user_mobile !== userTel) {
      if (!model.code) {
        Msg('请输入验证码');
        return false;
      }
    }
    if (!isVaildVal(model.detail, 15, 500)) {
      Msg('请正确输入15-500字的交易详情');
      return false;
    }
    if (initModel && initModel.model.is_check == 0) {
      let dataString = JSON.stringify(model);
      if (dataString == modelStr) {
        ShowActionModal({
          title: '审核失败',
          msg: '请修改该信息后再进行提交'
        });
        return false;
      }
    }
    publishUsedInfo(model).then(res => {
      ShowActionModal({
        msg: res.errmsg,
        success: () => {
          if (res.errcode == 'ok') {
            //发布成功跳转到已发布二手交易列表
            Taro.reLaunch({
              url: '/pages/published/used/index'
            });
          }
        }
      });
    }).catch(() => {
      ShowActionModal({ msg: `网络错误，发布失败` });
    });
  };
  return {
    model,
    setModel,
    initModel,
    parentCurrent,
    setParentCurrent,
    childCurrent,
    setChildCurrent,
    classifyName,
    setClassiryName,
    cityName,
    setCityName,
    setCIndex,
    cIndex,
    setAreaCity,
    areaCity,
    setPIndex,
    setAreaProvince,
    areaProvince,
    pIndex,
    thisCurrentAreaCity,
    userTel,
    vaildPublishModelInfo,
    initUsedPublishViewInfo
  };
}