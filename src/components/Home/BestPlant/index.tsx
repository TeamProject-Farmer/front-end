import Styled from './styles';
import Title from '../Common/Title';
import Plant from './Plant';
import { useState, useEffect } from 'react';
import { IPlantProps } from 'src/types/home/types';

// const plants = [];

// for (let id = 1; id <= 12; id++) {
//   const newPlant = {
//     id: id,
//     rank: `${id}위`,
//     title: '상품명',
//     discount: '20%',
//     price: '10,000',
//     star: '4.8',
//     review: '1,105',
//     specialPrice: true,
//     freeShipping: true,
//   };

//   plants.push(newPlant);
// }

const BestPlant = ({ bestPlant }) => {
  // const [plants, setPlants] = useState([]);
  // useEffect(() => {
  //   fetch('http://3.39.150.186:8080/api/main/product/best-product')
  //     .then(res => res.json())
  //     .then(data => {
  //       setPlants(data);
  //     });
  // }, []);

  return (
    <Styled.Wrapper>
      <Title title="베스트 식물" />
      <Styled.Descrip>
        이번 달 가장 인기가 많았던 식물을 확인해보세요.
      </Styled.Descrip>
      <Styled.Plants>
        {bestPlant &&
          bestPlant?.map((plant: IPlantProps, index: number) => (
            <Plant
              key={plant.productId}
              ranking={index + 1}
              productName={plant.productName}
              discountRate={plant.discountRate}
              price={plant.price}
              averageStarRating={plant.averageStarRating}
            />
          ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default BestPlant;
