import React from 'react'
import Header from '@components/Home/Header'
import Footer from '@components/Home/Footer'
import styled from '@emotion/styled'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Styled.Wrapper>
      <Header/>
      <Styled.FlexWrapper>
        <Styled.Title>주문/결제</Styled.Title>
        <Styled.StateBox>
          <Styled.State color="#59B941">주문결제 &gt; </Styled.State>
          <Styled.State>주문완료</Styled.State>
        </Styled.StateBox>
      </Styled.FlexWrapper>
      {children}
      <Footer/>
    </Styled.Wrapper>
  )
}

export default Layout

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  FlexWrapper: styled.div`
    width: 1200px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    font-size: 30px;
  `,
  StateBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  State: styled.div<{color?: string}>`
    color: ${({color}) => color ? color : '#000'};
  `
}
