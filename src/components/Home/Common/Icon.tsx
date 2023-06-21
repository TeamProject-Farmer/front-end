import Image from 'next/image';

interface IconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

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
