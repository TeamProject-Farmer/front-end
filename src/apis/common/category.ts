import axios from 'axios';
import { BASE_URL } from '../base';
import { Category } from 'src/types/common/types';

export const getProductCategory = async (): Promise<Category[]> => {
  const response = await axios(`${BASE_URL}/main/product-category`);
  return response.data;
};
