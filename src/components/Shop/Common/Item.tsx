import styled from '@emotion/styled';
import Image from 'next/image';
import theme from '@styles/theme';

//interface들은 추후 디자인, props 내용 결정되면 옮기도록 하겠습니다!
interface PropsList {
  number?: number;
  image: string;
  contentTitle: string;
  pricePercent?: number;
  totalPrice: string | number;
  reviewScore: number;
  totalReview: string | number;
  imageSize?: number;
  totalWidth?: number;
  totalHeight?: number;
  paddingTop?:number;
  titleSize?: number;
  exceptPercent?: boolean;
  priceSize?: number;
  reviewSize?: number;
  isSpecialPrice?: boolean;
  contentPadding?:number;
}

//나중에 Common > Product 코드 수정된 후 적용시켜주도록 하겠습니다
const Item = (props: PropsList) => {
  const {
    number,
    image,
    contentTitle,
    pricePercent,
    totalPrice,
    reviewScore,
    totalReview,
    imageSize,
    totalWidth,
    totalHeight,
    paddingTop,
    titleSize,
    priceSize,
    reviewSize,
    exceptPercent,
    isSpecialPrice,contentPadding,
    
  } = props;
  return (
    <Styled.Wrapper totalWidth={totalWidth} totalHeight={totalHeight}>
      {number ? <Styled.NumberBox>{number}</Styled.NumberBox> : null}
      <Styled.ImageWrapper imageSize={imageSize}>{image}</Styled.ImageWrapper>
      <Styled.ContentWrapper paddingTop={paddingTop} contentPadding={contentPadding}>
        {/* 데이터가 어떠한 형식으로 넘어오는지에 따라 수정이 필요할 것 같습니다. */}
        <Styled.ContentTitle titleSize={titleSize}>{contentTitle}</Styled.ContentTitle>
        <Styled.ContentPrice priceSize={priceSize}>
          {exceptPercent ? (
            <Styled.Price>{totalPrice}</Styled.Price>
          ) : (
            <>
              <Styled.PricePercent>{pricePercent}%</Styled.PricePercent>
              <Styled.Price>{totalPrice}</Styled.Price>
            </>
          )}
        </Styled.ContentPrice>
        <Styled.ContentReview reviewSize={reviewSize}>
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
          {isSpecialPrice ? (
            <>
              <Styled.ContentTag color="#62C655">특가</Styled.ContentTag>
              <Styled.ContentTag color="#d9d9d9">무료배송</Styled.ContentTag>
            </>
          ) : (
            <Styled.ContentTag color="#d9d9d9">무료배송</Styled.ContentTag>
          )}
        </Styled.ContentTagWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

interface CssProps {
  imageSize?: number;
  totalWidth?: number;
  totalHeight?: number;
  paddingTop?:number;
  titleSize?: number;
  priceSize?: number;
  reviewSize?: number;
  contentPadding?:number;
}
const Styled = {
  Wrapper: styled.div<CssProps>`
    width: ${props => (props.totalWidth ? `${props.totalWidth}px` : '280px')};
    height: ${props =>
      props.totalHeight ? `${props.totalHeight}px` : '410px;'};
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

  ImageWrapper: styled.div<CssProps>`
    width: 100%;
    height: ${props => (props.imageSize ? `${props.imageSize}px` : '279.5px')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.lightGray};
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  `,
  ContentWrapper: styled.div<CssProps>`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 500;
    padding: ${props => (props.paddingTop ? `${props.paddingTop}px 17.64px` : '13.46px ')};
    & > div {
      margin-bottom: ${props => (props.contentPadding ? `${props.contentPadding}px` : '4.78px')};
      display: flex;
      align-items: center;
    }
    & > div:last-child {
      margin-top: ${props => (props.contentPadding ? '3px' : '7px')};
    }
  `,
  ContentTitle: styled.div<CssProps>`
    width: 174.32px;
    height: 19.67px;
    font-size: ${props => (props.titleSize ? `${props.titleSize}px` : '')};
  `,
  ContentPrice: styled.div<CssProps>`
    display: flex;
    font-size: ${props => (props.priceSize ? `${props.priceSize}px` : '')};
  `,
  PricePercent: styled.div`
    color: #62C655;
    font-weight: 700;
    margin-right: 8px;
  `,
  Price: styled.div`
    font-weight: 600;
  `,
  ContentReview: styled.div<CssProps>`
    display: flex;
    font-size: ${props =>
      props.reviewSize ? `${props.reviewSize}px` : '14px'};
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
