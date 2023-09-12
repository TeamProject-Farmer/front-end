import React, { useEffect, useState } from 'react';
import request from 'src/apis/base';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from 'store/reducers/userSlice';
import axios from 'axios';
import { BASE_URL } from 'src/apis/base';
import { setCookie } from 'src/utils/cookie';
import { setToken } from 'store/reducers/tokenSlice';

const SocialLogin = ({ provider }: { provider: string }) => {
  const [code, setCode] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();

  // 서버에서 Redirect URI로 리다이렉트를 하면서 컴포넌트가 2번 렌더링 되는거 막기 위해서 state가 변경될 때만 socialLogin 함수를 실행
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    setCode(code);
  });

  console.log(code);

  useEffect(() => {
    if (code) socialLogin();
  }, [code]);

  const socialLogin = async () => {
    try {
      const response = await axios(
        `${BASE_URL}/main/login/oauth/${provider}?code=${code}`,
      );
      const userData = response.data;
      const userInfo = {
        socialId: userData.socialId,
        email: userData.email,
        nickname: userData.nickname,
        point: userData.point,
        grade: userData.grade,
        role: userData.role,
        cumulativeAmount: userData.cumulativeAmount,
        memberCoupon: userData.memberCoupon,
      };
      dispatch(setUser(userInfo));
      setToken(userData.accessToken);
      setCookie('refreshToken', userData.refreshToken);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return <></>;
};

export default SocialLogin;
