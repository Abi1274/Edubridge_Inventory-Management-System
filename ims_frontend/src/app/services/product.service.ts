import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {
      headers: this.getHeaders()
    });
  }

  addProduct(product: any) {
    return this.http.post(this.baseUrl, product, { headers: this.getHeaders() });
  }

 updateProduct(id: number, product: any) {
  return this.http.put(`http://localhost:8080/api/products/${id}`, product, {
    headers: this.getHeaders()
  });
}


  getProductById(id: number) {
  return this.http.get(`${this.baseUrl}/${id}`, {
    headers: this.getHeaders()
  });
}


  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }
}
