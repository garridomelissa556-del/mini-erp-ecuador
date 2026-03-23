package com.melissa.mini_erp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "clientes")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true) // El RUC/Cédula no se puede repetir
    private String identificacion;

    @Column(nullable = false)
    private String nombre;

    private String telefono;
    private String email;
    private String direccion;

}
