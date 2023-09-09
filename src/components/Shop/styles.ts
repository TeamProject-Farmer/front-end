import styled from '@emotion/styled';
import theme from '@styles/theme';

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