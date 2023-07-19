import { request } from './base';

//category
export const getProductCategory = async () => {
  const response = await request.get('/api/main/product-category');
  return response.data;
};

//shop by size
export const getShopBySize = async (size: string) => {
  const response = await request.get('/api/main/product/shop-by-size', {
    params: {
      size: size,
    },
  });
  return response.data;
};

//best plant
export const getBestProduct = async () => {
  const response = await request.get('/api/main/product/best-product');
  return response.data;
};

//best review
export const getBestReview = async () => {
  const response = await request.get('/api/main/review');
  return response.data;
};

//news
export const getNews = async () => {
  const response = await request.get('/api/main/news');
  console.log(response.data);
  return response.data;
};
