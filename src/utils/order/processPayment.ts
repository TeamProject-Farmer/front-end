import {
  ISelectedMethod,
  IDeliveryInfo,
  IOrderedProduct,
} from 'src/types/order/types';
import generateOrderNumber from './generateOrderNumber';
import { postVerifyIamport, postOrders } from 'src/apis/order/order';

const processPayment = (
  productList: IOrderedProduct[],
  totalAmount: number,
  payment: ISelectedMethod,
  deliveryInfo: IDeliveryInfo,
) => {
  const orderNumber = generateOrderNumber();
  if (payment === undefined) alert('결제 방법을 선택해주세요');
  const { pg, method } = payment;
  const { name, mobile, basicAddress, detailAddress, postCode } = deliveryInfo;
  const { productId, optionId, count } = productList[0];

  const data = {
    orderProduct: [
      { productId: 0, optionId: 0, count: 0 },
      { productId: 0, optionId: 0, count: 0 },
    ],
    productId: 0,
    optionId: 0,
    count: 0,
    username: 'string',
    address: 'string',
    zipcode: 'string',
    addressDetail: 'string',
    phoneNumber: 'string',
    memo: 'OFFICE',
    selfMemo: 'string',
    defaultAddr: true,
    orderNumber: 'string',
    orderTotalPrice: 0,
    totalQuantity: 0,
    point: 0,
    payMethod: 'string',
  };
  const orderedData = {
    pg: pg,
    pay_method: method,
    merchant_uid: orderNumber,
    name: productList[0].productName,
    amount: totalAmount,
    buyer_name: name,
    buyer_tel: mobile,
    buyer_addr: basicAddress + detailAddress,
    buyer_postcode: postCode,
  };
  const dbData = {
    orderProduct: productList,
    username: name,
    address: basicAddress,
    zipcode: postCode,
    addressDetail: detailAddress,
    phoneNumber: mobile,
    memo: 'OFFICE',
    selfMemo: '',
    defaultAddr: true,
    orderNumber: orderNumber,
    orderTotalPrice: totalAmount,
    totalQuantity: 1,
    payMethod: method,
    point: 1000,
  };
  const { IMP } = window;
  IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

  const callback = async (response: any) => {
    const { paid_amount, error_msg, imp_uid } = response;
    const verifyRes = await postVerifyIamport(imp_uid, orderedData);
    if (verifyRes.amount === paid_amount) {
      alert('결제 성공');
      postOrders(dbData).then(res => console.log(res));
      return;
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  IMP.request_pay(orderedData, callback);
};

export default processPayment;
