import { useState, useEffect } from 'react'
import axios from 'axios'

function Ventas({ alVender }) {
  const [productos, setProductos] = useState([])
  const [venta, setVenta] = useState({ productoId: '', cantidad: 1 })

  useEffect(() => {
    axios.get('http://localhost:8080/api/productos').then(res => setProductos(res.data))
  }, [])

  const realizarVenta = (e) => {
    e.preventDefault()
    // Armamos el paquete de venta profesional
    const payload = {
      detalles: [{ 
        producto: { id: venta.productoId }, 
        cantidad: parseInt(venta.cantidad) 
      }]
    }

    axios.post('http://localhost:8080/api/ventas', payload)
      .then(() => {
        alert("💸 ¡Venta realizada con éxito!")
        alVender() // Esto le avisa a la tabla de arriba que se actualice
      })
      .catch(err => {
  console.error(err)
  alert("Error: Revisa si hay suficiente stock")
})
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🛒 Registrar Venta (Punto de Venta)</h2>
      <form onSubmit={realizarVenta} className="flex gap-4">
        <select 
          className="flex-1 p-2 border border-gray-300 rounded-md"
          onChange={(e) => setVenta({...venta, productoId: e.target.value})}
          required
        >
          <option value="">Selecciona un producto...</option>
          {productos.map(p => (
            <option key={p.id} value={p.id}>{p.nombre} (Stock: {p.stock})</option>
          ))}
        </select>
        <input 
          type="number" min="1" className="w-24 p-2 border border-gray-300 rounded-md"
          value={venta.cantidad}
          onChange={(e) => setVenta({...venta, cantidad: e.target.value})}
        />
        <button type="submit" className="bg-ecuador-azul text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800">
          Vender
        </button>
      </form>
    </div>
  )
}

export default Ventas