import React from 'react'
import { IIconProps } from 'src/types/common/types'

const Icon = ({ name, width, height }: IIconProps) => {
  return (
    <svg
      style={{ pointerEvents: "none" }}
      width={width.toString()}
      height={height.toString()}
      stroke="none"
    >
      <use href={`#${name}`} />
    </svg>
  )
}

export default Icon

export type IconName = 
  | "closeBtn"
  | "menu"
  | "myPage"
  | "search"
  | "cart"
  | "star"
  | "largeBtn_w"
  | "largeBtn"
  | "mediumBtn_w"
  | "mediumBtn"
  | "smallBtn_w"
  | "smallBtn"
  | "moreBtn"
  | "fullStar"
  | "emptyStar"
  | "thumbsUp"
  | "dropDown"
  | "viewMore"
