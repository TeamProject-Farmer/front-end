import { request } from './base';

//main banner
export const getMainBanner = async () => {
  return request({
    url: '/main/banner',
  });
};

//category
export const getProductCategory = async () => {
  return request({
    url: '/main/product-category',
  });
};

//shop by size
export const getShopBySize = async (size: string) => {
  return request({
    url: '/main/product/shop-by-size',
    params: {
      size: size,
    },
  });
};

//best plant
export const getBestProduct = async () => {
  return request({
    url: '/main/product/best-product',
  });
};

//best review
export const getBestReview = async () => {
  return request({
    url: '/main/review',
  });
};

//news
export const getNews = async () => {
  const response = await request({
    url: '/main/news',
  });
  console.log(response);
  return response;
};
