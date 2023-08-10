import Styled from './styles';

const EachStarGauge = ({ arr }: { arr: number[] }) => {
  const numArr=[5,4,3,2,1]
  const total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
  return (
    <div>
      {arr.map((cur, i) => (
        <Styled.EachWrapper key={i}>
          <Styled.StarText>{numArr[i]}점</Styled.StarText>
          <Styled.LineGauge>
            <Styled.InnerGauge total={total} num={cur} />
          </Styled.LineGauge>
          <Styled.StarText>{cur}</Styled.StarText>
        </Styled.EachWrapper>
      ))}
    </div>
  );
};

export default EachStarGauge;
