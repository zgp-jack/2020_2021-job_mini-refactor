interface HeaderListItem {
  title: string,
  id: string
}

const HeaderList: HeaderListItem[] = [
  {
    title: '全部',
    id: 'all'
  },
  {
    title: '交易中',
    id: 'being'
  },
  {
    title: '审核中',
    id: 'checking'
  },
  {
    title: '未通过',
    id: 'fail'
  }, {
    title: '已成交',
    id: 'end'
  }
]

export default HeaderList