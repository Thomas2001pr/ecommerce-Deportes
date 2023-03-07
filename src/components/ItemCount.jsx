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
      <h2>{cantidad}</h2>
        <button disabled={cantidad >= stock} onClick={sumarCantidad}>Agregar</button>
        <button disabled={cantidad <= 1} onClick={restarCantidad}>Restar</button>
        <button onClick={reset}>Vaciar</button>
        <button disabled={stock <= 0} onClick={()=> onAdd(cantidad)} >Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount