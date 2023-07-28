import request from '../base';

export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon');
  console.log(response);
  return response.data;
};
