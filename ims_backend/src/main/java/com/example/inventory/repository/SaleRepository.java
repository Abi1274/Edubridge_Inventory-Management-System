package com.example.inventory.repository;

import com.example.inventory.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sales, Long> {
}
