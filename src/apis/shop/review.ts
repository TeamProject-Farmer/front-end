import axios from 'axios';
import request from '../base';
import { BASE_URL } from '../base';
import { getReviewProps } from 'src/types/shop/apiTypes';

//상품별 리뷰 출력
export const getReview = async (props: getReviewProps) => {
  let {productId, currentIndex, sortOption, starOption} = props;
  if (productId == undefined) productId = 1;
  const response = await axios({
    url: `${BASE_URL}/main/review/${productId}?page=${currentIndex}&direction=ASC&size=3`,
    params: {
      sortOrderCond: sortOption,
      reviewCond: starOption,
    },
  });
  return response.data;
};

//상품별 리뷰 평점 출력
export const getReviewStar = async (productId: number) => {
  const response = await axios(`${BASE_URL}/main/review/star/${productId}`);
  
  return response.data;
};

//상품별 사진 리뷰
export const getReviewImage = async (productId: number) => {
  const response = await axios(`${BASE_URL}/main/review/img/${productId}`);
  
  return response.data;
};

//리뷰 좋아요 누르기
export const postReviewLike = async (reviewId: number) => {
  return await axios.post(`${BASE_URL}/main/review/like?reviewId=${reviewId}`);
};