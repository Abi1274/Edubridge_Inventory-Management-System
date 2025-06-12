package com.example.inventory.controller;

import com.example.inventory.model.Customer;
import com.example.inventory.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

  @Autowired
  private CustomerRepository repo;

  @GetMapping
  public List<Customer> getAll() {
    return repo.findAll();
  }

  @PostMapping
  public Customer create(@RequestBody Customer c) {
    return repo.save(c);
  }

  @PutMapping("/{id}")
  public Customer update(@PathVariable Long id, @RequestBody Customer c) {
    Customer existing = repo.findById(id).orElseThrow();
    existing.setName(c.getName());
    existing.setEmail(c.getEmail());
    existing.setPhone(c.getPhone());
    return repo.save(existing);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    repo.deleteById(id);
  }
}
