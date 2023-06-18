import Styled from './styles';
import InnerBox from './InnerBox';
const ChoiceItem = () => {
  return (
    <Styled.Wrapper>
      <Styled.InnerContainer>
        <InnerBox />
      </Styled.InnerContainer>
      <Styled.ArrowWrapper>
        <button>
          <Styled.RightArrow />
        </button>
        <button>
          <Styled.LeftArrow />
        </button>
      </Styled.ArrowWrapper>
      <Styled.InnerContainer>
        <InnerBox />
        <InnerBox />
        <InnerBox />
      </Styled.InnerContainer>
    </Styled.Wrapper>
  );
};

export default ChoiceItem;
