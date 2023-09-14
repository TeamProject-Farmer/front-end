import styled from '@emotion/styled';
import theme from '@styles/theme';
import arrow79 from '@assets/images/shop/arrow79.svg';

export const BySizeStyled = {
  Wrapper: styled.div`
    width: 100%;
    min-width: ${theme.size.shopDetailMinWidth};
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
  `,
};

export const FirstCouponStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: ${theme.size.shopDetailMinWidth};
    width: 100vw;
    max-width: 99.7%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3350px;
    padding: 110px;
    border-top: 2px solid #585858;
  `,
  ImageBox: styled.div`
    position: relative;
  `,
  Button: styled.button`
    position: absolute;
    top: 1262px;
    left: 255px;
    border: none;
    border-radius: 10px;
    width: 490px;
    height: 130px;
    background-color: ${theme.colors.green1};
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  `,
  Arrow: styled(arrow79)``,
};

export const EventStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
  VerticalLine: styled.div`
    width: 98.9vw;
    max-width: 100%;
    height: 2px;
    background-color: #585858;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
    margin-top: 110px;
    position: relative;
    height: 2615px;
  `,
  ImageWrapper: styled.div`
    width: inherit;
    height: 1500px;
    background-color: ${theme.colors.lightGray};
    margin-bottom: 72px;
  `,
  ItemWrapper: styled.div`
    width: inherit;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    & > div {
      margin-right: 22.56px;
      margin-bottom: 21.76px;
    }
    & > div:nth-of-type(4n)  {
      margin-right: 0;
    }
  `,
  BlankItem: styled.div`
    width: 280px;
    height: 410px;
    background-color: #ecf9e9;
    margin-bottom: 24px;
  `,
};

export const ShopIndexStyled = {
  Wrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    min-width: ${theme.size.shopDetailMinWidth};
    height: fit-content;
  `,
  EventWrapper: styled.div`
    width: 100%;
    height: 1189px;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
  `,
  SmallEvent: styled.div`
    height: 226px;
    width: 1194px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
    overflow: hidden;
  `,
  NormalEvent: styled.div`
    height: 330px;
    font-size: 64px;
    font-weight: 700;
    width: 1194px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #d9d9d9;
    margin: 25px 0;
  `,
};

export const ShopPageStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
    text-align: center;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
  Title: styled.div`
    height: 130px;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    background-color: #ecf9e9;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    align-items: center;
  `,
};

export const DetailPageStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
};
