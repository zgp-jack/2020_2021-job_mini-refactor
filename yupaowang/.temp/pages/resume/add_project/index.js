import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text, Form, Textarea, Input, Picker } from '@tarojs/components';
import WordsTotal from "../../../components/wordstotal/index";
import ImageView from "../../../components/imageview/index";
import { ProjectImgMaxNum, ProjectListMaxNum } from "../../../config/index";
import UploadImgAction from "../../../utils/upload/index";
import AREAS from '../../../models/area';
import { resumesProjectAction, resumesDelProjectAction } from "../../../utils/request/index";
import { useSelector } from "@tarojs/redux-h5";
import { objDeepCopy } from "../../../utils/helper/index";
import Msg, { ShowActionModal } from "../../../utils/msg/index";
import { isChinese } from "../../../utils/v/index";
import './index.scss';
export default class AddResumeInfo extends Taro.Component {
  config = {
    navigationBarTitleText: '新增项目经验',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 获取路由参数 
    const { id = '' } = Taro.useRouter().params;
    // 将找活中项目经验相关的数据取出
    const resumeData = useSelector(item => item.resumeData);
    // 保留一份默认数据， 方便我们继续添加的时候使用
    const defaultProjectData = {
      project_name: '',
      start_time: '',
      completion_time: '',
      city_name: '',
      province_name: '',
      detail: '',
      province: '',
      city: '',
      title: '',
      imgs: [],
      project_uuid: ''
    };
    // 定义ID
    const [project_uuid, setProject_uuid] = Taro.useState('');
    // 是否显示保存继续添加 总数是否大于等于 最大数量-1
    const [showBtn, setShowBtn] = Taro.useState(resumeData.projectData.length >= ProjectListMaxNum - 1 ? false : true);
    // 城市数据
    const [hometownPicker, setHometownPicker] = Taro.useState([]);
    const [hometownChildCity, setHometownChildCity] = Taro.useState([]);
    const [hometownIndex, setHometownIndex] = Taro.useState([0, 0]);
    // 技能证书的数据
    let projectInfoData = { ...defaultProjectData };
    if (id) {
      // 新建/编辑
      _setNavigationBarTitle({
        title: '编辑项目经验'
      });
      let data = resumeData.projectData.find(item => item.id == id);
      if (data) {
        setProject_uuid(data.uuid);
        // 由于接口的图片数据是分开的，所以需要自己重组
        let imgs = [];
        for (let i = 0; i < data.image.length; i++) {
          imgs.push({ url: data.images[i], httpurl: data.image[i] });
        }
        let title = data.city_name ? data.province_name + '-' + data.city_name : data.province_name;
        projectInfoData = {
          project_name: data.project_name, start_time: data.start_time, imgs: imgs, province: data.province, city: data.city,
          completion_time: data.completion_time, city_name: data.city_name, detail: data.detail, province_name: data.province_name,
          title
        };
      }
    }
    Taro.useEffect(() => {
      detailAreasDataAction();
    }, []);
    const detailAreasDataAction = () => {
      let areas = objDeepCopy(AREAS);
      areas.splice(0, 1); // 切掉第一项 全国数据
      let parentArr = [];
      let childArr = [];
      for (let i = 0; i < areas.length; i++) {
        let item = areas[i];
        let data = {
          id: item.id,
          pid: item.pid,
          name: item.name
        };
        parentArr.push(data);
        if (item.has_children) {
          let itemArr = item.children.map(({ id, pid, name }) => ({ id, pid, name }));
          childArr.push(itemArr);
        } else {
          childArr.push([data]);
        }
      }
      // 设置初始化数据
      setHometownChildCity(childArr);
      // 有地址
      if (projectInfo) {
        let i = parentArr.findIndex(item => item.id == projectInfo.province);
        if (i > -1) {
          let pickerCity = [];
          pickerCity[0] = parentArr;
          pickerCity[1] = childArr[i];
          setHometownPicker(pickerCity);
          let key = childArr[i].findIndex(item => item.id == projectInfo.city);
          setHometownIndex([i, key > -1 ? key : 0]);
          return;
        }
      }
      // 将省份先保存起来
      let htpicker = [];
      htpicker[0] = parentArr;
      htpicker[1] = childArr[0];
      setHometownPicker(htpicker);
    };
    // 项目信息
    const [projectInfo, setProjectInfo] = Taro.useState(projectInfoData);
    // 用户删除图片
    const useDelImg = i => {
      let imgs = [...projectInfo.imgs];
      imgs.splice(i, 1);
      setProjectInfo({ ...projectInfo, imgs: imgs });
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
          setProjectInfo({ ...projectInfo, imgs: [...projectInfo.imgs, imageItem] });
        } else {
          projectInfo.imgs[i] = imageItem;
          setProjectInfo({ ...projectInfo });
        }
      });
    };
    // 用户输入表单
    const userEnterFrom = (e, type) => {
      projectInfo[type] = e.detail.value;
      setProjectInfo({ ...projectInfo });
    };
    // 确定选择当前城市
    const multiPickerChange = e => {
      let parentData = hometownPicker[0][e.detail.value[0]];
      let childData = hometownPicker[1][e.detail.value[1]];
      let title = childData.id == parentData.id ? parentData.name : `${parentData.name}-${childData.name}`;
      setProjectInfo({ ...projectInfo, province: parentData.id, city: childData.id, province_name: parentData.name, city_name: childData.name, title });
    };
    // picker 切换行
    const onColumnChange = e => {
      let column = e.detail.column; // 代表当前改变的是第几列
      let i = e.detail.value; // 代表当前展示的是改列的第几个
      if (column == 0) {
        let data = [...hometownChildCity[i]];
        let redata = JSON.parse(JSON.stringify(hometownPicker));
        redata[1] = data;
        setHometownPicker(redata);
        setHometownIndex([i, 0]);
      } else {
        let numArr = JSON.parse(JSON.stringify(hometownIndex));
        numArr[1] = i;
        setHometownIndex(numArr);
      }
    };
    // 保存
    const handleSumbit = type => {
      // type 判断是否继续添加
      // 项目名称
      if (!projectInfo.project_name || projectInfo.project_name.length < 3 || projectInfo.project_name.length > 12 || !isChinese(projectInfo.project_name)) {
        ShowActionModal({
          title: '温馨提示',
          msg: '请填写真实项目名称，3-12字，必须含有汉字'
        });
        return;
      }
      // 开工时间
      if (!projectInfo.start_time) {
        ShowActionModal({
          title: '温馨提示',
          msg: '请选择开工时间'
        });
        return;
      }
      // 完工
      if (!projectInfo.completion_time || new Date(projectInfo.start_time).getTime() > new Date(projectInfo.completion_time).getTime()) {
        ShowActionModal({
          title: '温馨提示',
          msg: '请选择完工时间（完工时间必须大于开工时间）'
        });
        return;
      }
      // 项目所在地
      if (!projectInfo.province) {
        ShowActionModal({
          title: '温馨提示',
          msg: '请选择项目所在地区'
        });
        return;
      }
      // 详情
      if (!projectInfo.detail || !isChinese(projectInfo.detail) || projectInfo.detail.length < 15 || projectInfo.detail.length > 500) {
        ShowActionModal({
          title: '温馨提示',
          msg: '请填写真实项目介绍，15-500字，必须含有汉字'
        });
        return;
      }
      let params = {
        completion_time: projectInfo.completion_time,
        start_time: projectInfo.start_time,
        project_name: projectInfo.project_name,
        detail: projectInfo.detail,
        province: projectInfo.province,
        city: projectInfo.city,
        image: projectInfo.imgs.map(item => item.url).join(','),
        resume_uuid: resumeData.resume_uuid
      };
      if (id) {
        params = { ...params, project_uuid: project_uuid };
      }
      resumesProjectAction(params).then(res => {
        if (res.errcode == 'ok') {
          if (type) {
            Msg(res.errmsg);
            setProjectInfo({ ...defaultProjectData });
            setProject_uuid('');
            // 判断是否项目经验条数已经达到了设置的最大上限
            if (res.count >= ProjectListMaxNum - 1) {
              setShowBtn(false);
            }
          } else {
            ShowActionModal({
              title: '温馨提示',
              msg: res.errmsg,
              success: () => {
                Taro.navigateBack();
              }
            });
          }
        } else {
          Msg(res.errmsg);
        }
      });
    };
    // 删除
    const handleDel = () => {
      _showModal({
        title: '温馨提示',
        content: '技能证书删除后，将无法恢复',
        success: () => {
          resumesDelProjectAction({ project_uuid: project_uuid }).then(res => {
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
    return <View className="resume-addinfo-container resume-addinfo-project">
      <View className="resume-addinfo-form">
        <View className="publish-recruit-container">
          <Form>
            <View className="resume-addinfo-body">
              <View className="publish-list-item">
                <Text className="pulish-list-title">项目名称</Text>
                <Input className="publish-list-input" type="text" placeholder="请输入项目名称" value={projectInfo.project_name} onInput={e => userEnterFrom(e, 'project_name')} />
              </View>
              <View className="publish-list-item">
                <Text className="pulish-list-title">开工时间</Text>
                <Picker mode="date" value={projectInfo.start_time} range-key="name" onChange={e => userEnterFrom(e, 'start_time')}>
                  <Input className="publish-list-input" type="text" disabled placeholder="请选择开工时间" value={projectInfo.start_time} />
                </Picker>
              </View>
              <View className="publish-list-item">
                <Text className="pulish-list-title">完工时间</Text>
                <Picker mode="date" value={projectInfo.completion_time} range-key="name" onChange={e => userEnterFrom(e, 'completion_time')}>
                  <Input className="publish-list-input" type="text" disabled placeholder="请选择完工时间" value={projectInfo.completion_time} />
                </Picker>
              </View>
              <View className="publish-list-item">
                <Text className="pulish-list-title">所在地区</Text>
                <Picker mode="multiSelector" value={hometownIndex} range-key="name" range={hometownPicker} onChange={e => multiPickerChange(e)} onColumnChange={e => onColumnChange(e)}>
                  <Input className="publish-list-input" type="text" disabled placeholder="请选择所在地区" value={projectInfo.title} />
                </Picker>
              </View>
              <View className="publish-list-textarea">
                <Text className="publish-textarea-title">项目描述</Text>
                <Textarea className="publish-textarea" value={projectInfo.detail} placeholder="主要描述项目中的工作情况" onInput={e => userEnterFrom(e, 'detail')} maxlength={500}></Textarea>
                <WordsTotal num={projectInfo.detail.length} />
              </View>
            </View>
            <View className="resume-add-imgsview">
              <ImageView images={projectInfo.imgs} max={ProjectImgMaxNum} userDelImg={i => useDelImg(i)} userUploadImg={i => userUploadImg(i)} />
            </View>
            
          </Form>
        </View>
      </View>
      <View className="resume-add-skill-footer">
        {id ? <View className="resume-add-skill-btn" onClick={handleDel}>删除</View> : showBtn ? <View className="resume-add-skill-btn" onClick={() => handleSumbit(1)}>保存 继续添加</View> : <View className="resume-add-skill-btn" onClick={() => Taro.navigateBack()}>取消</View>}
        <View className="resume-add-skill-btn" onClick={() => handleSumbit()}> 确认保存</View>
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
AddResumeInfo.config = { navigationBarTitleText: '新增项目经验', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };