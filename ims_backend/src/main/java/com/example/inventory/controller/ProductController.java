package com.example.inventory.controller;

import com.example.inventory.model.Product;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")  // Enable CORS for Angular frontend
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id);
    }

    // Create new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // Update product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setName(productDetails.getName());
        product.setQuantity(productDetails.getQuantity());
        product.setPrice(productDetails.getPrice());
        return productRepository.save(product);
    }

    // Delete product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
