import styled from '@emotion/styled';

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 85px;
  `,
  Plants: styled.ul`
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
  Name: styled.p`
  font-size: 20px;
  margin-top: 15px;
  `
}

export default Styled;