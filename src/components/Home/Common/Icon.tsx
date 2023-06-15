import Image from 'next/image';

interface IIconProps {
  src: string;
  width?: number;
  height?: number;
}

const Icon = ({src, width, height}:IIconProps) => {
  return (
    <Image
    src={`assets/images/home/${src}.svg`}
    alt={`${src}Icon`}
    width={typeof width === 'undefined' ? 20 : `${width}`}
    height={typeof height === 'undefined' ? 20 : `${height}`}
    style={{ objectFit: 'contain' }}
  />
  )
}

export default Icon
