import React from 'react'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
     <Navbar />
     <ItemListContainer greeting={"Bienvenidos T-Sports "} />
    </>
  )
}

export default App