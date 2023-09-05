import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';
import { getCookie, setCookie } from 'src/utils/cookie';
import { getTokens, setToken } from 'src/utils/token/token';
import { postMemberRefresh } from '../login/login';
import axios from 'axios';
import validateTokens from 'src/utils/token/validateTokens';
import renewTokens from 'src/utils/token/getNewTokens';
import { Coupon, Point, OrderedData } from 'src/types/order/types';

// 쿠폰 조회
export const getMemberCoupon = async (): Promise<Coupon[]> => {
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
export const getMemberPoint = async (): Promise<number> => {
  const response = await request.post('/member/point');
  return response.data.point;
};

// 최근 배송지 이력 확인
export const getMemberOrderAddress = async (): Promise<OrderedData> => {
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
export const postCartRemove = async (cartId: number[]) => {
  return await request.post('/member/cart/remove', cartId);
};

// 주문조회
export const getOrdersComplete = async (orderNumber: string | string[]) => {
  const response = await request.get(
    `/member/orders/complete?orderNumber=${orderNumber}`,
  );
  return response.data;
};

// 오더페이지
export const getOrderPageInfo = async () => {
  const accessToken = getTokens();
  // const refreshToken = getCookie('refreshToken');
  // if (!refreshToken) throw new Error('refreshToken 없음');

  // if (!accessToken) {
  //   const response = await postMemberRefresh(refreshToken); // userData
  //   const newAccessToken = response.accessToken;
  //   const newRefreshToken = response.refreshToken;
  //   setToken(newAccessToken);
  //   setCookie('refreshToken', newRefreshToken);
  // }
  const [pointData, couponData, addressData] = await Promise.all([
    getMemberPoint(),
    getMemberCoupon(),
    getMemberOrderAddress(),
  ]);

  return { pointData, couponData, addressData };
};

export const myPromiseAll = async (...func) => {
  const { accessToken, refreshToken } = getTokens();

  if (!refreshToken) throw new Error('로그인화면으로보내야함');

  // 자 여러분 이제부터 refreshToken 존재합니다!
  if (!accessToken) {
    // const tokens = await renewTokens(); // 새걸로 갱신
    await renewTokens();
  }

  // 자 여러분 이제부터 accessToken 존재합니다!

  const result = await Promise.all(func); // 비동기처리 '동시'
  return result;
};
