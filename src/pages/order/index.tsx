import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Styled from '../../components/Order/styles';

import type { NextPageWithLayout } from '@pages/_app';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import InputGroup from '@components/Order/InputGroup';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
import Payment from '@components/Order/Payment';
import InputField from '@components/Order/InputField';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { useForm } from 'react-hook-form';

import { DeliveryInfo } from 'src/types/order/types';

import useCoupon from 'src/hooks/order/useCoupon';
import usePoint from 'src/hooks/order/usePoint';
import useAgreement from 'src/hooks/order/useAgreement';

import processPayment from 'src/utils/order/processPayment';
import getTotalPrice from 'src/utils/order/getTotalPrice';

const OrderPage: NextPageWithLayout = () => {
  // 장바구니 or 개별 상품페이지 주문
  const selectedCart = (state: RootState) => state.selectedCart;
  const order = (state: RootState) => state.order;

  const router = useRouter();
  const fromCart = Object.keys(router.query).length === 0;
  const cartItems = useSelector(selectedCart);
  const selectedProduct = useSelector(order);

  const productList = fromCart ? cartItems : selectedProduct;

  const totalPrice = getTotalPrice(productList);

  // 약관 동의
  const { payNowDisabled, handleAgreementChange } = useAgreement();

  const {
    couponList,
    selectedCouponId,
    handleSelectedCoupon,
    discountedPrice,
  } = useCoupon(totalPrice);

  const { typedPoint, usedPoint, handlePointChange, handlePointClick } =
    usePoint();

  const finalPrice =
    selectedCouponId === 0
      ? totalPrice - usedPoint
      : totalPrice - discountedPrice;

  //react hook form
  const { handleSubmit, setValue, control } = useForm();

  // 결제하기 버튼 클릭 시
  const onSubmit = async (deliveryInfo: DeliveryInfo) => {
    if (deliveryInfo.payMethod === undefined) {
      alert('결제 방법을 선택해주세요');
      return;
    }

    if (payNowDisabled) {
      alert('주문 내용 확인 및 결제에 동의하셔야 구매가 가능합니다.');
      return;
    }

    try {
      const { resultInfo } = await processPayment({
        productList,
        finalPrice,
        deliveryInfo,
        usedPoint,
        selectedCouponId,
      });
      const { orderNumber } = resultInfo;
      router.push({
        pathname: '/order/result',
        query: {
          orderNumber,
        },
      });
    } catch (error) {
      alert(`결제 실패: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Wrapper>
        {/* 배송지 */}
        <Delivery control={control} setValue={setValue} />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper caption="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰, 결제금액 */}
        <Payment
          couponList={couponList}
          usedPoint={usedPoint}
          typedPoint={typedPoint}
          selectedCouponId={selectedCouponId}
          handlePointChange={handlePointChange}
          handleSelectedCoupon={handleSelectedCoupon}
          discountedPrice={discountedPrice}
          finalPrice={finalPrice}
          handlePointClick={handlePointClick}
          totalPrice={totalPrice}
        />
        {/* 결제 수단 */}
        <InputGroup title="결제수단" before="none">
          <Styled.InnerPaddingWrapper caption="payment">
            <InputField control={control} caption="payMethod" />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
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
