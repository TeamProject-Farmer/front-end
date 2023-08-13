import React from 'react';
import styled from '@emotion/styled';
import Plant from '../../Common/Product';
import { IProductProps } from 'src/types/common/types';

const SearchContent = ({ searchedWord, searchResult }) => {
  return (
    <>
      {searchResult && searchResult.length === 0 && (
        <Styled.NoResult>
          <span>'{searchedWord}'</span>에 대한 검색결과가 존재하지 않습니다
        </Styled.NoResult>
      )}
      <Styled.Wrapper>
        {/* 로딩 추가 */}
        {searchResult &&
          searchResult?.map((plant: IProductProps, index: number) => (
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
    </>
  );
};

export default SearchContent;

const Styled = {
  Wrapper: styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 37px;
    padding-bottom: 130px;
  `,
  NoResult: styled.div`
    font-size: 20px;
    span {
      font-size: 22px;
    }
  `,
};
