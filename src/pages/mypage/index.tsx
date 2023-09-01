import React from 'react';
import Layout from '@components/Mypage/Layout/layout';
import MyProfile from '@components/Mypage/Main/MyProfile';
import PurchasesList from '@components/Mypage/Main/PurchasesList';
import TextBanner from '@components/Mypage/Main/TextBanner';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const index = () => {
  const isLogin = useSelector((state: RootState) => state.user.accessToken);
  // if (!isLogin) {
  //   alert('로그인 후 이용 가능한 서비스입니다.');
  //   return;
  // }
  return (
    <Layout>
      <MyProfile />

      <TextBanner />

      <PurchasesList />
    </Layout>
  );
};

export default index;
