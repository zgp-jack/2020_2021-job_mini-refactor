export const HOME = 'home'
export const RECRUIT = 'recruit'
export const RESUME = 'resume'
export const MEMBER = 'member'
export const USED = 'used'

const types: string[] = [HOME, RECRUIT, RESUME, MEMBER]

export function typeInTabbar(val: string): boolean{
  return types.includes(val)
}