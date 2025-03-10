export function Carrito({carrito}) {
return <>

<ul>

{carrito.map((producto, index)=>{
    
    return <li key={index}>
        <p>{producto.title}</p>
        <p>{producto.price}</p>
    </li>
    
})}

</ul>

</>


}