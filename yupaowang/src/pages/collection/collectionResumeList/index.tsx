import Taro from '@tarojs/taro'
import { View, Button, Image, Text, Block } from '@tarojs/components'
import { CollectionResumeListDataList } from '../../../utils/request/index.d'
import Nodata from '../../../components/nodata'
import { IMGCDNURL } from '../../../config'
import './index.scss'

interface PROPS {
  data: CollectionResumeListDataList[],
  onHandlerClick:Function,
  onHandleClick: Function,
  bottom?: boolean,
  recruitNoMoreData: boolean,
}
export default function CollectionResumeList({ data = [], onHandlerClick, onHandleClick, bottom = true, recruitNoMoreData}: PROPS) {
  return (
    <View className='resume-list-container' style={bottom ? '' : 'padding-bottom:0'}>
      {!data.length && <Nodata text='没有找到相关的数据'/>}
      { data && data.map((item) => (
        <Block key={item.id}>
          {
            // item.map((d) => (
            <View className='resume-list-item' onClick={() => onHandleClick(item.resume.check)} key={item.id}>
              <View className='resume-list-header'>
                  <Image className='resume-list-user' src={item.resume.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                      <Text className='resume-userinfo-name'>{item.resume.username}</Text>
                    <Text className='resume-userinfo-birthday'>{item.resume.birthday || 0 }岁</Text>
                    {item.resume.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`}/>}
                    {/* <Text className='resume-userinfo-sex'>男</Text> */}
                      {/* <Text className='resume-userinfo-age'>{item.resume.birthday}岁</Text> */}
                  </View>
                    <Text className='resume-list-type'>{item.resume.type}</Text>
                  <View className='resume-otherinfo'>
                      <Text className='resume-otherinfo-text'>{item.resume.nation}</Text>
                      <Text className='resume-otherinfo-text'>{item.resume.prof_degree}</Text>
                      <Text className='resume-otherinfo-text'>{item.resume.experience}</Text>
                  </View>
                  {/* <View className='resume-list-tags'>
              <Text className='resume-list-tags-item'>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
                </View>
              </View>
              <View className='resume-list-works'>
                  {/* {item.resume.occupations.map((i) => (
                  <Text className='resume-list-words-text'>{i}</Text>
                ))} */}
              </View>
                <View className='resume-list-content overwords'>{item.resume.introduce}</View>
              <View className='resume-list-footer'>
                {/* <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} /> */}
                  <View className='resume-list-loctxt overwords'>{item.resume.time}</View>
                  {/* <Text className='resume-list-time'>{item.resume.prof_degree}</Text> */}
                  <Button size='mini' className='resume-list-button' onClick={() => { onHandlerClick(item.resume_uuid)}}>取消收藏</Button>
              </View>
            </View>
          // ))
          }
        </Block>
      ))}
      {/* {data.length && recruitNoMoreData &&  */}
      {data.length && recruitNoMoreData && <View className="resume-lists-noData">没有更多数据了</View>}
      {/* }  */}
    </View>
  )
}