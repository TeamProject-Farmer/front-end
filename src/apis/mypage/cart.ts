import { CartListProps } from 'src/types/mypage/types';
import request from '../base';

// 장바구니 목록 조회
export const getCartList = async () => {
  const response = await request('/member/cart/cart-list');
  return response.data as CartListProps[];
};

// 장바구니 목록 삭제
export const getRemoveCartList = async (cartId: number[]) => {
  return await request.post('/member/cart/remove',cartId);
};

// 장바구니 수량 수정
export const getEditCount = async (cartId: number, quantityCond: string) => {
  const formData = new FormData();
  formData.append('cartId', String(cartId));
  formData.append('quantityCond', quantityCond);

  return await request.post(`/member/cart/change-quantity`, formData);
};