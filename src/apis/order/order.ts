import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';

// 쿠폰 조회
export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon/use');
  return response.data;
};

// 적립금 조회
export const getMemberPoint = async () => {
  const response = await request.post('/member/point');
  console.log('point', response.data.point);
  return response.data.point;
};

// 배송 메모 리스트
export const getDeliveryMemo = async () => {
  const response = await request.get('member/orders/delivery/memo-list');
  // console.log(response.data);
  return response.data;
};

// 최근 배송지 이력 확인
export const getMemberOrderAddress = async () => {
  const response = await request.get('/member/orders/address');
  return response.data;
};

// 아임포트 결제 검증
export const postVerifyIamport = async (
  uid: string,
  orderedData: RequestPayParams,
) => {
  const response = await request.post(`/main/verifyIamport/${uid}`, {
    orderedData,
  });
  return response.data.response;
};

// DB 주문/결제 요청
export const postOrders = async (data: PostOrderData) => {
  console.log('data', data);
  const response = await request.post('/member/orders', { data });
  console.log(response);
};
