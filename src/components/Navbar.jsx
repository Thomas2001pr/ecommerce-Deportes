import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
     <div>
      <h1>T-Sports</h1>
      <div>
        <ul>
            <button>Camisetas</button>
            <button>Botines</button>
            <button>Balones</button>
        </ul>
      </div>
    </div>
    <CartWidget />
    </>
  )
}

export default Navbar