import Google from '@assets/images/login/google.svg';
import Kakao from '@assets/images/login/kakao.svg';
import Naver from '@assets/images/login/naver.svg';

// const address = 'http://localhost:3000';
const address = 'https://front-end-farmer-shop.vercel.app';

// 카카오
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const KAKAO_REDIRECT_URI = `${address}/login/kakao`; // 추후 배포 주소로 변경 예정
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

// 네이버
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_API_KEY;
const NAVER_REDIRECT_URI = `${address}/login/naver`;
// const STATE = 'Farmer';
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=state&redirect_uri=${NAVER_REDIRECT_URI}`;

// 구글
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_REDIRECT_URI = `${address}/login/google`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

// 소셜로그인 컴포넌트 data
export const socialLoginData = [
  { icon: Google, url: GOOGLE_AUTH_URL },
  { icon: Kakao, url: KAKAO_AUTH_URL },
  { icon: Naver, url: NAVER_AUTH_URL },
];
