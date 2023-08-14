import styled from '@emotion/styled';
import theme from '@styles/theme';
import { keyframes } from '@emotion/react';

const carousel = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-309px * 10))}
`;

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    overflow-x: hidden;
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
    width: 1920px;
    margin-top: 51px;
    display: flex;
    align-items: center;
    animation: ${carousel} 40s linear infinite;
  `,
};

export default Styled;
