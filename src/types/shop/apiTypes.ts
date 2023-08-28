import { secretQuestion } from './types';

//product.ts
export interface productListProps {
  productOption: string;
  categoryId: number;
  currentIndex: number;
}
export interface shopBySizeProps {
  sizeOption: string;
  orderType: string;
  currentIndex: number;
}
export interface cartProps {
  // 상품 일련번호, 옵션 일련번호, 갯수
  productId: string;
  optionId: string;
  count: string;
}

//review
export interface getReviewProps {
  productId: number;
  currentIndex: number;
  sortOption: string | null;
  starOption: number | null;
}

//qna
export interface QnAEditProps {
  productId: string;
  currentOption: string;
  content: string;
  secretQuestion: secretQuestion;
  qcreatedDateTime: string;
}
