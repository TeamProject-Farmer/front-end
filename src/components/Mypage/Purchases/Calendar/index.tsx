import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import Search from '@assets/images/mypage/iconSearch.svg';
import { CalendarProps } from 'src/types/mypage/types';
import { Styled } from '@components/Mypage/styles';
import { useFormatDate } from 'src/utils/mypage/formatDate';

const Calendar = ({
  selectedDateRange,
  setSelectedDateRange,
  handleSearchList,
  setEndDate,
  setStartDate,
}: CalendarProps) => {
  // 캘린더에서 시작일 & 종료일 받아오기
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setSelectedDateRange(dates);
    const [start, end] = dates;

    setStartDate(useFormatDate(start));
    setEndDate(useFormatDate(end));
  };

  return (
    <Styled.Box>
      <DatePicker
        showPopperArrow={false}
        fixedHeight
        locale={ko}
        dateFormat="yyyy-MM-dd"
        onChange={handleDateChange}
        startDate={selectedDateRange[0]}
        endDate={selectedDateRange[1]}
        selectsRange
        placeholderText="검색 날짜 범위 선택"
      />
      <Search
        onClick={handleSearchList}
        className="relative cursor-pointer right-10"
      />
    </Styled.Box>
  );
};

export default Calendar;
