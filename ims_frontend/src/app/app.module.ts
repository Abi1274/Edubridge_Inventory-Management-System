// app.module.ts
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SalesComponent } from './components/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductFormComponent,
    ProductListComponent,
    EditProductComponent,
    ProductFormComponent,
    CustomerComponent,
    SalesComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}