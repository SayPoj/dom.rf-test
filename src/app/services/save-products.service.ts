import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveProductsService {
  public products = new BehaviorSubject<Product[]>(this.getProducts());

  constructor() {
    this.getProducts();
    this.products.subscribe((products) => {
      localStorage.setItem('products', JSON.stringify(products));
    });
  }

  public add(product: Product): void {
    const updatedProducts = this.products.getValue();
    updatedProducts.push(product);
    this.products.next(updatedProducts);
  }

  public update(oldProduct: Product, newProduct: Product): void {
    const updatedProducts = this.products.getValue();
    updatedProducts.map((product) => {
      if (product === oldProduct) {
        return newProduct;
      }
      return product;
    });
    this.products.next(updatedProducts);
  }

  public delete(deletedProduct: Product): void {
    const updatedProducts = this.products.getValue().filter((product) => product !== deletedProduct);
    this.products.next(updatedProducts);
  }

  private getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products')) ?? [];
  }
}
