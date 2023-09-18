import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from '@components/Common/Icon';
import theme from '@styles/theme';
import { Plant } from 'src/types/home/types';
import Link from 'next/link';
import Image from 'next/image';
const Plant = ({
  productId,
  ranking,
  productName,
  discountRate,
  price,
  averageStarRating,
  imgUrl,
}: Plant) => {
  const specialPrice = discountRate !== 0;
  const discountedPrice = price * (1 - discountRate / 100);
  return (
    <Link href={`/shop/detail/${productId}`}>
      <Styled.Wrapper>
        <Styled.RankingBox>{ranking}</Styled.RankingBox>
        <Styled.ImgBox>
          <Image src={imgUrl} alt="plant image" width={160} height={201} />
        </Styled.ImgBox>
        <Styled.Title>{productName}</Styled.Title>
        <Styled.Content>
          <Styled.flexBox>
            <Styled.PriceBox>
              <Styled.Price>
                {specialPrice ? discountedPrice : price}원
              </Styled.Price>
              {specialPrice && (
                <Styled.Discount>{discountRate}%</Styled.Discount>
              )}
              {specialPrice && <Styled.SpecialPrice>특가</Styled.SpecialPrice>}
            </Styled.PriceBox>
            <Styled.Star>
              <Icon name="star" width={16} height={15} />
              {averageStarRating}
            </Styled.Star>
          </Styled.flexBox>
        </Styled.Content>
      </Styled.Wrapper>
    </Link>
  );
};

export default Plant;

const WrapperStyles = css`
  margin-right: 37px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const RankingBoxStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #47ac3a;
  font-weight: 700;
`;

const Styled = {
  Wrapper: styled.div`
    ${WrapperStyles}
    width: 310px;
    height: 392px;
    background-color: #ecf9e9;
    .slick-current & {
      width: 417px;
      height: 527px;
      background-color: #fff;
      box-shadow: 0px 0px 16px 8px rgba(215, 215, 215, 0.25);
    }
    overflow: visible;
  `,
  RankingBox: styled.p`
    ${RankingBoxStyles}
    width: 60px;
    height: 60px;
    font-size: 20px;

    .slick-current & {
      width: 81px;
      height: 79.15px;
      font-size: 28px;
    }
  `,
  ImgBox: styled.div`
    margin-top: 60px;
    width: 160px;
    height: 201px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .slick-current & {
      margin-top: 80px;
      width: 216px;
      height: 270px;
    }
  `,
  Title: styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 18px;
    .slick-current & {
      font-size: 25px;
    }
  `,
  Content: styled.div`
    width: 310px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 40px 21px 45px;
    .slick-current & {
      width: 417px;
    }
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
    font-size: 15px;
    font-weight: 700;
    .slick-current & {
      font-size: 18px;
    }
  `,
  Price: styled.p`
    font-size: 15px;
    font-weight: 600;
    .slick-current & {
      font-size: 17px;
    }
    span {
      text-decoration-line: line-through;
    }
  `,
  Star: styled.p`
    display: flex;
    gap: 4.8px;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
    .slick-current & {
      font-size: 12px;
    }
  `,
  SpecialPrice: styled.p`
    background-color: ${theme.colors.pointGreen};
    border-radius: 4px;
    padding: 5px 8px;
    font-size: 10px;
    color: #fff;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .slick-current & {
      padding: 3px 6px 4px 5px;
      font-size: 12px;
    }
  `,
};
