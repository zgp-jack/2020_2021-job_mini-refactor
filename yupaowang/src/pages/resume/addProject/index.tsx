import Taro, { useState, useEffect, Config, useRouter } from '@tarojs/taro'
import { View, Picker, Textarea, Input, Text } from '@tarojs/components'
import { AtInput} from 'taro-ui';
import ImageView from '../../../components/imageview'
import UploadImgAction from '../../../utils/upload'
import WordsTotal from '../../../components/wordstotal'
import Msg, { SubPopup } from '../../../utils/msg'
import { SubscribeToNews } from '../../../utils/subscribeToNews';
import { resumesProjectAction, resumesDelProjectAction } from '../../../utils/request/index'
import AREAS from '../../../models/area'
import { isVaildVal } from '../../../utils/v'
import { useSelector } from '@tarojs/redux'
import './index.scss'

export interface ImageDataType {
  item: ImageItem[]
}
export interface ImageItem {
  url: string,
  httpurl: string
}
export interface AreasType{
  id: string,
  pid: string,
  name: string,
  ad_name: string,
  has_children: number,
  children: ChildItems[],
  value:string,
  label:string,
  level:number,
}
export interface ChildItems {
  id: string,
  pid: string,
  name: string,
  ad_name: string,
  value:string,
  label:string,
  level:number,
}

