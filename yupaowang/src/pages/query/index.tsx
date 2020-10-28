import Taro, { useState } from '@tarojs/taro'
import { View, Input, Button, Text } from '@tarojs/components'
import { SERVERPHONE } from '../../config'
import Msg, { ShowActionModal } from '../../utils/msg'
import { isPhone } from '../../utils/v'
import { queryAction } from '../../utils/request/index'
import { userQueryAuthMember } from '../../utils/request/index.d'
import './index.scss'

export interface DataType {
    phone:string,
}

export default function RealnameQuery(){
    const userCallPhone = ()=> {
        Taro.makePhoneCall({ phoneNumber: SERVERPHONE })
    }
    const [tel, setTel] = useState<string>('')
    // 是否显示人员信息
    const [selfintrone, setSelfintrone] = useState<boolean>(false)

    const [data, setData] = useState<userQueryAuthMember>({
        age: '',
        finally_login_address: '',
        occupations: [],
        register_address: '',
        tel: '',
        username: ''
    })
    // 提交
    const handleSubmission = ()=>{
        if (!isPhone(tel)) {
            Msg('请输入正确手机号')
            return false
        }
        const params = {
            tel
        }
        queryAction(params).then(res =>{
            let mycode = res.errcode;
            if(mycode == 'ok'){
                setData(res.member)
                setSelfintrone(true)
            }else if(res.errcode == 'auth_check'){
                ShowActionModal({ 
                    msg: res.errmsg,
                    success: function () {
                      Taro.navigateBack({
                        delta: 1
                      })
                    }
                })
            }else if(mycode == 'auth_fail' || mycode == 'auth_no'){
                Taro.showModal({
                    title: '温馨提示',
                    content:  res.errmsg,
                    cancelText:'取消',
                    confirmText:'去实名',
                    success(res) {
                        if (res.confirm) {
                            Taro.navigateTo({
                                url: '/pages/realname/realname',
                              })
                        } else if (res.cancel) {
                            Taro.navigateBack({
                                delta: 1
                            })
                        }
                    }
                })
            }else{
                ShowActionModal(res.errmsg)
            }
        })
    }
    return(
        <View className='query-container'>
            <View className='query-box flex-column'>
                 <Input
                    className='publish-list-input'
                    type='number'
                    maxLength={11}
                    placeholder='请输入查询手机号'
                    onInput={(e) => setTel(e.detail.value) }
                />
                <Button className="now-query-btn" onClick={handleSubmission}>立即查询</Button>
            </View>

            {selfintrone && <View className='realname-query-body'>
                <View className='query-common-list'>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>姓名</View>
                        <View className='query-list-right'>{data.username}</View>
                    </View>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>手机号码</View>
                        <View className='query-list-right'>{data.tel}</View>
                    </View>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>年龄</View>
                        <View className='query-list-right'>{data.age}</View>
                    </View>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>工种</View>
                        <View className='query-list-right'>
                            {data.occupations.map((v, i) => (
                                <Text className='labletu' key={i + i}>【{v}】 </Text>
                            ))}
                        </View>
                    </View>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>注册城市</View>
                        <View className='query-list-right'>{data.register_address}</View>
                    </View>
                    <View className='query-lists-item'>
                        <View className='query-list-left'>最近可能在的城市</View>
                        <View className='query-list-right'>{data.finally_login_address}</View>
                    </View>
                </View>
            </View>}
             <View className='realname-query-footer'>
                <View className="query-tips-title">温馨提示</View>
                <View  className="realname-query-words">   
                    <View>1.双方联系时，问对方在鱼泡招工实名认证过没有？如没有认证过,一定让他去认证通过后联系。 如有认证过，你输入对方电话号查询对方的姓名、民族、可能在的城市等信息，来帮助你做进一步的判断。 （鱼泡实名认证通过的，都是利用大数据排除了骗子库已有的骗子、同我们工作人员的经验为你筛选过一遍的。当然也不能完全排除就没有骗子了，所以你同对方对接的时候，还需要做好已下几步）</View>
                    <View>2.要求他同你微信视频聊天，视频里约定好条款，录下来，作为证据。</View>
                    <View>3.多问问对方建筑的专业问题，看看他专业与否，一上来就问工地地址，不问清楚工资 图纸等，就说能马上过来的，百分百是骗子。</View>
                    <View>4.一定不要轻易的告诉对方，工地的详细地址。</View>
                    <View>5.如果你发现同你联系的人，有任何问题，都可联系我们客服投诉（电话：<Text className='get-query-tel' onClick={() => userCallPhone()}>{SERVERPHONE}</Text>），确定后，我们将他加入骗子数据库，防止他接着骗人。</View>
                </View>
             </View>
        </View>
    )
}