import Styled from './styles';
import TabWrapper from './TabWrapper';

const InnerBox = props => {
  return;
  <Styled.Wrapper>
    <TabWrapper />
    <Styled.BodyWrapper>{props.children}</Styled.BodyWrapper>;
  </Styled.Wrapper>;
};

export default InnerBox;
