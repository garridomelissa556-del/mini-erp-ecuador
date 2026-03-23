import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    // Llamamos a la "ventanilla" que creamos en Java
    axios.get('http://localhost:8080/api/productos')
      .then(respuesta => {
        setProductos(respuesta.data)
      })
      .catch(error => console.error("Error al conectar con Java:", error))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📦 Inventario del Negocio</h1>
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            {p.nombre} - ${p.precio} (Stock: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App