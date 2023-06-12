import Styled from "./styles"

const SideBarHeader = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderUser>안녕하세요, Sarah님</Styled.HeaderUser>
      <Styled.HeaderText>Farmer 관리자를 위한 Admin Page 입니다.</Styled.HeaderText>
    </Styled.HeaderWrapper>
  );
};

export default SideBarHeader;
