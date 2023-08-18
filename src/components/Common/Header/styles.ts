import styled from '@emotion/styled';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    /* max-width: 1920px; */
  `,
  Header: styled.header`
    padding: 0 400px;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Menu: styled.div``,
  Logo: styled.img`
    width: 150px;
    height: 33.6px;
    flex-shrink: 0;
  `,
  Utils: styled.ul`
    display: flex;
    gap: 20px;
  `,
};

export default Styled;
