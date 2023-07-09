import React from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { weekdays } from 'src/utils/mypage/weekdays';

// 해당 컴포넌트도 프로그레스바와 동일한 issue

const WeekdaysWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 0.5rem;
`;

const WeekdayLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  gap: 0.1rem;
`;

const Checkbox = styled.input`
  position: relative;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: #d9d9d9;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:checked {
    background-color: ${theme.colors.black};
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
  }
`;

export const WeekdaysCheckbox = () => {
  return (
    <WeekdaysWrapper>
      {weekdays.map((weekday, index) => (
        <WeekdayLabel key={index}>
          {weekday} <Checkbox type="checkbox" />
        </WeekdayLabel>
      ))}
    </WeekdaysWrapper>
  );
};
