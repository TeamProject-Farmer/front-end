import React from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '@components/Common/Icon';
import Keyword from '../Keyword';

const popularContent: string[] = ['다육이', '선인장', '블루베리'];

const SearchContainer = ({
  handleChange,
  handleClick,
  searchWord,
  recentSearchWord,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper onClick={handleClick}>
        <Icon name="search" width={26} height={25} />
      </Styled.IconWrapper>
      <Styled.Input type="search" onChange={handleChange} value={searchWord} />
      <Styled.KeywordWrapper>
        {recentSearchWord.length !== 0 && (
          <Keyword title="최근 검색 키워드" wordList={recentSearchWord} />
        )}
        <Keyword title="실시간 인기 키워드" wordList={popularContent} />
      </Styled.KeywordWrapper>
    </Styled.Wrapper>
  );
};

export default SearchContainer;

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 863px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 28px;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  IconWrapper: styled.div`
    position: absolute;
    top: 17px;
    left: 21px;
  `,
  Input: styled.input`
    width: 863px;
    height: 58px;
    border-radius: 29px;
    background-color: ${theme.colors.green4};
    padding-left: 55px;
  `,
};
