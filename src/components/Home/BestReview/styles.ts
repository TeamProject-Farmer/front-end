import styled from '@emotion/styled';
import theme from '@styles/theme';


const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ReviewContainer: styled.div`
    width: 1200px;
    height: 830px;
    border: 5px solid ${theme.colors.green1};
    border-right-style: none;
    border-left-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
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

}

export default Styled;