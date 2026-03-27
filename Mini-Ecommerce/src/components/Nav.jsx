import { useEffect, useState } from "react"
import "../styles/Nav.css"

export const Nav = ({
  onCategoriaChange,
  categoriaActiva,
  onConDescuentoChange,
  conDescuentoActivo,
  onBusquedaChange,
  busquedaActiva
}) => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
    .then(res => res.json())
    .then(data => setCategorias(data))
  }, [])

  return (
    <nav>
      <div>
        <label htmlFor="categoria">Filtrar por categoría:</label>
        <select id="categoria" value={categoriaActiva} onChange={(e) => onCategoriaChange(e.target.value)}>
          <option value="all">All Categories</option>
          {categorias.map(categoria => (
            <option key={categoria.slug} value={categoria.slug}>{categoria.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="conDescuento">Productos con descuento:</label>
        <input 
          type="checkbox"
          checked={conDescuentoActivo}
          onChange={(e) => onConDescuentoChange(e.target.checked)}
        />
      </div>

      <div>
        <input 
          className="busqueda-input"
          type="text" 
          placeholder="Buscar producto..."
          value={busquedaActiva}
          onChange={(e) => onBusquedaChange(e.target.value)}
        />
      </div>
    </nav>
  )
}
