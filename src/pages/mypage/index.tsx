import Layout from '@components/Mypage/Layout/layout';
import MyProfile from '@components/Mypage/Main/MyProfile';
import PurchasesList from '@components/Mypage/Main/PurchasesList';
import TextBanner from '@components/Mypage/Main/TextBanner';
import React from 'react';

const index = () => {
  return (
    <Layout>
      <MyProfile />
      <TextBanner />
      <PurchasesList />
    </Layout>
  );
};

export default index;
