package com.melissa.mini_erp.model;


import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "ventas")
@Data
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime fecha = LocalDateTime.now(); // Se pone la hora de Ecuador solita

    @ManyToOne // Muchas ventas pueden ser del mismo cliente
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    private Double total;

    @OneToMany(cascade = CascadeType.ALL) // Una venta tiene muchos detalles
    @JoinColumn(name = "venta_id")
    private List<DetalleVenta> detalles;
}
