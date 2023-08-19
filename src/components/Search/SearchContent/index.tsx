import React from 'react';
import styled from '@emotion/styled';
import Plant from '../../Common/Product';
import { ProductProps } from 'src/types/common/types';

const SearchContent = ({ searchedWord, searchResult }) => {
  console.log('searchResult', searchResult);
  const noResult = !searchResult || searchResult.length === 0;
  return (
    <Styled.Wrapper>
      {noResult && (
        <Styled.NoResult>
          {!searchResult
            ? '검색결과가 존재하지 않습니다'
            : `'${searchedWord}'에 대한 검색결과가 존재하지 않습니다`}
        </Styled.NoResult>
      )}
      <Styled.Plants>
        {/* 로딩 추가 */}
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
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default SearchContent;

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    min-height: 547px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Plants: styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 37px;
    padding-bottom: 130px;
  `,
  NoResult: styled.div`
    font-size: 15px;
    font-weight: 500;
  `,
};
