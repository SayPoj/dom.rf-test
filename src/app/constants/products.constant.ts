import { Product } from '../interfaces/product.interface';
import { ProductType } from '../enum/product.enum';
import { ProductFieldType } from '../enum/product-field.enum';

export const products: Product[] = [
  {
    title: 'Продукт 1',
    type: ProductType.one,
    fields: [{ type: ProductFieldType.drink }],
  },
  {
    title: 'Продукт 2',
    type: ProductType.two,
    fields: [{ type: ProductFieldType.drink }, { type: ProductFieldType.dish }, { type: ProductFieldType.comment }],
  },
];
