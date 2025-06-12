import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    this.auth.login(this.username, this.password).subscribe({
      next: res => {
        console.log('Login successful', res);
        this.auth.setToken(res.token);
        this.router.navigate(['/products']);
      },
      error: err => {
        console.error('Login failed:', err);
        this.errorMessage = err.error?.message || 'Login failed. Please try again later.';
      }
    });
  }
}
