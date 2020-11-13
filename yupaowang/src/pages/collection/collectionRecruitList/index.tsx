import Taro,{ useState } from '@tarojs/taro'
import { View, Text, Image, Block, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { CollectionRecruitListDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import './index.scss'


interface PROPS {
  data: CollectionRecruitListDataList[],
  onHandlerClick: (id: string) => void,
  recruitNoMoreData:boolean,
  bottom?: boolean
}

export default function CollectionRecruitList({ data = [], onHandlerClick, recruitNoMoreData, bottom = true }: PROPS) {
  // 定义弹窗
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // 弹窗内容
  const [modalContent, setModalContent] = useState<string>('')
  // 弹窗
  const onHandleClick = (type: string,id: string) => {
    // 1 审核中 2 通过 0 失败
    if (type == '2') {
      Taro.navigateTo({
        url: `/pages/detail/info/index?id=${id}`
      })
    } else if (type == '0') {
      setIsOpened(true)
      setModalContent('该信息未通过人工审核，审核通过后，即可查看')
    } else if (type == '1') {
      setIsOpened(true)
      setModalContent('该信息正在人工审核中，请稍后再试')
    }
  }
  return (
    <View className='recruit-lists-container' style={bottom ? '' : 'padding-bottom:0'}>
      {!data.length && <Nodata text='没有找到相关的数据'/>}
      { data && data.map((item) => (
        <Block key={item.id}>
          {
            // item.map((d) => (
            <View className='recruit-list-item' onClick={() => { onHandleClick(item.is_check,item.id)}} key={item.id}>
              {/* {item.top && <Image className='list-toprecruit-img' src={IMGCDNURL + 'newlist-jobzd.png'} />} */}
              {item.is_end == '2' && <Image className='recruit-findend-img' src={IMGCDNURL + 'newlist-jobfindend.png'} />}
              <View className='recruit-list-header'>
                <View className='recruit-list-title overwords'>{item.title}</View>
                {/* {item.top && <Text className='recruit-list-settop'>我要置顶</Text>} */}
              </View>
              <View className='recruit-list-body'>
                <Image className='recruit-list-user' src={item.header_img} />
                <View className='recruit-list-body-content'>
                  <View className='recruit-body-header'>
                    <Text className='recruit-list-username'>{item.user_name}</Text>
                    {item.is_end !== '2' && <Image className='recruit-list-finding' src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className='recruit-list-words'>
                    <View className='recruit-words-text'>{item.detail}</View>
                  </View>
                </View>
              </View>
              <View className='recruit-list-footer'>
                {/* <Image className='recruit-list-loc' src={IMGCDNURL + 'newlist-jobposi.png'} /> */}
                <View className='recruit-list-loctxt overwords'>{item.time}</View>
                <Button size='mini' className='recruit-list-button' onClick={()=>{onHandlerClick(item.id)}}>取消收藏</Button>
              </View>
            </View>
          // )
          // )
          }
        </Block>
      ))}
      {data.length && recruitNoMoreData && <View className='recruit-lists-noData'>没有更多数据了</View>} 
      <AtModal isOpened={isOpened}>
        <AtModalHeader>温馨提示</AtModalHeader>
        <AtModalContent>
          {modalContent}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => { setIsOpened(false) }}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}