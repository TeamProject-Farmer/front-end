import axios from 'axios';
import { BASE_URL } from '../base';

//category
export const getProductCategory = async () => {
  const response = await axios(`${BASE_URL}/main/product-category`);
  return response.data;
};
