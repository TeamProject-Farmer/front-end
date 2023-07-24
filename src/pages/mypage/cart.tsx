import CartList from '@components/Mypage/Cart/CartList';
import OrderCartList from '@components/Mypage/Cart/OrderCartList';
import Layout from '@components/Mypage/Layout/layout';
import React from 'react';

const index = () => {
  return (
    <Layout>
      <CartList />

      <OrderCartList />
    </Layout>
  );
};

export default index;
