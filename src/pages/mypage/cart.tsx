import React from 'react';
import CartList from '@components/Mypage/Cart/CartList';
import OrderCartList from '@components/Mypage/Cart/OrderCartList';
import Layout from '@components/Mypage/Layout/layout';
import { useQuery } from 'react-query';
import { getCartList } from 'src/apis/mypage/cart';
import { CartListProps } from 'src/types/mypage/types';

const index = () => {
  const { data: cartListArray } = useQuery<CartListProps[]>(
    'cartList',
    getCartList,
  );

  return (
    <Layout>
      <CartList cartListArray={cartListArray} />

      <OrderCartList cartListArray={cartListArray} />
    </Layout>
  );
};

export default index;
