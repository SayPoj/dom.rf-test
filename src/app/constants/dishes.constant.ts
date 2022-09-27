import { Dish } from '../interfaces/dish.interface';
import { DishType } from '../enum/dish.enum';

export const dishes: Dish[] = [
  {
    title: 'Блюдо 1',
    type: DishType.one,
  },
  {
    title: 'Блюдо 2',
    type: DishType.two,
  },
];
