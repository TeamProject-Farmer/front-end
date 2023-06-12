import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Option from '@assets/images/option.svg';

const Styled = {
  Wrapper: styled.div`
    position: fixed;
    left: 0;
    height: 100vh;
    max-height: 100%;
    width: 411px;
    background-color: #292929;
  `,
  HeaderWrapper: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 81px;

    color: #ffffff;
    padding-left: 31px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  `,
  HeaderUser: styled.div`
    margin-top: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
  `,
  HeaderText: styled.div`
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 3px;
  `,
  MenuWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    &:hover {
      background: #156df0;
    }
  `,
  ActiveMenuWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: #156df0;
  `,
  MenuImageBox: styled.div`
    width: 40px;
    height: 40px;
    margin-left: 20px;

    overflow: hidden;
  `,
  MenuText: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;

    margin-left: 45px;
  `,
};

export default Styled;
