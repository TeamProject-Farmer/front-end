import Styled from './styles';

const ShopPrev = () => {
  return (
    <Styled.Wrapper>
      <Styled.ContentBox>
        <Styled.Title>shop by size</Styled.Title>
        <Styled.SizeBox>
          <Styled.List>small</Styled.List>
          <Styled.List>medium</Styled.List>
          <Styled.List>large</Styled.List>
        </Styled.SizeBox>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default ShopPrev;
