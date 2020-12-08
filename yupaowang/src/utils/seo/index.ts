import { filterClassifyDataResultReduce } from '../../reducers/filter_classify'
import { getListFilterData } from '../request'
import { filterClassifyResultFleamarketTree } from '../request/index.d'

// 当前二手交易 全部分类下是没有子类的，但是对应的m端有一个参数代表全部分类下面的子类
// http://m.yupao.com/ershou/sichuan_quanbufenlei_purpose/
export const PURPOSE: string = 'purpose'

interface PAGESEOINFO {
  title: string,
  keywords: string,
  description: string
}

const DEFAULTUSEDSEOINFO: PAGESEOINFO = {
  title: '工地二手交易_工程机械二手买卖_工程设备废料回收_建筑资质租用转让—鱼泡网',
  keywords: '工地二手交易,工程机械二手买卖,工程设备废料回收,建筑资质租用转让',
  description: '建筑工地二手交易板块，为建筑工程工人、老板、公司提供二手工程机械、工程设备、建筑材料废料、二手电动工具、建筑资质租用转让的信息。方便卖家能很快的找到合适买家，让买家能收到合适的工程二手材料。'
}

// 获得二手交易页面seo信息
export function getUsedListSeoInfo(params, filterData: filterClassifyDataResultReduce): PAGESEOINFO {
  // 如果有城市信息就代表当前页面被分享，需要动态组成 seo信息
  if (params.area) {
    // 先判断redux中是否已经有值 没有就请求新数据 有就直接遍历
    if (filterData.isSet) {
      return {
        ...detailUsedListSeoInfo(params, filterData.fleamarketTree)
      }
    } else {
      getListFilterData().then(res => {
        return {
          ...detailUsedListSeoInfo(params, res.data.fleamarketTree)
        }
      })
    }
  }
  // 默认返回的seo信息
  return { ...DEFAULTUSEDSEOINFO }
}

// 返回二手的seo信息  遍历数据
export function detailUsedListSeoInfo(params, fleamarketTree: filterClassifyResultFleamarketTree[]): PAGESEOINFO {
  let areaText: string = '全国'
  let classifyText: string = '二手交易'
  let attributeText: string = ''
  // 如果说能走到该函数，说明页面都是带了参数，那我们直接给默认值
  const { area = 'quanguo', classify = 'quanbufenlei', attribute = PURPOSE, keywords = '' } = params
  // 直接判断是否是全部分类，如果是我们就返回全部类型的seo信息
  if (classify == 'quanbufenlei') {
    return {
      title: `${areaText}工地二手交易_工程机械二手买卖_工程设备废料回收_建筑资质租用转让_-鱼泡网`,
      description: `${areaText}建筑工地二手交易${areaText}板块,为${areaText}建筑工程工人、老板、公司提供二手工程机械、工程设备、建筑材料废料、二手电动工具、建筑资质租用转让的信息。方便卖家能很快的找到合适买家,让买家能收到合适的工程二手材料-鱼泡网`,
      keywords: `${areaText}工地二手交易,${areaText}工程机械二手买卖,${areaText}工程设备废料回收,${areaText}建筑资质租用转让-鱼泡网`
    }
  }
  // 否则就根据参数去查找二手交易类别信息
  let classifyInfoIndex = fleamarketTree.findIndex(item => item.letter == classify)
  // 如果找到了就查找二手类别 并将类别改成查找到的
  if (classifyInfoIndex !== -1) {
    classifyText = fleamarketTree[classifyInfoIndex].name
    // 如果说是全部分类 那我们直接返回对应的seo信息
    if (classify != attribute){
      let attributeInfo = fleamarketTree[classifyInfoIndex].attributes.find(item => item.letter == attribute)
      if (attributeInfo){
        attributeText = attributeInfo.name
      }
    }
    return {
      title: `${areaText}工地${classifyText}二手交易_${classifyText}二手买卖_${classifyText}-鱼泡网`,
      description: `${areaText}建筑工地${classifyText}二手交易板块,为${areaText}建筑工程工人、老板、公司提供${attributeText}${classifyText}信息、${attributeText}${classifyText}二手交易、${attributeText}${classifyText}二手买卖的信息。方便卖家能很快的找到合适买家,让买家能收到合适的工程二手材料-鱼泡网`,
      keywords: `${areaText}工地${classifyText}二手交易,${classifyText}二手买卖,${classifyText}-鱼泡网`
    }
    
  } 
  
  return { ...DEFAULTUSEDSEOINFO }
  
}