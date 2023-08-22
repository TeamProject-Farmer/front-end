import React from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { SortOption } from 'src/types/search/types';

const SearchUtils = ({ sortingOptions, sortOption, handleSort }) => {
  return (
    <Styled.Wrapper>
      {sortingOptions?.map((option: SortOption) => (
        <Styled.Option
          onClick={() => handleSort(option.param)}
          clicked={sortOption === option.param}
          key={option.param}
        >
          {option.title}
        </Styled.Option>
      ))}
    </Styled.Wrapper>
  );
};

export default SearchUtils;

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 59px;
    border-top: 2px solid ${theme.colors.green2};
    border-bottom: 2px solid ${theme.colors.green2};
    padding: 0 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 111px;
    cursor: pointer;
  `,
  Option: styled.p<{ clicked: boolean }>`
    min-width: 75px;
    color: ${({ clicked }) => (clicked ? theme.colors.green2 : '#000 ')};
  `,
};
