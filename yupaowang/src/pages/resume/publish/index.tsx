import Taro, { } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { AtProgress } from 'taro-ui'
import './index.scss'

export default function ResumePublish(){

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
                <View className='progresser'><AtProgress percent={75} color='#0099FF'/></View>
              </View>
              <View className='progress-txt'>名片越完善找活越容易；马上去完善&gt;&gt;</View>
            </View>
            <View>
              <View className='progress-num'>0</View>
              <View className='progress-viewed'>浏览次数</View>
            </View>
          </View>
          <View className='progress-footer'>
            <View>
              <Image src='http://cdn.yupao.com/newyupao/images/newresume-rank.png'/>
              <View className='progress-text'>我的排名：<View>四川省第一</View></View>
            </View>
            <View className='progress-rank'>马上去提升排名&gt;&gt;</View>
          </View>
        </View>
        <View className='content-basic-imformation'>
          <View className='basic-imformation'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-jbinfo.png'/>
            <View className='basic-title'>基础信息</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>您还没有完善基础信息</View>
            <View className='basic-btn'>
              <Button>去完善</Button>
            </View>
          </View> */}
          <View className='basic-status'>
            <View className='status-txt'><Image src='http://cdn.yupao.com/newyupao/images/newresume-experience-item1.png'/>我的工作状态:</View>
            <View className='status'>审核未通过</View>
          </View>
          <View className='basic-content'>
            <View className='content-information'>
              <View className='information'>
                <Image src='http://cdn.yupao.com/newyupao/images/user.png' />
                <View className='infor'>
                  <View className='name'>李小六</View>
                  <View className='sexage'>男  56岁   汉族</View>
                </View>
              </View>
              <View className='change'>待修改</View>
            </View>
            <View className='content'>
              <View className='craft'>
                <View className='craft-txt'>工        种：</View>
                <View className='craft-name'>建筑木工</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>手         机:   </View>
                <View className='craft-text'>13551047443</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>所在地区:     </View>
                <View className='craft-text'>四川省成都市</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>自我介绍:</View>
              </View>
              <View className='introduce'>请简要介绍您所从事的行业以及工作经验...</View>
            </View>
          </View>
          <View className='check-fail'><View>个人资料审核失败原因：</View>就不告诉你就不告诉你，就不告诉你就不告诉你，就不告诉你就不告诉你， </View>
        </View>
        <View className='content-personal-information'>
          <View className='basic-imformation'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-description.png'/>
            <View className='basic-title'>人员信息</View>
            <View className='change'>待修改</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>完善人员信息能让老板充分了解您或您的队伍</View>
            <View className='basic-btn'>
              <Button>去完善</Button>
            </View>
          </View> */}
          <View className='basic-content'>
            <View className='content'>
              <View className='craft'>
                <View className='craft-txt'>年        龄：</View>
                <View className='craft-text'>15</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>家          乡:    </View>
                <View className='craft-text'>四川省成都市</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>人员构成:   </View>
                <View className='craft-text'>班组</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>熟  练  度:  </View>
                <View className='craft-text'>学徒工</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>队伍人数:    </View>
                <View className='craft-text'>500人</View>
              </View>
              <View className='craft'>
                <View className='craft-txt'>标         签: </View>
                <View className='craft-name'>任劳任怨</View>
              </View>
            </View>
          </View>
        </View>
        <View className='content-project-experience'>
          <View className='basic-imformation'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-experience.png'/>
            <View className='basic-title'>项目经验</View>
            <View className='change'>添加</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>添加项目经验可提升老板对您的信任程度</View>
            <View className='basic-btn'>
              <Button>添加项目经验</Button>
            </View>
          </View> */}
          <View className='project-information'>
            <View className='content-information'>
              <View className='information'>
                <View className='name'>广东台山碧桂园项目</View>
                <View className='sexage'>2019-01-2020-12     广东省台山市 </View>
                <View className='sexage'>主要包工所有水电安装以及埋管，手艺第一质量放心。</View>
              </View>
              <View className='change'>编辑</View>
            </View>
            <View className='project-content'>
              <View className='content-img'>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
              </View>
              <View className='project-failtxt'>失败原因：不知道</View>
            </View>
            <View className='change-project'>
              <Button>修改项目经验<View className='nabla'></View></Button>
            </View>
          </View>
        </View>
        <View className='content-professional-skill'>
          <View className='basic-imformation'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-skill.png'/>
            <View className='basic-title'>职业技能</View>
            <View className='change'>添加</View>
          </View>
          {/* <View className='basic-content'>
            <View className='basic-txt'>添加职业技能，用实力证明您的能力</View>
            <View className='basic-btn'>
              <Button>添加职业技能</Button>
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
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
                <Image src='http://cdn.yupao.com//images/message/20201015/20101567394d5082f86f28.jpg'/>
              </View>
              <View className='project-failtxt'>失败原因：不知道</View>
            </View>
            <View className='change-project'>
              <Button>修改技能证书<View className='nabla'></View></Button>
            </View>
          </View>
        </View>
        <View className='content-btn'>
          <View className='preview-btn'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-lookuinfo.png' />
            <View>预览</View>
          </View>
          <View className='share-btn'>
            <Image src='http://cdn.yupao.com/newyupao/images/newresume-footer-share.png' />
            <View>分享</View>
          </View>
        </View>
      </View>
    </View>
  )
}