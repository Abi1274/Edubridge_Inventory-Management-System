// src/app/components/sales/sales.component.ts

import { Component, OnInit } from '@angular/core';
import { SalesService, Sale } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  newSale: Sale = {
    invoiceNumber: '',
    customerName: '',
    productName: '',
    quantity: 1,
    totalPrice: 0,
    saleDate: new Date().toISOString().substring(0, 10)
  };

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.salesService.getAll().subscribe(data => this.sales = data);
  }
 calculateTotal(): void {
    // optional logic here
  }

  addSales(): void {
    this.salesService.add(this.newSale).subscribe(() => {
      this.loadSales();
      this.resetForm();
    });
  }

  deleteSale(id?: number): void {
    if (!id) return;
    this.salesService.delete(id).subscribe(() => this.loadSales());
  }

  private resetForm(): void {
    this.newSale = {
      invoiceNumber: '',
      customerName: '',
      productName: '',
      quantity: 1,
      totalPrice: 0,
      saleDate: new Date().toISOString().substring(0, 10)
    };
  }
}
