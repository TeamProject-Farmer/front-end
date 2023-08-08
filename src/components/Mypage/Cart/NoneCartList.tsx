import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';

const NoneCartList = () => {
  return (
    <Styled.NoneListWrapper>
      <Styled.ListText>장바구니 목록이 비어있습니다.</Styled.ListText>

      <Styled.CartCommonButton
        onClick={() => console.log('쇼핑 페이지로')}
        backgroundColor={theme.colors.green1}
        padding="0.7"
        width="125"
      >
        <Styled.ButtonText size="14" color={theme.colors.white} weight="5s00">
          쇼핑 하러가기
        </Styled.ButtonText>
      </Styled.CartCommonButton>
    </Styled.NoneListWrapper>
  );
};

export default NoneCartList;
