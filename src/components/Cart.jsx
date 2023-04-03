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
      <div className='cont-vacio'>

      <p className='sin-elementos'>¡No hay elementos en el carrito!</p>
      <Link to="/catalogo" className='comprar'>Hacer Compra</Link>
      
      </div>
      </>
    );
   };

  return (
    <>{
      cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
    }
    <p className='totalPrice'>
       Total: ${totalPrice()}
       <SendOrder/>
    </p>
    </>
  )
}

export default Cart