import React, { useState } from 'react'
import Layout from '@components/Order/Layout'
import styled from '@emotion/styled'
import InputGroup from '@components/Order/InputGroup'
import InputField from '@components/Order/InputField'
import ProductList from '@components/Order/ProductList'
import { OrderedProduct } from 'src/types/order/types'
import theme from '@styles/theme'

const productList: OrderedProduct[] = [{id: '1', title: '상품명', count: 1, price: 12900}]

const index = () => {
  return (
    <Layout>
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
          <Styled.InnerContainer>
          <Styled.DiscountedPrice>
            <Styled.Title>적용금액</Styled.Title>
            <Styled.Title>-0원</Styled.Title>
          </Styled.DiscountedPrice>
          </Styled.InnerContainer>
        </InputGroup>
        <InputGroup title='적립금/쿠폰'>
          <div></div>
        </InputGroup>
        <InputGroup title='결제수단'>
          <div></div>
        </InputGroup>
      </Styled.Wrapper>
    </Layout>
  )
}

export default index

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    font-size: 20px;
  `,
  InnerContainer: styled.div`
    margin: -20px;
  `,
  DiscountedPrice: styled.div`
    /* position: absolute;
    bottom: 0;
    left: 0; */
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.green4};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 18px 20px;
  `,
  FlexColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `
}
