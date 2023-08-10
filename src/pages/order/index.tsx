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
import { postVerifyIamport } from 'src/apis/order/order';
const productList: IOrderedProduct[] = [
  { id: '1', title: '상품명', count: 1, price: 12900 },
];

const orderData = {
  productId: '1',
  optionId: '123',
  integerCount: '1',
  username: '지원',
  address: '주소',
  zipcode: '123',
  addressDetail: '상세주소',
  phoneNumber: '123',
  memo: 'OFFICE',
  selfMemo: null,
  orderNumber: '123',
  orderTotalPrice: 123,
  totalQuantity: 3,
  payMethod: 'kakaopay',
};

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

  // 약관동의
  const handleAgreementChange = (isAllChecked, paymentChecked) => {
    if (isAllChecked && paymentChecked) {
      setPayNowDisabled(false);
    } else {
      setPayNowDisabled(true);
    }
  };

  const onSubmit = submitData => {
    console.log('제출되었습니다');
    setDeliveryInfo(submitData);
    if (payNowDisabled) {
      alert('주문 내용 확인 및 결제에 동의하셔야 구매가 가능합니다.');
      return;
    }

    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

    const data = {
      pg: selectedMethod.pg,
      pay_method: selectedMethod.method,
      merchant_uid: 'ORD20180131-0000016',
      name: '노르웨이 회전 의자',
      amount: 100,
      buyer_email: 'gildong@gmail.com',
      buyer_name: deliveryInfo.name,
      buyer_tel: deliveryInfo.mobile,
      buyer_addr: deliveryInfo.basicAddress + deliveryInfo.detailAddress,
      buyer_postcode: deliveryInfo.postCode,
    };

    const orderData = {
      productId: '1',
      optionId: '123',
      integerCount: '1',
      username: deliveryInfo.name,
      address: deliveryInfo.basicAddress + deliveryInfo.detailAddress,
      zipcode: deliveryInfo.postCode,
      addressDetail: '상세주소',
      phoneNumber: deliveryInfo.mobile,
      memo: 'OFFICE',
      selfMemo: null,
      orderNumber: 'ORD20180131-0000014',
      orderTotalPrice: 100,
      totalQuantity: 3,
      payMethod: selectedMethod.method,
    };

    const callback = (response: any) => {
      console.log(response);
      const { success, merchant_uid, error_msg } = response;

      if (success) {
        // postVerifyIamport(data);
        alert('결제 성공');
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
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
        <Payment setTotalAmount={setTotalAmount} />
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
