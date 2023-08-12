import Layout from '@components/Mypage/Layout/layout';
import MyProfile from '@components/Mypage/Main/MyProfile';
import PurchasesList from '@components/Mypage/Main/PurchasesList';
import TextBanner from '@components/Mypage/Main/TextBanner';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const index = () => {
  const token = useSelector((state: RootState) => state.user.accessToken); // 리덕스 스토어에서 토큰 상태 가져오기
  const router = useRouter();

  // 접근 분기처리 -> 마이페이지 : 로그인 한 유저만 가능
  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, [token, router]);

  if (!token) {
    return null; // 로그인되지 않은 경우 아무 내용도 표시하지 않음
  }

  return (
    <Layout>
      <MyProfile />

      <TextBanner />

      <PurchasesList />
    </Layout>
  );
};

export default index;
