import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addCustomer(cust: any): Observable<any> {
    return this.http.post(this.baseUrl, cust);
  }

  updateCustomer(id: number, cust: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cust);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
