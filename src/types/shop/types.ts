export interface ShopDetailPageProps {
  productList: ProductAPI[];

}

export interface ProductAPI {
  productId: number;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}
