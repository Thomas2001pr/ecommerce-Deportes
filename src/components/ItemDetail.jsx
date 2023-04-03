import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { userCartContext } from '../context/ShoppingCartContext';


const ItemDetail = ({data}) => {
 


  const [goToCart, setgoToCart] = useState(false);
  const {addProduct} = userCartContext();





  const onAdd = (quantity) =>{
    setgoToCart(true);
    addProduct(data,quantity)
}



  return (
    
    <div className="container">
      <div className="detail">
        <div className="content">
          <img className='detalle-img' src={data.imagen} alt="" />
          <div className='detalle-pos'>

          <h2 className='detalle-n'>{data.producto}</h2>
          <h4 className='detalle-p'>{data.precio}</h4>
          <p className='detalle-prf'>{data.descripcion}</p>
          {
            goToCart
            ? <Link to="/cart" className='detalle-t'>Terminar Compra</Link>
            : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail