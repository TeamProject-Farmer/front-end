import request from '../base';

//상품 전체 리스트
export const getProductList = async (orderType: string, id: number) => {
  const response = await request({
    url: `/main/product/${id}?page=0&size=16`,
    params: {
      orderCondition: orderType,
    },
  });
  return response.data;
};

//MD PICK 리스트
export const getMDPickList = async () => {
  const response = await request({url: '/main/product/md-pick?division=MD_PICK'});
  return response.data;
};

//SHOP BY SIZE 상품
export const getShopBySize = async (size: string) => {
  const response = await request({url: `/main/product/shop-by-size?size=${size}`});
  return response.data;
};

//상품 세부 페이지
// http://3.39.150.186:8080/api/main/product/detail/20
export const getDetail = async (productId: number) => {
  const response = await request({url: `/main/product/detail/${productId}`});
  return response.data;
};

//기획전 상품 리스트
///main/product/plan-products?division=PLAN
export const getEventProduct = async () => {
  const response = await request({url: '/main/product/plan-products?division=PLAN'});
  return response.data;
};
