import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import request from 'src/apis/base';
import { setUser } from 'store/reducers/userSlice';

const KakaoLogin = () => {
  const [code, setCode] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const kakaoLogin = async () => {
    try {
      const response = await request(`/member/login/oauth/kakao?code=${code}`);
      dispatch(setUser(response.data));

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  // 서버에서 Redirect URI로 리다이렉트를 하면서 컴포넌트가 2번 렌더링 되는거 막기 위해서 state가 변경될 때만 kakaoLogin 함수를 실행
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    setCode(code);
  });

  useEffect(() => {
    if (code) kakaoLogin();
  }, [code]);

  return <></>;
};

export default KakaoLogin;
