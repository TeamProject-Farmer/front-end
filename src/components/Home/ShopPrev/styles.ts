import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 830px;
    position: relative;
    background-color: ${theme.colors.lightGray};
  `,
  ContentBox: styled.div`
    width: 460px;
    height: 550px;
    position: absolute;
    top: 140px;
    right: 370px;
    background: #fff;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,
  Title: styled.p`
    margin-bottom: 37px;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  `,
  SizeBox: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
  `,
  List: styled.li`
    width: 390px;
    height: 120px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}

export default Styled;