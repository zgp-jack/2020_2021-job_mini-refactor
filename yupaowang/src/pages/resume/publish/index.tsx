import Taro, { useDidShow, useState, Config, usePullDownRefresh, useShareAppMessage } from '@tarojs/taro'
import { View, Text, Button, Image, Block } from '@tarojs/components'
import { RESUME } from '../../../constants/tabbar'
import { IMGCDNURL, ISCANSHARE } from '../../../config'
import { AtProgress } from 'taro-ui'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import { useSelector } from '@tarojs/redux'
import Auth from '../../../components/auth'
import { getUserShareMessage } from '../../../utils/helper'
import { ShowActionModal } from '../../../utils/msg';
import { resumesChangeTopStatusAction } from '../../../utils/request';
import { UserInfo } from '../../../config/store';
import './index.scss'

export default function ResumePublish() {
  const uuid = useSelector<any, string>(state => state.resumeData.resume_uuid)
  const { infoData, introducesData, projectData, certificates, initResumeData, is_introduces, project_count, certificate_count, show_tips, selectData, selectDataIndex, handleSelectData, isModifyProject, isModifySkill, projectNum, certificatesNum, defaultTopArea, resume_top, topCity } = useResume()
  // 判断是否是第一次进入  第一次不加载数据 因为hooks会帮助你加载
  const [firstJoin, setFirstJoin] = useState<boolean>(true)

  useDidShow(() => {
    if (firstJoin) {
      setFirstJoin(false)
      return false
    }
    initResumeData()
  })

  // 用户分享参数配置
  useShareAppMessage(() => {
    if (uuid) {
      return {
        ...getUserShareMessage(),
        path: `/pages/resume/detail/index?uuid=${uuid}`
      }
    }
    return {
      ...getUserShareMessage(),
      path: `/pages/index/index?type=${RESUME}`
    }
  })

  // 下拉刷新后 更新当前找活名片
  usePullDownRefresh(() => {
    initResumeData()
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 500)
  })

  // 用户点击完善信息按钮
  const userEditCardInfo = () => {
    if (!uuid) {
      userRouteJump(`/pages/resume/add_info/index`)
    } else if (is_introduces == 0) {
      userRouteJump(`/pages/resume/add_member/index`)
    } else if (!projectData.length) {
      userRouteJump(`/pages/resume/add_project/index`)
    } else if (!certificates.length) {
      userRouteJump(`/pages/resume/add_skill/index`)
    }
  }

  // 页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({ url: url })
  }
  // 页面跳转
  const handleJump = (url: string, obj?) => {
    // 如果没有完善资料就跳到完善基础资料
    if (obj && !uuid) {
      Taro.showModal({
        title: '温馨提示',
        content: '您还没有找活名片，添加找活名片后，审核通过即可进行置顶操作',
        confirmText: '去添加',
        confirmColor: '#108EEF',
        success: (res) => {
          if (res.confirm) {
            userRouteJump('/pages/resume/add_info/index')
          }
        }
      })
      return
    } else if (!uuid) {
      ShowActionModal({
        title: '温馨提示',
        msg: '您未完善基础信息填写,请先填写基础信息',
        success: () => {
          userRouteJump('/pages/resume/add_info/index')
        }
      })
      return;
    } else {
      if (obj && obj.is_show_tips != 0) {
        ShowActionModal({
          title: '温馨提示',
          msg: obj.top_tips_string,
        })
        return;
      }
      userRouteJump(url)
    }
  }
  // 设置当前页面的分享内容
  useShareAppMessage(() => {
    return {
      ...getUserShareMessage()
    }
  })
  // // 取消置顶
  // const handleCloseTopp = (()=>{
  //   resumesChangeTopStatusAction({}).then(res=>{
  //     if(res.errcode == 'ok'){
  //       initResumeData();
  //       ShowActionModal({msg:res.errmsg})
  //     }else{
  //       ShowActionModal({ msg: res.errmsg })
  //     }
  //   })
  // })
  // 继续置顶
  const handleContinue = ((e) => {
    // 如果是置顶到期那么就跟初次置顶一样跳转到对应界面
    if (e.is_top == 2) {
      handleJump(`/pages/newtopping/resRang/index?defaultTopArea=${defaultTopArea}`, resume_top)
      // 如果是置顶未到期且继续置顶发送置顶请求
    } else {
      if (e.is_show_tips == 1) {
        Taro.showModal({
          title: '温馨提示',
          content: e.top_tips_string,
          showCancel: false,
          success() {
            initResumeData();
          }
        })
        return
      }
      // 点击置顶或者修改置顶
      toppingFn(e);
    }
  })
  // 点击置顶或者修改置顶
  const toppingFn = (e) => {
    // 现在时间
    let nowtime = new Date().getTime();
    // 置顶结束时间
    let endtime = e.endtime * 1000;
    // 如果现在时间大于项目置顶结束时间提示置顶到期并更新项目
    if (nowtime - 0 > endtime - 0) {
      Taro.showModal({
        title: '温馨提示',
        content: '您的置顶已过期',
        showCancel: false,
        success() {
          initResumeData();
        }
      })
      return
    }
    // 发送修改置顶请求
    handleCloseTopp()
  }
  // 发送修改置顶请求 取消置顶
  const handleCloseTopp = () => {
    // 没用户信息直接返回
    let userInfo = Taro.getStorageSync(UserInfo);
    if (!userInfo) return
    let params = {
      uuid,
    }
    resumesChangeTopStatusAction(params).then(res => {
      if (res.errcode == 'ok') {
        initResumeData();
        ShowActionModal({ msg: res.errmsg })
      } else {
        ShowActionModal({ msg: res.errmsg })
      }
    })
  }
  return (
    <Block>
      <Auth />
      <View className='resume-container'>
        <View className='resume-tips-header'>请完善以下信息</View>
        <View className='resume-content'>
          <View className='content-progress'>
            <View className='progress-header'>
              <View>
                <View>
                  <View className='progress-Improve'>名片完善度:</View>
                  <View className='progresser'><AtProgress percent={(infoData.progress && +infoData.progress) || 0} color='#0099FF' /></View>
                </View>
                {infoData.uuid && infoData.is_introduces != '0' && projectData.length > 0 && certificates.length > 0 ?
                  <Button openType='share' className='progress-txt' >分享找活名片,可提升名片排名度</Button> :
                  <View className='progress-txt' onClick={() => userEditCardInfo()}>名片越完善找活越容易；马上去完善&gt;&gt;</View>
                }
              </View>
              <View>
                <View className='progress-num'>{infoData.view_num || 0}</View>
                <View className='progress-viewed'>浏览次数</View>
              </View>
            </View>
            {/* <View onClick={() => handleJump(`/pages/newtopping/range/index?defaultTopArea=${defaultTopArea}`)}>置顶</View>
            <View onClick={() => handleJump(`/pages/newtopping/range/index`)}>置顶1</View>
                   */}
            {/* <View className='progress-footer'> */}
            {/* <View>
              <Image className='progress-rank-img' src={`${IMGCDNURL}newresume-rank.png`} />
              <View className='progress-text'>我的排名点：{infoData.sort_flag}</View>
            </View>
            <View className='progress-rank'>马上去提升排名&gt;&gt;</View> */}
            {/* </View> */}
            <View className='progress-place-top'>
              <View className='progress-placed'>
                <View>
                  <Image className='progress-rank-img' src={`${IMGCDNURL}lpy/personaltop.png`} />
                  <View className='progress-text'>我的置顶：
                  {resume_top.is_top == 2 && <Text>置顶已过期</Text>}
                    {resume_top.has_top == 1 && resume_top.is_top == 0 && <Text>已取消置顶</Text>}
                    {resume_top.has_top == 0 && <Text>未置顶</Text>}
                    {resume_top.has_top != 0 && resume_top.is_top == 1 && <Text>置顶中</Text>}
                  </View>
                </View>
                {resume_top.has_top == 0 && <View className='progress-blue' onClick={() => handleJump(`/pages/newtopping/resRang/index?defaultTopArea=${defaultTopArea}`, resume_top)}> 马上去置顶&gt;&gt;</View>}
                {resume_top.has_top != 0 && <View className='progress-rank'>
                  {resume_top.is_top != 1 && <View onClick={() => handleContinue(resume_top)}>继续置顶</View>}
                  {resume_top.is_top == 1 && <View onClick={handleCloseTopp}>取消置顶</View>}
                </View>}
              </View>
              {resume_top.is_top == 1 &&
                <View className='progress-place-text'>
                  <View className='place-text'>置顶地区：{topCity}</View>
                  <View className='place-text'>置顶时间：{resume_top.start_time_str}~{resume_top.end_time_str}</View>
                  <View className='progress-place-btn' onClick={() => handleJump(`/pages/newtopping/resRang/index`)}>点击修改找活置顶信息&gt;&gt;</View>
                </View>
              }
            </View>

          </View>
          <View className='content-basic-imformation'>
            <View className='basic-imformation'>
              <Image className='basic-jbinfo' src={`${IMGCDNURL}lpy/jichu.png`} />
              <View className='basic-title'>基础信息</View>
            </View>
            {!uuid ?
              <View className='basic-content'>
                <View className='basic-txt'>您还没有完善基础信息</View>
                <View className='basic-btn'>
                  <Button className='btn' onClick={() => userRouteJump('/pages/resume/add_info/index')}>去完善</Button>
                </View>
              </View> :
              <View>
                <View className='basic-status'>
                  <View className='status-txt'><Image className='basic-experience-img' src={`${IMGCDNURL}newresume-experience-item1.png`} />我的工作状态:</View>
                  <View className='z-index' onClick={(e) => { e.stopPropagation(); handleSelectData() }}>
                    {infoData.check == '0' && (introducesData.check == '0') &&
                      <View className='status'>审核未通过</View>
                    }
                    {infoData.check != '0' && (infoData.check == '1' || introducesData.check == '1') &&
                      <View>
                        <View className='status'>人工审核中</View>
                      </View>
                    }
                    {infoData.check != '0' && introducesData.check != '0' && introducesData.check != '1' &&
                      <View className='status'>
                        {selectData && selectData[selectDataIndex].name}
                        {/* <View className='status' onClick={() => userRouteJump('/pages/resume/add_info/index')}>人工审核中</View> */}
                        <Image src={`${IMGCDNURL}select.png`} className='status-txt-image' />
                      </View>
                    }
                  </View>
                </View>
                <View className='basic-content'>
                  <View className='content-information'>
                    <View className='information'>
                      <Image className='basic-user-img' src={infoData.headerimg} />
                      <View className='infor'>
                        <View className='name'>
                          <Text>{infoData.username}</Text>
                          {infoData.authentication == '2' && <Image src={`${IMGCDNURL}new-list-realname-icon.png`} className='information-img' />}
                          {infoData.certificate_show == 1 && <Image src={`${IMGCDNURL}new-list-jnzs-icon.png?t=1`} className='information-img' />}
                        </View>
                        <View className='sexage'>{infoData.gender == '1' ? '男' : '女'}  {infoData.age}  {infoData.nation}</View>
                      </View>
                    </View>
                    {infoData.check == '1' && show_tips == 1 &&
                      <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                    }
                    {infoData.check == '0' &&
                      <View className='change' onClick={() => userRouteJump('/pages/resume/add_info/index')}>
                        待修改
                </View>
                    }
                    {infoData.check != '0' && infoData.check != '1' &&
                      <View className='change' onClick={() => userRouteJump('/pages/resume/add_info/index')}>
                        编辑
                </View>
                    }
                  </View>
                  <View className='content'>
                    <View className='craft'>
                      <Text className='craft-txt'>手机</Text>
                      <View className='craft-text'>{infoData.tel}</View>
                    </View>
                    <View className='craft'>
                      <Text className='craft-txt'>工种</Text>
                      <View className='craft-list'>
                        <View className='craft-list-worker'>
                          {infoData.miniInfoOccupations && infoData.miniInfoOccupations.map((v, i) => (
                            <View className='craft-name' key={v + i}>{v}</View>
                          ))}
                        </View>
                      </View>
                    </View>
                    <View className='craft'>
                      <Text className='craft-txt'>所在地区</Text>
                      <View className='craft-text'>{infoData.address}</View>
                    </View>
                    <View className='craft'>
                      <Text className='craft-txt'>自我介绍</Text>
                      <View className='craft-text'>{infoData.introduce}</View>
                    </View>
                    <View className='introduce'></View>
                  </View>
                </View>
              </View>
            }
            {
              (infoData.check == '0' || introducesData.check == '0') &&
              <View className='check-fail'><View className='check-fail-text'>个人资料审核失败原因：</View>{infoData.note}</View>
            }
          </View>
          <View className='content-personal-information'>
            <View className='basic-imformation'>
              <Image className='basic-description-img' src={`${IMGCDNURL}newresume-description.png`} />
              <View className='basic-title'>人员信息</View>
              {
                infoData.check != '0' && introducesData.check != '1' && is_introduces &&
                <View className='change' onClick={() => userRouteJump('/pages/resume/add_member/index')}>编辑</View>
              }
              {
                infoData.check == '0' && introducesData.check != '1' && is_introduces &&
                <View className='change' onClick={() => userRouteJump('/pages/resume/add_member/index')}>待修改</View>
              }
            </View>
            {is_introduces == 0 ?
              <View className='basic-content'>
                <View className='basic-txt'>完善人员信息能让老板充分了解您或您的队伍</View>
                <View className='basic-btn'>
                  <Button className='btn' onClick={() => handleJump('/pages/resume/add_member/index')}>去完善</Button>
                </View>
              </View> :
              <View className='basic-content'>
                {infoData.check == '1' && show_tips == 1 &&
                  <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                }
                <View className='content'>
                  <View className='craft'>
                    <Text className='craft-txt'>工龄</Text>
                    <View className='craft-text'>{infoData.experience}年</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>家乡</Text>
                    <View className='craft-text'>{introducesData.hometown}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>人员构成</Text>
                    <View className='craft-text'>{introducesData.type_str}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>熟练度</Text>
                    <View className='craft-text'>{introducesData.prof_degree_str}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>队伍人数</Text>
                    <View className='craft-text'>{introducesData.number_people}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>标签</Text>
                    <View className='craft-list'>
                      <View className='craft-list-worker'>
                        {introducesData.tags && introducesData.tags.map((v) => (
                          <View className='craft-box' key={v.id}>
                            {v.label_name}
                          </View>
                        ))}
                      </View>
                    </View>
                    {/* <View className='craft-name'>任劳任怨</View> */}
                  </View>
                </View>
              </View>
            }
          </View>
          <View className='content-project-experience'>
            <View className='basic-imformation'>
              <Image className='project-experience-img' src={`${IMGCDNURL}newresume-experience.png`} />
              <View className='basic-title'>项目经验</View>
              {projectData.length && projectData.length < project_count &&
                <View className='change' onClick={() => userRouteJump('/pages/resume/add_project/index')}>添加</View>
              }
            </View>
            {/* 是否有项目 */}
            {projectData.length == 0 ?
              <View className='basic-content'>
                <View className='basic-txt'>添加项目经验可提升老板对您的信任程度</View>
                <View className='basic-btn'>
                  <Button className='btn' onClick={() => handleJump('/pages/resume/add_project/index')}>添加项目经验</Button>
                </View>
              </View> :
              <View className={projectData[0].check == '0' ? 'project-information professional-information-noImage' : 'project-information'}>
                <View className='content-information'>
                  <View className='information'>
                    <View className='name'>{projectData[0].project_name}</View>
                    <View className='sexage'>{projectData[0].start_time}-{projectData[0].completion_timeTitle == 'zhijin' ? '至今' : projectData[0].completion_time} {projectData[0].province_name}{projectData[0].city_name ? `-${projectData[0].city_name}` : ''} </View>
                    <View className='sexage'>{projectData[0].detail}</View>
                  </View>
                  {projectData[0].check == '1' && show_tips == 1 &&
                    <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                  }
                  {projectData[0].check == '2' &&
                    <View className='change' onClick={() => { userRouteJump(`/pages/resume/add_project/index?id=${projectData[0].id}`) }}>编辑</View>
                  }
                  {projectData[0].check == '0' &&
                    <View className='change' onClick={() => { userRouteJump(`/pages/resume/add_project/index?id=${projectData[0].id}`) }}>待修改</View>
                  }
                  {projectData[0].check == '1' && show_tips == 0 &&
                    <Image className='audit' src={`${IMGCDNURL}lpy/inreview.png`} />
                  }
                </View>
                <View className='project-content'>
                  <View className='content-img'>
                    {projectData && <Imglist data={projectData[0].image} />}
                  </View>
                  {projectData[0].check == '0' &&
                    <View className='project-failtxt'>未通过原因：{projectData[0].fail_case}</View>
                  }
                </View>
                <View className='change-project'>
                  <Button className='change-project-btn' onClick={() => userRouteJump('/pages/resume/projects/index')}>{isModifyProject && isModifyProject != '0' ? '更多项目经验' : '修改项目经验'}<View className='nabla'></View>
                    {isModifyProject && isModifyProject == '0' && <View className='change-project-btn-icon'>{projectNum}</View>}
                  </Button>
                </View>
              </View>
            }
          </View>
          <View className='content-professional-skill'>
            <View className='basic-imformation'>
              <Image className='professional-skill-img' src={`${IMGCDNURL}newresume-skill.png`} />
              <View className='basic-title'>职业技能</View>
              {certificates.length && certificates.length < certificate_count &&
                <View className='change' onClick={() => userRouteJump('/pages/resume/add_skill/index')}>添加</View>
              }
            </View>
            {/* 是否填写过技能证书 */}
            {certificates.length ?
              <View className={certificates[0].check == '0' ? 'professional-information-noImage professional-information' : 'professional-information'}>
                <View className='content-information'>
                  <View>
                    <View className='information'>
                      <View className='name'>{certificates[0].name}</View>
                      <View className='sexage time'>{certificates[0].certificate_time}</View>
                    </View>
                  </View>
                  {certificates[0].check == '1' && show_tips == 1 &&
                    <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                  }
                  {certificates[0].check == '2' &&
                    <View className='change' onClick={() => { userRouteJump(`/pages/resume/add_skill/index?id=${certificates[0].id}`) }}>编辑</View>
                  }
                  {certificates[0].check == '0' &&
                    <View className='change' onClick={() => { userRouteJump(`/pages/resume/add_skill/index?id=${certificates[0].id}`) }}>待修改</View>
                  }
                  {certificates[0].check == '1' && show_tips == 0 &&
                    <Image className='audit' src={`${IMGCDNURL}lpy/inreview.png`} />
                  }
                  {/* <View className='change' onClick={() => userRouteJump(`/pages/resume/add_skill/index?id=${certificates[0].id}`)}>编辑</View> */}
                </View>
                <View className='project-content'>
                  <View className='content-img'>
                    {certificates.length && <Imglist data={certificates[0].image && certificates[0].image} />}
                  </View>
                  {certificates[0].check == '0' &&
                    <View className='project-failtxt'>失败原因：{certificates[0].fail_case}</View>}
                </View>
                <View className='change-project'>
                  <Button className='change-project-btn' onClick={() => userRouteJump('/pages/resume/skills/index')}>
                    {isModifySkill && isModifySkill != '0' ? '更多技能证书' : '修改技能证书'}
                    <View className='nabla'></View>
                    {isModifySkill && isModifySkill == '0' && <View className='change-project-btn-icon'>{certificatesNum}</View>}
                  </Button>
                </View>
              </View>
              :
              <View className='basic-content'>
                <View className='basic-txt'>添加职业技能，用实力证明您的能力</View>
                <View className='basic-btn'>
                  <Button className='btn' onClick={() => handleJump('/pages/resume/add_skill/index')}>添加职业技能</Button>
                </View>
              </View>
            }
          </View>
          {infoData && infoData.uuid &&
            <View className='content-btn'>
              {ISCANSHARE ?
                <View className='content-btn-box'>
                  <View className='preview-btn'>
                    <Image className='preview-img' src={`${IMGCDNURL}newresume-lookuinfo.png`} />
                    <View className='preview-share-btn' onClick={() => userRouteJump(`/pages/resume/newPreview/index?show_tips=${show_tips}`)}>预览</View>
                  </View>
                  <Button openType='share' className='preview-btn-share'>
                    {/* <View className='preview-btn'> */}
                    <Image className='preview-img' src={`${IMGCDNURL}newresume-footer-share.png`} />
                    <View className='preview-share-btn'>分享</View>
                    {/* </View> */}
                  </Button>
                </View>
                : <View className='preview'>
                  <View className='preview-box'>
                    <Image className='preview-img' src={`${IMGCDNURL}newresume-lookuinfo.png`} />
                    <View className='preview-share-btn' onClick={() => userRouteJump(`/pages/resume/newPreview/index?show_tips=${show_tips}`)}>预览</View>
                  </View>
                </View>
              }
            </View>
          }
        </View>
      </View>
    </Block>
  )
}

ResumePublish.config = {
  navigationBarTitleText: '我的找活名片',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config

