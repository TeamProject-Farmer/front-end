import { Styled } from '@components/Mypage/styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { getPurchaseList } from 'src/apis/mypage/purchase';
import OrderStatus from '../OrderStatus';
import SearchOption from '../SearchOption';
import Calendar from '../Calendar';

const ListCheck = ({
  setStartDate,
  setEndDate,
  handleSearchList,
  selectedDateRange,
  setSelectedDateRange,
  orderStatus,
  setOrderStatus,
}) => {
  return (
    <Styled.CheckWrapper>
      <Styled.ListText>구매목록</Styled.ListText>
      <Styled.InfoText>
        기간 검색과 처리 상태 검색을 이용해 지난 주문내역을 조회하실 수
        있습니다.
      </Styled.InfoText>

      <Styled.Checkbox>
        {/* 기간 옵션 검색 */}
        <SearchOption
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setSelectedDateRange={setSelectedDateRange}
        />

        {/* 기간 검색 */}
        <Calendar
          setEndDate={setEndDate}
          setSelectedDateRange={setSelectedDateRange}
          setStartDate={setStartDate}
          handleSearchList={handleSearchList}
          selectedDateRange={selectedDateRange}
        />

        {/* 주문 처리 상태 검색 */}
        <OrderStatus
          setOrderStatus={setOrderStatus}
          orderStatus={orderStatus}
        />
      </Styled.Checkbox>
    </Styled.CheckWrapper>
  );
};

export default ListCheck;
