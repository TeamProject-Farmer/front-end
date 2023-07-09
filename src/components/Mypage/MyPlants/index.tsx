import React from 'react';
import { Styled } from '../styles';
import styled from '@emotion/styled';
import { WeekdaysCheckbox } from './Weekdays';
import ProgressBar from './ProgressBar';

// (임시) 백엔드에서 받아올 데이터, 맥북 기준 3개 정렬 가능(반응형 필요) *타입 선언 전
const plantData = [
  {
    name: '피쉬본',
    image: '이미지 URL',
  },
  {
    name: '다른 식물',
    image: '이미지 URL',
  },
  {
    name: '다른 식물',
    image: '이미지 URL',
  },
  // 추가적인 식물 데이터...
];

const Row = () => {
  return (
    <Styled.BoxWrapper>
      <Styled.CardBox size="1100">
        <Styled.HeaderDiv>
          <Styled.HeaderText>나의 식물들</Styled.HeaderText>
          <div>
            {/* 해당 기능 action 아직 구현 안된거 같음 */}
            <Styled.MyPlantsButton size="0.5">등록하기</Styled.MyPlantsButton>
            <Styled.MyPlantsButton size="2.5">삭제하기</Styled.MyPlantsButton>
          </div>
        </Styled.HeaderDiv>

        <Styled.CardWrapper>
          {plantData.map((plant, index) => (
            <Styled.PlantCard key={index}>
              {/* 임시 이미지 */}
              <Styled.PlantImage />
              <Styled.Title size="0.5">{plant.name}</Styled.Title>
              <ProgressBar />
              <WeekdaysCheckbox />
            </Styled.PlantCard>
          ))}
        </Styled.CardWrapper>
      </Styled.CardBox>
    </Styled.BoxWrapper>
  );
};

export default Row;
