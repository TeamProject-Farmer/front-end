import React from 'react'
import styled from '@emotion/styled'
import InputGroup from '@components/Order/InputGroup'
import InputField from '@components/Order/InputField'

const index = () => {
  return (
    <Styled.Wrapper>
      <InputGroup title='주문정보'>
        <InputField label='주문자' field='text' />
        <InputField label='이메일' field='email' />
        <InputField label='휴대전화' field='phone'/>
        <InputField label='주소' field='address'/>
      </InputGroup>
    </Styled.Wrapper>
  )
}

export default index

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
}
