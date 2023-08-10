import { ISortOption } from 'src/types/search/types';

export const sortingOptions: ISortOption[] = [
  { title: '신상품순', param: 'new' },
  { title: '리뷰많은순', param: 'review' },
  { title: '낮은가격순', param: 'low' },
  { title: '높은가격순', param: 'high' },
];
