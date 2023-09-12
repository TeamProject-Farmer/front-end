import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '@components/Common/Icon';
import { ProductProps } from 'src/types/common/types';

const SmallProduct = (props: ProductProps) => {
  const {
    thumbnailImg,
    name,
    price,
    discountRate,
    reviewCount,
    averageStarRating,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.ImgBox>{thumbnailImg}</Styled.ImgBox>
      <Styled.Content>
        <Styled.Title>{name}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Discount>{discountRate}%</Styled.Discount>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {averageStarRating}
          </Styled.Star>
          <Styled.Review>리뷰 {reviewCount}</Styled.Review>
        </Styled.ReviewBox>
        <Styled.EventBox>
          {discountRate && <Styled.SpecialPrice>특가상품</Styled.SpecialPrice>}
          {<Styled.FreeShipping>무료배송</Styled.FreeShipping>}
        </Styled.EventBox>
        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 216px;
    border: 1px solid #000;
    line-height: 1;
  `,
  ImgBox: styled.div`
    position: relative;
    height: 216px;
    background-color: ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.19px;
    padding: 10.46px 13.6px;
  `,
  Title: styled.p`
    font-size: 16px;
    text-align: left;
    margin-bottom: 0.5px;
  `,
  PriceBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Discount: styled.p`
    color: #62c655;
    font-size: 14px;
    font-weight: 700;
  `,
  Price: styled.p`
    font-size: 14px;
    font-weight: 600;
  `,
  ReviewBox: styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;
  `,
  Star: styled.p`
    display: flex;
    align-items: center;
    gap: 4.8px;
    font-size: 12px;
    font-weight: 600;
  `,
  Review: styled.p`
    font-size: 10px;
    font-weight: 600;
    color: #ababab;
  `,
  EventBox: styled.div`
    display: flex;
    gap: 5px;
    margin-top: 3px;
    & > p {
      border-radius: 4px;
      padding: 3px 5px;
      font-size: 8px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  SpecialPrice: styled.p`
    background-color: #62c655;
  `,
  FreeShipping: styled.p`
    background-color: ${theme.colors.green4};
  `,
};
export default SmallProduct;
