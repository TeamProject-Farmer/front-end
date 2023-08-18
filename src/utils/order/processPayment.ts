import { postVerifyIamport, postOrders } from 'src/apis/order/order';
import generateOrderPayload from './generateOrderPayload';
import { OrderPayload } from 'src/types/order/types';

const processPayment = ({
  defaultAddr,
  productList,
  selectedMethod,
  totalAmount,
  deliveryInfo,
}: OrderPayload) => {
  const { IMP } = window;
  IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

  const { orderData, data } = generateOrderPayload({
    defaultAddr,
    productList,
    selectedMethod,
    totalAmount,
    deliveryInfo,
  });

  const callback = async response => {
    // 타입 지정
    console.log(response);
    const { paid_amount, error_msg, imp_uid } = response;
    const verifyRes = await postVerifyIamport(imp_uid, orderData);
    if (verifyRes.amount === paid_amount) {
      alert('결제 성공');
      postOrders(data).then(res => console.log(res));
      return;
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  IMP.request_pay(orderData, callback);
};

export default processPayment;
