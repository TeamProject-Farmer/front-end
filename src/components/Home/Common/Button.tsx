import styled from '@emotion/styled';

interface ComponentProps {
  content: string;
  color?: string;
}

const Component: React.FC<ComponentProps> = ({ content, color }) => {
  return <StyledComponent color={color}>{content}</StyledComponent>;
};

const StyledComponent = styled.p<{ color?: string }>`
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
  flex-grow: 0;
`;

const StyledButton = styled(Component)<ComponentProps>``;

const Button = ({ content, color }: ComponentProps) => {
  return <StyledButton content={content} color={color} />;
};

export default Button;
