import React from 'react';
import Layout from '@pages/layout';
import NestedLayout from '@components/Search/Layout';
import SearchContainer from '@components/Search/SearchContainer';
import SearchUtils from '@components/Search/SearchUtils';
import SearchContent from '@components/Search/SearchContent';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { postSearch } from 'src/apis/search/search';
import { sortingOptions } from 'src/utils/search/sortingOptions';
import { current } from '@reduxjs/toolkit';

const SearchPage: NextPageWithLayout = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState();
  const [recentSearchWord, setRecentSearchWord] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  const memberEmail = useSelector((state: RootState) => state.user.email);

  //검색 input value값 관리
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearchResult();
    }
  };

  //검색 버튼 클릭 시
  const handleSearchResult = async () => {
    const response = await postSearch(inputValue, memberEmail);
    const searchContent = response.searchProduct.content;
    if (memberEmail !== undefined) {
      setRecentSearchWord(response.memberSearchWord);
    }
    setSearchedWord(inputValue);
    setSearchResult(searchContent);
    setSortOption('new');
  };

  //검색 결과 정렬
  const handleSort = async (sortSearchCond: string) => {
    const response = await postSearch(inputValue, memberEmail, sortSearchCond);
    setSortOption(sortSearchCond);
    setSearchResult(response.searchProduct.content);
  };

  return (
    <>
      <SearchContainer
        handleKeyUp={handleKeyUp}
        handleChange={handleChange}
        handleClick={handleSearchResult}
        inputValue={inputValue}
        recentSearchWord={recentSearchWord}
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
