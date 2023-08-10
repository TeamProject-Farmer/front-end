import request from '../base';

export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon/use');
  // console.log(response);
  return response.data;
};

export const postMemberPoint = async () => {
  const response = await request.post('/member/point');
  // console.log(response.data.point);
  return response.data.point;
};

export const getMemberOrderAddress = async () => {
  const response = await request.get('/member/orders/address');
  return response.data;
};
