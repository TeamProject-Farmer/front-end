import Styled from './styles';
import Title from '../Common/Title';
import Review from './Review';
import { useState, useEffect } from 'react';
import { IReviewProps } from 'src/types/home/types';

// const reviews = [];

// for (let id = 1; id <= 12; id++) {
//   const newReview = {
//     id: id,
//     userName: 'USER NAME',
//     star: '4',
//     like: '4',
//     title: '리뷰의 제목',
//     content: '리뷰의 내용',
//   };

//   reviews.push(newReview);
// }

const BestReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://3.39.150.186:8080/api/main/review')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.ReviewContainer>
        <Title title="베스트 리뷰" color="#285430" />
        <Styled.Reviews>
          {reviews &&
            reviews?.map((review: IReviewProps) => (
              <Review
                key={review.memberNickName}
                userName={review.memberNickName}
                star={review.fiveStarRating}
                like={review.likeCount}
                // title={review.title}
                content={review.content}
              />
            ))}
        </Styled.Reviews>
      </Styled.ReviewContainer>
    </Styled.Wrapper>
  );
};

export default BestReview;
