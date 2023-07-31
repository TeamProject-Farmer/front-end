import { ISortOption } from 'src/types/search/types';

export interface ProductAPI {
  productId: number;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}

export const productSortOptions: ISortOption[] = [
  { title: '신상품순', param: 'NEWS' },
  { title: '리뷰많은순', param: 'REVIEW' },
  { title: '낮은가격순', param: 'LOW' },
  { title: '높은가격순', param: 'HIGH' },
];