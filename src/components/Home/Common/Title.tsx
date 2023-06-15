import styled from '@emotion/styled';

interface ComponentProps {
  title: string;
  color?: string;
}

const Component: React.FC<ComponentProps> = ({ title, color }) => {
  return <StyledComponent color={color}>{title}</StyledComponent>;
};

const StyledComponent = styled.p<{ color?: string }>`
  font-weight: 700;
  font-size: 30px;
  color: ${({ color }) => color || 'black'};
`;

const StyledTitle = styled(Component)<ComponentProps>``;

const Title = ({ title, color }: ComponentProps) => (
  <StyledTitle title={title} color={color} />
);

export default Title;
