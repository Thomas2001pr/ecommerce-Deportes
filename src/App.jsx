
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Home from './Home'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'









const App = () => {
  

  return (
    <BrowserRouter>
     <ShoppingCartContext>
       <Navbar />
         <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/catalogo" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoriasId" element={<ItemListContainer/>}/>
            <Route exact path="/detalle/:detalleId" element={<ItemDetailConteiner/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
         </Routes>

     </ShoppingCartContext>

    </BrowserRouter>
  )
}

export default App