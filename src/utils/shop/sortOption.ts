import { ISortOption } from 'src/types/search/types';

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
  { title: 'Small', param: 'S' },
  { title: 'Medium', param: 'M' },
  { title: 'Large', param: 'L' },
];

//리팩토링 할 때 카테고리 관련 redux는 state 값을 number나 string 하나로만 하고
//코드 전반에서 이 부분을 활용해서 해도 될 것 같음.
export const CateId = {
  다육이: 1,
  선인장: 2,
  스킨답서스: 3,
  야자목: 4,
  호접란: 5,
  키움용품: 6,
};
