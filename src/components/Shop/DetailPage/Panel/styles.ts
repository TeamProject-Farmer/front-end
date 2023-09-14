import styled from '@emotion/styled';
import theme from '@styles/theme';
import checkIcon from '@assets/images/shop/checkIcon.svg';
import boxIcon from '@assets/images/shop/boxIcon.svg';
import down from '@assets/images/shop/downloadIcon.svg';
import share from '@assets/images/shop/shareIcon.svg';

export const PanelStyled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 712px;
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    align-items: center;
    justify-content: center;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
  InnerBox: styled.div`
    width: ${theme.size.mainWidth};
    display: flex;
    justify-content: space-between;
  `,
  ImageBox: styled.div`
    width: 548.55px;
    height: 547.55px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    margin-right: 56px;
    overflow: hidden;
    .imageStyle {
      width: 548.55px;
      height: 547.55px;
      object-fit: cover;
    }
  `,
  ContentWrapper: styled.div`
    width: 548px;
    color: ${theme.colors.black};
    & > div {
      margin-bottom: 8px;
    }
  `,
  VerticalLine: styled.hr`
    width: 100%;
    height: 1px;
    background-color: #585858;
    border: none;
  `,
};

export const PayInfoStyled = {
  ShipmentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    color: #585858;
    font-weight: 400;
    font-size: 16px;
    & > div {
    }
  `,
  EachShip: styled.div`
    display: flex;
    & > div {
      display: flex;
    }
  `,
  EachShipTitle: styled.div`
    width: 46px;
    margin-bottom: 8px;
  `,
  EachShipContent: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ShipCommonBox: styled.div`
    display: flex;
    font-size: 16px;
    margin-bottom: 6px;
    & > div:first-child {
      font-weight: 600;
      margin-right: 4px;
      color: ${theme.colors.black};
    }
    & > div:nth-child(2) {
      font-weight: 400;
    }
  `,
  ShipCheck: styled.div`
    display: flex;
    margin-top: 11px;
    margin-left: 1px;
    & > div {
      margin-right: 19px;
      font-size: 12px;
      display: flex;
      align-items: center;
      & > svg:first-child {
        margin-right: 6px;
      }
    }
  `,
  CheckIcon: styled(checkIcon)``,
  ExpectShip: styled.div`
    width: 502px;
    height: 41px;
    border-radius: 5px;
    margin-top: 11px;
    margin-bottom: 15px;
    background-color: var(--4, #ecf9e9);
    display: flex;
    align-items: center;
    & > div:nth-child(2) {
      color: #33b822;
      font-size: 16px;
      font-weight: 600;
      margin-right: 5px;
    }
    & > div:last-child {
      color: #010101;
      font-size: 14px;
      font-weight: 300;
    }
  `,

  BoxIcon: styled(boxIcon)`
    margin-left: 14px;
    margin-right: 9px;
  `,
};

export const ProductInfoStyled = {
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