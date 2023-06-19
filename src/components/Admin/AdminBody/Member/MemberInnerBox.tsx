import Styled from './styles';
import CheckBox from '@components/Admin/Common/InnerBody/InnerBox/CheckBox';

interface PropsList {
  nickname: string;
  email: string;
  phoneNum: string;
  name: string;
  grade: string;
  registerDate: string;
}
const MemberInnerBox = (props: PropsList) => {
  const { nickname, email, phoneNum, name, grade, registerDate } = props;
  return (
    <>
      <Styled.InnerBoxWrapper>
        <Styled.InnerBox>
          <Styled.Title>{nickname}</Styled.Title>
          <Styled.Content>이메일: {email}</Styled.Content>
          <Styled.Content>전화번호: {phoneNum}</Styled.Content>
          <Styled.Content>이름: {name}</Styled.Content>
          <Styled.Content>회원등급: {grade}</Styled.Content>
          <Styled.Content>가입날짜: {registerDate}</Styled.Content>
        </Styled.InnerBox>
        <CheckBox id={nickname}/> {/* 나중에 id값 넣어줄 예정 */}
        
      </Styled.InnerBoxWrapper>
    </>
  );
};

export default MemberInnerBox;
