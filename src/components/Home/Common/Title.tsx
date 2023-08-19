import styled from '@emotion/styled';
import { TitleProps } from 'src/types/home/types';

const Title = ({ title, color }: TitleProps) => (
  <StyledTitle color={color}>{title}</StyledTitle>
);

export default Title;

const StyledTitle = styled.p<{ color?: string }>`
  font-weight: 700;
  font-size: 30px;
  color: ${({ color }) => color || 'black'};
`;
