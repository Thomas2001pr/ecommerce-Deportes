import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <header>
      <Link to="/">
       <h1 className='titulo-p'>T-Sports</h1>
      </Link>
      <div>
        <ul className='ul-nav'>
             <NavLink to="/category/camisetas">
               <button>Camisetas</button>
             </NavLink>
             <NavLink to="/category/calzado">
               <button>Calzado</button>
             </NavLink>
             <NavLink to="/category/balones">
               <button>Balones</button>
             </NavLink>
             <NavLink to="/category/inferiores">
               <button>Inferiores</button>
             </NavLink>
             <NavLink to="/category/accesorios">
               <button>Accesorios</button>
             </NavLink>
        </ul>
      </div>
     <CartWidget />
    </header>
    </>
  )
}

export default Navbar