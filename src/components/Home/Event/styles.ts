import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Event: styled.div`
    position: relative;
    height: 50px;
    background-color: ${theme.colors.green1};
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CloseBtn: styled.div`
    position: absolute;
    right: 10px;
  `,
}

export default Styled;