import React, { useState } from 'react';
import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import Payment from '@components/Order/Payment';
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
        {/* 주문정보, 배송지 */}
        <Delivery />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper field="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금 쿠폰 */}
        <Payment />
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
