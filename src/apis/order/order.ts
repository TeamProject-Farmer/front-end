import axios from 'axios';
import { BASE_URL } from '../base';
import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';
import { Coupon, OrderedData, ResultData } from 'src/types/order/types';

// 쿠폰 조회
export const getCoupon = async () => {
  const response = await request.get<Coupon[]>('/member/coupon/use');
  return response.data;
};

// 쿠폰 삭제
export const postCouponDel = async (memberCouponId: number) => {
  const formData = new FormData();
  formData.append('memberCouponId', `${memberCouponId}`);
  return request.post('/member/coupon/del', formData);
};

type GetPointResponse = {
  point: number;
};

// 적립금 조회
export const getPoint = async () => {
  const response = await request.post<GetPointResponse>('/member/point');
  return response.data.point;
};

// 최근 배송지 이력 확인
export const getOrderAddress = async () => {
  const response = await request.get<OrderedData>('/member/orders/address');
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
export const getOrdersComplete = async (orderNumber: string | string[]) => {
  const response = await request.get<ResultData>(
    `/member/orders/complete?orderNumber=${orderNumber}`,
  );
  return response.data;
};
