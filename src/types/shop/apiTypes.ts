import { secretQuestion } from './types';

//product.ts
export interface productListProps {
  productOption: string;
  categoryId: number;
  currentIndex: number;
}
export interface ShopBySizeProps {
  sizeOption: string;
  orderType: string;
  currentIndex: number;
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
