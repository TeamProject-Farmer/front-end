import styled from '@emotion/styled';
import { ButtonProps } from 'src/types/order/types';
import theme from '@styles/theme';

const Button = ({ text, bgColor, color, onClick, disabled }: ButtonProps) => {
  return (
    <Styled.Button
      type="button"
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      disabled={disabled}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;

const Styled = {
  Button: styled.button<{ bgColor: string; color: string }>`
    background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
    border-radius: 4px;
    border: 1px solid ${({ bgColor }) => (bgColor ? bgColor : '#000')};
    color: ${({ color }) => (color ? color : '#000')};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 16px;
    transform: translateX(-5px);
    :disabled {
      color: ${theme.colors.gray};
      background-color: #f0f0f0;
      border: 1px solid #ababab;
    }
  `,
};
