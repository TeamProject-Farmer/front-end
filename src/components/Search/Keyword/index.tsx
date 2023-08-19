import React from 'react';
import styled from '@emotion/styled';
import { KeywordProps } from 'src/types/search/types';

const Keyword = ({ title, wordList }: KeywordProps) => {
  return (
    <Styled.FlexWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.FlexWrapper>
        {wordList?.map((word: string, index: number) => (
          <Styled.Keyword key={index}>{word}</Styled.Keyword>
        ))}
      </Styled.FlexWrapper>
    </Styled.FlexWrapper>
  );
};

export default Keyword;

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
    color: #33b822;
  `,
};
