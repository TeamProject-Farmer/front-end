import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Option from '@assets/images/option.svg';
import { ButtonProps, CircleProps } from 'src/types';

const gridInputWrapperStyles = css`
  display: grid;
  grid-gap: 10px;
  align-items: center;
`;

const iconStyles = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    margin: 50px;
    flex: 0 0 300px;
    text-align: center;
  `,
  Header: styled.span`
    font-size: 30px;
    margin: 20px 0;
    font-weight: 700;
  `,
  SubText: styled.h5`
    font-size: 12px;
    font-weight: 500;
    margin: 20px;
  `,
  SplitLine: styled.div`
    border: 0.5px solid #000000;
    margin-top: 30px;
  `,
  Section: styled.div`
    text-align: left;
    margin-top: 30px;
  `,
  Label: styled.h5`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  InputWrapper: styled.div`
    flex-direction: column;
    margin-top: 35px;
  `,
  EmailGridInputWrapper: styled.div`
    ${gridInputWrapperStyles}
    grid-template-columns: 11fr 0fr 9fr;
  `,
  AddressGridInputWrapper: styled.div`
    ${gridInputWrapperStyles}
    margin-bottom: 10px;
    grid-template-columns: 1fr 1fr;
  `,
  AtSpan: styled.span`
    color: ${theme.colors.gray};
    font-weight: 700;
  `,
  PostButton: styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid ${theme.colors.black};
    background-color: #f7f8fa;
    border-radius: 5px;
    color: ${theme.colors.gray};
    font-size: 16px;
    font-weight: 700;
  `,
  Input: styled.input`
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    padding: 10px;
    border: 1px solid ${theme.colors.black};
    ::placeholder {
      color: #bbbbbb;
    }
    :focus {
      outline: none;
    }
  `,
  InputSubText: styled.h6`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 10px;
    color: ${theme.colors.gray};
  `,
  CheckboxWrapper: styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    border: 1.5px solid #000000;
    padding: 0 15px;
  `,
  Checkbox: styled.input`
    width: 28px;
    height: 28px;
    margin-right: 5px;
  `,
  CheckboxLabel: styled.label`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.gray};
    margin-left: 8px;
  `,
  LoginText: styled.h5`
    font-size: 12px;
    margin-top: 10px;
    color: #000000;

    span {
      font-weight: 700;
      cursor: pointer;
      margin-left: 5px;
    }
  `,
  Gap: styled.div`
    margin-top: 10px;
  `,
  Option: styled.li`
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  `,
  Dropdown: styled.ul`
    width: 120px;
    position: absolute;
    background-color: ${theme.colors.white};
    max-height: 130px;
    overflow-y: auto;
    border: 1px solid #000000;
    border-top: none;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 1;
  `,
  ErrorText: styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #e53c3c;
  `,
  OptionContainer: styled.div``,
  DotContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  Dot: styled(Option)`
    position: absolute;
    cursor: pointer;
    margin-right: 5px;
  `,

  // sns 아이콘
  IconWarrper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 20px;
  `,
  Icon: styled.div<CircleProps>`
    ${iconStyles}
    background-color: ${props => props.color};
    ${props => props.marginRight && `margin-right: ${props.marginRight}px`};
    ${props => props.marginLeft && `margin-left: ${props.marginLeft}px`};
  `,

  // formButton
  Button: styled.button<ButtonProps>`
    width: 100%;
    height: 50px;
    border-radius: ${props => (props.borderColor ? '5px' : '3px')};
    margin-top: 15px;
    background-color: ${props => props.backgroundColor};
    border: ${props =>
      props.borderColor ? `1px solid ${[props.borderColor]}` : null};
  `,
  ButtonLabel: styled.span<ButtonProps>`
    color: ${props => props.color};
    font-size: 16px;
    font-weight: 700;
  `,
};

export default Styled;
