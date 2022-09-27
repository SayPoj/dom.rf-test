import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddedProductsComponent } from './components/added-products/added-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [AppComponent, PageComponent, ProductFormComponent, AddedProductsComponent, EditProductComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
