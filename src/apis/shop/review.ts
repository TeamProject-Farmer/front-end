import request from '../base';

//상품별 리뷰 평점 출력
export const accountData = async (productId: number) => {  
  return request({
    url: `/api/main/review/star/${productId}`,
  });
};