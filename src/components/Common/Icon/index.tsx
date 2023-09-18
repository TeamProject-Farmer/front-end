import React from 'react';
import { IconProps } from 'src/types/common/types';

const Icon = ({ name, width, height, onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      width={width.toString()}
      height={height.toString()}
      stroke="none"
    >
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;

export type IconName =
  | 'closeBtn'
  | 'closeBtnG'
  | 'menu'
  | 'myPage'
  | 'search'
  | 'cart'
  | 'star'
  | 'largeBtn_w'
  | 'largeBtn'
  | 'mediumBtn_w'
  | 'mediumBtn'
  | 'smallBtn_w'
  | 'smallBtn'
  | 'moreBtn'
  | 'fullStar'
  | 'emptyStar'
  | 'thumbsUp'
  | 'dropDown'
  | 'viewMore'
  | 'logout';
