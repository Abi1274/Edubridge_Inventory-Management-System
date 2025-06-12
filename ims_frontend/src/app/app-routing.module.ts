import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';
import { AuthGuard } from './guards/auth.guard';
import { CustomerComponent } from './components/customer/customer.component';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
