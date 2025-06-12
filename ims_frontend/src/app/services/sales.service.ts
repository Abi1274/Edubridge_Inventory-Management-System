// src/app/services/sales.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sale {
  id?: number;
  invoiceNumber: string;
  customerName:  string;
  productName:   string;
  quantity:      number;
  totalPrice:    number;
  saleDate:      string;  
}

@Injectable({ providedIn: 'root' })
export class SalesService {
  private readonly baseUrl = 'http://localhost:8080/api/sales';

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.baseUrl, { headers: this.headers });
  }

  add(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.baseUrl, sale, { headers: this.headers });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
}
