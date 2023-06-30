import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';

const PurchasesList = () => {
  const purchases = [
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    {
      name: '식물명 식물이름',
      review: '리뷰 쓰기',
    },
    // 추후 API 로 불러올 임시 데이터 (6개까지 리스팅 가능)
  ];

  return (
    <Styled.BoxWrapper>
      <Styled.TextBox>
        <Styled.HeaderDiv>
          {/* 더보기 클릭시 구매목록 페이지로 이동 */}
          <Styled.HeaderText>구매목록</Styled.HeaderText>
          <Styled.More />
        </Styled.HeaderDiv>
        <Styled.ListWrapper>
          {/* 6개까지 가능해서 일단 slice 메서드 적용 */}
          {purchases.slice(0, 6).map((purchase, index) => (
            <Styled.ListDiv key={index}>
              {/* 임시 div -> 받아온 img 데이터 렌더링 예상 */}
              <div
                style={{
                  width: 171,
                  height: 171,
                  backgroundColor: theme.colors.gray,
                }}
              />
              <Styled.Title>
                {purchase.name}
                {index}
              </Styled.Title>
              <Styled.ReviewText>{purchase.review}</Styled.ReviewText>
            </Styled.ListDiv>
          ))}
        </Styled.ListWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default PurchasesList;
