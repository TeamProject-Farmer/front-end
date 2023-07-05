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
