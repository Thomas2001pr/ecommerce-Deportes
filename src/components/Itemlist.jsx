import React from 'react'
import Item from './Item'

const Itemlist = ({data = []}) => {
  return (
    data.map(datos => <Item  key={datos.id} info={datos} />)
  )
}

export default Itemlist