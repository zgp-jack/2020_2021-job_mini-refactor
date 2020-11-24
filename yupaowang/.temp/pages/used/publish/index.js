import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Form, Text, Input, Textarea, ScrollView, Picker, Block } from '@tarojs/components';
import { AtDrawer } from 'taro-ui';
import WordsTotal from "../../../components/wordstotal/index";
import useUsedInfo from '../../../hooks/publish/used';
import classnames from 'classnames';
import useCode from "../../../hooks/code/index";
import Auth from "../../../components/auth/index";
import './index.scss';
export default class UsedPublish extends Taro.Component {
  config = {
    navigationBarTitleText: '发布二手交易'
  };

  render() {
    const router = Taro.useRouter();
    const { id = '' } = router.params;
    const { model, setModel, initModel, parentCurrent, setParentCurrent, childCurrent, setChildCurrent, classifyName, setClassiryName, cityName, setCityName, setCIndex, setPIndex, areaProvince, areaCity, cIndex, pIndex, thisCurrentAreaCity, userTel, vaildPublishModelInfo, initUsedPublishViewInfo } = useUsedInfo(id);
    const [showDrawer, setShowDrawer] = Taro.useState(false);
    // 使用自定义验证码hook
    const { text, userGetCode } = useCode();
    // 详情字数统计
    const [num, setNum] = Taro.useState(0);
    // 判断是否是首次进入
    const [first, setFirst] = Taro.useState(true);
    // 加载初始化数据
    Taro.useDidShow(() => {
      if (first) {
        setFirst(false);
        return;
      }
      initUsedPublishViewInfo();
    });
    // 用户填写信息
    const userEnterFrom = (e, key) => {
      let reModel = JSON.parse(JSON.stringify(model));
      let val = e.detail.value;
      reModel[key] = val;
      setModel(reModel);
      if (key == 'detail') setNum(val.length);
    };
    // 用户点击父级
    const useClickClassifyParentId = parentCurrent => {
      setParentCurrent(parentCurrent);
    };
    // 用户点击子级
    const useClickClassifyChildId = childCurrent => {
      setChildCurrent(childCurrent);
      if (!initModel) return;
      let name = initModel.classifyTree[parentCurrent].name + '-' + initModel.classifyTree[parentCurrent].attributes[childCurrent].name;
      setClassiryName(name);
      setShowDrawer(false);
      setModel({ ...model, attribute_id: initModel.classifyTree[parentCurrent].attributes[childCurrent].id, category_id: initModel.classifyTree[parentCurrent].id });
    };
    // 用户点击交易目的
    const userClickClassify = bool => {
      setShowDrawer(bool);
    };
    // picker改变
    const onPickerChange = e => {
      if (!initModel) return;
      let pi = e.detail.value[0];
      let ci = e.detail.value[1];
      setCityName(initModel.areaTree[pi].name + '-' + initModel.areaTree[pi].children[ci].name);
      setModel({ ...model, province_id: initModel.areaTree[pi].id, city_id: initModel.areaTree[pi].children[ci].id });
    };
    const onColumnChange = e => {
      let column = e.detail.column;
      let current = e.detail.value;
      if (column === 0) {
        setPIndex(current);
        thisCurrentAreaCity(current);
      } else {
        setCIndex(current);
      }
    };
    return <Nerv.Fragment>
    <Auth />
    <View>
      
      <AtDrawer show={showDrawer} onClose={() => userClickClassify(false)}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {initModel && initModel.classifyTree.map((item, index) => <View className={classnames({
                'drawer-list-item overwords': true,
                'drawer-list-item-active': index === parentCurrent
              })} key={item.id} onClick={() => useClickClassifyParentId(index)}>{item.name}</View>)}
          </ScrollView>
          {initModel && <ScrollView className="drawer-full-lists drawer-half-lists" scrollY>
            {initModel.classifyTree[parentCurrent].attributes.map((item, k) => <View key={item.id} className={classnames({
                'drawer-list-item overwords': true,
                'drawer-list-item-active': k == childCurrent && item.id == model.attribute_id
              })} onClick={() => useClickClassifyChildId(k)}>{item.name}</View>)}
            </ScrollView>}
        </View>
      </AtDrawer>
      <View className="publish-header">
        <View className="publish-title">发布二手交易</View>
        <View className="publish-header-title">请完善以下信息</View>
      </View>
      <View className="publish-recruit-container publish-used-container">
        <Form>
          <View className="publish-recruit-card">
            <View className="publish-list-item">
              <Text className="pulish-list-title">标题</Text>
              <Input className="publish-list-input" type="text" placeholder="请输入标题（3-30个字)" value={model.title} onInput={e => userEnterFrom(e, 'title')} />
            </View>
            <View className="publish-list-item" onClick={() => userClickClassify(true)}>
              <Text className="pulish-list-title">交易目的</Text>
              {classifyName ? <View className="publish-list-input publish-list-text">
                  <Text className="publish-input-list">{classifyName}</Text>
                </View> : <Input className="publish-list-input" disabled type="text" placeholder="请选择交易目的" />}
            </View>
            <View className="publish-list-item">
              <Text className="pulish-list-title">详细地址</Text>
              <Picker mode="multiSelector" range={[areaProvince, areaCity]} value={[pIndex, cIndex]} range-key="name" onChange={e => onPickerChange(e)} onColumnChange={e => onColumnChange(e)}>
                <Input className="publish-list-input" type="text" disabled placeholder="请输入详细地址" value={cityName} />
              </Picker>
            </View>
            <View className="publish-list-item">
              <Text className="pulish-list-title">联系人</Text>
              <Input className="publish-list-input" type="text" placeholder="请输入联系人" value={model.user_name} onInput={e => userEnterFrom(e, 'user_name')} />
            </View>
            <View className="publish-list-item">
              <Text className="pulish-list-title">联系电话</Text>
              <Input className="publish-list-input" type="number" placeholder="请输入联系电话" value={model.user_mobile} onInput={e => userEnterFrom(e, 'user_mobile')} />
            </View>
            {(userTel !== model.user_mobile || model.user_mobile == '') && <View className="publish-list-item publish-list-item-code">
              <Text className="pulish-list-title">验证码</Text>
              <Input className="publish-list-input" type="text" placeholder="请输入验证码" value={model.code} onInput={e => userEnterFrom(e, 'code')} />
              <View className="publish-code-btn" onClick={() => userGetCode(model.user_mobile)}>{text}</View>
            </View>}
            <View className="publish-list-textarea">
              <Text className="publish-textarea-title">交易详情</Text>
              {!showDrawer && <Textarea className="publish-textarea" value={model.detail} placeholder={initModel && initModel.placeholder} onInput={e => userEnterFrom(e, 'detail')} maxlength={500}></Textarea>}
              <WordsTotal num={num} />
            </View>
          </View>
          <View className="publish-recruit-btn" onClick={() => vaildPublishModelInfo()}>确认发布</View>
        </Form>
      </View>
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
UsedPublish.config = { navigationBarTitleText: '发布二手交易' };