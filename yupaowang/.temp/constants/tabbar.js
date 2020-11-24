export const HOME = 'home';
export const RECRUIT = 'recruit';
export const RESUME = 'resume';
export const MEMBER = 'member';
export const USED = 'used';
const types = [HOME, RECRUIT, RESUME, MEMBER];
export function typeInTabbar(val) {
  return types.includes(val);
}