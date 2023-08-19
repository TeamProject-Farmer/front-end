import React from 'react';
import { Styled } from '@components/Mypage/styles';
import { SearchOptionProps } from 'src/types/mypage/types';
import { timeIntervals } from 'src/utils/mypage/orderTimeList';
import { useFormatDate } from 'src/hooks/formatDate';

const SearchOption = ({
  setSelectedDateRange,
  setStartDate,
  setEndDate,
}: SearchOptionProps) => {
  const handleIntervalClick = (interval: string) => {
    const today = Date.now();
    let start: Date | null = new Date(today);
    let end: Date | null = null;

    switch (interval) {
      case '1주일':
        start = new Date(today - 7 * 24 * 60 * 60 * 1000);
        end = new Date(today);
        break;
      case '1개월':
        end = new Date(today);
        start.setMonth(start.getMonth() - 1);
        break;
      case '3개월':
        end = new Date(today);
        start.setMonth(start.getMonth() - 3);
        break;
      case '6개월':
        end = new Date(today);
        start.setMonth(start.getMonth() - 6);
        break;
      default:
        end = new Date(today);
    }

    setSelectedDateRange([start, end]);
    setStartDate(useFormatDate(end));
    setEndDate(useFormatDate(start));
  };

  return (
    <>
      {timeIntervals.map(interval => (
        <Styled.InfoText
          onClick={() => handleIntervalClick(interval)}
          key={interval}
        >
          {interval}
        </Styled.InfoText>
      ))}
    </>
  );
};

export default SearchOption;
