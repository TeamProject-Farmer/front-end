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
