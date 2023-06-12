import styled from '@emotion/styled';
import { ButtonProps } from 'src/types';

export const Styled = {
  Button: styled.button<ButtonProps>`
    width: 100%;
    height: 50px;
    border-radius: ${props => (props.borderColor ? '5px' : '3px')};
    margin-top: 15px;
    background-color: ${props => props.backgroundColor};
    border: ${props =>
      props.borderColor ? `1px solid ${[props.borderColor]}` : null};
  `,
  Label: styled.span<ButtonProps>`
    color: ${props => props.color};
    font-size: 16px;
    font-weight: 700;
  `,
};
