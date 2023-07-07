import Layout from '@components/Mypage/Layout/layout';
import ListCheck from '@components/Mypage/Purchases/ListCheck';
import OrderHistory from '@components/Mypage/Purchases/OrderHistory';
import React from 'react';

const index = () => {
  return (
    <Layout>
      <ListCheck />

      <OrderHistory />
    </Layout>
  );
};

export default index;
