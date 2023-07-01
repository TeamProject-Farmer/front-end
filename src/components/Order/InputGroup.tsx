import React from 'react'
import styled from '@emotion/styled'
import theme from '@styles/theme';

interface InputGroupProps {
  title: string;
  children: React.ReactNode;
}

const InputGroup = ({title, children}:InputGroupProps) => {
  return (
    <Styled.Wrapper>
      <Styled.GroupTitle>{title}</Styled.GroupTitle>
        {children}
      </Styled.Wrapper>
  )
}

export default InputGroup

const Styled = {
  Wrapper: styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 1200px;
    padding: 20px;
    border: 1px solid #000;
    ::before {
      content: '';
      position: absolute;
      display: block;
      background-color: ${theme.colors.green4};
      width: 1198px;
      height: 15px;
      top: 0;
      left: 0;
    }
  `,
  GroupTitle: styled.p`
    font-size: 20px;
  `,
}

