import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Input, Image, Button, Picker, Block } from '@tarojs/components';
import { ALIYUNCDN, IMGCDNURL } from "../../config/index";
import useRealname from "../../hooks/realname/index";
import useCode from "../../hooks/code/index";
import { isPhone } from "../../utils/v/index";
import { useDispatch } from "@tarojs/redux-h5";
import { setData } from '../../actions/realname';
import Msg from "../../utils/msg/index";
import Auth from "../../components/auth/index";
import './index.scss';
export default class RealName extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-实名认证'
  };

  render() {
    // 使用 实名hook 与 获取短信验证码hook
    const { checkDegree, userUploadIdcard, sexArray, sexCurrent, setSexCurrent, setSexName, sexName, nationCurrent, initModel, setNationCurrent, setInitModel, model, setModel, userPostAuthInfo, RealnameArea, setRealnameArea } = useRealname();
    const { text, userGetCode } = useCode();
    const value = {
      RealnameArea: RealnameArea,
      setRealnameArea: city => setRealnameArea(city)
    };
    const dispatch = useDispatch();
    dispatch(setData(value));
    // 初始化生日选择时间
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const startDate = year - 60 + '-' + month + '-' + day;
    const endDate = year - 18 + '-' + month + '-' + day;
    // 用户滑动性别picker
    const userChangeSex = e => {
      let current = parseInt(e.detail.value);
      let id = sexArray[current].id;
      setSexCurrent(current);
      setSexName(sexArray[current].name);
      if (model) setModel({ ...model, gender: id });
    };
    Taro.useDidShow(() => {
      if (RealnameArea) {
        const modelItem = JSON.parse(JSON.stringify(model));
        modelItem.address = RealnameArea;
        setModel(modelItem);
      }
    });
    // 用户填写信息
    const userEnterFormInfo = (title, e) => {
      let modelInfo = JSON.parse(JSON.stringify(model));
      modelInfo[title] = e.detail.value;
      setModel(modelInfo);
    };
    // 用户上传身份证照片
    const userUploadIdcardImg = type => {
      userUploadIdcard(type);
    };
    // 用户选择生日
    const userChangeBirthday = e => {
      let { value } = e.detail;
      if (!initModel) return;
      let memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
      memberExt.birthday = value;
      setInitModel({ ...initModel, memberExt: memberExt });
      if (model) setModel({ ...model, birthday: value });
    };
    // 用户选择民族
    const userChangeNation = e => {
      let current = parseInt(e.detail.value);
      setNationCurrent(current);
      if (!initModel) return;
      let name = initModel.nation[current].mz_name;
      let id = initModel.nation[current].mz_id;
      if (model) setModel({ ...model, nation_id: id, nationality: name });
    };
    // 用户点击发送短信
    const userSendCode = () => {
      let tel = initModel ? initModel.member ? initModel.member.tel : '' : '';
      let flag = isPhone(tel);
      if (flag) userGetCode(tel);else Msg('请先输入正确的手机号');
    };
    // 用户选择地区
    const userChooseArea = () => {
      if (!RealnameArea) return;
      Taro.navigateTo({
        url: `/pages/map/realname/index`
      });
    };
    return <Nerv.Fragment>
    <Auth />
    <View className="realname-container">
      <View className="realname-cardimgbox">
        <View className="realname-card-title">请拍摄并上传你的身份证照片</View>
        <View className="realname-card-imgs clearfix">
          <View className="realname-card-item" onClick={() => userUploadIdcardImg(1)}>
            <View className="realname-card-img">
              <Image className="realname-card-upimg" src={initModel && initModel.memberExt.id_card_img_path ? ALIYUNCDN + (initModel && initModel.memberExt.id_card_img) : IMGCDNURL + 'lpy/auth/idcard-l.png'} />
            </View>
            <View className="realname-card-title">身份证正面照</View>
          </View>
          <View className="realname-card-item" onClick={() => userUploadIdcardImg(2)}>
            <View className="realname-card-img">
                <Image className="realname-card-upimg" src={model && model.handImg ? ALIYUNCDN + (model && model.handImg) : IMGCDNURL + 'lpy/auth/idcard-z.png'} />
            </View>
            <View className="realname-card-title">手持身份证照</View>
          </View>
        </View>
      </View>
      <View className="realname-card-remark">
        <View className="realname-remark-title">拍摄身份证要求</View>
        <View className="realname-remark-tips">大陆公民持有的本人有效二代身份证;</View>
        <View className="realname-remark-tips">拍摄时确保身份证<Text className="realname-remark-text">边框完整，字体清晰，亮度均匀;</Text></View>
        <View className="realname-remark-imglist">
          <View className="realname-remark-imgitem">
            <Image className="realname-remark-item-img" src={IMGCDNURL + 'lpy/auth/idcard-yes.png'} />
            <Text className="realname-remark-item-text">标准</Text>
          </View>
          <View className="realname-remark-imgitem">
            <Image className="realname-remark-item-img" src={IMGCDNURL + 'lpy/auth/idcard-bkqs.png'} />
            <Text className="realname-remark-item-text">边框缺失</Text>
          </View>
          <View className="realname-remark-imgitem">
            <Image className="realname-remark-item-img" src={IMGCDNURL + 'lpy/auth/idcard-qs.png'} />
            <Text className="realname-remark-item-text">照片模糊</Text>
          </View>
          <View className="realname-remark-imgitem">
            <Image className="realname-remark-item-img" src={IMGCDNURL + 'lpy/auth/idcard-sg.png'} />
            <Text className="realname-remark-item-text">闪光强烈</Text>
          </View>
        </View>
      </View>
      <View className="realname-card-form">
        <View className="publish-list-item">
          <Text className="pulish-list-title">姓名</Text>
          <Input className="publish-list-input" type="text" placeholder="请输入姓名" onInput={e => userEnterFormInfo('username', e)} value={model && model.username} />
        </View>
        <View className="publish-list-item">
          <Text className="pulish-list-title">性别</Text>
          <Picker onChange={e => userChangeSex(e)} value={sexCurrent} rangeKey="name" mode="selector" range={sexArray}>
            <Input className="publish-list-input" type="text" disabled placeholder="请选择性别" value={sexName} />
          </Picker>
        </View>
        <View className="publish-list-item">
          <Text className="pulish-list-title">出生日期</Text>
          <Picker mode="date" value={initModel ? initModel.memberExt.birthday : ''} onChange={e => userChangeBirthday(e)} start={startDate} end={endDate}>
            <Input className="publish-list-input" type="text" disabled placeholder="请选择出生日期" value={model && model.birthday} />
          </Picker>
        </View>
        <View className="publish-list-item">
          <Text className="pulish-list-title">民族</Text>
          <Picker mode="selector" value={nationCurrent} rangeKey="mz_name" range={initModel && initModel.nation || []} onChange={e => userChangeNation(e)}>
            <Input className="publish-list-input" type="text" disabled placeholder="请选择民族" value={initModel && initModel.nation[nationCurrent].mz_name} />
          </Picker>
        </View>
        <View className="publish-list-item">
          <Text className="pulish-list-title">身份证号</Text>
          <Input className="publish-list-input" type="text" placeholder="请输入身份证号码" maxLength={18} onInput={e => userEnterFormInfo('idCard', e)} value={model && model.idCard} />
        </View>
        <View className="publish-list-item">
          <Text className="pulish-list-title">详细地址</Text>
          <Input className="publish-list-input" type="text" disabled placeholder="请选择详细地址" onClick={() => userChooseArea()} value={model && model.address} />
        </View>
      </View>

      {model && !model.tel && checkDegree && <View className="realname-card-form">
        <View className="publish-list-item">
          <Text className="pulish-list-title">电话号码</Text>
          <Input className="publish-list-input" type="text" placeholder="请输入电话号码" onInput={e => userEnterFormInfo('tel', e)} value={model && model.tel} />
        </View>
        <View className="publish-list-item publish-list-item-code">
          <Text className="pulish-list-title">验证码</Text>
          <Input className="publish-list-input" type="text" placeholder="请输入验证码" onInput={e => userEnterFormInfo('code', e)} value={model && model.code} />
          <View className="publish-code-btn" onClick={() => userSendCode()}>{text}</View>
        </View>
      </View>}
      <Button className="userauth-btn" onClick={() => userPostAuthInfo()}>身份认证</Button>
      </View>
    </Nerv.Fragment>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
RealName.config = { navigationBarTitleText: '鱼泡网-实名认证' };