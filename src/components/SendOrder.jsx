import React from 'react'
import { collection,addDoc,getFirestore} from 'firebase/firestore'
import { useState } from 'react'

const SendOrder = () => {


const [orderId,setOrderId] = useState(null);
const [name,setName] = useState("");
const [email,setEmail] = useState("");

const db = getFirestore();

const handleSubmit = (e) =>{
    e.preventDefault();
    addDoc(orderCollection,order).then(({id})=> setOrderId(id));
}

const order = {
    name,
    email
}


const orderCollection = collection(db,"orden");

  return (

    <>
    <div>
        <form onSubmit={handleSubmit} >
            <input className='formulario' type="text" placeholder='Nombre y Apellido'onChange={(e)=>setName(e.target.value)} />
            <input className='formulario' type="email" placeholder='Correo Electronico'onChange={(e)=>setEmail(e.target.value)} />
            <button className='enviar' type="submit">Enviar</button>
        </form>
         <p>Nro. de orden: { orderId }</p>


    </div>
    </>
  )
}

export default SendOrder