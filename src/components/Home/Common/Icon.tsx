import Image from 'next/image';
import { IconProps } from 'src/types/home/types';

const Icon = ({ src, width, height, onClick }: IconProps) => {
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
