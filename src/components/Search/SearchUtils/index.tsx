import React from 'react'
import styled from '@emotion/styled'
import theme from '@styles/theme'

const sortingOptions: string[] = ['신상품순', '리뷰많은순', '낮은가격순', '높은가격순']

const SearchUtils = () => {
  return (
    <Styled.Wrapper>
      {
        sortingOptions?.map((option, index) => (
          <div key={index}>{option}</div>
        ))
      }
    </Styled.Wrapper>
  )
}

export default SearchUtils

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

}
