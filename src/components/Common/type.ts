export interface ProductProps {
  //number | string 이 부분은 나중에 좀 더 얘기해봐야할 것 같습니다!
  thumbnailImg: string;
  name: string;
  price: number | string;
  discountRate: number;
  reviewCount: number | string;
  averageStarRating: number;
}
