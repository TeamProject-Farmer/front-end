import Styled from "./styles";
import Question from "./Question";
import Review from "./Review";

// 추후 api 연동 시 불편할까봐 분리시켜 뒀습니다!
const Board = () => {
  return <Styled.TotalWrapper>
    <Question />
    <Review />
  </Styled.TotalWrapper>;
}

export default Board;