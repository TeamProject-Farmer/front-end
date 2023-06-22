import Styled from './styles';
import Title from '../Common/Title';
import Plant from './Plant';

const plants = [];

for (let id = 1; id <= 12; id++) {
  const newPlant = {
    id: id,
    rank: `${id}위`,
    title: '상품명',
    discount: '20%',
    price: '10,000',
    star: '4.8',
    review: '1,105',
    specialPrice: true,
    freeShipping: true,
  };

  plants.push(newPlant);
}

const BestPlant = () => {
  return (
    <Styled.Wrapper>
      <Title title="베스트 식물" />
      <Styled.Descrip>이번 달 가장 인기가 많았던 식물을 확인해보세요.</Styled.Descrip>
      <Styled.Plants>
        {plants.map(plant => (
          <Plant
            key={plant.id}
            rank={plant.rank}
            title={plant.title}
            discount={plant.discount}
            price={plant.price}
            star={plant.star}
            review={plant.review}
            specialPrice={plant.specialPrice}
            freeShipping={plant.freeShipping}
          />
        ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default BestPlant;
