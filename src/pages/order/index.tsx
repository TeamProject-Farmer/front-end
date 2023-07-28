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

const data = {
  pa: 'TC0ONETIME',
  pay_method: 'card', // 결제수단
  merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
  amount: 1000, // 결제금액
  name: '먹태깡', // 주문명
  buyer_name: '이민혀', // 구매자 이름
  buyer_tel: '01012341234', // 구매자 전화번호
  buyer_email: 'example@example', // 구매자 이메일
  buyer_addr: '신사동 661-16', // 구매자 주소
  buyer_postcode: '06018', // 구매자 우편번호
};

const OrderPage: NextPageWithLayout = () => {
  const callback = (response: any) => {
    console.log(response);
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };
  const clickPay = () => {
    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IMP_UID);
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
