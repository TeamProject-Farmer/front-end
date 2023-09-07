import axios from 'axios';
import { BASE_URL } from '../base';
import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';
import { Coupon, OrderedData, ResultData } from 'src/types/order/types';

// 쿠폰 조회
export const getCoupon = async (): Promise<Coupon[]> => {
  const response = await request.get('/member/coupon/use');
  return response.data;
};

// 쿠폰 삭제
export const postCouponDel = async (memberCouponId: number) => {
  const formData = new FormData();
  formData.append('memberCouponId', `${memberCouponId}`);
  return request.post('/member/coupon/del', formData);
};

// 적립금 조회
export const getPoint = async (): Promise<number> => {
  const response = await request.post('/member/point');
  return response.data.point;
};

// 최근 배송지 이력 확인
export const getOrderAddress = async (): Promise<OrderedData> => {
  const response = await request.get('/member/orders/address');
  return response.data;
};

// 아임포트 결제 검증
export const postVerifyIamport = async (
  uid: string,
  orderedData: RequestPayParams,
) => {
  const response = await axios.post(`${BASE_URL}/main/verifyIamport/${uid}`, {
    orderedData,
  });
  return response.data.response;
};

// DB 주문/결제 요청
export const postOrders = async (data: PostOrderData): Promise<ResultData> => {
  const response = await request.post('/member/orders', data);
  return response.data;
};

// 장바구니 항목 삭제
export const postCartRemove = async (cartId: number[]) => {
  return await request.post('/member/cart/remove', cartId);
};

// 주문조회
export const getOrdersComplete = async (
  orderNumber: string | string[],
): Promise<ResultData> => {
  const response = await request.get(
    `/member/orders/complete?orderNumber=${orderNumber}`,
  );
  return response.data;
};
