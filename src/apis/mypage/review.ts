import request from '../base';
import { postReviewProps } from 'src/types/mypage/types';

// 마이페이지 구매목록 리뷰 쓰기
  export const postReview = async (props: postReviewProps) => {
  const {productId, fiveStarRating, content, reviewImage} = props;
  
  const formData = new FormData();
  formData.append('fiveStarRating', fiveStarRating);
  formData.append('content', content);
  formData.append('reviewImage', reviewImage);
  
  return await request.post(`member/review/write/${productId}`, formData);
};
