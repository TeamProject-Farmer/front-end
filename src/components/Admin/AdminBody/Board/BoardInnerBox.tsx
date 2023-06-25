import Styled from './styles';
import CheckBox from '@components/Admin/Common/InnerBody/InnerBox/CheckBox';
import { boardInnerPropsList } from '@components/Admin/Type';

const BoardInnerBox = (props: boardInnerPropsList) => {
  const { id, title, like, buyer, commentTitle, comment } = props;

  const filledStar = <Styled.Star />;
  const blankStar = <Styled.BlankStar />;
  const maxStars = 5;
  let stars = (
    <Styled.StarWrapper>
      {Array.from({ length: maxStars }, (_, index) =>
        index < like ? filledStar : blankStar,
      )}
    </Styled.StarWrapper>
  );

  return (
    <>
      <Styled.InnerBoxWrapper>
        <Styled.InnerBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>구매자: {buyer}</Styled.Content>
          <Styled.Content>{stars}</Styled.Content>
          <Styled.Content>"{commentTitle}"</Styled.Content>
          <Styled.Content>{comment}</Styled.Content>
        </Styled.InnerBox>
        <CheckBox id={id} />
      </Styled.InnerBoxWrapper>
    </>
  );
};

export default BoardInnerBox;
