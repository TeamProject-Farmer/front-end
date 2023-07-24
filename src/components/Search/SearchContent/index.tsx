import React from 'react';
import styled from '@emotion/styled';
import Plant from '../../Common/Product';

const plants = [];

for (let id = 1; id <= 7; id++) {
  const newPlant = {
    id: id,
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

const SearchContent = () => {
  return (
    <Styled.Wrapper>
      {plants.map(plant => (
        <Plant
        key={plant.id}
        thumbnailImg={plant.thumbnailImg}
        name={plant.name}
        discountRate={plant.discountRate}
        price={plant.price}
        averageStarRating={plant.averageStarRating}
        reviewCount={plant.reviewCount}
      />
      ))}
    </Styled.Wrapper>
  );
};

export default SearchContent;

const Styled = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 37px;
    padding-bottom: 130px;
  `,
};
