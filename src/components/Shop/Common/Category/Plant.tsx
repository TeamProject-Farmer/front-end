import Image from 'next/image';
import Styled from './styles';
import { useDispatch } from 'react-redux';
import { setCategoryId } from 'store/reducers/categorySlice';

interface Props {
  name: string;
  src: string;
}
const Plant = (props: Props) => {
  const { name, src } = props;
  const dispatch = useDispatch();
  
  return (
    <Styled.PlantWrapper
      onClick={()=> dispatch(setCategoryId(name))}
      >
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