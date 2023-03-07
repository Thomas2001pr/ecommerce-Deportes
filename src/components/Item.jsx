import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({info}) => {
  return (
    <>
      <Link to= {`/detalle/${info.id}`}>
      <div className='contenedor-p'>
         <img className='img-p' src={info.imagen} alt="" />
         <h2 className='nombre-p'>{info.producto}</h2>
         <p className='precio-p'>{info.precio}</p>
       </div>
       </Link>
 
    </>
    
  )
}

export default Item