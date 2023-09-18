import React, { useEffect, useState } from 'react';
import Layout from '@components/Mypage/Layout/layout';
import ListCheck from '@components/Mypage/Purchases/ListCheck';
import OrderHistory from '@components/Mypage/Purchases/OrderHistory';
import { useQuery } from '@tanstack/react-query';
import { OrderListProps } from 'src/types/mypage/types';
import { getPurchaseList } from 'src/apis/mypage/purchase';
const index = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    [Date | null, Date | null]
  >([null, null]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orderStatus, setOrderStatus] = useState('ALL');
  const [purchaseList, setPurchaseList] = useState<OrderListProps[]>([]);
  console.log('startDate');
  // 구매목록 조회
  const handleSearchList = async () => {
    try {
      if (startDate > endDate) {
        alert('정확한 날짜를 입력해주세요.');
        return;
      }

      const res = await getPurchaseList({
        startDate,
        endDate,
        orderStatus,
      });
      setPurchaseList(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <ListCheck
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        selectedDateRange={selectedDateRange}
        setSelectedDateRange={setSelectedDateRange}
        handleSearchList={handleSearchList}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />

      <OrderHistory purchaseList={purchaseList} />
    </Layout>
  );
};

export default index;
