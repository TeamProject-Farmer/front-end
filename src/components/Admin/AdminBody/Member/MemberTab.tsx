import Styled from './styles';
import SelectAllButton from '../../Common/SelectAllButton';

const MemberTab = () => {
  return (
    <Styled.TabWrapper>
      <Styled.TabContainer>
        <Styled.TabBox>등록일순</Styled.TabBox>
        <Styled.TabBox>이름순</Styled.TabBox>
        <Styled.TabBox>회원등급순</Styled.TabBox>
      </Styled.TabContainer>
      <SelectAllButton text="전체 선택"></SelectAllButton>
    </Styled.TabWrapper>
  );
};

export default MemberTab;
