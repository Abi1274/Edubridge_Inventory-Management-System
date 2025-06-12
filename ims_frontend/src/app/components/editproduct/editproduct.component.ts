import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent {
  product: any = {
    code: '',
    name: '',
    totalQuantity: 0,
    remainingQuantity: 0,
    price: 0,
    comments: ''
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(data => {
        this.product = data;
      });
    }
  }

  updateProduct() {
    if (this.isValidProduct(this.product)) {
      if (this.product.id) {
        this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        alert('Product ID is missing. Cannot update.');
      }
    } else {
      alert('Please fill all fields correctly.');
    }
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
