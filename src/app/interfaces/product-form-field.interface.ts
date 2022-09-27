import { Drink } from './drink.interface';
import { Dish } from './dish.interface';
import { ProductFieldType } from '../enum/product-field.enum';

export interface ProductFormField {
  type: ProductFieldType;
  value?: Drink | Dish | string;
}
