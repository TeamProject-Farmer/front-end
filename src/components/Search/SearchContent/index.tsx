import styled from '@emotion/styled';

import Plant from '../../Common/Product';

import { SearchContentProps } from 'src/types/search/types';

const SearchContent = ({ searchedWord, searchResult }: SearchContentProps) => {
  const noResult = !searchResult || searchResult.length === 0;

  return (
    <Styled.Wrapper>
      {noResult && (
        <Styled.NoResult>
          {searchResult
            ? `'${searchedWord}'에 대한 검색결과가 존재하지 않습니다`
            : '검색어를 입력해주세요.'}
        </Styled.NoResult>
      )}
      <Styled.Plants>
        {searchResult?.map(plant => (
          <Plant key={plant.productId} {...plant} />
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
