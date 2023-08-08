import request from '../base';


//상품별 리뷰 출력
export const getReview = async (productId: number, sortOption: string) => {
  const response = await request({
    url: `/main/review/${productId}?page=0&direction=ASC&size=3`,
    params: {
      //추후 추가
      sorOrderCond: sortOption,
      // reviewCond: ,
    },
  });
  return response.data;
};

//상품별 리뷰 평점 출력
export const getReviewStar = async (productId: number) => {
  const response = await request.get(`/main/review/star/${productId}`);
  return response.data;
};

//상품별 사진 리뷰
export const getReviewImage = async (productId: number) => {
  const response = await request.get(`/main/review/img/${productId}`);
  return response.data;
};
