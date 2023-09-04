import Styled from './styles';
import Title from '../Common/Title';
import Review from './Review';
import { Review as IReview } from 'src/types/home/types';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getBestReview } from 'src/apis/home/home';

const BestReview = () => {
  const [reviewList, setReviewList] = useState([]);
  const { data, isLoading } = useQuery('bestReview', getBestReview);

  useEffect(() => {
    if (data && !isLoading) {
      setReviewList([...data, ...data]);
    }
  }, [data]);

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
