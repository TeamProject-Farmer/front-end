import styled from '@emotion/styled';
import theme from '@styles/theme'

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
  `,
  Event: styled.div`
  position:relative;
    height: 50px;
    background-color: ${theme.colors.green};
    color: #FFFFFF;
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
    padding: 0 400px;
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

}

export default Styled;