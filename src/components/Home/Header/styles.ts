import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div``, // 임시 수정
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
  Header: styled.header`
    padding: 0 200px; // 임시 수정
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Menu: styled.div``,
  Logo: styled.div``,
  Utils: styled.ul`
    display: flex;
    gap: 20px;
  `,
};

export default Styled;
