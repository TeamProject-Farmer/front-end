import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  OptionWrapper: styled.div`
    width: 916px;
    height: 210px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    padding: 8px;
  `,
  Option: styled.div`
    display: flex;
    margin: 15px 0;
  `,
  InnerBox: styled.div`
    width: 820px;
    height: 50px;
    background: #d9d9d9;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,

  CheckBoxLabel: styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    width: 65px;
  `,
  CheckBoxInput: styled.input`
    position: absolute;
    top: 13px;
    left: 15px;
    appearance: none;
    width: 25px;
    height: 24px;
    border: 1.5px solid #ababab;
    border-radius: 5px;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${theme.colors.gray};
    }
  `,
};

export default Styled;
