import Styled from './styles';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';

const Event = () => {
  return (
    <Styled.EventWrapper>
      <Styled.EventBoxWrapper></Styled.EventBoxWrapper>
      <FooterButtonWrapper>
        <SmallButton text="추가" />
        <SmallButton text="수정" />
        <SmallButton text="삭제" />
      </FooterButtonWrapper>
    </Styled.EventWrapper>
  );
};

export default Event;
