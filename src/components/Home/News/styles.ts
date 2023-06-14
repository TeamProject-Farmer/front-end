import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  NewsBox: styled.div`
    margin-top: 56px;
    border: 1px solid ${theme.colors.green1};
    width: 516px;
    height: 527px;
    overflow-y:scroll; 
  `,
  Title: styled.p`
  `,
  Content: styled.p`
  `
}

export default Styled;