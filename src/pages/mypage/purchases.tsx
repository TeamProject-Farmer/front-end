import React, { useState } from 'react';
import Layout from '@components/Mypage/Layout/layout';
import ListCheck from '@components/Mypage/Purchases/ListCheck';
import OrderHistory from '@components/Mypage/Purchases/OrderHistory';
import { useQuery } from '@tanstack/react-query';
import { PurchaseListProps } from 'src/types/mypage/types';
import { getPurchase } from 'src/apis/mypage/purchase';
const index = () => {
  const { data: purchaseArray } = useQuery<PurchaseListProps[]>({
    queryKey: ['purchase'],
    queryFn: getPurchase,
  });
  console.log(purchaseArray);
  const [purchaseList, setPurchaseList] = useState([]);

  return (
    <Layout>
      <ListCheck setPurchaseList={setPurchaseList} />

      <OrderHistory purchaseList={purchaseList} />
    </Layout>
  );
};

export default index;
