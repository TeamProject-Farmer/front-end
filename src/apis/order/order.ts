import request from '../base';

export const getMemberCoupon = async () => {
  const response = await request.get('/member/coupon/use');
  return response.data;
};

export const getMemberPoint = async () => {
  const response = await request.post('/member/point');
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
  return response.data.response;
};

export const postOrders = async data => {
  const response = await request.post('/member/orders', {
    data,
  });
  console.log(response);
};
