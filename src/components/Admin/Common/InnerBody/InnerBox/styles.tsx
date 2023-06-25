import styled from '@emotion/styled';
import theme from '@styles/theme';
import { buttonProps } from '@components/Admin/Type';

const Styled = {
  InnerBoxWrapper: styled.div`
    width: 33.3%;
    height: fit-content;
    display: flex;
    position: relative;
  `,
  InnerBox: styled.div`
    height: 161px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
    margin: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 26px 40px;
    &:hover {
      box-shadow: 2px 2px 2px 2px #ababab;
    }
  `,
  Title: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: 5px;
  `,
  Content: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.colors.black};
  `,
  LastContent: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.colors.darkblue};
  `,

  CheckBoxLabel: styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    position: absolute;
    right: 14px;
    top: 14px;
    position: relative;
  `,
  CheckBoxInput: styled.input<buttonProps>`
    position: absolute;
    top: 13px;
    right: 15px;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid #ababab;
    border-radius: 5px;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${theme.colors.blue};
    }
    border-color: ${props => (props.isChecked ? 'transparent' : '')};
    background-image: ${props =>
      props.isChecked
        ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`
        : ''};
    background-size: ${props => (props.isChecked ? '100% 100% ' : '')};
    background-position: ${props => (props.isChecked ? '50%' : '')};
    background-repeat: ${props => (props.isChecked ? 'no-repeat' : '')};
    background-color: ${props =>
      props.isChecked ? '${theme.colors.blue}' : ''};
  `,
};
export default Styled;
