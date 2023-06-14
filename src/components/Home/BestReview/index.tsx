import Styled from './styles'
import Title from '../common/Title';
import Review from './Review';

const reviews = [];

for (let id = 1; id <= 6; id++) {
  const newReview = {
    id: id,
    userName: 'USER NAME',
    star: '4',
    like: '4',
    title: '리뷰의 제목',
    content: '리뷰의 내용'
  };

  reviews.push(newReview);
}

const BestReview = () => {
  return (
    <Styled.Wrapper>
      <Styled.ReviewContainer>
        <Title title='베스트 리뷰' color='#285430'/>
        <Styled.Reviews>
          {
            reviews.map((review) => (
              <Review 
                key={review.id} 
                userName={review.userName} 
                star={review.star} 
                like={review.like}
                title={review.title} 
                content={review.content}
              />
            ))
          }
        </Styled.Reviews>
      </Styled.ReviewContainer>
    </Styled.Wrapper>
  )
}

export default BestReview;
