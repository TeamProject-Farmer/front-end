import { Dispatch, SetStateAction } from 'react';
import { ISortOption } from 'src/types/search/types';
import { RootState } from 'store';

export const idSelector = (state: RootState) => state.productId;
export const categprySelector = (state: RootState) => state.categoryId;

export interface ProductAPI {
  productId: number;
  imgUrl: string;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}

export interface ReviewAPI {
  memberNickname: string;
  fiveStarRating: number;
  createdDate: string;
  productName: string;
  optionName: string;
  imgUrl: string;
  likeCount: number;
  content: string;
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
  { title: 'Small', param: 'S' },
  { title: 'Medium', param: 'M' },
  { title: 'Large', param: 'L' },
];


export interface OptionBarProps {
  optionList: ISortOption[];
  width?: string;
  setProductOption?: Dispatch<SetStateAction<string>>;
  productOption?: string;
}

export const CateId = {
  다육이: 1,
  선인장: 2,
  스킨답서스: 3,
  야자목: 4,
  호접란: 5,
  키움용품: 6,
};

export interface categoryReduxType {
  name: string;
  id: number;
}

export interface PanelProps {
  id?: number;
  categoryId?: number;
  categoryName?: string;
  name?: string;
  stockQuantity?: number;
  price?: number;
  sellQuantity?: number;
  discountRate?: number;
  options?: string[];
  thumbnailImg?: string;
  size?: string;
  description?: string;
  detailImg1?: string;
  detailImg2?: string;
  detailImg3?: string;
  detailImg4?: string;
  detailImg5?: string;
}

export interface SingleReviewProps {
  content: string;
  createdDate: string;
  fiveStarRating: number;
  imgUrl: string;
  likeCount: number;
  memberNickname: string;
  optionName: string;
  productName: string;
  reviewId: number;
}

export type secretQuestion = 'GENERAL' | 'SECRET';

export interface QnAProps {
  qnaId: number;
  memberName: string;
  productName: string;
  subject: string;
  content: string;
  answer: boolean;
  secretQuestion: secretQuestion;
  qcreatedDate: '2023-08-08T09:40:54.47001';
}

export interface QnAEditProps {
  productId: number;
  subject: string;
  content: string;
  secretQuestion: secretQuestion;
  qcreatedDateTime: string;
}
