import React from 'react'
import styled from '@emotion/styled'
import theme from '@styles/theme'
import Icon from '@components/Common/Icon'
import Keyword from '../Keyword'
import { IKeyword } from 'src/types/search/types'

const recentKeywordList: IKeyword = {title: '최근 검색 키워드', content: ['다육이', '피쉬본']}
const popularKeywordList: IKeyword = {title: '실시간 인기 키워드', content: ['다육이', '다육이', '다육이']}

const SearchContainer = () => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper>
        <Icon name="search" width={26} height={25} />
      </Styled.IconWrapper>
      <Styled.Input type='search'/>
      <Styled.KeywordWrapper>
        <Keyword keywordList={recentKeywordList}/>
        <Keyword keywordList={popularKeywordList}/>
      </Styled.KeywordWrapper>
    </Styled.Wrapper>
  )
}

export default SearchContainer

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
  `,
}
