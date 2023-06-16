import React from 'react';
import Styled from './styles';
import Icon from '@components/Home/Common/Icon';
import { useState } from 'react';

const Header = () => {
  const [close, setClose] = useState(false)
  return (
    <Styled.Wrapper>
      <Styled.Event>
        첫 구매라면 누구나 최대 2만원 할인받기
        <Styled.CloseBtn>
          <Icon src="close" />
        </Styled.CloseBtn>
      </Styled.Event>
      <Styled.Header>
        <Styled.Menu>
          <Icon src="menu" />
        </Styled.Menu>
        <Styled.Logo>
          <Icon src="logo" width={180} />
        </Styled.Logo>
        <Styled.Utils>
          <li>
            <Icon src="myPage" />
          </li>
          <li>
            <Icon src="search" />
          </li>
          <li>
            <Icon src="cart" />
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
