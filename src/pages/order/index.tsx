import React, { useState } from 'react';
import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import InputGroup from '@components/Order/InputGroup';
import InputField from '@components/Order/InputField';
import CheckBoxInput from '@components/Order/InputField/CheckBoxInput';
import ProductList from '@components/Order/List/ProductList';
import PaymentList from '@components/Order/List/PaymentList';
import { IOrderedProduct } from 'src/types/order/types';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';

const productList: IOrderedProduct[] = [
  { id: '1', title: '상품명', count: 1, price: 12900 },
];

const OrderPage: NextPageWithLayout = () => {
  return (
    <>
      <Styled.Wrapper>
        {/* 주문정보 */}
        <InputGroup title="주문정보">
          <InputField label="주문자" field="text" required={true} />
          <InputField label="휴대전화" field="mobile" required={true} />
          <InputField label="주소" field="address" required={true} />
        </InputGroup>
        {/* 배송지 */}
        <InputGroup title="배송지">
          <InputField label="받는사람" field="text" required={true} />
          <InputField label="주소" field="address" required={true} />
          <InputField label="휴대전화" field="mobile" required={true} />
        </InputGroup>
        <InputGroup title="" before="none">
          <Styled.InnerPaddingWrapper field="shippingMsg">
            <InputField field="shippingMsg" />
            <CheckBoxInput label="기본 배송지로 저장" />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper field="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰 */}
        <InputGroup title="적립금/쿠폰">
          <InputField label="적립금" field="point" />
          <InputField label="쿠폰" field="coupon" />
          <Styled.InnerMarginWrapper>
            <Styled.DiscountedPrice>
              <Styled.Title>적용금액</Styled.Title>
              <Styled.Title>-0원</Styled.Title>
            </Styled.DiscountedPrice>
          </Styled.InnerMarginWrapper>
        </InputGroup>
        {/* 적립금/쿠폰 */}
        <InputGroup title="적립금/쿠폰" before="none">
          <Styled.FlexColumnWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>주문상품</Styled.InfoTitle>
              <Styled.InfoContent>129000원</Styled.InfoContent>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>배송비</Styled.InfoTitle>
              <Styled.InfoContent>+2500원</Styled.InfoContent>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <Styled.InfoTitle>할인/부가결제</Styled.InfoTitle>
              <Styled.InfoContent>
                <Styled.RedFont>-0</Styled.RedFont>원
              </Styled.InfoContent>
            </Styled.FlexWrapper>
            <Styled.InnerMarginWrapper>
              <Styled.DiscountedPrice>
                <Styled.Title>최종 결제 금액</Styled.Title>
                <Styled.Title>15400원</Styled.Title>
              </Styled.DiscountedPrice>
            </Styled.InnerMarginWrapper>
          </Styled.FlexColumnWrapper>
        </InputGroup>
        {/* 결제수단 */}
        <InputGroup title="결제수단" before="none">
          <Styled.InnerPaddingWrapper field="payment">
            <PaymentList />
            <InputField field="card" placeholder="카드를 선택해주세요." />
            <InputField field="instalment" placeholder="일시불" />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 약관동의 */}
        <Styled.AgreementWrapper>
          <Styled.FlexWrapper agreement={true}>
            <Styled.FlexColumnWrapper>
              <CheckBoxInput
                smallBox={false}
                label="아래 내용에 모두 동의합니다. (필수)"
              />
              <Styled.InnerPaddingWrapper field="agreement">
                <CheckBoxInput label="개인정보 제 3자 제공" />
                <CheckBoxInput label="개인정보 수집 및 이용" />
              </Styled.InnerPaddingWrapper>
            </Styled.FlexColumnWrapper>
            <CheckBoxInput label="결제대행 서비스 이용약관 동의 (필수)" />
          </Styled.FlexWrapper>
        </Styled.AgreementWrapper>
      </Styled.Wrapper>
      <Styled.PayWrapper>
        <Styled.PayNow>결제하기</Styled.PayNow>
      </Styled.PayWrapper>
    </>
  );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
