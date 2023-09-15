import styled from '@emotion/styled';
import theme from '@styles/theme';

const NoProduct = () => {
  return <Styled.Wrapper>해당 번호의 상품은 존재하지 않습니다...</Styled.Wrapper>;
}

const Styled = {
  Wrapper: styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  background-color: ${theme.colors.white};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;;
  font-size: 25px;
  font-size: 25px;
    font-weight: 600;
    color: #606367;
  `,

}

export default NoProduct;