
// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  editingIndex: null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
  this.productService.getAllProducts().subscribe(data => {
    this.products = data;
  });
}
  cancelEdit() {
    this.editingIndex = null;
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }
}
