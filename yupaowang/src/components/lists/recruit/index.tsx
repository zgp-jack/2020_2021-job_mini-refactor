import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL, FILTERWEIXINREG, REPLACEWEIXINTEXT, PUBLISHEDRECRUIT } from '../../../config'
import { RecruitListItem } from '../../../utils/request/index.d'
import Nodata from '../../../components/nodata'
import { useDispatch } from '@tarojs/redux';
import { changeTabbar } from '../../../actions/tabbar'
import { MEMBER } from '../../../constants/tabbar'
import './index.scss'

interface PROPS {
  data: RecruitListItem[][],
  bottom?: boolean,
  hasMore?: boolean
}

export default function RecruitList({ data, bottom = true, hasMore = false }: PROPS) {
  // 获取分发action的dispatch
  const dispatch = useDispatch()
  // 用户页面跳转
  const userRouteJump = (url: string, type?:number) => {
    if(type){
      dispatch(changeTabbar(MEMBER))
    }
    setTimeout(()=>{
      Taro.navigateTo({
        url: url
      })
    },0)
  }
  return (
    <View className='recruit-lists-container' style={bottom ? '' : 'padding-bottom:0'}>
      {data && data.map((item) => (
        <Block>
          {item && item.map((d) => (
            <View className='recruit-list-item' key={d.id} onClick={() => userRouteJump(`/pages/detail/info/index?id=${d.id}&type=1`)}>
              {d.top && <Image className='list-toprecruit-img' src={IMGCDNURL + 'newlist-jobzd.png'} />}
              {d.is_end == 2 && <Image className='recruit-findend-img' src={IMGCDNURL + 'newlist-jobfindend.png'} />}
              <View className='recruit-list-header'>
                <View className='recruit-list-title overwords'>{d.title}</View>
                {d.top && <Text className='recruit-list-settop' onClick={(e) => { e.stopPropagation(); userRouteJump(`${PUBLISHEDRECRUIT}?tatol=1`,1) }}>我要置顶</Text>}
              </View>
              <View className='recruit-list-body'>
                <Image className='recruit-list-user' src={d.image} />
                <View className='recruit-list-body-content'>
                  <View className='recruit-body-header'>
                    <Text className='recruit-list-username'>{d.user_name}</Text>
                    {d.is_end !== 2 && <Image className='recruit-list-finding' src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className='recruit-list-words'>
                    <View className='recruit-words-text'>{REPLACEWEIXINTEXT ? d.detail.replace(FILTERWEIXINREG, '') : d.detail}</View>
                  </View>
                </View>
              </View>
              <View className='recruit-list-footer'>
                <Image className='recruit-list-loc' src={IMGCDNURL + 'newlist-jobposi.png'} />
                <View className='recruit-list-loctxt overwords'>{d.show_address}</View>
                <Text className='recruit-list-time'>{d.time}</Text>
              </View>
            </View>
          )
          )}
        </Block>
      )
      )}
      {data && data[0] && data[0].length && !hasMore && <View className='list-data-notmore'>没有更多数据了</View>}
      {data && data[0] && !data[0].length && <Nodata text='暂无相关数据' />}
    </View>
  )
}