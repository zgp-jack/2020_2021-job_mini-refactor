import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import Search from '../../../components/search'
import ResumeCondition from '../../../components/condition/resume'
import WechatNotice from '../../../components/wechat'
import ResumeList from '../../../components/lists/resume'
import { ChildItems } from '../../../models/area'
import { SearchType, SearchNormalFieldType } from '../index.d'
import { ResumeList as ResumeListType } from '../../../utils/request/index.d'
import { conditionType } from '../../recruit/lists'
import { AreaPickerKey, ClassifyPickerKey, MemberPickerKey, ResumeFilterPickerKey } from '../../../config/pages/lists'
import { UserListChooseCity } from '../../../config/store'
import { getResumeList } from '../../../utils/request'
import { PUBLISHRESUME } from '../../../config'
import './index.scss'
import Msg from '../../../utils/msg'
import useResume from '../../../hooks/publish/resume'

export default function ResumeLists() {
    // 设置字段默认值
    const hasSortFlag: string = '1'
    const hasTime: string = '1'
    const hasTop: string = '1'
    const lastNormalPos: string = '0'
    const lastSortFlagPos: string = '0'
    const lastTimePos: string = '0'
    const { infoData, introducesData } = useResume()
    const login: boolean = useSelector<any, boolean>(store => store.User['login'])

    // * 获取选择城市缓存
    let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)
    // * 筛选数据
    const DEFAULT_CONDITION: conditionType[] = [
        { id: AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' },
        { id: ClassifyPickerKey, text: '工种' },
        { id: MemberPickerKey, text: '队伍' },
        { id: ResumeFilterPickerKey, text: '推荐' }
    ]
    // 是否还有下一页
    const [hasMore, setHasMore] = useState<boolean>(true)
    // 设置顶部筛选条件数据
    const [condition, setCondition] = useState<conditionType[]>(DEFAULT_CONDITION)
    // * 搜索数据 备份
    const [remark, setRemark] = useState<string>('')
    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = useState<boolean>(false)
    // * 定义列表数组
    const [lists, setLists] = useState<ResumeListType[][]>([])
    // * 定义data
    const [searchData, setSearchData] = useState<SearchType>({
        page: 1,
        occupations: '',
        keywords: '',
        sort: 'recommend',
        location: '',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        type: '',
    })

    // 特殊字段默认值
    const normalFieldReset = {
        has_sort_flag: hasSortFlag,
        has_time: hasTime,
        has_top: hasTop,
        last_sort_flag_pos: lastSortFlagPos,
        last_normal_pos: lastNormalPos,
        last_time_pos: lastTimePos
    }
    // 单独处理特殊字段
    const [normalField, setNormalField] = useState<SearchNormalFieldType>(normalFieldReset)

    // * 请求列表数据
    useEffect(() => {
        if (searchData.page === 1) setLists([]);
        getResumeList({ ...searchData, ...normalField }).then(res => {
            Taro.hideNavigationBarLoading()
            // 判断搜索的时候把内容清空回到顶部，再设置值
            if (res.errcode == 'ok') {
                let mydata = res.data
                if (mydata.list && mydata.list.length) {
                    let { has_sort_flag = hasSortFlag, has_time = hasTime, has_top = hasTop, last_sort_flag_pos = lastSortFlagPos, last_normal_pos = lastNormalPos, last_time_pos = lastTimePos } = mydata
                    setNormalField({ has_sort_flag, has_time, has_top, last_sort_flag_pos, last_normal_pos, last_time_pos })
                }
                if (mydata.list && !mydata.list.length) setHasMore(false)
                if (searchData.page === 1) setLists([[...mydata.list]])
                else setLists([...lists, [...mydata.list]])
                if (refresh) setRefresh(false)
            } else {
                Msg(res.errmsg)
            }
        })
    }, [searchData])

    // * 监听下拉刷新
    // * 监听下拉刷新
    const pullDownAction = () => {
        setRefresh(true)
        setHasMore(true)
        setSearchData({ ...searchData, page: 1 })
    }

    // * 触底加载下一页
    const getNextPageData = () => {
        if (!hasMore) return
        setSearchData({ ...searchData, page: searchData.page + 1 })
    }
    // 用户页面跳转
    const userRouteJump = (url: string) => {
        Taro.navigateTo({
            url: url
        })
    }

    // * 更新筛选条件
    const setSearchDataAction = (type: string, id: string, text: string) => {
        const recondition = JSON.parse(JSON.stringify(condition))
        let i: number = recondition.findIndex((item: conditionType) => item.id === type)
        recondition[i].text = text
        setCondition(recondition)
        setNormalField(normalFieldReset)
        if (type === ClassifyPickerKey) {
            setSearchData({ ...searchData, occupations: id, page: 1 })
        } else if (type === AreaPickerKey) {
            setSearchData({ ...searchData, area_id: id, page: 1 })
        } else if (type === ResumeFilterPickerKey) {
            setSearchData({ ...searchData, sort: id, page: 1 })
        } else if (type === MemberPickerKey) {
            setSearchData({ ...searchData, type: id, page: 1 })
        }
    }

    // 设置搜索内容
    const setSearchValData = () => {
        setNormalField(normalFieldReset)
        setSearchData({ ...searchData, keywords: remark, page: 1 })
    }
    const handleClickToRankRules = () => {
        Taro.navigateTo({ url: '/pages/rank-rules/index' })
    }
    return (
        <View className='recruit-container'>
            <View className='recruit-fiexd-header'>
                <Search placeholder='找工人、找队伍、找班组' value='' setRemark={(val: string) => setRemark(val)}
                    setSearchData={() => setSearchValData()} />
                <ResumeCondition data={condition} setSearchData={(type, id, text) => setSearchDataAction(type, id, text)} />
            </View>
            <ScrollView
                className='recruit-lists-containerbox'
                scrollY
                refresherEnabled
                scrollWithAnimation
                refresherTriggered={refresh}
                onRefresherRefresh={() => pullDownAction()}
                lowerThreshold={200}
                onScrollToLower={() => getNextPageData()}
            >
                <View style={{ height: '8px' }}></View>
                <WechatNotice />
                <ResumeList data={lists} hasMore={hasMore} />
            </ScrollView>
            {/* <View className="overflow-image">
        <Image 
          className={"rank-rules-image"} 
          onClick={handleClickToRankRules}
          src='http://cdn.yupao.com/miniprogram/images/resume-list-rules-btn.png'
        />
      </View> */}
            <View className='publish-list-btn' onClick={() => userRouteJump(PUBLISHRESUME)}>
                {((infoData.check == '0' && (introducesData.check == '0')) || !login) ? "发布找活" : "我的找活"}
            </View>
        </View>
    )
}

ResumeLists.config = {
    navigationBarTitleText: '工人找活列表',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
} as Config
