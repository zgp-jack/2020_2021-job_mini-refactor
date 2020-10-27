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
    title: '未成交',
    id: 'being'
  },
  {
    title: '已成交',
    id: 'end'
  },
]

export default HeaderList