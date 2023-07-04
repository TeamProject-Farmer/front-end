import styled from '@emotion/styled';
import theme from '@styles/theme';

const Panel = () => {
  return <Styled.Wrapper></Styled.Wrapper>;
};
const Styled = {
  Wrapper: styled.div`
    display: flex;
  `,
  ImageBox: styled.div`
    width: 548.55px;
    height: 547.55px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
  `,
  ContentWrapper: styled.div``,
};
export default Panel;
