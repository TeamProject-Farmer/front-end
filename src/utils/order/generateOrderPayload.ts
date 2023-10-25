import generateOrderNumber from 'src/utils/order/generateOrderNumber';
import { OrderPayload } from 'src/types/order/types';
import payMethodOptions from './payMethodOptions';

const generateOrderPayload = ({
  productList,
  finalPrice,
  deliveryInfo,
  usedPoint,
  orderedData,
}: OrderPayload) => {
  // 주문번호
  const orderNumber = generateOrderNumber();

  // 주문 상품 정보
  const orderProduct = productList.map(item => ({
    productId: item.productId,
    optionId: item.optionId,
    count: item.count,
    orderPrice: item.totalPrice ? item.totalPrice : item.productPrice,
  }));

  const {
    username,
    address,
    zipcode,
    addressDetail,
    phoneNumber,
    memo,
    selfMemo,
    defaultAddr,
    payMethod,
  } = deliveryInfo;

  const orderData = {
    pg: payMethodOptions.find(item => item.method === payMethod)?.pg,
    pay_method: payMethod,
    merchant_uid: orderNumber,
    name:
      productList.length === 1
        ? productList[0].productName
        : `${productList[0].productName} 외 ${productList.length}개의 상품`,
    amount: finalPrice + 2500,
    buyer_name: username || orderedData.username,
    buyer_tel: phoneNumber || orderedData.phoneNumber,
    buyer_addr:
      address + addressDetail ||
      orderedData.address + orderedData.addressDetail,
    buyer_postcode: zipcode || orderedData.zipcode,
  };

  const dbData = {
    orderProduct,
    username,
    address,
    zipcode,
    addressDetail,
    phoneNumber,
    memo,
    selfMemo: memo === 'TEXT' ? selfMemo : '',
    defaultAddr,
    orderNumber,
    orderTotalPrice: finalPrice + 2500,
    totalQuantity: 1,
    payMethod: payMethod,
    point: usedPoint !== undefined ? usedPoint : 0,
  };

  return { orderData, dbData };
};

export default generateOrderPayload;
