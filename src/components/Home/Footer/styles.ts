import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 4px solid ${theme.colors.green1};
  `,
  InfoBox: styled.div`
    margin-left: 118px;
    display: flex;
    gap: 217px;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `,
  Content: styled.div`
    font-weight: 500;
    font-size: 14px;
    color: ${theme.colors.green1};
  `,
  BoldContent: styled.p`
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.green1};
  `,
  AccountBox: styled.div`
    display: flex;
    gap: 4px;
  `,
  Tel: styled.p`
    font-weight: 600;
    font-size: 20px;
    color: ${theme.colors.green1};
  `
}

export default Styled;