import Styled from './styles';
import MemberBody from './MemberBody';
import MemberTab from './MemberTab';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';

const MemberWrapper = () => {
  return (
    <Styled.MemberWrapper>
      <MemberTab />
      <MemberBody />
      <FooterButtonWrapper>
        <SmallButton text="수정"></SmallButton>
        <SmallButton text="삭제"></SmallButton>
      </FooterButtonWrapper>
    </Styled.MemberWrapper>
  );
};

export default MemberWrapper;
