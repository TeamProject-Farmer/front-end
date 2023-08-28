import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';

// 쿠폰 조회
export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon/use');
  console.log(response.data);
  return response.data;
};

// 쿠폰 삭제
export const postCouponDel = async (memberCouponId: number) => {
  const formData = new FormData();
  formData.append('memberCouponId', `${memberCouponId}`);
  return request.post('/member/coupon/del', formData);
};

// 적립금 조회
export const getMemberPoint = async () => {
  const response = await request.post('/member/point');
  return response.data.point;
};

// 배송 메모 리스트
export const getDeliveryMemo = async () => {
  const response = await request.get('member/orders/delivery/memo-list');
  console.log(response.data);
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
  const response = await request.post('/member/orders', data);
  return response.data;
};

// 장바구니 항목 삭제
export const postCartRemove = async (productId: number[]) => {
  return await request.post(`/member/cart/remove/${productId}`, productId);
};

// 주문조회
export const getOrdersComplete = async (orderNumber: string | string[]) => {
  const response = await request.get(
    `/member/orders/complete?orderNumber=${orderNumber}`,
  );
  return response.data;
};
