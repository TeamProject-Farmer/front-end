import Styled from './styles';
import Icon from '../Common/Icon';

const ShopPrev = () => {
  return (
    <Styled.Wrapper>
      <Styled.ContentBox>
        <Styled.Title>shop by size</Styled.Title>
        <Styled.SizeBox>
          <Styled.List><Icon src='smallPlant' width={46} height={46}/>small</Styled.List>
          <Styled.List><Icon src='mediumPlant' width={46} height={46}/>medium</Styled.List>
          <Styled.List><Icon src='largePlant' width={46} height={46}/>large</Styled.List>
        </Styled.SizeBox>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default ShopPrev;
