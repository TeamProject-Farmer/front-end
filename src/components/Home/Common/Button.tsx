import styled from '@emotion/styled';
import { BtnProps } from 'src/types/home/types';

const Button = ({ content, color }: BtnProps) => {
  return <StyledButton color={color}>{content}</StyledButton>;
};

export default Button;

const StyledButton = styled.p<{ color?: string }>`
  padding: ${({ color }) => (color ? '8px 14px' : '15px 19px')};
  margin: ${({ color }) => color && '7px 0'};
  background-color: ${({ color }) => color || '#707070'};
  color: ${({ color }) => color && '#fff'};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  width: ${({ color }) => color && '80px'};
`;
