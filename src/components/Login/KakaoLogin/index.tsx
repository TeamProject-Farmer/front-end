import React, { useEffect } from 'react';

const KakaoLogin = () => {
  useEffect(() => {
    const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
    console.log(KAKAO_CODE);
  }, []);

  return <></>;
};

export default KakaoLogin;
