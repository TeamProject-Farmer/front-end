import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import InputGroup from '@components/Order/InputGroup';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
import PayMethod from '@components/Order/PayMethod';
import { IOrderedProduct, IDeliveryInfo } from 'src/types/order/types';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement, useEffect } from 'react';
import Payment from '@components/Order/Payment';
import { useForm } from 'react-hook-form';
import usePayment from 'src/hooks/order/usePayment';
import processPayment from 'src/utils/order/processPayment';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import getTotalPrice from 'src/utils/order/getTotalPrice';

const OrderPage: NextPageWithLayout = () => {
  const orderProduct = (state: RootState) => state.orderProduct;

  const {
    payNowDisabled,
    totalAmount,
    selectedMethod,
    setSelectedMethod,
    getTotalAmount,
    handleAgreementChange,
  } = usePayment();
  //react hook form
  const { handleSubmit, setValue, trigger, control } = useForm();

  //개별 상품페이지에서 온 제품인지 장바구니 목록인지
  const router = useRouter();
  const fromCart = Object.keys(router.query).length === 0;

  const productList = useSelector(orderProduct);
  const totalPrice = getTotalPrice(productList);
  console.log(productList);

  const onSubmit = (deliveryInfo: IDeliveryInfo) => {
    if (payNowDisabled) {
      alert('주문 내용 확인 및 결제에 동의하셔야 구매가 가능합니다.');
      return;
    }
    processPayment(productList, totalAmount, selectedMethod, deliveryInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Wrapper>
        {/* 배송지 */}
        <Delivery control={control} setValue={setValue} trigger={trigger} />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper field="product">
            <ProductList productList={fromCart ? productList : {}} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰, 결제금액 */}
        <Payment totalPrice={totalPrice} getTotalAmount={getTotalAmount} />
        {/* 결제 수단 */}
        <PayMethod
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
        {/* 약관동의 */}
        <Agreement handleAgreementChange={handleAgreementChange} />
      </Styled.Wrapper>
      <Styled.PayWrapper>
        <Styled.PayNow type="submit">결제하기</Styled.PayNow>
      </Styled.PayWrapper>
    </form>
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
