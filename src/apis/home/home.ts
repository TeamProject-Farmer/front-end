import { request, request2 } from './base';

//main banner
export const getMainBanner = async () => {
  return request({
    url: '/main/banner',
  });
};

export const getMainBanner2 = async () => {
  return await request2({
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
  return request({
    url: '/main/news',
  });
};
