// app.component.ts
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'; // Ensure this path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory Management System';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
