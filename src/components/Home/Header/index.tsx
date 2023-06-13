import React from 'react'
import Styled from './styles'
import Icon from '@components/Home/common/Icon'

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Event>첫 구매라면 누구나 최대 2만원 할인받기
        <Styled.CloseBtn><Icon src='close'/></Styled.CloseBtn>
      </Styled.Event>
      <Styled.Header>
        <Styled.Menu>
        <Icon src='menu'/>
        </Styled.Menu>
        <Styled.Logo>
        <Icon src='logo'width={100}/>
        </Styled.Logo>
        <Styled.Utils>
          <Icon src='myPage'/>
          <Icon src='search'/>
          <Icon src='cart'/>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  )
}

export default Header


