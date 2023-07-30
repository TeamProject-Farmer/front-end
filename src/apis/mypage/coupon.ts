import { CouponArrayProps } from 'src/types/mypage/types';
import request from '../base';

export const getCoupon = async () => {
  const response = await request('/member/coupon');
  return response.data as CouponArrayProps[];
};
