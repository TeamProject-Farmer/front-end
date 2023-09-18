import Styled from './styles';

const Review = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>후기 게시판</Styled.Title>
        <Styled.AllButton>전체 보기</Styled.AllButton>
      </Styled.TitleWrapper>
      <Styled.ContentWrapper>
        <Styled.SingleContent>
          {/* api 연동 */}
          <Styled.ContentTitle>후기글 제목</Styled.ContentTitle>
          <Styled.ContentDate>2023-06-27</Styled.ContentDate>
        </Styled.SingleContent>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default Review;
