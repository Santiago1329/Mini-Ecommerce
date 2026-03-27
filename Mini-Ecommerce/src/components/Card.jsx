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
                {producto.discountPercentage > 2 ? (
                    <div className='price-container'>
                        <span className='discount-percentage'>-{producto.discountPercentage}%</span>
                        <p className='price-original'>${producto.price}</p>
                        <p className='price-discounted'>${(producto.price - (producto.price * producto.discountPercentage / 100)).toFixed(2)}</p>
                    </div>
                ): (
                    <p className='price'>${producto.price}</p>
                )}
                <p>⭐ {producto.rating}</p>
            </div>
        ))}
    </>
  )
}
