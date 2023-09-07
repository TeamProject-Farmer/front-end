import axios from 'axios';
import { BASE_URL } from '../base';
import { Banner, Plant, Review, News } from 'src/types/home/types';

export const getMainBanner = async (): Promise<Banner[]> => {
  const response = await axios(`${BASE_URL}/main/banner`);
  return response.data;
};

export const getBestProduct = async (): Promise<Plant[]> => {
  const response = await axios(`${BASE_URL}/main/product/best-product`);
  return response.data;
};

export const getBestReview = async (): Promise<Review[]> => {
  const response = await axios(`${BASE_URL}/main/review`);
  return response.data;
};

export const getNews = async (): Promise<News> => {
  const response = await axios(`${BASE_URL}/main/news`);
  return response.data;
};
