export interface IBtnProps {
  content: string;
  color?: string;
}

export interface ITitleProps {
  title: string;
  color?: string;
}

export interface IIconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
