package com.melissa.mini_erp.controller;

import com.melissa.mini_erp.model.Venta;
import com.melissa.mini_erp.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
@CrossOrigin(origins = "*")
public class VentaController {

    @Autowired
    private VentaService service;

    @GetMapping
    public List<Venta> listar() {
        return service.obtenerTodas();
    }

    @PostMapping
    public Venta crear(@RequestBody Venta venta) {
        return service.registrarVenta(venta);
    }
}
