import Styled from './styles'
import Icon from '../Icon';

const Product = ({
  title,
  discount,
  price,
  star,
  review,
  specialPrice,
  freeShipping,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.ImgBox/>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Discount>{discount}</Styled.Discount>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {star}
          </Styled.Star>
          <Styled.Review>리뷰 {review}</Styled.Review>
        </Styled.ReviewBox>
        <Styled.EventBox>
          {specialPrice && <Styled.SpecialPrice>특가상품</Styled.SpecialPrice>}
          {freeShipping && <Styled.FreeShipping>무료배송</Styled.FreeShipping>}
        </Styled.EventBox>
        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Product;

