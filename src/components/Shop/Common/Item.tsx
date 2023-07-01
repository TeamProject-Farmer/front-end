import styled from '@emotion/styled';
import Image from 'next/image';
import theme from '@styles/theme';
interface PropsList {
  number?: number;
  image: string;
  contentTitle: string;
  pricePercent: number;
  totalPrice: string | number;
  reviewScore: number;
  totalReview: string | number;
}
const Item = (props: PropsList) => {
  const {
    number,
    image,
    contentTitle,
    pricePercent,
    totalPrice,
    reviewScore,
    totalReview,
  } = props;
  return (
    <Styled.Wrapper>
      {number ? <Styled.NumberBox>{number}</Styled.NumberBox> : null}
      <Styled.HeartBox>
        <Image
          src="/assets/images/shop/heartIcon.svg"
          alt="heartIcon"
          width={30.09}
          height={25.88}
        />
      </Styled.HeartBox>
      <Styled.ImageWrapper>{image}</Styled.ImageWrapper>
      <Styled.ContentWrapper>
        {/* 데이터가 어떠한 형식으로 넘어오는지에 따라 수정이 필요할 것 같습니다. */}
        <Styled.ContentTitle>{contentTitle}</Styled.ContentTitle>
        <Styled.ContentPrice>
          <div>{pricePercent}%</div>
          <div>{totalPrice}</div>
        </Styled.ContentPrice>
        <Styled.ContentReview>
          <Image
            src="/assets/images/shop/filledStar.svg"
            alt="heartIcon"
            width={16.6}
            height={15.53}
          />
          <div>{reviewScore}</div>
          <div>리뷰 {totalReview}</div>
        </Styled.ContentReview>
        {/* 태그 부분들에 대해서는 추가적인 정보가 필요할 것 같습니다. */}
        <Styled.ContentTagWrapper>
          <Styled.ContentTag color="#62c655">특가</Styled.ContentTag>
          <Styled.ContentTag color="#d9d9d9">무료배송</Styled.ContentTag>
        </Styled.ContentTagWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 280px;
    height: 410px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    position: relative;
    color: ${theme.colors.black};
    font-family: Inter;
    font-style: normal;
    line-height: normal;
  `,
  NumberBox: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 56.545px;
    height: 56.545px;
    border-radius: 5px 0px 15px 0px;
    background-color: ${theme.colors.white};
    display: flex;
    padding-top: 10.28px;
    padding-left: 20.56px;
    color: #686868;
    font-size: 22px;
    font-weight: 700;
  `,
  HeartBox: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15.5px;
  `,
  ImageWrapper: styled.div`
    width: 100%;
    height: 279.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.lightGray};
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 500;
    padding: 13.46px 17.64px;
    & > div {
      margin-bottom: 4.78px;
      display: flex;
      align-items: center;
    }
    & > div:last-child {
      margin-top: 7px;
    }
  `,
  ContentTitle: styled.div`
    width: 174.32px;
    height: 19.67px;
  `,
  ContentPrice: styled.div`
    display: flex;
    & > div:first-child {
      color: #33b822;
      font-weight: 700;
      margin-right: 8px;
    }
    & > div:last-child {
      font-weight: 600;
    }
  `,
  ContentReview: styled.div`
    display: flex;
    font-size: 14px;
    & > div:first-of-type {
      font-weight: 700;
      margin: 0 4.9px;
    }
    & > div:last-child {
      font-weight: 600;
      color: #ababab;
    }
  `,
  ContentTagWrapper: styled.div`
    display: flex;
  `,
  ContentTag: styled.div<{ color: string }>`
    height: 18px;
    margin-right: 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 5px;
    background-color: ${props => props.color};
    font-size: 10px;
    font-weight: 700;
  `,
};
export default Item;
