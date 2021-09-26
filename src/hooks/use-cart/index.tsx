import { Extra } from 'pages/products/[slug]'
import React, { useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/formatPrice'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const CART_KEY = 'BURGER::::PROJECT::::CART_ITEMS'

export type CartProviderProps = {
  children: React.ReactNode
}

export type CartItem = {
  id: number
  name: string
  description: string
  category: string
  price: number
  extra?: Extra[]
}

export type CartContextData = {
  // items: CartItem[]
  // quantity: number
  total: string
  isInCart: (cartItem: CartItem) => boolean
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (cartItem: CartItem) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  // items: [],
  // quantity: 0,
  total: 'R$0,00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
}

const CartContext = React.createContext<CartContextData>(
  CartContextDefaultValues
)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) setCartItems(data)
  }, [])

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  const saveCart = (cartItems: CartItem[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (cartItem: CartItem) => {
    const newCartItems = [...cartItems, cartItem]
    saveCart(newCartItems)
  }

  const removeFromCart = (cartItem: CartItem) => {
    const newCartItems = cartItems.filter(itemId => itemId.id !== cartItem.id)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  const isInCart = (cartItem: CartItem) =>
    cartItem ? cartItems.includes(cartItem) : false

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        total: formatPrice(total || 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
