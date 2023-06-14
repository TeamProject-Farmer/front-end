import styled from '@emotion/styled';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 1848px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Plants: styled.div`
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 37px;
  `
}

export default Styled;