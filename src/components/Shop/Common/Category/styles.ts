import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 326px;
    margin: 88px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.div`
    width: fit-content;
    height: fit-content;
    color: ${theme.colors.black};
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 41px;
  `,
  Plants: styled.ul`
    width: ${theme.size.mainWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  `,
  List: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  PlantWrapper: styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,
  Name: styled.p`
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
  `,
};

export default Styled;
