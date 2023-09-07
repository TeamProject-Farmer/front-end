import Styled from './styles';
import Title from '../Common/Title';
import Plant from './Plant';
import { Plant as IPlant } from 'src/types/home/types';

const BestPlant = ({ bestPlant }) => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Styled.Wrapper>
      <Title title="베스트 식물" />
      <Styled.Descrip>
        이번 달 가장 인기가 많았던 식물을 확인해보세요.
      </Styled.Descrip>
      <Styled.Plants {...settings}>
        {bestPlant &&
          bestPlant?.map((plant: IPlant, index: number) => (
            <Plant
              key={plant.productId}
              productId={plant.productId}
              ranking={index + 1}
              productName={plant.productName}
              discountRate={plant.discountRate}
              price={plant.price}
              averageStarRating={plant.averageStarRating}
              imgUrl={plant.imgUrl}
            />
          ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default BestPlant;
