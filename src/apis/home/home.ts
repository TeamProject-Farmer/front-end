import axios from 'axios';
import { BASE_URL } from '../base';
import { Banner, Plant, Review, News } from 'src/types/home/types';

export const getMainBanner = async () => {
  const response = await axios.get<Banner[]>(`${BASE_URL}/main/banner`);
  return response.data;
};

export const getBestProduct = async () => {
  const response = await axios.get<Plant[]>(
    `${BASE_URL}/main/product/best-product`,
  );
  return response.data;
};

export const getBestReview = async () => {
  const response = await axios.get<Review[]>(`${BASE_URL}/main/review`);
  return response.data;
};

export const getNews = async () => {
  const response = await axios.get<News>(`${BASE_URL}/main/news`);
  return response.data;
};
