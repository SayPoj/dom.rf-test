import { Component } from '@angular/core';
import { products } from '../../constants/products.constant';
import { Product } from '../../interfaces/product.interface';
import { SaveProductsService } from '../../services/save-products.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  public products = products;
  public selectedProduct: Product = null;

  constructor(public saveProductsService: SaveProductsService) {}

  public addProduct(product: Product): void {
    this.saveProductsService.add(product);
    this.selectedProduct = null;
  }

  public productReset(): void {
    this.selectedProduct = null;
  }
}
