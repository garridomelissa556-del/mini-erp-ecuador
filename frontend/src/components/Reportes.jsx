import { useEffect, useState } from 'react'
import axios from 'axios'

function Reportes({ actualizar }) {
  const [totalVentas, setTotalVentas] = useState(0)
  const [numVentas, setNumVentas] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8080/api/ventas')
      .then(res => {
        const ventas = res.data
        setNumVentas(ventas.length)
        // Sumamos el total de todas las ventas registradas
        const suma = ventas.reduce((acc, v) => acc + (v.total || 0), 0)
        setTotalVentas(suma)
      })
  }, [actualizar]) // Se actualiza cada vez que 'actualizar' cambie

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
        <p className="text-sm text-gray-500 uppercase font-bold">Ganancias Totales</p>
        <p className="text-3xl font-black text-gray-800">${totalVentas.toFixed(2)}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
        <p className="text-sm text-gray-500 uppercase font-bold">Ventas Realizadas</p>
        <p className="text-3xl font-black text-gray-800">{numVentas} tickets</p>
      </div>
    </div>
  )
}

export default Reportes