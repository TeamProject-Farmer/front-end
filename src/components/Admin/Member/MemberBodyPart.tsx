import Styled from './styles';

interface PropsList {
  nickname: string;
  email: string;
  phoneNum: string;
  name: string;
  grade: string;
  registerDate: string;
}
const MemberBodyPart = (props: PropsList) => {
  const { nickname, email, phoneNum, name, grade, registerDate } = props;
  return (
    <>
      <Styled.BodyPartWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.BodyPartBox>
          <Styled.BodyPartTitle>{nickname}</Styled.BodyPartTitle>
          <Styled.BodyPartContent>이메일: {email}</Styled.BodyPartContent>
          <Styled.BodyPartContent>전화번호: {phoneNum}</Styled.BodyPartContent>
          <Styled.BodyPartContent>이름: {name}</Styled.BodyPartContent>
          <Styled.BodyPartContent>회원등급: {grade}</Styled.BodyPartContent>
          <Styled.BodyPartContent>가입날짜: {registerDate}</Styled.BodyPartContent>
        </Styled.BodyPartBox>
        <Styled.StyledLabel htmlFor={nickname}>
          <Styled.StyledInput type="checkbox" id={nickname} name={nickname} />
        </Styled.StyledLabel>
      </Styled.BodyPartWrapper>
    </>
  );
};

export default MemberBodyPart;
