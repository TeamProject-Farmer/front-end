import { useState } from 'react';
import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import InputGroup from '@components/Order/InputGroup';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
import PayMethod from '@components/Order/PayMethod';
import {
  IOrderedProduct,
  ISelectedMethod,
  IDeliveryInfo,
} from 'src/types/order/types';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Payment from '@components/Order/Payment';
import { useForm } from 'react-hook-form';
import processPayment from 'src/utils/order/processPayment';

const productList: IOrderedProduct[] = [
  { id: '1', title: '상품명', count: 1, price: 12900 },
];

const OrderPage: NextPageWithLayout = () => {
  // 최종 주문 금액
  const [totalAmount, setTotalAmount] = useState<number>();
  // 약관동의
  const [payNowDisabled, setPayNowDisabled] = useState<boolean>(true);
  // 결제 방식
  const [selectedMethod, setSelectedMethod] = useState<ISelectedMethod>();
  //배송 정보
  const [deliveryInfo, setDeliveryInfo] = useState<IDeliveryInfo>();
  //react hook form
  const { handleSubmit, setValue, trigger, control } = useForm();

  //전체 가격 가져오기
  const getTotalAmount = (amount: number) => {
    setTotalAmount(amount);
  };
  // 약관동의
  const handleAgreementChange = (
    isAllChecked: boolean,
    paymentChecked: boolean,
  ) => {
    if (isAllChecked && paymentChecked) {
      setPayNowDisabled(false);
    } else {
      setPayNowDisabled(true);
    }
  };

  const onSubmit = (deliveryInfo: IDeliveryInfo) => {
    if (payNowDisabled) {
      alert('주문 내용 확인 및 결제에 동의하셔야 구매가 가능합니다.');
      return;
    }
    console.log(deliveryInfo);
    processPayment(totalAmount, selectedMethod, deliveryInfo);
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
        <Payment getTotalAmount={getTotalAmount} />
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
