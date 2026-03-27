import { useEffect, useState } from "react"
import "../styles/Nav.css"

export const Nav = ({ onCategoriaChange, categoriaActiva }) => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
    .then(res => res.json())
    .then(data => setCategorias(data))
  }, [])

  return (
    <nav>
      <label htmlFor="categoria">Filtrar por categoría:</label>
      <select id="categoria" value={categoriaActiva} onChange={(e) => onCategoriaChange(e.target.value)}>
        <option value="all">All</option>
        {categorias.map(categoria => (
          <option key={categoria.slug} value={categoria.slug}>{categoria.name}</option>
        ))}
      </select>
    </nav>
  )
}
