import { useState, useEffect } from 'react'

// components
import { Nav } from './Nav'
import { Card } from './Card'


// styles
import '../styles/Products.css'

export const Products = () => {
  const [productos, setProducts] = useState([])
  const [loading, setLoading] =useState(true)
  const [error, setError] = useState(null)
  const [categoria, setCategoria] = useState('all')

  useEffect(() => {
      fetch("https://dummyjson.com/products")
      .then(res => {
          if (!res.ok) {
              throw new Error("No se pudieron cargar los productos")
          }
          return res.json()
      })
      .then(data => {
          setProducts(data.products)
          setLoading(false)
      })
      .catch(err => {
          setError(err.message)
          setLoading(false)
      })
  }, [])

  const productosFiltrados = categoria === "all" ? productos : productos.filter(p => p.category === categoria)

  if (error) {
      return (
        <section className='products'>
          <div className="error-container">
              <h3>Error al cargar productos</h3>
              <p>{error}</p>
          </div>
        </section>
      )
  }

  return (
    <>
      <Nav onCategoriaChange={setCategoria} categoriaActiva={categoria} />

      <section className='products'>
        {loading
          ?
          <div className='loader-container'>
              <div className='spinner'></div>
              <h4>Cargando productos...</h4>
          </div>
          :
          productosFiltrados.map(producto => (
            <Card key={producto.id} producto={producto} />
          ))
        }
      </section>
    </>
  )
}
