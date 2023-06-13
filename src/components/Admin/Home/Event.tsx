import Styled from './styles';
import ButtonWrapper from '../common/InnerBox/ButtonWrapper';
import SmallButton from '../common/SmallButton';

const Event = () => {
  return (
    <Styled.EventWrapper>
      <Styled.EventBoxWrapper></Styled.EventBoxWrapper>
      <ButtonWrapper>
        <SmallButton text="추가" />
        <SmallButton text="수정" />
        <SmallButton text="삭제" />
      </ButtonWrapper>
    </Styled.EventWrapper>
  );
};

export default Event;
