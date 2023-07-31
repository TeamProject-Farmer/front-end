import React, { useState } from 'react';
import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import InputGroup from '@components/Order/InputGroup';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
import { IOrderedProduct } from 'src/types/order/types';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Payment from '@components/Order/Payment';

const productList: IOrderedProduct[] = [
  { id: '1', title: '상품명', count: 1, price: 12900 },
];

const OrderPage: NextPageWithLayout = () => {
  const clickPay = () => {
    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

    const data = {
      pg: 'html5_inicis',
      // pg: 'kakaopay',
      pay_method: 'card',
      merchant_uid: 'ORD20180131-0000011',
      name: '노르웨이 회전 의자',
      amount: 100,
      buyer_email: 'gildong@gmail.com',
      buyer_name: '홍길동',
      buyer_tel: '010-4242-4242',
      buyer_addr: '서울특별시 강남구 신사동',
      buyer_postcode: '01181',
    };

    const callback = (response: any) => {
      console.log(response);
      const { success, merchant_uid, error_msg } = response;

      if (success) {
        alert('결제 성공');
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };
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
        <Styled.PayNow onClick={clickPay}>결제하기</Styled.PayNow>
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
