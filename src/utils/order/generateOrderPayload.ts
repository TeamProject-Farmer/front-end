import generateOrderNumber from 'src/utils/order/generateOrderNumber';
import { OrderPayload } from 'src/types/order/types';
const generateOrderPayload = ({
  defaultAddr,
  productList,
  selectedMethod,
  totalAmount,
  deliveryInfo,
}: OrderPayload) => {
  // 주문번호
  const orderNumber = generateOrderNumber();

  // 주문 상품 정보
  const orderProduct = productList.map(item => ({
    productId: item.productId,
    optionId: item.optionId,
    count: item.count,
    orderPrice: item.totalPrice,
  }));

  const {
    username,
    address,
    zipcode,
    addressDetail,
    phoneNumber,
    memo,
    selfMemo,
  } = deliveryInfo;

  const orderData = {
    pg: selectedMethod.pg,
    pay_method: selectedMethod.method,
    merchant_uid: orderNumber,
    name:
      productList.length === 1
        ? productList[0].productName
        : `${productList[0].productName} 외 ${productList.length}개의 상품ㄴ`,
    amount: totalAmount,
    buyer_name: username,
    buyer_tel: phoneNumber,
    buyer_addr: address + addressDetail,
    buyer_postcode: zipcode,
  };

  const data = {
    orderProduct,
    username,
    address,
    zipcode,
    addressDetail,
    phoneNumber,
    memo,
    selfMemo: memo !== 'text' ? '' : selfMemo,
    defaultAddr,
    orderNumber,
    orderTotalPrice: totalAmount,
    totalQuantity: 1,
    payMethod: selectedMethod.method,
  };

  return { orderData, data };
};

export default generateOrderPayload;
