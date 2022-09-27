import { ProductType } from '../enum/product.enum';
import { ProductFormField } from './product-form-field.interface';

export interface Product {
  title: string;
  type: ProductType;
  fields: ProductFormField[];
}
