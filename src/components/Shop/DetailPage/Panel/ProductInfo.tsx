import theme from '@styles/theme';
import styled from '@emotion/styled';
import handlePrice from 'src/utils/shop/handlePrice';
import { handleCopyClipBoard } from 'src/utils/shop/handleClipBoard';
import { ProductInfoProps } from 'src/types/shop/types';
import TotalStarGauge from '@components/Shop/Common/GaugeBox/TotalStarGauge';
import { ProductInfoStyled as Styled } from './styles';

const ProductInfo = (props: ProductInfoProps) => {
  const { productId, name, totalStar, starRating, discountRate, price } = props;

  return (
    <>
      <Styled.TitleWrapper>
        <div>{name}</div>
        <Styled.ShareButton
          onClick={() => handleCopyClipBoard(productId, name)}
        />
      </Styled.TitleWrapper>
      <Styled.Review>
        <Styled.StarWrapper>
          <TotalStarGauge star={starRating} size={20} color="#FFB800" />
        </Styled.StarWrapper>
        <div>{totalStar}개의 리뷰</div>
      </Styled.Review>
      <Styled.PriceWrapper>
        <Styled.OriginPrice>
          <div>{discountRate}%</div>
          <div>
            {discountRate === 0
              ? handlePrice(price)
              : handlePrice(price * (100 / (100 - discountRate)))}
          </div>
        </Styled.OriginPrice>
        <Styled.CurrentPrice>
          <Styled.SpecialTag discountRate={discountRate}>
            <div>{handlePrice(price)}~</div>
            <button>특가</button>
          </Styled.SpecialTag>
          <Styled.DownLoadBtn>
            쿠폰받기
            <Styled.DownLoadIcon />
          </Styled.DownLoadBtn>
        </Styled.CurrentPrice>
      </Styled.PriceWrapper>
    </>
  );
};

export default ProductInfo;
