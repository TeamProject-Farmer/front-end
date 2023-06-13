import Styled from './styles';

interface PropsList {
  title: string;
  first: string;
  second: string;
  third: string;
  last: string;
  checkBox: boolean;
}
const BlueBodyPart = (props: PropsList) => {
  const { title, first, second, third, last, checkBox } = props;

  if (checkBox) {
    return (
      <Styled.BodyPartWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.BodyPartBox>
          <Styled.BodyPartTitle>{title}</Styled.BodyPartTitle>
          <Styled.BodyPartContent>구매날짜: {first}</Styled.BodyPartContent>
          <Styled.BodyPartContent>구매자: {second}</Styled.BodyPartContent>
          <Styled.BodyPartContent>구매번호: {third}</Styled.BodyPartContent>
          <Styled.BodyPartLastContent>현재 상태: {last}</Styled.BodyPartLastContent>
        </Styled.BodyPartBox>
        <Styled.StyledLabel htmlFor={title}>
          <Styled.StyledInput type="checkbox" id={title} name={title} />
        </Styled.StyledLabel>
      </Styled.BodyPartWrapper>
    );
  } else {
    return (
      <Styled.BodyPartWrapper>
        <Styled.BodyPartBox>
        <Styled.BodyPartTitle>{title}</Styled.BodyPartTitle>
          <Styled.BodyPartContent>구매날짜: {first}</Styled.BodyPartContent>
          <Styled.BodyPartContent>구매자: {second}</Styled.BodyPartContent>
          <Styled.BodyPartContent>구매번호: {third}</Styled.BodyPartContent>
          <Styled.BodyPartLastContent>현재 상태: {last}</Styled.BodyPartLastContent>
        </Styled.BodyPartBox>
      </Styled.BodyPartWrapper>
    );
  }
};

export default BlueBodyPart;
