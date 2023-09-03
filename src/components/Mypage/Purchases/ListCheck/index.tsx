import { Styled } from '@components/Mypage/styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { getPurchaseList } from 'src/apis/mypage/purchase';
import OrderStatus from '../OrderStatus';
import SearchOption from '../SearchOption';
import Calendar from '../Calendar';

const ListCheck = ({
  setPurchaseList,
}: {
  setPurchaseList: Dispatch<SetStateAction<[]>>;
}) => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    [Date | null, Date | null]
  >([null, null]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orderStatus, setOrderStatus] = useState('ALL');

  // 구매목록 조회
  const handleSearchList = async () => {
    try {
      if (startDate < endDate) {
        alert('정확한 날짜를 입력해주세요.');
        return; // Alert를 발생시킨 후 함수 실행 중단
      }
      const res = await getPurchaseList({
        startDate,
        endDate,
        orderStatus,
      });
      console.log('구매 목록', res.data);
      setPurchaseList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          handleSearchList={handleSearchList}
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
