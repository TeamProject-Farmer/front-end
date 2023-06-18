import Styled from './styles';

const TotalMember = () => {
  const TotalList = [
    '방문수',
    '구매건수',
    '누적구매액',
    '누적적립액',
    '계정상태',
  ];
  return (
    <Styled.TotalWrapper>
      {TotalList.map(item => (
        <Styled.TotalCol>
          <Styled.TotalUpperRow key={item}>{item}</Styled.TotalUpperRow>
          <Styled.TotalLowerRow>0</Styled.TotalLowerRow>
        </Styled.TotalCol>
      ))}
    </Styled.TotalWrapper>
  );
};

export default TotalMember;
