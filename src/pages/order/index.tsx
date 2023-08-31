import Styled from '../../components/Order/styles';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
import Delivery from '@components/Order/Delivery';
import InputGroup from '@components/Order/InputGroup';
import ProductList from '@components/Order/List/ProductList';
import Agreement from '@components/Order/Agreement';
import { DeliveryInfo } from 'src/types/order/types';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Payment from '@components/Order/Payment';
import { useForm } from 'react-hook-form';
import usePayment from 'src/hooks/order/usePayment';
import processPayment from 'src/utils/order/processPayment';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import getTotalPrice from 'src/utils/order/getTotalPrice';
import { useRouter } from 'next/router';
import InputField from '@components/Order/InputField';

const OrderPage: NextPageWithLayout = () => {
  const selectedCart = (state: RootState) => state.selectedCart;
  const order = (state: RootState) => state.order;
  const {
    payNowDisabled,
    totalAmount,
    getTotalAmount,
    handleAgreementChange,
    getUsedPoint,
    point,
    getUsedCoupon,
    couponId,
  } = usePayment();

  //react hook form
  const { handleSubmit, setValue, trigger, control } = useForm();

  //개별 상품페이지에서 온 제품인지 장바구니 목록인지
  const router = useRouter();
  const fromCart = Object.keys(router.query).length === 0;
  const cartItems = useSelector(selectedCart);
  const selectedProduct = useSelector(order);

  const productList = fromCart ? cartItems : selectedProduct;
  const totalPrice = getTotalPrice(productList);

  // 결제하기 버튼 클릭 시
  const onSubmit = async (deliveryInfo: DeliveryInfo) => {
    console.log('deliveryInfo', deliveryInfo);
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
        totalAmount,
        deliveryInfo,
        point,
        couponId,
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
        <Delivery control={control} setValue={setValue} trigger={trigger} />
        {/* 주문상품 */}
        <InputGroup title="주문상품">
          <Styled.InnerPaddingWrapper caption="product">
            <ProductList productList={productList} />
          </Styled.InnerPaddingWrapper>
        </InputGroup>
        {/* 적립금/쿠폰, 결제금액 */}
        <Payment
          totalPrice={totalPrice}
          getTotalAmount={getTotalAmount}
          getUsedPoint={getUsedPoint}
          getUsedCoupon={getUsedCoupon}
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
