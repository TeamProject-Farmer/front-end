import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    max-height: 1080px;
    height: 100vh;
    position: absolute;
  `,
  ModalBg: styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  `,
  CloseBtn: styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  `,
  Menu: styled.div`
    background-color: #fff;
    width: 327px;
    height: 100vh;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    position: absolute;
    top: 0;
    z-index: 2;
  `,
  FlexBox: styled.div``,
  Title: styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.green1};
    margin-bottom: 20px;
  `,
  Ul: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `,
  Li: styled.li`
    font-size: 13px;
    text-transform: capitalize;
  `,
};

export default Styled;
