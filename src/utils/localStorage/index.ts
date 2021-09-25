import { CartItem } from 'hooks/use-cart'

const APP_KEY = 'BURGERPROJECT'

export function setStorageItem(key: string, value: CartItem[]) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)

  return window.localStorage.setItem(`${APP_KEY}::::${key}`, data)
}

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return
  const data = window.localStorage.getItem(`${APP_KEY}::::${key}`)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}
