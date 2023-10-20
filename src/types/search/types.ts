export interface PostSearch {
  searchWord: string;
  memberEmail?: string;
}

export type ParamType = 'new' | 'review' | 'low' | 'high';

export interface SortOption {
  title: string;
  param: ParamType;
}

export interface KeywordProps {
  title: string;
  wordList: string[];
}

export interface SearchResponse {
  averageStarRating: number;
  discountRate: number;
  name: string;
  price: number;
  productId: number;
  reviewCount: number;
  thumbnailImg: string;
}
