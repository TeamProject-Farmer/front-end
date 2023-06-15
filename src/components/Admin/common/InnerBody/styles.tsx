import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  BodyWrapper: styled.div`
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 0 0 5px 5px;
    padding: 20px 10px;
    height: 60.5vh;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
};

export default Styled;
