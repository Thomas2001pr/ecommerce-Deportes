import React from 'react'
import { userCartContext } from '../context/ShoppingCartContext'


const ItemCart = ({producto}) => {

const {removeProduct} = userCartContext();


  return (
    <div className='itemCart'>
        <img src={producto.imagen} alt={producto.title} />
        <div>
            <p>Titulo: {producto.title}</p>
            <p>Cantidad: {producto.quantity}</p>
            <p>Precio: {producto.price}</p>
            <p>Subtotal: ${producto.quantity * producto.price}</p>
            <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart