import { Drink } from '../interfaces/drink.interface';
import { DrinkType } from '../enum/drink.enum';

export const drinks: Drink[] = [
  {
    title: 'Напиток 1',
    type: DrinkType.one
  },
  {
    title: 'Напиток 2',
    type: DrinkType.two,
  },
];
