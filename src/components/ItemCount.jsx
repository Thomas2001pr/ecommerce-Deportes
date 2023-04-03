import React,{useState} from 'react'

const ItemCount = ({initial,stock,onAdd}) => {

     const  [cantidad,setCantidad] = useState(initial)

     const sumarCantidad = () => {
        setCantidad (cantidad + 1);
     }

     const restarCantidad = () => {
        setCantidad (cantidad - 1);
     }

     

     const reset = () => {
        setCantidad (0);
     }


  return (
    <>
      <div>
      <h2 className='detalle-num'>{cantidad}</h2>
        <button className='agregar' disabled={cantidad >= stock} onClick={sumarCantidad}>+</button>
        <button className='restar' disabled={cantidad <= 1} onClick={restarCantidad}>-</button>
        <button className='vaciar' onClick={reset}>Vaciar</button>
        <button className='agregar-c' disabled={stock <= 0} onClick={()=> onAdd(cantidad)} >Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount