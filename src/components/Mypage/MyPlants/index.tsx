import React from 'react';
import ProgressBar from './ProgressBar';
import { WeekdaysCheckbox } from './Weekdays';
import { Styled } from '../styles';
import { plantData } from 'src/utils/mypage/myPlantsData';

// ** 해당 페이지 API는 백엔드에서 아직 구현되지 않아 다음 배포 때 구현 예정입니다 ** //
// ** 프론트 구현은 완성된 상태 ** //

const Row = () => {
  return (
    <Styled.BoxWrapper>
      <Styled.CardBox size="1100">
        <Styled.HeaderDiv>
          <Styled.HeaderText>나의 식물들</Styled.HeaderText>
          <div>
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
