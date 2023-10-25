import { ProductProps } from '../common/types';

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

export interface SearchUtilsProps {
  sortingOptions: SortOption[];
  sortOption: string;
  handleSort: (sortSearchCond: string) => Promise<void>;
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

export interface SearchContainerProps {
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => Promise<void>;
  inputValue: string;
  isLoggedIn: boolean;
  recentSearchWord: string[];
}

export interface SearchContentProps {
  searchedWord: string;
  searchResult: ProductProps[];
}
