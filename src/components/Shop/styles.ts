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