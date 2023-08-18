import { IconName } from '@components/Common/Icon';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface IIconProps {
  name: IconName | string;
  width: number;
  height: number;
  onClick?: () => void;
}

export interface IProductProps {
  thumbnailImg: string;
  name: string;
  price: number;
  discountRate: number;
  reviewCount: number;
  averageStarRating: number;
}
