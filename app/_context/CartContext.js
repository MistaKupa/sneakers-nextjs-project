"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkoutProgress, setCheckoutProgress] = useState("");

  const totalCartPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  function addToCart(product, quantity) {
    setCart((prevCart) => {
      const isInCart = prevCart.find((item) => item.id === product.id);

      if (isInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      if (!productId) return;

      return prevCart.filter((item) => item.id !== productId);
    });
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity === 0) {
      alert("Are you sure you want to remove product?");
      removeFromCart(productId);
    }

    if (newQuantity > 0 && newQuantity <= 10) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        checkoutProgress,
        setCheckoutProgress,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
