import React from 'react'

const ItemDetail = ({data}) => {
  return (
    
    <div className="container">
      <div className="detail">
        <div className="content">
          <img src={data.imagen} alt="" />
          <h2 className='detalle-n'>{data.producto}</h2>
          <h4 className='detalle-p'>{data.precio}</h4>
          <p className='detalle-prf'>{data.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail