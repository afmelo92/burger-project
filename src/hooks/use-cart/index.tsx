import React, { useContext, useEffect, useState } from 'react'
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
  extras?: string[]
}

const CartContext = React.createContext({})

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) setCartItems(data)
  }, [])

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
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
