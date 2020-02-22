export const HOME = 'home'
export const RECRUIT = 'recruit'
export const RESUME = 'resume'
export const MEMBER = 'member'

const types: string[] = [HOME, RECRUIT, RESUME, MEMBER]

export function typeInTabbar(val: string): boolean{
  return types.includes(val)
}