export const HOME: string = 'home'
export const RECRUIT: string = 'recruit'
export const RESUME: string = 'resume'
export const MEMBER: string = 'member'
export const USED: string = 'used'

const types: string[] = [HOME, RECRUIT, RESUME, MEMBER]

export function typeInTabbar(val: string): boolean{
  return types.includes(val)
}