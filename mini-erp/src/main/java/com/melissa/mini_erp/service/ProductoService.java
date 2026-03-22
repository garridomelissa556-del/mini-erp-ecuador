package com.melissa.mini_erp.service;


import com.melissa.mini_erp.model.Producto;
import com.melissa.mini_erp.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository repository;

    //Llama al repositorio
    //Obtiene todos los productos de la base de datos
    //Retorna una lista
    public List<Producto> obtenerTodos() {
        return repository.findAll();
    }

    //Recibe un producto
    //Lo guarda en la base de datos
    //Retorna el producto guardado (con ID generado si aplica)
    public Producto guardar(Producto producto) {
        return repository.save(producto);
    }

}
