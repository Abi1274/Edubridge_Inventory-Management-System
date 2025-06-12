// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // Your backend auth URL

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    console.log(username, password);
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
}
