import {
  postVerifyIamport,
  postOrders,
  postCouponDel,
  postCartRemove,
} from 'src/apis/order/order';
import generateOrderPayload from './generateOrderPayload';
import {
  OrderPayload,
  RequestPayResponse,
  ProcessPaymentResponse,
} from 'src/types/order/types';

const processPayment = async ({
  productList,
  selectedMethod,
  totalAmount,
  deliveryInfo,
  point,
  couponId,
}: OrderPayload): Promise<ProcessPaymentResponse> => {
  const { IMP } = window;
  IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

  const { orderData, dbData } = generateOrderPayload({
    productList,
    selectedMethod,
    totalAmount,
    deliveryInfo,
    point,
  });
  console.log('dbData', dbData);

  const productIds: number[] = productList.map(item => item.productId);

  return new Promise(async (resolve, reject) => {
    const callback = async (response: RequestPayResponse) => {
      const { paid_amount, error_msg, imp_uid } = response;
      const verifyRes = await postVerifyIamport(imp_uid, orderData);
      if (verifyRes.amount === paid_amount) {
        const resultInfo = await postOrders(dbData);
        if (couponId !== 0) {
          postCouponDel(couponId);
        }
        postCartRemove(productIds);
        resolve({ response, resultInfo });
      } else {
        reject(error_msg);
      }
    };
    IMP.request_pay(orderData, callback);
  });
};

export default processPayment;
