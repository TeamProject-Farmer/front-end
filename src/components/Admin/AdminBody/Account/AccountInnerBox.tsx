import Styled from './styles';
import CheckBox from '@components/Admin/Common/InnerBody/InnerBox/CheckBox';

interface PropsList {
  nickname: string;
  manager: string;
  registerDate: string;
  role: string;
}
const AccountInnerBox = (props: PropsList) => {
  const { nickname, manager, registerDate, role } = props;
  return (
    <>
      <Styled.InnerBoxWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.InnerBox>
          <Styled.Title>{nickname}</Styled.Title>
          <Styled.Content>권한: {manager}</Styled.Content>
          <Styled.Content>가입날짜: {registerDate}</Styled.Content>
          <Styled.Content>직책: {role}</Styled.Content>
        </Styled.InnerBox>
        <CheckBox id={nickname} />
      </Styled.InnerBoxWrapper>
    </>
  );
};

export default AccountInnerBox;
