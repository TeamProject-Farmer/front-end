import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1920px;
    height: 876px;
    background-image: url('/assets/images/home/banner.png');
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid pink;
    width: 670px;
    height: 610px;
    padding: 120px 100px;
    position: absolute;
    top: 118px;
    left: 388px;
  `,
  Slogan: styled.p`
    font-size: 90px;
    color: #fff;
  `,
  Description: styled.p`
    font-size: 30px;
    color: ${theme.colors.green1};
  `,
  ShopBtn: styled.p`
    margin-top: 30px;
    flex-grow: 0;
    border: 1px solid ${theme.colors.green1};
    border-radius: 10px;
    width: 169px;
    height: 53px;
    padding: 11px 8px;
    font-size: 20px;
    color: ${theme.colors.green1};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Events: styled.ul`
    position: absolute;
    left: 705px;
    bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 154px;
  `,
  Event: styled.li`
    position: relative;
    font-size: 20px;
    :not(:last-child)::before {
      content: '';
      position: absolute;
      display: block;
      background-color: #000;
      width: 125px;
      height: 2px;
      top: 50%;
      left: 120%;
    }
  `,
};

export default Styled;
