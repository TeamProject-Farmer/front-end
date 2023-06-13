import Styled from './styles';

interface PropsList {
  nickname: string;
  manager: string;
  registerDate: string;
  role: string;
}
const AccountBodyPart = (props: PropsList) => {
  const { nickname, manager, registerDate, role } = props;
  return (
    <>
      <Styled.BodyPartWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.BodyPartBox>
          <Styled.BodyPartTitle>{nickname}</Styled.BodyPartTitle>
          <Styled.BodyPartContent>권한: {manager}</Styled.BodyPartContent>
          <Styled.BodyPartContent>가입날짜: {registerDate}</Styled.BodyPartContent>
          <Styled.BodyPartContent>직책: {role}</Styled.BodyPartContent>
        </Styled.BodyPartBox>
        <Styled.StyledLabel htmlFor={nickname}>
          <Styled.StyledInput type="checkbox" id={nickname} name={nickname} />
        </Styled.StyledLabel>
      </Styled.BodyPartWrapper>
    </>
  );
};

export default AccountBodyPart;
