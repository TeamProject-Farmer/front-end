import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Option from '@assets/images/option.svg';

const Styled = {
  SearchBox: styled.div`
    width: 425px;
    height: 60px;
    background: #d9d9d9;
    border-radius: 29px;

    position: relative;
  `,
  SearchIcon: styled.button`
    position: absolute;
    width: 26.72px;
    height: 25.98px;
    left: 27px;
    top: 17px;
  `,
  LayoutTime: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: #000000;
    display: flex;
  `,
};

export default Styled;
