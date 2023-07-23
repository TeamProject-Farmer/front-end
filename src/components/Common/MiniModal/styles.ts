import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    width: 486px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #000;
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  `,
  Header: styled.div`
    width: 100%;
    height: 56px;
    background-color: #285430;
    position: relative;
  `,
  HeaderTitle: styled.div`
    width: fit-content;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  `,
  CloseButton: styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    right: 18px;
    width: 17px;
    height: 17px;
  `,
  ContentWrapper: styled.div`
    padding: 30px 25px;
  `,
};

export default Styled;
