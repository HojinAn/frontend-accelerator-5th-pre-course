import { SavingsProduct } from 'entities/savings/model/types';
import { isAvailableProduct } from 'features/savings-calculator/lib/isAvailableProduct';
import { SavingsCondition } from 'features/savings-calculator/model/types';

export const selectRecommendedProducts = (products: SavingsProduct[]) =>
  [...products].sort((a, b) => b.annualRate - a.annualRate).slice(0, 2);

export const selectAvailableProducts = (condition: SavingsCondition) => (products: SavingsProduct[]) =>
  products.filter(product => isAvailableProduct({ savingsProduct: product, condition }));
