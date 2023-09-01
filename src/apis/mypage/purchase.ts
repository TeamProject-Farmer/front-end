import { PurchaseListParams, PurchaseListProps } from 'src/types/mypage/types';
import request from '../base';

// 마이페이지 (메인) 구매목록 조회
export const getPurchase = async () => {
  const response = await request('/member/order-product');
  return response.data as PurchaseListProps[];
};

// 마이페이지 구매목록 조회
export const getPurchaseList = async (params: PurchaseListParams) => {
  const formData = new FormData();
  console.log('params', params);
  formData.append('startDate', params.startDate);
  formData.append('endDate', params.endDate);
  formData.append('orderStatus', params.orderStatus);

  const response = await request.post(
    `/member/order-product/order-list`,
    formData,
  );
  return response.data;
};
