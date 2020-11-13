import Taro, { useRouter, useShareAppMessage, Config } from '@tarojs/taro'
import { useResumeType } from '../../../pages/resume/publish/index.d'
import { useSelector } from '@tarojs/redux'
import { View, Image, Text, Button } from '@tarojs/components';
import { IMGCDNURL, ISCANSHARE } from '../../../config'
import Imglist from '../../../components/imglist'
import { getUserShareMessage } from '../../../utils/helper'
import './index.scss'

export default function NewPreview() {
  // 跳转传过来的参数
  const router: Taro.RouterInfo = useRouter()
  let { show_tips, is_introduces } = router.params;
  // 获取找活名片信息
  const resumeData: useResumeType = useSelector<any, useResumeType>(state => state.resumeData);
  const { info, introducesData,projectData,certificates,} = resumeData;
  // 页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({ url: url })
  }
  // 设置当前页面的分享内容
  useShareAppMessage(() => {
    return {
      ...getUserShareMessage()
    }
  })
  return(
    <View className='resume-container'>
      <View className='resume-tips-header'>注：分享名片 让您的名片排名更靠前</View>
      <View className='resume-content'>
        <View className='content-basic-imformation'>
          <View className='basic-imformation'>
            <Image className='basic-jbinfo' src={`${IMGCDNURL}lpy/jichu.png`} />
            <View className='basic-title'>基础信息</View>
          </View>
          <View className='basic-content' >
            {info.check == '0' && <View className='professional-information-noImage'></View>}
            <View className='content-information'>
                  <View className='information'>
                    <Image className='basic-user-img' src={info.headerimg} />
                    <View className='infor'>
                      <View className='name'>{info.username}</View>
                      <View className='sexage'>{info.gender == '1' ? '男' : '女'}  {info.age}  {info.nation}</View>
                    </View>
                  </View>
                  {info.check == '1' && show_tips == '1' &&
                    <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                  }
                </View>
                <View className='content'>
                  <View className='craft'>
                    <Text className='craft-txt'>手机</Text>
                    <View className='craft-text'>{info.tel}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>家乡</Text>
                    <View className='craft-text'>{introducesData.hometown}</View>
                  </View>
                  <View className='craft'>
                    <Text className='craft-txt'>工种</Text>
                    <View className='craft-list'>
                      <View className='craft-list-worker'>
                        {info.miniInfoOccupations && info.miniInfoOccupations.map((v, i) => (
                          <View className='craft-name' key={v + i}>{v}</View>
                        ))}
                      </View>
                    </View>
                  </View>
                <View className='craft'>
                  <Text className='craft-txt'>工龄</Text>
                  <View className='craft-text'>{info.experience}年</View>
                </View>
                <View className='craft'>
                  <Text className='craft-txt'>熟练度</Text>
                  <View className='craft-text'>{introducesData.prof_degree_str}</View>
                </View>
                <View className='craft'>
                  <Text className='craft-txt'>人员构成</Text>
                  <View className='craft-text'>{introducesData.type_str}</View>
                </View>
                  <View className='craft'>
                    <Text className='craft-txt'>所在地区</Text>
                    <View className='craft-text'>{info.address}</View>
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
                </View>
                </View>
              </View>
            </View>
        <View className='content-personal-information'>
          <View className='basic-imformation'>
            <Image className='basic-description-img' src={`${IMGCDNURL}newresume-description.png`} />
            <View className='basic-title'>自我介绍</View>
          </View>
          <View className='basic-content'>
            <View className='introduce'>{info.introduce}</View>
          </View>
        </View>
        {is_introduces && is_introduces =='0' && 
        <View className='content-personal-information'>
          <View className='basic-imformation'>
            <Image className='basic-description-img' src={`${IMGCDNURL}newresume-description.png`} />
            <View className='basic-title'>人员信息</View>
          </View>
            <View className='basic-content'>
            {info.check == '1' &&  show_tips == '1' &&
                <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
              }
              <View className='content'>
                <View className='craft'>
                  <Text className='craft-txt'>工龄</Text>
                  <View className='craft-text'>{info.experience}年</View>
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
                </View>
              </View>
            </View>
        </View>
        }
        {projectData.length &&
        <View className='content-project-experience'>
          <View className='basic-imformation'>
            <Image className='project-experience-img' src={`${IMGCDNURL}newresume-experience.png`} />
            <View className='basic-title'>项目经验</View>
          </View>
          {/* 是否有项目 */}
            <View className={projectData[0].check == '0' ? 'project-information professional-information-noImage' : 'project-information'}>
              <View className='content-information'>
                <View className='information'>
                  <View className='name'>{projectData[0].project_name}</View>
                  <View className='sexage'>{projectData[0].start_time}-{projectData[0].completion_timeTitle == 'zhijin' ? '至今' : projectData[0].completion_time} {projectData[0].province_name}{projectData[0].city_name ? `-${projectData[0].city_name}` : ''} </View>
                  <View className='sexage'>{projectData[0].detail}</View>
                </View>
                {projectData[0].check == '1' && show_tips == '1' &&
                  <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                }
                {projectData[0].check == '1' && show_tips == '0' &&
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
                <Button className='change-project-btn' onClick={() => userRouteJump('/pages/resume/projects/index')}>更多项目经验
                </Button>
              </View>
            </View>
        </View>
        }
        {certificates.length && 
        <View className='content-professional-skill'>
          <View className='basic-imformation'>
            <Image className='professional-skill-img' src={`${IMGCDNURL}newresume-skill.png`} />
            <View className='basic-title'>职业技能</View>
          </View>
          {/* 是否填写过技能证书 */}
          <View className={certificates[0].check == '0' ? 'professional-information professional-information-noImage' : 'professional-information'}>
              <View className='content-information'>
                <View>
                  <View className='information'>
                    <View className='name'>{certificates[0].name}</View>
                    <View className='sexage time'>{certificates[0].certificate_time}</View>
                  </View>
                </View>
                {certificates[0].check == '1' && show_tips == '1' &&
                  <Image className='audit' src={`${IMGCDNURL}lpy/audit.png `} />
                }
                {certificates[0].check == '1' && show_tips == '0' &&
                  <Image className='audit' src={`${IMGCDNURL}lpy/inreview.png`} />
                }
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
                  更多技能证书
                </Button>
              </View>
            </View>
        </View>
        }
        { ISCANSHARE && <View className='newPreview-btn'>
          <Button openType='share'>
            <View className='newPreview-btn-btn'>分享</View>
          </Button>
        </View> }
      </View>
    </View>
  )
}

NewPreview.config = {
  navigationBarTitleText: '找活名片',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
