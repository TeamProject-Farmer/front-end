import Image from 'next/image';
import Styled from './styles';

interface Props {
  name: string;
  src: string;
}
const Plant = (props: Props) => {
  const { name, src } = props;
  
  return (
    <Styled.PlantWrapper>
      <Image
        src={src}
        alt={name}
        width={169}
        height={212}
        style={{ objectFit: 'contain' }}
      />
      <Styled.Name>{name}</Styled.Name>
    </Styled.PlantWrapper>
  );
};

export default Plant;