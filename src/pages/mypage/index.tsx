import Layout from '@components/Mypage/Layout/layout';
import MyProfile from '@components/Mypage/Main/MyProfile';
import PurchasesList from '@components/Mypage/Main/PurchasesList';
import TextBanner from '@components/Mypage/Main/TextBanner';
import React from 'react';

// 마이페이지-메인 하단에 서비스 리스트는 아직 확정된 구현 X (수정 가능성 O)
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
