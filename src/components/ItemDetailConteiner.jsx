import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';




const datos = [
  {id: 1,imagen:"https://px.fotos.cdn.0223.com.ar/f/112022/1667486070000/266941_Thumb_1246751.webp?cw=300&ch=300&extw=jpg", producto:"Botin",price:16000, category:"calzado",descripcion:"Botines F11 AdidasFutbol Qatar Edition"},
  {id: 2,imagen:"https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg&height=300&width=300", producto:"Camiseta",price:23000,category:"camisetas", descripcion:"Camiseta Argentina Seleccion Titular Qatar 2022 Version Jugador"},
  {id: 3,imagen:"https://media.futc:\Users\HP\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.htmlbolmania.com/media/catalog/product/cache/1/fm_imagen_b1/300x/9df78eab33525d08d6e5fb8d27136e95/H/B/HB9216_pantalon-corto-color-negro-adidas-argentina-2022-2023_1_completa-frontal.jpg", producto:"Short",price:11000,category:"inferiores",descripcion:"Short Argentina Seleccion Qatar 2022 Version Jugador"},
  {id: 4,imagen:"https://hapi.cultofutbol.com/medias/balon-de-futbol-adidas-mundial-qatar-2022-pro-cf-H57783-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjk4OHxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDliLzEwNzk5OTMwMTc5NjE0LmpwZ3w5MTdlMTg3ZGQyYWYxZDdlZDE5ZWZjZmVmOWFhZTAyNGRhNzNkMDM2ZGNhNjUwNDExMzkyOWZlZmJlMGZmNWM5", producto:"Balon",price:30000,category:"balones",descripcion:"Balon de futbol Qatar 2022 primeras fases"},
  {id: 5,imagen:"https://sportingio.vtexassets.com/arquivos/ids/613524-300-300?v=1760133236&width=300&height=300&aspect=true", producto:"Medias",price:11000,category:"accesorios", descripcion:"Medias Titulares Argentina Seleccion Qatar 2022"},
];



const ItemDetailConteiner = () => {

const [data,setData] = useState({})
const {detalleId} = useParams();


useEffect(() => {
 const getData = new Promise(resolve => {
  setTimeout(()=>{
    resolve(datos)
  },1000);
 });



 getData.then( resolve => setData(resolve.find(datos => datos.id === parseInt(detalleId))))

},[])






  return (
    <>
    <ItemDetail data={data} />
    
    </>
  )
}

export default ItemDetailConteiner