import Image from 'next/image';

interface IconProps {
  src: string;
  width?: number;
  height?: number;
}

const Icon = ({ src, width, height }: IconProps) => {
  return (
    <Image
      src={`assets/images/home/${src}.svg`}
      alt={`${src}Icon`}
      width={typeof width === 'undefined' ? 20 : `${width}`}
      height={typeof height === 'undefined' ? 20 : `${height}`}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Icon;
