export interface IPlantProps {
  productId?: number;
  ranking?: number;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}

export interface IReviewProps {
  memberNickName: string;
  imgUrl: string;
  content: string;
  likeCount: number;
  fiveStarRating: number;
}

export type TCategoryProps = {
  categoryId: number;
  categoryName: string;
  imgUrl: string;
};

export interface IBtnProps {
  content: string;
  color?: string;
}

export interface ITitleProps {
  title: string;
  color?: string;
}

export interface IconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
