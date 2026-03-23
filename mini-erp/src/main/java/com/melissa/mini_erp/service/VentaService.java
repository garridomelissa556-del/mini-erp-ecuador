package com.melissa.mini_erp.service;

import com.melissa.mini_erp.model.Producto;
import com.melissa.mini_erp.model.Venta;
import com.melissa.mini_erp.repository.ProductoRepository;
import com.melissa.mini_erp.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import java.util.List;

@Service
public class VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Transactional // Si algo falla, no se guarda nada (seguridad profesional)
    public Venta registrarVenta(Venta venta) {
        // Lógica: Por cada producto en la venta, restamos el stock
        venta.getDetalles().forEach(detalle -> {
            Producto p = productoRepository.findById(detalle.getProducto().getId())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

            p.setStock(p.getStock() - detalle.getCantidad()); // ¡Restamos inventario!
            productoRepository.save(p);
        });

        return ventaRepository.save(venta);
    }

    public List<Venta> obtenerTodas() {
        return ventaRepository.findAll();
    }
}