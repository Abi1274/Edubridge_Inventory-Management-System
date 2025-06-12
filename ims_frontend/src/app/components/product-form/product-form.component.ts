import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  products: any[] = [];

  product: any = {
     code: '',
    name: '',
    totalQuantity: 0,
    remainingQuantity: 0,
    price: 0,
    comments: ''
  };

  isEdit: boolean = false;

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error loading products', err)
    });
  }

  saveProduct(): void {
    if (this.isValidProduct(this.product)) {
      if (this.isEdit && this.product.id !== null) {
        this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
          this.resetForm();
          this.loadProducts();
        });
      } else {
        this.productService.addProduct(this.product).subscribe(() => {
          this.resetForm();
          this.loadProducts();
        });
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  editProduct(p: any): void {
    this.product = { ...p };
    this.isEdit = true;
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  resetForm(): void {
    this.product = {
      code: '',
      name: '',
      totalQuantity: 0,
      remainingQuantity: 0,
      price: 0,
      comments: ''
    };
    this.isEdit = false;
  }

  private isValidProduct(product: any): boolean {
    return (
      product.code.trim() !== '' &&
      product.name.trim() !== '' &&
      product.totalQuantity > 0 &&
      product.remainingQuantity >= 0 &&
      product.price >= 0
    );
  }
}
