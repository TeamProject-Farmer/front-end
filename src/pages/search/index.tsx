import React, { useEffect } from 'react';
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
import { postSearch, getRecentSearch } from 'src/apis/search/search';
import { sortingOptions } from 'src/utils/search/sortingOptions';
import { useQuery } from 'react-query';

const SearchPage: NextPageWithLayout = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string>();
  const [recentSearchWord, setRecentSearchWord] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  const memberEmail = useSelector((state: RootState) => state.user.email);
  const { data: searchData } = useQuery([searchResult], () =>
    getRecentSearch(memberEmail),
  );
  // console.log('data', searchData);
  useEffect(() => {
    if (memberEmail.length !== 0) {
      getRecentSearch(memberEmail).then(res =>
        setRecentSearchWord(res.memberSearchWord),
      );
    }
  }, []);

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
    const response = await postSearch(inputValue, 'new');
    console.log('response', response);
    const searchContent = response.searchProduct.content;
    // if (memberEmail !== undefined) {
    //   setRecentSearchWord(response.memberSearchWord);
    // }
    setSearchedWord(inputValue);
    setSearchResult(searchContent);
    setSortOption('new');
  };

  //검색 결과 정렬
  const handleSort = async (sortSearchCond: string) => {
    const response = await postSearch(inputValue, sortSearchCond);
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
        isLoggedin={memberEmail.length !== 0 ? true : false}
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
