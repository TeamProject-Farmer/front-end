import { Category } from '../common/types';

export interface IndexPageProps {
  banner: Banner[];
  bestPlant: Plant[];
  bestReview: Review[];
  news: News;
}

export interface Banner {
  id: number;
  name: string;
  linkUrl: string;
  imgUrl: string;
}

export interface News {
  subject: string;
  content: string;
  imgUrl: string;
}

export interface Plant {
  productId?: number;
  ranking?: number;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
  imgUrl: string;
}

export interface Review {
  productId: number;
  memberNickName: string;
  imgUrl: string;
  content: string;
  likeCount: number;
  fiveStarRating: number;
}

export interface BtnProps {
  content: string;
  color?: string;
}

export interface TitleProps {
  title: string;
  color?: string;
}

export interface IconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export type HoverType =
  | 'smallBtn'
  | 'smallBtn_w'
  | 'mediumBtn'
  | 'mediumBtn_w'
  | 'largeBtn'
  | 'largeBtn_w';

export interface SizeCategory {
  id: string;
  title: string;
  src: HoverType;
  hover: HoverType;
  bg: string;
}
