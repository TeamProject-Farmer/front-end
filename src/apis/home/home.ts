import axios from 'axios';
import { BASE_URL } from '../base';

//main banner
export const getMainBanner = async () => {
  const response = await axios.get(`${BASE_URL}/main/banner`);
  return response.data;
};

//best plant
export const getBestProduct = async () => {
  const response = await axios.get(`${BASE_URL}/main/product/best-product`);
  return response.data;
};

//best review
export const getBestReview = async () => {
  const response = await axios.get(`${BASE_URL}/main/review`);
  return response.data;
};

//news
export const getNews = async () => {
  const response = await axios.get(`${BASE_URL}/main/news`);
  return response.data;
};
