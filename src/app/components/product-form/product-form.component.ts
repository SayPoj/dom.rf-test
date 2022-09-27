import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { drinks } from '../../constants/drinks.constant';
import { dishes } from '../../constants/dishes.constant';
import { Product } from '../../interfaces/product.interface';
import { Drink } from '../../interfaces/drink.interface';
import { ProductFieldType } from '../../enum/product-field.enum';
import { Dish } from 'src/app/interfaces/dish.interface';

type ProductFormType = FormGroup & { value: Record<ProductFieldType, Drink | Dish | string> };

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Input()
  public set product(value: Product) {
    this._product = value;
    this.initForm(value);
  }

  @Input()
  public deletable = false;

  @Output()
  public productChange = new EventEmitter<Product>();

  @Output()
  public productReset = new EventEmitter<void>();

  @Output()
  public productDelete = new EventEmitter<void>();

  public drinks = drinks;
  public productFieldType = ProductFieldType;
  public dishes = dishes;
  public productForm: ProductFormType;
  private _product: Product;

  public initForm(product: Product): void {
    this.productForm = new FormGroup({}) as ProductFormType;
    product.fields.forEach((field) => {
      if (field.type === ProductFieldType.dish) {
        this.productForm.addControl(
          field.type.toString(),
          // @ts-ignore
          new FormControl(this.dishes.filter((dish) => dish.type === field?.value?.type)[0] ?? null)
        );
      }
      if (field.type === ProductFieldType.drink) {
        this.productForm.addControl(
          field.type.toString(),
          // @ts-ignore
          new FormControl(this.drinks.filter((drink) => drink.type === field?.value?.type)[0] ?? null)
        );
      }
      if (field.type === ProductFieldType.comment) {
        this.productForm.addControl(field.type.toString(), new FormControl(field?.value?.toString() ?? ''));
      }
    });
  }

  public onSubmit(): void {
    this._product.fields.map((field) => {
      field.value = this.productForm.value[field.type];
    });
    this.productForm.reset();
    this.productChange.emit(this._product);
  }

  public onReset(): void {
    this.productReset.emit();
  }
}
