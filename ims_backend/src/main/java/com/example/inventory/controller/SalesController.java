package com.example.inventory.controller;

import com.example.inventory.model.Sales;
import com.example.inventory.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sales")
@CrossOrigin(origins = "http://localhost:4200")
public class SalesController {

    @Autowired
    private SaleRepository repo;

    @GetMapping
    public List<Sales> list() {
        return repo.findAll();
    }

    @PostMapping
    public Sales create(@RequestBody Sales sale) {
        return repo.save(sale);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
