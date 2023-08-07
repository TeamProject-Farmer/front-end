import Styled from './styles';
import Title from '../Common/Title';
import Review from './Review';
import { IReview } from 'src/types/home/types';

const BestReview = ({ bestReview }) => {
  // console.log('bestReview', bestReview);
  return (
    <Styled.Wrapper>
      <Styled.ReviewContainer>
        <Title title="베스트 리뷰" color="#285430" />
        <Styled.Reviews>
          {bestReview &&
            bestReview?.map((review: IReview, index) => (
              <Review
                key={index}
                memberNickName={review.memberNickName}
                imgUrl={review.imgUrl}
                fiveStarRating={review.fiveStarRating}
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
