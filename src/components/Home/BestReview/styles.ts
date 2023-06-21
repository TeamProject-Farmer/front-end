import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ReviewContainer: styled.div`
    height: 830px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 156px;
    color: ${theme.colors.green1};
  `,
  Reviews: styled.div`
    margin-top: 51px;
    display: flex;
    align-items: center;
    gap: 32px;
  `,
};

export default Styled;
