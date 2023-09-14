import theme from '@styles/theme';
import styled from '@emotion/styled';
import handlePrice from 'src/utils/shop/handlePrice';
import { handleCopyClipBoard } from 'src/utils/shop/handleClipBoard';
import { ProductInfoProps } from 'src/types/shop/types';
import TotalStarGauge from '@components/Shop/Common/GaugeBox/TotalStarGauge';
import down from '@assets/images/shop/downloadIcon.svg';
import share from '@assets/images/shop/shareIcon.svg';

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

const Styled = {
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 35px;
    font-weight: 500;
  `,
  ShareButton: styled(share)`
    width: 20px;
    height: 25px;
  `,
  Review: styled.div`
    display: flex;
    align-items: center;
    & > div:last-of-type {
      font-size: 12px;
      font-weight: 600;
      padding-top: 5px;
    }
  `,
  StarWrapper: styled.div`
    width: 115px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
  `,
  PriceWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  OriginPrice: styled.div`
    margin-bottom: 8px;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: #585858;
    & > div:last-of-type {
      margin-left: 8px;
      text-decoration: line-through;
      color: #b3b3b3;
    }
  `,
  CurrentPrice: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 700;
  `,
  SpecialTag: styled.div<{ discountRate: number }>`
    display: flex;
    align-items: center;
    & > button {
      display: ${props => (props.discountRate === 0 ? 'none' : '')};
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 500;
      width: 38px;
      height: 23px;
      border-radius: 3px;
      background-color: #33b822;
      margin-left: 17px;
    }
  `,
  DownLoadBtn: styled.button`
    color: ${theme.colors.white};
    font-size: 16px;
    width: 116px;
    height: 35px;
    border-radius: 5px;
    background-color: #59b941;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  DownLoadIcon: styled(down)`
    margin-left: 6px;
  `,
};

export default ProductInfo;
