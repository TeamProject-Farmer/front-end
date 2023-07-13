import styled from '@emotion/styled';
import Icon from '@components/Common/Icon';
import theme from '@styles/theme';
import Image from 'next/image';

const Plant = ({
  rank,
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
      <Styled.RankingBox>{rank}</Styled.RankingBox>
      <Image
        src="/assets/images/home/plant.png"
        alt="plant image"
        width={160}
        height={201}
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>
        <Styled.flexBox>
          <Styled.PriceBox>
            <Styled.Discount>{discount}</Styled.Discount>
            <Styled.Price>{price}</Styled.Price>
          </Styled.PriceBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {star}
          </Styled.Star>
        </Styled.flexBox>
        <Styled.EventBox>
          <Styled.SpecialPrice>특가</Styled.SpecialPrice>
          <Styled.FreeShipping>무료배송</Styled.FreeShipping>
        </Styled.EventBox>
        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Plant;

const Styled = {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 310px;
    height: 392px;
    background-color: #ecf9e9;
    /* box-shadow: 0px 0px 16px 8px rgba(215, 215, 215, 0.25); */
    border-radius: 10px;
  `,
  RankingBox: styled.p`
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    background-color: #47ac3a;
  `,
  Content: styled.div`
    width: 310px;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 0;
    gap: 4.5px;
  `,
  Title: styled.p`
    font-size: 25px;
    font-weight: 600;
    margin-top: 18px;
  `,
  flexBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  PriceBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  Discount: styled.p`
    color: #59b941;
    font-size: 18px;
    font-weight: 700;
  `,
  Price: styled.p`
    font-size: 17px;
    font-weight: 600;
  `,
  Star: styled.p`
    display: flex;
    gap: 4.8px;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
  `,
  Review: styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #ababab;
  `,
  EventBox: styled.div`
    display: flex;
    gap: 5px;
    margin-top: 3px;
  `,
  SpecialPrice: styled.p`
    background-color: ${theme.colors.pointGreen};
    border-radius: 4px;
    padding: 5px 8px;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FreeShipping: styled.p`
    border: 1px solid ${theme.colors.pointGreen};
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
