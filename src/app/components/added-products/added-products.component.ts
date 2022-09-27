import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductFieldType } from '../../enum/product-field.enum';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-added-products',
  templateUrl: './added-products.component.html',
  styleUrls: ['./added-products.component.scss'],
})
export class AddedProductsComponent {
  @ViewChild(EditProductComponent)
  private set appShark(component: EditProductComponent) {
    this.editProductComponent = component;
  }

  @Input()
  public products: Product[];

  public productFieldType = ProductFieldType;
  public editProductComponent: EditProductComponent;

  public getProductFieldValue(product: Product, fieldType: ProductFieldType): string {
    const field = product.fields.find((field) => field.type === fieldType);
    if (field) {
      if (typeof field?.value === 'string') {
        return field.value;
      } else {
        return field.value.title;
      }
    } else {
      return '';
    }
  }

  public editProduct(product: Product) {
    this.editProductComponent.product = product;
    this.editProductComponent.open();
  }
}
