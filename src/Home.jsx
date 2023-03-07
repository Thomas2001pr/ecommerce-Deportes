import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='contenedor-home'>
         <img className='img-messi' src="https://pbs.twimg.com/media/FkR7YzMXwAIoaUH.jpg" alt="nothing is impossible" /> 

         <Link to= "/catalogo">
         <button className='btn-dm'>DESCUBRE MÁS</button>
         </Link>
       </div>
    </>
  )
}

export default Home