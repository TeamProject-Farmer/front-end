import { Dispatch, SetStateAction } from 'react';
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

export const detailLinkOptions: ISortOption[] = [
  { title: '상품', param: '' },
  { title: '리뷰 766', param: '' },
  { title: '상품문의 177', param: '' },
  { title: '배송/환불', param: '' },
  { title: '비슷한상품', param: '' },
];

export const sizeSortOptions: ISortOption[] = [
  { title: 'Small', param: 'Small' },
  { title: 'Medium', param: 'Medium' },
  { title: 'Large', param: 'Large' },
];

export interface OptionBarProps {
  optionList: ISortOption[];
  width?: string;
  setProductOption?: Dispatch<SetStateAction<string>>;
  productOption?: string;
}

export const CateId = {
  다육이: 1,
  선인장 : 2,
  스킨답서스: 3,
  야자목: 4,
  호접란: 5,
  키움용품: 6,
};