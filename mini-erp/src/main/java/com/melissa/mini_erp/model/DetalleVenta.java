package com.melissa.mini_erp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "detalles_venta")
@Data
public class DetalleVenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    private Integer cantidad;
    private Double precioUnitario; // Guardamos el precio del momento por si luego sube
}