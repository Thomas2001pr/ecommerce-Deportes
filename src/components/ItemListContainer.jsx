import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import Itemlist from './Itemlist';
import {useParams} from 'react-router-dom'

const datos = [
  {id: 1,imagen:"https://px.fotos.cdn.0223.com.ar/f/112022/1667486070000/266941_Thumb_1246751.webp?cw=300&ch=300&extw=jpg", producto:"Botin", category:"calzado"},
  {id: 2,imagen:"https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg&height=300&width=300", producto:"Camiseta",category:"camisetas"},
  {id: 3,imagen:"https://media.futbolmania.com/media/catalog/product/cache/1/fm_imagen_b1/300x/9df78eab33525d08d6e5fb8d27136e95/H/B/HB9216_pantalon-corto-color-negro-adidas-argentina-2022-2023_1_completa-frontal.jpg", producto:"Short",category:"inferiores"},
  {id: 4,imagen:"https://hapi.cultofutbol.com/medias/balon-de-futbol-adidas-mundial-qatar-2022-pro-cf-H57783-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjk4OHxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDliLzEwNzk5OTMwMTc5NjE0LmpwZ3w5MTdlMTg3ZGQyYWYxZDdlZDE5ZWZjZmVmOWFhZTAyNGRhNzNkMDM2ZGNhNjUwNDExMzkyOWZlZmJlMGZmNWM5", producto:"Balon",category:"balones"},
  {id: 5,imagen:"https://sportingio.vtexassets.com/arquivos/ids/613524-300-300?v=1760133236&width=300&height=300&aspect=true", producto:"Accesorios",category:"accesorios"}
];




const ItemListContainer = ({greeting}) => {



const {categoriasId}= useParams();

const [data, setData] = useState([])


useEffect(()=> {
  const getDatos = new Promise(resolve => {
    setTimeout(()=>{
      resolve(datos)
    },1000)
  });
    
  
  
  if(categoriasId){
    getDatos.then( resolve => setData(resolve.filter(datos => datos.category === categoriasId)));
  }else{
    getDatos.then(resolve => setData(resolve))
  }

},[categoriasId]);








async function fetchingData() {
  try{
    const datosFetched = await getDatos();
    setData(datosFetched)
  }catch(err) {
    console.log(err)
  }

  
}

fetchingData();










const onAdd = (valor) =>{
    console.log(valor)
}




  return (
    <>
     <Itemlist data={data} />
    </>
  )
}

export default ItemListContainer