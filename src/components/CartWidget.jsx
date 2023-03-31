import React from 'react'
import { Link } from 'react-router-dom'
import { userCartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

const {totalProducts} = userCartContext();



  return (
    <>
      <div>
        <Link to="/cart">
        <span className="material-symbols-outlined">
          shopping_cart
        </span>
        <span>{totalProducts() || ''}</span>
        </Link>
      </div>
    </>
  )
}

export default CartWidget