export interface DataType {
  info: {
    username: string,
    authentication: string,
    certificate_show: number,
    nation: string,
    address: string,
    introduce: string,
    miniInfoOccupations: [],
  },
  introduces: {
    hometown: string,
    experience_str: string,
    prof_degree_str: string,
    type_str: string,
    number_people: string,
    tags: any[],
  },
  project: any[],
  certificates: any[],
  content: {
    show_tips: number,
  }
}