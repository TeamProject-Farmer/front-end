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
import { ReactElement } from 'react';
import Payment from '@components/Order/Payment';
import { useForm } from 'react-hook-form';
import usePayment from 'src/hooks/order/usePayment';
import processPayment from 'src/utils/order/processPayment';

const productList: IOrderedProduct[] = [
  {
    cartId: 0,
    productId: 0,
    imgUrl: 'string',
    productName: 'string',
    optionId: 0,
    optionName: 'string',
    count: 0,
    productPrice: 0,
    totalPrice: 1000,
  },
];

const OrderPage: NextPageWithLayout = () => {
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

  const onSubmit = (deliveryInfo: IDeliveryInfo) => {
    if (payNowDisabled) {
      alert('주문 내용 확인 및 결제에 동의하셔야 구매가 가능합니다.');
      return;
    }
    processPayment(
      productList[0].productName,
      totalAmount,
      selectedMethod,
      deliveryInfo,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Wrapper>
        {/* 배송지 */}
        <Delivery control={control} setValue={setValue} trigger={trigger} />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper field="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰, 결제금액 */}
        <Payment
          totalPrice={productList[0].totalPrice}
          getTotalAmount={getTotalAmount}
        />
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
