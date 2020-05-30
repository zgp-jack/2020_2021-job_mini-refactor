import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Button, Textarea } from '@tarojs/components'
import { resumeListAction, jobRecommendListAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import {  UserLocationCity } from '../../../config/store'
import { UserLocationPromiss } from '../../../models/area'
import { resumeList, ResumeTopStr  } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  info:{
    progress:string,
    view_num:string,
    sort_flag:string,
    username:string,
    nation:string,
    occupations:[],
    tel:string,
    address:string,
    introduce:string,
    note:string,
  },
  resume_top:{
    is_top:number,
    has_top: number,
    top_provinces_str: ResumeTopStr[],
    start_time_str:number,
    end_time_str:number,
    top_tips_string:string,
    is_show_tips:number
  },
  content:{
    show_tips:number,
    check_tips_string:string,
  },
  introduces:{
    experience:string,
    type_str:string,
    hometown:string,
    prof_degree_str:string,
    number_people:string,
    tags: introducesTags[],
  }
  certificate_count:number,
}
interface introducesTags {
  label_name:string,
}
export default function NewJob() {
  
  const [data,setData] = useState<DataType>({
    info:{
      progress:'0',
      view_num:'0',
      sort_flag:'',
      username:'',
      nation:'',
      tel:'',
      address:'',
      introduce:'',
      note:'',
      occupations:[],
    },
    resume_top:{
      is_top: 0,
      has_top: 0,
      top_provinces_str:[],
      start_time_str:0,
      end_time_str:0,
      top_tips_string:'',
      is_show_tips:0,
    },
    content:{
      show_tips:0,
      check_tips_string:''
    },
    introduces:{
      experience:'',
      type_str:'未填写',
      hometown: '未填写',
      prof_degree_str:'未填写',
      number_people:'未填写',
      tags:[],
    },
    certificate_count:0,
  })
  const [showcomplete, setShowcomplete ] = useState<boolean>(true)
  const [showtopone, setShowtopone] = useState<boolean>(false)
  const [passre, setPassre] = useState<boolean>(true)
  const [nopassre, setNopassre] = useState<boolean>(true)
  const [showpassre, setShowpassre] = useState<boolean>(false)
  const [index ,setIndex ] = useState<number>(0)
  const [selectdata, setSelectdata] = useState<string[]>([])
  const [showtop, setShowtop] =useState<boolean>(false)
  const [checkone, setCheckone] = useState<boolean>(false)
  const [headerimg, setHeaderimg] = useState<string>('')
  const [authenticationimg, setAuthenticationimg] = useState<string>('')
  const [certificate_show, setCertificate_show] = useState<number>(0)
  const [sex,setSex] = useState<string>('未填写')
  const [age,setAge] = useState<string>('')
  const [checkonef, setCheckonef] = useState<string>('4568')
  const [showskill, setShowskill] = useState<boolean>(true)
  const [occupations, setOccupations] = useState<string[]> ([])
  const [checkstatus, setCheckstatus] =useState<boolean>(true)
  const [intro, setIntro ] = useState<boolean>(true);
  const [introne, serIntrone] = useState<boolean>(false)
  // 显示没有数据完善人员信息
  const [selfintro, setselfintro] =useState<boolean>(true)
  // 个人资料审核
  const [ressonone, setRessonone] = useState<boolean>(false)
  const [showdetail, setShowdetail] = useState<boolean>(true)
  const [checktwo, setChecktwo] = useState<boolean>(false)
  const [selfintrone, setSelfintrone] = useState<boolean>(false)
  const [projectlength, setProjectlength] = useState<number>(0)
  const [project_count, setProject_count] = useState<number>(0)
  const [project,setProject] = useState<any>([])
  const [skilllength, setSkilllength] = useState<number>(0)
  const [checkfourf, setCheckfourf] = useState<number>(0)
  // 技能证书
  const [skillbooksone, setSkillbooksone] = useState<any>([])
  useEffect(()=>{
    resumeListAction().then(res=>{
      console.log(res);
      if(res.errcode == "200"){
        setData({ info: res.data.info, resume_top: res.data.resume_top, content: res.data.content, introduces: res.data.introduces, certificate_count: res.data.certificate_count})
        const list = res.data.status.map(v=>v.name);
        console.log(list)
        setSelectdata(list)
        if (res.data.info.uuid && res.data.info.is_introduces != '0' && res.data.project.length != 0 && res.data.certificates.length != 0 ){
          setShowcomplete(false)
        }else{
          setShowcomplete(true)
        }
        if(res.data.info.uuid){
          setShowtopone(true)
        }else{
          setShowtopone(false)
        }
        setShowpassre(true)
        // 人员信息
        if (res.data.is_introduces == '1'){
          setselfintro(false)
          setSelfintrone(true)
        } else if (res.data.is_introduces == '0') {
          setselfintro(true)
          setSelfintrone(true)
        }
        if (res.data.info.check == "0") {
          setPassre(false)
          setRessonone(false)
        }
        if (res.data.info.check == "1"){
          setNopassre(false)
          setRessonone(false)
        }
        if (res.data.info.check == '1'){
          setCheckone(true)
          setChecktwo(true)
        }else{
          setCheckone(false)
          setChecktwo(false)
        }
        if (res.data.certificates.length === 0){
          setSkilllength(0)
        }else{
          setSkilllength( res.data.certificates.length >= 1 ? res.data.certificates.length : 0)
        }
        if (showdetail){
          if (res.data.info.check == "0") {
            setRessonone(true);
          }
          setShowdetail(false);
        }
        if (res.data.project.length === 0){
          setProjectlength(0)
          setProject([])
          setSkillbooksone([])
        }else{
          setSkillbooksone([res.data.certificates[0]])
          if (res.data.project){
            if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000){
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              const item = res.data.project[0];
              item.completiontime = 'zhijing';
              setProject([item])
            }else {
              const item = res.data.project[0];
              item.completiontime = 'zhijin';
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              setProject([item])
            }
          }
        }
        // if (res.data.is_introduces == '1'){
        //   setSelfintrone(true)
        // } else if (res.data.is_introduces == '0'){
        //   setSelfintrone(false)
        // }
        setProject_count(res.data.project_count)
        setIntro(false)
        serIntrone(true)
        setHeaderimg(res.data.info.headerimg)
        setShowskill(false)
        setCheckonef(res.data.info.check)
        setAuthenticationimg(res.data.info.authentication)
        setCertificate_show(res.data.info.certificate_show)
        setSex(res.data.info.gender == "1" ? "男" : "女")
        const date = new Date();
        const dateo = date.getTime()
        const dateone = new Date(dateo);
        if (res.data.info.birthday){
          if (dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) == 0) {
            setAge('')
          } else {
            setAge(dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) + "岁")
          }

        }

      }else{
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
        return
      }
    });
    let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    // 相关推荐
    const params={
      area_id:322,
      classify_id: 24,
      job_ids:'',
      page: 1,
      type: 1,
    }
    jobRecommendListAction(params).then(res=>{
      console.log(res);
    })
  },[])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const handleTopping = ()=>{
    if (showtop){
      // 跳去基础信息页面
      Taro.showModal({
        title: '温馨提示',
        content: data.resume_top.top_tips_string,
        confirmText: `去添加`,
        success(res) {
          if (res.confirm) {
            // 跳转
            Taro.navigateTo({
              url: '/pages/clients-looking-for-work/essential-information/esinformation',
            })
            // that.toperfect()
          } else if (res.cancel) {
          }
        }
      })
      return
    } else if (data.resume_top.is_show_tips === 1){
      Taro.showModal({
        title: '温馨提示',
        content: data.resume_top.top_tips_string,
        showCancel: false,
      })
      return
    }else{
      // 置顶
      Taro.navigateTo({
        url: `pages/topping/index`,
      })
    }
  }
  return (
    <View className='newJob'>
      <View className='heard'>
        请完善以下信息
      </View>
      <View className='card'>
        <View className="card-otext">
          <Text>名片完善度：</Text>
          <View className="card-otext-lang">
            <View className="card-otext-lang-olang" style={`width:${parseInt(data.info.progress)}%`}></View>
          </View>
          <Text className="card-otext-olangw">{data.info.progress}%</Text>
          <Text className="card-otext-num">{data.info.view_num}</Text>
        </View>
        {/* showcomplete */}
        {showcomplete?
        <View className="isline">
          <Button className="isline-shareliveone">名片越完善 找活越容易,马上去完善>></Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>:
        <View>
          <Button className="isline-shareliveone">分享找活名片,可提升名片排名度</Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>
        }
        <View className='ranking'>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/biaptu.png`}/>
            <Text>我的排名点：{ data.info.sort_flag }</Text>
          </View>
          <View className='ranking-go' onClick={() => userRouteJump(`/subpackage/pages/ranking/index`)} >马上去提升排名>></View>
        </View>
        <View className={data.resume_top.is_top === 2 || data.resume_top.has_top == 0 ? 'ranking' :'ranking-last'}>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/personaltop.png`} />
            <Text>我的置顶:
            {data.resume_top.is_top === 2 && <Text>置顶已过期</Text>}
            {data.resume_top.has_top == 0 && <Text>未置顶</Text>}
            </Text>
          </View>
          <View className='ranking-go' onClick={handleTopping}>马上去置顶>></View>
        </View>
        {/* wx: if="{{ has_top != 0 && resume_top.is_top != 2}}" */}
        {
          data.resume_top.has_top !=0 && data.resume_top.is_top!= 2 &&
          <View>
            <View className='topselect_box' >
              <View className='select'>
                {/*  wx: if="{{ has_top == 0 || resume_top.is_top == 0}}" */}
                {data.resume_top.has_top == 0  || data.resume_top.is_top == 0 && 
                <Text className="select_text">未置顶</Text>
                }
                {/* wx: if="{{ resume_top.is_top == 1 }}" */}
                {data.resume_top.is_top == 1 && 
                <Text className='select_text'>置顶中</Text>
                }
                <Image className='select_img' src={`${IMGCDNURL}select.png`} />
              </View>
            </View>
          </View>
        }
        {/* wx: if="{{ has_top != 0 && resume_top.is_top != 2}}" */}
        {data.resume_top.has_top !=0 && data.resume_top.is_top !=2 &&
        <View className="toptime" >
          <View className='toptime-view'>
            <Text>置顶地区</Text>
            {/* wx: for="{{ resume_top.top_provinces_str }}" wx:key="{{ index }}" */}
            {data.resume_top.top_provinces_str.map((v,i)=>(
              <Text className='proviceop' key={i+i}>{v.name}</Text>
            ))}
          </View>
        </View>
        }
        {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
          <View className="toptime">
            <View>
              <Text>置顶时间：</Text>
              <Text>{data.resume_top.start_time_str } ~ { data.resume_top.end_time_str }</Text>
          </View>
          </View>
        }
        {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
        <View className="topdetail">
          <Text>点击修改找活置顶信息>></Text>
        </View>
        }
      </View>
        {/* 基础信息 */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/jichu.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>基础信息</Text>
          </View>
        </View>
      </View>
      <View>
      {showtopone && 
        <View className='cardoneson'>
          <View className="cardonesonone">
            <View className='cardonesonone-view'>
              <Image className='cardonesonone-image' src={`${IMGCDNURL}lpy/workdetail.png`}/>
            </View>
            <Text className='cardonesonone-text'>我的工作状态：</Text>
          </View>
          {showpassre && 
            <View className='select_box'>
            {/* passre&& nopassre */}
            {passre && nopassre && 
            <View className='select'>
              {/* <text class='select_text' wx: if="{{ index == 0}}">{{ selectData[index].name }}</text>
              <text class='select_text' wx: if="{{ index== 1}}">{{ selectData[index].name }}</text>
              <image class='select_img' src='{{subscripted}}' wx: if="{{ checkstatus }}"></image> */}
              {index == 0 && <Text className='select_text'>{selectdata[index]}</Text>}
              {index == 1 && <Text className='select_text'>{selectdata[index]}</Text>}
              {/* wx: if="{{ checkstatus }}" */}
              {checkstatus && 
              <Image className='select-img' src={`${IMGCDNURL}select.png`} />
              }
            </View>
            }
            {!passre && nopassre && 
              <View className='select'>
              <Text className='select_text'>审核未通过</Text>
            </View>
            }
            {passre && !nopassre && 
              <View className='select'>
              <Text className='select_text'>人工审核中</Text>
              </View>
            }
            </View>
          }
        </View>
        }
        {/* 基本资料 */}
        <View className="cardcolore">
          {/* wx: if="{{ showtopone }}" */}
          {showtopone &&
            <View className="cardtwo" >
              <Image className="link" src={`${IMGCDNURL}lpy/newresume-linktag.png`} />
              <Image className="linkone" src={`${IMGCDNURL}lpy/newresume-linktag.png`} />
              <View className="cardonetwof">
                {/* wx: if="{{ checkone&& show_tips == 1}}" */}
                {checkone && data.content.show_tips == 1 && <Image className="checkone" src={`${IMGCDNURL}lpy/audit.png`} />}
                <View className="cardtwosonone">
                  <View className="cardtwosononeimg">
                    <View className='oimg'>
                      <Image className='oimg-image' src={headerimg}></Image>
                    </View>
                    <View className="oimgone">
                      <Text className="otext">{data.info.username}</Text>
                      {/* {wx: if="{{ authenticationimg == 2}}"} */}
                      {authenticationimg == '2' &&
                        <Image src={`${IMGCDNURL}new-list-realname-icon.png`}></Image>
                      }
                      {certificate_show == 1 &&
                        <Image src={`${IMGCDNURL}new-list-jnzs-icon.png?t=1`}></Image>
                      }
                      <View className="otextone">
                        <Text>{sex}</Text>
                        {age &&
                          <Text className={sex ? 'ochange' : ''} >{age}</Text>
                        }
                        <Text className={age ? 'ochange' : ''}>{data.info.nation}</Text>
                      </View>
                    </View>
                  </View>
                  {!checkone && checkonef != '0' &&
                    <View className="cardtwosontwo">
                      <Text >编辑</Text>
                    </View>
                  }
                  {checkonef == '0' &&
                    <View className="cardtwosontwo">
                      <Text>待修改</Text>
                    </View>
                  }
                </View>
                <View className="lineone">
                  <View className="linezo">
                    <View className='cworkotype'>
                      <View className="ocworkotype">工种</View>
                      <View className="ocworkotypeoo">
                        {/* wx: if="{{!showskill}}" */}
                        {!showskill &&
                          <View className="ocworkotyp">
                            <View className='ocworkotyptu'>
                            {data.info.occupations.map((v, i) => (
                                <View key={i + i}>{v}</View>
                              ))}
                            </View>
                          </View>
                        }
                        {showskill &&
                          <View className="ocworkotyp">
                            <View className='oimg'>
                            {data.info.occupations.map((v, i) => (
                                <View className='oimg' key={i + i}>{v}</View>
                              ))}
                            </View>
                          </View>
                        }
                      </View>
                    </View>
                    <View className="cardotext">
                      <Text className="oworkotext">手机</Text>
                      <Text className="workotextone">{data.info.tel}</Text>
                    </View>
                    <View className="cardotext">
                      <Text className="oworkotext">所在地区</Text>
                      <Text className="workotextone">{data.info.address}</Text>
                    </View>
                    <View className="cardotext">
                      <Text className="oworkotext">自我介绍</Text>
                      <Text className="workotextone">{data.info.address}</Text>
                    </View>
                  </View>
                </View>
                {/* intro */}
                {intro && <View className="content" >{data.info.introduce}</View>}
                {/* introne */}
              {introne && <View className="contentone">{data.info.introduce}</View>}
              </View>
            </View>}
        </View>
        {ressonone && 
          <View className="cardcoloreno">
            <View className="nopass">
              <Text className='nopass-text'>个人资料审核失败原因：</Text> {data.info.note}
            </View>
          </View>
        }
        </View>
      {/*   没有信息 */}
      {showtop && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
      <Text className="findingnamecardtwothree">您还没有完善基础信息</Text>
        <View className="findingnamecardtwofour">去完善</View>
      </View>
      </View>
      }
        {/* 人员信息 */}
      {selfintrone  && 
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>人员信息</Text>
          </View>
          {!checktwo && checkonef != '0' && 
          <View className="cardthreeone" >编辑</View>
          }
          {!checktwo && checkonef == '0' &&
            <View className="cardthreeone" >待修改</View>
          }
        </View>
      </View>
      }
      {/* 有信息 */}
      {selfintrone && 
      <View className='cardcolore'>
          <View className='cardtwoif'>
          {/*  wx: if="{{ checktwo&& show_tips == 1}}" */}
          {checktwo && data.content.show_tips == 1 && 
          <Image className="checktwo" src={`${IMGCDNURL}lpy/audit.png`}/>
          }
          <View className="lineone">
            <View className="linezo">
              <View className="cardotext">
                <Text className="oworkotext">工龄</Text>
                <Text className="workotextone">{data.introduces.experience}年</Text>
              </View>
              <View className="cardotext">
                <Text className="oworkotext">人员构成</Text>
                <Text className="workotextone">{data.introduces.type_str}</Text>
              </View>
              <View className="cardotext">
                <Text className="oworkotext">我的家乡</Text>
                <Text className="workotextone">{data.introduces.hometown}</Text>
              </View>
              <View className="cardotext">
                <Text className="oworkotext">熟练度</Text>
                <Text className="workotextone">{data.introduces.prof_degree_str}</Text>
              </View>
              {data.introduces.number_people !=='1' && 
              <View className="cardotext">
                <Text className="oworkotext">队伍人数</Text>
                <Text className="workotextone">{data.introduces.number_people}</Text>
              </View>
              }
              <View className="cardotext">
                <Text className="oworkotext">标签</Text>
                <View className="alllabletu">
                  {data.introduces.tags.map((v,i)=>(
                    <Text className='labletu' key={i+i}>{v.label_name}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
          </View>
      </View>
        }
      {/* {!ressonone && 
        <View className="cardcoloreno">
          <View className="nopass">
            <Text className='nopass-text'>个人资料审核失败原因：</Text> { data.info.note }
          </View>
        </View>
      } */}
      {/*   没有信息 */}
      {selfintro && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">完善人员信息，能让老板充分了解您或您的队伍</Text>
          <View className="findingnamecardtwofour">去完善</View>
        </View>
      </View>
      }
      {/* 项目经验 */}
      <View className="findingnamecardthree">
        <View className="findingnamecardthreemobile">
          <View className="findingnamemobile">
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-experience.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>项目经验</Text>
          </View>
          {projectlength != 0 && projectlength < project_count &&
            <View className="cardthreeone">
              添加
            </View>}
        </View>
      </View>
      {/*   没有信息 */}
      {projectlength == 0 && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">添加项目经验，可提升老板对您的信任程度</Text>
          <View className="findingnamecardeighttwo">添加项目经验</View>
        </View>
      </View>
      }
      <View className='cardcolore'>
        {/* wx: if="{{ projectlength != 0}}" */}
        {projectlength != 0 && 
          <View className="cardsix">
            {project.map((item:any)=>(
              <View className='cardsixzong' key={item.id}>
                {/* wx: if="{{ item.check == 1 && show_tips == 1 }}" */}
                {item.check == 1 && data.content.show_tips == 1 && 
                  <Image className="checkthree" src={`${IMGCDNURL}lpy/audit.png`}/>
                }
                {/* wx: if="{{ item.check == 2 }}" */}
                {/* bindtap="editor" data-uid="{{ item }}" */}
                {item.check == 2 && 
                  <View className="editor">编辑</View>
                }
                {item.check == 0 &&
                  <View className="editor">待修改</View>
                }
                {/* wx: if="{{ item.check == 0 }}" */}
                {item.check == 0 &&
                <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`}/>
                }
                {/* item.check == 1&&show_tips == 0 */}
                {item.check == 1 && data.content.show_tips == 0 &&
                  <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />
                }
                <View>
                  <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardsixone"/>
                </View>
                <View className="cardsixall">
                  <View className="cardsixtwo">
                    <Text>{ item.project_name }</Text>
                  </View>
                  <View className="cardsixthreeborder">
                    <View className="cardsixthree">
                      <Text className='cardsixthree-text'>{ item.start_time }-{ item.completiontime == "zhijin" ? "至今" : item.completion_time }</Text>
                    {/*  wx: if="{{ item.city_name }}" */}
                    {item.city_name && 
                      <Text className='cardsixthree-text'>{ item.province_name }-{ item.city_name }</Text>
                    }
                    {/* wx: if="{{!item.city_name}}" */}
                    <Text className='cardsixthree-text'>{item.province_name}</Text>
                    </View> 
                  </View>
                  <View className="cardsixfour">
                    <Text className='cardsixthree-text'>{ item.detail }</Text>
                  </View>
                  <View className="cardsixfive">
                    {/* wx: for="{{ item.image }}" */}
                    {item.image.map((v,i)=>(
                      <Image className='cardsixfive-image' src={v} key={i+i}/>
                    ))}
                    {/* <Image  data-url="{{ item }}" catchtap="previewImage" wx:key="{{ index }}" src="{{ item }}" data-index="{{ pindex }}"/> */}
                  </View>
                  {item.check == 0 && 
                    <View className='resson'>
                      未通过原因：{ item.fail_case }
                    </View>
                  }
                </View>
              </View>
            ))}
          <View className="cardsixsixall">
            <View className="cardsixsix">
              <View className="more">
                更多项目经验
                <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                </View>
              </View>
            </View>
          </View>
          </View>}
      </View>
      {/* 职业技能  */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-skill.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>职业技能</Text>
          </View>
          {
            skilllength !=0 && skilllength < data.certificate_count &&
            <View className='cardthreeone' onClick={() => userRouteJump(`/subpackage/pages/addSkill/index`)}> 添加 </View>
          }
        </View>
      </View>
      {/*   没有信息 */}
        {skilllength == 0 && 
        <View className="cardcolore">
          <View className="findingnamecardtwo">
            <Text className="findingnamecardtwothree">添加职业技能，用实力证明您的能力</Text>
            <View className="findingnamecardeighttwo">添加职业技能</View>
          </View>
        </View>
        }
      {/* 有职业技能 */}
      <View className="cardcolore">
        {skilllength != 0 && 
          <View className="cardeight">
          {skillbooksone.map((item:any,i)=>(
            <View className='cardeightzong' key={i+i}>
              {item.check == 1 && data.content.show_tips == 1 && 
                <Image className="checkfour" src={`${IMGCDNURL}lpy/audit.png`}/>
              }
            {/* { item.check == 1 && data.content.show_tips == 1 &&  */}
              <View className='cardeightzong'>
                <Image src={item.audit} className='checkfour'/>
                {/* wx: if="{{ item.check == 2 }}" */}
                {item.check == 2 &&  <View className="editor">编辑</View> }
                {item.check == 0 && <View className="editor">待修改</View>}
                {item.check == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`}/> }
                {/* {item.check == 1 && <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />} */}
                <View>
                  <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardeightone"/>
                </View>
                <View className="cardeightall">
                  <View className="cardeighttwo">
                    <Text className='cardeighttwo-text'>{ item.name }</Text>
                  </View>
                  <View className="certificatetime">
                    <Text className='cardeighttwo-text'>{ item.certificate_time }</Text>
                  </View>
                  <View className="cardeightfive">
                    {item.image.map((v,i)=>(
                      <Image className='cardeightfive-image' src={v} key={i+i}/>
                    ))}
                  </View>
                  {item.check == 0 && <View className='ressons'>
                    未通过原因：{ item.fail_case }
                  </View>}

                </View>
            </View>
            {/* } */}
            </View>
          ))}
          <View className="cardeightsixall">
            <View className="cardeightsix">
              {checkfourf != 0 && 
                <View className="more">
                  更多技能证书
                  <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                  </View>
                </View>
              }
              {checkfourf == 0 && <View className='more'>
                修改技能证书
                <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                </View>
              </View>}
            </View>
          </View>
          </View>
        }
      </View>

      {/* 底部 */}
      {showtopone && 
        <View className="cardnine">
          <Button className="cardnineone">
          <Image className='cardnineone-image' src={`${IMGCDNURL}lpy/bottom-one.png`} /> 预览
          </Button>
          <Button className="cardnineone">
          <Image className='cardnineone-image' src={`${IMGCDNURL}lpy/bottom-two.png`} /> 分享
          </Button>
        </View>
      }
    </View>
  )
}
NewJob.config = {
  navigationBarTitleText: '找活名片',
} as Config