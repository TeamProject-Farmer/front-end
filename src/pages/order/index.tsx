import React, { useState } from 'react'
import Layout from '@components/Order/Layout'
import styled from '@emotion/styled'
import InputGroup from '@components/Order/InputGroup'
import InputField from '@components/Order/InputField'
import CheckBoxInput from '@components/Order/CheckBoxInput'
import ProductList from '@components/Order/ProductList'
import PaymentList from '@components/Order/PaymentList'
import { OrderedProduct } from 'src/types/order/types'
import theme from '@styles/theme'

const productList: OrderedProduct[] = [{id: '1', title: '상품명', count: 1, price: 12900}]

const index = () => {
  return (
    <Layout>
      <Styled.Wrapper>
        <InputGroup title='주문정보'>
          <InputField label='주문자' field='text' required={true} />
          <InputField label='이메일' field='email' required={true} />
          <InputField label='휴대전화' field='phone' required={true}/>
          <InputField label='주소' field='address' required={true}/>
        </InputGroup>
        <InputGroup title='배송지'>
          <InputField label='받는사람' field='text' required={true} />
          <InputField label='주소' field='address' required={true}/>
          <InputField label='휴대전화' field='phone' required={true}/>
        </InputGroup>
        <InputGroup title='' before='none'>
          <InputField field='shippingMsg' placeholder='-- 메시지 선택 (선택사항) --' />
          <CheckBoxInput label='기본 배송지로 저장' />
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
        <InputGroup title='적립금/쿠폰' before='none'>
          <Styled.FlexColumnWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>주문상품</Styled.InfoTitle>
              <Styled.InfoPrice>129000원</Styled.InfoPrice>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>배송비</Styled.InfoTitle>
              <Styled.InfoPrice>+2500원</Styled.InfoPrice>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>할인/부가결제</Styled.InfoTitle>
              <Styled.InfoPrice><Styled.RedFont>-0</Styled.RedFont>원</Styled.InfoPrice>
            </Styled.FlexWrapper>
            <Styled.InnerContainer>
            <Styled.DiscountedPrice>
              <Styled.Title>최종 결제 금액</Styled.Title>
              <Styled.Title>15400원</Styled.Title>
            </Styled.DiscountedPrice>
          </Styled.InnerContainer>
          </Styled.FlexColumnWrapper>
        </InputGroup>
        <InputGroup title='결제수단' before='none'>
          <PaymentList/>
          <InputField field='card' placeholder='카드를 선택해주세요.'/>
          <InputField field='instalment' placeholder='일시불'/>
        </InputGroup>
        <Styled.AgreementBox>
          
        </Styled.AgreementBox>
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
  FlexWrapper: styled.div`
    display: flex;
    gap: 48px;
  `,
  FlexColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
  InfoTitle: styled.div`
    font-size: 16px;
    width: 95px;
  `,
  InfoPrice: styled.div`
    font-size: 16px;
    font-weight: 600;
  `,
  RedFont: styled.span`
    color: #FF0505;
  `,
  AgreementBox: styled.div`
    background-color: ${theme.colors.green4};
  `

}
