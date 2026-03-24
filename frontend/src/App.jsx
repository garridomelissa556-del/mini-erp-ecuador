import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [productos, setProductos] = useState([])
  // Aquí guardamos lo que el usuario escribe en el formulario
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  })

  // Función para cargar los productos (la sacamos aparte para reusarla)
  const cargarProductos = () => {
    axios.get('http://localhost:8080/api/productos')
      .then(res => setProductos(res.data))
  }

  useEffect(() => { cargarProductos() }, [])

  // Esta función se activa cuando el usuario escribe en los cuadros de texto
  const manejarCambio = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value })
  }

  // Esta función envía el producto a JAVA cuando haces click en "Guardar"
  const guardarProducto = (e) => {
    e.preventDefault() // Evita que la página se recargue (truco de pro)
    axios.post('http://localhost:8080/api/productos', nuevoProducto)
      .then(() => {
        cargarProductos() // Recargamos la lista para ver el nuevo producto
        setNuevoProducto({ nombre: '', descripcion: '', precio: '', stock: '' }) // Limpiamos el formulario
        alert("✅ ¡Producto guardado con éxito!")
      })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">🇪🇨 Mini ERP Ecuador</h1>

      {/* --- FORMULARIO PROFESIONAL --- */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🆕 Registrar Nuevo Producto</h2>
        <form onSubmit={guardarProducto} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            name="nombre" placeholder="Nombre del producto" value={nuevoProducto.nombre} onChange={manejarCambio} required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input 
            name="descripcion" placeholder="Descripción breve" value={nuevoProducto.descripcion} onChange={manejarCambio}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input 
            name="precio" type="number" step="0.01" placeholder="Precio (Ej: 1.50)" value={nuevoProducto.precio} onChange={manejarCambio} required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input 
            name="stock" type="number" placeholder="Cantidad en percha" value={nuevoProducto.stock} onChange={manejarCambio} required
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button type="submit" className="md:col-span-2 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
            💾 Guardar en Inventario
          </button>
        </form>
      </div>

      {/* --- TABLA DE INVENTARIO (La que ya tenías) --- */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">📦 Inventario Actual</h2>
        <table className="w-full text-left">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Producto</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Precio</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-3 text-gray-500 font-mono text-sm">{p.id}</td>
                <td className="p-3 text-gray-800 font-medium">{p.nombre}</td>
                <td className="p-3 text-green-700 font-bold">${p.precio}</td>
                <td className="p-3 text-gray-600">{p.stock} unids.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App