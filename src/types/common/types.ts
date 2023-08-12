import { IconName } from '@components/Common/Icon';

export interface IIconProps {
  name: IconName | string;
  width: number;
  height: number;
  onClick?: () => void;
}
