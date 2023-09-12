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

export const SideBarMenuStyled = {
  Wrapper: styled.div<{isClicked?: boolean} >`
    width: 100%;
    height: 56px;
    display: flex;
    padding: 5px 30px;
    justify-content: space-between;
    color: ${props => (props.isClicked ? '#9CDC1F' : '#8a8a8a')};
    background-color: ${props => (props.isClicked ? '#292929' : '')};
    &:hover {
      background-color: #ffffff15;
      color: #ffffffd4;
    }
  `,
  InnerWrapper: styled.div`
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  MenuText: styled.div`
    display: flex;
    align-items: center;
    margin-left: 18px;
    height: 100%;
  `,
};

export const SubMenuStyled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default Styled;
