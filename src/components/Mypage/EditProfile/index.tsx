import React from 'react';
import { Styled } from '../styles';
import InputGroup from './InputGroup';

const Row = () => {
  return (
    <Styled.BoxWrapper>
      <Styled.CardBox size="350">
        <Styled.HeaderDiv>
          <Styled.HeaderText />
          <Styled.EditButton>수정하기</Styled.EditButton>
        </Styled.HeaderDiv>

        <InputGroup />
      </Styled.CardBox>
    </Styled.BoxWrapper>
  );
};

export default Row;
