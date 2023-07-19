import axios from 'axios';

// const API_URL = 'https://www.farmer-back.store';
const API_URL = 'http://3.39.150.186:8080';

//category
export const getProductCategory = async () => {
  const response = await axios.get(`${API_URL}/api/main/product-category`);
  // console.log(response.data);
  return response.data;
};

//shop by size
export const getShopBySize = async (size: string) => {
  const response = await axios.get(`${API_URL}/api/main/product/shop-by-size`, {
    params: {
      size: size,
    },
  });
  console.log(response.data);
  return response.data;
};

//best plant
export const getBestProduct = async () => {
  const response = await axios.get(`${API_URL}/api/main/product/best-product`);
  console.log(response.data);
  return response.data;
};
