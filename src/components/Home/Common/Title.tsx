import styled from '@emotion/styled';

interface TitleProps {
  title: string;
  color?: string;
}

const Title = ({ title, color }: TitleProps) => (
  <StyledTitle color={color}>{title}</StyledTitle>
);

export default Title;

const StyledTitle = styled.p<{ color?: string }>`
  font-weight: 700;
  font-size: 30px;
  color: ${({ color }) => color || 'black'};
`;
