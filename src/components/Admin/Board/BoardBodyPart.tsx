import Styled from './styles';

interface PropsList {
  id: string;
  title: string;
  like: number;
  buyer: string;
  commentTitle: string;
  comment: string;
}
const BoardBodyPart = (props: PropsList) => {
  const { id, title, like, buyer, commentTitle, comment } = props;
  let stars = null;
  //임시로 이모티콘으로 처리
  if (like == 1) {
    stars = '⭐☆☆☆☆';
  } else if (like == 2) {
    stars = '⭐⭐☆☆☆';
  } else if (like == 3) {
    stars = '⭐⭐⭐☆☆';
  } else if (like == 4) {
    stars = '⭐⭐⭐⭐☆';
  } else {
    stars = '⭐⭐⭐⭐⭐';
  }
  return (
    <>
      <Styled.BodyPartWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.BodyPartBox>
          <Styled.BodyPartTitle>{title}</Styled.BodyPartTitle>
          <Styled.BodyPartContent>구매자: {buyer}</Styled.BodyPartContent>
          <Styled.BodyPartContent>{stars}</Styled.BodyPartContent>
          <Styled.BodyPartContent>"{commentTitle}"</Styled.BodyPartContent>
          <Styled.BodyPartContent>{comment}</Styled.BodyPartContent>
        </Styled.BodyPartBox>
        <Styled.StyledLabel htmlFor={id}>
          <Styled.StyledInput type="checkbox" id={id} name={id} />
        </Styled.StyledLabel>
      </Styled.BodyPartWrapper>
    </>
  );
};

export default BoardBodyPart;
