import Taro, { } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { AtProgress } from 'taro-ui'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import './index.scss'

export default function ResumePublish(){

  const { infoData, introducesData, projectData, certificates } = useResume()
  // 页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({url: url})
  }

  return (
    <View className='resume-container'>
      <View className='resume-tips-header'>请完善以下信息</View>
      <View className='resume-content'>
        <View className='content-progress'>
          <View className='progress-header'>
            <View>
              <View>
                <View className='progress-Improve'>名片完善度:</View>
                <View className='progresser'><AtProgress percent={+infoData.progress} color='#0099FF'/></View>
              </View>
              <View className='progress-txt'>名片越完善找活越容易；马上去完善&gt;&gt;</View>
            </View>
            <View>
              <View className='progress-num'>{infoData.view_num}</View>
              <View className='progress-viewed'>浏览次数</View>
            </View>
          </View>
          <View className='progress-footer'>
            <View>
              <Image className='progress-rank-img' src='http://cdn.yupao.com/newyupao/images/newresume-rank.png'/>
              <View className='progress-text'>我的排名点：{infoData.sort_flag}</View>
            </View>
            <View className='progress-rank'>马上去提升排名&gt;&gt;</View>
          </View>
          <View className='progress-place-top'>
            <View className='progress-placed'>
              <View>
                <Image className='progress-rank-img' src='http://cdn.yupao.com/newyupao/images/gl/personaltop.png'/>
                <View className='progress-text'>我的置顶：置顶中</View>
              </View>
              <View className='progress-rank'>取消置顶</View>
            </View>
            <View className='progress-place-text'>
              <View className='place-text'>置顶地区：四川省</View>
              <View className='place-text'>置顶时间：2019-11-20  15:30:50</View>
              <View className='progress-place-btn'>点击修改找活置顶信息&gt;&gt;</View>
            </View>
          </View>
        </View>
        <View className='content-basic-imformation'>
          <View className='basic-imformation'>
            <Image className='basic-jbinfo' src='http://cdn.yupao.com/newyupao/images/newresume-jbinfo.png'/>
            <View className='basic-title'>基础信息</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>您还没有完善基础信息</View>
            <View className='basic-btn'>
              <Button className='btn'>去完善</Button>
            </View>
          </View> */}
          <View className='basic-status'>
            <View className='status-txt'><Image className='basic-experience-img' src='http://cdn.yupao.com/newyupao/images/newresume-experience-item1.png'/>我的工作状态:</View>
            <View className='status'>审核未通过</View>
          </View>
          <View className='basic-content'>
            <View className='content-information'>
              <View className='information'>
                <Image className='basic-user-img' src={infoData.img} />
                <View className='infor'>
                  <View className='name'>{infoData.username}</View>
                  <View className='sexage'>{infoData.gender == '1' ? '男' : '女'}  {infoData.age}  {infoData.nation}</View>
                </View>
              </View>
              <View className='change'>待修改</View>
            </View>
            <View className='content'>
              <View className='craft'>
                <Text className='craft-txt'>工种</Text>
                  {infoData.occupations && infoData.occupations.map((v,i)=>(
                    <View className='craft-name' key={v+i}>{v}</View>
                  ))}
              </View>
              <View className='craft'>
                <Text className='craft-txt'>手机</Text>
                <View className='craft-text'>{infoData.tel}</View>
              </View>
              <View className='craft'>
                <Text className='craft-txt'>所在地区</Text>
                <View className='craft-text'>{infoData.city}</View>
              </View>
              <View className='craft'>
                <Text className='craft-txt'>自我介绍</Text>
                <View className='craft-text'>{infoData.introduce}</View>
              </View>
              <View className='introduce'></View>
            </View>
          </View>
          <View className='check-fail'><View className='check-fail-text'>个人资料审核失败原因：</View>就不告诉你就不告诉你，就不告诉你就不告诉你，就不告诉你就不告诉你， </View>
        </View>
        <View className='content-personal-information'>
          <View className='basic-imformation'>
            <Image className='basic-description-img' src='http://cdn.yupao.com/newyupao/images/newresume-description.png'/>
            <View className='basic-title'>人员信息</View>
            <View className='change'>待修改</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>完善人员信息能让老板充分了解您或您的队伍</View>
            <View className='basic-btn'>
              <Button className='btn'>去完善</Button>
            </View>
          </View> */}
          <View className='basic-content'>
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
                <View>
                {introducesData.tags && introducesData.tags.map((v)=>(
                  <View className='craft-name' key={v.id}>
                    {v.label_name}
                  </View>
                ))}
                </View>
                {/* <View className='craft-name'>任劳任怨</View> */}
              </View>
            </View>
          </View>
        </View>
        <View className='content-project-experience'>
          <View className='basic-imformation'>
            <Image className='project-experience-img' src='http://cdn.yupao.com/newyupao/images/newresume-experience.png'/>
            <View className='basic-title'>项目经验</View>
            <View className='change'>添加</View>
          </View>
          {/* 是否有项目 */}
          {
            projectData.length == 0 ? 
            <View className='basic-content'>
              <View className='basic-txt'>添加项目经验可提升老板对您的信任程度</View>
              <View className='basic-btn'>
                <Button className='btn'>添加项目经验</Button>
              </View>
            </View>:
            <View className='project-information'>
              <View className='content-information'>
                <View className='information'>
                  <View className='name'>{projectData[projectData.length - 1].project_name}</View>
                    <View className='sexage'>{projectData[projectData.length - 1].start_time}-{projectData[projectData.length - 1].start_time}   广东省台山市 </View>
                  <View className='sexage'>主要包工所有水电安装以及埋管，手艺第一质量放心。</View>
                </View>
                <View className='change'>编辑</View>
              </View>
              <View className='project-content'>
                <View className='content-img'>
                  <Imglist />
                </View>
                <View className='project-failtxt'>失败原因：不知道</View>
              </View>
              <View className='change-project'>
                <Button className='change-project-btn'>修改项目经验<View className='nabla'></View></Button>
              </View>
            </View>
          }
        </View>
        <View className='content-professional-skill'>
          <View className='basic-imformation'>
            <Image className='professional-skill-img' src='http://cdn.yupao.com/newyupao/images/newresume-skill.png'/>
            <View className='basic-title'>职业技能</View>
            <View className='change'>添加</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>添加职业技能，用实力证明您的能力</View>
            <View className='basic-btn'>
              <Button className='btn'>添加职业技能</Button>
            </View>
          </View> */}
          <View className='professional-information'>
            <View className='content-information'>
              <View className='information'>
                <View className='name'>水电工技术证</View>
                <View className='sexage time'>2019-01</View>
              </View>
              <View className='change'>编辑</View>
            </View>
            <View className='project-content'>
              <View className='content-img'>
                <Imglist />
              </View>
              <View className='project-failtxt'>失败原因：不知道</View>
            </View>
            <View className='change-project'>
              <Button className='change-project-btn'>修改技能证书<View className='nabla'></View></Button>
            </View>
          </View>
        </View>
        <View className='content-btn'>
          <View className='preview-btn'>
            <Image className='preview-img' src='http://cdn.yupao.com/newyupao/images/newresume-lookuinfo.png' />
            <View className='preview-share-btn'>预览</View>
          </View>
          <View className='preview-btn'>
            <Image className='preview-img' src='http://cdn.yupao.com/newyupao/images/newresume-footer-share.png' />
            <View className='preview-share-btn'>分享</View>
          </View>
        </View>
      </View>
    </View>
  )
}