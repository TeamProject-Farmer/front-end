import React from 'react'
import styled from '@emotion/styled'

const Keyword = ({keywordList}) => {
  const {title, content} = keywordList;
  return (
    <Styled.FlexWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.FlexWrapper>
        {
          content?.map(word => (
            <Styled.Keyword>{word}</Styled.Keyword>
          ))
        }
      </Styled.FlexWrapper>
    </Styled.FlexWrapper>
  )
}

export default Keyword

const Styled = {
  FlexWrapper: styled.div`
    display: flex;
    gap: 14px;
  `,
  Title: styled.div`
    font-size: 14px;
    font-weight: 400;
  `,
  Keyword: styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #33B822;
  `
}