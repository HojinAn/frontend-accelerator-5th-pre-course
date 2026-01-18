import { ReactNode } from 'react';

import { SavingsProduct } from 'entities/savings/model/types';

interface RecommendedProductsProps {
  candidateProducts: SavingsProduct[];
  children: (recommendedProducts: SavingsProduct[]) => ReactNode;
}

export function RecommendedProductFilter({ candidateProducts, children }: RecommendedProductsProps) {
  const recommendedProducts = [...candidateProducts].sort((a, b) => b.annualRate - a.annualRate).slice(0, 2);

  return <>{children(recommendedProducts)}</>;
}
