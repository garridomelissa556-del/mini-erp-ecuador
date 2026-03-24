import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    // Llamamos a tu API de Java
    axios.get('http://localhost:8080/api/productos')
      .then(respuesta => setProductos(respuesta.data))
      .catch(error => console.error("Error conectando:", error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Encabezado */}
      <header className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">🇪🇨 Mini ERP Ecuador</h1>
        <button className="bg-ecuador-azul text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
          + Nuevo Producto
        </button>
      </header>

      {/* Tabla de Inventario */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Inventario Actual</h2>
        
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Producto</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Descripción</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Precio (USD)</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="p-3 text-gray-700 font-mono">{p.id}</td>
                <td className="p-3 text-gray-900 font-semibold">{p.nombre}</td>
                <td className="p-3 text-gray-600">{p.descripcion}</td>
                <td className="p-3 text-green-700 font-bold">${p.precio.toFixed(2)}</td>
                <td className="p-3 text-gray-800">{p.stock} unidades</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App