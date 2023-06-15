import Styled from './styles';
import Button from '../Common/Button';
import Icon from '../Common/Icon';

const Banner = () => {
  return (
    <Styled.Wrapper>
      <Styled.ContentBox>
        <Styled.Slogan>Let's be a</Styled.Slogan>
        <Styled.Slogan>Farmer!</Styled.Slogan>        
        <Styled.Description>
          사무공간, 생활공간을 그린 친화적으로
        </Styled.Description>
        <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
      </Styled.ContentBox>
      <Styled.Events>
          <Styled.Event>farmer</Styled.Event>
          <Styled.Event>Event 01</Styled.Event>
          <Styled.Event>Event 02</Styled.Event>
        </Styled.Events>
    </Styled.Wrapper>
  );
};

export default Banner;
