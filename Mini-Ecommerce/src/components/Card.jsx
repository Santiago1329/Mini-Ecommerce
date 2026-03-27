import { useEffect, useState } from 'react'
import "../styles/Card.css"

export const Card = () => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.products)
        })
    }, [])

  return (
    <>
        {productos.map(producto => (
            <div className='card'>
                <img src={producto.thumbnail} />
                <h3>{producto.title}</h3>
                <p>${producto.price}</p>
            </div>
        ))}
    </>
  )
}
