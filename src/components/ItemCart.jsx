import React from 'react'
import { userCartContext } from '../context/ShoppingCartContext'


const ItemCart = ({producto}) => {

const {removeProduct} = userCartContext();


  return (
    <div className='itemCart'>
        <img className='cart-img' src={producto.imagen} alt={producto.title} />
        <div className='cart-contenedor'>
            <p className='cart-Descripcion'>{producto.descripcion}</p>
            <p className='cart-info'>Cantidad: {producto.quantity}</p>
            <p className='cart-info'>Precio: {producto.price}</p>
            <p className='cart-info'>Subtotal: ${producto.quantity * producto.price}</p>
            <button className='eliminar' onClick={() => removeProduct(producto.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart