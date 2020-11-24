import Nerv from "nervjs";
import Taro, { showModal as _showModal, previewImage as _previewImage } from "@tarojs/taro-h5";
import { View, Text, Image, Button } from '@tarojs/components';
import { resumeListAction } from '../../../utils/request/index';
import { getUserShareMessage } from "../../../utils/helper/index";
import { IMGCDNURL, ISCANSHARE } from "../../../config/index";
import './index.scss';
export default class Preview extends Taro.Component {
  config = {
    navigationBarTitleText: '找活名片'
  };

  render() {
    // uuid 
    const [uuid, setUuid] = Taro.useState('');
    // 左上角图片
    const [checkpan, setCheckpan] = Taro.useState(false);
    // 图片审核中
    const [checkone, setCheckone] = Taro.useState(false);
    // 头像
    const [headerimg, setHeaderimg] = Taro.useState('');
    // 性别
    const [sex, setSex] = Taro.useState('未填写');
    // 年龄
    const [age, setAge] = Taro.useState('');
    // 电话
    const [telephone, settelephone] = Taro.useState('未填写');
    // 项目
    const [project, setProject] = Taro.useState([]);
    // 技能
    const [skillbooksone, setSkillbooksone] = Taro.useState([]);
    // 总数据
    const [data, setData] = Taro.useState({
      info: {
        username: '未填写',
        authentication: '',
        certificate_show: 0,
        nation: '',
        address: '',
        introduce: '',
        miniInfoOccupations: []
      },
      introduces: {
        hometown: '',
        experience_str: '',
        prof_degree_str: '',
        type_str: '',
        number_people: '',
        tags: []
      },
      project: [],
      certificates: [],
      content: {
        show_tips: 0
      }
    });
    Taro.useEffect(() => {
      resumeListAction().then(res => {
        if (res.errcode === 200) {
          const date = new Date();
          const dateo = date.getTime();
          const dateone = new Date(dateo);
          if (res.data.info.birthday) {
            if (dateone.getFullYear() - (+res.data.info.birthday.split("-")[0] - 0) == 0) {
              setAge('');
            } else {
              setAge(dateone.getFullYear() - (+res.data.info.birthday.split("-")[0] - 0) + "岁");
            }
          }
          // Taro.setStorageSync("introinfo", res.data.info)
          setSex(res.data.info.gender == '1' ? '男' : '女');
          setCheckpan(res.data.info.check == '0' ? true : false);
          setCheckone(res.data.info.check == '0' ? true : false);
          setHeaderimg(res.data.info.headerimg);
          setUuid(res.data.info.uuid);
          setData({ info: res.data.info, introduces: res.data.introduces, project: res.data.project, certificates: res.data.certificates, content: res.data.content });
          settelephone(res.data.info.tel);
          if (res.data.project.length === 0) {
            setProject([]);
            setSkillbooksone([]);
          } else {
            setSkillbooksone([res.data.certificates[0]]);
            if (res.data.project) {
              if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000) {
                const item = res.data.project[0];
                item.completion_timeTitle = 'zhijing';
                setProject([item]);
              } else {
                const item = res.data.project[0];
                item.completion_timeTitle = 'zhijin';
                setProject([item]);
              }
            }
          }
        } else {
          _showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false
          });
          return;
        }
      });
    }, []);
    // 设置分享
    Taro.useShareAppMessage(() => {
      return {
        ...getUserShareMessage(),
        path: `/pages/resume/detail?uuid=${uuid}`
      };
    });
    // 点击图片
    const handleImg = e => {
      _previewImage({
        current: e,
        urls: [e]
      });
    };
    return <View className="preview">
      
      <View className="cardcolore">
        <View className="header">
          注:分享名片 让您的名片排名更靠前
        </View>
      </View>
      
      <View className="findingnamecardthree">
        <View className="findingnamecardthreemobile">
          <View>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text>基础信息</Text>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      
      <View className="cardcolore">
        {checkpan && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`} />}
        <View className="cardtwo">
          <View className="cardonetwof">
            {checkone && <Image className="checkone" src={`${IMGCDNURL}lpy/audit.png`} />}
            <View className="cardtwosonone">
              <View className="cardtwosononeimg">
                <View className="oimg">
                  <Image className="oim-image" src={headerimg} />
                </View>
                <View className="oimgone">
                  <Text className="otext">{data.info.username}</Text>
                  {data.info.authentication === '2' && <Image className="iconImage" src={`${IMGCDNURL}new-list-realname-icon.png`} />}
                  {data.info.certificate_show === 1 && <Image className="iconImage" src={`${IMGCDNURL}new-list-jnzs-icon.png?t=1`} />}
                  <View className="otextone">
                    <Text>{sex}</Text>
                    {age && <Text className={sex ? 'ochange' : ''}>{age}</Text>}
                    <Text className={age ? 'ochange' : ''}>{data.info.nation}</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <View className="lineone">
              <View className="linezo">
                <View className="cardotext">
                  <Text className="oworkotext">手机</Text>
                  <Text className="workotextone">{telephone}</Text>
                </View>
                {data.introduces.hometown != '0' && <View className="cardotext">
                    <Text className="oworkotext">我的家乡</Text>
                  <Text className="workotextone">{data.introduces.hometown}</Text>
                  </View>}
                <View className="cworkotype ({{occupations.length == 0?'skillcss':''}})">
                  <View className="ocworkotype">工种</View>
                  <View className="ocworkotypeoo">
                    {data.info.miniInfoOccupations.length && <View className="ocworkotyp">
                          {data.info.miniInfoOccupations.map((v, i) => <View className="ocworkotyptu" key={i + i}>{v}</View>)}
                      </View>}
                    {data.info.miniInfoOccupations.length === 0 && <Text className="workotextone">暂未填写</Text>}
                  </View>
                </View>
                {data.introduces.experience_str !== '' && <View className="cardotext">
                      <Text className="oworkotext">工龄</Text>
                      <Text className="workotextone">{data.introduces.experience_str}</Text>
                    </View>}
                {data.introduces.prof_degree_str !== '' && <View className="cardotext">
                  <Text className="oworkotext">熟练度</Text>
                  <Text className="workotextone">{data.introduces.prof_degree_str}</Text>
                  </View>}
                {data.introduces.type_str !== '' && <View className="cardotext">
                  <Text className="oworkotext">人员构成</Text>
                  <Text className="workotextone">{data.introduces.type_str}</Text>
                  </View>}
                {data.introduces.number_people !== '1' && data.introduces.number_people !== '0' && <View className="cardotext">
                  <Text className="oworkotext">队伍人数</Text>
                  <Text className="workotextone">{data.introduces.number_people}</Text>
                  </View>}
                {data.info.address !== '' && <View className="cardotext">
                  <Text className="oworkotext">所在地区</Text>
                  <Text className="workotextone">{data.info.address}</Text>
                  </View>}
                {data.introduces.tags.length && <View className="cardotext">
                  <Text className="oworkotext">标签</Text>
                  <View className="alllabletu">
                    {data.introduces.tags.map((v, i) => <View key={i + i} className="labletu">{v.label_name}</View>)}
                  </View>
                  </View>}
              </View>
            </View>
        </View>
        </View>
      </View>
      
      {data.info.introduce && <View>
        <View className="findingnamecardthree">
          <View className="findingnamecardthreemobile">
          <View>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text>自我介绍</Text>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
          </View>
        </View>
        
        <View className="cardcolore">
          <View className="introcardtwo">
            <View className="introcontent">
              {data.info.introduce}
            </View>
          </View>
        </View>
      </View>}
      
      {data.project.length && <View>
      <View className="findingnamecardthree">
        <View className="findingnamecardthreemobile">
          <View>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text>项目经验</Text>
            <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      
        <View className="cardcolore">
          <View className="cardsix">
            {project.map((item, i) => <View className="cardsixzong" key={i + i}>
                {item.check == 1 && <Image className="checkfour" src={`${IMGCDNURL}lpy/audit.png`} />}
                {item.check == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`} />}
                <View>
                  <Image className="cardsixone" src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />
                </View>
                <View className="cardsixall">
                  <View className="cardsixtwo">
                    <Text>{item.project_name}</Text>
                  </View>
                  <View className="cardsixthreeborder">
                    <View className="cardsixthree">
                      <Text className="cardsixthree-text">{item.start_time}-{item.completion_timeTitle == "zhijin" ? "至今" : item.completion_time}</Text>
                      {item.city_name && <Text className="cardsixthree-text">{item.province_name}-{item.city_name}</Text>}
                      <Text className="cardsixthree-text">{item.province_name}</Text>
                    </View>
                    <View className="cardsixfour">
                      <Text className="cardsixthree-text">{item.detail}</Text>
                    </View>
                    <View className="cardsixfive">
                      {item.image.map((v, i) => <Image className="cardsixfive-image" src={v} key={i + i} onClick={() => handleImg(v)} />)}
                    </View>
                  </View>
                </View>
              </View>)}
            <View className="cardsixsixall">
              <View className="cardsixsix">
                <View className="more" onClick={() => Taro.navigateTo({ url: `/pages/resume/projectList/index?preview=1` })}>
                  更多项目经验
                <View className="more-view">
                    <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>}
      
      {data.certificates.length && <View>
          <View className="findingnamecardthree">
            <View className="findingnamecardthreemobile">
              <View>
                <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
                <Text>职业技能</Text>
                <Image className="findingnamecardthree-image" src={`${IMGCDNURL}newresume-catimg.png`} />
              </View>
            </View>
          </View>
          <View className="cardcolore">
          <View className="cardsix">
            {skillbooksone.map(item => <View className="cardsixzong" key={item.id}>
                
                {item.check == 1 && data.content.show_tips == 1 && <Image className="checkthree" src={`${IMGCDNURL}lpy/audit.png`} />}
                
                
                
                
                {item.check == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`} />}
                
                {item.check == 1 && data.content.show_tips == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />}
                <View>
                  <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardsixone" />
                </View>
                <View className="cardsixall">
                  <View className="cardsixtwo">
                    <Text>{item.name}</Text>
                  </View>
                  <View className="cardsixthreeborder">
                    <View className="cardsixthree">
                      <Text className="cardsixthree-text">{item.certificate_time}</Text>
                      
                      {item.city_name && <Text className="cardsixthree-text">{item.province_name}-{item.city_name}</Text>}
                      
                      <Text className="cardsixthree-text">{item.province_name}</Text>
                    </View>
                  </View>
                  <View className="cardsixfour">
                    <Text className="cardsixthree-text">{item.detail}</Text>
                  </View>
                  <View className="cardsixfive">
                    
                    {item.image.map((v, i) => <Image className="cardsixfive-image" src={v} key={i + i} onClick={() => handleImg(v)} />)}
                  </View>
                </View>
              </View>)}
          </View>
          <View className="cardsixsixall">
            <View className="cardsixsix">
              <View className="more" onClick={() => Taro.navigateTo({ url: `/pages/resume/skillList/index?preview=1` })}>
                更多技能证书
                <View className="more-view">
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
                </View>
              </View>
            </View>
          </View>
          </View>
        </View>}
      
      {ISCANSHARE && <Button openType="share" className="btn-box">
        <View className="btn">分享</View>
      </Button>}
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
Preview.config = { navigationBarTitleText: '找活名片' };