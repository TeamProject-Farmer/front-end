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
      width={typeof width === 'undefined' ? 20 : `${width}`}
      height={typeof height === 'undefined' ? 20 : `${height}`}
      style={{ objectFit: 'contain' }}
      onClick={onClick}
    />
  );
};

export default Icon;
