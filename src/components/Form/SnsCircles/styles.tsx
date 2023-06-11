import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CircleProps } from 'src/types';

const iconStyles = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
export const IconWarrper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;
export const Icon = styled.div<CircleProps>`
  ${iconStyles}
  background-color: ${props => props.color};
  ${props => props.marginRight && `margin-right: ${props.marginRight}px`};
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}px`};
`;
