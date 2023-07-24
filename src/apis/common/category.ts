import request from '../base';

//category
export const getProductCategory = async () => {
  const response = await request.get('/main/product-category');
  return response.data;
};
