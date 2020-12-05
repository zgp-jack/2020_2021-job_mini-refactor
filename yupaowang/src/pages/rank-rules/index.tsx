import Taro, {useEffect, useState} from '@tarojs/taro'
import {View, Text, Image, Button} from "@tarojs/components";
import './index.scss'
import {resumesSortAction, resumesAddClickLogAction} from "../../utils/request";
import {useSelector} from '@tarojs/redux'
import {User} from "../../reducers/user";
import {UserInfo} from "../../config/store";

interface resumesSortDataList {
  button_words: string,
  click_type: number,
  description: string,
  img_url: string,
  is_share: number,
  share_type: string,
  type_name: string,
  button_allowed?: boolean,
  jump: resumesSortDataListJump;
}

interface resumesSortDataListJump {
  android_path: string,
  ios_path: string,
  mini_path: string,
  need_jump: number
}

export default function () {
  //用户信息
  const userInfo = useSelector<any, User>(state => state.User)
  //我的排名点
  const [sortFlag, setSortFlag] = useState<number>(0)
  //列表数据
  const [list, setList] = useState<resumesSortDataList[]>([])
  //列表length
  const [setListLength] = useState<any>(0)
  //规则状态
  const [ruleStatus, setRuleStatus] = useState<string>('')

  const [ranking, setRanking] = useState<string>('')

  const [rankjump] = useState<string>('rankjump')

  const [certificate_count, setCertificateCount] = useState<any>(null)

  const [project_count, setProjectCount] = useState<any>(null)

  const [resume_uuid, setResumeUuid] = useState<string>('')
  const [has_resume, setHasResume] = useState<any>(null)

  const [tips, setTips] = useState<string[]>([])
  const [postError, setPostError] = useState<boolean>(false)
  const [showButton, setShowButton] = useState<boolean>(true)

  useEffect(() => {
    resumesSortAction().then(res => {

      const {sort_rule_lists, warm_tips, resume_info, resume_data} = res.data

      setSortFlag(resume_info.sort_flag)
      setList(sort_rule_lists)
      setListLength(sort_rule_lists.length)
      setRuleStatus(resume_data.hasOwnProperty("info") ? resume_data.info.hasOwnProperty("check") ? resume_data.info.check : "" : "")
      setResumeUuid(resume_data.hasOwnProperty("info") ? resume_data.info.hasOwnProperty("uuid") ? resume_data.info.uuid : "" : "")
      setCertificateCount(resume_data.certificate_count ? resume_data.certificate_count : "")
      setProjectCount(resume_data.project_count ? resume_data.project_count : "")
      setTips(warm_tips)
      setHasResume(resume_info.has_resume)
      setStorege(res)
    }).catch(e => {
      setPostError(true)
    })
    getStatus()
  }, [])

  //分享自定义配置
  Taro.useShareAppMessage((e: any) => {
    console.log(e)
    let status = ruleStatus;
    let userInfo = Taro.getStorageSync("userInfo");
    let commonShareImg = "http://cdn.yupao.com/miniprogram/images/minishare.png?t=" + new Date().getTime()
    let refId = userInfo.hasOwnProperty('userId') ? userInfo.userId : false;
    let uuid = resume_uuid;
    let commonShareTips = "全国建筑工地招工平台";
    if (e.target) {
      if (e.target.dataset.hasOwnProperty("share") && e.target.dataset.share == "invite_friend") {
        addclicklog(e.target.dataset.type)
        return {
          title: commonShareTips,
          imageUrl: commonShareImg,
          path: `/pages/index/index?refid=${refId}`//这是一个路径
        }
      } else if (status == '2') {
        addclicklog(e.target.dataset.type)
        return {
          title: commonShareTips,
          imageUrl: commonShareImg,
          path: `/pages/boss-look-card/lookcard?uuid=${uuid}&refId=${refId}&sharedekeId=1`//这是一个路径
        }
      } else {
        if (refId) {
          addclicklog(e.target.dataset.type)
          return {
            title: commonShareTips,
            imageUrl: commonShareImg,
            path: `/pages/index/index?refid=${refId}`//这是一个路径
          }
        } else {
          return {
            title: commonShareTips,
            imageUrl: commonShareImg,
            path: `/pages/index/index`//这是一个路径
          }
        }
      }
    }
  })
  const setStorege = (mydata) => {
    if (mydata.data.resume_data.hasOwnProperty("info")) {
      Taro.setStorageSync("uuid", mydata.data.resume_data.info.uuid)
    }

    if (mydata.data.resume_data.hasOwnProperty("certificate_count") && mydata.data.resume_data.hasOwnProperty("project_count")) {
      if (mydata.data.resume_data.project.length == 0 || mydata.data.resume_data.certificates.length == 0) {
        setRanking('ranking')
      }
      getallstatus()
      Taro.setStorageSync("projectnum", mydata.data.resume_data.project.length)
      Taro.setStorageSync("skillnum", mydata.data.resume_data.certificates.length)
      Taro.setStorageSync("certificate_count", mydata.data.resume_data.certificate_count)
      Taro.setStorageSync("project_count", mydata.data.resume_data.project_count)
    } else {
      getallstatus()
      Taro.setStorageSync("projectnum", 0)
      Taro.setStorageSync("skillnum", 0)
      Taro.setStorageSync("certificate_count", 3)
      Taro.setStorageSync("project_count", 5)
    }
  }
  const getallstatus = () => {
    Taro.setStorageSync("skillpass", 0)
    Taro.setStorageSync("pass", 0)
    // app.globalData.allexpress = true;
    // app.globalData.allskill = true;
  }
  const addclicklog = (item) => {
    let userInfo = Taro.getStorageSync("userInfo");
    let detail: any = '';
    if (userInfo) {
      detail = {
        type: item
      }
      resumesAddClickLogAction(detail).then(res => {
        console.log(res)
      })
    }
  }
  const getStatus = () => {
    if (!userInfo) {
      setShowButton(false)
    }
  }
  const handleJump = (e) => {
    if (!Taro.getStorageSync(UserInfo)) {
      Taro.navigateTo({url: '/pages/userauth/index'})
      setShowButton(true)
      return false;
    }
    let type = e.currentTarget.dataset.type
    let jump = e.currentTarget.dataset.jump
    let minipath = e.currentTarget.dataset.minipath
    console.log(type)
    console.log(jump)
    console.log(minipath)
    if (type == '7') {
      if (jump == "1") {
        Taro.navigateTo({
          url: minipath,
        })
        return
      } else {
        Taro.atMessage({message: '播放广告功能'})
      }
    }
    addclicklog(type)
    if (has_resume == 1 && e.currentTarget.dataset.jump == 1 && e.currentTarget.dataset.minipath == "/pages/clients-looking-for-work/finding-name-card/findingnamecard") {
      // app.globalData.showdetail = true
      console.log(123)
      Taro.navigateTo({
        url: e.currentTarget.dataset.minipath + `?rankjump=${rankjump}`,
      })
    } else if (has_resume == 1 && e.currentTarget.dataset.jump == 1) {
      //项目经验 url
      let url1 = '/pages/clients-looking-for-work/new-project-experience/projectexperience'
      //技能证书 url
      let url2 = '/pages/clients-looking-for-work/addcertificate/addcertificate'
      if (e.currentTarget.dataset.minipath == url1 || e.currentTarget.dataset.minipath == url2) {
        let routerUrl: string = ''
        if (e.currentTarget.dataset.minipath == url1) {
          routerUrl = '/pages/resume/add_project/index'
        }
        if (e.currentTarget.dataset.minipath == url2) {
          routerUrl = '/pages/resume/add_skill/index'
        }
        Taro.navigateTo({
          url: routerUrl + `?ranktype=${ranking}` + `&certificate_count=${certificate_count}` + `&resume_uuid=${resume_uuid}` + `&project_count=${project_count}`,
        })
      } else {
        let _urlArray = e.currentTarget.dataset.minipath.split('/')
        _urlArray[3] = 'index'
        Taro.navigateTo({
          url: _urlArray.join('/') + `?ranktype=${ranking}`,
        })
      }
    } else if (has_resume == 0 && e.currentTarget.dataset.minipath == '/pages/recharge/recharge' && e.currentTarget.dataset.jump == 1) {
      Taro.navigateTo({
        url: "/pages/recharge/index",
      })
    } else if (has_resume == 0 && e.currentTarget.dataset.minipath == '/pages/realname/realname' && e.currentTarget.dataset.jump == 1) {
      Taro.navigateTo({
        url: "/pages/realname/index",
      })
    } else if (e.currentTarget.dataset.jump == 1) {
      Taro.navigateTo({
        url: "/pages/resume/publish/index" + `?rankjump=${rankjump}`,
      })
    }
  }
  if (postError) {
    return (
      <View className="error-page">
        <View className="error-img-bor">
          <Image className="error-img" src="http://cdn.yupao.com/miniprogram/images/nodata.png"/>
        </View>
        <View className="error-text">网络出错请点击<Text className="reload-text">重新加载</Text></View>
      </View>
    )
  }
  return (
    <View className="rank-rules">
      <View className="header">
        <View className="header-point">
          <Text className="point-text">我的排名点：</Text>
          <Text className="point-text">{sortFlag}</Text>
        </View>
        <View className="header-detail">
          <Text className="detail-text">注：找活名片只有审核通过后，才会在列表展示。排名点越高，排名越靠前。
          </Text>
        </View>
      </View>
      <View className="rank-list">
        {
          list.map((item, i) => (
            <View className="rank-item" key={`i${i}`}>
              <View className="item-info-box">
                <View className="info-img-bor">
                  <Image className="info-img" src={item.img_url}/>
                </View>
                <View className="infos">
                  <View className="info-name">
                    {item.type_name}
                  </View>
                  <View className="info-dec">
                    {item.description}
                  </View>
                </View>
              </View>
              {
                item.is_share != 1 &&
                <Button
                  className={item.button_allowed ? 'item-btn' : (item.jump.need_jump == 0 ? 'ranking-obtngray' : 'item-btn')}
                  data-allow={item.button_allowed ? 1 : 0} data-minipath={item.jump.mini_path}
                  data-type={item.click_type} data-jump={item.jump.need_jump}
                  onClick={handleJump}>{item.button_words}</Button>
              }
              {!showButton && <Button className="item-btn" onClick={handleJump}>{item.button_words}</Button>}
              {item.is_share == 1 &&
              <Button className="item-btn" data-type={item.click_type} data-share={item.share_type}
                      open-type="share">{item.button_words}</Button>}

            </View>
          ))
        }
      </View>
      <View className="rank-tips">
        <View className="tips-title">温馨提示</View>
        <View className="tips-content">
          {
            tips.map((item, i) => (
              <View className="tips-item" key={i}>{item}</View>
            ))
          }
        </View>
      </View>
    </View>
  )
}
