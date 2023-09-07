import { IconName } from '@components/Common/Icon';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  imgUrl: string;
}

export interface IconProps {
  name: IconName;
  width: number;
  height: number;
  onClick?: () => void;
}

export interface ProductProps {
  productId: number;
  thumbnailImg: string;
  name: string;
  price: number;
  discountRate: number;
  reviewCount: number;
  averageStarRating: number;
}
