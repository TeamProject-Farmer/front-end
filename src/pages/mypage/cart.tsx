import React from 'react';
import CartList from '@components/Mypage/Cart/CartList';
import OrderCartList from '@components/Mypage/Cart/OrderCartList';
import Layout from '@components/Mypage/Layout/layout';
import { useQuery } from '@tanstack/react-query';
import { getCartList } from 'src/apis/mypage/cart';
import { CartListProps } from 'src/types/mypage/types';
import NoneCartList from '@components/Mypage/Cart/NoneCartList';
import { Styled } from '@components/Mypage/styles';
const index = () => {
  const { data: cartListArray } = useQuery<CartListProps[]>({
    queryKey: ['cartList'],
    queryFn: getCartList,
  });

  return (
    <Layout>
      <Styled.RowWrapper>
        {cartListArray?.length === 0 ? (
          <NoneCartList />
        ) : (
          <>
            <CartList cartListArray={cartListArray} />

            <OrderCartList cartListArray={cartListArray} />
          </>
        )}
      </Styled.RowWrapper>
    </Layout>
  );
};

export default index;
