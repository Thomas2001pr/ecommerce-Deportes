import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='contenedor-home'>
         <img className='img-messi' src="https://pbs.twimg.com/ext_tw_video_thumb/1604535678297153541/pu/img/pvxRa2V_NTjwqSVb.jpg" alt="nothing is impossible" /> 

         <Link to= "/catalogo">
         <button className='btn-dm'>DESCUBRE MÁS</button>
         </Link>
       </div>
    </>
  )
}

export default Home