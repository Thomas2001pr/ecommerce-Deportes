import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
      <div>
        <Link to="/cart">
        <span className="material-symbols-outlined">
          shopping_cart
        </span>
        <span>5</span>
        </Link>
      </div>
    </>
  )
}

export default CartWidget