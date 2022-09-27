import { ProductType } from '../enum/product.enum';
import { Drink } from './drink.interface';
import { Dish } from './dish.interface';
import { ProductFieldType } from '../enum/product-field.enum';

export interface Product {
  title: string;
  type: ProductType;
  fields: { type: ProductFieldType; value?: Drink | Dish | string }[];
}
