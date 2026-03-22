package com.melissa.mini_erp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity // Esto le dice a Java: "Crea una tabla en la base de datos para esto"
@Table(name = "productos") // La tabla se llamará 'productos'
@Data // Esto de Lombok crea automáticamente el código aburrido (Getters y Setters)

public class Producto {

    @Id // Es el número de identificación único (como la cédula)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Se numera solo: 1, 2, 3...
    private Long id;

    @Column(nullable = false) // No puede estar vacío
    private String nombre;

    private String descripcion;

    @Column(nullable = false)
    private Double precio; // Usamos Double para decimales ($)

    @Column(nullable = false)
    private Integer stock; // Cantidad de productos en la tienda

}
