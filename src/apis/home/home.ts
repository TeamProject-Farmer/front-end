import request from '../base';

//main banner
export const getMainBanner = async () => {
  return await request.get('/main/banner');
};

//category
export const getProductCategory = async () => {
  return await request.get('/main/product-category');
};

//shop by size
export const getShopBySize = async (size: string) => {
  const response = await request({
    url: '/main/product/shop-by-size',
    params: {
      size: size,
    },
  });
  return response;
};

//best plant
export const getBestProduct = async () => {
  return await request.get('/main/product/best-product');
};

//best review
export const getBestReview = async () => {
  return await request.get('/main/review');
};

//news
export const getNews = async () => {
  return await request.get('/main/news');
};
