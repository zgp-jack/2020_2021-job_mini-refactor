import Taro, { useEffect, useState, Config,useRouter } from '@tarojs/taro'
import { View, Text, Input, Form, Picker } from '@tarojs/components'
import AREAS from '../../../models/area'
import { useSelector } from '@tarojs/redux'
import Msg, { SubPopup } from '../../../utils/msg'
import { SubscribeToNews  } from '../../../utils/subscribeToNews';
import { resumesIntroduceAction } from '../../../utils/request/index'
import './index.scss'

interface ModelType {
  age: string,
  proficiency:string,
  personnel:string,
  address:string,
  type:string,
}
export default function PersonInfo() {
  const router: Taro.RouterInfo = useRouter()
  // 判断是新增还是编辑
  let { type } = router.params
  // 获取存入的公用内容
  const useSelectorItem = useSelector<any, any>(state => state)
  // const userInfo:any=[];
  const [formData, setFormData] = useState<ModelType>({
    age:'',
    proficiency:'',
    personnel:'',
    address:'',
    type:'1',
  })
  // 家乡
  const [multiIndex, setMultiIndex] = useState<number[]>([0, 0])
  const [allprovinces, setAllprovinces] = useState<any[]>([])
  // const [multiIndexvalue, seMultiIndexvalue] = useState<string>('请选择所在地区')
  const [allpro, setAllpro] = useState<string>('')
  const [multiArrayone, setMultiArrayone] = useState<any[][]>([])
  const [multiArray, setMultiArray] = useState<any[][]>([])
  const [edit, setEdit] = useState<number>(0)
  // 熟练度
  const [proficiency, setProficiency] = useState<string[]>([])
  // 人员构成
  const [personnel, setPersonnel] = useState<string[]>([])
  // 标签
  const [label,setLabel] = useState<any>([]);
  const [tag,setTag] = useState<any[]>([])
  const [ranks, setRanks] = useState<boolean>(false)
  //熟练度位置
  const [proficiencyIndex, setProficiencyIndex] = useState<number>(0);
  // 人员构成位置
  const [userIndex, setUserIndex] = useState<number>(0);
  useEffect(()=>{
    const AllItem = JSON.parse(JSON.stringify(useSelectorItem.Personnel));
    if (AllItem){
      console.log(AllItem)
      const proficiencyList = AllItem.prof_degree && AllItem.prof_degree.map(v=>v.name);
      setProficiency(proficiencyList);
      const personnel = AllItem.type && AllItem.type.map(v=>v.name);
      setPersonnel(personnel);
      const labelList = AllItem.label && AllItem.label.map(v=>{v.click = false; return v});
      setLabel(labelList);
    }
    let data: string[] = [];
    let lastData: string[] = [];
    let allChildren: any = [];
    let provice: any = [];
    let city: any = [];
    let lastCity:any=[];
    // ☝第一次点开数据
    for (let i = 0; i < AREAS.length; i++) {
      if (AREAS[i].pid !== '0') {
        provice.push(AREAS[i]);
        data.push(AREAS[i].name);
        let allList: string[] = [];
        if (AREAS[i].children.length) {
          city.push(AREAS[i].children);
          for (let j = 0; j < AREAS[i].children.length; j++) {
            if (AREAS[i].children[j].pid !== '1') {
              allList.push(AREAS[i].children[j].name);
            }
          }
        } else {
          city.push([AREAS[i]]);
          allList.push(AREAS[i].name);
        }
        allChildren.push(allList);
      }
      lastData = [AREAS[1].name]
    }
    for (let i = 0; i < provice.length;i++){
      if (provice[i].children){
        for (let j = 0; j < provice[i].children.length;j++){
          if (provice[i].children[j].pid === '1'){
            provice[i].children.splice(provice[i].children[j], 1)
          }
        }
      }
    }
    setAllprovinces(provice)
    // 所有的省，市
    setMultiArrayone([data, allChildren])
    if (edit === 0) {
      // 省和第一个市
      setMultiArray([data, lastData])
    }
    //内容回填
    if (type){
      const allItem = JSON.parse(JSON.stringify(useSelectorItem))
      if (allItem.Myresume) {
        const tagList = allItem.Personnel.label.map(v => {
          allItem.Myresume.info.tags.map(val => {
          if (v.id === val.id) {
            v.click = true;
          }
          return val;
        })
        return v;
      })
      setLabel(tagList);
      setTag(allItem.Myresume.info.tags);
        if (allItem.Myresume.info.type !== '1') {
        setRanks(true);
      }
      setFormData({
        age: allItem.Myresume.introduces.experience,
        proficiency: allItem.Myresume.introduces.prof_degree_str,
        personnel: allItem.Myresume.introduces.type_str,
        address: allItem.Myresume.introduces.hometown,
        type: allItem.Myresume.introduces.number_people,
      })
      const userArr = allItem.Myresume.introduces.hometown_id && allItem.Myresume.introduces.hometown_id.split(",");
      let one = 0;
      let two = 0;
      // 第一项
      for (let i = 0; i < AREAS.length; i++) {
        if (userArr[0] == AREAS[i].id) {
          // 因为有全国要减1
          one = i-1;
        }
      }

      // 第二项
      for (let i = 0; i < AREAS.length; i++) {
        for (let j = 0; j < AREAS[i].children.length; j++) {
          if (userArr[1] == AREAS[i].children[j].id) {
            lastCity = AREAS[i].children.map(v=>v.name);
            two = j
          }
        }
      }
      // 每次选择选择地址都要重新刷新一次，修改的时候刷新了一次就不再刷新，不然会一直覆盖设置的值
        console.log(allItem.Myresume.introduces.prof_degree,'allItem.Myresume.introduces.prof_degree')
        console.log(allItem.Myresume,'allItem.Myresume')
      if(edit<1){
        setMultiIndex([one, two])
        setAllpro(allItem.Myresume.introduces.hometown_id.split(","))
        if (allItem.Myresume.introduces.prof_degree > 0) {
          setProficiencyIndex(parseInt(allItem.Myresume.introduces.prof_degree) - 1)
      } else {
          setProficiencyIndex(parseInt(allItem.Myresume.introduces.prof_degree))
      }
        if (allItem.Myresume.introduces.prof_degree > 0) {
          setUserIndex(parseInt(allItem.Myresume.introduces.type)+1)
        } else {
          setUserIndex(parseInt(allItem.Myresume.introduces.type))
        }
      setMultiArray([data, lastCity])
      }
    }
  }
  }, [edit])
  const userEnterFrom = (e:any,key:string)=>{
    let value;
    if (key === 'proficiency'){
      value = proficiency[e.detail.value]
    } else if (key === 'personnel'){
      value = personnel[e.detail.value];
      if (e.detail.value !== '0'){
        setRanks(true)
      }else{
        setRanks(false)
      }
    }else{
      value = e.detail.value;
    }
    const state: ModelType = JSON.parse(JSON.stringify(formData))
    state[key] = value;
    setFormData(state);
  }
  // 确定
  const handleChange = (e) => {
    setMultiIndex(e.detail.value)
    let allpro = '';
    if (allprovinces[multiIndex[0]].children.length != 0) {
      allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].children[multiIndex[1]].id
      // seMultiIndexvalue(allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name)
      let value = allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name;
      let key = 'address'
      const state: ModelType = JSON.parse(JSON.stringify(formData))
      state[key] = value;
      setFormData(state);
    } else {
      allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].id
      // seMultiIndexvalue(allprovinces[multiIndex[0]].name)
      const state: ModelType = JSON.parse(JSON.stringify(formData))
      let value = allprovinces[multiIndex[0]].name;
      let key = 'address'
      state[key] = value;
      setFormData(state);
    }
    setAllpro(allpro);
  }
  // 第一列滑动
  const handlebindcolumnchange = (e) => {
    let obj = {
      multiArray,
      multiIndex
    }
    obj.multiIndex[e.detail.column] = e.detail.value;
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
    setMultiArray(obj.multiArray);
    setMultiIndex(obj.multiIndex);
    // 修改值
    setEdit(edit + 1);
  }
  const handleText = (v:any)=>{
    const list = JSON.parse(JSON.stringify(label));
    const tagList = JSON.parse(JSON.stringify(tag));
    const listItem=list.map(val=>{
      if(val.id === v.id){
        if(v.click){
          val.click = false;
          tagList.map((item,i)=>{
            if (val.label_name === item.label_name) {
              tagList.splice(i,1)
            }
            return item;
          })
        }else{
          if (tagList.length<3){
            val.click =true;
            tagList.push(val)
          }
        }
      }
      return val;
    })
    setTag(tagList);
    setLabel(listItem);
  }
  const handleSubmit = ()=>{
    const number_people = personnel.indexOf(formData.personnel);
    const prof_degree = proficiency.indexOf(formData.proficiency);
    const tags = (tag.map(v =>v.id)).toString();
    const params = {
      experience: formData.age,
      hometown: allpro,
      // 人员
      number_people: formData.type,
      // 熟练度
      prof_degree: prof_degree+1,
      // 标签
      tags,
      type: number_people + 1,
    };
    if (!allpro){}
    console.log(params,'parsadsa')
    if (!formData.age){
      Taro.showModal({
        title: '温馨提示',
        content: '请输入您的工龄',
        showCancel: false,
        })
      return;
    }
    if (!allpro) { 
      Msg('请选择家乡')
      return;
    }
    if (!formData.proficiency){
      Msg('请选择熟练度')
      return;
    }
    // 人员构成
    let strone = /^[0-9]{1,4}$/ig;
    // let strone = /[^0-9]/g;
    if (!formData.personnel) {
      Msg('请选择人员构成')
      return;
    }
    if (number_people >0) {
      if (!strone.test(formData.type)){
        if (~~formData.type - 0 <= 1){
          Taro.showModal({
            title: '温馨提示',
            content: '请输入您的队伍人数不得少于2人',
            showCancel: false,
          })
        }
      }
      return;
    }
    // console.log(params);
    // return;
    resumesIntroduceAction(params).then(res=>{
      if (res.errcode === 200) {
        SubscribeToNews("resume", () => {
          SubPopup({
            tips: res.errmsg,
            callback: () => {
              Taro.navigateBack({
                delta: 1
              })
            }
          })
        })
      }else{
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
        return
      }
    })
  }
  return(
    <View className='personInfo'>
      <Form className='formBox'>
        <View className='publish-recruit-card'>
          <View className='publish-list-item'>
            <Text className='pulish-list-title'>工龄</Text>
            :<Input
              className='publish-list-input'
              type='text'
              placeholder='请输入工龄'
              value={formData && formData.age}
              onInput={(e) => userEnterFrom(e, 'age')}
            />
          </View>
        </View>
        <View className='publish-recruit-card'>
            <Picker
              mode='multiSelector'
              onChange={(e) => handleChange(e)}
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
              placeholder='请选择你的家乡'
              value={formData && formData.address}
              // onInput={(e) => userEnterFrom(e, 'name')}
            />
          </View>
            </Picker>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            className='publish-list-input'
            mode='selector'
            onChange={(e) => userEnterFrom(e, 'proficiency')}
            value={proficiencyIndex}
            range={proficiency}
          >
            <View className='publish-list-item-sex'>
              <Text className='pulish-list-title'>熟练度</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择熟练度'
                value={formData && formData.proficiency}
              />
            </View>
          </Picker>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            className='publish-list-input'
            mode='selector'
            onChange={(e) => userEnterFrom(e, 'personnel')}
            value={userIndex}
            range={personnel}
          >
            <View className='publish-list-item-sex'>
              <Text className='pulish-list-title'>人员构成</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择人员构成'
                value={formData && formData.personnel}
              />
            </View>
          </Picker>
        </View>
        {ranks &&
          <View className='publish-recruit-card'>
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>队伍人数</Text>
              :<Input
                className='publish-list-input'
                type='number'
                maxLength={4}
                placeholder='请输入队伍人数'
                value={formData && formData.type}
                onInput={(e) => userEnterFrom(e, 'type')}
              />
            </View>
          </View>
        }
      </Form>
      <View className='personInfo-label'>
        <View className='personInfo-label-title'>为自己贴个标签，让老板更懂你(可选3个):</View>
        <View className='personInfo-label-list-box'>
          {label.map((v)=>(
            <Text 
              className={v.click ? 'personInfo-label-list-click' : 'personInfo-label-list'} 
              key={v.id}
              onClick={()=>handleText(v)}
              >{v.label_name}</Text>
          ))}
        </View>
      </View>
      <View className='personInfo-footer'>
        <View className='personInfo-footer-btn' onClick={handleSubmit}>保存资料</View>
      </View>
    </View>
  )
}


PersonInfo.config = {
  navigationBarTitleText: '人员信息',
} as Config