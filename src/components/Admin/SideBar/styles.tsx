import styled from '@emotion/styled';
import theme from '@styles/theme';


const Styled = {
  Wrapper: styled.div`
    position: fixed;
    left: 0;
    height: 100vh;
    max-height: 100%;
    width: 240px;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    z-index: 2;
  `,
  Header: styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff; //임시 색상
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `,
};

export default Styled;
