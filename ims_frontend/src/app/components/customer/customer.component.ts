import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any[] = [];

  customer = {
    id: null,
    name: '',
    email: '',
    phone: ''
  };

  editingIndex: number | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  onSubmit() {
    if (this.editingIndex !== null) {
      this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(() => {
        this.loadCustomers();
        this.cancelEdit();
      });
    } else {
      this.customerService.addCustomer(this.customer).subscribe(() => {
        this.loadCustomers();
        this.resetForm();
      });
    }
  }

  editCustomer(index: number) {
    this.customer = { ...this.customers[index] };
    this.editingIndex = index;
  }

  deleteCustomer(index: number) {
    const id = this.customers[index].id;
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
      this.cancelEdit();
    });
  }

  cancelEdit() {
    this.editingIndex = null;
    this.resetForm();
  }

  resetForm() {
    this.customer = { id: null, name: '', email: '', phone: '' };
  }
}
