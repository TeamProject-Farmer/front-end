import React, { useState } from 'react';
import Layout from '@components/Mypage/Layout/layout';
import ListCheck from '@components/Mypage/Purchases/ListCheck';
import OrderHistory from '@components/Mypage/Purchases/OrderHistory';

const index = () => {
  const [purchaseList, setPurchaseList] = useState([]);

  return (
    <Layout>
      <ListCheck setPurchaseList={setPurchaseList} />

      <OrderHistory purchaseList={purchaseList} />
    </Layout>
  );
};

export default index;
