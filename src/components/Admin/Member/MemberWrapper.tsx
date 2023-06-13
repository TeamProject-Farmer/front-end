import Styled from './styles';
import MemberBody from './MemberBody';
import MemberTab from './MemberTab';
import SmallButton from '../common/SmallButton';

const MemberWrapper = () => {
  return (
    <Styled.MemberWrapper>
      <MemberTab />
      <MemberBody />
      <Styled.ButtonWrapper>
        <SmallButton text='수정'></SmallButton>
        <SmallButton text='삭제'></SmallButton>
      </Styled.ButtonWrapper>
    </Styled.MemberWrapper>
    
  )
}

export default MemberWrapper