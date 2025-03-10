import { useEffect, useState } from "react"

export function Tienda({comprar}) {
    const [productos, setproductos] = useState([])
    async function obtenerProductos() {

        let respuesta = await fetch("https://fakestoreapi.com/products")
        let datos = await respuesta.json()
        setproductos(datos)

    }
    useEffect(() =>{
        obtenerProductos()
    }, [])
    if (productos.length == 0) {
        return <h1>cargando...</h1>


    }
    
    return <>

    {productos.map((producto, index)=>{

        return <div key={index}>
            <h3 >{producto.title}</h3>
            <h3>precio: ${producto.price}</h3>
            <img src={producto.image} alt=""  height={200}/>
            <button onClick={()=>[comprar(producto)]}>comprar</button>

        </div>

    })}

    </>

}