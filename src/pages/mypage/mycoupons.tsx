import Layout from '@components/Mypage/Layout/layout';
import Row from '@components/Mypage/MyCoupons';
import React from 'react';
import { Styled } from '@components/Mypage/styles';
const index = () => {
  return (
    <Layout>
      <Styled.RowWrapper>
        <Row />
      </Styled.RowWrapper>
    </Layout>
  );
};

export default index;
