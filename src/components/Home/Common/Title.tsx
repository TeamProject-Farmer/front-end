import styled from '@emotion/styled';
import { ITitleProps } from 'src/types/home/types';

const Title = ({ title, color }: ITitleProps) => (
  <StyledTitle color={color}>{title}</StyledTitle>
);

export default Title;

const StyledTitle = styled.p<{ color?: string }>`
  font-weight: 700;
  font-size: 30px;
  color: ${({ color }) => color || 'black'};
`;
