import React from 'react'
import styled from '@emotion/styled'
import Header from '@components/Home/Header'
import Footer from '@components/Home/Footer'
import { LayoutProps } from 'src/types/search/types'

const Layout = ({children}: LayoutProps) => {
  return (
    <Styled.Wrapper>
      <Header/>
        {children}
      <Footer/>
    </Styled.Wrapper>
  )
}

export default Layout

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  `,
}