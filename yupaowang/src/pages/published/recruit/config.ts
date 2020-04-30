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
    title: '正在招',
    id: 'being'
  },
  {
    title: '已招满',
    id: 'end'
  },
]

export default HeaderList