import React, { createContext } from 'react'
import { useState,useContext } from 'react';
const CartContext = createContext([]);

 export const userCartContext = () => useContext(CartContext);

export const ShoppingCartContext = ({children}) => {
  const [cart,setCart] = useState([]);


  const addProduct = (item, quantity) =>{
   if (isInCart(item.id)) {
    setCart(cart.map(producto => {
      return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto
    }));
   }else {
    setCart([...cart,{...item,quantity}]);
   }
  }

  console.log('carrito', cart)


  const totalPrice = () => { return cart.reduce ((prev,act) => prev + act.quantity * act.price,0)};

  const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);



  
  const clearCart = () => setCart([]);
  const isInCart = (id) => { return cart.find(producto => producto.id === id) ? true : false; };
  const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id));








  return (
    <CartContext.Provider value={{ clearCart,isInCart,removeProduct,addProduct,totalPrice,totalProducts, cart }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartContext
