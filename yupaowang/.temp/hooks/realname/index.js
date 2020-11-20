import Taro, { showModal as _showModal } from "@tarojs/taro-h5";
import { getUserAuthInfo, postUserAuthInfo } from "../../utils/request/index";
import { useSelector } from "@tarojs/redux-h5";
import Msg, { ShowActionModal } from "../../utils/msg/index";
import { CameraAndAlbum } from "../../utils/upload/index";
import UploadImgAction from "../../utils/upload/index";
import { getIdcardAuthInfo } from "../../utils/api/index";
import { ALIYUNCDNMINIIMG } from "../../config/index";
import { getLongAreaAdname } from '../../models/area';
import { SubscribeToNews } from "../../utils/subscribeToNews/index";
const cardInfoFailImg = ALIYUNCDNMINIIMG + 'lpy/auth/upload-fail-tips.png';
// 声明性别选项与下标
const sexArray = [{ id: '1', name: '男' }, { id: '2', name: '女' }];
export default function useRealname() {
  // 性别下标
  const [sexCurrent, setSexCurrent] = Taro.useState(0);
  // 性别名称
  const [sexName, setSexName] = Taro.useState('');
  // 民族下标
  const [nationCurrent, setNationCurrent] = Taro.useState(0);
  // 初始化返回模型
  const [initModel, setInitModel] = Taro.useState();
  // 保存数据提交模型
  const [model, setModel] = Taro.useState();
  // 获取用户是否登录
  const login = useSelector(state => state.User['login']);
  // 是否显示表单
  const [showForm, setShowForm] = Taro.useState(false);
  // 展示电话号码选项
  const [checkDegree, setCheckDegree] = Taro.useState(false);
  // 声明父组件传值地区名字
  const [RealnameArea, setRealnameArea] = Taro.useState('');
  Taro.useEffect(() => {
    if (!login) return;
    getUserAuthInfo().then(data => {
      if (data.errcode == 'ok') {
        if (data.authData.member && data.authData.member.is_check === '0') {
          _showModal({
            title: '审核失败',
            content: data.authData.memberExt.idcard_check_failure_reason,
            showCancel: false
          });
        }
        let initData = data.authData;
        setInitModel(initData);
        let nationId = initData.memberExt.nation_id || '';
        let nationName = '';
        let nationCurrent = 0;
        if (nationId) {
          nationCurrent = initData.nation.findIndex(item => item.mz_id == nationId);
          nationName = initData.nation[nationCurrent].mz_name;
        }
        setNationCurrent(nationCurrent);
        let modelData = {
          username: initData.member ? initData.member.username : '',
          age: initData.memberExt.age || '',
          nation_id: nationId || initData.nation[nationCurrent].mz_id,
          nationality: nationName || initData.nation[nationCurrent].mz_name,
          idCard: initData.memberExt.id_card || '',
          idCardImg: initData.memberExt.id_card_img || '',
          handImg: initData.memberExt.hand_img || '',
          tel: initData.member ? initData.member.tel : '',
          code: '',
          address: initData.memberExt.address || '',
          birthday: initData.memberExt.birthday || '',
          gender: initData.memberExt.sex || ''
        };
        // 设置地图显示的名称
        let area = getLongAreaAdname(modelData.address);
        setRealnameArea(area);
        // 是否展示电话号
        if (initData.member && initData.member.check_degree == '2') setCheckDegree(true);
        // 性别下标
        if (initData.memberExt.sex !== '') {
          for (let i = 0; i < sexArray.length; i++) {
            if (sexArray[i].id == initData.memberExt.sex) {
              setSexName(sexArray[i].name);
              setSexCurrent(i);
              break;
            }
          }
        }
        setModel({ ...modelData });
        if (initData.member && initData.member.check_degree == '2') setShowForm(true);
      } else {
        ShowActionModal({
          msg: data.errmsg,
          success: () => {
            Taro.navigateBack();
          }
        });
      }
    });
  }, [login]);
  // 验证数据提交
  const vaildUserAuthInfo = () => {
    if (!model || !initModel) return false;
    if (!model.idCardImg) {
      Msg('请上传身份证照片');
      return false;
    }
    if (!model.handImg) {
      Msg('请上传身份手持照');
      return false;
    }
    if (!model.username) {
      Msg('请输入您的名字');
      return false;
    }
    if (!model.gender) {
      Msg('请选择您的性别');
      return false;
    }
    if (!model.birthday) {
      Msg('请选择您的出生日期');
      return false;
    }
    if (!model.nation_id) {
      Msg('请选择您的民族');
      return false;
    }
    if (!model.idCard) {
      Msg('请输入您的身份证号码');
      return false;
    }
    if (!model.address) {
      Msg('请选择您的地址');
      return false;
    }
    if (!model.tel) {
      Msg('请输入您的手机号');
      return false;
    }
    if (!initModel.member) return false;
    if (!initModel.member.tel) {
      if (!model.code) {
        Msg('请输入验证码');
        return false;
      }
    }
    return true;
  };
  // 用户提交实名表单
  const userPostAuthInfo = () => {
    // 验证用户是否填写完了表单
    if (!vaildUserAuthInfo()) return;
    const item = JSON.parse(JSON.stringify(model));
    const modelItem = JSON.parse(JSON.stringify(initModel));
    let params = {
      username: item.username,
      age: item.age,
      nation_id: modelItem.nation[nationCurrent].mz_id,
      nationality: modelItem.nation[nationCurrent].mz_name,
      idCard: item.idCard,
      idCardImg: item.idCardImg,
      handImg: item.handImg,
      tel: item.tel,
      code: item.code,
      address: item.address,
      birthday: modelItem.memberExt.birthday,
      gender: sexCurrent + 1
    };
    postUserAuthInfo(params).then(res => {
      SubscribeToNews('auth', () => {
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack();
          }
        });
      });
    });
  };
  const userUploadIdcard = (type = 2) => {
    const modelObj = JSON.parse(JSON.stringify(model));
    //type = 1 正面 type = 2 手持  
    let url = type == 1 ? getIdcardAuthInfo : '';
    if (!initModel) return;
    if (type === 1) {
      CameraAndAlbum(url).then(data => {
        if (data.errcode == 'ok') {
          let memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
          if (data.card_info) {
            setShowForm(true);
            memberExt.id_card_img = data.url;
            memberExt.id_card_img_path = data.httpurl;
            setInitModel({ ...initModel, memberExt: { ...memberExt } });
            let cardData = data.card_info;
            if (data.card_info.success) {
              memberExt.nation_id = cardData.nation_id || '';
              memberExt.nationality = cardData.nationality || '';
              memberExt.birthday = cardData.birth || '';
              memberExt.address = cardData.address || '';
              memberExt.sex = cardData.sex || '';
              memberExt.id_card = cardData.num || '', memberExt.user_name = cardData.name || '';
              //处理数据
              //生日
              let birthall = '';
              if (memberExt.birthday) {
                let birth = memberExt.birthday.substring(0, 4);
                let birthtwo = memberExt.birthday.substring(4, 6);
                let birththree = memberExt.birthday.substring(6, 8);
                birthall = birth + "-" + birthtwo + "-" + birththree;
              }
              // 性别
              let sexIndex = 0;
              let sexId = ''; // 默认空 没有遍历到即假
              sexArray.map((v, i) => {
                if (memberExt.sex === v.name) {
                  sexIndex = i;
                  sexId = v.id;
                }
              });
              setSexCurrent(sexIndex);
              setSexName(memberExt.sex);
              const dataItem = {
                username: memberExt.user_name ? memberExt.user_name : '',
                age: memberExt.age || '',
                nation_id: memberExt.nation_id,
                nationality: memberExt.nationality,
                idCard: memberExt.id_card || '',
                idCardImg: memberExt.id_card_img || '',
                handImg: memberExt.hand_img || '',
                tel: modelObj.tel || '',
                code: '',
                address: memberExt.address,
                birthday: birthall || '',
                gender: sexId
              };
              memberExt.birthday = birthall;
              setInitModel({ ...initModel, memberExt: { ...memberExt } });
              setModel({ ...dataItem });
            } else {
              Msg(data.card_info.tips_message);
              memberExt.id_card_img_path = cardInfoFailImg;
              memberExt.id_card_img = cardInfoFailImg;
              if (model) setModel({ ...model, idCardImg: data.url });
              setInitModel({ ...initModel, memberExt: { ...memberExt } });
            }
          }
        } else {
          Msg(data.errmsg);
        }
      });
    } else {
      let memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
      // memberExt.hand_img = 
      UploadImgAction().then(res => {
        let imageItem = {
          url: res.url,
          httpurl: res.httpurl
        };
        memberExt.hand_img = imageItem.url;
        memberExt.hand_img_path = imageItem.httpurl;
        const item = JSON.parse(JSON.stringify(model));
        item.handImg = imageItem.url;
        setModel(item);
      });
      setInitModel({ ...initModel, memberExt: memberExt });
    }
  };
  return {
    initModel,
    model,
    setModel,
    login,
    userPostAuthInfo,
    userUploadIdcard,
    sexArray,
    setSexCurrent,
    sexCurrent,
    showForm,
    sexName,
    setSexName,
    nationCurrent,
    setNationCurrent,
    setInitModel,
    checkDegree,
    RealnameArea,
    setRealnameArea
  };
}