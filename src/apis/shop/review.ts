import request from '../base';

//상품별 리뷰 출력
export const getReview = async (productId: number, currentIndex:number, sortOption: string|null, starOption:number|null) => {
  if (productId == undefined) productId = 1;
  const response = await request({
    url: `/main/review/${productId}?page=${currentIndex}&direction=ASC&size=3`,
    params: {
      sortOrderCond: sortOption,
      reviewCond: starOption,
    },
  });
  console.log('reviewAPIPage----------response')
  console.log(response.data.content)
  return response.data;
};

//상품별 리뷰 평점 출력
export const getReviewStar = async (productId: number) => {
  const response = await request({ url: `/main/review/star/${productId}` });
  // const response = await request.get(`/main/review/star/${productId}`);
  return response.data;
};

//상품별 사진 리뷰
export const getReviewImage = async (productId: number) => {
  // const response = await request({ url: `/main/review/img/${productId}` });
  const response = await request.get(`/main/review/img/${productId}`);
  return response.data;
};

//리뷰 좋아요 누르기 http://3.39.150.186:8080/api/main/review/like?reviewId=16
export const postReviewLike = async (reviewId: number) => {
  return await request.post(`/main/review/like?reviewId=${reviewId}`);
};