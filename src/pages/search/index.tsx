import React, { useState, ReactElement, useRef } from 'react';

import Layout from '@pages/layout';
import type { NextPageWithLayout } from '@pages/_app';
import NestedLayout from '@components/Search/Layout';
import SearchContainer from '@components/Search/SearchContainer';
import SearchUtils from '@components/Search/SearchUtils';
import SearchContent from '@components/Search/SearchContent';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { useQuery } from '@tanstack/react-query';

import {
  postSearch,
  postSortSearch,
  getRecentSearch,
} from 'src/apis/search/search';

import { sortingOptions } from 'src/utils/search/sortingOptions';

import { ProductProps } from 'src/types/common/types';

const SearchPage: NextPageWithLayout = () => {
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ProductProps[] | null>(null);
  const [sortOption, setSortOption] = useState<string>('');
  const inputRef = useRef(null);

  const socialType = useSelector((state: RootState) => state.user.socialType);
  const email = useSelector((state: RootState) => state.user.email);
  const memberEmail = socialType ? `${email}[${socialType}]` : email;

  const { data: recentSearchWord } = useQuery({
    queryKey: [email, searchedWord],
    queryFn: getRecentSearch,
    enabled: memberEmail ? true : false,
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearchResult();
    }
  };

  const handleSearchResult = async () => {
    const response = await postSearch(inputRef.current?.value, memberEmail);
    setSearchResult(response);
    setSearchedWord(inputRef.current?.value);
    setSortOption('new');
  };

  const handleSort = async (sortSearchCond: string) => {
    const response = await postSortSearch(
      inputRef.current?.value,
      sortSearchCond,
      memberEmail,
    );
    setSortOption(sortSearchCond);
    setSearchResult(response);
  };

  return (
    <>
      <SearchContainer
        handleKeyPress={handleKeyPress}
        handleClick={handleSearchResult}
        recentSearchWord={recentSearchWord}
        ref={inputRef}
      />
      <SearchUtils
        sortingOptions={sortingOptions}
        sortOption={sortOption}
        handleSort={handleSort}
      />
      <SearchContent searchedWord={searchedWord} searchResult={searchResult} />
    </>
  );
};

export default SearchPage;

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
