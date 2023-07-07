import React from 'react'
import styled from '@emotion/styled'
import { ILayoutProps } from 'src/types/search/types'

const NestedLayout = ({children}: ILayoutProps) => {
  return (
    <Styled.Wrapper>
        {children}
    </Styled.Wrapper>
  )
}

export default NestedLayout

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  `,
}