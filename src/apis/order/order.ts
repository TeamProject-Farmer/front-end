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

export const postVerifyIamport = async (uid: string, orderedData) => {
  const response = await request.post(`/main/verifyIamport/${uid}`, {
    orderedData,
  });
  // console.log('verify', response.data.response);
  return response.data.response;
};
