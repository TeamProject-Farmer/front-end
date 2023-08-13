import { IconName } from '@components/Common/Icon';

export interface IIconProps {
  name: IconName | string;
  width: number;
  height: number;
}

export interface IProductProps {
  thumbnailImg: string;
  name: string;
  price: number;
  discountRate: number;
  reviewCount: number;
  averageStarRating: number;
}
