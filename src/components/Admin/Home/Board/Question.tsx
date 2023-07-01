import Styled from "./styles";

const Question = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>문의 게시판</Styled.Title>
        <Styled.AllButton>전체 보기</Styled.AllButton>
      </Styled.TitleWrapper>
      <Styled.ContentWrapper>
        <Styled.SingleContent>
          {/* api 연동 */}
          <Styled.ContentTitle>문의글 제목</Styled.ContentTitle>
          <Styled.ContentDate>2023-06-27</Styled.ContentDate>
        </Styled.SingleContent>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
}

export default Question;