package com.melissa.mini_erp.repository;


import com.melissa.mini_erp.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Esto es un componente que accede a la base de datos
@Repository

//Estás creando un repositorio, que es básicamente una capa para acceder a la base de datos sin escribir SQL.
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
