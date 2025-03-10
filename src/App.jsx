import { useState } from 'react'
import './App.css'
import { Tienda } from './Tiendaonline/Tiendaonline'
import { Carrito } from './Tiendaonline/Carrito'

function App() {
  const [carrito, setCarrito] = useState([])
  const [comprando, setcomprando]= useState(false)

  function agregarcarrito(producto){
    setCarrito([...carrito,producto])

  }

  console.log(carrito)
  if(comprando){
    return<>
    
    <h1>tienda online</h1>
    <Carrito carrito={carrito}/>
    <button onClick={()=>{
        setcomprando(false)
        setCarrito([])
        alert("compras realizadas con exito")
      }}>comprar </button>
    </>
  }
  return (
    <>
      <h1>tienda online</h1>
      <button disabled={carrito.length==0} onClick={()=>{setcomprando(true)}}>carrito: {carrito.length}</button>
      <Tienda comprar={agregarcarrito}/>
    </>
  )
}

export default App
