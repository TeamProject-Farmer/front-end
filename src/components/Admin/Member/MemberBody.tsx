import Styled from './styles';
import MemberBodyPart from './MemberBodyPart';

const MemberBody = () => {
  const TempList = [
    'Mark',
    'abcd1234@naver.com',
    '010-1111-XXXX',
    '홍길동',
    '일반',
    '2023-04-01',
  ];
  return (
    <>
      <Styled.MemberBodyWrapper>
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <MemberBodyPart
          nickname={TempList[0]}
          email={TempList[1]}
          phoneNum={TempList[2]}
          name={TempList[3]}
          grade={TempList[4]}
          registerDate={TempList[5]}
        />
        <Styled.Temp>페이지네이션부분</Styled.Temp>
      </Styled.MemberBodyWrapper>
    </>
  );
};

export default MemberBody;
