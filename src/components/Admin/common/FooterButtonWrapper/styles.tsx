import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  ButtonWrapper: styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
  `,

  SmallButtonBox: styled.button`
    width: 157px;
    height: 52px;
    background: #d9d9d9;
    border-radius: 1px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 25px;
    &:hover {
      box-shadow: 1px 1px 1px 1px #ababab7a;
    }
  `,
};

export default Styled;
