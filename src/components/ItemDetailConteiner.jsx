import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';




const datos = [
  {id: 1,imagen:"https://px.fotos.cdn.0223.com.ar/f/112022/1667486070000/266941_Thumb_1246751.webp?cw=300&ch=300&extw=jpg", producto:"Botin",price:16000, category:"calzado",descripcion:"Botines/tacos F11 Predador Match AdidasFutbol Qatar Edition"},
  {id: 2,imagen:"https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg&height=300&width=300", producto:"Camiseta Argentina Titular",price:23000,category:"camisetas", descripcion:"Camiseta Argentina Seleccion Titular Qatar 2022 Version Jugador"},
  {id: 3,imagen:"https://media.futbolmania.com/media/catalog/product/cache/1/fm_imagen_b1/300x/9df78eab33525d08d6e5fb8d27136e95/H/B/HB9216_pantalon-corto-color-negro-adidas-argentina-2022-2023_1_completa-frontal.jpg", producto:"Short",price:11000,category:"inferiores",descripcion:"Pantalon Argentina Seleccion Titular Qatar 2022 Version Jugador"},
  {id: 4,imagen:"https://hapi.cultofutbol.com/medias/balon-de-futbol-adidas-mundial-qatar-2022-pro-cf-H57783-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjk4OHxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDliLzEwNzk5OTMwMTc5NjE0LmpwZ3w5MTdlMTg3ZGQyYWYxZDdlZDE5ZWZjZmVmOWFhZTAyNGRhNzNkMDM2ZGNhNjUwNDExMzkyOWZlZmJlMGZmNWM5", producto:"Balon",price:30000,category:"balones",descripcion:"Balon de futbol COPA MUNDIAL FIFA Qatar 2022 primeras fases"},
  {id: 5,imagen:"https://sportingio.vtexassets.com/arquivos/ids/613524-300-300?v=1760133236&width=300&height=300&aspect=true", producto:"Medias",price:11000,category:"accesorios", descripcion:"Medias Titulares Argentina Match jugador Seleccion Qatar 2022"},
  {id: 6,imagen:"https://i.pinimg.com/474x/35/7c/df/357cdf7df7c7c83b025f0d55c685574d.jpg", producto:"Botines Predador",price:25000,category:"calzado", descripcion:"Botines Predador con Tapones Futbol Profesional modelo 20/21"},
  {id: 7,imagen:"https://cdn.shopify.com/s/files/1/0625/4647/7113/products/WhatsAppImage2023-03-07at21.11.31_1_300x.jpg?//v=1678235158", producto:"Camiseta Argentina Alternativa",price:23000,category:"camisetas", descripcion:"Argentina Seleccion Altern/Suplente Qatar 2022 Version Jugador"},
  {id: 8,imagen:"https://showsport.vtexassets.com/arquivos/ids/749208-300-auto?v=1764201810&width=300&height=auto&aspect=true", producto:"Short Boca Juniors",price:20000,category:"inferiores", descripcion:"Short liso Boca Juniors gris Suplente modelo PreMatch 22/23"},
  {id: 9,imagen:"https://julysportcenter.com/wp-content/uploads/2022/02/H57808-1-300x300.jpg", producto:"Balon Champions League",price:28000,category:"balones", descripcion:"Balon Champions League Entreno Lisboa 2020 cuero PreMatch"},
  {id: 10,imagen:"https://showsport.vtexassets.com/arquivos/ids/793417-300-auto?v=1761688622&width=300&height=auto&aspect=true", producto:"Soquetes Nike",price:12000,category:"accesorios", descripcion:"Soquetes Nike deportivos finos color blanco/gris Running 22/23"},
  {id: 11,imagen:"https://sporting.vtexassets.com/arquivos/ids/333266-300-300?v=637632613772670000&width=300&height=300&aspect=true", producto:"Camiseta Boca Juniors",price:19000,category:"camiseta", descripcion:"Boca Juniors Camiseta Suplente Torneo 22/23 Version Jugador"},
  {id: 12,imagen:"https://zonasport.com.mx/wp-content/uploads/2022/06/short-azul-1-300x300.jpg", producto:"Short Deportivo",price:16000,category:"inferiores", descripcion:"Short liso Unisex color celeste running modelo primavera 22/23"},
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