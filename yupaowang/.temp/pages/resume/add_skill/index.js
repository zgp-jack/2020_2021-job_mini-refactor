import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text, Form, Input, Picker } from '@tarojs/components';
import UploadImgAction from "../../../utils/upload/index";
import { resumesCertificateAction, delCertificateAction } from "../../../utils/request/index";
import ImageView from "../../../components/imageview/index";
import { CertificateImgMaxNum, CertificateMaxNum } from "../../../config/index";
import { useSelector } from "@tarojs/redux-h5";
import './index.scss';
import Msg, { ShowActionModal } from "../../../utils/msg/index";
export default class AddResumeInfo extends Taro.Component {
  config = {
    navigationBarTitleText: '新增技能证书',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 获取路由参数 
    const { id = '' } = Taro.useRouter().params;
    // 技能证书id
    const [certificateId, setCertificateId] = Taro.useState('');
    // 将找活中技能证书相关的数据取出
    const resumeData = useSelector(item => item.resumeData);
    // 保留一份默认数据， 方便我们继续添加的时候使用
    const defaultSkillBookData = {
      title: '',
      time: '',
      imgs: []
    };
    // 技能证书的数据
    let normalSkillBookData = { ...defaultSkillBookData };
    if (id) {
      // 新建/编辑
      _setNavigationBarTitle({
        title: '编辑技能证书'
      });
      let data = resumeData.certificates.find(item => item.id == id);
      if (data) {
        setCertificateId(data.uuid);
        // 由于接口的图片数据是分开的，所以需要自己重组
        let imgs = [];
        for (let i = 0; i < data.image.length; i++) {
          imgs.push({ url: data.images[i], httpurl: data.image[i] });
        }
        normalSkillBookData = { title: data.name, time: data.certificate_time, imgs: imgs };
      }
    }
    // 技能证书信息
    const [skillBookInfo, setSkillBookInfo] = Taro.useState(normalSkillBookData);
    // 是否显示保存继续添加 总数是否大于等于 最大数量-1
    const [showBtn, setShowBtn] = Taro.useState(resumeData.certificates.length >= CertificateMaxNum - 1 ? false : true);
    // 用户输入技能证书标题
    const userEnterFrom = e => {
      let title = e.detail.value;
      setSkillBookInfo({ ...skillBookInfo, title: title });
    };
    // 用户选择 领证时间
    const onPickerChange = e => {
      let time = e.detail.value;
      setSkillBookInfo({ ...skillBookInfo, time: time });
    };
    // 用户删除图片
    const useDelImg = i => {
      let imgs = [...skillBookInfo.imgs];
      imgs.splice(i, 1);
      setSkillBookInfo({ ...skillBookInfo, imgs: imgs });
    };
    // 用户上传图片
    const userUploadImg = i => {
      UploadImgAction().then(res => {
        let imageItem = {
          url: res.url,
          httpurl: res.httpurl
        };
        if (i === -1) {
          // -1 代表上传 其他代表当前图片下标
          setSkillBookInfo({ ...skillBookInfo, imgs: [...skillBookInfo.imgs, imageItem] });
        } else {
          skillBookInfo.imgs[i] = imageItem;
          setSkillBookInfo({ ...skillBookInfo });
        }
      });
    };
    // 用户提交技能证书 type 区分是继续添加还是直接保存
    const userSubmitSkillBook = type => {
      if (!skillBookInfo.title) {
        Msg('请输入技能证书名称');
        return;
      }
      if (!skillBookInfo.time) {
        Msg('请选择领证时间');
        return;
      }
      if (!skillBookInfo.imgs.length) {
        Msg('请上传技能证书图片');
        return;
      }
      resumesCertificateAction({
        resume_uuid: resumeData.resume_uuid,
        certificate_uuid: certificateId,
        image: skillBookInfo.imgs.map(item => item.url).join(','),
        name: skillBookInfo.title,
        certificate_time: skillBookInfo.time
      }).then(res => {
        if (res.errcode == 'ok') {
          if (type === 1) {
            Msg(res.errmsg);
            setSkillBookInfo({ ...defaultSkillBookData });
            setCertificateId('');
          } else {
            ShowActionModal({
              msg: res.errmsg,
              success: () => {
                Taro.navigateBack();
              }
            });
          }
          if (res.count >= CertificateMaxNum - 1) {
            setShowBtn(false);
          }
        } else {
          Msg(res.errmsg);
        }
      });
    };
    // 用户点击取消按钮
    const userBack = () => {
      Taro.navigateBack();
    };
    // 用户删除该条技能证书
    const userDelThisSkill = () => {
      _showModal({
        title: '温馨提示',
        content: '技能证书删除后，将无法恢复',
        success: () => {
          delCertificateAction({ certificate_uuid: certificateId }).then(res => {
            if (res.errcode == 'ok') {
              ShowActionModal({
                msg: res.errmsg,
                success: () => {
                  Taro.navigateBack();
                }
              });
            } else {
              Msg(res.errmsg);
            }
          });
        }
      });
    };
    return <View className="resume-addinfo-container">
      <View className="resume-addinfo-form">
        <View className="publish-recruit-container">
          <Form>
            <View className="resume-addinfo-body">
              <View className="publish-list-item">
                <Text className="pulish-list-title">职业技能</Text>
                <Input className="publish-list-input" type="text" placeholder="请填写职业技能名称" value={skillBookInfo.title} onInput={e => userEnterFrom(e)} />
              </View>
              
              <View className="publish-list-item">
                <Text className="pulish-list-title">领证时间</Text>
                <Picker mode="date" value={skillBookInfo.time} range-key="name" onChange={e => onPickerChange(e)}>
                  <Input className="publish-list-input" type="text" disabled placeholder="请选择领证时间" value={skillBookInfo.time} />
                </Picker>
              </View>
              
            </View>
            <View className="resume-add-imgsview">
              <ImageView images={skillBookInfo.imgs} max={CertificateImgMaxNum} userDelImg={i => useDelImg(i)} userUploadImg={i => userUploadImg(i)} />
            </View>
          </Form>
        </View>
      </View>
      <View className="resume-add-skill-footer">
        
        {id ? <View className="resume-add-skill-btn" onClick={() => userDelThisSkill()}>删除</View> : showBtn ? <View className="resume-add-skill-btn" onClick={() => userSubmitSkillBook(1)}>保存 继续添加</View> : <View className="resume-add-skill-btn" onClick={() => userBack()}>取消</View>}
        <View className="resume-add-skill-btn" onClick={() => userSubmitSkillBook(2)}> 确认保存</View>
      </View>
    </View>;
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
AddResumeInfo.config = { navigationBarTitleText: '新增技能证书', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };