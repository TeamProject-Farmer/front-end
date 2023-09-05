import request from '../base';
import { RequestPayParams, PostOrderData } from 'src/types/order/types';
import { getCookie, setCookie } from 'src/utils/cookie';
import { getToken, setToken } from 'src/utils/token/token';
import { postMemberRefresh } from '../login/login';

// 쿠폰 조회
export const getMemberCoupon = async () => {
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
export const getMemberPoint = async () => {
  const response = await request.post('/member/point');
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
  const accessToken = getToken();
  const refreshToken = getCookie('refreshToken');
  if (!refreshToken) throw new Error('refreshToken 없음');

  if (!accessToken) {
    const response = await postMemberRefresh(refreshToken); // userData
    const newAccessToken = response.accessToken;
    const newRefreshToken = response.refreshToken;
    setToken(newAccessToken);
    setCookie('refreshToken', newRefreshToken);
  }

  const [pointData, couponData] = await Promise.all([
    getMemberPoint(),
    getMemberCoupon(),
  ]);

  return { pointData, couponData };
};

export const myPromiseAll = async (...func) => {
  // validatingTokens();
  const result = await Promise.all(func);
  return result;
};