export default function AddProjectPage() {
  const router: Taro.RouterInfo = useRouter()
  // 获取存入的公用内容
  const useSelectorItem = useSelector<any, any>(state => state)
  // url传递过来的值
  let { type, id } = router.params;
  // const projectData:any=[];
  // const { projectData } = useContext(context);
  // const { area } = useContext(contextItem);
  // console.log(area,'areaareaarea')
  // 默认字数
  const [num, setNum] = useState<number>(0)
  //项目名称
  const [name,setName]= useState<string>('')
  // 开工时间
  const [startTime, setStartTime] = useState<string>('')
  // endTime
  const [endTime, setEndTime] = useState<string>('')
  // 项目详情
  const [textarea, setTextarea] = useState<string>('')
  // 图片
  const [image, setImage] = useState<ImageDataType>({
    item: [],
  })
  // 所有的省，市
  const [multiArrayone, setMultiArrayone] = useState<any[][]>([])
  // 省和第一个市
  const [multiArray, setMultiArray] = useState<any[][]>([])
  // 省和市的值
  const [multiIndex, setMultiIndex] = useState<number[]>([0,0])
  // 修改值
  const [edit, setEdit] = useState<number>(0)
  // 省
  const [allprovinces, setAllprovinces] = useState<any[]>([])
  // 省和市中文
  const [multiIndexvalue, seMultiIndexvalue] = useState<string>('')
  // 选择后省和市中文
  const [allpro, setAllpro] = useState<string>('')
  //修改项目id
  const [project_uuid, setProject_uuid] = useState<string>('')
  useEffect(()=>{
    let data:string[] = [];
    let lastData:string[] = [];
    let allChildren:any = [];
    let provice:any = [];
    let city:any=[];
    let lastCity: any = [];
    // ☝第一次点开数据
    for (let i = 0; i < AREAS.length;i++){
      if (AREAS[i].pid !== '0') {
        provice.push(AREAS[i]);
        data.push(AREAS[i].name);
        let allList:string[] = [];
        if (AREAS[i].children.length){
          city.push(AREAS[i].children);
          for (let j = 0; j < AREAS[i].children.length;j++){
            if (AREAS[i].children[j].pid!=='1'){
              allList.push(AREAS[i].children[j].name);
            }
          }
        }else{
          city.push([AREAS[i]]);
          allList.push(AREAS[i].name);
        }
        allChildren.push(allList);
      }
      lastData = [AREAS[1].name]
    }
    for (let i = 0; i < provice.length; i++) {
      if (provice[i].children) {
        for (let j = 0; j < provice[i].children.length; j++) {
          if (provice[i].children[j].pid === '1') {
            provice[i].children.splice(provice[i].children[j], 1)
          }
        }
      }
    }
    console.log(provice,'provice')
    setAllprovinces(provice)
    // 所有的省，市
    console.log([data, allChildren])
    setMultiArrayone([data, allChildren])
    //省市obj
    // setObjectMultiArray([provice,city]);
    // 省
    // setProvicemore(data);
    if (edit === 0){
      // 省和第一个市
      setMultiArray([data, lastData])
    }

    // 每次修改后就刷新内容，第一次后就不再把值赋上去
    if (type && edit < 1) {
      Taro.setNavigationBarTitle({
        title: '修改项目经验'
      })
    // 内容回填
      const dataItem = JSON.parse(JSON.stringify(useSelectorItem.Myresume));
      if (dataItem.project) {
      console.log(data);
      let arr: any = [];
      setImage({ item: arr })
        const list = dataItem.project[type];
      for (let i = 0; i < list.image.length; i++) {
        for (let j = 0; j < list.images.length; j++) {
          let obj = {
            httpurl: '',
            url: '',
          };
          if (i === j) {
            obj.httpurl = list.image[i];
            obj.url = list.images[i]
            arr.push(obj);
          }
        }
      }
      setName(list.project_name);
      setStartTime(list.start_time);
      setEndTime(list.completion_time);
      setTextarea(list.detail);
      setNum(list.detail.length);
      setProject_uuid(list.uuid)
      const userArr = [list.province, list.city]
      let one = 0;
      let two = 0;
      // 第一项
      for (let i = 0; i < AREAS.length; i++) {
        if (userArr[0] == AREAS[i].id) {
          // 因为有全国要减1
          one = i - 1;
        }
      }

      // 第二项
      for (let i = 0; i < AREAS.length; i++) {
        for (let j = 0; j < AREAS[i].children.length; j++) {
          if (userArr[1] == AREAS[i].children[j].id) {
            lastCity = AREAS[i].children.map(v => v.name);
            two = j
          }
        }
      }
      setMultiIndex([one, two])
      setAllpro([list.province, list.city].join(','))
      setMultiArray([data, lastCity])
      seMultiIndexvalue(list.province_name+list.city_name)
    }
  }

  }, [edit])
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) {
        setImage({ ...image, item: [...image.item, imageItem] })
      } else {
        image.item[i] = imageItem
        setImage({ ...image })
      }
    })
  }
  const handleTextarea = (e: any) => {
    let val: string = e.detail.value;
    setTextarea(val);
    setNum(val.length);
  }
  // 第一列滑动
  const handlebindcolumnchange = (e)=>{
    let obj ={
      multiArray,
      multiIndex
    }
    console.log(e,'e')
    obj.multiIndex[e.detail.column] = e.detail.value;
    console.log(obj.multiIndex[e.detail.column],'obj.multiIndex[e.detail.column]s')
    switch (e.detail.column) {
      case 0:
        switch (obj.multiIndex[0]) {
          case obj.multiIndex[0]:
            obj.multiArray[1] = multiArrayone[1][obj.multiIndex[0]];
            break;
        }
        obj.multiIndex[1] = 0;
        break;
    }
    console.log(obj.multiArray,'obj.multiArray');
    console.log(obj.multiIndex,'obj.multiIndex')
    setMultiArray(obj.multiArray);
    setMultiIndex(obj.multiIndex);
    // 修改值
    setEdit(edit+1);
  }
  // 确定
  const handleChange = (e)=>{
    setMultiIndex(e.detail.value)
    let allpro = '';
    if (allprovinces[multiIndex[0]].children.length != 0) {
      allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].children[multiIndex[1]].id
      seMultiIndexvalue(allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name)
    } else {
      allpro = allprovinces[multiIndex[0]].id
      seMultiIndexvalue(allprovinces[multiIndex[0]].name)
    }
    setAllpro(allpro);
  }
  // 继续
  const handlContinue = (type:number)=>{
    if (!isVaildVal(name, 3, 12)){
      Taro.showModal({
        title: '温馨提示',
        content: '请填写真实证书名称，3-12字，必须含有汉字',
        showCancel: false,
      })
      return;
    } 
    if (!startTime){
      Taro.showModal({
        title: '温馨提示',
        content: '请选择开工时间',
        showCancel: false,
      })
      return;
    }
    if (!endTime) {
      if (new Date(startTime).getTime() > new Date(endTime).getTime()){
        Taro.showModal({
          title: '温馨提示',
          content: '请选择完工时间（完工时间必须大于开工时间',
          showCancel: false,
        })
        return;
      }
    }
    if (!allpro) {
      Taro.showModal({
        title: '温馨提示',
        content: '请选择项目所在地区',
        showCancel: false,
      })
      return
    }
    if (!isVaildVal(textarea, 15, 500)) {
      Taro.showModal({
        title: '温馨提示',
        content: '请填写真实项目介绍，15-500字，必须含有汉字',
        showCancel: false,
      })
      return
    }
    let images: string[] = image.item.map(item => item.url)
    let params = {
      completion_time: endTime,
      start_time: startTime,
      project_name: name,
      detail: textarea,
      province: String(allpro.split(",")[0]),
      city: String(allpro.split(",")[1]),
      image: images,
      resume_uuid: id,
      project_uuid,
    }
    console.log(params);
    resumesProjectAction(params).then(res => {
      if (res.errcode === 'ok') {
        SubscribeToNews('resume', () => {
          SubPopup({
            tips: res.errmsg,
            callback: () => {
              // 保存继续添加
              if (type === 0) {
                setStartTime('请选择开工时间');
                setEndTime('请选择完工时间');
                setTextarea('');
                setImage({ item: [] });
                setNum(0)
                seMultiIndexvalue('')
                // setAddress('请选择所在地区')
                setAllpro('')
                setName('')
                // 保存
              } else {
                Msg(res.errmsg);
                Taro.navigateBack({
                  delta: 1
                })
              }
            }
          })
        })
      } else {
        Msg(res.errmsg);
      }
    })
  }
  const handleDel = ()=>{
    Taro.showModal({
      title: '提示',
      content: `项目经验删除后，将无法恢复`,
      showCancel: true,
      success(res) {
        if (res.confirm) {
          let params={
            project_uuid: project_uuid,
          }
          resumesDelProjectAction(params).then(res=>{
            if(res.errcode == 'ok'){
              Taro.navigateBack({
                delta: 1
              })
            }else{
              Msg(res.errmsg)
            }
          })
        }
      }
    })
  }
  console.log(multiArray,'xxv')
  return (
    <View className='addProjectPage'>
    <View className='content'>
      <AtInput
        name='value'
        title='项目名称:'
        type='text'
        placeholder='请输入项目名称'
        maxLength={12}
        value={name}
        onChange={(e) => { setName(e.toString())}}
      />
        <View className='publish-recruit-card'>
        <Picker
          mode='date'
          onChange={(e) => { setStartTime(e.detail.value) }}
          value={startTime}
        >
          <View className='publish-list-item'>
              <Text className='pulish-list-title'>开工时间</Text>
            :<Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择开工时间'
              value={startTime}
            />
          </View>
        </Picker>
      </View>
        <View className='publish-recruit-card'>
        <Picker
          mode='date'
          onChange={(e) => { setEndTime(e.detail.value) }}
          value={endTime}
        >
          <View className='publish-list-item'>
            <Text className='pulish-list-title'>完工时间</Text>
            :<Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择完工时间'
              value={endTime}
            />
          </View>
        </Picker>
      </View>
        <View className='publish-recruit-card'>
        <Picker
          mode='multiSelector'
          onChange={(e)=>{handleChange(e)}}
          value={multiIndex}
          range={multiArray}
          onColumnChange={(e) => handlebindcolumnchange(e)}
        >
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>所在地区</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择你的所在地区'
                value={multiIndexvalue}
              />
            </View>
        </Picker>
      </View>
      <View className='feedback-content-middle'>
        <View className='feedback-content-middle-box'>
          <View>项目详情:</View>
          <Textarea
            className='feedback-content-middle-textarea'
            value={textarea}
            onInput={(e) => handleTextarea(e)}
            maxlength={500}
            placeholder='主要描述工作中的项目情况...'
          />
          <View className='feedback-wordsTotal'>
            <WordsTotal num={num} />
          </View>
        </View>
      </View>
      <View className='feedback-content-middle-imgBox'>
        {image.item &&
          <ImageView images={image.item} max={6} userUploadImg={userUploadImg} />
        }
      </View>
    </View>
      <View className='footer'>
        {type ?
          <View className='left' onClick={() => handleDel()}>删除</View>:
          <View className='left' onClick={()=>handlContinue(0)}>保存 继续添加</View>
        }
        <View className='right' onClick={()=>handlContinue(1)}>确认保存</View>
      </View>
    </View>
  )
}


AddProjectPage.config = {
  navigationBarTitleText: '新增项目经验',
} as Config