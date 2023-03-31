import React from 'react'
import { Link } from 'react-router-dom';
import { userCartContext } from '../context/ShoppingCartContext'
import ItemCart from './ItemCart';
import SendOrder from './SendOrder';




const Cart = () => {
const {cart,totalPrice} = userCartContext();


   if(cart.length === 0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to="/Cart">Hacer Compra</Link>
      
      </>
    );
   };

  return (
    <>{
      cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
    }
    <p className='totalPrice'>
       Total: {totalPrice()}
       <SendOrder/>
    </p>
    </>
  )
}

export default Cart