import theme from '@styles/theme';
import styled from '@emotion/styled';
import handlePrice from 'src/utils/shop/handlePrice';
import { ProductInfoProps } from 'src/types/shop/types';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import down from '@assets/images/shop/downloadIcon.svg';
import share from '@assets/images/shop/shareIcon.svg';

const ProductInfo = (props: ProductInfoProps) => {
  const {name, totalStar, discountRate, price} = props;
  
  return (
    <>
      <Styled.TitleWrapper>
        <div>{name}</div>
        <Styled.ShareButton></Styled.ShareButton>
      </Styled.TitleWrapper>
      <Styled.Review>
        <Styled.StarWrapper>
          <TotalStarGauge star={totalStar} size={20} color="#FFB800" />
        </Styled.StarWrapper>
        <div>{totalStar}개의 리뷰</div>
      </Styled.Review>
      <Styled.PriceWrapper>
        <Styled.OriginPrice>
          <div>{discountRate}%</div>
          <div>
            {discountRate === 0
              ? handlePrice(price)
              : handlePrice(price * (100 / discountRate))}
          </div>
        </Styled.OriginPrice>
        <Styled.CurrentPrice>
          <div>
            <div>{handlePrice(price)}~</div>
            <button>특가</button>
          </div>
          <button>
            쿠폰받기
            <Styled.DownLoadIcon />
          </button>
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
    & > div:last-child {
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
    & > img {
      width: 19px;
      height: 19.43px;
    }
    & > * > span {
      margin-right: 0px !important;
    }
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
    & > div:last-child {
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
    & > div {
      display: flex;
      align-items: center;
    }

    & > div > button {
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 500;
      width: 38px;
      height: 23px;
      border-radius: 3px;
      background-color: #33b822;
      margin-left: 17px;
    }
    & > button:last-child {
      color: ${theme.colors.white};
      font-size: 16px;
      width: 116px;
      height: 35px;
      border-radius: 5px;
      background-color: #59b941;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  DownLoadIcon: styled(down)`
    margin-left: 6px;
  `,
};

export default ProductInfo;