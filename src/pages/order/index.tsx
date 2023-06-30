import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputGroup from '@components/Order/InputGroup'
import InputField from '@components/Order/InputField'
import ProductList from '@components/Order/ProductList'
import { OrderedProduct } from 'src/types/order/types'

const productList: OrderedProduct[] = [{id: '1', title: '상품명', count: 1, price: 12900}]

const index = () => {
  return (
    <Styled.Wrapper>
      <InputGroup title='주문정보'>
        <InputField label='주문자' field='text' />
        <InputField label='이메일' field='email' />
        <InputField label='휴대전화' field='phone'/>
        <InputField label='주소' field='address'/>
      </InputGroup>
      <InputGroup title='배송지'>
        <InputField label='받는사람' field='text' />
        <InputField label='주소' field='address'/>
        <InputField label='휴대전화' field='phone'/>
      </InputGroup>
      <InputGroup title='주문상품'>
        <ProductList productList={productList}/>
      </InputGroup>
      <InputGroup title='적립금/쿠폰'>
        <InputField label='적립금' field='point'/>
        <InputField label='쿠폰' field='coupon'/>
      </InputGroup>
      <InputGroup title='적립금/쿠폰'>
        <div></div>
      </InputGroup>
      <InputGroup title='결제수단'>
        <div></div>
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
