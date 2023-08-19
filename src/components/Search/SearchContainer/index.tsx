import React from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '@components/Common/Icon';
import Keyword from '../Keyword';

const SearchContainer = ({
  handleKeyUp,
  handleChange,
  handleClick,
  inputValue,
  recentSearchWord,
  isLoggedin,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper onClick={handleClick}>
        <Icon name="search" width={26} height={25} />
      </Styled.IconWrapper>
      <Styled.Input
        type="search"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={inputValue}
      />
      <Styled.KeywordWrapper>
        {isLoggedin && (
          <Keyword title="최근 검색 키워드" wordList={recentSearchWord} />
        )}
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
    /* input 초기화 버튼 제거 */
    input::-ms-clear,
    input::-ms-reveal {
      display: none;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
      display: none;
    }
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
