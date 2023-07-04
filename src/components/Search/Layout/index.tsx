import React from 'react'
import styled from '@emotion/styled'
import Header from '@components/Common/Header'
import Footer from '@components/Common/Footer'
import { ILayoutProps } from 'src/types/search/types'

const Layout = ({children}: ILayoutProps) => {
  return (
    <Styled.Wrapper>
        {children}
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