import React, { useState } from 'react';
import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import Payment from '@components/Order/Payment';
import InputGroup from '@components/Order/InputGroup';
import CheckBoxInput from '@components/Order/InputField/CheckBoxInput';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
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
        {/* 배송지 */}
        <Delivery />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper field="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰, 결제금액 */}
        <Payment />
        {/* 약관동의 */}
        <Agreement />
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
