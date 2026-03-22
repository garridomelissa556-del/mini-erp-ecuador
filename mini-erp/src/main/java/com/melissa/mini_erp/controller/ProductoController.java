package com.melissa.mini_erp.controller;


import com.melissa.mini_erp.model.Producto;
import com.melissa.mini_erp.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Esto dice: "Soy la ventanilla que entrega datos por internet"
@RequestMapping("/api/productos") // La dirección de la ventanilla será esta
@CrossOrigin(origins = "*") // Esto permite que React pueda hablar con Java sin problemas
public class ProductoController {

    @Autowired
    private ProductoService service; // Llamamos al "cocinero" (Service)

    @GetMapping // Cuando el cliente pida "VER", ejecutamos esto
    public List<Producto> listar() {
        return service.obtenerTodos();
    }

    @PostMapping // Cuando el cliente diga "GUARDAR", ejecutamos esto
    public Producto guardar(@RequestBody Producto producto) {
        return service.guardar(producto);
    }
}
