import Image from 'next/image';
import { IIconProps } from 'src/types/home/types';

const Icon = ({ src, width, height, onClick }: IIconProps) => {
  return (
    <Image
      src={`assets/images/home/${src}.svg`}
      alt={`${src}Icon`}
      width={width}
      height={height}
      style={{ width: width, height: height}}
      onClick={onClick}
    />
  );
};

export default Icon;
