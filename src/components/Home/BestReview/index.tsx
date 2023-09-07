import Styled from './styles';
import Title from '../Common/Title';
import Review from './Review';
import { Review as IReview } from 'src/types/home/types';
import { useState } from 'react';

const BestReview = ({ bestReview }) => {
  const [reviewList, setReviewList] = useState([...bestReview, ...bestReview]);

  return (
    <Styled.Wrapper>
      <Styled.ReviewContainer>
        <Title title="베스트 리뷰" color="#285430" />
        <Styled.Reviews>
          {reviewList.map((review: IReview, index) => (
            <Review
              key={index}
              productId={review.productId}
              memberNickName={review.memberNickName}
              imgUrl={review.imgUrl}
              likeCount={review.likeCount}
              content={review.content}
            />
          ))}
        </Styled.Reviews>
      </Styled.ReviewContainer>
    </Styled.Wrapper>
  );
};

export default BestReview;
