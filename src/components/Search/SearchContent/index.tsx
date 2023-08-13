import React from 'react';
import styled from '@emotion/styled';
import Plant from '../../Common/Product';
import { ProductProps } from '../../Common/type';

const SearchContent = ({ searchedWord, searchResult }) => {
  return (
    <Styled.Wrapper>
      {searchResult && searchResult.length === 0 && (
        <div>'{searchedWord}'에 대한 검색결과가 존재하지 않습니다</div>
      )}
      {/* 검색결과가 존재하지 않을 때, 로딩 추가 */}
      {searchResult &&
        searchResult?.map((plant: ProductProps, index: number) => (
          <Plant
            key={index}
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
