import request from '../base';

export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon/use');
  // console.log(response);
  return response.data;
};

export const getMemberPoint = async () => {
  const response = await request.post('/member/point');
  // console.log('point', response.data.point);
  return response.data.point;
};

export const getMemberOrderAddress = async () => {
  const response = await request.get('/member/orders/address');
  return response.data;
};

export const postVerifyIamport = async data => {
  const response = await request.post(
    `/main/verify/${process.env.NEXT_PUBLIC_IMP_UID}`,
    { data },
  );
  console.log('verify', response);
  return response;
};
