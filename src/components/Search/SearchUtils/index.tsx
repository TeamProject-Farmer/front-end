import React from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { ISortOption } from 'src/types/search/types';

const SearchUtils = ({ sortingOptions, handleSort }) => {
  return (
    <Styled.Wrapper>
      {sortingOptions?.map((option: ISortOption) => (
        <div onClick={() => handleSort(option.param)} key={option.param}>
          {option.title}
        </div>
      ))}
    </Styled.Wrapper>
  );
};

export default SearchUtils;

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 59px;
    border-top: 2px solid ${theme.colors.green2};
    border-bottom: 2px solid ${theme.colors.green2};
    padding: 0 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 111px;
  `,
};
