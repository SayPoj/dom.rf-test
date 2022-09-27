import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { SaveProductsService } from '../../services/save-products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  @ViewChild('dialog')
  private dialogElement: ElementRef;

  public product: Product;

  constructor(private saveProductsService: SaveProductsService) {}

  public open(): void {
    this.dialogElement.nativeElement.showModal();
  }

  public closeModal(): void {
    this.dialogElement.nativeElement.close();
    this.product = null;
  }

  public updateProduct(newProduct: Product): void {
    this.saveProductsService.update(this.product, newProduct);
    this.product = null;
    this.closeModal();
  }

  public deleteProduct(): void {
    this.saveProductsService.delete(this.product);
    this.closeModal();
  }
}
