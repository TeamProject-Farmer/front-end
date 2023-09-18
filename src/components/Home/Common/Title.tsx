import styled from '@emotion/styled';
import { TitleProps } from 'src/types/home/types';

const Title = ({ title, color }: TitleProps) => (
  <StyledTitle color={color}>{title}</StyledTitle>
);

export default Title;

const StyledTitle = styled.p<{ color?: string }>`
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.064px;
  color: ${({ color }) => color || '#1A1C1E'};
`;
